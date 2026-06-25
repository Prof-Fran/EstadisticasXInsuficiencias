// =============================================================================
// js/app.js — Lógica de UI, Controladores de Eventos e Inicialización
// =============================================================================

// =============================================================================
// 1. Referencias del DOM
// =============================================================================
var meetingSelector       = document.getElementById('meeting-selector');
var tabButtons            = document.querySelectorAll('.tab-btn');
var groupSelector         = document.getElementById('group-selector');
var insightsText          = document.getElementById('insights-text');
var comparativeContainer  = document.getElementById('comparative-cards-container');
var exportPdfBtn          = document.getElementById('export-pdf-btn');
var printReportTitle      = document.getElementById('print-report-title');

// Tarjetas de Resumen Global
var statTotalGrupos            = document.getElementById('total-grupos');
var statTotalSinBajas          = document.getElementById('total-sin-bajas');
var statPctCriticosGrado       = document.getElementById('pct-criticos-grado');
var statTotalAusentismoCritico = document.getElementById('total-ausentismo-critico');

// Tarjeta de Enfoque
var focusGroupTitle   = document.getElementById('focus-group-title');
var focusGroupTotal   = document.getElementById('focus-group-total');
var focusValSuccess   = document.getElementById('val-success');
var focusValWarning   = document.getElementById('val-warning');
var focusValDanger    = document.getElementById('val-danger');
var chartCenterValue  = document.getElementById('chart-center-value');

// Panel de Ausentismo Dinámico
var absencesBoxTitle   = document.getElementById('absences-box-title');
var absenceValRegular  = document.getElementById('absence-val-regular');
var absenceValModerado = document.getElementById('absence-val-moderado');
var absenceValCritico  = document.getElementById('absence-val-critico');
var metricItems        = document.querySelectorAll('.focus-metric-item');

// =============================================================================
// 2. Variables de Control de Estado
// =============================================================================
var currentGradeKey      = "7";         // Nivel inicial
var currentMeetingKey    = "abril";     // Reunión inicial
var activeGroupName      = "";
var activeMetricSelected = "sinBajas";  // Categoría de métrica seleccionada

// =============================================================================
// 3. Interactividad de los Botones de Métricas (Filtro de Ausentismo)
// =============================================================================
function setupMetricInteractivity() {
  metricItems.forEach(function(item) {
    item.addEventListener('click', function() {
      activeMetricSelected = item.getAttribute('data-metric');
      updateMetricVisuals();
      updateAbsencesBreakdownBlock();
    });
  });
}

function updateMetricVisuals() {
  metricItems.forEach(function(item) {
    var isSelected = item.getAttribute('data-metric') === activeMetricSelected;
    if (isSelected) {
      item.classList.add('selected-active');
      item.setAttribute('aria-pressed', 'true');
    } else {
      item.classList.remove('selected-active');
      item.setAttribute('aria-pressed', 'false');
    }
  });
}

// =============================================================================
// 4. Actualización del Panel de Desglose de Ausentismo
// =============================================================================
function updateAbsencesBreakdownBlock() {
  var gradeData = meetingsData[currentMeetingKey].data[currentGradeKey];
  var group = gradeData.groups.find(function(g) { return g.name === activeGroupName; });
  if (!group || !group.distribucionInasistencias) return;

  var categoryLabel = "Sin asignaturas pendientes (Sin bajas)";
  if (activeMetricSelected === "entre1y3")   categoryLabel = "Rendimiento medio (1 a 3 bajas)";
  if (activeMetricSelected === "cuatroOMas") categoryLabel = "Rendimiento crítico (4 o más bajas)";

  absencesBoxTitle.textContent = "Niveles de Ausentismo en: " + categoryLabel;

  var dataFaltas = group.distribucionInasistencias[activeMetricSelected];
  if (dataFaltas) {
    absenceValRegular.textContent  = dataFaltas.regular  + " Alumn.";
    absenceValModerado.textContent = dataFaltas.moderado + " Alumn.";
    absenceValCritico.textContent  = dataFaltas.critico  + " Alumn.";
  }
}

// =============================================================================
// 5. Cargar los Detalles de un Grupo Específico en el Panel de Enfoque
// =============================================================================
function loadGroupDetails(groupName) {
  var gradeData = meetingsData[currentMeetingKey].data[currentGradeKey];
  var group = gradeData.groups.find(function(g) { return g.name === groupName; });

  if (!group) return;

  activeGroupName = groupName;
  var totalStudents = group.sinBajas + group.entre1y3 + group.cuatroOMas;

  // Actualizar interfaz con datos del grupo
  focusGroupTitle.textContent    = "Análisis de " + group.name;
  focusGroupTotal.textContent    = "Total: " + totalStudents + " Alumnos";
  focusValSuccess.textContent    = group.sinBajas;
  focusValWarning.textContent    = group.entre1y3;
  focusValDanger.textContent     = group.cuatroOMas;
  chartCenterValue.textContent   = totalStudents;

  // Generar gráficos
  generateCircularChart(group.sinBajas, group.entre1y3, group.cuatroOMas);

  document.getElementById('insufficiencies-chart-title').textContent =
    "Cantidad de Insuficiencias por Asignatura - Grupo " + groupName;
  generateBarChart(group.insuficiencias || {});

  // Sincronizar el dropdown de grupos
  groupSelector.value = groupName;

  // Actualizar título del reporte para impresión
  printReportTitle.textContent =
    meetingsData[currentMeetingKey].title + " - Grupo " + groupName + " (" + gradeData.name + ")";

  // Sincronizar estado visual de métricas y bloque de ausentismo
  updateMetricVisuals();
  updateAbsencesBreakdownBlock();

  // Sincronizar clases activas en el grid comparativo inferior
  var comparativeCards = comparativeContainer.querySelectorAll('.comparative-card');
  comparativeCards.forEach(function(card) {
    if (card.getAttribute('data-group') === groupName) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// =============================================================================
// 6. Renderizar un Grado Académico Completo (Actualiza Todo el Dashboard)
// =============================================================================
function renderGrade(gradeKey) {
  currentGradeKey = gradeKey;
  var gradeData = meetingsData[currentMeetingKey].data[gradeKey];
  if (!gradeData) return;

  // Restaurar el diagnóstico guardado del usuario (o dejar placeholder vacío)
  insightsText.innerHTML = customInsights[currentMeetingKey][gradeKey];

  // Calcular estadísticas generales del grado
  var numGroups               = gradeData.groups.length;
  var totalSinBajas           = 0;
  var totalCriticos           = 0;
  var totalAlumnosGrado       = 0;
  var totalCriticoAusentismo  = 0;

  gradeData.groups.forEach(function(group) {
    totalSinBajas     += group.sinBajas;
    totalCriticos     += group.cuatroOMas;
    totalAlumnosGrado += group.sinBajas + group.entre1y3 + group.cuatroOMas;

    if (group.distribucionInasistencias) {
      totalCriticoAusentismo +=
        group.distribucionInasistencias.sinBajas.critico   +
        group.distribucionInasistencias.entre1y3.critico   +
        group.distribucionInasistencias.cuatroOMas.critico;
    }
  });

  var pctCriticosGrado = totalAlumnosGrado > 0
    ? ((totalCriticos / totalAlumnosGrado) * 100).toFixed(1) + '%'
    : '0.0%';

  var pctSinBajasGrado = totalAlumnosGrado > 0
    ? ((totalSinBajas / totalAlumnosGrado) * 100).toFixed(1) + '%'
    : '0.0%';

  var pctAusentismoCriticoGrado = totalAlumnosGrado > 0
    ? ((totalCriticoAusentismo / totalAlumnosGrado) * 100).toFixed(1) + '%'
    : '0.0%';

  // Escribir estadísticas globales en el Bento
  statTotalGrupos.textContent            = numGroups;
  statTotalSinBajas.textContent          = pctSinBajasGrado;
  statPctCriticosGrado.textContent       = pctCriticosGrado;
  statTotalAusentismoCritico.textContent = pctAusentismoCriticoGrado;

  // Poblar el desplegable de grupos
  groupSelector.innerHTML = '';
  gradeData.groups.forEach(function(group) {
    var option       = document.createElement('option');
    option.value     = group.name;
    option.textContent = "Grupo " + group.name;
    groupSelector.appendChild(option);
  });

  // Poblar el grid comparativo inferior
  comparativeContainer.innerHTML = '';
  gradeData.groups.forEach(function(group, index) {
    var total      = group.sinBajas + group.entre1y3 + group.cuatroOMas;
    var pctSuccess = ((group.sinBajas   / total) * 100).toFixed(0);
    var pctWarning = ((group.entre1y3   / total) * 100).toFixed(0);
    var pctDanger  = ((group.cuatroOMas / total) * 100).toFixed(0);

    var card = document.createElement('div');
    card.className = 'comparative-card fade-switch';
    card.setAttribute('data-group', group.name);
    card.style.animationDelay = (index * 0.03) + 's';

    card.innerHTML =
      '<div class="comparative-card-header">' +
        '<span class="comparative-card-title">' + group.name + '</span>' +
        '<span class="comparative-card-badge">' + total + ' Alum.</span>' +
      '</div>' +
      '<div class="comparative-mini-bar" title="Proporción: ' + pctSuccess + '% Sin Bajas | ' + pctWarning + '% 1-3 Bajas | ' + pctDanger + '% 4+ Bajas">' +
        '<div class="mini-bar-segment mini-bar-success" style="width: ' + pctSuccess + '%"></div>' +
        '<div class="mini-bar-segment mini-bar-warning" style="width: ' + pctWarning + '%"></div>' +
        '<div class="mini-bar-segment mini-bar-danger"  style="width: ' + pctDanger  + '%"></div>' +
      '</div>';

    card.addEventListener('click', function() {
      loadGroupDetails(group.name);
    });

    comparativeContainer.appendChild(card);
  });

  // Cargar el primer grupo por defecto
  if (gradeData.groups.length > 0) {
    loadGroupDetails(gradeData.groups[0].name);
  }
}

// =============================================================================
// 7. Event Listeners
// =============================================================================

// Pestañas de Grado
tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('active')) return;

    tabButtons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');

    var gradeKey = button.getAttribute('data-tab');

    // Resetear la métrica seleccionada al cambiar de pestaña
    activeMetricSelected = "sinBajas";

    // Animación de transición suave
    var animElements = [
      insightsText,
      comparativeContainer,
      document.querySelector('.analytics-focus-card'),
      document.querySelector('.subject-insufficiencies-card')
    ];
    animElements.forEach(function(el) { if (el) el.classList.add('fade-switch'); });

    renderGrade(gradeKey);

    setTimeout(function() {
      animElements.forEach(function(el) { if (el) el.classList.remove('fade-switch'); });
    }, 400);
  });
});

// Selector de Grupo (Dropdown)
groupSelector.addEventListener('change', function(e) {
  loadGroupDetails(e.target.value);
});

// Selector de Reuniones
meetingSelector.addEventListener('change', function(e) {
  currentMeetingKey = e.target.value;

  var meetingMetadata = meetingsData[currentMeetingKey];
  document.getElementById('dashboard-badge').textContent = meetingMetadata.badge;
  document.getElementById('dashboard-title').textContent = meetingMetadata.title;
  document.getElementById('dashboard-desc').textContent  = meetingMetadata.subtitle;

  var printReportSubtitle = document.querySelector('.print-header-only p');
  if (printReportSubtitle) {
    printReportSubtitle.textContent = meetingMetadata.printSubtitle;
  }

  // Refrescar el dashboard completo con los datos de la reunión seleccionada
  renderGrade(currentGradeKey);
});

// Diagnóstico editable — guardar el texto del usuario
insightsText.addEventListener('input', function(e) {
  customInsights[currentMeetingKey][currentGradeKey] = e.target.innerHTML;
});

// Exportar a PDF / Imprimir
exportPdfBtn.addEventListener('click', function() {
  var originalTitle = document.title;
  var gradeName     = meetingsData[currentMeetingKey].data[currentGradeKey].name;
  var meetingNameClean = meetingsData[currentMeetingKey].title
    .replace(/\s+/g, '_')
    .replace(/°/g, '');

  document.title = 'Resultados_' + meetingNameClean + '_Grupo_' + activeGroupName +
    '_(' + gradeName.replace(/\s+/g, '_') + ')_2026';

  window.print();

  document.title = originalTitle;
});

// =============================================================================
// 8. Transformación Barras ↔ Dona para Exportación PDF
// =============================================================================
window.addEventListener('beforeprint', function() {
  // Alto contraste del donut de alumnos para fondo blanco
  if (activeDonutChart) {
    activeDonutChart.data.datasets[0].borderColor = '#ffffff';
    activeDonutChart.update('none');
  }

  // Transformar el gráfico de barras en dona usando los datos del grupo activo
  var gradeData = meetingsData[currentMeetingKey].data[currentGradeKey];
  var group = gradeData.groups.find(function(g) { return g.name === activeGroupName; });
  if (group) {
    generateBarChart(group.insuficiencias || {}, true);
  }
});

window.addEventListener('afterprint', function() {
  // Restaurar bordes del donut de alumnos al fondo oscuro
  if (activeDonutChart) {
    activeDonutChart.data.datasets[0].borderColor = '#0b0b10';
    activeDonutChart.update('none');
  }

  // Restaurar las barras horizontales en pantalla
  var gradeData = meetingsData[currentMeetingKey].data[currentGradeKey];
  var group = gradeData.groups.find(function(g) { return g.name === activeGroupName; });
  if (group) {
    generateBarChart(group.insuficiencias || {}, false);
  }
});

// =============================================================================
// 9. Inicialización — Carga por Defecto al Cargar el DOM
// =============================================================================
document.addEventListener('DOMContentLoaded', function() {
  setupMetricInteractivity();
  renderGrade("7");
});

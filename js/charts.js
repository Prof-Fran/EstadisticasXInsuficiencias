// =============================================================================
// js/charts.js — Funciones de Renderizado de Gráficos con Chart.js
// =============================================================================

// Instancias activas de los gráficos (accesibles globalmente para afterprint/beforeprint)
var activeDonutChart = null;
var activeBarChart   = null;

// Registrar plugin de etiquetas de Chart.js (se requiere antes de crear cualquier gráfico)
Chart.register(ChartDataLabels);

// =============================================================================
// 1. Gráfico Circular (Donut) — Distribución de Alumnos por Estado Académico
// =============================================================================
function generateCircularChart(sinBajas, entre1y3, cuatroOMas) {
  var ctx = document.getElementById('groupPieChart').getContext('2d');

  // Destruir gráfico previo para evitar superposiciones
  if (activeDonutChart) {
    activeDonutChart.destroy();
  }

  activeDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Sin Bajas', '1-3 Bajas', '4+ Bajas'],
      datasets: [{
        data: [sinBajas, entre1y3, cuatroOMas],
        backgroundColor: [
          '#00f2fe', // Cian Neón — Sin Bajas
          '#f59e0b', // Naranja Advertencia — 1-3 Bajas
          '#ff007f'  // Rosa Crítico — 4+ Bajas
        ],
        borderColor: '#0b0b10',
        borderWidth: 2,
        hoverOffset: 12
      }]
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        datalabels: {
          color: function(context) {
            return context.dataIndex === 2 ? '#ffffff' : '#07070a';
          },
          font: { family: 'Outfit', weight: '800', size: 11 },
          formatter: function(value, context) {
            var total = context.dataset.data.reduce(function(a, b) { return a + b; }, 0);
            if (value === 0) return '';
            return ((value / total) * 100).toFixed(0) + '%';
          }
        },
        tooltip: {
          backgroundColor: 'rgba(18, 18, 26, 0.95)',
          titleColor: '#ffffff',
          titleFont: { family: 'Outfit', size: 14, weight: 'bold' },
          bodyFont: { family: 'Inter', size: 12 },
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          padding: 10,
          cornerRadius: 10,
          displayColors: true,
          boxWidth: 8,
          boxHeight: 8,
          boxPadding: 6,
          callbacks: {
            label: function(context) {
              var label      = context.label || '';
              var value      = context.raw || 0;
              var total      = context.dataset.data.reduce(function(a, b) { return a + b; }, 0);
              var percentage = ((value / total) * 100).toFixed(1);
              return ' ' + label + ': ' + value + ' alumnos (' + percentage + '%)';
            }
          }
        }
      },
      animation: {
        animateScale:  true,
        animateRotate: true,
        duration: 800,
        easing: 'easeOutQuart'
      }
    }
  });
}

// =============================================================================
// 2. Gráfico DUAL — Barras Horizontales (pantalla) / Dona (PDF impresión)
//    Una única función controla ambos modos según el parámetro isPrintMode.
// =============================================================================

// Paleta de colores para los segmentos de la dona en impresión (hasta 15)
var donutPalette = [
  '#ff007f', '#b5179e', '#7209b7', '#560bad', '#480ca8',
  '#3a0ca3', '#3f37c9', '#4361ee', '#4895ef', '#4cc9f0',
  '#00f2fe', '#00e5ff', '#00c6ff', '#00a8ff', '#0097e6'
];

// Abreviaciones de asignaturas para etiquetas compactas en la dona
var subjectAbbreviations = {
  "Biologia": "Biología",
  "Com Visual": "Com. Vis.",
  "Com. Visual": "Com. Vis.",
  "Ed Fisica": "Ed. Física",
  "Ed Musical": "Ed. Mus.",
  "Geografia": "Geografía",
  "Historia": "Historia",
  "Id Esp": "Id. Esp.",
  "Ingles": "Inglés",
  "Matematicas": "Matemáticas",
  "Matemáticas": "Matemáticas",
  "Matemática": "Matemáticas",
  "Informática": "Informática",
  "Informatica": "Informática",
  "Cs. Fis/Quim": "Cs. Fis/Quim",
  "Cs. Fis/Quim.": "Cs. Fis/Quim",
  "Ciudadana": "Ciudadana",
  "Fisica": "Física",
  "Id Español": "Id. Esp.",
  "Literatura": "Literatura",
  "Quimica": "Química",
  "Atronomia": "Astronomía",
  "Deporte y Rec": "Dep. Rec.",
  "Part Juvenil": "Part. Juv.",
  "Filosofia": "Filosofía",
  "Arg y debate": "Arg. Deb.",
  "Patrimonio": "Patrimonio"
};

/**
 * generateBarChart(data, isPrintMode)
 *
 * Función dual que controla la sección de insuficiencias por asignatura.
 * - isPrintMode = false (default): dibuja barras horizontales en pantalla.
 * - isPrintMode = true           : dibuja una dona para el PDF y genera la
 *                                  leyenda HTML en #print-custom-legend.
 *
 * El canvas usado es SIEMPRE #subjectBarChart (el único canvas de la sección).
 * Al cambiar de modo se destruye el gráfico anterior y se recrea desde cero.
 */
function generateBarChart(data, isPrintMode) {
  if (isPrintMode === undefined) isPrintMode = false;

  var canvas = document.getElementById('subjectBarChart');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  // 1. Destruir el gráfico anterior
  if (activeBarChart) {
    activeBarChart.destroy();
    activeBarChart = null;
  }

  // Filtrar solo asignaturas con valor > 0 para el modo dona
  var allLabels  = Object.keys(data);
  var allValues  = Object.values(data);
  var labels, values;

  if (isPrintMode) {
    // Dona: solo segmentos con insuficiencias reales
    labels = allLabels.filter(function(k) { return data[k] > 0; });
    values = labels.map(function(k) { return data[k]; });
  } else {
    // Barras: todos los datos tal cual
    labels = allLabels;
    values = allValues;
  }

  if (labels.length === 0) {
    // Limpiar la leyenda si no hay datos
    var legendContainer = document.getElementById('print-custom-legend');
    if (legendContainer) legendContainer.innerHTML = '';
    return;
  }

  if (isPrintMode) {
    // ── MODO IMPRESIÓN: Dona ───────────────────────────────────────────────
    var colors = labels.map(function(_, i) {
      return donutPalette[i % donutPalette.length];
    });

    activeBarChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        cutout: '50%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            color: '#ffffff',
            font: { family: 'Outfit', weight: '800', size: 10 },
            textAlign: 'center',
            formatter: function(value, context) {
              if (value === 0) return '';
              var label = context.chart.data.labels[context.dataIndex];
              var abbr  = subjectAbbreviations[label] || label;
              return abbr + '\n' + value;
            }
          }
        },
        animation: { duration: 0 }  // Sin animación — el PDF captura en caliente
      }
    });

    // 2. Generar leyenda HTML debajo de la dona
    var legendEl = document.getElementById('print-custom-legend');
    if (legendEl) {
      legendEl.innerHTML = '';
      labels.forEach(function(label, i) {
        var val   = values[i];
        var color = colors[i];
        var item  = document.createElement('div');
        item.className = 'print-legend-item';
        item.innerHTML =
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="width:10px;height:10px;border-radius:50%;' +
                   'background:' + color + ';display:inline-block;flex-shrink:0"></span>' +
            '<span>' + (subjectAbbreviations[label] || label) + '</span>' +
          '</div>' +
          '<strong style="color:' + color + '">' + val + '</strong>';
        legendEl.appendChild(item);
      });
    }

  } else {
    // ── MODO PANTALLA: Barras horizontales ────────────────────────────────
    var gradient = ctx.createLinearGradient(0, 0, canvas.width || 500, 0);
    gradient.addColorStop(0,   '#ff007f');
    gradient.addColorStop(0.5, '#b5179e');
    gradient.addColorStop(1,   '#7f00ff');

    activeBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Insuficiencias',
          data: values,
          backgroundColor: gradient,
          hoverBackgroundColor: 'rgba(255, 0, 127, 0.85)',
          borderColor: '#ff007f',
          borderWidth: 1.5,
          borderRadius: 6,
          borderSkipped: false,
          barThickness: 14
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
            ticks: { color: '#9ca3af', font: { family: 'Inter', size: 11 }, stepSize: 1, precision: 0 },
            suggestedMax: 10
          },
          y: {
            grid: { display: false },
            ticks: { color: '#ffffff', font: { family: 'Outfit', size: 12, weight: '600' } }
          }
        },
        plugins: {
          legend: { display: false },
          datalabels: {
            color: '#ffffff',
            anchor: 'end',
            align: 'right',
            offset: 8,
            font: { family: 'Outfit', weight: '700', size: 11 },
            formatter: function(value) {
              return value > 0 ? value : '';
            }
          },
          tooltip: {
            backgroundColor: 'rgba(18, 18, 26, 0.95)',
            titleColor: '#ffffff',
            titleFont: { family: 'Outfit', size: 13, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 12 },
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 10,
            displayColors: false,
            callbacks: {
              label: function(context) {
                var val = context.raw || 0;
                return val === 1 ? ' 1 insuficiencia' : ' ' + val + ' insuficiencias';
              }
            }
          }
        },
        animation: { duration: 800, easing: 'easeOutQuart' }
      }
    });

    // Limpiar la leyenda al restaurar el modo pantalla
    var legendEl2 = document.getElementById('print-custom-legend');
    if (legendEl2) legendEl2.innerHTML = '';
  }
}


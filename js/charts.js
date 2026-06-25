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
// 2. Gráfico de Barras Horizontales — Insuficiencias por Asignatura
// =============================================================================
function generateBarChart(insuficiencias) {
  var canvas = document.getElementById('subjectBarChart');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  // Destruir gráfico previo para evitar superposiciones
  if (activeBarChart) {
    activeBarChart.destroy();
  }

  var subjects = Object.keys(insuficiencias);
  var values   = Object.values(insuficiencias);

  if (subjects.length === 0) return;

  // Gradiente de izquierda a derecha: rosa crítico → violeta/púrpura
  var gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width || 500, 0);
  gradient.addColorStop(0,   '#ff007f');
  gradient.addColorStop(0.5, '#b5179e');
  gradient.addColorStop(1,   '#7f00ff');

  activeBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: subjects,
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
}

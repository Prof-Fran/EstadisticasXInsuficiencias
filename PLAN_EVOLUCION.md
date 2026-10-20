# Plan de Acción — Función "Estudiar Evolución"

## Contexto del Proyecto

El proyecto es un dashboard web estático (HTML + JS + CSS) que muestra estadísticas académicas de reuniones docentes. Usa **Chart.js** para gráficos y los datos están organizados en `js/data.js` dentro de un objeto `meetingsData` con cuatro reuniones: `abril`, `agosto`, `octubre` y `final`.

La nueva función permitirá seleccionar **un grupo** y **dos reuniones diferentes** para ver cómo evolucionó entre ellas: bajas académicas, insuficiencias por asignatura y ausentismo.

---

## Arquitectura de la Función

```
[Botón "Estudiar Evolución"]
  → abre Modal/Panel lateral
    → Selector de Grupo (ej: 7°1)
    → Selector Reunión A (ej: Abril)
    → Selector Reunión B (ej: Agosto)
    → [Botón Comparar]
      → Vista de comparación:
          ├── KPIs con flechas de tendencia (↑↓)
          ├── Gráfico de barras agrupadas (insuficiencias A vs B)
          └── Gráfico donut dual (distribución alumnos A vs B)
```

---

## FASE 1 — Preparación y Estructura UI

> Objetivo: Agregar el botón y crear el panel/modal de evolución sin lógica aún.

### Tareas

- `[ ]` **1.1** Agregar botón **"Estudiar Evolución"** en el `header` de `index.html`, junto al selector de reuniones. Debe tener ícono de tendencia (gráfico de línea ascendente/descendente).
- `[ ]` **1.2** Crear el **panel/modal de evolución** en `index.html` (inicialmente oculto con `display:none`). Debe contener:
  - Un título "Evolución del Grupo"
  - Selector de **Grupo** (dropdown dinámico)
  - Selector de **Reunión A** (dropdown estático con las 4 reuniones)
  - Selector de **Reunión B** (dropdown estático)
  - Botón **"Comparar"**
  - Zona de resultados vacía (`#evolution-results`)
  - Botón cerrar ✕
- `[ ]` **1.3** Agregar estilos en `css/style.css`:
  - Botón con gradiente distinto (tono verde-azulado neón para diferenciarlo de "Exportar PDF")
  - Modal con glassmorphism (backdrop-filter, fondo oscuro semitransparente)
  - Animación de entrada (slide-up / fade-in)
  - Panel de KPI con flechas de tendencia (↑ verde, ↓ rojo, → gris)
  - Cards de comparación lado a lado ("Reunión A" vs "Reunión B")

---

## FASE 2 — Lógica de Comparación (nuevo `js/evolution.js`)

> Objetivo: Implementar la función que extrae y compara datos de dos reuniones para un mismo grupo.

### Tareas

- `[ ]` **2.1** Crear función `getGroupData(meetingKey, gradeKey, groupName)` que retorna el objeto de datos del grupo dado.
- `[ ]` **2.2** Crear función `computeEvolution(dataA, dataB)` que calcula:
  - Δ `sinBajas` (absoluto y %)
  - Δ `entre1y3` (absoluto y %)
  - Δ `cuatroOMas` (absoluto y %)
  - Δ por asignatura (insuficiencias A vs B)
  - Dirección de tendencia: `"mejora"` | `"empeora"` | `"igual"`
- `[ ]` **2.3** Crear función `renderEvolutionKPIs(evolution)` que genera los **KPI cards** con:
  - Valor en Reunión A y valor en Reunión B
  - Flecha de tendencia con color (verde = mejora, rojo = empeora, gris = sin cambio)
  - Porcentaje de cambio
- `[ ]` **2.4** Crear función `renderEvolutionCharts(dataA, dataB, labelA, labelB)` que genera:
  - **Gráfico de barras agrupadas** comparando insuficiencias por asignatura entre A y B
  - **Gráfico de donut doble** (o dos donuts lado a lado) con la distribución de alumnos en A y B

---

## FASE 3 — Integración y Controles

> Objetivo: Conectar los selectores con la lógica y poblar el dropdown de grupos dinámicamente.

### Tareas

- `[ ]` **3.1** Implementar lógica para **poblar el selector de Grupo** con todos los grupos disponibles (unión de todos los grados: 7°1…EMS6), o filtrar por grado si se prefiere.
- `[ ]` **3.2** Validar que **Reunión A ≠ Reunión B** antes de comparar; mostrar mensaje de error visual si son iguales.
- `[ ]` **3.3** Detectar automáticamente el **grado al que pertenece el grupo seleccionado** para hacer el lookup correcto en `meetingsData`.
- `[ ]` **3.4** Manejar grupos que **solo existen en algunas reuniones** (actualmente todas las reuniones tienen datos para todos los grupos vía `generateMockData`, por lo que no es bloqueante).
- `[ ]` **3.5** Al hacer clic en **"Comparar"**: mostrar loader/spinner brevemente y luego renderizar los resultados en `#evolution-results`.
- `[ ]` **3.6** Permitir re-comparar sin cerrar el modal (cambiar selectores y hacer clic nuevamente).

---

## FASE 4 — Visualizaciones de Evolución

> Objetivo: Crear los gráficos específicos de evolución (nuevos canvas dentro del modal).

### Tareas

- `[ ]` **4.1** Crear canvas `#evolution-bar-chart` para el gráfico de barras agrupadas de insuficiencias (Chart.js, tipo `bar`, `indexAxis: 'y'`).
- `[ ]` **4.2** Crear dos canvas `#evolution-donut-a` y `#evolution-donut-b` para los donuts de distribución de alumnos.
- `[ ]` **4.3** Agregar leyenda visual clara: colores de Reunión A (azul/cyan) vs Reunión B (naranja/dorado) consistentes en todos los gráficos.
- `[ ]` **4.4** Implementar **destrucción y recreación** de los gráficos de evolución al re-comparar (para evitar superposiciones de Canvas Chart.js).
- `[ ]` **4.5** *(Opcional)* Agregar un **resumen textual automático**, ej: _"7°1 mejoró un 12% en alumnos sin bajas entre Abril y Agosto. Matemáticas redujo sus insuficiencias de 5 a 3."_

---

## FASE 5 — Pulido UX y Exportación

> Objetivo: Afinar la experiencia, agregar animaciones y permitir exportar la comparación.

### Tareas

- `[ ]` **5.1** Agregar animaciones de entrada a los KPI cards (escalonadas con `animation-delay`).
- `[ ]` **5.2** Agregar tooltip al botón "Estudiar Evolución" con descripción breve.
- `[ ]` **5.3** Asegurarse que el modal es **responsive** (en pantallas pequeñas colapsa a una sola columna).
- `[ ]` **5.4** *(Opcional)* Botón **"Exportar Comparación PDF"** dentro del modal que imprima solo la vista de evolución.
- `[ ]` **5.5** Cerrar el modal con **tecla Escape** y click fuera del panel.
- `[ ]` **5.6** Revisar accesibilidad: `aria-label`, roles, focus trap dentro del modal.

---

## Archivos a Modificar

| Archivo | Cambios |
|---|---|
| `index.html` | Botón + Modal de evolución completo |
| `css/style.css` | Estilos del modal, KPIs, gráficos duales |
| `js/app.js` | Event listeners del botón y modal |
| `js/evolution.js` *(nuevo)* | Funciones de comparación y gráficos de evolución |
| `js/data.js` | Sin cambios esperados (la estructura ya soporta la feature) |

### Notas
- La estructura de datos actual (`meetingsData`) ya es perfectamente compatible con esta función — todos los grupos existen en todas las reuniones gracias a `generateMockData`. No se requieren cambios en `data.js`.
- Se recomienda crear un archivo **`js/evolution.js`** separado en lugar de agregar todo en `app.js` o `charts.js`, para mantener la separación de responsabilidades.

---

## Preguntas Abiertas

1. **¿El selector de grupo debe filtrar por grado primero?** (ej: primero elegir "7° Año" y luego "7°1") o ¿mostrar todos los grupos de todos los grados en un solo dropdown?
2. **¿Se permite comparar el mismo grupo entre más de dos reuniones?** (ej: ver Abril, Agosto y Octubre juntos, o solo dos a la vez)
3. **¿El resumen textual automático** (Fase 4.5) es deseado, o preferís solo los gráficos/números?

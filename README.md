# Estadísticas con Inasistencias - Dashboard de Reuniones Docentes

Este es un dashboard interactivo diseñado para el análisis de desempeño académico y ausentismo por grupo, orientado a las Reuniones de Evaluación Docente (Reuniones de Profesores).

## Descripción

El proyecto consiste en una aplicación web estática (HTML, CSS y JavaScript) que permite visualizar y analizar el rendimiento de los estudiantes en diferentes grados (7°, 8°, 9° y 1° EMS). Proporciona gráficos y métricas detalladas sobre la cantidad de asignaturas pendientes (bajas) y los niveles de ausentismo.

## Características Principales

*   **Selector de Reuniones:** Permite alternar entre los datos de las diferentes reuniones del año (Abril, Agosto, Octubre, Final).
*   **Análisis por Grado y Grupo:** Pestañas para seleccionar el grado y un menú desplegable para elegir un grupo específico.
*   **Tarjetas de Resumen:** Visualización rápida del total de grupos, porcentaje de alumnos sin bajas, alumnos críticos y ausentismo crítico del grado.
*   **Gráfico Circular de Rendimiento:** Muestra la distribución de alumnos según la cantidad de asignaturas pendientes (Sin Bajas, 1 a 3 Bajas, 4 o más Bajas).
*   **Desglose de Ausentismo Dinámico:** Muestra simultáneamente los niveles de ausentismo (Regular, Moderado, Crítico) para cada una de las categorías de rendimiento.
*   **Gráfico de Insuficiencias por Asignatura:** Muestra un gráfico de barras (o gráfico de dona en el reporte impreso) con la cantidad de insuficiencias por materia en el grupo seleccionado.
*   **Diagnóstico/Estrategias:** Una sección editable para escribir apuntes, diagnósticos o estrategias a aplicar para el grupo/grado.
*   **Exportación a PDF:** Diseño optimizado para impresión. Al hacer clic en "Exportar Reporte (PDF)", se genera una vista limpia en formato A4 para imprimir o guardar como PDF.

## Tecnologías Utilizadas

*   **HTML5:** Estructura semántica.
*   **CSS3:** Estilos premium, diseño responsivo, uso de variables (CSS custom properties) y estilos específicos para impresión (`@media print`).
*   **JavaScript (Vanilla):** Lógica de interactividad, manejo del estado y renderizado dinámico.
*   **Chart.js:** Librería utilizada para generar los gráficos (circulares, dona y de barras).

## Instalación y Uso

Dado que es un proyecto completamente del lado del cliente, no requiere de una instalación compleja ni de un servidor backend.

1.  Clona el repositorio o descarga los archivos.
2.  Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3.  Opcional: Si deseas utilizar un servidor local (como Live Server en VS Code), puedes hacerlo para evitar problemas de CORS al cargar recursos externos, aunque el proyecto está diseñado para funcionar directamente desde el sistema de archivos (`file://`).

## Estructura de Archivos

*   `index.html`: Estructura principal de la aplicación.
*   `css/style.css`: Estilos visuales de la aplicación, incluyendo diseño neón y adaptación para impresión.
*   `js/data.js`: Almacena los datos estructurados de los grupos, grados y reuniones (simulados/reales).
*   `js/app.js`: Contiene la lógica principal de la interfaz, manejo de eventos y actualización del DOM.
*   `js/charts.js`: Configuración y renderizado de los gráficos utilizando Chart.js.

## Autores
* Franco Povea
* Antigravity

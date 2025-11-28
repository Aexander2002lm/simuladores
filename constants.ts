import { Question } from './types';

export const ALL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "La validez interna en un experimento se refiere a:",
    options: [
      { key: 'a', text: "La repetición del experimento." },
      { key: 'b', text: "La recolección de datos secundarios." },
      { key: 'c', text: "El grado en que los resultados reflejan realmente la variable que se mide." },
      { key: 'd', text: "La descripción de la muestra." }
    ],
    correctAnswer: 'c',
    feedback: "La validez interna indica si los resultados son confiables respecto a las variables medidas."
  },
  {
    id: 2,
    text: "La variable independiente se caracteriza por:",
    options: [
      { key: 'a', text: "No tener valor medible." },
      { key: 'b', text: "Depender de la variable interviniente." },
      { key: 'c', text: "Explicar o determinar cambios en la variable dependiente." },
      { key: 'd', text: "Ser el efecto del estudio." }
    ],
    correctAnswer: 'c',
    feedback: "La variable independiente explica los cambios observados en la dependiente."
  },
  {
    id: 3,
    text: "En los diseños no experimentales:",
    options: [
      { key: 'a', text: "Se aplican pruebas controladas." },
      { key: 'b', text: "Solo se estudian variables dependientes." },
      { key: 'c', text: "Se manipulan todas las variables." },
      { key: 'd', text: "No se manipulan variables independientes." }
    ],
    correctAnswer: 'd',
    feedback: "En los diseños no experimentales se observan fenómenos sin manipular variables."
  },
  {
    id: 4,
    text: "El objetivo general de una investigación representa:",
    options: [
      { key: 'a', text: "Una subactividad." },
      { key: 'b', text: "La meta global del estudio." },
      { key: 'c', text: "Una hipótesis." },
      { key: 'd', text: "Una tarea puntual." }
    ],
    correctAnswer: 'b',
    feedback: "El objetivo general describe la meta global que guía todo el estudio."
  },
  {
    id: 5,
    text: "¿Cuál es el primer paso en la revisión de literatura?",
    options: [
      { key: 'a', text: "Elaborar reportes." },
      { key: 'b', text: "Buscar literatura relacionada con el tema." },
      { key: 'c', text: "Evaluar resultados." },
      { key: 'd', text: "Definir hipótesis." }
    ],
    correctAnswer: 'b',
    feedback: "La revisión inicia con la búsqueda de fuentes relacionadas con el tema de investigación."
  },
  {
    id: 6,
    text: "El marco teórico responde a la pregunta:",
    options: [
      { key: 'a', text: "¿En qué me apoyo para estudiar esta realidad?" },
      { key: 'b', text: "¿Qué instrumentos usaré?" },
      { key: 'c', text: "¿Quién financia la investigación?" },
      { key: 'd', text: "¿Cuál es el presupuesto?" }
    ],
    correctAnswer: 'a',
    feedback: "El marco teórico brinda el soporte conceptual y teórico al estudio."
  },
  {
    id: 7,
    text: "Los costos directos en un presupuesto incluyen:",
    options: [
      { key: 'a', text: "Electricidad, agua, internet." },
      { key: 'b', text: "Solo honorarios profesionales." },
      { key: 'c', text: "Errores, imprevistos y multas." },
      { key: 'd', text: "Personal, materiales, equipos y viajes." }
    ],
    correctAnswer: 'd',
    feedback: "Los costos directos comprenden los recursos humanos y materiales principales."
  },
  {
    id: 8,
    text: "¿Cuál es el propósito principal de la revisión de literatura en una investigación?",
    options: [
      { key: 'a', text: "Definir las variables dependientes." },
      { key: 'b', text: "Repetir estudios anteriores." },
      { key: 'c', text: "Conocer el estado actual del tema y construir el marco teórico." },
      { key: 'd', text: "Sustituir la hipótesis." }
    ],
    correctAnswer: 'c',
    feedback: "La revisión de literatura permite conocer el estado actual del tema y fundamentar el marco teórico."
  },
  {
    id: 9,
    text: "¿Cuál es el nivel de confianza más utilizado en investigaciones?",
    options: [
      { key: 'a', text: "95%" },
      { key: 'b', text: "85%" },
      { key: 'c', text: "50%" },
      { key: 'd', text: "70%" }
    ],
    correctAnswer: 'a',
    feedback: "El nivel de confianza del 95% es el más empleado en investigaciones científicas."
  },
  {
    id: 10,
    text: "La relación entre error, tamaño de muestra y nivel de confianza indica que:",
    options: [
      { key: 'a', text: "El nivel de confianza no influye." },
      { key: 'b', text: "El tamaño de la muestra es independiente del error." },
      { key: 'c', text: "Aumentar el error aumenta la muestra." },
      { key: 'd', text: "Reducir el error aumenta el tamaño de la muestra." }
    ],
    correctAnswer: 'd',
    feedback: "Un menor margen de error exige un tamaño de muestra mayor."
  },
  {
    id: 11,
    text: "La validez de un instrumento indica:",
    options: [
      { key: 'a', text: "La duración de la aplicación." },
      { key: 'b', text: "El número de encuestados." },
      { key: 'c', text: "El grado en que mide realmente la variable que se pretende evaluar." },
      { key: 'd', text: "Su diseño gráfico." }
    ],
    correctAnswer: 'c',
    feedback: "La validez garantiza que el instrumento mida lo que realmente se propone medir."
  },
  {
    id: 12,
    text: "El muestreo por cuotas se basa en:",
    options: [
      { key: 'a', text: "Seleccionar participantes de manera infinita." },
      { key: 'b', text: "Elegir individuos totalmente al azar." },
      { key: 'c', text: "Establecer cupos o cantidades de individuos con características específicas." },
      { key: 'd', text: "Formar racimos de zonas geográficas." }
    ],
    correctAnswer: 'c',
    feedback: "El muestreo por cuotas asigna cupos de individuos que cumplen ciertas características."
  },
  {
    id: 13,
    text: "El gráfico de embudo o “funnel plot” se utiliza para:",
    options: [
      { key: 'a', text: "Comprobar la normalidad." },
      { key: 'b', text: "Evaluar la confiabilidad del instrumento." },
      { key: 'c', text: "Detectar sesgos de publicación." },
      { key: 'd', text: "Medir la varianza del efecto." }
    ],
    correctAnswer: 'c',
    feedback: "El funnel plot ayuda a identificar posibles sesgos de publicación o asimetrías."
  },
  {
    id: 14,
    text: "¿Qué diferencia fundamental existe entre una revisión narrativa y una revisión sistemática?",
    options: [
      { key: 'a', text: "La revisión narrativa utiliza solo fuentes primarias." },
      { key: 'b', text: "Ambas se realizan sin criterios definidos." },
      { key: 'c', text: "La revisión sistemática usa criterios explícitos de búsqueda y selección." },
      { key: 'd', text: "La revisión sistemática se basa en opiniones personales." }
    ],
    correctAnswer: 'c',
    feedback: "La revisión sistemática aplica criterios explícitos y reproducibles de búsqueda y selección."
  },
  {
    id: 15,
    text: "Una característica esencial de la revisión sistemática es que sea:",
    options: [
      { key: 'a', text: "Basada en experiencias personales." },
      { key: 'b', text: "Realizada por un único autor." },
      { key: 'c', text: "Hecha sin criterios de exclusión." },
      { key: 'd', text: "Reproducible por otros investigadores." }
    ],
    correctAnswer: 'd',
    feedback: "La revisión sistemática debe poder ser reproducida con los mismos resultados por otros investigadores."
  },
  {
    id: 16,
    text: "Las hipótesis nulas se utilizan para:",
    options: [
      { key: 'a', text: "Definir las dimensiones." },
      { key: 'b', text: "Sustituir las variables." },
      { key: 'c', text: "Refutar o negar la hipótesis de investigación." },
      { key: 'd', text: "Confirmar la hipótesis de investigación." }
    ],
    correctAnswer: 'c',
    feedback: "La hipótesis nula refuta lo que afirma la hipótesis de investigación."
  },
  {
    id: 17,
    text: "¿Qué tipo de estudio busca determinar relaciones entre variables?",
    options: [
      { key: 'a', text: "Correlacional" },
      { key: 'b', text: "Explicativo" },
      { key: 'c', text: "Descriptivo" },
      { key: 'd', text: "Exploratorio" }
    ],
    correctAnswer: 'a',
    feedback: "Los estudios correlacionales identifican el grado de relación entre variables."
  },
  {
    id: 18,
    text: "Las variables nominales se caracterizan por:",
    options: [
      { key: 'a', text: "Medirse en intervalos." },
      { key: 'b', text: "No tener un orden preestablecido entre categorías." },
      { key: 'c', text: "Tener valores numéricos continuos." },
      { key: 'd', text: "Representar proporciones." }
    ],
    correctAnswer: 'b',
    feedback: "Las variables nominales clasifican sin orden jerárquico entre categorías."
  },
  {
    id: 19,
    text: "¿Qué se entiende por la formulación del problema en una investigación?",
    options: [
      { key: 'a', text: "Estructura formalmente la idea de investigación que se pretende desarrollar." },
      { key: 'b', text: "Consiste en definir el marco teórico." },
      { key: 'c', text: "Es la última etapa del trabajo." },
      { key: 'd', text: "Debe presentar los resultados finales." }
    ],
    correctAnswer: 'a',
    feedback: "La formulación del problema es la base inicial donde se estructura formalmente la idea de investigación."
  },
  {
    id: 20,
    text: "Una de las ventajas de realizar la revisión de literatura es que:",
    options: [
      { key: 'a', text: "Previene errores y amplía el conocimiento del investigador." },
      { key: 'b', text: "Sustituye el análisis de resultados." },
      { key: 'c', text: "Reemplaza la recolección de datos." },
      { key: 'd', text: "Evita la formulación de objetivos." }
    ],
    correctAnswer: 'a',
    feedback: "La revisión de literatura previene errores y orienta el estudio."
  },
  {
    id: 21,
    text: "El diagrama PERT se diferencia del de Gantt porque:",
    options: [
      { key: 'a', text: "No usa tiempos estimados." },
      { key: 'b', text: "Representa relaciones de precedencia entre tareas." },
      { key: 'c', text: "No muestra dependencias." },
      { key: 'd', text: "Solo aplica en investigación cualitativa." }
    ],
    correctAnswer: 'b',
    feedback: "El PERT muestra las relaciones y dependencias entre las tareas del proyecto."
  },
  {
    id: 22,
    text: "La muestra probabilística se define como aquella en la que:",
    options: [
      { key: 'a', text: "Los participantes son escogidos por el investigador." },
      { key: 'b', text: "Se excluyen ciertos grupos intencionalmente." },
      { key: 'c', text: "Solo se eligen los más convenientes." },
      { key: 'd', text: "Todos los elementos tienen la misma posibilidad de ser elegidos." }
    ],
    correctAnswer: 'd',
    feedback: "En las muestras probabilísticas todos los elementos tienen igual probabilidad de ser seleccionados."
  },
  {
    id: 23,
    text: "La confiabilidad de un instrumento se refiere a:",
    options: [
      { key: 'a', text: "Su capacidad de producir resultados similares bajo las mismas condiciones." },
      { key: 'b', text: "La cantidad de ítems del cuestionario." },
      { key: 'c', text: "El tipo de preguntas." },
      { key: 'd', text: "El tamaño de la muestra." }
    ],
    correctAnswer: 'a',
    feedback: "La confiabilidad mide la estabilidad y consistencia de los resultados obtenidos."
  },
  {
    id: 24,
    text: "En la estrategia PICO, la letra “I” representa:",
    options: [
      { key: 'a', text: "El índice de confiabilidad." },
      { key: 'b', text: "La intervención u objeto de estudio." },
      { key: 'c', text: "El instrumento de medición." },
      { key: 'd', text: "El investigador." }
    ],
    correctAnswer: 'b',
    feedback: "En PICO, “I” se refiere a la intervención o exposición evaluada."
  },
  {
    id: 25,
    text: "¿Cuál es el objetivo principal de una revisión sistemática?",
    options: [
      { key: 'a', text: "Buscar artículos sin criterios definidos." },
      { key: 'b', text: "Resumir y sintetizar la evidencia disponible sobre un tema específico." },
      { key: 'c', text: "Desarrollar una opinión personal sobre un tema." },
      { key: 'd', text: "Revisar únicamente fuentes secundarias." }
    ],
    correctAnswer: 'b',
    feedback: "La revisión sistemática busca sintetizar toda la evidencia relevante sobre una pregunta específica."
  },
  {
    id: 26,
    text: "El valor p inferior a 0,05 en un metaanálisis indica:",
    options: [
      { key: 'a', text: "Que el estudio carece de validez." },
      { key: 'b', text: "Que hay sesgo de publicación." },
      { key: 'c', text: "Que el resultado es estadísticamente significativo." },
      { key: 'd', text: "Que existe heterogeneidad alta." }
    ],
    correctAnswer: 'c',
    feedback: "Un valor p < 0,05 indica significancia estadística en los resultados del metaanálisis."
  },
  {
    id: 27,
    text: "En un diseño de cuatro grupos de Solomon:",
    options: [
      { key: 'a', text: "Solo se usa una medición inicial." },
      { key: 'b', text: "No existe grupo de control." },
      { key: 'c', text: "Todos los grupos reciben tratamiento." },
      { key: 'd', text: "Dos grupos son experimentales y dos son de control." }
    ],
    correctAnswer: 'd',
    feedback: "El diseño de Solomon combina pre y pospruebas con grupos experimentales y de control."
  },
  {
    id: 28,
    text: "¿Qué tipo de enfoque utiliza la lógica inductiva y no sigue una secuencia lineal?",
    options: [
      { key: 'a', text: "Mixto" },
      { key: 'b', text: "Experimental" },
      { key: 'c', text: "Cuantitativo" },
      { key: 'd', text: "Cualitativo" }
    ],
    correctAnswer: 'd',
    feedback: "El enfoque cualitativo usa lógica inductiva y no sigue una secuencia lineal."
  },
  {
    id: 29,
    text: "La variable “Z” en el cálculo de la muestra representa:",
    options: [
      { key: 'a', text: "El margen de error." },
      { key: 'b', text: "El nivel de confianza." },
      { key: 'c', text: "La proporción de éxito." },
      { key: 'd', text: "El tamaño de la población." }
    ],
    correctAnswer: 'b',
    feedback: "La variable Z indica el nivel de confianza usado en el cálculo muestral."
  },
  {
    id: 30,
    text: "El muestreo de bola de nieve se utiliza cuando:",
    options: [
      { key: 'a', text: "Los individuos se eligen al azar." },
      { key: 'b', text: "El estudio es experimental." },
      { key: 'c', text: "Se necesita una muestra grande." },
      { key: 'd', text: "La población es muy pequeña o difícil de localizar." }
    ],
    correctAnswer: 'd',
    feedback: "El muestreo de bola de nieve se aplica a poblaciones reducidas o de difícil acceso."
  }
];

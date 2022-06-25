const temas = [
  {
    titulo: "Metodologías en el Desarrollo de Software",
    id: "metodologias-desarrollo-software",
    textos: [
      "Una metodología de desarrollo de software es un conjunto de técnicas y métodos de organización, los cuales se usan para diseñar soluciones de software.",
      "Las metodologías clásicas de desarrollo de software, tienen en común el objetivo de organizar los equipos de trabajo.",
      "Las metodologías han sufrido cambios a lo largo de la historia, conforme el propio software y sus requerimientos han evolucionado, por lo que han dejado de ser considerados un “trámite” a ser la estructura para el desarrollo de software de una manera productiva y eficaz.",
      "Existe una calificación de las metodologías en dos partes, las ágiles (Kanban, SCRUM, XP) y las que nos interesan el día de hoy: las tradicionales (Cascada, Incremental, Prototipado, etc.).",
    ],
  },
  {
    titulo: "Metodologías Tradicionales",
    id: "metodologias-tradicionales",
    textos: [
      "Las metodologías tradicionales son aquellas que establecen una disciplina de trabajo sobre el proceso de desarrollo del software, con la intención de tener un desarrollo lo más eficiente posible.",
      "Establecen y definen todos y cada uno de los requisitos desde el inicio del proyecto. Dichas metodologías son poco flexibles y no permiten realizar cambios una vez iniciado el desarrollo.",
      "Estas metodologías funcionan cuando el enfoque de las etapas se debe completar secuencialmente, es decir, cuando una actividad es dependiente de otra previamente realizada. Es por esto que una etapa debe completarse para que dé inicio la siguiente etapa.",
    ],
  },
  {
    titulo: "Cascada",
    id: "cascada",
    textos: [
      "El nombre de “Cascada” se deriva de la organización de las etapas, desarrolladas en etapas diferenciadas y en el estricto orden que fueron definidas. Esta metodología requiere de una revisión antes de iniciar cada una de las etapas para verificar que se tiene todo listo para pasar a la siguiente fase.",

      "En el modelo cascada las actividades del desarrollo fundamental se derivan en las siguientes etapas, como: análisis y definición de requerimientos, diseño del sistema de hardware, implementación y prueba de unidades, integración y prueba del sistema, funcionamiento y mantenimiento, etc.",
      "Las ventajas del modelo cascada es que la documentación se produce en cada una de las etapas y esta cuadra con otros modelos del proceso.",
      "La desventaja más obvia es la poca flexibilidad para dividir el proyecto en distintas etapas.",
    ],
  },
  {
    titulo: "Incremental",
    id: "incremental",
    textos: [
      "En esta metodología de desarrollo de software se elabora el producto final de manera progresiva. En cada etapa se agrega una funcionalidad, con el fin de ver resultados de manera más rápida en comparación con el modelo en cascada.",
      "Una de las características de este modelo, es que el software se puede empezar a utilizar incluso antes de que se termine y, por lo general, es mucho más flexible que las demás metodologías.",
      "Por lo tanto, el modelo de desarrollo incremental es la duración de vida de desarrollo software, el mismo descompone un proyecto en una serie de incrementos, los cuales suministran una parte de la funcionalidad respecto de la totalidad de los requisitos del proyecto. Los requisitos tienen asignada una prioridad y son entregados según el orden de prioridad en el incremento correspondiente.",
    ],
  },
  {
    titulo: "Prototipado",
    id: "prototipado",
    textos: [
      "La  metodología  “prototipo”, consta de la elaboración de un prototipo  que se construye rápidamente, para que el cliente o usuario lo pruebe y proporcione feedback, lo que permite detectar y arreglar posibles errores, e introducir requerimientos que puedan presentarse, este modelo se fundamenta en el método de ensayo y error para entender las especificidades del producto. Es un modelo más flexible que el resto de metodologías clásicas.",
    ],
  },
  {
    titulo: "Espiral",
    id: "espiral",
    textos: [
      "El nombre de esta metodología se debe a su funcionamiento, ya que las etapas se procesan en forma de espiral. Cuanto más cerca del centro se está, más avanzado está el proyecto.",
      "Esta metodología se caracteriza por combinar dos modelos, el incremental y el prototipo, que agrega la idea de análisis de riesgo. La misma se divide en cuatro etapas: planificación, análisis de riesgo, desarrollo de prototipo y evaluación del cliente.",

      "Otra característica del desarrollo en espiral es la minimización de los riesgos en el desarrollo de software. Estos riesgos se enfrentan al enfoque incremental, realizando primero prototipos, que luego pasan por las fases de desarrollo de software.",
      "El desarrollo o modelo en espiral es un enfoque de desarrollo de software que puede ser considerado como una respuesta a los inconvenientes del desarrollo en cascada. El modelo en espiral explica las etapas de vida de un software por medio de espirales, que se repiten hasta entregar el producto terminado.",
      "El desarrollo en espiral es universal y se combina con otros métodos de desarrollo clásicos y ágiles, es por ello que también se le llama modelo o desarrollo de segundo orden.",
    ],
  },
  {
    titulo: "Patrones de Diseño",
    id: "patrones-diseno",
    textos: [
      "Los patrones de diseño han sido controversiales, debido a que hay quienes consideran que vuelven el código difícil de entender y administrar.",
      "Es importante conocer los patrones de diseño, pero entendiendo que ningún software aplicará al 100% un patrón de diseño, ya que cada proyecto tiene sus requerimientos específicos. En última instancia no hay un sustituto para la capacidad genuina de resolución de problemas en la ingeniería de software.",
      
      "Los patrones de diseño pueden ser muy útiles si se utilizan en las situaciones adecuadas y por las razones correctas. Cuando se usan de manera estratégica, pueden hacer que el equipo sea significativamente más eficiente, evitando redundancias en el trabajo de desarrollo.",
      "Además, los patrones de diseño proporcionan un lenguaje útil para conceptualizar problemas repetidos y soluciones al discutir con otros o administrar código en equipos más grandes.",
      
    ],
  },
  {
    titulo: "Factory Method",
    id: "factory-method",
    textos: [
      "Basa su funcionamiento en la producción de objetos por parte del software, comparándolo con el funcionamiento de una fábrica productora. Esto lo hace sin tanta atención al detalle, donde los objetos se crean llamando un método de “fábrica” en vez de llamar un constructor.",
    ],
  },
  {
    titulo: "Singleton",
    id: "singleton",
    textos: [
      "El patrón singleton se utiliza para limitar la creación de una clase a un solo objeto. Esto es beneficioso cuando se necesita un objeto para coordinar acciones en todo el sistema. Hay varios ejemplos en dónde debería existir una única instancia de una clase, incluidos cachés, grupos de subprocesos y registros."
    ],
  },
  {
    titulo: "Adapter",
    id: "adapter",
    textos: [
      "Esto permite que las clases incompatibles trabajen juntas al convertir la interfaz de una clase en otra. Actuando como un traductor o como su nombre lo indica, como un adaptador."
    ],
  },
  {
    titulo: "Metodologías Ágiles",
    id: "metodologias-agiles",
    textos: [
      "Cuando hablamos de metodologías ágiles no debemos limitarnos a pensar en una simple herramienta, sino en una estrategia integral que impulse a las organizaciones a gestionar los proyectos con rapidez y flexibilidad.",
      "La realidad es que el mercado cada día exige mayor flexibilidad ante un panorama incierto y cambiante, y las empresas deben responder con urgencia esta demanda.",
      
      "La metodología Agile ayuda en el desarrollo de proyectos que necesitan rapidez y flexibilidad para adecuarse a las necesidades del cliente. Siempre enfocada a mejorar resultados.",
      "A diferencia de la forma tradicional de gestionar los proyectos, las metodologías ágiles no necesitan definir al inicio de los proyectos la totalidad del alcance.",
      "En efecto, definimos a las metodologías ágiles como una innovadora forma de trabajar y organizarse que “fragmenta” los proyectos en partes capaces de adaptarse sobre la marcha, complementarse y resolverse en poco tiempo.",
      "Es decir, no se planifica ni se diseña el proyecto por adelantado, sino que a medida que se desarrolla se va definiendo el proyecto, gracias a un feedback constante.",
      "Otra característica muy particular es que se trabaja por períodos de tiempo durante el cual cada miembro del equipo debe ejecutar una serie de tareas. ",
      "Luego de ejecutar dichas tareas, se entregan los avances, se reciben devoluciones y comienza nuevamente el proceso, permitiendo implementar los cambios necesarios.",
      
    ],
  },
  {
    titulo: "SCRUM",
    id: "scrum",
    textos: [
      "Su gran característica es que esta metodología se lleva adelante en “Sprints”, es decir, procesos de trabajo que deben ser lo más cortos posibles. Al finalizar cada sprint, el equipo debe entregar una versión mejorada del proyecto para que sea analizada por el Owner y los demás interesados, los cuales darán una devolución, para luego iniciar con el proceso de mejora.",
      "Otro aspecto muy característico de esta metodología es que propone una forma de trabajar donde se presentan diversos roles, tales como:",
      "Scrum Master: facilita la aplicación del método de trabajo y gestiona cualquier cambio necesario.",
      "Product Owner: representa a los stakeholders (clientes u otras figuras interesadas en que el proyecto salga correctamente)",
      "Stakeholder: Es el cliente, el cual debe definir los requerimientos y proporcionar el feedback.",
      "Team: las personas que ejecutan o producen el producto.",
      
    ],
  },
  {
    titulo: "Kanban",
    id: "kanban",
    textos: [
      "Existen plataformas online que traducen muy bien esta metodología, tales como: Monday o Trello y que te ayudarán a entender su particularidad.",
      "Kanban es una palabra japonesa que traducida al español significa “tarjeta visual”. Esta metodología propone una comunicación en tiempo real, controlando el trabajo a través de una línea de producción, en la cual se crean tres columnas: pendientes, en proceso y terminadas. ",
      "Esto permite clasificar las tareas y visualizar fácilmente el avance de las mismas.",
      
    ],
  },
  {
    titulo: "",
    id: "",
    textos: [

    ],
  },
];

function App() {
  return (
    <div className="bg-primary-50 min-h-screen scroll-smooth">
      <div className="container mx-auto py-8">
        <h1 className="text-primary-600 text-center font-bold text-5xl mb-4">
          Arquitectura de Software
        </h1>
        <p className="text-primary-400 text-center font-medium text-2xl mb-20">
          Cristopher Daniel Chavez Alfaro
        </p>

        <div className="fixed top-0 left-0 bottom-0 bg-primary-100 shadow p-4">
          <h2 className="text-primary-500 font-medium text-3xl mb-4 text-center">
            Temario
          </h2>
          <ul className="">
            {temas.map((tema) => (
              <li key={tema.id} className="mb-2">
                <a
                  className=" border-b-2 border-b-transparent hover:border-b-primary-800"
                  href={`#${tema.id}`}
                >
                  # {tema.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {temas.map((tema) => (
          <div
            className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-[65ch] mx-auto scroll-mt-8"
            id={tema.id}
            key={tema.id}
          >
            <h2 className="text-primary-500 font-medium text-3xl mb-8">
              {tema.titulo}
            </h2>
            {tema.textos.map((txt, index) => (
              <p className="text-neutral-800 mb-4" key={index}>
                {txt}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

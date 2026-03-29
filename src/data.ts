import type { DisciplinesData } from './types'

export const DISCIPLINES_DATA: DisciplinesData =
{
  "disciplines": [
    {
      "id": "animalism",
      "name": "Animalismo",
      "description": "Disciplina que permite al vampiro conectar con los animales y con la Bestia interior. Los maestros de Animalismo se hacen uno con sus Bestias y pueden controlar animales, suprimir la Bestia de otros vampiros y más.",
      "tipo": "Mental",
      "amenaza": "Baja a media. Aunque hablar con animales puede parecer excéntrico, sólo las aplicaciones más violentas de la Disciplina provocan más que unas pocas cejas arqueadas.",
      "resonancia": "Sangre animal, preferentemente salvaje.",
      "powers": [
        {
          "id": "sense-the-beast",
          "name": "Sentir a la Bestia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Resolución + Animalismo contra Compostura + Subterfugio",
          "duration": "Pasiva",
          "description": "Detecta la naturaleza depredadora y el nivel de hostilidad de cualquier criatura cercana. Identifica vampiros, hombres lobo y otros sobrenaturales. Con victoria crítica revela tipo exacto y nivel de Ansia."
        },
        {
          "id": "bond-famulus",
          "name": "Vínculo con Famulus",
          "level": 1,
          "cost": "El animal debe ser alimentado con la Sangre del usuario durante tres noches distintas, cada una de las cuales requiere un control de Enardecimiento por parte del usuario.",
          "dicePool": "Carisma + Trato con Animales",
          "duration": "Sólo la muerte libera a un famulus una vez Vinculado.",
          "description": "Crea un vínculo mental permanente con un animal, convirtiéndolo en familiar (famulus). Solo puede tenerse uno. El famulus no envejece mientras reciba Sangre y puede usarse sin coste con Susurros Salvajes y Comunión de Espíritus."
        },
        {
          "id": "feral-whispers",
          "name": "Susurros Salvajes",
          "level": 2,
          "cost": "Un control de Enardecimiento por tipo de animal elegido para la escena. Sin coste si se usa sobre el famulus.",
          "dicePool": "Manipulación + Animalismo, Carisma + Animalismo",
          "duration": "Una escena",
          "description": "Comunicación bidireccional con animales e invocación de los mismos. La dificultad varía según la complejidad de la orden o la escasez del animal invocado."
        },
        {
          "id": "unliving-hive",
          "name": "Colmena No-Muerta",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "(Amalgama: Ofuscación 2) Extiende todos los poderes de Animalismo a enjambres de insectos. Puede vincularse como famulus y anidar dentro del propio cuerpo del vampiro."
        },
        {
          "id": "quell-the-beast",
          "name": "Reprimir a la Bestia",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Animalismo contra Resistencia + Resolución",
          "duration": "Una escena o tantos turnos como el margen de victoria +1",
          "description": "Suprime la Bestia interna de otra criatura, deteniéndola en mitad de un Frenesí o calmando su naturaleza salvaje. También puede usarse sobre uno mismo para calmar el Frenesí propio."
        },
        {
          "id": "animal-succulence",
          "name": "Suculencia Animal",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Permite saciar Ansia alimentándose de animales, algo normalmente ineficaz. La cantidad saciada depende de la Potencia de Sangre; a mayor nivel, más Ansia recuperada por animal."
        },
        {
          "id": "subsume-the-spirit",
          "name": "Comunión de Espíritus",
          "level": 4,
          "cost": "Un control de Enardecimiento. Ninguno si se usa sobre el famulus.",
          "dicePool": "Manipulación + Animalismo",
          "duration": "Una escena / indefinidamente (con victoria crítica)",
          "description": "Transfiere la conciencia del vampiro al cuerpo de un animal, controlándolo completamente y usando todos sus sentidos. El cuerpo vampírico queda inconsciente durante la posesión."
        },
        {
          "id": "animal-dominion",
          "name": "Control Animal",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Carisma + Animalismo",
          "duration": "Una sola escena o hasta que se cumpla la orden, lo que dure menos",
          "description": "Domina manadas o grupos enteros de animales simultáneamente como si fueran una sola entidad. Con victoria crítica el control es absoluto y sin tirada adicional."
        },
        {
          "id": "drawing-out-the-beast",
          "name": "Expulsar a la Bestia",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Animalismo contra Compostura + Resolución",
          "duration": "La duración del Frenesí",
          "description": "En el momento de un Frenesí, proyecta la propia Bestia hacia un objetivo cercano, desencadenando en él un Frenesí inmediato. El vampiro queda temporalmente libre de su Bestia."
        }
      ],
      "color": "#4a7c3f",
      "colorDark": "#2d4a25",
      "colorGlow": "rgba(74,124,63,0.4)",
      "clanes": [
        "Gangrel",
        "Nosferatu",
        "Hecata"
      ],
      "iconType": "wolf"
    },
    {
      "id": "auspex",
      "name": "Auspex",
      "description": "Entre los mayores dones y peores maldiciones de los vampiros, Auspex permite a los Vástagos discernir la verdad de la mentira, sondear las mentes de quienes los rodean y percibir la realidad a un nivel distinto que otros seres.",
      "tipo": "Mental",
      "amenaza": "Baja. Auspex nunca se manifiesta de modo visible a simple vista o causa efectos que no se pueden racionalizar.",
      "resonancia": "Flemática. Artistas (especialmente fotógrafos) y visionarios, ciertos esquizofrénicos, usuarios de sustancias psicoactivas, detectives.",
      "powers": [
        {
          "id": "heightened-senses",
          "name": "Sentidos Agudizados",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Resolución",
          "duration": "Hasta que se desactive",
          "description": "Visión en oscuridad total, oído y olfato sobrehumanos. Añade puntos de Auspex como dados extra a todas las pruebas de Percepción."
        },
        {
          "id": "sense-the-unseen",
          "name": "Sentir lo Invisible",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Auspex o Resolución + Auspex",
          "duration": "Pasiva",
          "description": "Detecta presencias ocultas por Ofuscación, espíritus y el mundo espiritual. Contramedida directa contra todos los niveles de Ofuscación."
        },
        {
          "id": "premonition",
          "name": "Premonición",
          "level": 2,
          "cost": "Ninguno o un control de Enardecimiento",
          "dicePool": "Resolución + Auspex",
          "duration": "Pasiva",
          "description": "Recibe destellos de intuición, presentimientos o visiones sobre peligros inmediatos. El Narrador puede otorgar pistas pasivas sin que el jugador las solicite."
        },
        {
          "id": "shared-senses",
          "name": "Compartir los Sentidos",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Auspex",
          "duration": "Una escena",
          "description": "Accede a los sentidos de otra persona (vista, oído, tacto) a distancia sin que lo perciba. El objetivo no nota nada inusual."
        },
        {
          "id": "scry-the-soul",
          "name": "Escudriñar el Alma",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex contra Compostura + Subterfugio",
          "duration": "Un turno o a discreción del Narrador",
          "description": "Percibe el aura de una persona revelando sus emociones actuales, rasgos de carácter, estado sobrenatural y si está mintiendo."
        },
        {
          "id": "spirits-touch",
          "name": "Toque del Espíritu",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Un turno",
          "description": "Al tocar un objeto o lugar, revive las emociones e impresiones dejadas por quienes lo usaron (psicometría). Cuanto más intensa la emoción original, más clara la visión."
        },
        {
          "id": "clairvoyance",
          "name": "Clarividencia",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Auspex",
          "duration": "Unos minutos para recopilar información, hasta una noche para vigilancia",
          "description": "Proyecta los sentidos a cualquier lugar conocido o que pueda visualizar, observando remotamente sin estar físicamente presente."
        },
        {
          "id": "possession",
          "name": "Posesión",
          "level": 5,
          "cost": "Dos Controles de Enardecimiento",
          "dicePool": "Resolución + Auspex contra Resolución + Inteligencia",
          "duration": "Hasta que termine, de modo voluntario o no",
          "description": "(Amalgama: Dominación 3) Toma control total del cuerpo de un mortal desplazando su voluntad. El vampiro dirige al mortal como un títere mientras su propio cuerpo queda inerte."
        },
        {
          "id": "telepathy",
          "name": "Telepatía",
          "level": 5,
          "cost": "Un control de Enardecimiento (más 1 punto de Fuerza de Voluntad con los vampiros no voluntarios)",
          "dicePool": "Resolución + Auspex contra Astucia + Subterfugio",
          "duration": "Aproximadamente un minuto por control de Enardecimiento. Aumentado a una escena completa en sujetos voluntarios.",
          "description": "Lee mentes y proyecta pensamientos propios. Puede extraer recuerdos específicos, comunicarse sin palabras o detectar mentiras directamente desde la fuente."
        }
      ],
      "color": "#7b3fa0",
      "colorDark": "#4a1a70",
      "colorGlow": "rgba(123,63,160,0.4)",
      "clanes": [
        "Tremere",
        "Malkavian",
        "Toreador"
      ],
      "iconType": "eye"
    },
    {
      "id": "celerity",
      "name": "Celeridad",
      "description": "Celeridad permite que los vampiros se muevan más rápido que cualquier criatura natural. Hace más que conceder una velocidad sobrenatural: los vampiros que la emplean realmente parecen pensar casi tan rápido como actúan.",
      "tipo": "Físico",
      "amenaza": "Media-alta. La mayoría de los Poderes de Celeridad son claramente inhumanos y lo único que la salva es que son muy difíciles de captar en una película o una fotografía.",
      "resonancia": "Colérica. Miedo y terror absoluto, corredores, atletas, usuarios de alcaloides y anfetaminas, jugadores habituales de shooters en primera persona y otros juegos de acción rápida.",
      "powers": [
        {
          "id": "cats-grace",
          "name": "Gracia Felina",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Equilibrio y elegancia sobrehumanos. Nunca tropieza ni cae involuntariamente; puede moverse por superficies inestables, estrechas o resbaladizas sin dificultad."
        },
        {
          "id": "rapid-reflexes",
          "name": "Reflejos Rápidos",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Reacciona instantáneamente a cualquier peligro. Añade Celeridad a la Iniciativa y permite defenderse de ataques por sorpresa que normalmente no podrían esquivarse."
        },
        {
          "id": "fleetness",
          "name": "Presteza",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Añade el valor de Celeridad como dados extra a todas las reservas de acción física durante una escena completa."
        },
        {
          "id": "blink",
          "name": "Pestañeo",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Destreza + Atletismo o lo que sea necesario",
          "duration": "Un turno",
          "description": "Se desplaza en línea recta a velocidad invisible, reposicionándose en combate o escapando antes de que nadie pueda reaccionar. Los testigos solo ven el punto de inicio y de llegada."
        },
        {
          "id": "traversal",
          "name": "Recorrido",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Destreza + Atletismo",
          "duration": "Un turno",
          "description": "Corre por cualquier superficie —verticales, techos, superficies líquidas— a velocidad asombrosa. La velocidad de movimiento se multiplica drásticamente."
        },
        {
          "id": "unerring-aim",
          "name": "Puntería Certera",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un solo ataque",
          "description": "(Amalgama: Auspex 2) El tiempo se ralentiza perceptivamente, permitiendo disparos o lanzamientos de precisión imposible incluso contra objetivos en movimiento."
        },
        {
          "id": "draught-of-elegance",
          "name": "Sorbo de Elegancia",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Celeridad. Quien beba de él obtiene temporalmente los beneficios de Gracia Felina y Reflejos Rápidos."
        },
        {
          "id": "lightning-strike",
          "name": "Golpe Relámpago",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Pool de combate normal (Destreza + Atletismo o Pelea)",
          "duration": "Un solo ataque",
          "description": "Golpea a un enemigo a velocidad invisible antes de que pueda reaccionar. El objetivo no puede gastar dados de defensa; recibe el impacto como si estuviera desprevenido."
        },
        {
          "id": "split-second",
          "name": "Segundo Quebrado",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Pool de acción normal según la actividad realizada",
          "duration": "Aproximadamente una acción, a discreción del Narrador",
          "description": "Puede actuar en el mismo instante en que es atacado, interrumpiendo la acción del atacante antes de que se complete. Puede usar esta acción para atacar, escapar o cualquier acción rápida."
        }
      ],
      "color": "#1a8aaa",
      "colorDark": "#0a5a7a",
      "colorGlow": "rgba(26,138,170,0.4)",
      "clanes": [
        "Brujah",
        "Toreador",
        "Banu Haqim"
      ],
      "iconType": "bolt"
    },
    {
      "id": "dominate",
      "name": "Dominación",
      "description": "Dominación permite al vampiro controlar las acciones de los demás, manipular sus recuerdos y obligar a las criaturas vivas a realizar actos que no llevarían a cabo por propia voluntad. La mayoría de los Poderes requieren contacto visual con la víctima.",
      "tipo": "Mental",
      "amenaza": "Baja. Salvo que alguien Domine a todo un auditorio para que salte desde los acantilados de Dover, sigue siendo uno de los Poderes vampíricos más sutiles.",
      "resonancia": "Flemática. La sangre de los sumisos o los dominantes, amos y esclavos, capitanes de la industria, los poderosos, líderes de sectas y sus seguidores.",
      "powers": [
        {
          "id": "compel",
          "name": "Compeler",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Dominación contra Inteligencia + Resolución",
          "duration": "No más de una escena",
          "description": "Impone una orden simple e irresistible mediante contacto visual: una frase, una sola acción. La víctima la ejecuta de inmediato aunque vaya contra sus intereses."
        },
        {
          "id": "cloud-memory",
          "name": "Nublar la Memoria",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Dominación contra Astucia + Resolución",
          "duration": "Indefinida",
          "description": "Borra los últimos minutos de memoria de la víctima con una sola palabra (¡olvida!). La víctima no recuerda al vampiro ni lo que ocurrió."
        },
        {
          "id": "dementation",
          "name": "Dementación",
          "level": 2,
          "cost": "Un control de Enardecimiento por escena",
          "dicePool": "Manipulación + Dominación contra Compostura + Inteligencia",
          "duration": "Una escena",
          "description": "(Amalgama: Ofuscación 2) Siembra semillas de locura a través de conversación casual. La víctima desarrolla irracionalidades y fobias que persisten tiempo después."
        },
        {
          "id": "mesmerize",
          "name": "Mesmerismo",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Hasta que se ejecuta la orden o la escena finaliza, lo que ocurra primero",
          "description": "Hipnotiza a la víctima implantando órdenes complejas que ejecutará como si fueran propias. Requiere contacto visual prolongado y relativo silencio."
        },
        {
          "id": "submerged-directive",
          "name": "Directriz Sumergida",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "Como Mesmerismo",
          "duration": "Pasiva (nunca expira)",
          "description": "Amplía Mesmerismo para implantar órdenes con disparadores condicionales: la orden permanece dormida hasta que ocurra un evento específico fijado por el vampiro."
        },
        {
          "id": "forgetful-mind",
          "name": "Mente Olvidadiza",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Dominación contra Inteligencia + Resolución",
          "duration": "Indefinida",
          "description": "Reescribe o borra fragmentos enteros de la memoria de la víctima, pudiendo sustituirlos por recuerdos falsos detallados y coherentes."
        },
        {
          "id": "rationalize",
          "name": "Racionalizar",
          "level": 4,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Indefinida",
          "description": "Las víctimas de Dominación creen firmemente que actuaron por voluntad propia. No pueden ser convencidas de lo contrario por medios mundanos."
        },
        {
          "id": "terminal-decree",
          "name": "Decreto Terminal",
          "level": 5,
          "cost": "Sin coste adicional de Ansia, pero el coste en Humanidad es potencialmente severo",
          "dicePool": "Como el Poder de Dominación utilizado",
          "duration": "Pasiva",
          "description": "Amplía cualquier Poder de Dominación para que pueda incluir órdenes que conduzcan a la muerte de la víctima. No hay penalización de dados por el instinto de supervivencia, pero viola Humanidad con severidad."
        },
        {
          "id": "mass-manipulation",
          "name": "Manipulación en Masa",
          "level": 5,
          "cost": "Un control de Enardecimiento además del coste del Poder amplificado",
          "dicePool": "Como el Poder de Dominación utilizado, con penalización de dados igual al número de objetivos extra",
          "duration": "Según el poder amplificado",
          "description": "Extiende cualquier Poder de Dominación a grupos enteros de mortales simultáneamente. Se aplica una penalización de dados por cada objetivo adicional más allá del primero."
        }
      ],
      "color": "#2a5aaa",
      "colorDark": "#152575",
      "colorGlow": "rgba(42,90,170,0.4)",
      "clanes": [
        "Ventrue",
        "Tremere",
        "Malkavian"
      ],
      "iconType": "crown"
    },
    {
      "id": "fortitude",
      "name": "Fortaleza",
      "description": "Muy apreciada por los inmortales, Fortaleza permite resistir asaltos físicos y mentales. Quienes poseen Fortaleza son ejemplos de los pilares impasibles de la sociedad de los Vástagos, capaces de resistir golpes y encantamientos sin moverse o mostrar deterioro.",
      "tipo": "Físico",
      "amenaza": "Media. Los testigos sin duda reaccionan cuando alguien recibe una paliza brutal o una lluvia de balas y sale aparentemente ileso.",
      "resonancia": "Melancólica. Supervivientes de guerra, maltratos o desgracias; corredores de resistencia; alpinistas; infantería y fuerzas especiales; aquéllos con un sistema inmunológico muy fuerte.",
      "powers": [
        {
          "id": "unswayable-mind",
          "name": "Mente Imperturbable",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Resistencia mística a manipulación mental mundana: coacción, drogas, tortura, interrogatorio. Añade Fortaleza a todas las tiradas de resistencia contra dichos efectos."
        },
        {
          "id": "resilience",
          "name": "Resiliencia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Añade el valor de Fortaleza directamente como casillas extra de Salud. Pasivo y permanente; aumenta la resistencia total del vampiro de forma inmediata."
        },
        {
          "id": "enduring-beasts",
          "name": "Bestias Resistentes",
          "level": 2,
          "cost": "Ninguno (para famulus); un control de Enardecimiento (para otros animales)",
          "dicePool": "Resistencia + Animalismo (para animales que no sean famulus)",
          "duration": "Una escena",
          "description": "(Amalgama: Animalismo 1) Comparte parte de la dureza sobrenatural del vampiro con los animales bajo su control, aumentando su resistencia al daño."
        },
        {
          "id": "toughness",
          "name": "Dureza",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Al gastar Ansia tras recibir daño agravado, convierte automáticamente 1 nivel de agravado en superficial por punto de Fortaleza. Sin tirada; solo activación."
        },
        {
          "id": "defy-bane",
          "name": "Desafiar Prohibición",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Supervivencia (para activarlo en modo reflejo)",
          "duration": "Una escena o hasta que expire, lo que ocurra primero",
          "description": "Resistencia temporal al fuego, la luz solar y otras debilidades específicas del clan. La duración e intensidad dependen del margen obtenido."
        },
        {
          "id": "fortify-the-inner-facade",
          "name": "Fortificar la Fachada Interior",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Protege la mente contra Dominación, Auspex y otros poderes mentales. Añade Fortaleza a las tiradas de resistencia contra poderes que afecten la mente."
        },
        {
          "id": "draught-of-endurance",
          "name": "Sorbo de Aguante",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Fortaleza. Quien beba de él obtiene temporalmente los beneficios de Mente Imperturbable y Resiliencia."
        },
        {
          "id": "prowess-from-pain",
          "name": "Arrojo por el Dolor",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Cada punto de daño agravado recibido añade un dado extra a todas las reservas de acción del vampiro. El dolor lo hace más letal."
        },
        {
          "id": "flesh-of-marble",
          "name": "Carne de Mármol",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "La piel se endurece como el mármol. Otorga un valor de Armadura igual al nivel de Fortaleza que se resta a cada daño físico recibido. Dura una escena completa."
        }
      ],
      "color": "#9a7a1a",
      "colorDark": "#6a5010",
      "colorGlow": "rgba(154,122,26,0.4)",
      "clanes": [
        "Ventrue",
        "Hecata",
        "Salubri"
      ],
      "iconType": "shield"
    },
    {
      "id": "obfuscation",
      "name": "Ofuscación",
      "description": "Para los Vástagos que practican Ofuscación, la Disciplina proporciona la cobertura perfecta para acercarse a una víctima, parecer inofensivos y escapar cuando los ánimos se caldean demasiado. Los Poderes de Ofuscación funcionan mediante mesmerismo ambiental de bajo nivel.",
      "tipo": "Mental",
      "amenaza": "Baja. Evitar la detección es el objetivo de esta Disciplina.",
      "resonancia": "Melancólica. Los ignorados e invisibles, los sintecho, olvidados y deprimidos; espías, carteristas, sirvientes excelentes, encargados de material y tramoyistas.",
      "powers": [
        {
          "id": "cloak-of-shadows",
          "name": "Capa de Sombras",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Si está quieto y con algo de cobertura, el vampiro se funde con el entorno. Prácticamente invisible para quien no sepa exactamente dónde mirar."
        },
        {
          "id": "silence-of-death",
          "name": "Silencio de la Muerte",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Anula todo sonido generado por el usuario: pasos, ropa, respiración. Se mueve en silencio absoluto sobrenatural."
        },
        {
          "id": "unseen-passage",
          "name": "Paso Invisible",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Sigilo (para mantenerse oculto en movimiento)",
          "duration": "Una escena o hasta que lo detecten",
          "description": "El vampiro puede moverse libremente mientras permanece completamente invisible. Cualquier acción violenta o dramática rompe el efecto automáticamente."
        },
        {
          "id": "ghost-in-the-machine",
          "name": "Fantasma en la Máquina",
          "level": 3,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Como el Poder utilizado",
          "description": "Transmite la invisibilidad a cámaras y dispositivos electrónicos. El vampiro no aparece en grabaciones, feeds en vivo ni sistemas de seguridad."
        },
        {
          "id": "mask-of-a-thousand-faces",
          "name": "Máscara de las Mil Caras",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Subterfugio (para pasar desapercibido activamente)",
          "duration": "Una escena",
          "description": "En lugar de desaparecer, adopta el aspecto de un transeúnte genérico e irreconocible. Nadie recuerda su cara ni puede describirla; parece una persona diferente para cada observador."
        },
        {
          "id": "vanish",
          "name": "Desvanecerse",
          "level": 4,
          "cost": "Como el Poder aumentado",
          "dicePool": "Astucia + Ofuscación contra Astucia + Consciencia",
          "duration": "Como el Poder aumentado",
          "description": "(Prerrequisito: Capa de Sombras) Activa Capa de Sombras o Paso Invisible incluso estando bajo observación directa, sin necesidad de moverse ni cubrirse primero."
        },
        {
          "id": "conceal",
          "name": "Ocultar",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Ofuscación",
          "duration": "Una noche, con una noche adicional por punto de margen en la victoria",
          "description": "(Amalgama: Auspex 3) Extiende la Ofuscación a objetos inanimados: puede ocultar puertas, vehículos, cadáveres u otros objetos de hasta cierto tamaño."
        },
        {
          "id": "impostors-guise",
          "name": "Disfraz del Impostor",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Ofuscación, Manipulación + Interpretación",
          "duration": "Una escena",
          "description": "(Prerrequisito: Máscara de las Mil Caras) Adopta la apariencia exacta de una persona específica conocida, incluyendo voz y manierismos."
        },
        {
          "id": "cloak-the-gathering",
          "name": "Encubrimiento de la Concurrencia",
          "level": 5,
          "cost": "Un control de Enardecimiento además del coste del Poder extendido",
          "dicePool": "N/A",
          "duration": "Como el Poder extendido",
          "description": "Extiende su manto de Ofuscación a los compañeros cercanos, ocultándolos a todos junto a él mientras permanezcan próximos."
        }
      ],
      "color": "#5a5a7a",
      "colorDark": "#2a2a4a",
      "colorGlow": "rgba(90,90,122,0.4)",
      "clanes": [
        "Nosferatu",
        "Malkavian",
        "Banu Haqim"
      ],
      "iconType": "ghost"
    },
    {
      "id": "potence",
      "name": "Potencia",
      "description": "Potencia es la fuerza impulsada con Vitae más allá de las capacidades de otros vampiros. Es la capacidad del vampiro de obligar a su cuerpo a realizar acciones imposibles de replicar por los mortales.",
      "tipo": "Físico",
      "amenaza": "De media a alta. Los usos menores de la Disciplina podrían pasar como 'fuerza histérica', pero cuando el pavimento se agrieta y los edificios comienzan a desmoronarse, esa explicación pierde credibilidad.",
      "resonancia": "Colérica. Los fuertes y saludables; atletas y hombres y mujeres jóvenes en su mejor momento, ratas de gimnasio, luchadores, trabajadores de la construcción y leñadores, estibadores.",
      "powers": [
        {
          "id": "lethal-body",
          "name": "Cuerpo Letal",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Los golpes desarmados causan daño agravado a mortales, desgarrando carne y rompiendo huesos. Contra vampiros sigue siendo daño superficial."
        },
        {
          "id": "soaring-leap",
          "name": "Salto Vertiginoso",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "Salta alturas y distancias imposibles para cualquier humano, proporcionales a su nivel de Potencia. Puede usarse para escalar edificios de un salto."
        },
        {
          "id": "prowess",
          "name": "Bravura",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Satura el cuerpo con Vitae muscular. Añade el valor de Potencia como dados extra a todas las reservas de acción física (combate cuerpo a cuerpo, atletismo, fuerza) durante una escena."
        },
        {
          "id": "uncanny-grip",
          "name": "Agarre Asombroso",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Fuerza + Atletismo (escalar); Fuerza + Pelea (inmovilizar, contra Fuerza + Atletismo)",
          "duration": "Una escena",
          "description": "Hunde dedos y pies en cualquier superficie dura, permitiendo escalar paredes completamente lisas. En combate puede inmovilizar a un objetivo con Fuerza sobrenatural."
        },
        {
          "id": "brutal-feed",
          "name": "Alimentación Brutal",
          "level": 3,
          "cost": "Ninguno",
          "dicePool": "Fuerza + Potencia contra Destreza + Atletismo del objetivo",
          "duration": "Una alimentación",
          "description": "Puede alimentarse a distancia de hasta unos metros, arrancando la sangre del cuerpo de la víctima sin contacto físico. La víctima sufre daño. Conocido como el \"Beso Salvaje\"."
        },
        {
          "id": "spark-of-rage",
          "name": "Chispa de Ira",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Potencia",
          "duration": "Una escena",
          "description": "(Amalgama: Presencia 3) Transmite rabia sobrenatural a criaturas cercanas, pudiendo desencadenar Frenesís en otros vampiros o brutalidad en mortales."
        },
        {
          "id": "draught-of-might",
          "name": "Sorbo de Poderío",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una noche; para vampiros, hasta la siguiente alimentación o cuando alcance Ansia 5",
          "description": "La Sangre se satura con Potencia. Quien beba de él obtiene temporalmente fuerza sobrenatural y los beneficios de Cuerpo Letal."
        },
        {
          "id": "fist-of-caine",
          "name": "Puño de Caín",
          "level": 5,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Los golpes desarmados causan daño agravado incluso a vampiros, pudiendo desmembrar. El daño es devastador contra cualquier tipo de criatura."
        },
        {
          "id": "earthshock",
          "name": "Temblor de Tierra",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Fuerza + Atletismo contra Destreza + Atletismo de cada objetivo",
          "duration": "Un uso",
          "description": "Golpea el suelo generando una onda de choque que derriba y aturde a todos los oponentes en un radio cercano. Los afectados caen al suelo y pierden su próxima acción."
        }
      ],
      "color": "#9a1a1a",
      "colorDark": "#6a0808",
      "colorGlow": "rgba(154,26,26,0.4)",
      "clanes": [
        "Brujah",
        "Nosferatu",
        "Gangrel"
      ],
      "iconType": "fist"
    },
    {
      "id": "presence",
      "name": "Presencia",
      "description": "Presencia es una Disciplina que expresa la existencia bipolar del vampiro. Sirve para atraer a las víctimas o dispersarlas aterrorizadas. Permite el control de multitudes, la manipulación emocional y la devoción forzada. Presencia afecta las emociones de aquéllos sujetos a ella, no las mentes.",
      "tipo": "Mental",
      "amenaza": "Baja-Media. Al ser un poder sutil, la gente rara vez se da cuenta de que ha sido afectada por Presencia.",
      "resonancia": "Sanguínea. Los bellos y lujuriosos, aquéllos completamente enamorados del vampiro, modelos, actores y estrellas de cine, convincentes oradores públicos y privados, estrellas de YouTube e influencers de Instagram.",
      "powers": [
        {
          "id": "daunt",
          "name": "Atemorizar",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Una escena o hasta que se termine de forma intencionada",
          "description": "Emana un aura amenazante de depredador sobrenatural. Los que fallan la tirada sienten pánico instintivo: huyen, se someten o quedan paralizados según el margen."
        },
        {
          "id": "awe",
          "name": "Fascinación",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una escena o hasta que se termine de forma intencionada",
          "description": "Toda persona cercana siente una atracción inexplicable e irresistible hacia el vampiro. Añade Presencia como dados extra a pruebas sociales."
        },
        {
          "id": "lingering-kiss",
          "name": "Beso Persistente",
          "level": 2,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Hasta que se resista con éxito",
          "description": "Los mortales de los que se alimenta se vuelven adictos al Beso del vampiro, buscando activamente repetir la experiencia y volviéndose fácilmente manejables."
        },
        {
          "id": "entrancement",
          "name": "Encantamiento",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Astucia",
          "duration": "Una hora más otra por punto de margen",
          "description": "Enfoca el encanto sobrenatural en una sola persona, induciéndole una fascinación intensa similar al enamoramiento profundo."
        },
        {
          "id": "dread-gaze",
          "name": "Mirada Aterradora",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Un turno",
          "description": "Con una sola mirada, infunde terror absoluto en un objetivo. El sujeto huye, queda paralizado o se somete completamente según el margen obtenido."
        },
        {
          "id": "summon",
          "name": "Invocación",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Manipulación + Presencia contra Compostura + Inteligencia",
          "duration": "Una noche",
          "description": "Convoca mentalmente a alguien sobre quien ya haya usado Presencia. El objetivo siente una necesidad irresistible de acudir, sin saber necesariamente por qué."
        },
        {
          "id": "irresistible-voice",
          "name": "Voz Irresistible",
          "level": 4,
          "cost": "Sin coste adicional",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "(Amalgama: Dominación 1) Las órdenes de Dominación funcionan solo con la voz, sin necesidad de contacto visual directo."
        },
        {
          "id": "star-magnetism",
          "name": "Magnetismo de Estrella",
          "level": 5,
          "cost": "Un control de Enardecimiento adicional",
          "dicePool": "N/A",
          "duration": "Como el Poder utilizado",
          "description": "Los efectos de Presencia se extienden a quien lo vea en transmisiones en directo o escuche en radio. No requiere presencia física."
        },
        {
          "id": "majesty",
          "name": "Majestad",
          "level": 5,
          "cost": "Dos controles de Enardecimiento",
          "dicePool": "Carisma + Presencia contra Compostura + Resolución",
          "duration": "Una escena",
          "description": "Su presencia se vuelve tan abrumadora que nadie puede atacarle, contradecirle ni ignorarle sin superar una prueba de dificultad muy alta."
        }
      ],
      "color": "#9a3a6a",
      "colorDark": "#6a1a4a",
      "colorGlow": "rgba(154,58,106,0.4)",
      "clanes": [
        "Toreador",
        "Ventrue",
        "Brujah"
      ],
      "iconType": "rose"
    },
    {
      "id": "protean",
      "name": "Protean",
      "description": "El poder de mutar, cambiar de forma y convertirse en depredadores cada vez más letales es tan natural para el vampiro como lo es para el Lupino. Los practicantes de Protean utilizan la Disciplina por su utilidad: convertirse en una bestia, transformar sus miembros en armas o cambiar de forma para evadir la captura.",
      "tipo": "Físico",
      "amenaza": "Alta. Todos los Poderes de Protean, una de las Disciplinas más descaradas de los vampiros, pueden violar la Mascarada por sí mismos.",
      "resonancia": "Sangre animal, especialmente de aquéllos que coinciden con la forma adoptada; la sangre de hombres lobo, changelings y otras quimeras sobrenaturales de hombres y bestias.",
      "powers": [
        {
          "id": "eyes-of-the-beast",
          "name": "Ojos de la Bestia",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "El tiempo deseado",
          "description": "Genera un brillo rojo sobrenatural en los ojos que permite ver en oscuridad absoluta con total claridad. Es visible para otros en la oscuridad."
        },
        {
          "id": "weight-of-the-feather",
          "name": "Peso de la Pluma",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Astucia + Supervivencia",
          "duration": "El tiempo deseado",
          "description": "Reduce su masa efectiva. Cae sin daño desde cualquier altura, no activa sensores de presión y puede trepar superficies sin dejar marca."
        },
        {
          "id": "feral-weapons",
          "name": "Armas Salvajes",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena",
          "description": "Extiende garras y colmillos a proporciones monstruosas. Causan daño agravado a mortales y vampiros. Las garras pueden escalar superficies."
        },
        {
          "id": "shapechange",
          "name": "Cambiar de Forma",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "Adopta la forma de un animal de tamaño similar (lobo, pantera, grandes reptiles), adquiriendo todas sus capacidades físicas naturales."
        },
        {
          "id": "earth-meld",
          "name": "Fusión con la Tierra",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Un día o más, o hasta que sea perturbado",
          "description": "Se hunde en la tierra o cualquier superficie natural para dormir el día de forma segura e indetectable. Solo el amanecer o un peligro grave lo despiertan."
        },
        {
          "id": "metamorphosis",
          "name": "Metamorfosis",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "(Prerrequisito: Cambiar de Forma) Puede asumir formas adicionales de animales y combinar rasgos de distintas formas en una sola."
        },
        {
          "id": "the-unfettered-heart",
          "name": "Corazón Liberado",
          "level": 5,
          "cost": "Ninguno",
          "dicePool": "N/A",
          "duration": "Pasiva",
          "description": "El corazón se desprende y se guarda fuera del cuerpo. Mientras esté separado, el vampiro es inmune a la estaca en el pecho."
        },
        {
          "id": "mist-form",
          "name": "Forma de Niebla",
          "level": 5,
          "cost": "De uno a tres controles de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena, a menos que uno quiera terminar antes",
          "description": "Se convierte en una nube de niebla: completamente intocable, intangible e incapaz de sufrir daño físico. No puede atacar en este estado."
        }
      ],
      "color": "#3a7a4a",
      "colorDark": "#1a4a2a",
      "colorGlow": "rgba(58,122,74,0.4)",
      "clanes": [
        "Gangrel"
      ],
      "iconType": "claws"
    },
    {
      "id": "blood-sorcery",
      "name": "Hechicería de Sangre",
      "description": "También llamada Taumaturgia (por los Tremere) o Quietus/Extinción (por los Banu Haqim). A diferencia de otras Disciplinas, los practicantes de Hechicería de Sangre requieren profesores. Confiere Poderes y desbloquea la capacidad de realizar rituales hasta el nivel del usuario en la Disciplina.",
      "tipo": "Hechicería",
      "amenaza": "Baja-alta. La apariencia individual de los Poderes y rituales de Hechicería de Sangre varía tanto como sus efectos.",
      "resonancia": "Sanguínea. Aunque no es inherente a la Sangre en sí misma, Hechicería de Sangre responde con entusiasmo a la sangre de ocultistas humanos, hechiceros y líderes de sectas, así como a hemofílicos y bibliófilos.",
      "powers": [
        {
          "id": "a-taste-for-blood",
          "name": "Sabor de la Sangre",
          "level": 1,
          "cost": "Ninguno",
          "dicePool": "Resolución + Hechicería de Sangre",
          "duration": "N/A",
          "description": "Al probar una gota de sangre identifica al dueño: clan, generación aproximada, Potencia de Sangre y nivel de Ansia actual."
        },
        {
          "id": "corrosive-vitae",
          "name": "Vitae Corrosiva",
          "level": 1,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre (para controlar la corrosión con precisión)",
          "duration": "N/A",
          "description": "Altera su Sangre haciéndola corrosiva al contacto con materiales muertos: disuelve ropa, madera, metal, cerrojo o grilletes. El Ansia gastado determina la potencia del ácido."
        },
        {
          "id": "extinguish-vitae",
          "name": "Extinguir Vitae",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Inteligencia + Hechicería de Sangre contra Resistencia + Compostura",
          "duration": "N/A",
          "description": "Elimina las propiedades de no-vida de la sangre de otro vampiro a distancia, incrementando drásticamente su Ansia sin necesidad de contacto."
        },
        {
          "id": "blood-of-potency",
          "name": "Sangre de Potencia",
          "level": 3,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Hechicería de Sangre",
          "duration": "Una escena o una noche",
          "description": "Concentra su Sangre para elevar temporalmente su Potencia de Sangre efectiva, mejorando todos los beneficios asociados a ella."
        },
        {
          "id": "scorpions-touch",
          "name": "Toque de Escorpión",
          "level": 3,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "El veneno mantiene su potencia durante una escena",
          "description": "Transmuta su Sangre en veneno paralizante. Paraliza mortales y debilita vampiros. Puede impregnar armas blancas con el veneno."
        },
        {
          "id": "theft-of-vitae",
          "name": "Robo de Vitae",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Hechicería de Sangre contra Astucia + Ocultismo",
          "duration": "Una alimentación",
          "description": "Abre una arteria a distancia en una víctima y atrae su sangre hacia el usuario sin contacto físico. La víctima sufre el daño de alimentarse de ella a la fuerza."
        },
        {
          "id": "cauldron-of-blood",
          "name": "Caldero de Sangre",
          "level": 5,
          "cost": "Un control de Enardecimiento y obtener una (o más) Máculas",
          "dicePool": "Resolución + Hechicería de Sangre contra Compostura + Ocultismo o Fortaleza",
          "duration": "Un turno",
          "description": "Hace hervir la sangre de la víctima en sus propias venas, causando daño agravado masivo. Uno de los poderes más letales de la Hechicería."
        },
        {
          "id": "baals-caress",
          "name": "Caricia de Baal",
          "level": 5,
          "cost": "Uno o más controles de Enardecimiento",
          "dicePool": "Fuerza + Hechicería de Sangre contra Resistencia + Ocultismo o Fortaleza",
          "duration": "El veneno mantiene su potencia durante una escena",
          "description": "Transmuta su Sangre en un veneno extremadamente agresivo y letal. Puede impregnar objetos, aplicarse por contacto o ingerirse. Mortal para mortales y vampiros."
        }
      ],
      "color": "#aa1a2a",
      "colorDark": "#7a0a10",
      "colorGlow": "rgba(170,26,42,0.4)",
      "clanes": [
        "Tremere",
        "Banu Haqim"
      ],
      "iconType": "blood"
    },
    {
      "id": "thin-blood-alchemy",
      "name": "Alquimia de Sangre Débil",
      "description": "La Sangre Débil de las últimas Generaciones apenas tiene poder propio, pero ciertos Sangre Débil han aprendido a usarla como catalizador. Al mezclar sangre humana fuertemente resonante y a veces otras sustancias con su propia Vitae, los alquimistas pueden simular una amplia gama de Poderes de otras Disciplinas y crear algunos Poderes únicos propios. La Alquimia puede simular algunos Poderes de Hechicería de Sangre, pero no rituales.",
      "tipo": "Especial (sólo para Sangre Débil)",
      "amenaza": "Varía según los Poderes que imita y el método utilizado.",
      "resonancia": "La necesaria para cada fórmula, por lo que varía en consecuencia.",
      "metodos": [
        {
          "id": "athanor-corporis",
          "name": "Athanor Corporis",
          "description": "El alquimista usa su propio cuerpo como el atanor (el horno alquímico). Los ingredientes suelen consistir en distintos tipos de mezclas de Resonancia. El alquimista bebe los diferentes tipos de sangre resonante necesarios; tirada de destilación de Resistencia + Alquimia. Sólo puede activarse un Poder a la vez y todo nuevo Poder debe destilarse antes de ser activado (requiere al menos tres turnos de concentración)."
        },
        {
          "id": "calcinatio",
          "name": "Calcinatio",
          "description": "El alquimista utiliza el cuerpo de un humano como atanor, ajustando su estado biofísico mediante presión emocional y encantamientos. El alquimista alimenta con su Sangre al ser humano elegido y tira por la destilación con Manipulación + Alquimia. El alquimista bebe su sangre para usar el Poder. Sólo puede destilar un Poder por víctima."
        },
        {
          "id": "fixatio",
          "name": "Fixatio",
          "description": "El alquimista usa un atanor convencional (horno, fragua, etc.). El alquimista derrama su Sangre y los ingredientes en el atanor y los destila con una tirada de Inteligencia + Alquimia. Las fórmulas resultantes quedan listas para ser ingeridas (tirada de destilación al consumirlas). El alquimista puede cargar tantas fórmulas fijadas como su Astucia o Destreza, y almacenar el doble de su Alquimia más sus puntos en Refugio."
        }
      ],
      "powers": [
        {
          "id": "far-reach",
          "name": "Alcance Lejano",
          "level": 1,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Resolución + Alquimia contra Fuerza + Atletismo",
          "duration": "Un turno, a menos que se sostenga",
          "description": "Mueve objetos o personas a distancia mediante telekinesis alquímica. La fuerza y alcance dependen del margen de la tirada."
        },
        {
          "id": "profane-hieros-gamos",
          "name": "Hieros Gamos Profano",
          "level": 1,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "Permanente hasta que se vuelva a realizar",
          "description": "Permite cambiar de sexo biológico aprovechando la naturaleza fluida de la condición de Sangre Débil. El proceso tarda horas y requiere destilación."
        },
        {
          "id": "haze",
          "name": "Neblina",
          "level": 1,
          "cost": "Un control de Enardecimiento",
          "dicePool": "N/A",
          "duration": "Una escena o hasta que termine voluntariamente",
          "description": "Genera una nube de niebla persistente alrededor del usuario que oculta su identidad, dificulta los ataques en su contra y reduce la visibilidad."
        },
        {
          "id": "envelop",
          "name": "Envolver",
          "level": 2,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Astucia + Alquimia contra Resistencia + Supervivencia",
          "duration": "Hasta que concluye la escena o el alquimista termina el efecto voluntariamente",
          "description": "La niebla se adhiere a la víctima elegida, cegándola completamente. Los mortales además comienzan a asfixiarse dentro de la nube."
        },
        {
          "id": "defractionate",
          "name": "Defraccionar",
          "level": 3,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "N/A",
          "description": "Produce un elixir que, añadido a sangre médica fraccionada, la convierte temporalmente en Vitae utilizable por cualquier vampiro."
        },
        {
          "id": "aerial-impulse",
          "name": "Ímpetu Aéreo",
          "level": 4,
          "cost": "Un control de Enardecimiento",
          "dicePool": "Fuerza + Alquimia contra Fuerza + Atletismo (si se resiste)",
          "duration": "Una escena",
          "description": "Permite levitar y volar a velocidad considerable. Puede volar en cualquier dirección y cargar objetos o personas de peso limitado."
        },
        {
          "id": "awaken-the-sleeper",
          "name": "Despertar al Durmiente",
          "level": 5,
          "cost": "Un control de Enardecimiento (destilación)",
          "dicePool": "Resistencia/Manipulación/Inteligencia + Alquimia (según método)",
          "duration": "N/A",
          "description": "Crea un elixir que, mezclado con sangre humana y administrado a un vampiro en Letargo, lo despierta sin necesidad de alimentarlo directamente."
        }
      ],
      "color": "#1a7a7a",
      "colorDark": "#0a4a4a",
      "colorGlow": "rgba(26,122,122,0.4)",
      "clanes": [
        "Sangre Débil"
      ],
      "iconType": "flask"
    }
  ]
};

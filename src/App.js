import Modal from "./modal";
import React, {useState} from 'react'
import dayjs from "dayjs";

function App() {

    const [dayToModal, setDayToModal] = useState({})

    const [visible, setVisible] = useState(false)

    const day0 = {
        day: 'Día 0',
        title: 'Hola amor ✨',
        body: `
                    <p>Esto es un pequeño proyecto que se me ocurrió ayer mientras venía de regreso de estar contigo, cada una de estas flores tendrá una sorpresa para ti.</p>
                    <p>Sin embargo, tendrás que esperar 1 día para poder ir desbloqueando cada una. Sé que no te gusta la espera pero valdrá la pena.</p>
                    <p>Hoy también tienes el día 1 desbloqueado así que ve a la siguiente flor :)</p>
                    <b className="font-semibold pt-2">Considera este el inicio de esta travesía.</b>
        `,
        song: ''
    }

    const day1 = {
        day: 'Día 1',
        title: 'Hola corazón 💛️',
        body: `
                    <p>
                        Hoy quiero contarte algo. La mayoría de veces que me preguntan qué cosas me gusta hacer escribir es una de las que incluyo en la lista.
                        Sin embargo es gracioso porque mi último intento de escrito fue hace más de seis meses,
                        ¿se debe esto a falta de inspiración, tiempo o simplemente me he cansado de hacerlo pero la idea de que piensen que escribo me resulta interesante?
                        La nostalgia, la tristeza y la muerte son sentimientos que me llenan cada que creo una nueva nota casi como si estuvieran esperando ese preciso momento.
                        Con este proyecto también intentaré cambiar eso. Sé que soy una persona romántica, y no me refiero a el típico cupído cursi sino a la manera en la que
                        puedo expresarme y sentir un sentimiento. Tú me has ayudado a experimentar cosas diferentes y nuevas y esa será mi inspiración, todo lo que esté aquí
                        es para ti, vino de ti y existe por ti. Eres una persona íncreible y definitivamente llegaste a mi vida para hacerla aún mejor de lo que ya era, como esa
                        última pieza en el rompecabezas que es fundamental para que todas las demás brillen y completen algo mágico.
                    </p>
                    <b>Espero te guste esta  idea loca que tuvo tu novio ingeniero y recuerdes revisar día con día. Te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/2qyLvNLktrdc67OgaayqMW?si=6a0771af65344a24"
    }

    const day2 = {
        day: 'Día 2',
        title: 'Hola mi vida 💛️',
        body: `
                    <p>
                        Cuando fuí con mi primer psicóloga recuerdo que una de mis tareas fue llevar un diario para ir anotando mis logros y pequeñas victorias en el día, esto
                        con el objetivo de tener una forma de "materializarlas" y dejar de normalizar algo como hacer en un día una práctica que debería llevarme una semana o un 10 
                        perfecto como promedio. Por alguna extraña razón siento que esto será como un diario pero acerca de ti. Ayer mientras hacía esto pensaba en lo
                        inesperado que fue el que la última vez que me habían cortado el cabello haya sido para prepararme para nuestra cita, nunca me habría imaginado que en menos de 
                        dos meses tu mamá sería la que me lo estuviera cortando. Siento que han pasado muchas cosas en el poco tiempo que llevamos siendo pareja y solo me emociono más
                        por pensar en todo lo que viene. Eres un sueño hecho realidad y me siento muy feliz y afortunado de poder ser tu pareja, quiero que pienses eso cada que te vea 
                        fijamente y no diga nada. Por cierto, la canción que agregué es la segunda que quiero cantar en el karaoke. 
                    </p>
                    <b>Te amo mucho, me muero por verte 💛️️</b>
        `,
        song: "https://open.spotify.com/track/3td8WklPGKKDSuOHbyxRdD?si=b6f77baf1ddf4514"
    }

    const day3 = {
        day: 'Día 3',
        title: 'Hola mi abogada 💛️',
        body: `
                    <p>
                       Wow, mi mamá ya se refirió a ti como "la licenciada de la familia" ¿fue en broma? Posiblemente, pero nunca pensé que lo haría. Significa mucho para mí que hayas
                       venido a apoyarla en este "problema" y seguramente para ella también porque sabe que cuando necesite a su nuera ella vendrá al rescate como la canción de
                       Junior H. Sentí muy bonito al saber que aunque yo estuviera trabajando tú pudieras estar con mi familia conviviendo y que todo estaba bien, sé que ellos ya vieron también
                       lo mágnifica y especial que eres. 
                       Ayer te dije que ya tenía preparada la canción para hoy y sí, en cuanto leí lo que me dijiste lo supe. Hay una frase muy específica en ella y estoy seguro que la sabrás identificar en cuanto la escuches.
                       Ya quiero poder platicar contigo más a fondo y explicarte porqué esta semana me concentré tanto en mi trabajo.
                       Espero que podamos vernos mañana y si no el sábado será. PERO DEL DOMINGO NO PASA, LO DECRETO.
                    </p>
                    <b>Una vez más, gracias por ser la mejor novia, te amo  💛️️</b>
        `,
        song: "https://open.spotify.com/track/5fqTzpRmb1hzL0J5SD5H4b?si=de27cd857caa4086"
    }

    const day4 = {
        day: 'Día 4',
        title: 'Hola mi motomami 💛️',
        body: `
                    <p>
                       Soy ing. a mucha honra. Mi junta no termina y mi diente me duele no sé porqué. POR ESTAR ESCRIBIENDO ESTO NO ME DESPEDÍ JASJDASJ. Ahora sí, dije que tenías suerte porque hoy no
                       tendrás que esperar todo el día para desbloquear esta tarjeta, benditos los viernes. 
                       Eres mi licenciada favorita, espero que hoy podamos ver The Office o alguna película o un meet para platicar porque sí te extraño. Me gusta mucho platicar y bromear contigo
                       y escucharte, es lo que le falta a mi semana para estar completa. La canción de esta semana es viejita, quizá la conozcas y espero te alegre tu viernes. Ya quiero echar karaoke contigo.
                       Nos ponemos de acuerdo más tarde o mañana para ver si nos vemos esta semana o no. Te extraño fakin faker.
                    </p>
                    <b>Tu novio el ing, te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/11lIZiXNEY3eacKxwEvDiK?si=2becfcef184d46c3"
    }

    const day5 = {
        day: 'Día 5',
        title: 'Hola cariño 💛️',
        body: `
                    <p>
                       Siempre cumplo mi palabra. Este día no tengo mucho que decir mas que gracias por estar conmigo y escucharme. 
                       Aprecio quién eres y que estés conmigo. La canción ya te la había mandado pero creo que deberías escucharla otra vez.
                    </p>
                    <b>Te quiero 💛️️</b>
        `,
        song: "https://open.spotify.com/track/52Bg6oaos7twR7IUtEpqcE?si=f717d4d843354ec8"
    }

    const day6 = {
        day: 'Día 6',
        title: 'Hola Elisa 💛️',
        body: `
                    <p>
                       Hoy no hay mucho que pueda decir, dejaré que la canción lo haga.
                    </p>
                    <b>Te quiero 💛️️</b>
        `,
        song: "https://open.spotify.com/track/1qlyZ5QAPK7WEtIukfMoNM?si=2d810c6464574908"
    }

    const day7 = {
        day: 'Día 7',
        title: 'Hola mi niña 💛️',
        body: `
                    <p>
                       Wow, una semana en racha. La verdad sí esperaba llegar a esto y también llenar todo el jardín. Hoy también pude
                       subir el día más temprano porque todavía no tengo la junta con Pedro para ver qué tanto tocará hacer esta semana.
                       Sé que necesitas afecto y al rato te prometo que me encargaré de ello, gracias por formar parte de mi vida. Espero
                       esta canción te ayude a superar tu día de andar de aquí pa allá. La misión de hoy es terminar el capítulo de The Office
                       y convivir más con tu abuelito. Manifiesta que hoy Mbappé y Francia ganen porque le metí 100 varos, paro 🥺
                    </p>
                    <b>Te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/3T59S3Vh3DOatsmTD8clqP?si=820b379394934238"
    }

    const day8 = {
        day: 'Día 8',
        title: 'Hola mi cielo 💛️',
        body: `
                    <p>
                       Ayer con las canciones de "abuelitos" quería que pusieras esta pero recordé que ya la tenía preparada para este lugar.
                       Ojalá algún día tu abuelito me enseñe a bailarla para poder disfrutarla contigo. Te extraño y ya quiero que el plan que
                       puse en tu agenda se cumpla, será una forma muy bonita de cerrar este mes lleno de tragedias. Te quiero mucho, porfa dame
                       un poco de suerte para poder ganar mis apuestas y así poder comprarte tu plaza en el pjf. Un saludo a la abogada más preciosa de todas.
                       Descansa, te amo.
                 
                    </p>
                    <b>De parte de tu cuchurrumin 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4F6Ne3xyctrytvYm9W68ll?si=b53500712cc74807"
    }

    const day9 = {
        day: 'Día 9',
        title: 'Hola mi gatita 💛️',
        body: `
                    <p>
                       Hoy me di cuenta que te amé dice la cumbia. En esta ocasión quiero decirte que estoy aquí para apoyarte en todo y cada que
                       lo necesites. Extraño mucho platicar contigo y es lo que más quiero que pase en estos últimos días del mes. Sé que nos hemos
                       visto pero siento que no ha sido algo solo de nosotros, ojo no me molesta que nos reunamos con mi familia o con la tuya, solo que
                       ya quiero estar contigo a solas. La canción de hoy es un poco diferente a lo usual pero me gusta un chingo, es de mi banda favorita
                       en español y rezo porque un día podamos verlos en vivo. Te quiero mucho gatita. Sí, esa música tenía ahorita que estaba programando.
                    </p>
                    <b>El ingenoebrio 💛️️</b>
        `,
        song: "https://open.spotify.com/track/6LFqTCYtK8adZGBDL8BTM1?si=9ff9ff30318e4560"
    }

    const day10 = {
        day: 'Día 10',
        title: 'Hola mi gym rat 💛️',
        body: `
                    <p>
                       Si la canción no te pone con un ánimo indescriptible habré fallado en mi cometido. También se supone debería recordarte a la primaria.
                       Imagina hoy que somos novios en la primaria y escríbeme por whatsapp cómo sería para ti paro. Hay muchas cosas que te quiero decir que no son aptas
                       para este lugar y se dirán el sábado o domingo (ojalá sábado) así que en su lugar te diré que me pongo muy feliz cuando me mandas muchas fotos tuyas,
                       neta soy adicto a verte porque eres la niña más preciosa de todas. Le pido a Dios que siempre te cuide y le agradezco por traerte a mi vida.
                       Todo esto lo escribí mientras sonaba la canción de fondo.
                    </p>
                    <b>Te amo mamada 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4u5xLMRN0dgKBFFN8FiNgv?si=e82e196b854b41d9"
    }

    const day11 = {
        day: 'Día 11',
        title: 'Hola mi princesa 💛️',
        body: `
                    <p>
                       Hoy no tengo una historia o algo porque me la pasé perdiendo el tiempo. Solo quiero decir que espero podamos vernos mañana,
                       que pase lo que tenga que pasar y podamos pláticar y estar solos otra vez. Te quiero mucho. Espero te hayas divertido con tus amigos
                       y esto lo estés leyendo al regresar.
                    </p>
                    <b>Te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/0E8qIw6KblOtDQYzzHQrxL?si=9bb7c611fcb547cf"
    }

    const day12 = {
        day: 'Día 12',
        title: 'Hola mi enfermera 💛️',
        body: `
                    <p>
                       Esto se está escribiendo un día después una disculpa. Me enfermé y me tuvieron que atender pero ya todo bien. Ya te dije varias cosas 
                       en este día y la canción irá relacionada a ello. Me encanta estar contigo a solas y ya era justo y necesario sentirte conmigo.
                    </p>
                    <b>De tu único paciente 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4LjkHlY5qDz0hhFJJH5M7a?si=d3ef94c280304ad0"
    }

    const day13 = {
        day: 'Día 13',
        title: 'Hola mi universitaria de vacaciones 💛️',
        body: `
                    <p>
                       Toy cansao mamita. Increíble que en una semana más ya vamos a cumplir dos meses juntos. Hemos pasado muchas cosas y como te dije una vez estoy 
                       aún más emocionado por todo lo que viene para ambos. Te quiero mucho y me hace muy feliz estar contigo. Amo que tú seas mi compañera y cada que te 
                       veo a los ojos estoy más seguro que es contigo con quien quiero estar. Eres perfecta pequeña y no quiero perderte. Hoy me dieron ganas de ponerte
                       una canción de señor, espero la reconozcas. Te amo.
                    </p>
                    <b>De tu f1fas 💛️️</b>
        `,
        song: "https://open.spotify.com/track/1oBMy1HuG3PFfRGXgnuMeC?si=f5c3d4eef14442a5"
    }

    const day14 = {
        day: 'Día 14',
        title: 'Hola mi gatita dorada 💛️',
        body: `
                    <p>
                       Debido a el retraso con los días anteriores este se estará desbloqueando a media noche. Estoy experimentando con el proyecto y creo que si en vacaciones
                       tengo tiempo agregaré más cosillas. Espero disfrutes tu primer día de vacaciones, yo estaré en el jale pero enfocado en que el jueves ya estaré "descansando"
                       un rato. Qué ganas de que pase más rápido el tiempo y ya sea nuestro aniversario, ya quiero llenarte de besos y tomarme ese café contigo, y un panesito con 
                       nutella ufff. Muchas gracias por ser quién eres y por todo lo que haces por mi. Te amo mucho mi vida.
                    </p>
                    <b>De tu golden retriever 💛️️</b>
        `,
        song: "https://open.spotify.com/track/5wqYk9neBUBEISWVS4a3qL?si=46a0da0210f94799"
    }

    const day15 = {
        day: 'Día 15',
        title: 'Hola mi barbie 💛️',
        body: `
                    <p>
                       La verdad es que debido a los acontecimientos de hoy no tengo mucho que contar, o sí pero me gustaría hacerlo cuanto te vea.
                       Solo quiero agradecerte por estar conmigo y apoyarme incluso en este tipo de momentos en los que parece que las cosas no están
                       bien. Eres la luz en mis momentos de oscuridad y agradezco a Dios, la vida, el universo, a quién sea que haya juntado nuestros caminos
                       porque eres el mejor regalo que pude recibir. Espero que siempre seas mi compañera de vida y quiero que tú veas lo mismo en mí.
                    </p>
                        <b>Te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/2iM66WDc3xPT079WNX4aQ3?si=35de8a3799b448f6"
    }

    const day16 = {
        day: 'Día 16',
        title: 'Hola mi cocinera 💛️',
        body: `
                    <p>
                       Hola desde mi escritorio. Los días que te veo son algo complicados en el jardín porque siento que todo te lo digo en ese momento
                       pero a la vez son fáciles porque me dan cosas de las que hablar aquí. Si vivimos juntos me harás pay ¿verdad? La verdad sí soy creyente de
                       que si se enamora por la comida y las cosas que me has dado a probar hechas por tus manos sí lo han logrado. Amo tu ser, amo tu compañía y
                       amo todo lo que haces por mí. Ya te lo dije hace rato en el audio pero agradezco mucho tu apoyo y que estés para mí en este 
                       momento. Te amo millones mi vida.
                    </p>
                        <b>De tu degustador oficial 💛️️</b>
        `,
        song: "https://open.spotify.com/track/7s41ZGjQB5Ur8T0fQlk5uM?si=cb69add8972a4c99"
    }

    const day17 = {
        day: 'Día 17',
        title: 'Hola mi cinéfila 💛️',
        body: `
                    <p>
                       Escribo esto desde rápido porque no quiero que esperes mucho por esta flor. Quiero decirte que te extraño mucho
                       y me haces mucha falta. Es la primer flor que te escribo fuera de casa y a una distancia tan grande de ti. Se me hace un
                       poco raro cuando me preguntan qué tal el trabajo y saber que a fin de mes puedo ser un desempleado, pero sé que podré 
                       resolverlo desde antes porque tengo a la mejor persona apoyándome. Te amo mucho y sé que juntos vamos a poder
                       superar todas las adversidades que se nos pongan, ya quiero verte mi amor.
                    </p>
                        <b>Te amo hoy y siempre 💛️️</b>
        `,
        song: "https://open.spotify.com/track/7rOh0DBUVdsq8JDX0tqXyP?si=27c8a6f8aeac4e63"
    }

    const day18 = {
        day: 'Día 18',
        title: 'Hola mi Holly 💛️',
        body: `
                    <p>
                       Me encanta que entiendas mis cosas, chistes, referencias, etc. creo que hace que lo nuestro sea más especial.
                       En términos de The Office que es lo que vimos hoy, eres mi Pam, mi Holly, mi chica ideal. Te amo y te extraño
                       mucho. Todos los días pienso en ti y eres mi persona favorita del mundo también. Me divierto mucho
                       contigo y cada que estamos juntos olvido todas las cosas malas, eres mi safe place y siempre lo serás. 
                       Espero podamos vernos este fin para llenarte de besos y abrazarte.
                    </p>
                        <b>De tu Michael Scott 💛️️</b>
        `,
        song: "https://open.spotify.com/track/3nTP1d8K9jHFHiozzXGVDF?si=4ca4c5965464442b"
    }

    const day19 = {
        day: 'Día 19',
        title: 'Hola sol de abril 💛️',
        body: `
                    <p>
                       Estar contigo hoy fue lo más bonito de mi semana, te extrañé mucho y me hiciste mucha falta.
                       Te amo y te agradezco mucho por ser mi luz en la oscuridad.
                    </p>
                        <b>De tu Luis Miguel 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4pbG9SUmWIvsROVLF0zF9s?si=14e023ff21a146f7"
    }

    const day20 = {
        day: 'Día 20',
        title: 'Hola inspiración 💛️',
        body: `
                    <p>
                       Escribo esto después de haberme tomado esa cosa que no es jugo. Si muero quiero que sepas
                       que escribir esto diario me hacía muy feliz. No puedo creer que mañana ya cumpliremos 2 meses juntos,
                       hemos pasado muchas cosas y solo estoy esperando todo lo que nos falta. Eres una persona maravillosa
                       y te mereces todo lo bueno de este mundo. Espero que mañana pueda ser un día muy bonito juntos y disfrutes
                       el postrezazo que espero pedir.
                    </p>
                        <b>Te amo millones 💛️️</b>
        `,
        song: "https://open.spotify.com/track/72PH0aQ1x4U9feP72W980h?si=d940970a16b7415c"
    }

    const day21 = {
        day: 'Día 21',
        title: 'Hola churrita 💛️',
        body: `
                    <p>
                       Esto se tuvo que haber subido el día de ayer en nuestro aniversario pero por causas de fuerza muy mayor lo hago
                       hasta hoy, perdóname. A veces me pregunto si no llegarás a aburrirte en algún de que te diga siempre lo mismo pero te juro
                       que no me canso de hacerlo, te amo muchísimo, eres perfecta para mí pequeña. En estos dos meses puedo decir que todo lo
                       que esperaba de la famosa Elisa Durán es cierto y hasta supera mis expectativas. Eres una novia increíble, cariñosa, hermosa,
                       responsable, eres mi inspiración. Sé que a veces no soy el novio que esperas y te pido disculpas por ello, creéme que
                       diario me esfuerzo por ser un buen hombre para ti y espero que siempre me veas de esa manera. Me hace muy feliz que tu
                       familia me acepte, que me incluyas en tus planes y siempre cuentes conmigo porque la verdad es que yo siempre estaré para ti.
                       Así me esté muriendo como hoy, no quiero que en algún momento dudes que te apoyaré. Gracias por ser mi compañera, mi amiga, mi novia,
                       mi todo. Te amo Elisa te aaaaamo.
                    </p>
                        <b>Siempre tuyo, Luis 💛️️</b>
        `,
        song: "https://open.spotify.com/track/6ZEVQ2whiJvhjCNAOJ0DC3?si=1bc4da58023f402d"
    }

    const day22 = {
        day: 'Día 22',
        title: 'Hola licenciada 💛️',
        body: `
                    <p>
                       Hoy soy papá de una nueva hija. Le toqué varias canciones en piano y me acompaño cuando me sentía al borde
                       de la muerte. Ojalá algún día seas tú la que me cuide por la noche. Te deseo mucho éxito mañana en tu entrevista
                       sé que te irá muy bien y que valorarán y verán tus grandes capacidades. Eres una persona y abogada increíble que
                       hasta una maestra sacará del CBTis. Ya quiero verte en la boda y bailar y tener nuestra primer fiesta juntooos.
                    </p>
                        <b>De tu churrito 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4Z3wNhlam0BHHnK1lZmPRU?si=2410782276d74695"
    }

    const day23 = {
        day: 'Día 23',
        title: 'Hola mi penalista 💛️',
        body: `
                    <p>
                       Hoy la flor saldrá a tiempo grasias a Dios. La canción de hoy la estaba escuchando en 
                       el baño y supe al momento que tenía que estar aquí. Estoy muy orgulloso y feliz por ti porque ya vas a poder
                       litigar lo que te gusta, espero aprendas mucho y puedas sobresalir y ser reconocida en este nuevo lugar, ya sabes
                       que cuando necesites algo aquí esta tu novio para apoyarte, escucharte y llenarte de besos. Te amo mucho.
                    </p>
                        <b>De tu programmer 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4yEJ1SNpgfK5GPx3Y0YhIU?si=78e454835e844da3"
    }

    const day24 = {
        day: 'Día 24',
        title: 'Hola preciosa 💛️',
        body: `
                    <p>
                       Si le hubieras dicho al Luis de hace un año que programaría un jardín para su novia con flores que se 
                       desbloquean cada día no sé si te hubiera creído. No sé si te diste cuenta pero al menos en la mac noté
                       que ya vamos a la mitad del camino. Más de 3 semanas subiendo flores para ti. Casualmente hoy también fue un 
                       dia de mucha "reflexión" entre nosotros, vuelvo a repetirte que sé que a veces es díficil hablar de ciertos temas
                       pero creo que solo haciéndolo es como seguiremos creciendo como pareja. Estoy muy feliz y me siento en total confianza de
                       poder hablar contigo las cosas que me hagan sentir raro, triste, o simplemente que no esté de aucerdo, espero que de tu lado 
                       sea lo mismo. Gracias por apoyarme siempre, por escucharme y por darme la seguridad y confianza de estar contigo. 
                    </p>
                        <b>Te llevo siempre conmigo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/3ydweVPwq9PCEVJ8WwqT6u?si=1fbe38b4ac464a40"
    }

    const day25 = {
        day: 'Día 25',
        title: 'Hola mi Pam 💛️',
        body: `
                    <p>
                       Ya quiero verte mañanaaaa y bailar contigo, no sé cómo le voy a hacer así que promete no burlarte. Manifiesta que la pastilla
                       que debo tomar mañana me levante para poder sentirme al 100%. Será muy bonito tener nuestra primer fiesta oficial juntos
                       espero te diviertas mucho. Gracias por estar conmigo mi vida, sé que la canción te mamará. Te amo.
                    </p>
                        <b>Tu Jim 💛️️</b>
        `,
        song: "https://open.spotify.com/track/6ccHuWQAQhdZ0JCFlTHvNM?si=0fb8273b259e4cd9"
    }

    const day26 = {
        day: 'Día 26',
        title: 'Hola mi pareja de baile 💛️',
        body: `
                    <p>
                       Hoy la flor será un poco corta pero quiero decirte que fue un día muy especial para mí. Estar contigo toda la tarde y noche fue
                       una de las cosas más bonitas de todas, te veías preciosa y bailar contigo y todo fue perfecto. Estuve imaginándo qué canción 
                       me gustaría bailar contigo en nuestra boda y la respuesta la tienes aquí.
                    </p>
                        <b>Te amo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/4rHZZAmHpZrA3iH5zx8frV?si=a2cdf0069f304951"
    }

    const day27 = {
        day: 'Día 27',
        title: 'Hola runner 💛️',
        body: `
                    <p>
                       Día post-boda, esto ya te lo había dicho pero muchas gracias por tomar acción de lo que hablamos en días pasados, es algo que
                       valoro mucho y siempre recordaré. Me hace sentir con toda la confianza de hablar contigo cuando me sienta así o acerca de otra cosa y
                       espero tú te sientas igual. La flor de hoy será para animarte para que el día de mañana inicies con todo en tu nuevo despacho y en las clases
                       de la uni. Eres una chingona y puedes y logras todo lo que te propones, estoy muy orgulloso de ti y sabes que estoy para lo que necesites. La 
                       canción de hoy será para recordarte que todo estará bien y que ahora me tienes a tu lado.
                 
                    </p>
                        <b>Te adoro 💛️️</b>
        `,
        song: "https://open.spotify.com/track/5YciOakY5dB5dULkiLdCaf?si=60254947d7cb4bbd"
    }

    const day28 = {
        day: 'Día 28',
        title: 'Hola amante de las camineras 💛️',
        body: `
                    <p>
                       Hoy no es mi día pero te vi y mejoró, me hizo sentir mucho mejor. No platicamos mucho pero me ayuda que me abraces y me des mis besos.
                       Si este jardin fuera febrero esta sería la última flor. Justo acabo de recibir tu mensaje después de que me pidieras que fuera tu vato. 
                       Creo que está canción no puede ocuparse para eso, o quizá sí, la cosa está en que sé te gustará. 
                    </p>
                        <b>Te quiero 💛️️</b>
        `,
        song: "https://open.spotify.com/track/1RB8jMVr0eSo6ExOOvXavV?si=7123926be9f74097"
    }

    const day29 = {
        day: 'Día 29',
        title: 'Hola 💛️',
        body: `
                    <p>
                       No la había puesto aquí.
                    </p>
                        <b>Te quiero 💛️️</b>
        `,
        song: "https://open.spotify.com/track/19blFYzqmPj7FtW7W4DFEl?si=7f015ac0d6114430"
    }

    const day30 = {
        day: 'Día 30',
        title: 'Hola mi todo 💛️',
        body: `
                    <p>
                       Si este jardín fuera abril esta sería la última flor. Sé que por mensaje ya te dije muchas cosas hoy pero quiero reafirmarte lo que te dije,
                       yo estoy para apoyarte amor, en el momento en el que me necesites decir algo, pedir ayuda en algo no dudes en acercarte a mí porque yo con todo el 
                       gusto del mundo lo haré. No tengas pena o algo en ningún momento. Estoy orgulloso de ti y aunque este mes no ha sido el mejor para ambos sé -que como tú me
                       dijiste ayer- que saldremos adelante. Me hace muy feliz que ya estés trabajando y desenvolviendote en el área que te gusta, todavía recuerdo (y lo tengo en destacados)
                       el momento en el que me dijiste que estabas muy feliz por estudiar derecho, que habías descubierto que te gusta mucho y es lo que quieres hacer, es por eso que siento
                       todavía más alegría al ver que poco a poco el camino se está formando para que logres todas tus metas y logros que tienes planeados. Eres una persona maravillosa y
                       no quiero que te preocupes por mí en los momentos en los que tengas que tomarte un tiempo para hacer tus tareas o pendientes del trabajo, quiero que triunfes y no quiero
                       llegar a ser un impedimento en ello. No sé qué nos deparen estos días futuros, recuerdo que el mes pasado dije que abril sería muy cabrón pero parece que fallé un poco la 
                       predicción, pero lo que tengo claro es que estar contigo hace mis días mejor, así que espero que yo pueda ser eso para ti. Pensemos en que ya viene tu cumpleaños y espero con
                       todo mi ser que para ese entonces podamos estar de huevos los dos, manifestando 🙏🏻. Te amo con todo mi ser y espero poder verte pronto para poder ponernos al corriente con todo
                       lo que ha pasado en estos días en ambos lados. Hoy mientras esperaba la combi tomé la decisión de que el momento de tener un misterio bajo la manga llegaría a su fin en esta flor.
                       Me alegra mucho que la comida tu mamá y Luis Miguel hayan podido alegrar este día tan pesado que tuviste, espero esta canción pueda también ayudar un poco. Eres el ser más precioso
                       que existe, te amo y siempre te amaré con todo mi corazón Elisa D. 
                      
                    </p>
                        <b>Siempre tuyo, Luis Ernesto 💛️️</b>
        `,
        song: "https://open.spotify.com/track/3weNRklVDqb4Rr5MhKBR3D?si=5d0aa6901b514b4d"
    }

    const day31 = {
        day: 'Día 31',
        title: 'Hola mi luz 💛️',
        body: `
                    <p>
                       Qué bonito es verte ya animada, me pone muy feliz que ya estés mejor. Hoy ya te di un cupón que espero sí canjees el fin y así también poder aprovechar para estar juntos y platicar y
                       mimir como hace falta. Por cierto, aunque un día no me pidas flor la voy a subir, no planeo romper una racha de más de un mes subiendo flores a este jardín. Te extraño mucho churrita y
                       aunque sé que ahora no te puedo besar porque toy enfermito solo tu presencia y escucharte me sube el ánimo cabrón. Espero que te guste la canción, es muy de señor pero en cuanto la
                       escuché supe que tenía que estar aquí. Te amo mi vida.
                    </p>
                        <b>De tu novio el + guapo 💛️️</b>
        `,
        song: "https://open.spotify.com/track/7EjNvqolyU8YKutApPPwXe?si=99e7a88771174fec"
    }


    return (
    <div className="bg-[#007B46] h-screen flex items-center flex-col w-full overflow-y-scroll overflow-x-hidden px-4">
        <h1 className="text-2xl font-semibold text-[#fff] pt-10">El jardín de Elisa 💛</h1>
        <p className="text-[#fff] pt-4">Instrucciones:</p>
        <p className="text-[#fff]">Hola amor, para empezar da un tap/click en la primer flor de tu jardín. Espero te guste tu sopresa.</p>
        <div className="flex flex-wrap">
                <div onClick={() => {
                    setDayToModal(day0)
                    setVisible(true)
                }}
                     className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day1)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day2)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day3)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day4)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day5)
                    setVisible(true)
                }}  className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day6)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day7)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day8)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day9)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day10)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day11)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div onClick={() => {
                    setDayToModal(day12)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day13)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    if(dayjs().date() >= 3 && dayjs().month() >= 3){
                        setDayToModal(day14)
                        setVisible(true)
                    }
                }} className={`relative ${dayjs().date() >= 3 && dayjs().month() >= 3 && 'cursor-pointer'}`}>
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day15)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day16)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day17)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day18)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day19)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day20)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day21)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day22)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day23)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div onClick={() => {
                    setDayToModal(day24)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day25)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day26)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day27)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day28)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day29)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day30)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div onClick={() => {
                    setDayToModal(day31)
                    setVisible(true)
                }} className="relative cursor-pointer">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="relative ">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                        <div className="petal2"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flower">
                        <div className="center"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                        <div className="petal3"></div>
                    </div>
                </div>
        </div>
        {
            visible && (
                <Modal visible={visible} setVisible={setVisible} day={dayToModal}/>
            )
        }
    </div>
  );
}

export default App;

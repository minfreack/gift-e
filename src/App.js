import Modal from "./modal";
import React, {useState} from 'react'

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

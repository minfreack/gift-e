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

import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manjearEnvio = (e) => {
        e.preventDefault()
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})

    }
    return <section className="formulario">
        <form onSubmit={manjearEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo titulo = "Nombre" placeholder = "Ingresar nombre" required valor ={nombre} actualizarValor={setNombre}/>
            <Campo titulo = "Puesto" placeholder = "Ingresar puesto" required valor ={puesto} actualizarValor={setPuesto}/>
            <Campo titulo = "Foto" placeholder = "Ingresar enlace de foto" required valor ={foto} actualizarValor={setFoto}/>
            <ListaOpciones valor ={equipo} setEquipo={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo = "Título" placeholder = "Ingresar título" required valor ={titulo} actualizarValor={setTitulo}/>
            <Campo type="color" titulo = "Color" placeholder = "Ingresar el color en Hex." required valor ={color} actualizarValor={setColor}/>
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario
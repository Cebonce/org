import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState - (usa el estado)
    //función: useState(valorInicial)
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
        //la funcionActualiza va tomar el valor que esta guardado en el estado, osea el valor que tiene
        //nombreVariable que es el valorInicial, lo va a cambiar o invertir.
    //Podemos tener la cantidad de Estado que queramos dentro de un componente.
    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () =>{
        actualizarMostrar()
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg
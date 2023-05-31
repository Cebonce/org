import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    //aqui de props.datos quiero que me saque el valor y me crees las variables ahí presentes.
    //es como: const colorPrimario = props.datos.colorPirmario
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = {borderColor: colorPrimario}
    
    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input 
                type="color" 
                className="input-color" 
                value={hexToRgba(colorPrimario, 0.6)} 
                onChange={(e) => {actualizarColor(e.target.value, id)}}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador datos = {colaborador} key={index} 
                    colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>)
                }
            </div>
        </section>
    }</>
}

export default Equipo
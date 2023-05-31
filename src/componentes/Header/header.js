import "./header.css"

function Header(){
    return <header className="header">
        <img src='/img/header.png' alt='Org'/>
            </header> 
}

export default Header //así se debe de exportar algún componente en react

/*Algo a tener en cuenta es que los compnentes que exportemos debemos
de ponerlos en mayúscula para poder diferenciar de un componente de react
con uno de html. */
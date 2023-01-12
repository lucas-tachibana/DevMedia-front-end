import './style.css';

export default function SecaoBanner(props) {

  let classDiv = "texto-secaoBanner ";

  classDiv += props.ehTemaEscuro ? "texto-modo-escuro" : "texto-modo-claro";

  return(
    <section id="secaoBanner">
      <div id="imagemDeFundo" className={props.ehTemaEscuro ? "fundo-modo-escuro" : "fundo-modo-claro"}>
        
      </div>
      <div className={classDiv}>
        <p className={props.ehTemaEscuro ? "texto-modo-escuro" : "texto-modo-claro"}>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2  className={props.ehTemaEscuro ? "texto-modo-escuro" : "texto-modo-claro"}>Agência de Branding</h2>
        <span  className={props.ehTemaEscuro ? "texto-modo-escuro" : "texto-modo-claro"}>e design digital</span>
      </div>
    </section>
  )
}
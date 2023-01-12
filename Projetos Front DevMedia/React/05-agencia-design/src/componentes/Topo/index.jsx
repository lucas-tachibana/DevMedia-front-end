import './style.css';
import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';

export default function Topo(props) {

  return (
    <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
      <img className="logo" src={Logo} alt="logomarca" />
      <button className="btn-modo-escuro" onClick={props.alterarTema}>
        <img className="iconesBtn" src={props.ehTemaEscuro ? iconeLua : iconeSol} alt='icone' />
      </button>
    </header>
  )
}
import React from "react";
import './style.css';

export default function SecaoContato() {
    return (
        <section id="contato" className="secao-contato">
            <div className="limitar-secao">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contato-container">
                    <div className="contato-conteudo">
                        <h2>Contato</h2>
                        <div>
                            <img src="assets/imagens/local.png" alt="Local" />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <img src="assets/imagens/telefone.png" alt="Telefone" />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <img src="assets/imagens/email.png" alt="E-mail" />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className="contato-conteudo">
                        <h2>Redes Sociais</h2>
                        <div>
                            <img src="assets/imagens/fb.png" alt="Facebook" />
                            <span>/OticaVida</span>
                        </div>
                        <div>
                            <img src="assets/imagens/ig.png" alt="Instagram" />
                            <span>@oticavidarj</span>
                        </div>
                        <div>
                            <img src="assets/imagens/tt.png" alt="Twitter" />
                            <span>@oticavidarj</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
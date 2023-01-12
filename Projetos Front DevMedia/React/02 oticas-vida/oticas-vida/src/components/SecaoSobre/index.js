import React from "react";
import './style.css';

export default function SecaoSobre() {
    return (
        <section id="sobre" className="secao-sobre">
            <div className="limitar-secao container-sobre">
                <h1>Quem somos nós?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="box-cards">
                    <img src="assets/imagens/loja.png" alt="Loja"/>
                    <div className="card">
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card">
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <img src="assets/imagens/atendimento.png" alt="Atendimento" />
                </div>
            </div>
        </section>
    )
}
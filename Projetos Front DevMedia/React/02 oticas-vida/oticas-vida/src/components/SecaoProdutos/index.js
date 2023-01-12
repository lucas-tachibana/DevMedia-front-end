import React from "react";
import './style.css';

export default function SecaoProdutos() {
    return (
        <section id='produtos' className="secao-produtos">
            <div className="limitar-secao">
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado</p>
                <div className="container-produtos">
                    <div className="box-produto">
                        <h4>Óculos de grau</h4>
                        <img src="assets/imagens/oculos01.png" alt="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos transition</h4>
                        <img src="assets/imagens/oculos02.png" alt="Óculos transition" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos de sol</h4>
                        <img src="assets/imagens/oculos03.png" alt="Óculos de sol" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="box-produto">
                        <h4>Óculos infantil</h4>
                        <img src="assets/imagens/oculos04.png" alt="Óculos infantil" />
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <p>Todos os nossos produtos incluem:</p>
                
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}
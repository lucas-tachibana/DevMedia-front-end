import React from "react";
import Rodape from "../../componentes/Rodape";
import Topo from "../../componentes/Topo";

import './style.css';

export default function Home() {
    return (
        <div>
            <Topo />
            <main>
                <section className="secao-banner">
                    <div className="texto-banner">
                        <h1>Sorvete artesanal</h1>
                    </div>
                </section>

                <section className="secao-sabores card-container">
                        <img className="image-card" src="assets/banner-sabores.jpg" />
                        <div className="texto-secao-sabores text-card">
                            <h2>Nossos sabores</h2>
                            <spam>Novos e deliciosos!</spam>
                            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                        </div>
                </section>

                <section className="secao-eventos card-container">
                    <div className="texto-secao-eventos text-card">
                        <h2>Nossos Eventos</h2>
                        <spam>Delicias com sorvete!</spam>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    <img className="image-card" src="assets/eventos-image.jpg" />
                </section>

                <section className="secao-sobre card-container">
                    <img className="image-card" src="assets/sobre-image.jpg" />
                    <div className="texto-secao-sobre text-card">
                        <h2>Sobre nós</h2>
                        <spam>Alegria em cada casquinha!</spam>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
};

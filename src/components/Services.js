import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "Bebida Grátis",
                info: "Bebida grátis caso voce adquira o nosso Quarto de Luxo"
            },
            {
                icon: <FaHiking/>,
                title: "Hiking sem fim",
                info: "Faça hiking em nosso resort"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Traslado grátis",
                info: "Bebida grátis caso voce adquira o nosso Quarto de Luxo"
            },
            {
                icon: <FaBeer/>,
                title: "Cerveja Grátis",
                info: "Festeje o quanto quiser e aproveite o nosso Openbeer, mais famoso "
            }

        ]
    };
    render() {
        return (
            <section className="services">
            <Title title="Serviços"/>
            <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}  
            </div>
            </section>
        );
    }
}

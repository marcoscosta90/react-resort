import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

export const Rooms = () => {
    return(
    <>
    ( <Hero hero="roomsHero">
        <Banner title="Nossos Quartos">
            <Link to="/" className="btn-primary">
                Retornar a página Inicial
            </Link>
        </Banner>
        </Hero>
        <RoomContainer/>
        </>
        );
};

export default Rooms;

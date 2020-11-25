import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
    <>
    <Hero>
      <Banner title="Quartos de Luxo" subtitle="Quartos de luxo a partir de R$300,00">
      <Link to="/rooms" className="btn-primary">
        Nossos Quartos
      </Link>
      </Banner>
    </Hero>;
    <Services/>
    <FeaturedRooms/>
    
    </>
    );
  }

 
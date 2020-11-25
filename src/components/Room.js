import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const {name, slug, images, price} = room;

    return <article className="room">
        <div className="img-container">
            <img src={images[0]} alt="single room"/>
            <div className="price-top">
                <h6>R${price}</h6>
                <p> Por noite</p>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">Destaques</Link>
        </div>
        <p className="room-info">{name}</p>
    </article>;
    }

    Room.propTypes = {
        room:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            images:PropTypes.arrayOf(PropTypes.string).isRequired,
            price:PropTypes.number.isRequired
        })
    }
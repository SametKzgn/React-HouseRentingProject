import React, { Component } from 'react';
import resim1 from '../img/Artboard 1.png';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul>
                    <a name="up" className='img-class'> <img src={resim1} alt="" /></a>
                    <li><a href="#more">Houses</a>
                        <a href="#more">Villa</a>
                        <a href="#more">Apartment</a>
                        <a href="#contact">Contact</a></li>
                </ul>
                  
            </div>


        )
    }
}

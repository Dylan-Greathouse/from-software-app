import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className='links'>
                <NavLink className='home-link' activeClassName='home' exact to='/'>Home</NavLink>
                <h1 className='title'>FromSoftware Games</h1>
                <NavLink className='create-link' activeClassName='create' to='/create'>Add New Game</NavLink>
                </div>
                <section className='bonfire'>
                <img src='https://thumbs.gfycat.com/ElegantColdHorsefly-size_restricted.gif' width='200' alt='bonfire'/>
                </section>
            </header>
         );
    }
}
 
export default Header;
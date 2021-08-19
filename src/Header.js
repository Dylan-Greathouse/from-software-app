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
                <section className='bonfire-title'>
                <h1 className='title'>FromSoftware Games</h1>
                </section>
                <NavLink className='create-link' activeClassName='create' to='/create'>Add New Game</NavLink>
                </div>
                <section className='bonfire'>
                
                </section>
            </header>
         );
    }
}
 
export default Header;
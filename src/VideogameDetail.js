import React, { Component } from 'react';
import { getVideogame, getSystems } from './utils.js';
import './VideogameDetail.css';
import './App.css';

class VideogameDetail extends Component {
    state = {
        id: 0,
        name: '',
        system: '',
        played: '',
        year_released: 0,
        image_url: '',
        systems: [],
    };

    componentDidMount = async () => {
        const videogameID = this.props.match.params.id;
        const videogameData = await getVideogame(videogameID);
        const systems = await getSystems();
        this.setState({ ...videogameData, systems });
    };

    render() {
        return (
            <>
                
                <section className='title'>
                <h1>{this.state.name}</h1>
                </section>
                <section className='image'>
                <img src={this.state.image_url} width='700' alt={this.state.name} />
                </section>
            </>
        )
    }
}

export default VideogameDetail;
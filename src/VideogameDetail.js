import React, { Component } from 'react';
import { getVideogame, getSystems } from './utils.js';

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
                <h1>The Deets</h1>
                <h2>{this.state.name}</h2>
                <img src={this.state.image_url} alt={this.state.name} />

            </>
        )
    }
}

export default VideogameDetail;
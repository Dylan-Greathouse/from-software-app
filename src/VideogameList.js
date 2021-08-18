import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getVideogames } from './utils.js';

class VideogameList extends Component {
    state = { videogames: [] };
    componentDidMount = async () => {
        const data = await getVideogames();
        this.setState({ videogames: data });
    };

    render() {
        return (
            <section className='games'>
                {this.state.videogames.map((item) => (
                    <div className='game'>
                        <h1>
                            <Link to={`/videogames/${item.id}`}>{item.name}</Link>
                        </h1>
                        <p>
                            Released in {item.year_released} on the {item.system} and it is {item.played ? 'true' : 'false'} that I have played the game.
                        </p>
                    </div>
                ))}
            </section>
        );
    }
}

export default VideogameList;
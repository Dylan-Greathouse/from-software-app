import { Component } from 'react';
import { getVideogame, getSystems, updateVideogame } from './utils.js';
import './VideogameDetail.css';
import './App.css';
import classNames from 'classnames';

class VideogameDetail extends Component {
    state = {
        id: 0,
        name: '',
        system: '',
        played: Boolean,
        year_released: 0,
        image_url: '',
        systems: [],
        message: '',
        error: false,
    };

    componentDidMount = async () => {
        const videogameID = this.props.match.params.id;
        const videogameData = await getVideogame(videogameID);
        const systems = await getSystems();
        this.setState({ ...videogameData, systems });
        console.log(this.state);
        this.getSystemId();
    };

    getSystemId = () => {
        const systemObj = this.state.systems.find(
            (item) => item.console === this.state.system
        );
        console.log(systemObj.id);
        return systemObj.id;
    };

    handleClick = async (e) => {
        e.preventDefault();
        const videogameData = {
            id: this.state.id,
            name: this.state.name,
            system_id: this.getSystemId(),
            played: this.state.played,
            year_released: this.state.year_released,
            image_url: this.state.image_url
        };
        const data = await updateVideogame(videogameData);
        console.log(data);
        if (data.error) {
            this.setState({ message: data.error, error: true });
        } else {
            this.setState({ message: 'Videogame Updated!', error: false });
            setTimeout(() => {
                this.setState({ message: '' });
            }, 2000);
           
        }
    }

    render() {
        return (
            <>
                {this.state.message && (
                    <div
                        className={classNames({
                            message: true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}
                    >
                        {this.state.message}
                    </div>
                )}
            <section className='title-section'>
            <h2>{this.state.name}</h2>
            </section>
            <section className='image-section'>
            <img className='image' src={this.state.image_url} width='600' height='600' alt={this.state.name} />
            </section>
            <form id='update-videogame'>
                <div className="forms">
                    <label>Name: </label>
                    <input onChange={(e) => {
                        this.setState({ name: e.target.value});
                    }}
                    type='text'
                    value={this.state.name}>
                    </input>
                </div>
                <div className="forms">
                    <label>Image(URl): </label>
                    <input className='image-input' onChange={(e) => {
                        this.setState({ image_url: e.target.value });
                    }}
                    type='text' value={this.state.image_url}>
                    </input>
                </div>
                <div className="forms">
                    <label>System</label>
                    <select value={this.state.system}
                        onChange={(e) => {
                        this.setState({ system: e.target.value });}}>
                        {this.state.systems.map((item) => {
                        return (<option value={item.console}>{item.console}</option>
                            );
                    })}
                    </select>
                </div>
                <div className="forms">
                        <label>Year Released: </label>
                        <input onChange={(e) => {
                            this.setState({
                                year_released: e.target.value
                            });
                        }}
                        type='number'
                        value={this.state.year_released}></input>
                </div>
                <div className="forms">
                        <label>Have you played? </label>
                        <input name='radio-btn' onChange={(e) => {
                            this.setState({
                                played: e.target.value
                            });
                        }}
                        type='radio'
                        value={true}></input>
                        <label>True</label>
                        <input name='radio-btn' onChange={(e) => {
                            this.setState({
                                played: e.target.value
                            });
                        }}
                        type='radio'
                        value={false}></input>
                        <label>False</label>
                </div>
                <button onClick={this.handleClick}>Update Videogame</button>
             </form>
            </>
        )
    }
}

export default VideogameDetail;
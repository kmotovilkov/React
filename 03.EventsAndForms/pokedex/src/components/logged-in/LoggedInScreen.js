import React, {Component} from "react";
import AddPokemonForm from "./AddPokemonForm";
import Pokemon from "./Pokemon";

class LoggedInScreen extends Component {

    constructor() {
        super()
        this.state = {
            pokemonArr: []
        };
        this.updateRoster = this.updateRoster.bind(this);
    }

    updateRoster(newRoster) {
        this.setState({pokemonArr: newRoster});
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(rawData => rawData.json())
            .then(res => this.setState({pokemonArr: res.pokemonColection}))
    }

    render() {
        return (<>
                <div><AddPokemonForm updateRoster={this.updateRoster}/>
                    {this.state.pokemonArr.map((pokemon, index) =>
                        <Pokemon key={index} item={pokemon}/>)}
                </div>
            </>
        );
    }
}

export default LoggedInScreen;
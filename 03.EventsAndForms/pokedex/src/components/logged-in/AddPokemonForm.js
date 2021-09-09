import React, {Component} from "react";

class AddPokemonForm extends Component {

    constructor() {
        super()
        this.state = {
            form: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;
        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
            .then(res => {
                    this.props.updateRoster(res);
            }).catch(error => console.log(error));
    }


    render() {
        return (<>
                <h1>Create Pokemon</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Pokemon Name</label>
                        <input type="text" onChange={this.handleChange} data-name="pokemonName" className="form-control"
                               id="inputPokemonName" aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPokemonImg" className="form-label">Image</label>
                        <input type="text" onChange={this.handleChange} data-name="pokemonImg" className="form-control"
                               id="inputPokemonImg" aria-describedby="emailHelp" placeholder="Enter img url"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPokemonInfo" className="form-label">Info</label>
                        <input type="text" onChange={this.handleChange} data-name="pokemonInfo"
                               className="form-control"
                               id="inputPokemonInfo" placeholder="Enter Info"/>
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Create</button>
                </form>
            </>

        );
    }
}

export default AddPokemonForm;
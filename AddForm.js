import React, { Component } from 'react';

class AddCut extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCut(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Tilføj klip </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCut;
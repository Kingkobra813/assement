import React, { Component } from 'react';

class NewCreatureForm extends Component {
    render() {
        const { handleChange, handleAdd } = this.props;
        return (
            <div>
                <input onChange={event => handleChange(event, "name")} placeholder="name" />
                <input onChange={event => handleChange(event, "image_url")} placeholder="image url" />
                <input onChange={event => handleChange(event, "level")} placeholder="scary level" />
                <button onClick={handleAdd}>Add Creature</button>
            </div>
        )
    }
}

export default NewCreatureForm;
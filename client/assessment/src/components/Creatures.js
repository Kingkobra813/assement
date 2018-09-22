import React, { Component } from 'react';

class Creature extends Component {
    render() {
        //console.log(this.props.creature.scary.level, "works for server creatures")
        //console.log(this.props.creature.level, "rendercreature")
        return (
            <div>
                <h1>{this.props.creature.name}</h1>
                <img src={this.props.creature.image_url}></img>
                <h2>Scary Level {this.props.creature.scary.level}</h2>
            </div>
        )
    }
}

export default Creature;
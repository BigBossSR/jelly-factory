import React, { Component } from 'react';
import HUD from './hud/HUD';
import UpgradeButtonContainer from './upgradeButton/UpgradeButtonRow';
import ActionButtonRow from './actionButtons/ActionButtons';
import ResourceActions from '../actions/ResourceActions';
import resources from '../constants/resources'
import '../stylesheets/Game.css'

let _setBaseResource = function (current, max, multiplier, increment) {
    // TODO: increment refers to the amount consumed? this is confusing
    return {
        current: current,
        max: max,
        multiplier: multiplier,
        increment: increment
    };
};

class Game extends Component {
    constructor(props) {
        super(props);

        this.incrementJellies = ResourceActions.incrementJellies.bind(this);
        this.refineJellies = ResourceActions.refineJellies.bind(this);
        this.redeemCarbon = ResourceActions.redeemCarbon.bind(this);

        this.state = {
            resources: {
                carbon: _setBaseResource(resources.DEFAULTS.CARBON.START, resources.DEFAULTS.CARBON.MAX, resources.DEFAULTS.CARBON.MULTIPLIER, resources.DEFAULTS.CARBON.INCREMENT),
                cash: _setBaseResource(0, null, 1, null),
                jellies: _setBaseResource(0, 200, null, 1)
            }
        };
    }

    componentDidMount () {
        setInterval(this.incrementJellies, 1000);
    }

    render () {
        return (
            <div className="fluid-container game-container">
                <HUD resources={this.state.resources}/>
                <ActionButtonRow refineJellies={this.refineJellies}
                    redeemCarbon={this.redeemCarbon}
                />
                <UpgradeButtonContainer/>
            </div>
        )
    }
}

export default Game;
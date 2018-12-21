import React from 'react';
import '../../stylesheets/HUD.css';

class HUD extends React.Component {
    render () {
        return(
            <div className="status-bar">
                <div className="resource-indicator jellies-indicator">
                    Jellies: {this.props.resources.jellies.current} / {this.props.resources.jellies.max}
                </div>
                <div className="resource-indicator cash-indicator">
                    Cash: {this.props.resources.cash.current}
                </div>
                <div className="resource-indicator carbon-indicator">
                    Carbon: {this.props.resources.carbon.current} / {this.props.resources.carbon.max}
                </div>
            </div>
        );
    }
}

export default HUD;
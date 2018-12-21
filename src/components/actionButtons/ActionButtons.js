import React from 'react';
import ActionButton from './ActionButton';
import refineButton from '../../img/refinebutton.png';
import redeemButton from '../../img/redeembutton.png';
import '../../stylesheets/actionButtons.css';


const defaultButtonStyle = 'translateY(0px)',
    clickedButtonStyle = 'translateY(-10px)';

class ActionButtonRow extends React.Component {
    constructor (props) {
        super(props);

        this.handleRefineClick = this.handleRefineClick.bind(this);
        this.handleRedeemClick = this.handleRedeemClick.bind(this);

        this.state = {
            refineButtonStyle: defaultButtonStyle,
            redeemButtonStyle: defaultButtonStyle
        }
    }

    handleRefineClick () {
        this.setState({refineButtonStyle: clickedButtonStyle});
        this.props.refineJellies();
        setTimeout(() => {
            this.setState({refineButtonStyle: defaultButtonStyle});
        }, 20);
    }

    handleRedeemClick () {
        this.setState({redeemButtonStyle: clickedButtonStyle});
        this.props.redeemCarbon();
        setTimeout(() => {
            this.setState({redeemButtonStyle: defaultButtonStyle});
        }, 20);
    }

    render () {
        return (
            <div className="buttonRow">
                <ActionButton image={refineButton}
                    onClick={this.handleRefineClick}
                    style={{transform: this.state.refineButtonStyle}}
                />
                <ActionButton image={redeemButton}
                    onClick={this.handleRedeemClick}
                    style={{transform: this.state.redeemButtonStyle}}
                />
            </div>
        )
    }
}

export default ActionButtonRow;
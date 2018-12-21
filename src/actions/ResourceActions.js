let ResourceActions = {
    incrementJellies () {
        let resources = this.state.resources;
        if (resources.jellies.current < resources.jellies.max) {
            resources.jellies.current += Math.round((1 * resources.jellies.increment));
        }
        this.setState({resources: resources});
    },

    refineJellies () {
        let resources = this.state.resources;
        if (resources.jellies.current >= resources.carbon.increment &&
            resources.carbon.current < resources.carbon.max
        ) {
            resources.jellies.current -= resources.carbon.increment;
            resources.carbon.current += resources.carbon.increment * (Math.ceil(Math.random() * (resources.carbon.multiplier + 2)));
        }
        this.setState({resources: resources});
    },

    redeemCarbon () {
        let resources = this.state.resources;
        resources.cash.current += (Math.floor(resources.carbon.current * .2));
        resources.carbon.current = 0;

        this.setState({resources: resources});
    }

};

export default ResourceActions;
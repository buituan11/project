import React, { Component } from 'react';
import { withRouter } from "react-router";

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(prevProps) {
        console.log(this.props.location);
  		if (this.props.location !== prevProps.location) {
    		window.scrollTo(0, 0);
    	}
 	}

    render() {
        return (
            this.props.children
        );
    }
}

export default withRouter(ScrollToTop);

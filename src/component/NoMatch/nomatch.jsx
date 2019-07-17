import React, { Component } from 'react';

class NoMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div style={{paddingTop: "100px"}}>
            	<h1 style={{fontSize: "200px"}}>PAGE NOT FOUND</h1>
            </div>
        );
    }
}

export default NoMatch;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from 'actions/testActions';

class Container extends Component {
	state = {};

	componentDidMount() {
		this.props.test();
	}
	render() {
		return <div />;
	}
}

export default connect(
	null,
	{test}
)(Container);

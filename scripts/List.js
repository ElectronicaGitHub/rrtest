import React, { Component } from 'react';
import store from "./store";
import { connect } from 'react-redux';


class List extends Component {

	render() {
		return (
			<ul>
				{ this.props.stars.map((s) => {
					return <li key={ s.id }>{ s.name }</li>
				}) }
			</ul>
		)
	}
}

export default List;
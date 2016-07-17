import React, { Component } from 'react';
import store from "./store";
import { connect } from 'react-redux';

class Input extends Component {

	onClick() {
		this.props.addStar(this.input.value, this.props.currentN);
		this.input.value = '';
	}

	render() {
		return (
			<div>
				<input ref={ node => {
					this.input = node;
				}}/>
				<button onClick={ ::this.onClick }>Добавить</button>
			</div>
		);
	}
}

export default Input;
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from './List';
import Input from './Input';
import * as actions from './actions';

class App extends Component {

	componentDidMount() {
		this.props.actions.getStars();
	}
	
	render() {
		const { stars, loading } = this.props.page;
		const currentN = stars.length;
		const { addStar } = this.props.actions;

		return (
			<div>
		    	<Input addStar={ addStar } currentN={ currentN }/>
				{ loading ?
					<span>Загрузка...</span>
				:
					<List stars={ stars }/>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page : state.page
	}
}

const mapDispatchToProps = (dispatch) => {
	return  {
		actions : bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
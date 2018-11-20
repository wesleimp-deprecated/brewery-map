import React, { Component } from "react";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { Creators as BreweryActions} from '../../store/ducks/brewery';

class Main extends Component {

	state = { brewerySelected: null }

	componentDidMount() {
        this.props.addBreweryRequest();
	}
	
	handleBrewerySelected = (brewery) => {
		this.setState({ brewerySelected: brewery });

	}

	render() {
		const { breweries } = this.props;
		const { brewerySelected } = this.state;
		return (
			<Container>
				<Sidebar handleBrewerySelected={this.handleBrewerySelected} breweries={breweries}/>
				<Map brewerySelected={brewerySelected} breweries={breweries}/>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	breweries: state.brewery.items
});

const mapDispatchToProps = (dispatch) => 
	bindActionCreators(BreweryActions, dispatch);


export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Main);

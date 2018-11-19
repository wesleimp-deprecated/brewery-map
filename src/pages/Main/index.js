import React, { Component } from "react";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { Creators as BreweryActions} from '../../store/ducks/brewery';

class Main extends Component {

	state = {
		cordinates: {
			latitude: 40.7128,
			longitude: 74.0060
		}
	}

	componentDidMount() {
        this.props.addBreweryRequest();
	}
	
	handleBrewerySelected = (brewery) => {
		this.setState({ 
			cordinates: { 
				latitude: parseFloat(brewery.latitude), 
				longitude: parseFloat(brewery.longitude)
			}
		});

	}

	render() {
		const { breweries } = this.props;
		const { cordinates } = this.state;
		return (
			<Container>
				<Sidebar handleBrewerySelected={this.handleBrewerySelected} breweries={breweries}/>
				<Map cordinates={cordinates} breweries={breweries}/>
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

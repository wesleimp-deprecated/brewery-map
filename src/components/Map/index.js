import React, { Component } from "react";
import MapGL, { Marker, FlyToInterpolator, Popup } from "react-map-gl";
import BreweryInfo from "./BreweryInfo";
import CustomPin from "./CustomPin";

class Map extends Component {

	constructor(props) {
		super(props);

		this.state = {
			viewport: {
				width: window.innerWidth,
				height: window.innerHeight,
				latitude: 37.7577,
				longitude: -122.4376,
				zoom: 10,
			},
			breweryInfo: null,
		};
	}
	

	componentDidMount() {
		window.addEventListener("resize", this.handleWindowResize);
		this.handleWindowResize();
	}

	componentWillReceiveProps(props) {
		if (!!props.brewerySelected){
			this.changeLocation(props);
		}
	}

	changeLocation = (props) => {
		const { latitude, longitude } = props.brewerySelected
		const { viewport } = this.state;
		this.setState({
			viewport: {
				...viewport,
				latitude: parseFloat(latitude),
				longitude: parseFloat(longitude),
				transitionInterpolator: new FlyToInterpolator(),
				transitionDuration: 1000,
			}
		});

		this.setBreweryInfo(props.brewerySelected);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowResize);
	}

	setBreweryInfo = (breweryInfo) => {
		this.setState({ breweryInfo })
	}

	handleWindowResize = () => {
		const { viewport } = this.state;
		this.setState({
			viewport: { 
				...viewport, 
				height: window.innerHeight, 
				width: window.innerWidth 
			}
		});
	};

	handleViewportChange = viewport => {
		this.setState({ viewport });
	};

	renderBreweryMarkers = (brewery) => (
		<Marker 
			key={brewery.id} 
			latitude={parseFloat(brewery.latitude)} 
			longitude={parseFloat(brewery.longitude)}
		>
			<CustomPin onClick={() => this.setBreweryInfo(brewery)}></CustomPin>
		</Marker>
	);

	renderBreweryInfo = () => {
		const { breweryInfo } = this.state;
		return breweryInfo && (
			<Popup 
				closeOnClick={false}
				closeButton={false}
				latitude={parseFloat(breweryInfo.latitude)}
				longitude={parseFloat(breweryInfo.longitude)}
				//onClose={() => this.setBreweryInfo(null)}
			>
				<BreweryInfo brewery={breweryInfo} />
			</Popup>
		)
	}

	render() {
		const { viewport } = this.state;
		const { breweries } = this.props;
		return (
			<MapGL 
				{...viewport}
				mapStyle="mapbox://styles/mapbox/basic-v9"
				mapboxApiAccessToken="pk.eyJ1Ijoid2VzbGVpbXAiLCJhIjoiY2pvajAxNnAzMDAwazNwb2ZjdDhhejg0eSJ9.7H6dzrktLLtExbm5dbz4-Q"
				onViewportChange={this.handleViewportChange}
				onClick={() => this.setBreweryInfo(null)}
			>
				{breweries.map(this.renderBreweryMarkers)}
				{this.renderBreweryInfo()}

			</MapGL>
		);
	}
}

export default Map;

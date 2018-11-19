import React, { Component } from "react";
import { Container, BreweryInfo } from "./styles";

class Sidebar extends Component {

    handleBreweryClicked = (brewery) => {
        const { handleBrewerySelected } = this.props;
        //console.log(brewery.latitude, brewery.longitude);

        handleBrewerySelected(brewery);
    }

    render() {
        const { breweries } = this.props;
        return (
            <Container>
                {breweries.map(brewery => (
                    <BreweryInfo key={brewery.id}>
                        <div>
                            <button onClick={() => this.handleBreweryClicked(brewery)}><strong>{brewery.name}</strong></button>
                            <span>{brewery.city}, {brewery.state}</span>
                        </div>
                    </BreweryInfo>
                ))}
            </Container>
        );
    }

}

export default Sidebar;
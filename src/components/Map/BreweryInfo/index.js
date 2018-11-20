import React, { PureComponent } from 'react';
import { Container, Name } from './styles';

class BreweryInfo extends PureComponent {

    render() {
        const { brewery } = this.props;
        return (
            <Container>
                <div>
                    <Name>{brewery.name} <span>({brewery.brewery_type})</span></Name>
                    <span>{brewery.street}</span>
                    <span>{brewery.city}, {brewery.state}, {brewery.country}</span>
                    <span>{brewery.postal_code}</span>
                    <a href={brewery.website_url} title="Go to brewery website" target="_new">
                        <i className="fa fa-external-link"></i>
                        Go to website
                    </a>
                </div>
            </Container>
        )
    }
}

export default BreweryInfo
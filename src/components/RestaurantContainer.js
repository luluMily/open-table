import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';

class RestaurantContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            fitler: ''
        }
    }

    render() {
        const restaurantsList = [];
        this.props.restaurants.forEach(restaurant => {
            restaurantsList.push(
                <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            )
        })

        return (
            <div className="restaurant-container">
                <div className="header">
                    <SearchBar />
                    <span className="total">Total {this.props.restaurants.length} are restaurants available.</span>
                </div>
                <ul className="list-container">{restaurantsList}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        restaurants: state.restaurants || []
    };
}

export default connect(mapStateToProps)(RestaurantContainer);

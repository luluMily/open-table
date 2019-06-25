import React from 'react';
import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';
import openTable from '../apis/openTable';

class RestaurantContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChangeCity = this.handleOnChangeCity.bind(this);
        this.state = {
            restaurants: []
        }
    }
    
    handleOnChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    onFormSubmit = async city => { 
        await fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ restaurants: result.restaurants });
            }
        )
    }


    render() {
        const restaurantsList = [];

        this.state.restaurants.forEach(restaurant => {
            restaurantsList.push(
                <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            )
        })

        return (
            <div className="restaurant-container">
                <div className="header">
                    <SearchBar 
                        onFormSubmit={this.onFormSubmit} />
                    <span className="total">Total {this.state.restaurants.length} are restaurants available.</span>
                </div>
                <ul className="list-container">{restaurantsList}</ul>
            </div>
        )
    }
}

export default RestaurantContainer;
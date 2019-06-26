import React from 'react';
import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import openTable from '../apis/openTable';

class RestaurantContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            city: '',
            fitler: ''
        }
    }
    
    onFormSubmit = async city => { 
        if (!city) {
            alert('Please enter a city');
            return;
        }

        this.setState({city: city});

        await fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ restaurants: result.restaurants });

                if(this.state.fitler) {
                    this.onFilterFormSubmit(this.state.fitler);
                }
            }
        )
    }

    onFilterFormSubmit = filter => {
        debugger
        this.setState({ fitler: filter});

        if(!filter) {
            this.onFormSubmit(this.state.city)
        }

        let filterString = filter.toLowerCase();

        const restaurantsFilterList = this.state.restaurants.filter( restaurant => {
            return restaurant.name.toLowerCase().includes(filterString) 
            || restaurant.address.toLowerCase().includes(filterString)
            || restaurant.area.toLowerCase().includes(filterString)
        })

        this.setState({
            restaurants: restaurantsFilterList
        })
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
                    <FilterBar 
                        onFilterFormSubmit={this.onFilterFormSubmit} />
                    <span className="total">Total {this.state.restaurants.length} are restaurants available.</span>
                </div>
                <ul className="list-container">{restaurantsList}</ul>
            </div>
        )
    }
}

export default RestaurantContainer;
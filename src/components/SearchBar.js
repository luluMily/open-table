import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../actions/searchRestaurants';
import { bindActionCreators } from 'redux';
import FilterBar from './FilterBar';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    onCityInputChange = e => {
        this.setState({
            city: e.target.value
        })

    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.searchRestaurants(this.state.city);
    };

    render() {
        return(
            <div className='city-input'>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="city">City: </label>
                    <input 
                        type="text"
                        name="city"
                        id="city-input"
                        placeholder="Enter a city"
                        onChange={this.onCityInputChange}
                        value={this.state.city} 
                    />
                </form>
                <FilterBar city={this.state.city} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchRestaurants: searchRestaurants }, dispatch);
}

export default connect(null, { searchRestaurants })(SearchBar);

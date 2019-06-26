import React from 'react';
import { connect } from 'react-redux';
import { filterRestaurants } from '../actions/filterRestaurants';
import { bindActionCreators } from 'redux';


class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onFilterInputChange = e => {
        this.setState({
            filter: e.target.value
        })

    };

    onFormSubmit = e => {
        e.preventDefault();
        if (!this.state.filter && !this.props.city) {
            alert('Please enter a city');
        } else {
            this.props.filterRestaurants(this.state.filter, this.props.city);
        }
    };

    render() {
        return(
            <div className='city-input'>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="filter">Refine: </label>
                    <input 
                        type="text"
                        name="filter"
                        id="refine-input"
                        placeholder="Enter restaurant name/address/area then press enter"
                        onChange={this.onFilterInputChange}
                        value={this.state.filter} 
                        aria-label="Enter restaurant name/address/area then press enter"
                    />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterRestaurants: filterRestaurants }, dispatch);
}

export default connect(null, { filterRestaurants })(FilterBar);

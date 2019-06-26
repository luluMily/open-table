import React from 'react';

class SearchBar extends React.Component {
    state = { city: '' };

    onCityInputChange = e => {
        this.setState({
            city: e.target.value
        })

    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.city);
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
            </div>
        )
    }
}

export default SearchBar;
import React from 'react';

class FilterBar extends React.Component {
    state = { filter: '' };

    onFilterInputChange = e => {
        this.setState({
            filter: e.target.value
        })

    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFilterFormSubmit(this.state.filter);
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
                        placeholder="Enter restaurant name/address/area to refine result"
                        onChange={this.onFilterInputChange}
                        value={this.state.filter} 
                    />
                </form>
            </div>
        )
    }
}

export default FilterBar;
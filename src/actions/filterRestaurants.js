export const filterRestaurants = (filter='', city='') => {
    return (dispatch, getState) => {

        if(!filter) {
            return fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({
                        type: 'SEARCH_RESTAURANTS',
                        payload: result.restaurants
                    })
                }
            )
        } else {
            const state = getState();
            let filterString = filter.toLowerCase();
    
            const refinedRestanrants = state.restaurants.filter(restaurant => {
                return restaurant.name.toLowerCase().includes(filterString)
                    || restaurant.address.toLowerCase().includes(filterString)
                    || restaurant.area.toLowerCase().includes(filterString)
            })
            dispatch({
                type: 'FILTER_RESTAURANTS',
                payload: refinedRestanrants
            })           
        }
    }
}
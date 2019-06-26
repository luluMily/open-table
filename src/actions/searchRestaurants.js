export const searchRestaurants = (city = '') => {
    return (dispatch) => {
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
    }
}

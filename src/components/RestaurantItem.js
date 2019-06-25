import React from 'react';

class RestaurantItem extends React.Component {

    render() {
        const {id, address, city, state, postal_code, image_url, name, price} = this.props.restaurant;
        const fullAddress = `${address}, ${city} ${state}, ${postal_code}`;
        return (
            <li key={id} className="restaurant-item">
                <img src={image_url} />
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="address">{fullAddress}</div>
                    <div className="price">Price: {price}</div>
                </div>
            </li>
        )
    }
}

export default RestaurantItem;
import React from 'react'
import RestaurantContainer from "../components/RestaurantContainer";
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<RestaurantContainer />);
});

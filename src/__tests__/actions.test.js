import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/searchRestaurants'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates SEARCH_RESTAURANTS', () => {
        fetchMock.getOnce('/restaurants?city="toronto')

        const expectedActions = [
            { type: "SEARCH_RESTAURANTS", body: { restaurants: [] } }
        ]
        const store = mockStore({ restaurants: [] })

        return store.dispatch(actions.searchRestaurants()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})


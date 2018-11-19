export const Types = {
    ADD_BREWERY_REQUEST: 'brewery/ADD_BREWERY_REQUEST',
    ADD_BREWERY_SUCCESS: 'brewery/ADD_BREWERY_SUCCESS',
    ADD_BREWERY_ERROR: 'brewery/ADD_BREWERY_ERROR',
}

const INITIAL_STATE = { 
    items: [],
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_BREWERY_SUCCESS:
            return { ...state, items: action.payload.breweries }
        default:
            return state;
    }
}

export const Creators = {
    addBreweryRequest: () => ({
        type: Types.ADD_BREWERY_REQUEST
    }),
    addBrewerySuccess: (breweries) => ({
        type: Types.ADD_BREWERY_SUCCESS,
        payload: breweries,
    }),
    addBreweryError: (message) => ({
        type: Types.ADD_BREWERY_ERROR,
        payload: { message },
    }),
}
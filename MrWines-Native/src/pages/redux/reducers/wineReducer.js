const initialState = {
    wines: [],
    types: [],
    filterWine: [],
    oneWine: {},
    auxWine: []
}

const wineReducer = (state = initialState, action) => {
    //console.log(action)
    //console.log(state)
    switch(action.type) {
        case 'GET_WINES':
            return {
                ...state,
                wines: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'ONE_WINE':
            return {
                ...state,
                oneWine: action.payload
            }
        case 'UPD_WINE':
            let wines = [...state.wines]
            wines.push(action.payload)
            return{
                ...state,
                wines: action.payload,
                auxWines: [...wines]
            }
        case 'DEL_WINE':
            return {
                ...state,
                cities: action.payload
            }
        default:
            return state
    }
}
export default wineReducer
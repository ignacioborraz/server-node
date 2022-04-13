const initialState = { //defino el estado inicial del reductor
    tineraries: [],
    filterTin: [],
    auxTineraries: []
}

const tineraryReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    //console.log(action);
    switch(action.type) {
        case 'GET_TINERARIES':
            return {
                ...state,
                tineraries: action.payload
            }
        case 'UPD_TINERARY':
            let tineraries = [...state.tineraries]
            tineraries.push(action.payload)
            return{
                ...state,
                tineraries: action.payload,
                auxTineraries: [...tineraries]
            }
        case 'DEL_TINERARY':
            return {
                ...state,
                tineraries: action.payload
            }
/*         case 'MOD_TINERARY':
            let tineraries = [...state.tineraries]
            tineraries.push(action.payload)
            return{
                ...state,
                tineraries: action.payload,
                auxTineraries: [...tineraries]
            } */
        case 'FIL_TINERARIES':
            //console.log(action.payload);
            return {
                ...state,
                filterTin: action.payload
            }
        default:
            return state
    }
}
export default tineraryReducer
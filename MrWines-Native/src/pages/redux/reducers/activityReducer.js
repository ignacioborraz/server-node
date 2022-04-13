const initialState = { //defino el estado inicial del reductor
    activities: [],
    filterAct: [],
    oneActivity: {},
    auxActivities: []
}

const tineraryReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    switch(action.type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            }
        case 'UPD_ACTIVITY':
            let activities = [...state.activities]
            activities.push(action.payload)
            return{
                ...state,
                activities: action.payload,
                auxActivities: [...activities]
            }
        case 'DEL_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            }
/*         case 'MOD_ACTIVITY':
            let activities = [...state.activities]
            activities.push(action.payload)
            return{
                ...state,
                activities: action.payload,
                auxActivities: [...activities]
            } */
        case 'ONE_ACTIVITY':
            return {
                ...state,
                oneActivity: action.payload
            }
        default:
            return state
    }
}
export default tineraryReducer
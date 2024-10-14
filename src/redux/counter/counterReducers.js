
import {INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_2} from './counterTypes'

const initialState = {
    count:0
}


export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                count: state.count + 1
            }
        case DECREMENT_COUNTER:
            return{
                count: state.count - 1
            }
        case INCREMENT_COUNTER_BY_2:
            return{
                count: state.count+2
            }

            default:return state;
    }


}
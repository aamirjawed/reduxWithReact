
import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_2 } from "./counterTypes";

export const incrementCounter = () => {
    return{
        type:INCREMENT_COUNTER
    }
}

/**
 * The function `decrementCounter` is an action creator in JavaScript that returns an action object
 * with type `DECREMENT_COUNTER`.
 * @returns In the `decrementCounter` function, an object is being returned with a `type` property set
 * to `DECREMENT_COUNTER`.
 */
export const decerementCounter = () => {
    return{
        type:DECREMENT_COUNTER
    }
}


export const incrementCounterBy2 = () => {
    return{
        type:INCREMENT_COUNTER_BY_2
    }
}
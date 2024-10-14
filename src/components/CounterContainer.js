import React from 'react'
import { decerementCounter, incrementCounter, incrementCounterBy2 } from '../redux/index'
import { connect } from 'react-redux'

function CounterContainer(props) {
  return (
    <div>
        <h1>Count: {props.count}</h1>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.incrementby2}>Increment + 2</button>
    </div>
  )
}

const mapStateToProp = (state) => {
    return {
        count: state.count.count
    }
}

const mapDispatchToProp = dispatch => {
    return{
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decerementCounter()),
        incrementby2: () => dispatch(incrementCounterBy2())
    }
}



export default connect(mapStateToProp, mapDispatchToProp) (CounterContainer)
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>No of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
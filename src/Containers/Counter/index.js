import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "./Action"
const ContainerA = (props) => {
    const {counterDeducer, handleonClickIncrement, handleonClickDecrement} = props;
    const {counter} = counterDeducer;
    const handleIncrement = () =>{
        handleonClickIncrement()
    }
    const handleDecrement = () => {
        handleonClickDecrement()
    }
    return(
        <>
            <h2>Hello Word...</h2>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrement}>Increment +</button>
            <button onClick={handleDecrement}>Decrement -</button>
        </>
    );
}
const mapStateToProps = state => {
    console.log("Counter = ",state)
    return{
        counterDeducer: state.counter,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        handleonClickIncrement: () => dispatch(increment()),
        handleonClickDecrement: () => dispatch(decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerA)
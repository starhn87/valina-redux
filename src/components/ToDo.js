import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function Todo({ text, onBtnClick }) {
    return (
        <li>{text} <button onClick={onBtnClick}>DEL</button></li>
    )
}


function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);
    return {
        onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

function Detail({ toDo }) {
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h3>Created at: {toDo?.id}</h3>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const { match: { params: { id } } } = ownProps;

    return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
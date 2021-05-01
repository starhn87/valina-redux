import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} />
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Home);
import React from "react";

const Start = (props) => (
    <div>
        <button onClick={props.setStartedTrue}>
            Начать игру!
        </button>
    </div>
)

export default Start;
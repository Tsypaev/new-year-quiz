import React from "react";

const Next = (props) => (
    <div>
        <button onClick={props.setStartedTrue}>
            Следующий вопрос!
        </button>
    </div>
)

export default Next;
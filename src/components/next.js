import React from "react";

const Next = (props) => (
    <div>
        <button onClick={props.setNextQuestion}>
            Следующий вопрос!
        </button>
    </div>
)

export default Next;
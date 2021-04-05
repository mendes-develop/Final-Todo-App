import React from "react";

export default function NotificationError(props) {
    const error = props.error
    const setError = props.setError

    return (
        <div
            className='alert'
            style={{ visibility: error ? "" : "hidden" }}
        >
            <span
                className='closebtn'
                onClick={() => setError()}
            >
                &times;
            </span>
            <strong>Por Favor!</strong> Ensira um titulo para a sua tarefa.
        </div>
    );
}

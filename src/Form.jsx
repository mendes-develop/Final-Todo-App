import React from "react";

export default function Form(props) {
    const value = props.value
    const setValue = props.setValue
    const _onClick = props._onClick


    return (
        <div className='Form'>
            <input
                type='text'
                className='InputItem'
                value={value}
                onChange={(event) => setValue(event)}
            />
            <button
                className='AddButton'
                onClick={() => _onClick()}
            >
                Add
            </button>
        </div>
    );
}

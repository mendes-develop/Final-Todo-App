import React from "react";

export default function ItemsList(props) {
    const items = props.items;
    const toggleChecked = props.toggleChecked;
    const removeItem = props.removeItem;

    function isItemChecked(value) {
        return value ? "checked" : "";
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    onClick={() => toggleChecked(item)}
                    className={isItemChecked(item.completed)}
                    key={index}
                >
                    {item.title}
                    <div className='close' onClick={(e) => removeItem(e, item)}>
                        X
                    </div>
                </li>
            ))}
        </ul>
    );
}

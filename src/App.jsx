import React from "react";
import NotificationError from "./NotificationError";
import ItemsList from "./ItemsList";
import Form from "./Form";
import "./App.css";

const todos = [
    {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
    {
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        id: 4,
        title: "et porro tempora",
        completed: true,
    },
];

export default class TodoAPP extends React.Component {
    state = {
        items: [],
        value: "",
        error: false,
    };

    componentDidMount = () => {
        this.setState({ items: todos });
    };

    setValue = (event) => {
        const value = event.target.value;

        this.setState({
            value: value,
        });
    };

    onClick = () => {
        const value = this.state.value;
        const items = this.state.items;
        const newID = items.length + 1;

        if (value === "") {
            this.setState({ error: true });
            return;
        }

        const newItem = {
            id: newID,
            title: this.state.value,
            completed: false,
        };

        const newArray = [newItem].concat(items);

        this.setState({
            items: newArray,
            value: "",
        });
    };

    toggleChecked = (item) => {
        const items = this.state.items;
        const itemID = item.id;

        const newArray = items.map((item) => {
            if (item.id === itemID) {
                item.completed = item.completed === true ? false : true;
                return item;
            } else {
                return item;
            }
        });

        this.setState({ items: newArray });
    };

    removeItem = (evt, item) => {
        evt.stopPropagation();

        const items = this.state.items;
        const itemID = item.id;

        const newArray = items.filter(function (item) {
            return item.id !== itemID;
        });

        this.setState({ items: newArray });
    };

    setError = () => {
        this.setState({ error: false });
    };

    render() {
        return (
            <div className='App'>
                <h1 className='Title'>TO DO LIST</h1>

                <NotificationError
                    error={this.state.error}
                    setError={this.setError}
                />

                <Form
                    _onClick={this.onClick}
                    setValue={this.setValue}
                    value={this.state.value}
                />

                <ItemsList
                    toggleChecked={this.toggleChecked}
                    removeItem={this.removeItem}
                    items={this.state.items}
                />
            </div>
        );
    }
}

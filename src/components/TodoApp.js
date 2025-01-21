import React, {Component} from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
    };

    handleChange = (event) => {
        this.setState({item: event.target.value});
    };

    handleAddItem = () => {
        const {item, list} = this.state;
        if (item.trim()) {
            this.setState({
                list: [...list, item],
                item: ''
            });
        }
    };

    render() {
        const { list, item } = this.state;
        return (
            <div className={"text-center"}>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={item}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul className={"w-50 border m-auto text-start"} style={{listStyleType: 'number'}}>
                    {list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoApp
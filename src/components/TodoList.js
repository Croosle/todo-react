import React from "react";
import TodoString from "./TodoString";
import TodoEdit from "./TodoEdit";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentTask: ''}

        this.handleDelete = this.handleDelete.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.endEdit = this.endEdit.bind(this);
    }

    handleDelete(task) {
        this.props.onDelete(task);
    }

    startEdit(task) {
      this.setState({currentTask: task})
    }

    endEdit(value) {
      this.props.onEdit(this.state.currentTask, value);
      this.setState({currentTask: ''})
    }

    render() {
        return (
            <ul className="toDoList">
                   {this.props.tasks.map((task, i) => {
                        if (i === this.state.currentTask) {
                          return(<TodoEdit key={i} id={i} value={task} onSubmit={this.endEdit}></TodoEdit>)
                        }
                        return(<TodoString key={i} id={i} value={task} onDelete={this.handleDelete} onEdit={this.startEdit}></TodoString>)
                    })}
            </ul>
        )
    }
}

export default TodoList;

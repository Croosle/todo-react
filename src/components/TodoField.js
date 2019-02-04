import React from "react";

class TodoField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSumbit() {
        if (this.state.value !== '') {
          this.props.onSubmit(this.state.value);
          this.state.value = '';
        }        
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Напишите задачу..." value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleSumbit}>Добавить</button>
                </div>
            </div>
        )
    }
}

export default TodoField;

import React from "react";

class TodoEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: props.value};

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
          <li>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Редактировать" value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleSumbit}>Изменить</button>
                </div>
            </div>
          </li>
      )
    }
}

export default TodoEdit;

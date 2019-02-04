import React from "react";

function TodoString(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }

    function handleEdit() {
        props.onEdit(props.id);
    }

    return (
        <li>
            <div className="custom-control custom-checkbox clearfix mb-2">
                <input type="checkbox" className="custom-control-input" id={"customCheck" + props.id}/>
                <label className="custom-control-label" htmlFor={"customCheck" + props.id}>{props.value}</label>
                <button type="button" name="button" class="btn btn-danger float-right" onClick={handleDelete}><i class="fas fa-trash"></i></button>
                <button type="button" class="btn btn-primary float-right mr-2" onClick={handleEdit}><i class="fas fa-edit"></i></button>
            </div>
        </li>
    )
}

export default TodoString;

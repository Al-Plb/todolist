import React from 'react';


const TodoItem = (props) => {
    var buttonComplete = "button is-primary";
    var buttonText = "✓";
    //var contentClass = "subtitle is-5";

    var buttonDelete = "button is-danger";
    var buttonTextDelete = "X";

    var buttonEdit = "button is-warning";
    var buttonTextEdit = "~";

    /* if (this) {
        buttonComplete = "button is-black";
        buttonText = "🞮";
        contentClass += " strike";
    } */

    return (
        <div className="box">
            <nav className="level">
                <div className="field has-addons task column is-10">
                    <li className="control" contenteditable="true" onClick={() => {
                        props.clickHandler(props.index);
                    }} className={props.details.completed ? 'completed' : ''}>
                        {/* <button className={buttonComplete} onDoubleClick={(evt) => {
                        }}>{buttonText}</button> */}
                        {props.details.name}
                        {/* <button className={buttonEdit} onClick={(evt) => {
                            evt.stopPropagation();
                        }}>{buttonTextEdit}</button> */}

                    </li>
                    <button className={buttonDelete} onClick={(evt) => {
                        evt.stopPropagation();
                        props.deleteTask(props.index)
                    }}>{buttonTextDelete}</button>



                </div>
            </nav>
        </div>

    )
}

export default TodoItem;
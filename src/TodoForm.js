import React from 'react'

const TodoForm = (props) => {
	return (
		<form onSubmit={props.addTask} id="input-form" className="has-text-centered">
		  <input type="text" 
		    value={props.currentTask}
            onChange={props.updateTask}
            className="control column is-12"
            placeholder="Add a task"
		   />
           <button type="submit" className="control button is-link is-rounded has-text-centered" >+</button>		
		</form>
	)
}

export default TodoForm;
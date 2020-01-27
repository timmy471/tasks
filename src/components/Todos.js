import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {

   

    
    render() {
        return (
            <div className = 'container'> 
                
                {this.props.todos && this.props.todos.map(todo=>(
                   <TodoItem key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
                ))}
            </div>
            
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos

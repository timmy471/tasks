import React, { Component } from 'react'

class TodoItem extends Component {



    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    
   

    render() {
        const { id, title } = this.props.todo;

        const btnStyle = {
            background: 'red',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            float: 'right',
            cursor: 'pointer'
        }

        return (

            <div style={this.getStyle()}>

                <p>
                    <input type='checkbox' onChange = {this.props.markComplete.bind(this, id)}  /> {' '}
                    {title}
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

export default TodoItem

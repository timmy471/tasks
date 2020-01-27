import React, { Component } from 'react'

class AddTodos extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title:'' 
        }
    }
    


    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
            e.preventDefault()
            this.props.addTodo(this.state.title)
            this.setState({ title: ''})
    }

    render() {
        return (
            <div style ={{ textAlign: 'center'}} >      
             <form onSubmit = {this.onSubmit}   style = {{ margin: '2rem', }}>
                <div className = 'form-group'>
                <input  className = 'form-control' type = 'text' name = 'title' 
                placeholder = 'Add Todo...' 
                style = {{  }}
                value ={this.state.title}
                 onChange = {this.onChange}/>
                 <br />
                <input type = 'submit' value = 'submit' className = 'btn'
                style ={{
                    flex: '1'
                }} />
                </div>
            </form>
            </div>


        )
    }
}

export default AddTodos

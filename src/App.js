import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid'
import Todos from './components/Todos'
import Header from './components/layouts/Header'
import AddTodos from './components/AddTodos'
import About from './components/pages/About'


class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    

  }

  fetchData = async () => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
      this.setState({todos : res.data})
    }catch(err){
      console.log(err)
    }
  }
  // componentDidMount(){

  //   this.fetchData()
  //   // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   // .then(res =>this.setState({ todos: res.data }) )
  // }

  markComplete = (id) => {
    // const id = id
    this.setState({
      todos: this.state.todos.map(todo => {
        // console.log(id)

        if (todo.id === id) {
          console.log(id + 'from map')
          todo.completed = !todo.completed
        }
        return todo;
      })
    })

  }

  delTodo = (id) => {
    // try {
    //    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({todos : [...this.state.todos.filter(todo => (todo.id !==id))]}))
    // } catch (err) {
    //   console.log(err)
    // }
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(id)
   
     this.setState({ todos: [...this.state.todos.filter(todo => (todo.id !== id) )] })
    
    
  }

  //
  addTodo = async (title) => {
    try{
      if(title !==''){
        // const res =  await  axios.post('https://jsonplaceholder.typicode.com/todos', {
        
        // title,
        // completed: false
        const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
        }
        this.setState({todos :[...this.state.todos, newTodo]})
      }
      
      
     
    }
    catch(err){
      console.log(err)
  
    
  }
}

  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className='App'>
          <Header />
         
          <Route exact path = '/' component = {() =>(
            <div class = 'body'>
              <AddTodos addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
          )} />
          
          <Route path = '/about' component = {About} />

        </div>
      </Router>
    )
  }
}

export default App


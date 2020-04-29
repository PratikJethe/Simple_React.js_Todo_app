import React,{Component} from 'react';
import Todos from './todos.js'
import AddTodo from './AddTodo.js'

class App extends Component{
state = {
  todos:[
  {id:1,content:'Make Todo App'},
  {id:2,content:'Make More Apps'},
  
  ]
}

deleteTodo = (id)=>{
console.log(id)
let todosupdate = this.state.todos.filter((todo)=>{
  return todo.id!==id;
}
 
)

this.setState({
  todos:todosupdate
})

}

AddTodoToList = (todo)=>{
todo.id = Math.random()
let newtodos = [...this.state.todos,todo]

this.setState({
  todos: newtodos

})
}

  render(){
    return(
      <div className='App container'>
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo AddTodoToList={this.AddTodoToList}/>
      </div>
    )
  }

}

export default App;

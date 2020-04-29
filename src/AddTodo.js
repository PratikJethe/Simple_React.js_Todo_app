import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    
    handlechange = (e) => {
        this.setState({
            content: e.target.value

        })
    }

    handlesubmit= (e)=> {
        e.preventDefault();
        this.props.AddTodoToList(this.state)

    }
    render() {
        return (
            <div className='center'>
                <form onSubmit= {this.handlesubmit}>
                    <label><strong>Add New Todo</strong></label>
                    <input type='text' onChange={this.handlechange}></input>
                    <button onClick ={this.handlechange} className='waves-effect waves-light btn' value ={this.state.content}>Add Todo</button>

                </form>
            </div>
        )
    }

}


export default AddTodo;
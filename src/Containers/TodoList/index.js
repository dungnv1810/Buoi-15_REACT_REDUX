import React, {useState} from "react";
import {connect} from "react-redux";
import {addUser, deleteUser} from "./Action";
const TodoList = (props) => {
    const [nameTodo, setNameTodo] = useState("");
    const [statusTodo, setStausTodo] = useState("")
    const {todoDeducer, handleAddUserName} = props;
    const {todos} = todoDeducer
    console.log("todos = ", todos)
    const handleChangeNameTodo = event =>{
        const {value} = event.target;
        setNameTodo(value)
    }
    const handleChangeStatusTodo = event =>{
        const {value} = event.target;
        setStausTodo(value)
    }
    const hadleOnclickAddUserName = () => {
        if(nameTodo && statusTodo){
            handleAddUserName({
                name: nameTodo,
                status: statusTodo,
            })
        }
        setNameTodo('')
        setStausTodo('')
    }
    return(
        <>
            <h2>TodoList</h2>
            <h2>Name: </h2>
            <input type="text" name="name" value={nameTodo} onChange={handleChangeNameTodo} placeholder="userName"/>
            <input type="text" name="status" value={statusTodo} onChange={handleChangeStatusTodo} placeholder="status"/>
            <button onClick={hadleOnclickAddUserName}>Add</button>
            <table border='1' cellPadding='10' cellSpacing='0' style={{margin: '1rem auto'}}>
                <thead>                  
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th> 
                        </tr>
                </thead>
                <tbody>
                    {
                        todos.map((item, array, index) =>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
const mapStateToProps = state =>{
    console.log("State = ",state)
    return{
        todoDeducer: state.todo
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        handleAddUserName: (data) => dispatch(addUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
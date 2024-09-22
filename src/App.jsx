import { useState, useEffect} from "react";
import TodoItem from "./components/todo-item";
import classes from "./styles.module.css";
import TodoDetails from "./components/todo-details";
import {Skeleton} from "@mui/material";

function App() {

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errMsg, setErrMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); 
  
// fetching the data from data json api
  async function fetchTodos(){
    try{
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const data = await apiResponse.json();
      console.log(data);
      if(data?.todos && data?.todos?.length > 0){
        setTodoList(data?.todos);
        setLoading(false);
        setErrMsg("");
      } else{
        setTodoList([]);
        setLoading(false);
        setErrMsg("");
      }
    } catch (err){
      console.error(err);
      setErrMsg(err);
    } 
  }

  // Creating a new section for each todo when the button is clicked

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);

    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();

      console.log(details);
      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
      

    } catch (err){
      console.error(err);
    }
  }

  //useEffect will be called at the loading of page
  useEffect(()=>{
    console.log("use Effect is called");
    fetchTodos();
  }, []);

  if(loading) return <Skeleton variant="rectangular" width={650} height={650}/>

  console.log(todoList);

  return (
    <div className={classes.mainWraper}>
      <h1 className={classes.headerTitle}>Todo App made by Shyam Kumar</h1>
    
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map((todoItem) => <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem} key={todoItem.id}/>) : null
        }
      </div>
      <div>
        <TodoDetails todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails}/>
      </div>
    </div>

  )
}

export default App

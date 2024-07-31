import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  let [todo,settodo]= useState([]);
  let onSubmit=(e)=>{
    let toname =e.target.toname.value;
    if(!todo.includes(toname)){
      let finalv=[...todo,toname];
      settodo(finalv);
    }
    else{
      NotificationManager.warning("Data already exists","Oops")
    }

    e.preventDefault();
  }
  let list=todo.map((value,i)=>{
    return(
      <TodoItems value={value} key={i} indexnum={i} todo={todo} settodo={settodo} />
    )
      
  })
  function sucessful(){
    NotificationManager.success("Data added","Congrats")
  }
  return (
    <div className='cont'>

      <h1>ToDo List</h1>
      <form onSubmit={onSubmit }>
      <input type='text' name='toname'></input>
      <NotificationContainer/>
      <button onClick={sucessful}>Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
         {list}
        </ul>
      </div>
    </div>

  );
}

export default App;
function TodoItems({value,indexnum,todo,settodo}){
  let [status,setstatus] = useState(false);
  function cmd(){
      setstatus(!status);
  }
  let deletei=()=>{
    let finaldata=todo.filter((v,i)=>i!=indexnum);
    settodo(finaldata)
  }
  return(
    <li className={(status)? 'call' : ''} onClick={cmd}>{value} <span onClick={deletei} >&times;</span></li>
  );
}

import React, { useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";


export default function App() {
  let [inputValue, setinputValue] = React.useState("");
  const [item,setitem]=React.useState("")

  const [list, setList] = React.useState([]);

  

  function handlechange(event) {
    const value = event.target.value;

    setinputValue(value)
  }
  function handleinputclick() {
    setitem(inputValue)
    console.log(item)

    
    setList((prevValue) => {
      return [...prevValue,inputValue];
    });
    setinputValue("");
  
  }

  function Delete(id){
    const newList = list.filter((items,index) =>index !== id);
  setList(newList)

 
   

   
  
  
    

    

  }
 
  
  return (
    <>
      <h1 className="header">Todolist</h1>
      <Input
        handleclickone={handleinputclick}
        handlchange={handlechange}
        value={inputValue}
      />
      {list.map((curValue, index) => {
        return <List key={index} id={index}  inputValue={curValue} Delete={Delete}  />;
      })}
    </>
  );
}

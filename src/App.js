import React,{useState} from "react";

function App() {
  const [count, setCount] = useState(1);
 
  
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Counter Appp</h1>
      <h3>value {count}</h3>
      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      
      <button onClick={()=>setCount(count*5)}> *5 </button>
      <button onClick={()=>{
        if(count<5){   //for Don't Show Negative Values
          setCount(count)
        }else{
          setCount(count/5)
        }
      } }> /5 </button>
      <button onClick={()=>setCount(0)}>0</button>
      </div>
    </div>
  );
}

export default App;

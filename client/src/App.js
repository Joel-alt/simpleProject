import {useState} from "react";

function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);


    return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Enter your first number</h1>
        <input type="text" value={firstNumber} onChange={(e)=>{setFirstNumber(e.target.value)}}/>
        <h1>Enter your second number</h1>
        <input type="text" value={secondNumber} onChange={(e)=>{setSecondNumber(e.target.value)}}/>
        <button>Add</button>
    </div>
  );
}

export default App;

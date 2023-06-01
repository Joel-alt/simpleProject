import {useState} from "react";

function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    function addNumbers() {
        const data = {"firstNumber": firstNumber, "secondNumber": secondNumber};
        fetch('http://localhost:8000/compute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                setResult(data.result)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Enter your first number</h1>
        <input type="text" value={firstNumber} onChange={(e)=>{setFirstNumber(e.target.value)}}/>
        <h1>Enter your second number</h1>
        <input type="text" value={secondNumber} onChange={(e)=>{setSecondNumber(e.target.value)}}/>
        <button onClick={addNumbers}>Add</button>
        <h1>Result: {result}</h1>
    </div>
  );
}

export default App;

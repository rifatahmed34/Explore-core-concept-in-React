import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd =() => {
        const newCount = count +1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const countReduce = count -1;
        setCount(countReduce);
    }
    
    return (
        <div style={{border: '6px solid yellow', padding:'10px', marginBottom: '20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
import React,{ useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <div className="card text" >
        <div className="card body">
          <h1> Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn-Success" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="btn-danger" onClick={()=>setCount(count-1)}>Decrement</button>
            <button className="btn-second" onClick={()=>setCount(0)}>Reset</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

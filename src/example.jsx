import { useState } from "react";

const ExampleApp = () => {
  const [state, setState] = useState(0);

 // let count = state;
 // function Increment() {
 //   count++;
 //   setState(count);
 // }
 // function decrement() {
 //   count--;
 //   setState(count);
 // }

 function Increment(){
   // setState(state + 1);
   setState(function(prevState){
    return prevState + 1
   })
}
function decrement(){
    // setState(state - 1)
    setState(function(prevState){
     return prevState - 1
    })
 }

 function reset(){
  setState(0);
 }
  return (
    <div>
      <p>Counts: {state}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={Increment}>Increment</button>



    </div>
  );
};

export default ExampleApp;

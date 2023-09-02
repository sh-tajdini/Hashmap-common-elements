// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function common_element(v1, v2){
    let map = new Map();
    let result = [];
    
    // Add all elements of v1 to the map
    for(let i=0; i<v1.length; i++){
        if(map.has(v1[i])){
            map.set(v1[i], map.get(v1[i])+1);
        }
        else{
            map.set(v1[i], 1);
        }
    }
    
    // Check if each element of v2 is in the map
    // If yes, add it to the result array and decrement its count in the map
    for(let i=0; i<v2.length; i++){
        if(map.has(v2[i]) && map.get(v2[i])>0){
            result.push(v2[i]);
            map.set(v2[i], map.get(v2[i])-1);
        }
    }
    
    // Sort the result array and return it
    result.sort((a,b) => a-b);
    return result;
}

// Driver code
let v1 = [3, 4, 2, 2, 4];
let v2 = [3, 2, 2, 7];
console.log(common_element(v1, v2)); // Output: [2, 2, 3]
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
 }

export default App

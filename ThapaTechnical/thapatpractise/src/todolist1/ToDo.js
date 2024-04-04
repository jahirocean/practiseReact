// import React, { useState } from "react";
// import { ToDoList } from "./ToDoList";

// function App() {
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);
//   const handleItems = (event) => {
//     setInputList(event.target.value);
//   };

//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });

//     setInputList("");
//   };
//   const deleteItems = (id) => {
//     console.log("Deleted");
//     setItems((oldItems) => {
//       return oldItems.filter((arrEl, index) => {
//         return index !== id;
//       });
//     });
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="center_div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             value={inputList}
//             placeholder="Add a items"
//             onChange={handleItems}
//           />

//           <button onClick={listOfItems}>
//             <i className="fas fa-plus"></i>
//           </button>
//           <ol>
//             {items.map((itemsValue, index) => {
//               return (
//                 <ToDoList
//                   key={index}
//                   id={index}
//                   onSelect={deleteItems}
//                   text={itemsValue}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

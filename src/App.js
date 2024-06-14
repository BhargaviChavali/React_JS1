// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */
//         <h1>Hello World!</h1>}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import ButtonComponent from "./components/buttons.js";
// import {
  // Heading1
  // Heading2,
  // Heading3,
  // Heading4,
  // Heading5,
  // Heading6,
// } from "./components/headings.js";

// import {
//   ListParentOrdered,
//   ListParentUnordered,
// } from "./components/listParentList.js";
// import { Card } from "./components/card.js";
// import { ImageComponent } from "./components/images.js";

// const App = () => {
//   return (
//     <div class="app">
//       <ButtonComponent/>
//       <Heading1/>
//       <ImageComponent/>
//       <ListParentOrdered/>
//       <ListParentUnordered/>
//       <Card></Card>
//     </div>
//   );
// };

// export default App;

import React from "react";
// import { ImageComponent } from "./components/images.js";
// import ButtonComponent from "./components/buttons.js"
// import {Heading1} from "./components/headings.js";
// import {ListParentOrdered} from "./components/listParentList.js"
// import { ListParentUnordered } from "./components/listParentList.js";
import Card from "./components/card.js"
import Form from "./components/forms.js"
import Table from "./components/tables.js"

const App = () =>{
  return(
  <div>
   <>
    {/* <ImageComponent/>
   <ButtonComponent/>
   <Heading1/>
   <ListParentOrdered/>
   <ListParentUnordered/>  */}
   <Card></Card>
   <Form></Form>
   <Table></Table>
   </>
   
  </div>
  )

}
export default App;
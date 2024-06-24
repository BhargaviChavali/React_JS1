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
// import { ImageComponent } from "./components/images/image.js";
// import ButtonComponent from "./components/buttons/button.js"
// import {Heading1} from "./components/headings/heading.js";
import Card from "./components/cards/card.js"
import Form from "./components/forms/form.js"
import Table from "./components/tables/table.js"
import { ListParentOrdered } from "./components/lists/parentlist.js";

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
   <ListParentOrdered></ListParentOrdered>
   </>
   
  </div>
  )

}
export default App;
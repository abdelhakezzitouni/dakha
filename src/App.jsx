//import pages

import { Route, RouterProvider, createBrowserRouter, createHashRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home";
import Zarbia from "./Pages/Zarbia";
import Tagines from "./Pages/Tagines";
import Teapots from "./Pages/Teapots";
import Layout from "./Component/Layout";
import TaginesDetails from "./Pages/TaginesDetails";
import ZarbiaDetails from "./Pages/ZarbiaDetails";
import TeapotsDetails from "./Pages/TeapotsDetails";


function App() {

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" Component={Layout}>
        <Route index Component={Home} />
        <Route path="/zarbia" Component={Zarbia} />
        <Route path="/zarbia/:slug" Component={ZarbiaDetails} />
        <Route path="/tagines" Component={Tagines} />
        <Route path="/tagines/:slug" Component={TaginesDetails} />
        <Route path="/teapots" Component={Teapots} />
        <Route path="/teapots/:slug" Component={TeapotsDetails} />
      </Route>
    )
  )
  
  return (
    
   <div className="overflow-x-hidden" >
   <RouterProvider router={router}/>
   </div>
  );
}

export default App
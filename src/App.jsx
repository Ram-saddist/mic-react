import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Signup from "./Signup/Signup";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
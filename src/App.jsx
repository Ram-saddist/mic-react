import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
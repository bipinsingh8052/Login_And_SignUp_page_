import About from "./Components/About"
import Chating from "./Components/Chating"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Setting from "./Components/Setting"
import AdminLayout from "./Layout/AdminLayout"
import UserLayout from "./Layout/UserLayout"
import Login from "./Login"
import Main_page from "./Main_page"
import Adminlogin from "./Pages/Adminlogin"
import Userlogin from "./Pages/Userlogin"
import SignUp_Form from "./SignUp_Form"
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
  
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/signUp" element={<SignUp_Form/>}>
          </Route>
        </Routes>

        <Routes>
        <Route path="/account" element={<Main_page/>}></Route>
        </Routes>

        <Routes>
          <Route path="adminlogin" element={<Adminlogin/>}></Route>
        </Routes>

        <Routes>
          <Route path="userlogin" element={<Userlogin/>}>
          </Route>
        </Routes>

        {/* importants pages are there on that this is Admin pages are route */}
        <Routes>
          <Route path="/admin" element={<AdminLayout/>}>
          {/* <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/groupchat" element={<Chating/>}/>
          <Route path="/setting" element={<Setting/>}/> */}
          
          </Route>
        </Routes>
{/*this  is user  pages are route  */}
        <Routes>
          <Route path="/user" element={<UserLayout/>}>
          {/* <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/groupchat" element={<Chating/>}/>
          <Route path="/setting" element={<Setting/>}/> */}


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

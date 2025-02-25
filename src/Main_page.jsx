import { useNavigate } from 'react-router-dom'
import './css/adminUserPage.css'


export default function Main_page() {
  let nav =useNavigate();
  const Admin=()=>{
    nav("/adminlogin")

  }
  const user=()=>{
    nav("/userlogin")

  }
  return (
    <div style={{height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"whitesmoke" }}>
     <div className="button" style={{ height:"100px",display:"flex", justifyContent:"center", alignItems:"center", gap:"40px"}} >
      <button onClick={Admin} className="adminbtn">Admin</button>
      <button onClick={user} className='userbtn'>User</button>
     </div>
    </div>
  )
}

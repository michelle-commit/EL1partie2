import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Barmenu from './Barmenu.js';
import Card from './Card.js';
import Footer from './Footer.js';
function MyInput(props){
  const {type,label}=props;
  return (
  
  <div className="form-floating mb-3">
  <input className="form-control" id="inputPassword" type={type} placeholder="Password" />
  <label for="inputPassword">{label}</label>
</div>
)
} 

function App() {
  return (
   <>
   <Navbar/>
   
<div id="layoutSidenav">
    <Barmenu/> 
  
   <div id="layoutSidenav_content">
        <Card/>
        <Footer/>      
       
   </div>
</div></>
  );
}

export default App;

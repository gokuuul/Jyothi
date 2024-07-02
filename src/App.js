import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import Nav from './component/Navbar.jsx'
import AboutUs from './component/About.jsx';
import SignUp from './component/signin.jsx';
import Login from './component/login.jsx';
import Error from './component/error.jsx';

function App() {
  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Aboutus' element={<AboutUs />}></Route>
      <Route path='/' element={<Nav />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;

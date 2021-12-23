import Home from './Screens/Home';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignIn/>} />
      </Routes>
      
    </div>
  );
}

export default App;

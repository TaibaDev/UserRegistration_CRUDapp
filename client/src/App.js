import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import CodeforInterview from './components/CodeforInterview';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CodeforInterview/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/all" element={<AllUsers/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

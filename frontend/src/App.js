import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home';
import CreatePost from './components/createPost';
import UpdatePost from './components/updatePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/createpost' element={<CreatePost />}/>
          <Route path='/posts/:id/edit' element={<UpdatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

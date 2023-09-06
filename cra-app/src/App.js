import logo from './logo.svg';
import './App.css';
import { Counter, DrinkBeer, Login, UseState } from './components/UseState/Counter';
import { Checkbox, Checkbox1 } from './components/UseState/Checkbox';
import Register from './components/UseState/Register';
import PlayList from './components/UseState/Playlist';
import UserPage from './components/UseState/UserPage';
import CustomerList from './components/UseState/CustomerList';
import Reducer from './components/UseState/UseReducer';
import Todo from './components/UseState/Todo';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Main from './components/main/Main';
import StudentList from './components/StudentList/StudentList';
import StudentDetail from './components/StudentList/StudentDetail';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/layout/NotFound';
import Todo1 from './store/Todo1';
import Avatar from './components/UseEffect/Avatar';
import UseLayoutEffect from './components/UseLayoutEffect/UseLayoutEffect';
import UseRef from './components/UseRef/UseRef';
import UseMemo from './components/UseMemo/UseMemo';
import { useRef } from 'react';
import Video from './components/UseImperativeHandle/UseImperativeHandle'

function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }
  return (


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <MainLayout>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/student/list' element={<StudentList />}/>
        <Route path='/student/detail/:studentId' element={<StudentDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </MainLayout>
    
  );
}

export default App;

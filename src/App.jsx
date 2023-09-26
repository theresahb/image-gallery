import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './components/auth/SignIn/SignIn'
import Home from './components/Home/Home'
import WelcomePage from './components/Welcome/Welcome'
import SignUp from './components/auth/SignUp/SignUp'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

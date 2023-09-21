import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './components/auth/SignIn/SignIn'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

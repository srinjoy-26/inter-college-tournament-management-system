
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
      
    </>
  )
}
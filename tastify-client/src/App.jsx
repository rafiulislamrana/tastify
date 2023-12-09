import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componants/Header/Header'
import Footer from './componants/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

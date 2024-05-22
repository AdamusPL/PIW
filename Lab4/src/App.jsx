import { Helmet } from 'react-helmet';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { Login } from './Login';
import { Signup } from './Signup';
import { Hotel } from "./pages/Hotel";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto+Flex:opsz,wght@8..144,300&display=swap" rel="stylesheet" />
    </Helmet>

    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='browse' element={<Browse />}></Route>
        <Route path='hotel' element={<Hotel />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='sign-up' element={<Signup />}></Route>
    </Routes>
    </>
  )
}

export default App

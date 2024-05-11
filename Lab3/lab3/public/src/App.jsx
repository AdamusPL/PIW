import { Helmet } from 'react-helmet';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';

function App() {

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto+Flex:opsz,wght@8..144,300&display=swap" rel="stylesheet" />
    </Helmet>

    {/* <Home></Home> */}
    <Browse></Browse>
    </>
  )
}

export default App

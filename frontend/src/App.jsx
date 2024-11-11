import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import AddBook from './pages/addBook/AddBook'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='add/book' element={<AddBook />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

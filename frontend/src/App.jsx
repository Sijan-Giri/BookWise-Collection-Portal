import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import AddBook from './pages/addBook/AddBook'
import SingleBook from './pages/singleBook/SingleBook'
import EditBook from './pages/editBook/EditBook'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/add/book' element={<AddBook />}/>
      <Route path='/bookdetail' element={<SingleBook />}/>
      <Route path='/edit/book' element={<EditBook />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

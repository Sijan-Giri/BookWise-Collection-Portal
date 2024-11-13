import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import AddBook from './pages/addBook/AddBook'
import SingleBook from './pages/singleBook/SingleBook'
import EditBook from './pages/editBook/EditBook'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/add/book' element={<AddBook />}/>
      <Route path='/bookdetail/:id' element={<SingleBook />}/>
      <Route path='/edit/book/:id' element={<EditBook />}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App

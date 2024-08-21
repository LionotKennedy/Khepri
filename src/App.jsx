
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Container from './content_principal/Container'
import Blog_about from './blog_about/Blog_about'
import Main_content from './main_content/Main _content'
import Blog_content from './blog_content/Blog_content'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container />} >

            {/* Change element par vos composant */}
            <Route index element={<Main_content />} />
            {/* Change element par vos composant */}
            <Route path='/about' element={<Blog_about />} />
            {/* Change element par vos composant */}
            <Route path='/blog' element={<Blog_content />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const handleAddToBookMark = blog =>{
      const newBookMarks = [...bookmarks, blog];
      setBookMarks(newBookMarks);
  }

  return (
    <>

      <main className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex justify-center gap-4'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </main>


    </>
  )
}

export default App

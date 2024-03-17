
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookMark = (blog, id) =>{
      const newBookMarks = [...bookmarks, blog];
      setBookMarks(newBookMarks);
      // console.log('remove bookmark id', id);
      const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookMarks(remainingBookMarks);
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }


  return (
    <>

      <main className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex justify-center gap-4 py-4'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      </main>


    </>
  )
}

export default App

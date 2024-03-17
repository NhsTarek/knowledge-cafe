
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookMark = (blog, id) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
    // console.log('remove bookmark id', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
      
  }

  const handleMarkAsRead = time => {
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
          <ToastContainer />
        </div>
      </main>


    </>
  )
}

export default App

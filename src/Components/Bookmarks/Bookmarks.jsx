import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-[#6047EC1A] text-center p-4 shadow-xl my-5">
                <h3 className="text-2xl text-purple-700">Spent time on read : {readingTime} Min</h3>
             </div>
            
            <div className="bg-slate-200 p-4 rounded-xl text-center">
            <h3 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;
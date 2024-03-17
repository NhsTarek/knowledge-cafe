import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 p-4 rounded-xl">
            <h3 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
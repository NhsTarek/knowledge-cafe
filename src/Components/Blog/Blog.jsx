import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookMark}) => {
    const {title, cover, author, author_img, posted_date, reading_time,
        hashtags} = blog;
    return (
        <div className='mb-20'>
             <img className='w-full mb-8 rounded-xl' src={cover} alt={`cover picture of the ${title}`}></img>
             <div className='flex justify-between items-center '>
                <div className='flex justify-center items-center gap-6 mb-4'>
                   <img className='w-14' src={author_img} alt="" />
                   <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                   <span>{reading_time} min read</span>
                   <button 
                   onClick={() =>handleAddToBookMark(blog)}
                   className='text-2xl'><CiBookmark />
                    </button>
                </div>
             </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mx-2'><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func

}
export default Blog;
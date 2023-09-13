import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookmark }) => {
    // console.log(blog);
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-2' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-8 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className='ml-2'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
    handleAddBookmark: PropTypes.func
}

export default Blog;
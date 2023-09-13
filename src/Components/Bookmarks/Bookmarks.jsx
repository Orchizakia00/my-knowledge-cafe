import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4">
            <div className='m-4'>
                <h3 className='text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
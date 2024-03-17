

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white rounded-xl p-4 my-4">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
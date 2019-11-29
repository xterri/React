import React from 'react';

// get parent properties with 'props'; destructure with {} w/ prop objNames
const CommentDetail = ({ avatarImg, name, date, comment} ) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatarImg} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
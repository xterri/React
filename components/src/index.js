import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatarImg={faker.image.avatar()}
                name='Terri'
                date='November 28'
                comment='Comment here!'
            />
            <CommentDetail 
                avatarImg={faker.image.avatar()}
                name='Sam'
                date='November 29'
                comment='whaaat?!'
            />
            <CommentDetail 
                avatarImg={faker.image.avatar()}
                name='Rob'
                date='November 30'
                comment='comment details!'
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
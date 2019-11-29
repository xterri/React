import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Testing!</h4>
                    Test comment without CommentDetail
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImg={faker.image.avatar()}
                    name='Terri'
                    date='November 28'
                    comment='Comment here!'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImg={faker.image.avatar()}
                    name='Sam'
                    date='November 29'
                    comment='whaaat?!'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImg={faker.image.avatar()}
                    name='Rob'
                    date='November 30'
                    comment='comment details!'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
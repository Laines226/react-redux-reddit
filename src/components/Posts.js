import React from 'react';

const Posts = ({posts}) =>{
    return(
        <ol>
            {
                posts.map((post, i)=>{
                   return <li key={i}>{post.title}</li>;
                })
            }
        </ol>
    );
}

Posts.protoTypes = {
    posts: React.PropTypes.array.isRequired
}

export default Posts;

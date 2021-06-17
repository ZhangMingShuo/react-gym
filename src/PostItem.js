import React from 'react';
import PropTypes from "prop-types";

function PostItem(props) {
  const {post} = props;

  function handleClick() {
    props.onVote(props.post.id);
  }

  return (
      <li>
        <div><span>{post.title}</span></div>
        <div>创建人:<span>{post.author}</span></div>
        <div>创建时间: <span>{post.date}</span></div>
        <div><button onClick={handleClick}>点赞</button><span>{post.vote}</span></div>
      </li>
  );
}


PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
}
export default PostItem;

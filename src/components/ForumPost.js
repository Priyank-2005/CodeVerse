import React from 'react';
import './ForumPost.css';

function ForumPost({ post }) {
  return (
    <div className="forum-post">
      <h3>{post.title}</h3>
      <p className="content">{post.content}</p>
      <div className="meta">
        <span>👤 {post.username}</span>
        <span>📅 {post.date}</span>
      </div>
      <div className="stats">
        <span>👍 {post.likes}</span>
        <span>💬 {post.comments}</span>
      </div>
    </div>
  );
}

export default ForumPost;

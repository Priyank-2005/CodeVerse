import React, { useState } from 'react';
import './NewPostForm.css';

function NewPostForm({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      username: "guestUser",
      title,
      content,
      likes: 0,
      comments: 0,
      date: new Date().toISOString().split('T')[0]
    };

    onAddPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <h3>Start a Discussion</h3>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="4"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default NewPostForm;

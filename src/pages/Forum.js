import React, { useState, useEffect } from 'react';
import forumPostsData from '../data/forumPosts';
import ForumPost from '../components/ForumPost';
import NewPostForm from '../components/NewPostForm';
import { motion } from 'framer-motion';
import './Forum.css';

function Forum() {
  const [posts, setPosts] = useState(forumPostsData);

  useEffect(() => {
    document.title = 'Forum | CodeVerse';
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <motion.div
      className="forum-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>CodeVerse Forum</h2>
      <NewPostForm onAddPost={handleAddPost} />
      <div className="forum-posts">
        {posts.map(post => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
}

export default Forum;

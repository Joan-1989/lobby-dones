import React, { useState } from 'react';
import { posts, Post } from '../data/posts';
import PostCard from './PostCard';
import PostModal from './PostModal';

const NewsSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const stickyPost = posts.find(p => p.isSticky);
  const regularPosts = posts.filter(p => !p.isSticky);
  
  const handleOpenPost = (post: Post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <section id="news" className="bg-neutral-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-text mb-4">Actualitat</h2>
          <p className="font-sans text-lg text-neutral-text-subtle leading-relaxed">
            Les últimes notícies, esdeveniments i reflexions de la nostra activitat. Mantén-te al dia de la lluita pels drets de les dones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Sticky Post */}
            {stickyPost && (
                <div className="lg:col-span-2">
                    <PostCard post={stickyPost} onClick={() => handleOpenPost(stickyPost)} isFeatured={true} />
                </div>
            )}

            {/* Regular Posts */}
            {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} onClick={() => handleOpenPost(post)} />
            ))}
        </div>
      </div>
      
      <PostModal post={selectedPost} onClose={handleClosePost} />
    </section>
  );
};

export default NewsSection;
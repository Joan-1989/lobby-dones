import React from 'react';
import { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
  onClick: () => void;
  isFeatured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <div 
        onClick={onClick}
        className="bg-neutral-background rounded-lg overflow-hidden border border-neutral-border group transition-all duration-normal hover:border-primary/50 hover:shadow-lg cursor-pointer flex flex-col md:flex-row"
      >
        <div className="md:w-1/2">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-normal ease-in-out" />
        </div>
        <div className="p-8 flex flex-col justify-center md:w-1/2">
            <p className="font-sans text-sm text-accent mb-2 font-medium">{post.date}</p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 text-neutral-text group-hover:text-primary transition-colors duration-fast">{post.title}</h3>
            <p className="font-sans text-neutral-text-subtle leading-relaxed mb-6">{post.excerpt}</p>
             <span className="font-semibold text-primary mt-auto group-hover:text-accent transition-colors duration-fast">
                Llegeix més →
            </span>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="bg-neutral-background rounded-lg overflow-hidden border border-neutral-border group transition-all duration-normal hover:border-primary/50 hover:-translate-y-1 hover:shadow-md cursor-pointer flex flex-col"
    >
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-normal ease-in-out" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
          <p className="font-sans text-sm text-accent mb-2 font-medium">{post.date}</p>
          <h3 className="font-display text-xl font-bold mb-3 text-neutral-text group-hover:text-primary transition-colors duration-fast flex-grow">{post.title}</h3>
           <span className="font-semibold text-primary mt-4 group-hover:text-accent transition-colors duration-fast">
              Llegeix més →
          </span>
      </div>
    </div>
  );
};

export default PostCard;
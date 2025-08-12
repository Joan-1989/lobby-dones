import React, { useEffect, useRef } from 'react';
import { Post } from '../data/posts';

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (post) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-neutral-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-title"
    >
      <div
        ref={modalRef}
        className="bg-neutral-background rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="p-6 border-b border-neutral-border flex justify-between items-center flex-shrink-0">
            <h2 id="post-title" className="font-display text-2xl font-bold text-neutral-text">{post.title}</h2>
            <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-light text-neutral-text-subtle hover:text-primary transition-colors"
                aria-label="Tancar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <div className="overflow-y-auto p-8">
            <p className="font-sans text-sm text-accent mb-4 font-medium">{post.date}</p>
            <div className="prose-styling" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
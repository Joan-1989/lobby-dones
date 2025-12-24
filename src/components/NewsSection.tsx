import React from 'react';
import { posts, Post } from '../data/posts';

const NewsSection: React.FC = () => {
  const NewsCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt={`Imatge per a ${post.title}`} />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">{post.category}</div>
        <p className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">{post.title}</p>
        <p className="mt-2 text-gray-500 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4">
          <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">Llegeix més &rarr;</a>
        </div>
      </div>
    </div>
  );

  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Actualitat i Notícies</h2>
          <p className="mt-4 text-lg text-gray-600">
            Estigues al dia de les nostres últimes activitats, campanyes i articles d'opinió.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

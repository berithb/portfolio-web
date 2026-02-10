import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      date: 'Dec 15, 2024',
      category: 'Development',
      excerpt: 'Learn how to set up a modern React project with TypeScript for better type safety and developer experience.',
    },
    {
      id: '2',
      title: 'Building Responsive Layouts with TailwindCSS',
      date: 'Dec 10, 2024',
      category: 'Design',
      excerpt: 'Discover the power of utility-first CSS and how to create beautiful responsive designs quickly.',
    },
    {
      id: '3',
      title: 'AI Integration in Modern Web Apps',
      date: 'Dec 5, 2024',
      category: 'AI',
      excerpt: 'Exploring how artificial intelligence can enhance user experiences in web applications.',
    },
    {
      id: '4',
      title: 'Best Practices for Frontend Development',
      date: 'Nov 28, 2024',
      category: 'Development',
      excerpt: 'Essential tips and patterns for writing clean, maintainable frontend code.',
    },
  ];

  const categories = ['All', 'Development', 'Design', 'AI'];

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-medium mb-8">Blog</h1>
      
      <div className="flex gap-3 mb-12 flex-wrap">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm ${
              index === 0 ? 'bg-primary text-dark' : 'bg-tag hover:bg-primary hover:text-dark'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="bg-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-tag"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <Calendar size={16} />
                <span>{post.date}</span>
                <span className="ml-2 bg-tag px-3 py-1 rounded-full text-xs">{post.category}</span>
              </div>
              <h3 className="text-xl font-medium mb-3 leading-tight">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-primary hover:underline font-medium">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

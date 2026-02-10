import { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

const Work = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('https://api.github.com/users/berithb/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const languages = ['all', ...new Set(repos.map(r => r.language).filter(Boolean))];
  const filtered = filter === 'all' ? repos : repos.filter(r => r.language === filter);

  if (loading) return <div className="text-2xl">Loading projects...</div>;

  return (
    <>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl lg:text-5xl font-medium">My Work</h2>
        <div className="flex gap-3 flex-wrap">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-lg text-sm capitalize transition ${
                filter === lang ? 'bg-primary text-dark' : 'bg-tag hover:bg-primary hover:text-dark'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(repo => (
          <div key={repo.id} className="bg-card rounded-2xl p-6 hover:-translate-y-1 transition">
            <div className="flex gap-2 mb-3 flex-wrap">
              {repo.language && (
                <span className="bg-tag px-3 py-1 rounded text-xs">{repo.language}</span>
              )}
              {repo.topics.slice(0, 2).map(topic => (
                <span key={topic} className="bg-tag px-3 py-1 rounded text-xs">{topic}</span>
              ))}
            </div>
            <h3 className="text-xl font-medium mb-2 capitalize">
              {repo.name.replace(/-/g, ' ')}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {repo.description || 'No description available'}
            </p>
            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1"><Star size={16} /> {repo.stargazers_count}</span>
              <span className="flex items-center gap-1"><GitFork size={16} /> {repo.forks_count}</span>
            </div>
            <div className="flex gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm flex items-center gap-1"
              >
                <Github size={16} /> View Code
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm flex items-center gap-1"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;

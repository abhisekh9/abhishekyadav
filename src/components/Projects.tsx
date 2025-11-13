import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaLink, FaSearch, FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  open_issues_count: number;
  html_url: string;
  homepage: string | null;
  owner: {
    avatar_url: string;
  };
}

const Projects = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/abhisekh9/repos?sort=updated&per_page=100');
        const data = await response.json();
        const filteredRepos = data.filter((repo: GitHubRepo) => !repo.fork);
        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const getLanguageCategory = (language: string | null) => {
    if (!language) return 'Other';
    if (language === 'JavaScript') return 'JavaScript';
    if (language === 'TypeScript') return 'TypeScript';
    return 'Other';
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Go: '#00ADD8',
      Rust: '#dea584',
      Kotlin: '#A97BFF',
      Dart: '#00B4AB',
    };
    return colors[language || ''] || '#8b949e';
  };

  const languages = ['All', 'JavaScript', 'TypeScript', 'Other'];
  const filteredRepos = filter === 'All' ? repos : repos.filter(repo => getLanguageCategory(repo.language) === filter);

  if (loading) {
    return (
      <section className="py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-900 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === lang
                  ? 'bg-cyan-400 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.full_name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(repo.full_name)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-visible cursor-pointer"
              style={{
                transform: hoveredProject === repo.full_name ? 'scale(1.1)' : 'scale(1)',
                zIndex: hoveredProject === repo.full_name ? 50 : 10,
                transition: 'transform 0.3s ease',
              }}
            >
              {/* NORMAL CARD */}
              <div className="overflow-hidden rounded-xl">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-6">
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.name}
                    className="w-24 h-24 rounded-lg shadow-lg object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <span
                        className="px-3 py-1 rounded-full text-sm font-medium text-white flex-shrink-0 ml-2"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      >
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <HiUsers className="w-4 h-4" />
                      <span>1</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaExclamationCircle className="w-4 h-4" />
                      <span>{repo.open_issues_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  {repo.language && (
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: '100%',
                          backgroundColor: getLanguageColor(repo.language),
                        }}
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FaLink className="w-5 h-5" />
                      </a>
                    )}
                    <button className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                      <FaSearch className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* HOVER OVERLAY */}
            {/* HOVER POPUP — Centered, Close Icon, Closes Only When Leaving Card */}
<AnimatePresence>
  {hoveredProject === repo.full_name && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] flex items-center justify-center"
    >
      {/* POPUP CARD */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[70%] max-w-3xl p-8"
        onMouseLeave={() => setHoveredProject(null)}   // 👈 CLOSE ONLY WHEN LEAVING THE CARD
      >
        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setHoveredProject(null)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center hover:bg-cyan-500 transition"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={repo.owner.avatar_url}
            className="w-16 h-16 rounded-xl"
            alt=""
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {repo.full_name}
            </h3>
            <p className="text-gray-500 text-sm">{repo.description || "No description available"}</p>
          </div>
        </div>

        {/* TITLE + TAG */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-2">{repo.name}</h2>

          <span
            className="px-3 py-1 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: getLanguageColor(repo.language) }}
          >
            {repo.language || "Other"}
          </span>
        </div>

        {/* BUTTON */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-cyan-400 hover:bg-cyan-500 text-white text-center rounded-full font-bold uppercase transition"
        >
          View Project on GitHub
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



            </motion.div>
          ))}
        </div>
      </div>

      {/* DARK BACKDROP */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

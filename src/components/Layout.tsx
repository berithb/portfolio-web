import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/services', label: 'Services' },
    { path: '/resume', label: 'Resume' },
    { path: '/skills', label: 'Skills' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacts', label: 'Contacts' },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-5 right-5 z-[1001] bg-primary p-2.5 rounded-lg flex flex-col gap-1.5 w-11 h-11 justify-center items-center"
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-dark rounded"></span>
        <span className="block w-6 h-0.5 bg-dark rounded"></span>
        <span className="block w-6 h-0.5 bg-dark rounded"></span>
      </button>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/70 z-[998] lg:hidden"
        />
      )}

      <div className="flex max-w-[1400px] mx-auto p-5 lg:p-10 pt-20 lg:pt-10">
        <aside className={`w-[300px] bg-card rounded-[20px] p-8 text-center lg:sticky lg:top-5 lg:block ${isMenuOpen ? 'fixed top-0 left-0 z-[999] h-screen overflow-y-auto' : 'hidden'}`}>
          <div className="w-full bg-[#2e2626] rounded-lg overflow-hidden mb-5 pt-[100%] relative">
            <img
              src="/image/belite.jpeg"
              alt="Mushikiwabo Bat Belite"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-medium mb-1">
            Mushikiwabo Bat <span className="text-primary">Belite</span>
          </h3>
          <p className="text-gray-400 text-sm mb-8">Software Developer</p>
          <a
            href="/cv"
            className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-bold text-sm uppercase hover:bg-primary/90 transition"
          >
            Download CV
          </a>
        </aside>

        <main className="flex-1 lg:ml-12">
          <nav className={`lg:block ${isMenuOpen ? 'fixed top-0 left-0 w-[280px] h-screen bg-card p-5 pt-20 z-[1000] overflow-y-auto' : 'hidden'}`}>
            <ul className="flex flex-wrap gap-5 lg:gap-8 mb-16 lg:flex-row flex-col">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg capitalize relative hover:text-primary transition ${
                      location.pathname === item.path ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

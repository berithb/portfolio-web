import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacts from './pages/Contacts';
import CV from './pages/CV';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

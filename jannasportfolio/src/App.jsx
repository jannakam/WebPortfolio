import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header';
import ProjectCard from './assets/components/ProjectCard';
import ProjectsSection from './assets/components/ProjectSection';
import Footer from './assets/components/Footer';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Skills from './assets/components/Skills';

const projects = [
  {
    name: 'Project One',
    image: 'path-to-image1.jpg',
    description: 'desc1',
    githubLink: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    image: 'path-to-image2.jpg',
    description: 'desc2',
    githubLink: 'https://github.com/yourusername/project-two',
  },
];

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <ProjectsSection projects={projects} />
    <Footer />
    </>
  );
}

export default App;

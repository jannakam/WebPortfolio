import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header';
import ProjectCard from './assets/components/ProjectCard';
import ProjectsSection from './assets/components/ProjectSection';

const projects = [
  {
    name: 'Project One',
    image: 'path-to-image1.jpg',
    githubLink: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    image: 'path-to-image2.jpg',
    githubLink: 'https://github.com/yourusername/project-two',
  },
  // Add more projects here
];

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <ProjectsSection projects={projects} />
    </>
  );
}

export default App;

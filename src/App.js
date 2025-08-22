import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Sidebar from './components/Sidebar';
import './App.css';

const PersonalInfo = lazy(() => import('./components/PersonalInfo'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Interests = lazy(() => import('./components/Interests'));
const Resume = lazy(() => import('./components/Resume'));

const MainContent = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main-content ${theme === 'dark' ? 'falling-stars' : ''}`}>

      {/* Light Mode - Sliding Background */}
      {theme === 'light' && (
        <>
          <div className="bg" />
          <div className="bg bg2" />
          <div className="bg bg3" />
        </>
      )}

      {/* Fireflies in Dark Mode */}
      {theme === 'dark' && (
  <div className="lines">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="line"></div>
    ))}
  </div>
)}

      {children}
    </main>
  );
};

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="personal-info"><PersonalInfo /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="interests"><Interests /></section>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/my_portfolio">
        <div className="app-container">

          <Helmet>
            <title>Sanyu Paul Reddy Singareddy - Portfolio</title>
            <meta name="description" content="Portfolio of Sanyu Paul Reddy Singareddy, Computer Science student specializing in MERN stack and IoT solutions." />
            <meta name="keywords" content="portfolio, Sanyu Paul Reddy, MERN stack, IoT, full-stack developer" />
          </Helmet>

          <Sidebar />

          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </MainContent>

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

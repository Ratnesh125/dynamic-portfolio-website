import React from 'react';
import Skills from './Skills.jsx';
import './app.css';
import Portfolio from './Portfolio.jsx';
import Aboutme from './Aboutme.jsx';
import Projects from './Projects.jsx';

function App() {
    return (
        <div>
            <Portfolio />
            <Aboutme /> 
            <Skills />
            <Projects />
        </div>
    )
}
export default App

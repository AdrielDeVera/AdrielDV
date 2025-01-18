import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Github, Mail, Linkedin, Film, BookOpen, Globe, Bookmark, NotebookPen  } from 'lucide-react';


import asci2 from './Images/ascii-art.svg'
import EngAward from './Images/EngAward.jpg'
import FSAbonFire from './Images/FSAbonFire.jpg'
import i4bonFire from './Images/i4bonFire.jpg'
import I4Resume from './Images/I4Resume.jpg'
import PanelSpeaker from './Images/PanelSpeaker.jpg'


function AnimatedName() {
  const [displayText, setDisplayText] = useState("Adriel");
  const [isAnimating, setIsAnimating] = useState(false);
  const names = ["Adriel", "Ivan", "DV"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for fade out, then change text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % names.length);
        setDisplayText(names[(index + 1) % names.length]);
        setIsAnimating(false);
      }, 300); // Half of the transition duration
      
    }, 2000); // Total time between changes

    return () => clearInterval(timer);
  }, [index]);

  return (
    <span 
      className={`inline-block transition-all duration-600 transform
        ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
      `}
    >
      {displayText}
    </span>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <h2 className="text-2xl text-[#2D1810] hover:font-bold transition-all cursor-pointer">
          Adriel De Vera
        </h2>
        <Link 
          to="/about" 
          className="text-xl text-[#2D1810] hover:font-bold transition-all"
        >
          About Me
        </Link>
      </nav>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Top Left - Title Section */}
        <div className="space-y-8 mt-24 ">
          <div>
            <p className="text-6xl font-bold text-[#2D1810] mb-4">
              Home Base.
              <br />
              Adriel DV
            </p>
            <p className="text-xl text-[#6D4810]">Busy Building Digital and Physical Networks</p>
          </div>
        </div>

        {/* Top Right - Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img 
             src={asci2}
            alt="Workspace"
            className="object-cover w-full h-full "
          
          />
        </div>

        {/* Bottom Left - Quick Intro */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#2D1810]">Quick Intro</h3>
          <ul className="space-y-4 text-[#4D2810] ">
            <li>🏫 3rd Year Engineer + Minor AI @ UWaterloo</li>
            <li>🎓 Graduating Spring 2026</li>
            <li>🤖 Experience in Software Architecture + Distributed Systems</li>
            <li>🖥️ SWE Internships in Aerospace + Ai + IOT</li>
            <li>📊 Research Assistant at the Behavioural Analytics and Modelling Lab</li>
          </ul>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-4xl font-bold text-center text-[#2D1810] mb-8">Still Curious?</h2>
            <div className="grid grid-cols-3 gap-8">
            <div className="space-y-4">
        <a href="mailto:aidever@uwaterloo.ca" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <Mail className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Email</span>
        </a>

        <a href="https://read.cv/adrieldv" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <BookOpen className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Read.cv</span>
        </a>
      </div>
      <div className="space-y-4">
        <a href="https://www.linkedin.com/in/adrieldevera/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <Linkedin className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Linkedin</span>
        </a>
        <a href="https://medium.com/@adrieldv" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <NotebookPen className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Medium</span>
        </a>
      </div>
      <div className="space-y-4">
      <a href="https://github.com/AdrielDeVera" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <Github className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Github</span>
        </a>
        <a href="https://curius.app/adriel-de-vera" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#4D2810] hover:text-[#2D1810] transition-colors group">
          <Bookmark className="w-6 h-6" />
          <span className="text-xl group-hover:underline">Curius</span>
        </a>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/////////////////////////////////////////////////
///    ABOUT ME SECTION                    /////
////////////////////////////////////////////////
function About() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <h2 
          onClick={() => navigate('/')} 
          className="text-2xl text-[#2D1810] hover:font-bold transition-all cursor-pointer"
        >
          Adriel De Vera
        </h2>
      </nav>

      {/* Bento Box Photo Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-16 max-w-4xl mx-auto h-[400px]">
        {/* Large feature image */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
          <img 
            src={EngAward}
            alt="Engineering workspace"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Top right images */}
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={FSAbonFire}
            alt="AI visualization"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={PanelSpeaker}
            alt="Research lab"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Bottom right images */}
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={I4Resume}
            alt="Tech diagram"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img 
            src={i4bonFire}
            alt="Coding setup"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
  <h1 className="text-6xl font-bold text-[#2D1810] mb-8">Welcome Back!</h1>
  
  <div className="space-y-8 text-[#4D2810]">
    <p className="text-xl leading-relaxed">
      Adriel here, a Management Engineering student at uWaterloo with experience in software architecture, distributed systems, and full-stack development from internships in AI, aerospace, and engineering. 
      I’m passionate about creating user-centric solutions at the intersection of people, software, and design while advocating for representation for minorities in tech, particularly the Filipino community. 
      I love building communities, uplifting others, and am always excited to connect with new people!
    </p>
    
    <div>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Experience</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Software Engineer @ Replicant AI</li>
        <li>Software Engineer @ Raytheon Technologies</li>
        <li>Systems Engineer @ Multimatic Inc</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Current Obsessions</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Training for a Triathlon</li>
        <li>Staying organized with Personal Knowledge Management Systems</li>
        <li>Avid Sticker Collector</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Side Quests</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Founded the uWaterloo Filipino Student Assoc (+400 members)</li>
        <li>uWaterloo Engineering Mentor + Ambassador</li>
        <li>Received the Engineering Society Leadership Excellence Award</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Github, Mail, Linkedin, BookOpen, Bookmark, NotebookPen  } from 'lucide-react';
import DotGridBackground from './components/DotGridBackground';
import { OvalGradientBackground } from './components/OvalGradientBackground';

// Custom hook for scroll-based animations
function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
}

// TextBlock component with scroll-responsive background
function TextBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const scrollY = useScrollAnimation();
  const blockRef = useRef<HTMLDivElement>(null);
  const [blockTop, setBlockTop] = useState(0);
  const [blockHeight, setBlockHeight] = useState(0);
  
  useEffect(() => {
    if (blockRef.current) {
      const rect = blockRef.current.getBoundingClientRect();
      setBlockTop(rect.top + window.scrollY);
      setBlockHeight(rect.height);
    }
  }, []);
  
  // Calculate which block should be "active" (rising)
  const viewportCenter = scrollY + window.innerHeight / 2;
  const blockCenter = blockTop + blockHeight / 2;
  const distanceFromViewportCenter = Math.abs(viewportCenter - blockCenter);
  
  // Only the closest block to viewport center gets the rise effect
  const isActive = distanceFromViewportCenter < window.innerHeight / 2;
  
  // Calculate animation values
  const distanceFromTop = scrollY - blockTop;
  const translateY = isActive ? Math.max(0, distanceFromTop * 0.15) : 0; // Only active block rises
  const opacity = Math.max(0.8, 1 - distanceFromTop * 0.0003); // Consistent opacity
  const scale = isActive ? Math.max(0.98, 1 - distanceFromTop * 0.00005) : 1; // Only active block scales
  
  return (
    <div 
      ref={blockRef}
      className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 ${className}`}
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
}

// Responsive Image Component
function ResponsiveImage({ src, alt, className = "", sizes = "100vw" }: { src: string; alt: string; className?: string; sizes?: string }) {
  return (
    <img 
      src={src}
      alt={alt}
      className={`object-cover w-full h-full hover:scale-105 transition-transform duration-300 ${className}`}
      loading="lazy"
      sizes={sizes}
    />
  );
}


import asci2 from './Images/webp/ascii-art.webp'
import EngAward from './Images/webp/EngAward.webp'
import FSAbonFire from './Images/webp/FSAbonFire.webp'
import i4bonFire from './Images/webp/i4bonFire.webp'
import I4Resume from './Images/webp/I4Resume.webp'
import PanelSpeaker from './Images/webp/PanelSpeaker.webp'



function Home() {
  return (
    <DotGridBackground 
      approach="css"
      dotSize={1}
      spacing={24}
      dotColor="#707070"
      className="min-h-screen bg-white p-8"
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="relative group">
          <OvalGradientBackground 
            colors={['#ff7f50', '#ff6bd6', '#ffe08a']}
            width="200px"
            height="80px"
            opacity={0.9}
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h2 className="relative z-10 text-2xl text-[#2D1810] hover:font-bold transition-all cursor-pointer px-4 py-2">
            Adriel De Vera
          </h2>
        </div>
        <div className="relative group">
          <OvalGradientBackground 
            colors={['#ff7f50', '#ff6bd6', '#ffe08a']}
            width="150px"
            height="60px"
            opacity={0.9}
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Link 
            to="/about" 
            className="relative z-10 text-xl text-[#2D1810] hover:font-bold transition-all px-4 py-2 block"
          >
            About Me
          </Link>
        </div>
      </nav>

      {/* Main Grid Layout - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Top Left - Title Section */}
        <div className="space-y-8 mt-24 ">
          <div>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1810] mb-4">
              Home Base.
              <br />
              Adriel DV
            </p>
            <p className="text-lg sm:text-xl text-[#6D4810]">
              Busy Building{' '}
              <a 
                href="https://www.linkedin.com/posts/adrieldevera_this-summer-i-had-the-opportunity-to-attend-activity-7367583130926419968--dpa?utm_source=share&utm_medium=member_desktop&rcm=ACoAACrHC_sBslW5QfoUFxP-3fxxr6O4guIZr5A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6D4810] hover:text-[#2D1810] hover:underline transition-all duration-300 cursor-pointer"
              >
                Digital
              </a>
              {' '}and{' '}
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7201963096356106243/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6D4810] hover:text-[#2D1810] hover:underline transition-all duration-300 cursor-pointer"
              >
                Physical
              </a>
              {' '}Networks
            </p>
          </div>
        </div>

        {/* Top Right - Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img 
             src={asci2}
            alt="Workspace"
            className="object-cover w-full h-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Bottom Left - Quick Intro */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#2D1810]">Quick Intro</h3>
          <ul className="space-y-4 text-[#4D2810] ">
            <li>🏫 4th Year Engineer + Minor AI @ UWaterloo</li>
            <li>🎓 Graduating Spring 2026</li>
            <li>🤖 Experience in AI + Software Architecture + Distributed Systems</li>
            <li>🖥️ SWE Internships in Aerospace + AI + IOT</li>
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
    </DotGridBackground>
  );
}


/////////////////////////////////////////////////
///    ABOUT ME SECTION                    /////
///                                       ////
////////////////////////////////////////////////
function About() {
  const navigate = useNavigate();
  
  return (
    <DotGridBackground 
      approach="css"
      dotSize={1}
      spacing={20}
      dotColor="#9ca3af"
      className="min-h-screen bg-white p-8"
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="relative group">
          <OvalGradientBackground 
            colors={['#ff7f50', '#ff6bd6', '#ffe08a']}
            width="200px"
            height="80px"
            opacity={0.9}
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h2 
            onClick={() => navigate('/')} 
            className="relative z-10 text-2xl text-[#2D1810] hover:font-bold transition-all cursor-pointer px-4 py-2"
          >
            Adriel De Vera
          </h2>
        </div>
      </nav>

      {/* Bento Box Photo Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 mb-16 max-w-4xl mx-auto h-[400px]">
        {/* Large feature image */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden">
          <ResponsiveImage 
            src={EngAward}
            alt="Engineering workspace"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        {/* Top right images */}
        <div className="rounded-2xl overflow-hidden">
          <ResponsiveImage 
            src={FSAbonFire}
            alt="AI visualization"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <ResponsiveImage 
            src={PanelSpeaker}
            alt="Research lab"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        {/* Bottom right images */}
        <div className="rounded-2xl overflow-hidden">
          <ResponsiveImage 
            src={I4Resume}
            alt="Tech diagram"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <ResponsiveImage 
            src={i4bonFire}
            alt="Coding setup"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
  <h1 className="text-6xl font-bold text-[#2D1810] mb-8">Welcome Back!</h1>
  
  <div className="space-y-8 text-[#4D2810]">
    <TextBlock>
      <p className="text-xl leading-relaxed">
        Adriel here, a Management Engineering student at uWaterloo with experience in software architecture, distributed systems, and full-stack development. 
        I'm passionate about creating user-centric solutions at the intersection of people, software, and design while advocating for representation for minorities in tech, particularly the Filipino community.
      </p>
    </TextBlock>
    
    <TextBlock>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Experience</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Software Engineer @ Replicant AI</li>
        <li>Software Engineer @ Raytheon Technologies</li>
        <li>Systems Engineer @ Multimatic Inc</li>
      </ul>
    </TextBlock>

    <TextBlock>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Current Obsessions</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Training for a Half Ironman</li>
        <li>Traveling to Asia</li>
        <li>AI-Powered Productivity</li>
      </ul>
    </TextBlock>

    <TextBlock>
      <h2 className="text-2xl font-bold text-[#2D1810] mb-4">Side Quests</h2>
      <ul className="list-disc list-inside text-xl leading-relaxed">
        <li>Founder of uWaterloo Filipino Student Assoc (+400 members)</li>
        <li>uWaterloo Engineering Mentor + Ambassador (200+ Mentees)</li>
        <li>Engineering Society Leadership Excellence Award Recipient</li>
      </ul>
    </TextBlock>
  </div>
</div>

    </DotGridBackground>
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
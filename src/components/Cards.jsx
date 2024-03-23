import React, { useState } from 'react';
import image1 from '../images/language.jpg';
import image2 from '../images/language.jpg';

export default function Cards() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem' }}>
      <div 
        className="card box" 
        style={{ 
          width: '18rem', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          boxShadow: hovered1 ? '0 0 1.2rem #d16767' : '0.5rem 0 1.2rem #052e58', 
          transition: 'all 0.4s', 
          margin: '1rem',
          transform: hovered1 ? 'translateY(-0.6rem)' : 'none'  // Added movement effect
        }}
        onMouseEnter={() => setHovered1(true)}
        onMouseLeave={() => setHovered1(false)}
      >
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">LingoLinker</h5>
          <p className="card-text">LingoLinker is a platform that links different languages together, emphasizing the idea of bridging linguistic barriers.</p>
          <a href="https://aka-023.github.io/LingoLinker/" target='_blank' className="btn btn-primary">Click Me!</a>
        </div>
      </div>
      <div 
        className="card box" 
        style={{ 
          width: '18rem', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          boxShadow: hovered2 ? '0 0 1.2rem #d16767' : '0.5rem 0 1.2rem #052e58', 
          transition: 'all 0.4s', 
          margin: '1rem',
          transform: hovered2 ? 'translateY(-0.6rem)' : 'none'  // Added movement effect
        }}
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
      >
        <img src={image2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">CaseCanvas</h5>
          <p className="card-text">Easily transform the case of your text hassle-free with CaseCanvas, the ultimate online tool for seamless conversion.</p>
          <a href="https://aka-023.github.io/TextUtils/" target='_blank' className="btn btn-primary">Click Me!</a>
        </div>
      </div>
    </div>
  );
}

import femaleDevGif from '../assets/female-dev.gif';

import { useEffect, useState } from 'react';


const Hero = () => {
  const fullText = "A passionate Frontend Developer specializing in React, JavaScript, and UI/UX Design.";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 50;
    const delayBetweenLoops = 5000;
    let timer;

    if (index <= fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setIndex(0);
      }, delayBetweenLoops);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Uttra</h2>
      <p className="typing-text">{text}</p>
    <img src={femaleDevGif} alt="Animated Female Developer" className="hero-image" />

    </section>
  );
};

export default Hero;
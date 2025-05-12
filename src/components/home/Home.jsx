import './Home.css';
import illustration from '../../assets/image.png'; // image de la bannière
import avatar from '../../assets/avatar.svg'; // image de l'introduction
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";

export default function Home() 
{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* Section Bannière */}
      <section className="home">
        <div className="home-text">
          <h2>
            <span className="highlight">Hi</span> There! <span className="wave">👋</span>
          </h2>
          <h1>I'M <span className="name">GAGER Jonathan</span></h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: ['Développeur Web', 'Créatif', 'Passionné de JS'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="home-img">
          <img src={illustration} alt="developer illustration" />
        </div>
      </section>

      {/* Section Introduction */}
      <section className="introduction">
        <div className="intro-text">
          <h1><span className="highlight">LET ME</span> INTRODUCE <span className="highlight">MYSELF</span></h1>
          <p>
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </p>
          <p>
            I am fluent in classics like <em><strong>Javascript.</strong></em>
          </p>
          <p>
            My field of interest is building new <em><strong>Web Technologies and Products</strong></em>
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products with <em><strong>Node.js</strong></em> and <em><strong>Modern Javascript Libraries and Frameworks</strong></em> like <strong>React.js</strong> and <strong>Next.js</strong>.
          </p>
        </div>
        <div className="intro-avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </section>
    </div>
  );
}

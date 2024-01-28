import { useRef, useEffect } from 'react';
import '../App.css'

function Skills() {
    const revealsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    revealsRef.current.forEach((reveal) => {
      observer.observe(reveal);
    });

    return () => {
      revealsRef.current.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };
    return (
        <div ref={addToRefs} className="skills reveal">
            <h1>Skills</h1>
            <div className="skills-section">
                <ul className="skills-list">
                    <li className="skill-item">
                        <img src="images/python-logo.png" alt="Python Logo" />
                        <div className="skill-tooltip">Python</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/pytorch-logo.png" alt="PyTorch Logo" />
                        <div className="skill-tooltip">PyTorch</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/tensorflow-logo.jpeg" alt="TensorFlow Logo" />
                        <div className="skill-tooltip">TensorFlow</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/html-logo.webp" alt="HTML Logo" />
                        <div className="skill-tooltip">HTML</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/css-logo.png" alt="CSS Logo" />
                        <div className="skill-tooltip">CSS</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/javascript-logo.png" alt="JS Logo" />
                        <div className="skill-tooltip">JavaScript</div>
                    </li>
                </ul>
                <ul className="skills-list">
                    <li className="skill-item">
                        <img src="images/spark-logo.png" alt="Apache Spark Logo" />
                        <div className="skill-tooltip">Apache Spark</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/flask-logo.webp" alt="Flask Logo" />
                        <div className="skill-tooltip">Flask</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/mysql-logo.svg" alt="MySQL Logo" />
                        <div className="skill-tooltip">MySQL</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/github-favicon.ico" alt="Git Logo" />
                        <div className="skill-tooltip">Git</div>
                    </li>
                    <li className="skill-item">
                        <img src="images/hadoop.webp" alt="Apache Hadoop Logo" />
                        <div className="skill-tooltip">Hadoop</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;

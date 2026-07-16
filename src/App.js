import './App.css';

const App = () => {
  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <div className="page">
      <header className="site-header">
        <a className="owner" href="#home">Jonathan Morse</a>
        <nav aria-label="Primary navigation">
          <a href="https://github.com/jonymorse">GitHub</a>
          <a href="mailto:jemorse55@gmail.com">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="work-list" aria-labelledby="selected-work">
          <header className="section-head">
            <h2 id="selected-work">Selected work</h2>
          </header>
          <a className="paper" href="https://jonymorse.com/teleop">
            <img src={asset('/assets/g1-teleop-34s.jpg')} alt="Unitree G1 teleoperation demo at 34 seconds" />
            <div>
              <h3>G1 / XR teleoperation</h3>
              <p>Simulation-first control for a Unitree G1 using Meta Quest 3S.</p>
              <p className="journal">XR robotics · Unity · Python</p>
            </div>
            <span className="paper-link">Project ↗</span>
          </a>
        </section>
      </main>

      <section className="research" aria-labelledby="research-title">
        <header className="section-head">
          <h2 id="research-title">Research</h2>
        </header>

        <a className="paper" href="https://ascelibrary.org/doi/10.1061/9780784486443.112" target="_blank" rel="noreferrer">
          <div className="paper-placeholder" aria-hidden="true">
            <span>VR / Education</span>
          </div>
          <div>
            <h3>Future-Ready Workforce Development: Integrating Computational Thinking into Construction Education Using Virtual Reality</h3>
            <p>Gucci H, <strong>Morse J</strong>, Jafari A, Webb A, Qian J, Jeong S, Zhu Y, Karunatillake S.</p>
            <p className="journal">ASCE International Conference on Computing in Civil Engineering · pp. 1019–1028</p>
          </div>
          <span className="paper-link">DOI ↗</span>
        </a>

        <a className="paper" href="https://doi.org/10.1002/alr.23458" target="_blank" rel="noreferrer">
          <img src={asset('/assets/edge-paper.jpg')} alt="Preview of the edge-computing publication" />
          <div>
            <h3>Real-time augmentation of diagnostic nasal endoscopy video using AI-enabled edge computing</h3>
            <p>Bidwell J, Gyawali D, <strong>Morse J</strong>, Ganeshan V, Nguyen T, McCoul ED.</p>
            <p className="journal">International Forum of Allergy &amp; Rhinology</p>
          </div>
          <span className="paper-link">DOI ↗</span>
        </a>

        <a className="paper" href="https://doi.org/10.1002/alr.23384" target="_blank" rel="noreferrer">
          <img src={asset('/assets/cnn-paper.jpg')} alt="Preview of the convolutional neural network publication" />
          <div>
            <h3>Enhancing nasal endoscopy: Classification, detection, and segmentation of anatomic landmarks using a convolutional neural network</h3>
            <p>Ganeshan V, Bidwell J, Gyawali D, <strong>Morse J</strong>, et al.</p>
            <p className="journal">International Forum of Allergy &amp; Rhinology, 14:1521–1524</p>
          </div>
          <span className="paper-link">DOI ↗</span>
        </a>
      </section>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProjectBox from './ProjectBox';


function App() {

  const skills = [
    { name: 'HTML', icon: 'fa-html5' },
    { name: 'CSS', icon: 'fa-css3-alt' },
    { name: 'Java', icon: 'fa-java' },
    { name: 'MLFlow' },
    { name: 'Streamlit', logo: './img/logo/streamlit.png' },
    { name: 'Tensorflow' },
    { name: 'pandas', icon: 'fa-python' },
    { name: 'SQL', logo: './img/logo/sql.png'},
    { name: 'numpy', icon: 'fa-python' },
    { name: 'Scikit learn', icon: 'fa-python' },
    { name: 'Python', icon: 'fa-python' },
    { name: 'matplotlib', logo: './img/logo/matplotlib.png' },
    { name: 'Tableau' },
    { name: 'Machine Learning' },
    { name: 'Deep Learning' },
    { name: 'NLP' },
    { name: 'CNN' },
    { name: 'Data Analysis' },
    { name: 'Probability' },
    { name: 'Stats',logo:'./img/logo/stats.png' },
    { name: 'GIT', icon: 'fa-github' },
    { name: 'Docker', icon: 'fa-docker' },
    { name: 'AWS', icon: 'fa-aws' },
    { name: 'Flask', logo: './img/logo/flask.png' }
    // Add more skills as needed
  ];
  


  useEffect(() => {
    const handleMouseEnter = () => {
      const arrowIcon = document.querySelector('.scroll-down a .fa-arrow-circle-down');
      const projectsButton = document.querySelector('.scroll-down a .projects-button');

      arrowIcon.style.display = 'none'; // Hide the arrow icon
      projectsButton.style.display = 'inline-block'; // Show the projects button
    };

    const handleMouseLeave = () => {
      const arrowIcon = document.querySelector('.scroll-down a .fa-arrow-circle-down');
      const projectsButton = document.querySelector('.scroll-down a .projects-button');

      projectsButton.style.display = 'none'; // Hide the projects button
      arrowIcon.style.display = 'inline-block'; // Show the arrow icon
    };

    const scrollDownButton = document.querySelector('.scroll-down a');
    scrollDownButton.addEventListener('mouseenter', handleMouseEnter);
    scrollDownButton.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollDownButton.removeEventListener('mouseenter', handleMouseEnter);
      scrollDownButton.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    const scrollOptions = {
      top: projectsSection.offsetTop,
      behavior: 'smooth',
    };
    window.scrollTo(scrollOptions);
  };

  const redirectToResume = () => {
    window.open('https://drive.google.com/file/d/1zdNkeF_rmZrKR9lxc5NV7OUyj3RH4Yhe/view?usp=drivesdk', '_blank');
  };

  return (
    <div className="App">


      <div className="App-main">
        <h2>Sai Praveen Reddy Allam Portfolio</h2>
      </div>
{/* --------------------------------------------------------- INTRO  -------------------------------------------------------------------------- */}      
      <div className="about-me">
        <p>
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
          A passionate developer with a keen interest in web development and design.
        </p>
      </div>      
{/* ---------------------------------------------------------SOCIAL MEDIA ICONS BELOW INTRO-------------------------------------------------------------------------- */}
      <div className="social-media">
        {/* Social media icons */}

        <a href="mailto:praveenallam93@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/praveen-allam69" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/PraveenAllam93" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
        <a href="https://www.kaggle.com/saipraveenreddyallam" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-kaggle"></i>
        </a>
        <a href="https://www.fiverr.com/s/Lrwl3a" target="_blank" rel="noopener noreferrer">
            <i dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256" width="72px" height="72px"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0.02,92.244) scale(5.12,5.12)"><path d="M7.04297,14.41992c-2.508,0 -4.61448,1.76033 -5.14648,4.11133c-1.054,0.058 -1.89063,0.931 -1.89063,2v2.4375c0,1.025 0.76972,1.86928 1.76172,1.98828v4.77148c0,1.106 0.89595,2.00391 2.00195,2.00391h3.00977c0.563,0 1.0735,-0.23437 1.4375,-0.60937c0.364,0.375 0.87255,0.60938 1.43555,0.60938h3.01172c0.746,0 1.38842,-0.41258 1.73242,-1.01758c0.352,0.613 0.9918,1.01758 1.7168,1.01758h0.17383h2.36133h0.17383c0.847,0 1.60272,-0.53303 1.88672,-1.33203l0.29102,-0.80859c1.187,1.384 2.94425,2.26367 4.90625,2.26367h0.81445c1.248,0 2.42434,-0.37883 3.40234,-1.04883c0.367,0.445 0.91511,0.73438 1.53711,0.73438h3.01367c0.553,0 1.05302,-0.22489 1.41602,-0.58789c0.362,0.363 0.86397,0.58789 1.41797,0.58789h3.01172c1.106,0 2.00195,-0.89791 2.00195,-2.00391v-0.02539c0.574,1.425 1.96384,2.43555 3.58984,2.43555c2.137,0 3.875,-1.73895 3.875,-3.87695c0,-2.138 -1.74095,-3.87891 -3.87695,-3.87891c-0.412,0 -0.80183,0.08312 -1.17383,0.20313c0.448,-0.367 0.74023,-0.91797 0.74023,-1.54297v-2.51367c0,-1.093 -0.87675,-1.98295 -1.96875,-2.00195l-1.18164,-0.02148h-0.03516c-0.415,0 -0.81631,0.05978 -1.19531,0.17578c-0.239,-0.101 -0.50234,-0.1543 -0.77734,-0.1543h-2.68945l-1.14648,-0.02148h-0.00195c-0.426,0 -0.83761,0.06269 -1.22461,0.17969c-0.24,-0.102 -0.50325,-0.1582 -0.78125,-0.1582h-3.01367c-0.801,0 -1.48664,0.4733 -1.80664,1.1543c-1.026,-0.685 -2.25803,-1.08789 -3.58203,-1.08789h-0.36719c-0.921,0 -1.79584,0.19692 -2.58984,0.54492c-0.337,-0.26 -0.75389,-0.41992 -1.21289,-0.41992h-0.00586h-3.00977c-0.652,0 -1.24819,0.31431 -1.61719,0.82031c-0.37,-0.505 -0.96323,-0.82031 -1.61523,-0.82031h-3.01172c-0.027,0 -0.05403,0.00877 -0.08203,0.00977c-0.033,-0.002 -0.06466,-0.00977 -0.09766,-0.00977h-1.00781v-2.10547c0,-1.106 -0.89595,-2.00195 -2.00195,-2.00195zM7.04297,16.42188h2.60938v2.52344h-1.90039c-0.537,0 -0.97266,0.43566 -0.97266,0.97266v0.61133h2.87305h3.01172v2.43945v6.75977h-3.01172v-6.75977h-2.87305v6.75977h-3.00977v-6.75977h-1.76172v-2.4375h1.76172v-0.83398c0,-1.809 1.46544,-3.27539 3.27344,-3.27539zM42.48828,20.31445l1.18359,0.02148v2.51562h-1.49609c-0.916,0 -1.6582,0.74316 -1.6582,1.66016v3.05273v1.9707h-3.01172v-6.68555h-1.17578c-0.916,0 -1.6582,0.74316 -1.6582,1.66016v3.05273v1.97266h-3.01172v-9.19727h3.01172v1.41797c0.271,-0.774 0.96166,-1.43945 1.97266,-1.43945l1.18164,0.02148h2.68945v1.41797c0.272,-0.774 0.96166,-1.44141 1.97266,-1.44141zM25.90625,20.40625h0.36719c2.467,0 4.46675,2.0017 4.46875,4.4707v0.95117h-0.00195h-2.98633h-3.39844c0,0.058 0.00277,0.11392 0.00977,0.16992v0.00586h0.00195c0.087,0.776 0.749,1.46289 2,1.46289c1.108,0 1.42773,-0.91211 1.42773,-0.91211l2.65625,0.77539c-0.594,1.477 -2.03952,2.52148 -3.72852,2.52148h-0.81641c-2.467,0 -4.4668,-1.99975 -4.4668,-4.46875v-0.50586c0,-2.469 1.9998,-4.4707 4.4668,-4.4707zM12.84375,20.53125h3.01172l1.61523,5.31641l1.61719,-5.31641h3.00977l-3.27148,9.19727h-0.17578h-2.36133h-0.17383zM25.91016,22.56836c-0.836,0 -1.51378,0.65933 -1.55078,1.48633h3.39063c-0.036,-0.827 -0.71673,-1.48633 -1.55273,-1.48633zM46.10938,26.19336c1.034,0 1.87305,0.84 1.87305,1.875c-0.001,1.036 -0.83905,1.87305 -1.87305,1.87305c-1.034,0 -1.87109,-0.83805 -1.87109,-1.87305c0,-1.035 0.83709,-1.875 1.87109,-1.875z"></path></g></g></svg>' }} className="fas fa-custom-logo"></i>
          </a>
      </div>
{/* --------------------------------------------------------- SCROLL DOWN BUTTON -------------------------------------------------------------------------- */}
      <div className="scroll-down">
        {/* Down arrow */}
        <a href="#projects" className="projects-link" onClick={scrollToProjects}>
          <i className="fas fa-arrow-circle-down"></i>
          <button className="projects-button" style={{ display: 'none' }}>Projects</button>
        </a>
      </div>
{/* --------------------------------------------------------- CALLING SPACE -------------------------------------------------------------------------- */}
      <div id="projects" className='space'>
              <p></p>
            </div>
{/* --------------------------------------------------------- PROJECT GALLERY HEADER BAR -------------------------------------------------------------------------- */}
          <div className="header-bar">
            <div className="project-gallery-heading">
              <h2>Project Gallery</h2>
            </div>
            <div className="header-buttons">
              {/* <div className="social-media-bar"> */}
                {/* Social media icons */}
                {/* <a href="mailto:praveenallam93@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/praveen-allam69" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/PraveenAllam93" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.kaggle.com/saipraveenreddyallam" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-kaggle"></i>
                </a>
                <a href="https://www.fiverr.com/s/Lrwl3a" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Montserrat , sans-serif', fontWeight: 'bolder' }}>fiverr.</a> */}

             { /*  <a href="https://www.fiverr.com/s/Lrwl3a" target="_blank" rel="noopener noreferrer">
                    <i dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="45px" height="45px"><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(-0.06144,56.48384) scale(5.12,5.12)"><path d="M41.86,21.321v-1.539h-2.919l-1.283,-0.022c-1.097,0 -1.847,0.722 -2.141,1.561v-1.539h-3.269v9.979h3.269v-2.14v-3.312c0,-0.995 0.806,-1.801 1.801,-1.801h1.274v7.253h3.269v-2.14v-3.312c0,-0.995 0.806,-1.801 1.801,-1.801h1.623v-2.726l-1.283,-0.022c-1.097,-0.001 -1.846,0.722 -2.142,1.561zM18.597,19.991l-1.754,5.767l-1.754,-5.767h-3.269l3.551,9.979h0.191h2.562h0.191l3.551,-9.979zM5.239,19.991v-0.665c0,-0.583 0.472,-1.055 1.055,-1.055h2.064v-2.737h-2.835c-1.962,0 -3.553,1.591 -3.553,3.553v0.905h-1.911v2.645h1.911v7.334h3.27v-7.334h3.118v7.334h3.269v-7.334v-2.645h-3.269h-3.119zM26.398,19.857h-0.398c-2.678,0 -4.849,2.171 -4.849,4.849v0.548c0,2.678 2.171,4.849 4.849,4.849h0.885c1.834,0 3.403,-1.132 4.048,-2.735l-2.884,-0.842c0,0 -0.345,0.988 -1.548,0.988c-1.358,0 -2.077,-0.744 -2.172,-1.586h-0.001v-0.005c-0.007,-0.061 -0.01,-0.123 -0.01,-0.185h3.688h3.242v-1.032c0,-2.678 -2.171,-4.849 -4.85,-4.849zM24.322,23.814c0.039,-0.897 0.777,-1.613 1.684,-1.613h0.312c0.907,0 1.645,0.716 1.684,1.613zM47.932,26.136c-1.123,0 -2.033,0.91 -2.033,2.033c0,1.123 0.91,2.033 2.033,2.033c1.123,0 2.033,-0.91 2.033,-2.033c-0.001,-1.123 -0.91,-2.033 -2.033,-2.033z"></path></g></g></svg>' }} className="fas fa-custom-logo"></i>
                    </a> */ }
              {/* </div> */}

              <button className="resume-button" onClick={redirectToResume}>Resume</button>
            </div>
          </div>
{/* ---------------------------------------------------------PROJECT GALLERY CONTENT -------------------------------------------------------------------------- */}

          <div className="project-gallery">
            {/* --------------------------------------------------------- PROJECT BOX 1 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.
              Handled missing values using KNN Imputer.
              Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.
              Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.
              Developed and containerised a Docker image for efficient deployment.
              Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />
            {/* --------------------------------------------------------- PROJECT BOX 2 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.Handled missing values using KNN Imputer.Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.Developed and containerised a Docker image for efficient deployment.Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />
            {/* --------------------------------------------------------- PROJECT BOX 3 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.
              Handled missing values using KNN Imputer.
              Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.
              Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.
              Developed and containerised a Docker image for efficient deployment.
              Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />
            {/* --------------------------------------------------------- PROJECT BOX 4 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.
              Handled missing values using KNN Imputer.
              Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.
              Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.
              Developed and containerised a Docker image for efficient deployment.
              Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />
            {/* --------------------------------------------------------- PROJECT BOX 5 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.
              Handled missing values using KNN Imputer.
              Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.
              Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.
              Developed and containerised a Docker image for efficient deployment.
              Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />
           {/* --------------------------------------------------------- PROJECT BOX 6 -------------------------------------------------------------------------- */}
            <ProjectBox
              title="Employee churn prediction - Classification Model"
              imgSrc="./img/project.png"
              description={`Performed feature engineering to develop some more features, created a target class for identifying the churn of an employee.
              Handled missing values using KNN Imputer.
              Build a Machine Learning pipeline using multiple classification algorithms like Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM.
              Developed a final model with XGBoost with roc_auc_score of 94% and f1 score of 95%.
              Developed and containerised a Docker image for efficient deployment.
              Successfully deployed the Dockerized application on AWS EC2 instance for scalable and reliable hosting.`}
            />

            {/* ADD MORE PROOJECTS */}

          </div>
{/* ---------------------------------------------------------SKILLS SECTION -------------------------------------------------------------------------- */}
          <div className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills">
              {/* Map through the skills array */}
              {skills.map((skill, index) => (
                <div className="skill-box" key={index}>
                  {/* Individual skill box */}
                  <div className="skill">
                      {/* Conditionally render the icon or logo */}
                      {skill.icon && (
                        <i className={`fab ${skill.icon}`} />
                      )}
                      {skill.logo && (
                        <img src={skill.logo} alt={``} />
                      )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* ---------------------------------------------------------DETAILS BOX -------------------------------------------------------------------------- */}
        {/* <div class="bottom-details-box">
        <div class="bottom-details">
        <div class="detail">Location: <a href="https://maps.app.goo.gl/sJrpCQRyJfUzmDKMA" target="_blank" rel="noopener noreferrer">Guntur, Andhra Pradesh, India.</a></div>
          <div class="detail">Email: <a href="mailto:praveenallam93@gmail.com" target="_blank" rel="noopener noreferrer">praveenallam93@gmail.com</a></div>
          <div class="detail">Resume: <a href="https://drive.google.com/file/d/1zdNkeF_rmZrKR9lxc5NV7OUyj3RH4Yhe/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" >Download</a></div>
        </div>
      </div> */}
{/* ---------------------------------------------------------MADE BY -------------------------------------------------------------------------- */}
                <footer class="footer">
            <p>&copy; Made by <a href="https://nandirajumanisankar.netlify.app" class="credit-link" target="_blank" rel="noreferrer" >Mani Sankar Nandiraju</a></p>
          </footer>
      
      


    </div>
  );
}

export default App;

import React,{Component} from "react";
import './main1.css'; 
class Main1 extends Component{
render(){
    return(
        <div className="sd">
        <div className="md">
          
         <ul className="md1">
            <li><a href="#profilesummary">ProfileSummary</a></li>
            <li><a href="#education"> Education</a></li>
            <li><a href="#skills"> Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#certification">Certifications</a></li>
            </ul>
            </div>

              
              <div className="sd1" id="profile-summary">
                <h2>ProfileSummary</h2>
                <p>As a recent IT graduate, I’m actively learning and developing my skills as a Front-end Developer. 
                    I’m currently gaining experience with React.js and TypeScript and building my knowledge in HTML5, CSS3, and JavaScript.
                     I’m also familiarizing myself with state management tools like Redux and exploring UI frameworks such as Material UI and Bootstrap.
                      I’m focused on improving my problem-solving abilities, attention to detail, and communication skills. Eager to apply what 
                      I’ve learned and continue growing in a collaborative and dynamic environment.</p>
              </div>



              <div className="sd2" id="education">
                <h2>Education</h2>
                <ul>
                    <li> Princeton  Institute of engineering and Technology </li>
                    <li>Bachelor of Technology ( Computer Science Engineering )</li>
                </ul>
              </div>
              <div className="sd3" id="sillks ">
                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <ul>
                   <li>Programing Languages:Bascis of python</li>
                   <li>Front-End Technologies:HTML,CSS,Javascript</li>
                   <li>Frameworks:Bootstrap</li>
                   <li>Developer Tools:VS Code,GitHub,AWS.</li>
                  </ul>
                  <h3>Soft Skills</h3>
                  <ul>
                    <li>Problem Solving</li>
                    <li>Leadership Management</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Consistency</li>
                  </ul>
              </div>
              


             <div className="sd4" id="projects">
              <h2>Projects</h2>
              <p><strong>Title:</strong> Automatic Assessment of Commutation skills in Non-Conventional Interview Settings in 
              comparative study.</p>
              <ul>
                <strong>Description</strong>
                <li>Developed a system to automatically assess communication skills in non-conventional 
                interview settings, improving candidate evaluation accuracy.</li>
                <li>Conducted a comparative study to analyze the effectiveness of different assessment methods.</li>
              </ul>
              </div>



              <div className="sd5" id="certification">
                <h2>Certifications</h2>
                <ul>
                  <li> <strong>Codesoft Internship in Data Science:</strong> Implemented a machine learning model to detect credit 
                 card fraud using advanced classification and data analysis. Safeguarding your digital.
                transformations.</li>
                  <li><strong>Bit Labs Internship HTML and CSS:</strong> Developed a responsive website using HTML and CSS 
                  focusing on user-friendly design and cross-browser compatibility.</li>
                </ul>
              </div>






            </div>
        
           

          
         

    )
}
}
export default Main1
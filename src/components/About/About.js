import PageHeader from './../PageHeader/PageHeader.js'
import ima from './../../img/ima.webp'
const About= ()=>
{
    return(
        <div className="AboutMe" id="about">
            <PageHeader title={'AboutMe'} />
            <div className="Contain">
                <div className="Text">
                    <h2>Hello! I'm Varshini</h2>
                 <p2>
                  I m from Trichy. 
                  The one thing I can’t leave in my life without is Practice.
                  My family is a big part of who I am. 
                  One of my favorite family traditions is Indian culture.
                  I have been awarded and honored by my school/college days in sports.
                  I did my schooling in SOWDAMBIKAA MATRIC HIGHER SECONDARY SCHOOL,Thuraiyur college in 
                  HINDUSTHAN COLLEGE OF ENGINEERING AND TECHNOLOGY,Coimbatore.
                  I secured 97% in SSLC and 84% in HSC and i scored 79% in my engineering.
                  I am a self learner and i like to learn many books and articles.
                  My family consist of five member and i have a two younger brothers.
                  my mother is a radiologist and father is running workshop.My parents are my motivator and my roll model.
                  my aim is to become a developer and my hobbies are playing volleyball in that i have awarded many medals and certificate in college and school days.
                  

                </p2>
                </div>
                <div className="Photo">
                    <img className="ima" src={ima} alt="ima"></img>
                </div>
            </div>
        </div>
    );
    
}

export default About;

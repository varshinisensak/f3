import PageHeader from "../PageHeader/PageHeader"
import im from './../../img/im.jpg'

const ListTitleStyle={fontWeight:900,color:'#9B1FE8',marginBottom:'40px',marginTop:'20px'}
const backendSkills =
<ul>
    <li style={ ListTitleStyle }>BACKEND</li>
    <li>JAVA-SQL</li>
</ul>
const frontendSkills =
<ul>
    <li style={ ListTitleStyle }>FRONTEND</li>
    <li>R-HTML-CSS-REDUX</li>
</ul>
const knownlanguage =
<ul>
    <li style={ ListTitleStyle }>KNOWNLANGUAGE</li>
    <li>c-c++-python</li>
</ul>
const otherSkills =
<ul>
    <li style={ ListTitleStyle }>OTHER</li>
    <li>git-Decor-json</li>
</ul>
const project =
<ul>
    <li style={ ListTitleStyle }>PROJECT</li>
    <li>Automation-cloud-IOT</li>
</ul>
const Hobbies =
<ul>
    <li style={ ListTitleStyle }>HOBBIES</li>
    <li>Playing-Singing-travelling</li>
</ul>
const skill=[backendSkills,frontendSkills,knownlanguage,otherSkills,project,Hobbies]

const Skills= ()=>
{
    return(
        <div className="App" id="skills">
           
           <PageHeader title={'what about the skills'} />
           <p>
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.
               I am a life long learner and i enjoy learning new stuff!
               Below are some programming languages,toolkits,frameworks and libraries that i worked withy and like,
               some of them i control better than other.

           </p>
           <div className="skillset">
           <img className="im" src={im} alt="im"></img>
               {skill.map(skills=>{
                   return(
                       <div className="list">
                           {skills}
                           </div>
                   )
               })}
           </div>
        </div>
    );
    
}

export default Skills;
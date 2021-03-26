import { FaFacebookSquare, FaInstagramSquare,FaLinkedinIn,FaGithub } from "react-icons/fa";

const handleURL = (url)=>{
    return () => window.open(url, "_blank")
}
const Contact= ()=>
{
    return(
        <div className="Contact" id="contact">
           
            <div className="ContactIcons">
           <FaFacebookSquare color='white' size='30px' style={{padding:'1%'}}
           onClick={handleURL('https://www.facebook.com/')} />
                 <FaInstagramSquare color='white' size='30px' style={{padding:'1%'}}
           onClick={handleURL('https://www.instagram.com/')} />
                 <FaLinkedinIn color='white' size='30px' style={{padding:'1%'}}
           onClick={handleURL('https://www.linkedin.com/')} />
                 <FaGithub color='white' size='30px' style={{padding:'1%'}}
           onClick={handleURL('https://www.github.com/')} />
        </div>
        </div>
    );
    
}

export default Contact;
import imge from './../../img/imge.jpg'

const Home= ()=>
{
    return(
        <div className="Home" id="Home">
            
          <div className="Container">
              <h1 className="Hello">Hello World.</h1>
              <h1>Welcome on my website</h1>
          </div>
    
          <img className="imge" src={imge} alt="imge"></img>
        </div>
    );
    
}
export default Home;
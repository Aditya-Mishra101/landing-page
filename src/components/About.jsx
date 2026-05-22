import img from '../assets/images.jpeg';
function About(){
    return (
        <section className="about-section">
            <div className="about">
                <div>
                    <h3> Hello, I'm </h3>
                    <h2>
                        <span>Aditya Mishra</span>
                    </h2>
                    <h2><p>Backend Developer | Engineer | Full Stack Developer</p></h2>
                    <p>I am a full stack developer who is very inquisitive and curious about workflow and logic of backend architecture. Apart from the coding I also tend to interest in sports, geopolitics and literature.</p>
                    <div className="about-buttons">
                        <button onClick={() => {}}> 
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
            <div className="img-about">
                <img src={img} alt="profile"/>
            </div>
        </section>
        
    )

}
export default About ;
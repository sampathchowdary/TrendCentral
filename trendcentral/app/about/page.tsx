import Image from "../components/Image";

const About = () => {
    return (
        <section>
        <div>
          <h1>About Me</h1>
          <p>My name is Sampath.</p>
          <Image 
            src = 'https://media.licdn.com/dms/image/D5603AQEFCrXSnD7rzw/profile-displayphoto-shrink_200_200/0/1700229637852?e=2147483647&v=beta&t=Y8u-m_smEdQJTJKnTdtKlmkcN3x4gcIWB4dE9BCWgBc'
            alt = 'Profile pic'
            style = {{ height : '300px', width: '250px'}}
          />
        </div>
      </section>
    )
};

export default About;
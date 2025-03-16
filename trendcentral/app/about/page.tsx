import Image from "../components/Image"; 
import ProfileInfo from "../components/ProfileInfo";
import SocialLinks from "../components/SocialLinks";

const About: React.FC = () => {
  const user = {
    name: "Sampath",
    email: "sampath@example.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    avatar: 'https://media.licdn.com/dms/image/D5603AQEFCrXSnD7rzw/profile-displayphoto-shrink_200_200/0/1700229637852?e=2147483647&v=beta&t=Y8u-m_smEdQJTJKnTdtKlmkcN3x4gcIWB4dE9BCWgBc',
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sampath" },
    { name: "GitHub", url: "https://github.com/sampath" },
    { name: "Portfolio", url: "https://www.sampath.dev" },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600">My name is {user.name}.</p>
        <div className="mt-6">
          <Image
            src={user.avatar}
            alt="Profile pic"
            style={{ height: "300px", width: "250px" }}
          />
        </div>
      </div>

      <ProfileInfo
        name={user.name}
        email={user.email}
        phone={user.phone}
        location={user.location}
      />

      <SocialLinks links={socialLinks} />
    </section>
  );
};

export default About;


interface ProfileInfoProps {
    name: string;
    email: string;
    phone: string;
    location: string;
  }
  
  const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, email, phone, location }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{location}</p>
      </div>
    );
  };
  
  export default ProfileInfo;
  
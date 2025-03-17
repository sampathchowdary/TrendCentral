
interface ProfileInfoProps {
    name: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
  }
  
  const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, email, phone, location, avatar }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="text-center">
          <img
            src={avatar}
            alt="Profile pic"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{phone}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    );
  };
  
  export default ProfileInfo;
  
'use client';  // Add this directive for client-side rendering

import { useState } from 'react';
import ProfileInfo from "../components/ProfileInfo";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const user = {
    name: 'Sampath Gundapuneni',
    email: 'sampathgundapuneni1512@example.com',
    phone: '+1 281 935 6054',
    location: 'United States',
    avatar:
      'https://media.licdn.com/dms/image/D5603AQEFCrXSnD7rzw/profile-displayphoto-shrink_200_200/0/1700229637852?e=2147483647&v=beta&t=Y8u-m_smEdQJTJKnTdtKlmkcN3x4gcIWB4dE9BCWgBc',
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 space-y-8 md:space-y-0">
        {/* Left Side: Profile Info */}
        <div className="md:w-1/3">
          <ProfileInfo
            name={user.name}
            email={user.email}
            phone={user.phone}
            location={user.location}
            avatar={user.avatar}
          />
        </div>

        {/* Right Side: Tabs and Content */}
        <div className="md:w-2/3">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
      </section>
    </div>
  );
};

export default About;

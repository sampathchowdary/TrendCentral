// components/TabContent.tsx

interface TabContentProps {
    activeTab: string;
  }
  
  const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
    const getContent = () => {
      switch (activeTab) {
        case 'About Me':
          return <p>This is the About Me section.</p>;
        case 'GitHub Repos':
          return <p>Here are my GitHub repositories.</p>;
        case 'Resume':
          return <p>Download my resume here.</p>;
        case 'Other Social Links':
          return <p>Other social links go here.</p>;
        default:
          return <p>Please select a tab.</p>;
      }
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">{getContent()}</div>
    );
  };
  
  export default TabContent;
  
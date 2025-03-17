// components/Tabs.tsx

interface TabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  
  const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex space-x-4 mb-6">
        {['About Me', 'GitHub Repos', 'Resume', 'Other Social Links'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium rounded-md focus:outline-none ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;
  
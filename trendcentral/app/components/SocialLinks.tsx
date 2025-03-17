
interface Link {
    name: string;
    url: string;
  }
  
  interface SocialLinksProps {
    links: Link[];
  }
  
  const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Links</h3>
        <ul className="space-y-3 mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SocialLinks;
  
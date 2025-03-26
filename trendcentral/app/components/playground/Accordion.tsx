import React, { useState } from 'react';

// Define types for AccordionItem props
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

// AccordionItem component
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

// Define types for the Accordion component state
interface AccordionState {
  openIndex: number | null;
}

// Accordion component
const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<AccordionState['openIndex']>(null);

  const toggleItem = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same item is clicked again
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="accordion">
      <AccordionItem
        title="Accordion Item 1"
        content="This is the content for item 1."
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      />
      <AccordionItem
        title="Accordion Item 2"
        content="This is the content for item 2."
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      />
      <AccordionItem
        title="Accordion Item 3"
        content="This is the content for item 3."
        isOpen={openIndex === 2}
        onToggle={() => toggleItem(2)}
      />
    </div>
  );
};

export default Accordion;

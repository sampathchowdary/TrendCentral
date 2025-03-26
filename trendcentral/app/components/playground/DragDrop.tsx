import React, { useState, DragEvent } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
    onDragStart: (index: number) => void;
    onDrop: (index: number) => void;
  
}

const AccordionItem:React.FC<AccordionItemProps> = ({ title, content, index, isOpen, onToggle, onDragStart, onDrop}) => {
    return (
        <div 
        draggable
        onDragStart={() => onDragStart(index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => onDrop(index)}
        >
            <div className="accordion-header" onClick={onToggle}>
                <h3>{title}</h3>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    )
}

interface accordionState {
    openIndex: number | null;
    draggedIndex: number | null;
    items: { title: string; content: string }[];  
}

const DragDrop:React.FC =() => {
    const [state, setState] = useState<accordionState> ({
        openIndex: null,
        draggedIndex: null,
        items: [
            { title: 'Accordion Item 1', content: 'This is the content for item 1.' },
            { title: 'Accordion Item 2', content: 'This is the content for item 2.' },
            { title: 'Accordion Item 3', content: 'This is the content for item 3.' },
        ]
    })

    const toggleItem = (index : number):void => {
        if(state.openIndex === index){
            setState({ ...state, openIndex: null });
        } else {
            setState({ ...state, openIndex: index });
        }
    }

    const onDragStart = (index : number):void => {
        setState((prevState) => ({
            ...prevState,
            draggedIndex: index,
        }));
    }

    const onDrop = (index: number): void => {
        const { draggedIndex, items } = state;
        if (draggedIndex === null || draggedIndex === index) return;
        const newItems = [...items];
        const [movedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(index, 0, movedItem);
    
        setState({
            ...state,
            items: newItems,
            draggedIndex: null,
          });
    }

    return(
        <div className='accordion drag-drop'>
            {state.items.map((item, index) => (
                <AccordionItem
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                isOpen={state.openIndex === index}
                onToggle={() => toggleItem(index)}
                onDragStart={onDragStart}
                onDrop={onDrop}
                />
            ))}

        </div>
    )
}

export default DragDrop;
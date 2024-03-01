import React from 'react';
import WorkItem from './WorkItem.js';
import './WorkSelection.css'; 



function WorkSelection({ onWorkSelect, works, selectedWorkId }) {

  return (
    <div className="work-selection">
      <div className="work-selection-header">
        <h2>EXPERIENCE/WORKS</h2>
        <hr />
      </div>
      <div className="work-items-container">
        {works.map(work => (
          <WorkItem
            key={work.id}
            name={work.name}
            subtext={work.subtext}
            description={work.description}
            isSelected={work.id === selectedWorkId}
            onClick={() => onWorkSelect(work)}
            />
        ))}
      </div>
    </div>
  );
}

export default WorkSelection;

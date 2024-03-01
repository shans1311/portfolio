import React from 'react';
import './WorkItem.css'; 

function WorkItem({ name, subtext, description, onClick, isSelected }) {
  const itemStyle = isSelected ? { color: '#AAB6A1' } : {};

  return (
    <div className="work-item" onClick={onClick} >
      <h3 style={itemStyle}>{name}</h3>
      <h4>{subtext}</h4>
      <p>{description}</p>
    </div>
  );
}

export default WorkItem;

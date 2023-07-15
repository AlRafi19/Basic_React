import React, { useState } from 'react';

const ContentSection = () => {
    const [DisplayText,setDisplayText]=useState(null)
    const [textareaValue,setTextareaValue]=useState(null)
    const handleButtonClick =()=>{
        setDisplayText(textareaValue)
        setTextareaValue('');
    }
    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
      }; 
    return (
        <div>
            <textarea  cols="40" rows="10" placeholder='Hi, There!...' value={textareaValue} onChange={handleTextareaChange}></textarea><br/>
            <button onClick={handleButtonClick}>Submit</button><br/><br/><br/>
            <div className="display-text"><strong>Message: </strong>{DisplayText}</div>
        </div>
    );
};

export default ContentSection;
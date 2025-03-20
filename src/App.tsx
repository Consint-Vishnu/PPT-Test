import React from 'react';
import './App.css';

const App: React.FC = () => {
  const pptViewUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/Doc.aspx?sourcedoc={f7455533-2244-4e03-b559-b872de3d4387}&action=embedview&wdAr=1.33333333333";
  const pptEditUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/WopiFrame.aspx?sourcedoc={f7455533-2244-4e03-b559-b872de3d4387}&action=edit";

  return (
    <div className="ppt-container">
      {/* Display the PowerPoint in View Mode */}
      <iframe 
        src={pptViewUrl}
        width="100%" 
        height="100%" 
        frameBorder="0"
      ></iframe>

      {/* Floating Edit Button */}
      <button className="edit-btn" onClick={() => window.open(pptEditUrl, "_blank")}>
        Edit This PPT
      </button>
    </div>
  );
}

export default App;

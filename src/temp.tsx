const pptViewUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/Doc.aspx?sourcedoc={77f9060a-8428-4bfc-81ce-d64f73691d75}&action=embedview&wdAr=1.3333333333333333";
const pptEditUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/WopiFrame.aspx?sourcedoc={77f9060a-8428-4bfc-81ce-d64f73691d75}&action=edit";

import React from 'react';
import './App.css';

const App: React.FC = () => {
  const pptViewUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/Doc.aspx?sourcedoc={77f9060a-8428-4bfc-81ce-d64f73691d75}&action=embedview&wdAr=1.3333333333333333";
  const pptEditUrl = "https://consintsolutionspvtltd.sharepoint.com/sites/Consint-Projects/_layouts/15/WopiFrame.aspx?sourcedoc={77f9060a-8428-4bfc-81ce-d64f73691d75}&action=edit";

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

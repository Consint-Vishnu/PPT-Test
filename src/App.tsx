import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [pptEditUrl, setPptEditUrl] = useState<string | null>(null);
  const [pptViewUrl, setPptViewUrl] = useState<string | null>(null);

  const patientId = "BLKH.1227663";
  const apiUrl = `https://api.dev.ciphrv3.consint.ai/api/v1/generate-upload-ppt/?patientId=${patientId}`;

  useEffect(() => {
    const fetchPptUrl = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkb2N0b3IiLCJyb2xlIjoiZG9jdG9yIiwiZmlyc3RfbmFtZSI6IkRyLiBBYmhpZGVlcCIsImxhc3RfbmFtZSI6IkNoYXVkaGFyeSIsInVzZXJJZCI6MiwiZXhwIjoxNzQyNTY2NTIxfQ.GVUOZ9qnoQ57bZR0S5VqMfHm7qpzv7GtMs54KXkn-sE",
          },
        });

        if (!response.ok) throw new Error(`Failed to fetch PPT URL. Status: ${response.status}`);

        const data = await response.json();
        if (data.web_url) {
          setPptEditUrl(data.web_url);
        }

      } catch (error) {
        console.error("Error fetching PPT URL:", error);
      }
    };

    fetchPptUrl();
  }, []); // Run only once on mount

  // Convert Edit URL to View URL when Edit URL updates
  useEffect(() => {
    if (pptEditUrl) {
      const updatedUrl = pptEditUrl.replace("action=edit", "action=embedview").replace("Doc.aspx", "WopiFrame.aspx");
      setPptViewUrl(updatedUrl);
    }
  }, [pptEditUrl]);

  return (
    <div className="ppt-container">
      {/* Display the PowerPoint in View Mode */}
      {pptViewUrl ? (
        <iframe
          src={pptViewUrl}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      ) : (
        <p>Loading PowerPoint...</p>
      )}

      {/* Floating Edit Button */}
      {pptEditUrl && (
        <button className="edit-btn" onClick={() => window.open(pptEditUrl, "_blank")}>
          Edit This PPT
        </button>
      )}
    </div>
  );
};

export default App;

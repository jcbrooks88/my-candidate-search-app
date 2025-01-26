// SavedCandidates.tsx
import React, { useEffect, useState } from "react";

interface Candidate {
  id: number;
  name: string;
  avatar_url: string;
  html_url: string;
}

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage when the component mounts
    const savedData = localStorage.getItem("savedCandidates");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSavedCandidates(parsedData);
      } catch (error) {
        console.error("Failed to parse saved candidates from localStorage:", error);
      }
    }
  }, []);

  const handleRemove = (id: number) => {
    // Remove a candidate by their ID
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.id !== id
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
    alert("Candidate removed from saved list.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No saved candidates. Try adding some candidates from the search page!</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {savedCandidates.map((candidate) => (
            <li
              key={candidate.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={candidate.avatar_url}
                alt={`${candidate.name}'s avatar`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <a
                  href={candidate.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#007bff",
                    textDecoration: "none",
                  }}
                >
                  {candidate.name}
                </a>
              </div>
              <button
                onClick={() => handleRemove(candidate.id)}
                style={{
                  backgroundColor: "#d9534f",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor =
                    "#c9302c")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor =
                    "#d9534f")
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;


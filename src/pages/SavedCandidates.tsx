// SavedCandidates.tsx
import { FC } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import styles from '../styles/style';

type SavedCandidatesProps = {
  candidate: Candidate;
  fetchCandidate: () => void;
};

const SavedCandidates: FC<SavedCandidatesProps> = ({ candidate, fetchCandidate }) => {
  const handleSaveCandidate = () => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
    fetchCandidate();
  };

  return (
    <button onClick={handleSaveCandidate} style={styles.button}>
      + Save Candidate
    </button>
  );
};

export default SavedCandidates;


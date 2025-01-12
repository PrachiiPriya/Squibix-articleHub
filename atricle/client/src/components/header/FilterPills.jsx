import React from 'react';
import styles from './Header.module.css';

const FilterPills = ({ filters, selectedFilter, onFilterSelect }) => {
  if (!filters || filters.length === 0) return null; // Handling empty or undefined filters

  return (
    <div className={styles.filterPillsContainer}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterPill} ${selectedFilter === filter ? styles.activePill : ''}`}
          onClick={() => onFilterSelect(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;      
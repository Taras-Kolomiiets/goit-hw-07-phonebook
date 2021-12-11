import {useState, useEffect } from 'react';
import s from './Filter.module.css';

export default function Filter({ applyFilter }: any) {
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    applyFilter(filterValue);
  }, [filterValue, applyFilter]);
  
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };
    return (
      <div>
        <label>
          Find contacts by name:
          <input
            type="text"
            name="filter"
            value={filterValue}
            onChange={handleChangeFilter}
            className={s.fieldInput}
          />
        </label>
      </div>
    );
  }


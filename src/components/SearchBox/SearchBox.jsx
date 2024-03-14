import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNumbers } from '../../redux/filtersSlice';


export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const handleFilterChange = e =>
    dispatch(filterNumbers(e.target.value.trim()));

  const value = useSelector(state => state.filters);
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
}
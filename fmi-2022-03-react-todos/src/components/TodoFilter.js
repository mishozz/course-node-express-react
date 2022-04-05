<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
import { ACTIVE, ALL_STATUSES, CANCELED, COMPLETED } from '../model/todo-model';

const TodoFilter = ({filter,onFilterChange}) => {
  function filterChange(event) {
    onFilterChange(Number.parseInt(event.target.value))
  }
  return (
    // <div>TodoFilter: YOUR CODE HERE! (ALL_STATUSES = 0, AALL_STATUSES = 1, COMPLETED = 2, CANCELED = 3) </div>
    <select value={filter} onChange={filterChange}>
=======

import React from 'react';
import PropTypes from 'prop-types';
import { ACTIVE, ALL_STATUSES, CANCELED, COMPLETED } from '../model/todo-model';
import './TodoFilter.css';

const TodoFilter = ({ filter, onFilterChange }) => {
    function handleFilterChange(event) {
        onFilterChange(Number.parseInt(event.target.value));
    }
    return (
        <select className="TodoFilter" value={filter} onChange={handleFilterChange}>
>>>>>>> 87908187112f5b25aac414cea7c5564cbb6bfdd9
            <option value={ALL_STATUSES}>All</option>
            <option value={ACTIVE}>Active</option>
            <option value={COMPLETED}>Completed</option>
            <option value={CANCELED}>Canceled</option>
<<<<<<< HEAD
    </select>
  )
}

TodoFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.number.isRequired,
}
=======
        </select>
    );
}

TodoFilter.propTypes = {
    filter: PropTypes.number.isRequired,
    onFilterChange: PropTypes.func.isRequired
};
>>>>>>> 87908187112f5b25aac414cea7c5564cbb6bfdd9

export default TodoFilter;
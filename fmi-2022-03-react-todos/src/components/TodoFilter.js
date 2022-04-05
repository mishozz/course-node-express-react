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
            <option value={ALL_STATUSES}>All</option>
            <option value={ACTIVE}>Active</option>
            <option value={COMPLETED}>Completed</option>
            <option value={CANCELED}>Canceled</option>
    </select>
  )
}

TodoFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.number.isRequired,
}

export default TodoFilter
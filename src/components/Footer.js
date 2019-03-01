import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div className="filter-container">
    <FilterLink
      filter={VisibilityFilters.SHOW_ALL}
    >
      All
    </FilterLink>
    <FilterLink
      filter={VisibilityFilters.SHOW_ACTIVE}
    >
      Active
    </FilterLink>
    <FilterLink
      filter={VisibilityFilters.SHOW_COMPLETED}
    >
      Completed
    </FilterLink>
  </div>
);

export default Footer;

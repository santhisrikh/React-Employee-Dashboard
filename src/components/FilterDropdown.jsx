import React from "react";
import "../styles/FilterDropdown.css";
const FilterDropdown = ({ departments, selectedDepartment, handleFilter }) => {
	return (
		<div className="filter-dropdown">
			<label htmlFor="filter">Filter by Department: </label>
			<select
				id="filter"
				value={selectedDepartment}
				onChange={(e) => handleFilter(e.target.value)}
			>
				<option value="">All</option>
				{departments.map((dept) => (
					<option key={dept} value={dept}>
						{dept}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterDropdown;

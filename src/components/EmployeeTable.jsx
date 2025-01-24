import React from "react";
import "../styles/EmployeeTable.css";
const EmployeeTable = ({ employees, deleteEmployee }) => {
	return (
		<table className="employee-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Designation</th>
					<th>Department</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr key={employee.id}>
						<td>{employee.name}</td>
						<td>{employee.designation}</td>
						<td>{employee.department}</td>
						<td>
							<button onClick={() => deleteEmployee(employee.id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EmployeeTable;

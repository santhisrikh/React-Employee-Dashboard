import React, { useState } from "react";
import "../styles/AddEmployeeForm.css";
const AddEmployeeForm = ({ addEmployee }) => {
	const [name, setName] = useState("");
	const [designation, setDesignation] = useState("");
	const [department, setDepartment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && designation && department) {
			addEmployee({ name, designation, department });
			setName("");
			setDesignation("");
			setDepartment("");
		} else {
			alert("Please fill out all fields.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="add-employee-form">
			<h2>Add New Employee</h2>
			<div>
				<label>Name: </label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label>Designation: </label>
				<input
					type="text"
					value={designation}
					onChange={(e) => setDesignation(e.target.value)}
				/>
			</div>
			<div>
				<label>Department: </label>
				<select
					value={department}
					onChange={(e) => setDepartment(e.target.value)}
				>
					<option value="">Select Department</option>
					<option value="HR">HR</option>
					<option value="IT">IT</option>
					<option value="Marketing">Marketing</option>
				</select>
			</div>
			<button type="submit">Add Employee</button>
		</form>
	);
};

export default AddEmployeeForm;

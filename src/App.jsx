import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeForm from "./components/AddEmployeeForm";
import FilterDropdown from "./components/FilterDropdown.jsx";
import "./App.css";
const App = () => {
	const [employees, setEmployees] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [showAddForm, setShowAddForm] = useState(false);
	const [loading,setLoading] = useState(true)

	// Fetch employees on component mount
	useEffect(() => {
		fetchEmployees();
	}, []);

	// Fetch all employees
	const fetchEmployees = async () => {
		try {
			const response = await axios.get(
				"https://mint-quartz-earwig.glitch.me/employees",
			);
			setEmployees(response.data);
			setFilteredEmployees(response.data);
			setLoading(false)
		} catch (error) {
			console.error("Error fetching employees:", error);
			setLoading(false)
		}
	};

	// Add a new employee
	const addEmployee = async (employee) => {
		try {
			const response = await axios.post(
				"https://mint-quartz-earwig.glitch.me/employees",
				employee,
			);
			setEmployees([...employees, response.data]);
			setFilteredEmployees([...filteredEmployees, response.data]);
		} catch (error) {
			console.error("Error adding employee:", error);
		}
	};

	// Delete an employee
	const deleteEmployee = async (id) => {
		try {
			await axios.delete(
				`https://mint-quartz-earwig.glitch.me/employees/${id}`,
			);
			const updatedEmployees = employees.filter(
				(employee) => employee.id !== id,
			);
			setEmployees(updatedEmployees);
			setFilteredEmployees(updatedEmployees);
		} catch (error) {
			console.error("Error deleting employee:", error);
		}
	};

	// Filter employees by department
	const handleFilter = (department) => {
		setSelectedDepartment(department);
		if (department === "") {
			setFilteredEmployees(employees);
		} else {
			const filtered = employees.filter((emp) => emp.department === department);
			setFilteredEmployees(filtered);
		}
	};
	if(loading) return <h1>Loading...</h1>

	return (
		<div className="App">
			<h1>Employee Management Dashboard</h1>
			<FilterDropdown
				departments={["HR", "IT", "Marketing"]}
				selectedDepartment={selectedDepartment}
				handleFilter={handleFilter}
			/>
			<button onClick={() => setShowAddForm(!showAddForm)}>
				{showAddForm ? "Close Add Employee Form" : "Add Employee"}
			</button>

			{showAddForm && <AddEmployeeForm onAddEmployee={addEmployee} />}
			{/* <AddEmployeeForm addEmployee={addEmployee} /> */}
			<EmployeeTable
				employees={filteredEmployees}
				deleteEmployee={deleteEmployee}
			/>
		</div>
	);
};

export default App;

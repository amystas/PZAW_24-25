import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("większe");
  const [filterSalary, setFilterSalary] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/employees") // Pobieranie danych z backendu
    .then((response) => {
        console.log("Dane z serwera:", response.data);
        setEmployees(response.data.employees); // Ustawienie danych
    })
    .catch((error) => console.error("Błąd pobierania danych:", error));
  }, []);

  const filteredEmployees = employees.filter(employee =>
    (filterType === "mniejsze" ? employee.salary < filterSalary : employee.salary > filterSalary) &&
    (`${employee.first_name} ${employee.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()))
);

  return (
      <div style={{padding: "20px"}}>
        <div id="header">
          <h2>Lista pracowników</h2>
          <div style={{display: "flex", gap: '15px'}}>
          <input
                type="text"
                placeholder="Wyszukaj pracownika..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="większe">Większe</option>
          <option value="mniejsze">Mniejsze</option>
        </select>
        <input 
          type="number" 
          min="0"
          value={filterSalary} 
          onChange={(e) => setFilterSalary(Number(e.target.value))} 
          placeholder="Kwota wynagrodzenia"
        />
      </div>
      </div>
          <table border="1">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Imię</th>
                      <th>Nazwisko</th>
                      <th>Dział</th>
                      <th>Stanowisko</th>
                      <th>Wynagrodzenie</th>
                      <th>Data zatrudnienia</th>
                  </tr>
              </thead>
              <tbody>
              { filteredEmployees.map((employee) => (
                        <tr 
                            key={employee.id} 
                            className={selectedRow === employee.id ? "highlight" : ""}
                            onClick={() => setSelectedRow(employee.id)}
                        >
                            <td>{employee.id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary} PLN</td>
                            <td>{employee.hire_date}</td>
                        </tr>
                    ))}
              </tbody>
          </table>
      </div>
  );
};

export default App;

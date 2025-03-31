import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, [users]);

    const fetchUsers = (e) => {
        if(isChecked) {
            axios.get("http://localhost:8000/sorted")
            .then((res) => setUsers(res.data));
        } else {
            axios.get("http://localhost:8000/users")
            .then((res) => setUsers(res.data));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/users", { name, email })
            .then(() => {
                setName("");
                setEmail("");
            });
    };

    const handleCheckbox = (e) => {
        setIsChecked(!isChecked);
        fetchUsers();
    }

    return (
        <div className="container mt-5">
            <h2>User Form</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <input type="text" className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            <h2>Users List</h2>
            <input type="checkbox" className="form-check-input" id="sort" onChange={handleCheckbox} checked={isChecked}></input>
            <label class="form-check-label" for="sort">Sort</label>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;

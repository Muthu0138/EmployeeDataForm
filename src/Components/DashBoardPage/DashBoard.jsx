import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  });

  const [users, setUsers] = useState([
    { name: "John Doe", email: "john@example.com", phone: "1234567890", address: "123 Main St", gender: "Male" },
    { name: "Jane Smith", email: "jane@example.com", phone: "0987654321", address: "456 Elm St", gender: "Female" },
    { name: "Alice Brown", email: "alice@example.com", phone: "1122334455", address: "789 Oak St", gender: "Female" },
    { name: "Bob Johnson", email: "bob@example.com", phone: "2233445566", address: "101 Pine St", gender: "Male" },
    { name: "Charlie White", email: "charlie@example.com", phone: "3344556677", address: "202 Maple St", gender: "Male" },
    { name: "David Lee", email: "david@example.com", phone: "4455667788", address: "303 Birch St", gender: "Male" },
    { name: "Eva Green", email: "eva@example.com", phone: "5566778899", address: "404 Cedar St", gender: "Female" },
    { name: "Frank Harris", email: "frank@example.com", phone: "6677889900", address: "505 Redwood St", gender: "Male" },
    { name: "Grace Miller", email: "grace@example.com", phone: "7788990011", address: "606 Pineapple St", gender: "Female" },
    { name: "Hank Moore", email: "hank@example.com", phone: "8899001122", address: "707 Willow St", gender: "Male" }
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", address: "", gender: "" });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    setUsers([...users, formData]);  // Add new user to the list
    handleCloseModal();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">User Management Dashboard</header>
      <main className="dashboard-main">
        <button className="add-user-button" onClick={handleOpenModal}>
          Add User
        </button>
        
        <div className="user-list">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add User</h2>
              <button className="close-button" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  id="address"
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                ></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      className="form-check-input"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Male
                  </label>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="gender"
                      className="form-check-input"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

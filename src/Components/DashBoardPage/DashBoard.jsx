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
    {id:1, name:"Aatish", email:"aa@gmail.com", gender:"Male", phone:"1234567890", address:"Chennai"},
    {id:2, name:"Bella", email:"bb@gmail.com", gender:"Female", phone:"1234567891", address:"Vellore"},
    {id:3, name:"Charu", email:"cc@gmail.com", gender:"Female", phone:"1234567892", address:"Erode"},
    {id:4, name:"Dinesh", email:"dd@gmail.com", gender:"Male", phone:"1234567893", address:"Madurai"},
    {id:5, name:"Elsa", email:"ee@gmail.com", gender:"Female", phone:"1234567894", address:"Ooty"},
    {id:6, name:"Francis", email:"ff@gmail.com", gender:"Male", phone:"1234567895", address:"Salem"},
    {id:7, name:"geetha", email:"gg@gmail.com", gender:"Female", phone:"1234567896", address:"Ranipet"},
    {id:8, name:"Hensha", email:"hh@gmail.com", gender:"Female", phone:"1234567897", address:"Kanniyakumari"},
    {id:9, name:"Isha", email:"ii@gmail.com", gender:"Female", phone:"1234567898", address:"Tirunelveli"},
    {id:10, name:"Jagadeesh", email:"jj@gmail.com", gender:"Male", phone:"1234567899", address:"Dindigul"},
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", address: "", gender: "" });
  };

  const handleSave = () => {
    // Generate a new unique id for the new user
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { ...formData, id: newId };
    setUsers([...users, newUser]); // Add the new user with id
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
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <p><strong>ID:</strong> {user.id}</p>  {/* Display user ID */}
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

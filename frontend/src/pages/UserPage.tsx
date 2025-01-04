import { useState } from "react";
import UserManagementTable from "../components/UserManagementTable";
import User from "../models/user";
import UserForm from "../components/UserForm";

const dummyusers = [
  { id: 1, name: "Mark", dob: "1990-01-01" },
  { id: 2, name: "Jacob", dob: "1990-01-01" },
];

const UserPage = () => {
  const [users, setUsers] = useState(dummyusers);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const onModalOpen = () => {
    setShowForm(true);
  };

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
    setShowForm(false);
  };

  const editUser = (user: User) => {
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)));
    setShowForm(false);
  };

  const deleteUser = (user: User) => {
    setUsers((prev) => prev.filter((u) => u.id != user.id));
  };

  return (
    <div>
      <p className="h1 text-center">User Management System</p>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-danger m-4"
          onClick={() => onModalOpen()}
        >
          Add User
        </button>
      </div>

      <UserManagementTable
        users={users}
        setCurrentUser={setCurrentUser}
        deleteUser={deleteUser}
        onModalOpen={onModalOpen}
      />

      {showForm && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <UserForm
                  addUser={addUser}
                  editUser={editUser}
                  initialValues={currentUser}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

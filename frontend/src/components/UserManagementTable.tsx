import User from "../models/user";

interface UserManagementTableProps {
  users: User[];
  editUser: (user: User) => void;
  deleteUser: (user: User) => void;
  onModalOpen: () => void;
}

const UserManagementTable = ({users,editUser,deleteUser,onModalOpen}: UserManagementTableProps) => {
  return (
    <div className="mr-4">
      <table className="table table-hover text-center m-4">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => {
                    onModalOpen();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementTable;

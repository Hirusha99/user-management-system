import User from "../models/user";

interface UserManagementTableProps {
  users: User[];
  deleteUser: (user: User) => void;
  onModalOpen: () => void;
  setCurrentUser: (value: React.SetStateAction<User | undefined>) => void;
}

const UserManagementTable = ({
  users,
  setCurrentUser,
  deleteUser,
  onModalOpen,
}: UserManagementTableProps) => {
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
                    setCurrentUser(user);
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

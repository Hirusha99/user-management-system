import { useState } from "react";
import User from "../models/user";

interface UserFormProps {
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  initialValues: User | undefined;
}

const UserForm = ({ addUser, editUser, initialValues }: UserFormProps) => {
  const [user, setUser] = useState(
    initialValues ? initialValues : { id: 1, name: "", dob: "" }
  );

  const onChange = (event: any) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitUser = (user: User) => {
    initialValues ? editUser(user) : addUser(user);

    setUser({ id: 1, name: "", dob: "" });
  };

  return (
    <div className="m-3">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
          value={user.name}
          name="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          onChange={onChange}
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Date of Birth"
          value={user.dob}
          name="dob"
        />
      </div>

      <button
        type="button"
        className="btn btn-dark "
        onClick={() => submitUser(user)}
      >
        Submit
      </button>
    </div>
  );
};

export default UserForm;

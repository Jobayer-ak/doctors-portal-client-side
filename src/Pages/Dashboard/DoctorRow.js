import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, speciality, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          class="btn btn-xs btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;

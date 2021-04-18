import { Button } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';

const ManagePackagesDetails = (props) => {
  const { _id, title, price, days } = props?.package;
  const [packageDelete, setPackageDelete] = React.useState(false);

  const handlePackageDelete = (id) => {
    fetch(`https://travel-maniacs.herokuapp.com/deletePackage/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          setPackageDelete(true);
        }
      })
  }
  return (
    <>{!packageDelete &&
      <tr>
        <td>{title}</td>
        <td>{days}</td>
        <td>${price}</td>
        <td><Button variant="success"><FontAwesomeIcon icon={faPenSquare} /></Button> <Button variant="danger" onClick={() => handlePackageDelete(_id)}><FontAwesomeIcon icon={faWindowClose} /></Button></td>
      </tr>}
    </>
  );
};

export default ManagePackagesDetails;
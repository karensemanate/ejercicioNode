import React from 'react';
import PrivateRouteKYS from '../../components/common/PrivateRouteKYS';
import EditPetKYS from '../../components/pets/EditPetKYS';

const EditPetPageKYS = () => {
  return (
    <PrivateRouteKYS>
      <EditPetKYS />
    </PrivateRouteKYS>
  );
};

export default EditPetPageKYS;
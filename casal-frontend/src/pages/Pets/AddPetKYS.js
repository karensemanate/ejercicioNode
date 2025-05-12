import React from 'react';
import PrivateRouteKYS from '../../components/common/PrivateRouteKYS';
import PetFormKYS from '../../components/pets/PetFormKYS';

const AddPetKYS = () => {
  return (
    <PrivateRouteKYS>
      <PetFormKYS />
    </PrivateRouteKYS>
  );
};

export default AddPetKYS;
import React from 'react';
import PrivateRouteKYS from '../../components/common/PrivateRouteKYS';
import PetDetailsKYS from '../../components/pets/PetDetailsKYS';

const PetDetailsPageKYS = () => {
  return (
    <PrivateRouteKYS>
      <PetDetailsKYS />
    </PrivateRouteKYS>
  );
};

export default PetDetailsPageKYS;
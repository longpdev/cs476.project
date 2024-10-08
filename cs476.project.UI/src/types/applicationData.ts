export type ApplicationData = {
  userId: string;
  petId: string;
  adoptionFor: string;
  petOwner: string;
  petsAtHome: string;
  homeType: string;
  petCareResponsible: string;
  financialPreparedness: string;
  adoptionReason: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  inspectionDate: Date;
  status: 'pending' | 'approved' | 'rejected';
};

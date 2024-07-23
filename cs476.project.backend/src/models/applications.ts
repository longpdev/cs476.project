import mongoose from 'mongoose';
export type ApplicationType = {
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

const applicationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  petId: { type: String, required: true },
  adoptionFor: { type: String, required: true },
  petOwner: { type: String, required: true },
  petsAtHome: { type: String, required: true },
  homeType: { type: String, required: true },
  petCareResponsible: { type: String, required: true },
  financialPreparedness: { type: String, required: true },
  adoptionReason: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  inspectionDate: { type: Date, required: true },
  createdDate: { type: Date, default: Date.now, required: false },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
});

const ApplicationModel = mongoose.model<ApplicationType>(
  'Application',
  applicationSchema
);

export default ApplicationModel;

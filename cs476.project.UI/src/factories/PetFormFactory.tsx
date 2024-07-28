import PetForm from '../components/PetForm';
import { PetType } from '../Pages/FindAPet/FindAPet';

type PetFormType = 'edit' | 'add';

interface CreatePetFormProps {
  type: PetFormType;
  pet?: PetType;
  onSubmit: (data: FormData) => void;
}

class PetFormFactory {
  static createPetForm({ type, pet, onSubmit }: CreatePetFormProps) {
    let title;
    switch (type) {
      case 'edit':
        title = 'Editing pet';
        break;
      case 'add':
        title = 'Adding new pet';
        break;
      default:
        throw new Error('Unknown form type');
    }
    return <PetForm pet={pet} onSubmit={onSubmit} title={title} />;
  }
}

export default PetFormFactory;

import { Repository } from "typeorm";
import {
  TContact,
  TContactUpdateRequest,
} from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactsService = async (
  id: string,
  data: TContactUpdateRequest
): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldData: Contact | null = await contactRepository.findOneBy({ id: id });

  const newContactData: Contact = contactRepository.create({
    ...oldData,
    ...data,
  });
  await contactRepository.save(newContactData);

  return newContactData;
};

export default updateContactsService;

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TContact,
  TContactRequest,
} from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/users.entity";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactsService = async (
  id: string,
  data: TContactRequest
): Promise<TContact> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact = contactRepository.create({ ...data, user: user! });
  await contactRepository.save(contact);

  const contactReturn: TContact = contactSchema.parse(contact);

  return contactReturn;
};

export default createContactsService;

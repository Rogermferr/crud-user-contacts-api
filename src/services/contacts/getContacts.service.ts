import { Repository } from "typeorm";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { TContact } from "../../interfaces/contacts.interfaces";

const getContactsService = async (id: string): Promise<TContact[]> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContacts: TContact[] = await contactRepository.find({
    where: {
      user: { id: id }!,
    },
  });

  return findContacts;
};

export default getContactsService;

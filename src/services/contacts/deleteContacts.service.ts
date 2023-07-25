import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/errors";

const deleteContactsService = async (id: string): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(contact);
};

export default deleteContactsService;

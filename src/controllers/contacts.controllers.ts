import { Request, Response } from "express";
import createContactsService from "../services/contacts/createContacts.service";
import { TContact } from "../interfaces/contacts.interfaces";
import getContactsService from "../services/contacts/getContacts.service";
import Contact from "../entities/contacts.entity";
import updateContactsService from "../services/contacts/updateContacts.service";
import deleteContactsService from "../services/contacts/deleteContacts.service";

const createContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const contact: TContact = await createContactsService(userId, req.body);

  return res.status(201).json(contact);
};

const getContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const contacts: TContact[] = await getContactsService(userId);
  return res.json(contacts);
};

const updateContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const contact: Contact = await updateContactsService(id, req.body);
  return res.json(contact);
};

const deleteContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  await deleteContactsService(id);
  return res.status(204).send();
};

export {
  createContactsController,
  getContactsController,
  updateContactsController,
  deleteContactsController,
};

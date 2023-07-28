import { Router } from "express";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import {
  contactRequestSchema,
  contactUpdateRequestSchema,
} from "../schemas/contacts.schemas";
import {
  createContactsController,
  deleteContactsController,
  getContactsController,
  updateContactsController,
} from "../controllers/contacts.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureTelephoneExistsMiddleware from "../middlewares/ensureTelephoneExists.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import ensureEmailExistsMiddleware from "../middlewares/ensureEmailExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  ensureBodyIsValidMiddleware(contactRequestSchema),
  ensureTokenIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureTelephoneExistsMiddleware,
  createContactsController
);

contactsRoutes.get("", ensureTokenIsValidMiddleware, getContactsController);

contactsRoutes.patch(
  "/:id",
  ensureBodyIsValidMiddleware(contactUpdateRequestSchema),
  ensureTokenIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureIsOwnerMiddleware,
  ensureTelephoneExistsMiddleware,
  updateContactsController
);

contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactsController
);

export default contactsRoutes;

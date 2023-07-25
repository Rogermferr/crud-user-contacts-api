import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/user.routes";
import { handleErrors } from "./errors/errors";
import loginRoutes from "./routes/login.routes";
import contactsRoutes from "./routes/contacts.routes";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" }));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);
export default app;

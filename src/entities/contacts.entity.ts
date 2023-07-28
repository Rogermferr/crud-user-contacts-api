import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  fullName: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column({ type: "varchar", length: 15, unique: true })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}

export default Contact;

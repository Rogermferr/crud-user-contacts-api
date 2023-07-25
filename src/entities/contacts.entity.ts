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

  @Column({ type: "varchar", length: 15, unique: true })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @ManyToOne(() => User)
  user: User;
}

export default Contact;

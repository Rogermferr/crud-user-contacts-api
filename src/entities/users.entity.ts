import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  fullName: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column({ type: "varchar", length: 127 })
  password: string;

  @Column({ type: "varchar", length: 15, unique: true })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  encriptedPass() {
    const passHashed: number = getRounds(this.password);

    if (!passHashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;

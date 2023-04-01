import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Label } from "./Label";

@Entity()
export class Chapter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  number: number;

  @OneToOne(() => Label)
  @JoinColumn()
  label: Label;
}

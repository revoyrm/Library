import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Label } from "./Label";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  note: string;

  @ManyToMany(() => Label)
  @JoinColumn()
  labels: Label[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Label } from "./Label";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  summary: string;

  @OneToOne(() => Label)
  @JoinColumn()
  label: Label;

  @OneToMany(() => Label, (label) => label.book)
  allLabels: Label[];
}

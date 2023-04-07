import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Label } from "./Label";
import { Book } from "./Book";

@Entity()
export class Character extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  description: string;

  @OneToOne(() => Label)
  @JoinColumn()
  label: Label;

  // @OneToMany(() => Label, (label) => label.book)
  // allLabels: Label[];

  @ManyToOne(() => Book, (book) => book.chapters)
  book: Book;
}

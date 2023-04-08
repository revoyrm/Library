import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Book } from "./Book";
import { Chapter } from "./Chapter";
import { Character } from "./Character";
import { Setting } from "./Setting";

@Entity()
export class Label extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @ManyToOne(() => Book, (book) => book.allLabels, { onDelete: "CASCADE" })
  book: Book;
}

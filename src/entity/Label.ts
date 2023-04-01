import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Label extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @ManyToOne(() => Book, (book) => book.allLabels)
  book: Book;
}

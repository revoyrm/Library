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

  @ManyToOne(() => Book, (book) => book.chapters, { onDelete: "CASCADE" })
  book: Book;
}

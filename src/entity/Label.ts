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

  @ManyToOne(() => Chapter, (chapter) => chapter.allLabels, {
    onDelete: "CASCADE",
  })
  chapter: Chapter;

  @ManyToOne(() => Character, (character) => character.allLabels, {
    onDelete: "CASCADE",
  })
  character: Character;

  @ManyToOne(() => Setting, (setting) => setting.allLabels, {
    onDelete: "CASCADE",
  })
  setting: Setting;
}

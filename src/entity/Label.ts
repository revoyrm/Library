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

  @ManyToOne(() => Book, (book) => book.allLabels)
  book: Book;

  @ManyToOne(() => Chapter, (chapter) => chapter.allLabels)
  chapter: Chapter;

  @ManyToOne(() => Character, (character) => character.allLabels)
  character: Character;

  @ManyToOne(() => Setting, (setting) => setting.allLabels)
  setting: Setting;
  
}

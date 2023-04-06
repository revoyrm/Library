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
import { Chapter } from "./Chapter";
import { Character } from "./Character";
import { Setting } from "./Setting";

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

  @OneToMany(() => Chapter, (chapter) => chapter.book)
  chapters: Chapter[];

  @OneToMany(() => Character, (character) => character.book)
  characters: Character[];

  @OneToMany(() => Setting, (setting) => setting.book)
  settings: Setting[];

  @OneToMany(() => Label, (label) => label.book)
  allLabels: Label[];
}

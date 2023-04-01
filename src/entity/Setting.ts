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
export class Setting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => Label)
  @JoinColumn()
  label: Label;
}

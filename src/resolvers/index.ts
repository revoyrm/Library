import { bookResolver } from "./book";
import { characterResolver } from "./character";
import { chapterResolver } from "./chapter";
import { settingResolver } from "./setting";
import { noteResolver } from "./note";
import { labelResolver } from "./label";

export const resolvers = [
  bookResolver,
  characterResolver,
  chapterResolver,
  settingResolver,
  labelResolver,
  noteResolver,
];

import { bookResolver } from "./book";
import { characterResolver } from "./character";
import { chapterResolver } from "./chapter";
import { settingResolver } from "./setting";
import { noteResolver } from "./note";

export const resolvers = [
  bookResolver,
  characterResolver,
  chapterResolver,
  settingResolver,
  noteResolver,
];

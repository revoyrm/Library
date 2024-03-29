"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const Label_1 = require("./Label");
const Chapter_1 = require("./Chapter");
const Character_1 = require("./Character");
const Setting_1 = require("./Setting");
let Book = class Book extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Label_1.Label),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Label_1.Label)
], Book.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Chapter_1.Chapter, (chapter) => chapter.book),
    __metadata("design:type", Array)
], Book.prototype, "chapters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Character_1.Character, (character) => character.book),
    __metadata("design:type", Array)
], Book.prototype, "characters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Setting_1.Setting, (setting) => setting.book),
    __metadata("design:type", Array)
], Book.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Label_1.Label, (label) => label.book),
    __metadata("design:type", Array)
], Book.prototype, "allLabels", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);
exports.Book = Book;

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
exports.Label = void 0;
const typeorm_1 = require("typeorm");
const Book_1 = require("./Book");
const Chapter_1 = require("./Chapter");
const Character_1 = require("./Character");
const Setting_1 = require("./Setting");
let Label = class Label extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Label.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Label.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Book_1.Book, (book) => book.allLabels),
    __metadata("design:type", Book_1.Book)
], Label.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Chapter_1.Chapter, (chapter) => chapter.allLabels),
    __metadata("design:type", Chapter_1.Chapter)
], Label.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Character_1.Character, (character) => character.allLabels),
    __metadata("design:type", Character_1.Character)
], Label.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Setting_1.Setting, (setting) => setting.allLabels),
    __metadata("design:type", Setting_1.Setting)
], Label.prototype, "setting", void 0);
Label = __decorate([
    (0, typeorm_1.Entity)()
], Label);
exports.Label = Label;

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
exports.Setting = void 0;
const typeorm_1 = require("typeorm");
const Label_1 = require("./Label");
const Book_1 = require("./Book");
let Setting = class Setting extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Setting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Label_1.Label),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Label_1.Label)
], Setting.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Label_1.Label, (label) => label.book),
    __metadata("design:type", Array)
], Setting.prototype, "allLabels", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Book_1.Book, (book) => book.chapters),
    __metadata("design:type", Book_1.Book)
], Setting.prototype, "book", void 0);
Setting = __decorate([
    (0, typeorm_1.Entity)()
], Setting);
exports.Setting = Setting;

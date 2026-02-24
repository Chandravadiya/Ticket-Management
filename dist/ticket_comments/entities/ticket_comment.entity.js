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
exports.TicketComment = void 0;
const typeorm_1 = require("typeorm");
let TicketComment = class TicketComment {
    id;
    ticket_id;
    user_id;
    comment;
    created_at;
};
exports.TicketComment = TicketComment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TicketComment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TicketComment.prototype, "ticket_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TicketComment.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], TicketComment.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TicketComment.prototype, "created_at", void 0);
exports.TicketComment = TicketComment = __decorate([
    (0, typeorm_1.Entity)('ticket_comments')
], TicketComment);
//# sourceMappingURL=ticket_comment.entity.js.map
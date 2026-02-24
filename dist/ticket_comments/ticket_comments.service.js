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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_comment_entity_1 = require("./entities/ticket_comment.entity");
const typeorm_2 = require("typeorm");
let TicketCommentsService = class TicketCommentsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(ticketId, user, dto) {
        const entity = this.repo.create({
            ticket_id: ticketId,
            user_id: user.id,
            comment: dto.comment,
        });
        return this.repo.save(entity);
    }
    findAll() {
        return this.repo.find({ order: { created_at: 'DESC' } });
    }
    findByTicket(ticketId, user) {
        return this.repo.find({
            where: { ticket_id: ticketId },
            order: { created_at: 'DESC' },
        });
    }
    async findOne(id) {
        const c = await this.repo.findOne({ where: { id } });
        if (!c)
            throw new common_1.NotFoundException('Comment not found');
        return c;
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.repo.delete(id);
    }
};
exports.TicketCommentsService = TicketCommentsService;
exports.TicketCommentsService = TicketCommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_comment_entity_1.TicketComment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketCommentsService);
//# sourceMappingURL=ticket_comments.service.js.map
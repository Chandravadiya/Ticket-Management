"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketCommentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ticket_comment_dto_1 = require("./create-ticket_comment.dto");
class UpdateTicketCommentDto extends (0, mapped_types_1.PartialType)(create_ticket_comment_dto_1.CreateTicketCommentDto) {
}
exports.UpdateTicketCommentDto = UpdateTicketCommentDto;
//# sourceMappingURL=update-ticket_comment.dto.js.map
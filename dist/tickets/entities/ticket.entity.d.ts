export declare enum TicketStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    RESOLVED = "RESOLVED",
    CLOSED = "CLOSED"
}
export declare enum TicketPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export declare class Ticket {
    id: number;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    created_by: number;
    assigned_to: number | null;
    created_at: Date;
}

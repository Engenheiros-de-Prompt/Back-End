export class FeedbackDto {
    readonly userId: string;
    readonly message: string;
    readonly rating?: number;
}
import { Controller, Get, Query } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";

@Controller("feedback")
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get("fromUser")
    async getFeedbacksFromUserId(@Query('userId') userId: number) {
        return await this.feedbackService.getFeedbacksFromUserId(userId);
    }
}
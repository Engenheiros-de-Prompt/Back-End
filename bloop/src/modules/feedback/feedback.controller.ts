import { Body, Controller, Get, Post, Query, ParseIntPipe } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";
import { FeedbackDto } from "./dto/feedback.dto";

@Controller("feedback")
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get("fromUser")
    async getFeedbacksFromUserId(@Query('userId', ParseIntPipe) userId: number) {
        return await this.feedbackService.getFeedbacksFromUserId(userId);
    }

    @Post("create")
    async createFeedBack(@Body() feedbackDto: FeedbackDto) {
        return await this.feedbackService.createFeedback(feedbackDto);
    }
}
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackDto } from "./dto/feedback.dto";

@Injectable()
export class FeedbackService {
    constructor(private readonly prismaService: PrismaService) {}

    async getFeedbacksFromUserId(userId: number) {
        userId = Number(userId);
        return await this.prismaService.feedback.findMany({
            where: {
                userId: Number(userId),
            }
        });
    }
    async createFeedback(feedbackDto: FeedbackDto) {
        return await this.prismaService.feedback.create({
            data: {
                userId: Number(feedbackDto.userId),
                comment: feedbackDto.message,
                Hard: feedbackDto.Hard,
                Soft: feedbackDto.Soft,
            }
        })
    }
}
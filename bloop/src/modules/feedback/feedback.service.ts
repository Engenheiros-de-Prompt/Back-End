import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FeedbackService {
    constructor(private readonly prismaService: PrismaService) {}

    async getFeedbacksFromUserId(userId: number) {
       return await this.prismaService.feedback.findMany({
            where: {
                userId: userId,
            }
        });
    }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BadgeModule } from './modules/badge/badge.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { UserModule } from './modules/user/user.module';
import { TeamModule } from './modules/team/team.module';

@Module({
  imports: [PrismaModule, UserModule, FeedbackModule, BadgeModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

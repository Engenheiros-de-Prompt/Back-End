import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Controller('badges')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Post()
  create(@Body() dto: CreateBadgeDto) {
    return this.badgeService.create(dto);
  }

  @Get()
  findAll() {
    return this.badgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBadgeDto) {
    return this.badgeService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.badgeService.remove(+id);
  }

  // --- Integração com usuário (UserBadge) ---

  // Atribuir badge a um usuário
  @Post(':badgeId/users/:userId')
  assignToUser(
    @Param('badgeId') badgeId: string,
    @Param('userId') userId: string,
  ) {
    return this.badgeService.assignBadgeToUser(+userId, +badgeId);
  }

  // Listar badges de um usuário
  @Get('/users/:userId')
  getByUser(@Param('userId') userId: string) {
    return this.badgeService.getBadgesByUser(+userId);
  }
}

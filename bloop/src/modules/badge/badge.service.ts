import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BadgeService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBadgeDto) {
    const prismaData: Prisma.BadgeCreateInput = {
      name: data.name,
    };
    return this.prisma.badge.create({ data: prismaData });
  }

  findAll() {
    return this.prisma.badge.findMany();
  }

  findOne(id: number) {
    return this.prisma.badge.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateBadgeDto) {
    const prismaData: Prisma.BadgeUpdateInput = {
      name: data.name,
    };
    return this.prisma.badge.update({ where: { id }, data: prismaData });
  }

  // Deletar badge
  remove(id: number) {
    return this.prisma.badge.delete({ where: { id } });
  }

  // --- Métodos para UserBadge ---

  // Atribuir badge a usuário
  async assignBadgeToUser(userId: number, badgeId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const badge = await this.prisma.badge.findUnique({
      where: { id: badgeId },
    });
    if (!badge) throw new NotFoundException('Badge not found');

    return this.prisma.userBadge.create({
      data: {
        userId,
        badgeId,
      },
    });
  }

  // Listar badges de um usuário
  async getBadgesByUser(userId: number) {
    const userWithBadges = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        badges: {
          include: { badge: true },
        },
      },
    });

    if (!userWithBadges) throw new NotFoundException('User not found');

    return userWithBadges.badges.map((ub) => ub.badge);
  }
}

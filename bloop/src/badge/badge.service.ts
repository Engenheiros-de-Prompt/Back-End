import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BadgeService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBadgeDto) {
    // converte CreateBadgeDto para o formato esperado pelo Prisma
    const prismaData: Prisma.BadgeCreateInput = {
      name: data.name,
      // adicione outras propriedades do Badge aqui, se houver
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
      // outras propriedades
    };
    return this.prisma.badge.update({ where: { id }, data: prismaData });
  }

  remove(id: number) {
    return this.prisma.badge.delete({ where: { id } });
  }
}

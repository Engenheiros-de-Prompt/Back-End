// badge.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BadgeService } from './badge.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

describe('BadgeService', () => {
  let service: BadgeService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgeService, PrismaService],
    }).compile();

    service = module.get<BadgeService>(BadgeService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a badge', async () => {
    const dto = { name: 'Nova Badge' };
    const mockBadge = { id: 1, name: 'Nova Badge', users: [] };

    jest.spyOn(prisma.badge, 'create').mockResolvedValue(mockBadge as any);

    expect(await service.create(dto)).toEqual(mockBadge);
  });

  it('should return all badges', async () => {
    const mockBadges = [{ id: 1, name: 'Badge A', users: [] }];

    jest.spyOn(prisma.badge, 'findMany').mockResolvedValue(mockBadges as any);

    expect(await service.findAll()).toEqual(mockBadges);
  });

  it('should return one badge by id', async () => {
    const mockBadge = { id: 1, name: 'Badge X', users: [] };

    jest.spyOn(prisma.badge, 'findUnique').mockResolvedValue(mockBadge as any);

    expect(await service.findOne(1)).toEqual(mockBadge);
  });

  it('should update a badge', async () => {
    const mockUpdated = { id: 1, name: 'Updated Badge', users: [] };

    jest.spyOn(prisma.badge, 'update').mockResolvedValue(mockUpdated as any);

    expect(await service.update(1, { name: 'Updated Badge' })).toEqual(
      mockUpdated,
    );
  });

  it('should delete a badge', async () => {
    const mockDeleted = { id: 1, name: 'Badge Del', users: [] };

    jest.spyOn(prisma.badge, 'delete').mockResolvedValue(mockDeleted as any);

    expect(await service.remove(1)).toEqual(mockDeleted);
  });
});

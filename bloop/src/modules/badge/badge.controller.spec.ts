// badge.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';

describe('BadgeController', () => {
  let controller: BadgeController;
  let service: BadgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgeController],
      providers: [
        {
          provide: BadgeService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BadgeController>(BadgeController);
    service = module.get<BadgeService>(BadgeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a badge', async () => {
    const dto = { name: 'CreateTest' };
    const result = { id: 1, name: 'CreateTest', users: [] };
    jest.spyOn(service, 'create').mockResolvedValue(result as any);

    expect(await controller.create(dto)).toEqual(result);
  });

  it('should return all badges', async () => {
    const result = [{ id: 1, name: 'AllTest', users: [] }];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as any);

    expect(await controller.findAll()).toEqual(result);
  });

  it('should return one badge by ID', async () => {
    const result = { id: 1, name: 'OneTest', users: [] };
    jest.spyOn(service, 'findOne').mockResolvedValue(result as any);

    expect(await controller.findOne('1')).toEqual(result);
  });

  it('should update a badge', async () => {
    const dto = { name: 'UpdatedName' };
    const result = { id: 1, name: 'UpdatedName', users: [] };
    jest.spyOn(service, 'update').mockResolvedValue(result as any);

    expect(await controller.update('1', dto)).toEqual(result);
  });

  it('should delete a badge', async () => {
    const result = { id: 1, name: 'Deleted', users: [] };
    jest.spyOn(service, 'remove').mockResolvedValue(result as any);

    expect(await controller.remove('1')).toEqual(result);
  });
});

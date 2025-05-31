// src/team/dto/create-team.dto.ts
export class CreateTeamDto {
  name: string;
  managerId: number;
  userIds?: number[];
}

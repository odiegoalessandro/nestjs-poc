import { Pagination } from './input.interface';
import { NoPaginatedOutput, PaginatedOutput } from './output.interface';

export interface CommonRepositoryInterface<Entity> {
  findAll(pagination: Pagination<Entity>): PaginatedOutput<Entity>;
  findOne(where: Partial<Entity>): NoPaginatedOutput<Entity>;
  searchAll(
    pagination: Pagination<Entity>,
    search: Partial<Entity>,
  ): PaginatedOutput<Entity>;
  searchOne(search: Partial<Entity>): NoPaginatedOutput<Entity>;
  create(data: Entity): NoPaginatedOutput<Entity>;
  remove(id: string): NoPaginatedOutput<Entity>;
  update(id: string, data: Partial<Entity>): NoPaginatedOutput<Entity>;
}

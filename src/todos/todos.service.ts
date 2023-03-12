import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private repository: TodosRepository) {}

  create(createTodoDto: Prisma.TodoCreateInput) {
    return this.repository.create(createTodoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: Todo['id']) {
    return this.repository.findOne(id);
  }

  async update(id: Todo['id'], updateTodoDto: Prisma.TodoUpdateInput) {
    try {
      await this.repository.findOne(id);
      return this.repository.update(id, updateTodoDto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: Todo['id']) {
    try {
      await this.repository.findOne(id);
      return this.repository.remove(id);
    } catch (error) {
      return error;
    }
  }
}

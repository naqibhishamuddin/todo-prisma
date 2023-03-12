import { PrismaService } from 'src/prisma/prisma.service';
import { Todo, Prisma } from '@prisma/client';

export class TodosRepository {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({
      data: createTodoDto,
    });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: Todo['id']) {
    return this.prisma.todo.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async update(id: Todo['id'], updateTodoDto: Prisma.TodoUpdateInput) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: Todo['id']) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}

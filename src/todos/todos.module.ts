import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from './../prisma/prisma.service';
import { TodosRepository } from './todos.repository';
@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService, TodosRepository],
})
export class TodosModule {}

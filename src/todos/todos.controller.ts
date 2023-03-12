import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: Prisma.TodoCreateInput) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Todo['id']) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: Todo['id'],
    @Body() updateTodoDto: Prisma.TodoUpdateInput,
  ) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Todo['id']) {
    return this.todosService.remove(id);
  }
}

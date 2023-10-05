// post.controller.ts
import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
import { Post } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @HttpPost()
  create(@Body() createPostDto: CreatePostDto): Promise<Post> {
    return this.postService.create(createPostDto);
  }

  // Adicione métodos para atualizar, deletar, etc.
}

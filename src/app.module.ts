import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './sqlitedb.db', // caminho para o arquivo do banco de dados SQLite
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // caminho para as suas entidades
    synchronize: true, // sincronização entre entidades e banco de dados
  }),
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

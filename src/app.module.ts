import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { List } from './list/entities/list.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ConfigModule.forRoot(),
    ListModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'job_hunt',
      entities: [List],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([List]), // Register the entity with TypeORM

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

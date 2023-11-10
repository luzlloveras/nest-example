/* eslint-disable prettier/prettier */

// Nest
import { Module }         from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule }     from '@nestjs/axios';

// App
import { AppController }  from './app.controller';
import { AppService }     from './app.service';

@Module({
  imports: [HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/products'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

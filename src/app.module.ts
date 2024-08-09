import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/event.module';

@Module({
  imports: [EventsModule, CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

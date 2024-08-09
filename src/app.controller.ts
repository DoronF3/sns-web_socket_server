import { Controller, Get } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

import { WebSocketServer } from '@nestjs/websockets';
import { EventService } from './events/event.service';

@Controller()
export class AppController {
  constructor(private readonly eventService: EventService) {}

  @WebSocketServer()
  server: Server;

  @Get()
  async getHello() {
    console.log('getHello');
    const socket: Socket = this.eventService.getSocket('eladhaim@gmail.com');
    if (socket) {
      socket.emit('message', 'Hello world!');
    }
  }
}

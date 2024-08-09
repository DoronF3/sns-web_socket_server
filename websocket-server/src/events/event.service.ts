import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class EventService {
  sockets = new Map<string, Socket>();

  setSocket(email: string, socket: Socket) {
    this.sockets.set(email, socket);
  }

  getSocket(email: string) {
    return this.sockets.get(email);
  }
}

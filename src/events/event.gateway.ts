import { OnGatewayConnection, WebSocketGateway } from '@nestjs/websockets';

import { EventService } from './event.service';

@WebSocketGateway({
  cors: '*',
})
export class EventsGateway implements OnGatewayConnection {
  constructor(private readonly eventService: EventService) {}

  handleConnection(client: any, ...args: any[]) {
    this.eventService.setSocket(client.handshake.query.email, client);
  }
}

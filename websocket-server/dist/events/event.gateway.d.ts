import { OnGatewayConnection } from '@nestjs/websockets';
import { EventService } from './event.service';
export declare class EventsGateway implements OnGatewayConnection {
    private readonly eventService;
    constructor(eventService: EventService);
    handleConnection(client: any, ...args: any[]): void;
}

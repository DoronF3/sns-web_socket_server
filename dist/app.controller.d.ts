import { Server } from 'socket.io';
import { EventService } from './events/event.service';
export declare class AppController {
    private readonly eventService;
    constructor(eventService: EventService);
    server: Server;
    getHello(): Promise<void>;
}

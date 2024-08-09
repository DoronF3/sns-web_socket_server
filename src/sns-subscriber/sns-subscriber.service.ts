import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  SnsSubscriberOptions,
} from './sns-subscriber.module.definition';

Injectable();
export class SnsSubsriberService implements OnApplicationBootstrap {
  private consumers: Consumer<any>[] = [];

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private snsSubscriberOptions: SnsSubscriberOptions,
  ) {}

  onApplicationBootstrap() {
    this.subscribers = Sub
    for (const consumer of this.consumers) {
      this.registerEvents(consumer.kafkaConsumer);
      const { batch } = SUBSCRIBER_MAP.get(consumer.topic);
      batch ? this.consumeBatch(consumer) : this.consumeMessage(consumer);
    }
  }
}

export const SUBSCRIBER_MAP = new Map();
export const SUBSCRIBER_OBJECT_MAP = new Map();
export function SubscribeTo<T>(topic: string) {
  return (_target: any, _propertyKey, descriptor: (event: T) => any) => {
    const originalMethod = descriptor;
    SUBSCRIBER_MAP.set(topic, {
      callback: originalMethod,
    });
    return descriptor;
  };
}

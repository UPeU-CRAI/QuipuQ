export interface Ticket {
  id: string;
  queueId: string;
  number: number;
  state: 'PENDING' | 'CALLED' | 'SERVING' | 'TRANSFERRED' | 'FINISHED' | 'CANCELED';
}

export interface Queue {
  id: string;
  name: string;
  priority: number;
}

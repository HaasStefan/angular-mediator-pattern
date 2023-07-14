import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Message {
  severity: 'success' | 'info' | 'warning' | 'error';
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  readonly #message = new BehaviorSubject<Message | null>(null);
  readonly message$ = this.#message.asObservable();

  showMessage(message: Message | null): void {
    this.#message.next(message);
  }
}

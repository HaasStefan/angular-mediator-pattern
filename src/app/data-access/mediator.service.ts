import { Injectable } from '@angular/core';
import { BehaviorSubject, skip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mediator {
  // #region selectedDeliveryPostalCode
  readonly #selectedDeliveryPostalCode = new BehaviorSubject<string | null>(
    null
  );
  readonly selectedDeliveryPostalCode$ = this.#selectedDeliveryPostalCode
    .asObservable()
    .pipe(skip(1));

  set selectedDeliveryPostalCode(value: string | null) {
    this.#selectedDeliveryPostalCode.next(value);
  }

  get selectedDeliveryPostalCode(): string | null {
    return this.#selectedDeliveryPostalCode.getValue();
  }
  // #endregion
}

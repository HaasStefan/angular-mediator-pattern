import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mediator } from '@data-access/mediator.service';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'angular-mediator-pattern-delivery-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-selection.component.html',
  styleUrls: ['./delivery-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliverySelectionComponent implements OnInit {
  readonly #mediator = inject(Mediator);
  readonly #destroyRef = inject(DestroyRef);
  readonly postalCode = new BehaviorSubject<string | null>(null);
  readonly postalCode$ = this.postalCode.asObservable();

  ngOnInit() {
    this.postalCode$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(
        (postalCode) => (this.#mediator.selectedDeliveryPostalCode = postalCode)
      );
  }
}

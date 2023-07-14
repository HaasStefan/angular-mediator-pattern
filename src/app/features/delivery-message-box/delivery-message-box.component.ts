import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from '@shared/message-box/message-box.component';
import { MessageService } from '@data-access/message.service';
import { Mediator } from '@data-access/mediator.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'angular-mediator-pattern-delivery-message-box',
  standalone: true,
  imports: [CommonModule, MessageBoxComponent],
  templateUrl: './delivery-message-box.component.html',
  styleUrls: ['./delivery-message-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryMessageBoxComponent implements OnInit {
  readonly #messageService = inject(MessageService);
  readonly #mediator = inject(Mediator);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.#mediator.selectedDeliveryPostalCode$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((postalCode) =>
        this.#messageService.showMessage(
          postalCode
            ? {
                severity: 'info',
                summary: 'Delivery',
                detail: `Delivery to ${postalCode} is selected.`,
              }
            : null
        )
      );
  }
}

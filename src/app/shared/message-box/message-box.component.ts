import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@data-access/message.service';

@Component({
  selector: 'angular-mediator-pattern-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageBoxComponent {
  readonly #messageService = inject(MessageService);
  readonly message$= this.#messageService.message$;
}

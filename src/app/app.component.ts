import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { DeliverySelectionComponent } from '@features/delivery-selection/delivery-selection.component';
import { DeliveryMessageBoxComponent } from '@features/delivery-message-box/delivery-message-box.component';

@Component({
  standalone: true,
  imports: [CardComponent, DeliverySelectionComponent, DeliveryMessageBoxComponent],
  selector: 'angular-mediator-pattern-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}

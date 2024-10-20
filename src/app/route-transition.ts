import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', [animate('0.15s', style({ opacity: 0 }))]),
  ]),
]);

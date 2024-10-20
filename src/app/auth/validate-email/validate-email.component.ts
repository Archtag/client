import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCircleExclamation,
  faEnvelopeCircleCheck,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
})
export class ValidateEmailComponent {
  email: string = 'No Email Found';
  code: string = 'No Code Found';
  isSuccessful: boolean = true;

  userCheckIcon = faUserCheck;
  circleExclamationIcon = faCircleExclamation;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email')!;
    this.code = this.route.snapshot.paramMap.get('code')!;
  }
}

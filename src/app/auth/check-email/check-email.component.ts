import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './check-email.component.html',
  selector: 'app-check-email',
})
export class CheckEmailComponent implements OnInit {
  email: string = 'No Email Found';

  envelopeIcon = faEnvelopeCircleCheck;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email')!;
  }
}

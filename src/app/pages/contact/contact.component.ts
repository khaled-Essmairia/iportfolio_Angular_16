import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 private readonly toEmail = 'essmairia.kaled@gmail.com';

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm(): void {
    const body = [
      `Name: ${this.form.name}`,
      `Email: ${this.form.email}`,
      '',
      this.form.message
    ].join('\n');

    const url =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(this.toEmail)}` +
      `&su=${encodeURIComponent(this.form.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, '_blank', 'noopener');
  }
}

import { Component, signal } from '@angular/core';
import { SharedComponent } from 'shared';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title() }}
      <hr />
      <lib-shared></lib-shared>
    </h1>
  `,
  styles: [],
  imports: [SharedComponent],
})
export class App {
  protected readonly title = signal('helloworld');
}

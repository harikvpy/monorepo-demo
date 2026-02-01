import { Component, signal } from '@angular/core';
import { Helper1Component } from 'helper/helper1';
import { SharedComponent } from 'shared';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title() }}</h1>
    <hr />
    <lib-shared></lib-shared>
    <hr />
    <lib-helper-helper1></lib-helper-helper1>
  `,
  styles: [],
  imports: [SharedComponent, Helper1Component],
})
export class App {
  protected readonly title = signal('helloworld');
}

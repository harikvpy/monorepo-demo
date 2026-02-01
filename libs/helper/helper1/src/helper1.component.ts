import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-helper-helper1',
  template: ` <p>helper1 works!</p> `,
  styles: [],
})
export class Helper1Component implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Helper1Component initialized');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-a-component',
  templateUrl: './just-a-component.component.html',
  styleUrls: ['./just-a-component.component.sass']
})
export class JustAComponentComponent implements OnInit {

  constructor() { }
  string_interpolation_as_variable = 'string interpolation'
  string_interpolation_as_function = () => 'string interpolation'

  ngOnInit(): void {

  }

}

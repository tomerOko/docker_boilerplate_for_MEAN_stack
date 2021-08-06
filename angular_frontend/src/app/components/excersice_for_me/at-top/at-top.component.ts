import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { generate_product_array_of } from 'src/app/services/product_service/mock_data/data';

@Component({
  selector: 'app-at-top',
  templateUrl: './at-top.component.html',
  styleUrls: ['./at-top.component.scss']
})
export class AtTopComponent implements OnInit {

  subjectt: Subject<number>;

  constructor() { }

  ngOnInit(): void {

    console.log(this.takestime())

    this.test().then(data => console.log(data)).catch(error => console.error(error))

    this.test2().then(data => console.log(data)).catch(error => console.error(error))

    this.subjectt= new Subject<number>()

    this.subjectt.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });

    this.subjectt.next(33)
    this.subjectt.complete(

    )
  }



  test = async () => "hallow world from promise"

  takestime = (param?:any):Promise<string> => {
    return new Promise( (res, rej) => {
      setTimeout(() => {
        res('hallow world'+param)
      }, 1000);
    })
  }


  test2 = async () => {
    let waiting = await this.takestime(' after one second,')
    console.log('the result after waiting is::: '+waiting)
    waiting+= await this.takestime(' after two seconds')
    console.log('the result after another waiting is::: '+waiting)
    return waiting
  }




}

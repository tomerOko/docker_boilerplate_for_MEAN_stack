import {
  Injectable
} from '@angular/core';
import {BehaviorSubject, Observable, Subject } from 'rxjs';
import product from 'src/app/models/product';
import {
  generate_product_array_of,
  push_products_to_localstorage
} from './mock_data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: product[]=[];
  private products_subject:BehaviorSubject<product[]>
  private products_opservable:Observable<product[]>

  constructor() {
    this.products = []
    this.products_subject = new BehaviorSubject(this.products);
    this.products_opservable= this.products_subject.asObservable();
    this.fill_products()
  }

  fill_products = async():Promise<void> =>{
    if (localStorage.getItem('products') == null) {
      this.generate_products(15)
        .then(data => console.log(`data generation and pushing to local storage preformed successfuly`))
        .catch(err => console.error(err))
    } else {
      this.read_from_local_storage('product')
        .then(data => console.log('product reading from localstorage preformed seccessfuly'))
        .catch(err => console.error(`there was a problem while reading products from local storage ${err}`))
    }
  }

  generate_products = async (length: number): Promise < void > => {
    this.products = await generate_product_array_of(length)
    await push_products_to_localstorage(this.products)
  }

  read_from_local_storage = async (key: string): Promise < void > => {
    for (var i = 0; i < localStorage.length; i++) {
      const reg=new RegExp(`${key}[0-9]{9}`)
      if (localStorage?.key(i)?.match(reg)) {
        const product_as_string: string = await localStorage.getItem(localStorage.key(i) as string) as string
        const product_obj: product = await JSON.parse(product_as_string)
        this.products.push(product_obj)
      }
    }
  }

  get_all_products = () : Observable<product[]> => {
    return this.products_opservable;
  }

  delete_product = async(product:product):Promise<void> =>{
    await localStorage.removeItem('product'+product.id)
    this.products=this.products.filter(val => val.id!==product.id)
  }
  create_product = async(product:product):Promise<void> =>{
    await push_products_to_localstorage([product])
    this.products.push(product)
  }
  update_product = async(product:product):Promise<void> =>{
    await this.delete_product(product)
    await this.create_product(product)
  }

}

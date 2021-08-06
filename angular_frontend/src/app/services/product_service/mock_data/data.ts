import product from '../../../models/product'
import { names1, names2 } from './mock_names'

const rundom_by_length = (scale:number) => Math.floor(scale + Math.random() * 9*scale)
const generate_number = (length:number) : number => rundom_by_length(Math.pow(10, length-1))
const random_date = (start: Date, end: Date):Date => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const generate_date = ():Date => random_date(new Date(2012, 0, 1), new Date());

const cap_first = (string:string):string => string.charAt(0).toUpperCase() + string.slice(1);
const get_randomInt = (min:number, max:number):number => Math.floor(Math.random() * (max - min)) + min;
const generate_name =():string => cap_first(names1[get_randomInt(0, names1.length + 1)]) + ' ' + cap_first(names2[get_randomInt(0, names2.length + 1)]);

let counter=0
export const generate_product = ():product =>{
  counter++
  const name=generate_name()
  const result: product = {
    id: generate_number(9),
    date : generate_date(),
    prod_name: name,
    price: generate_number(5),
    description:`this is better then ${name} and it is totaly worth the price!!`,
    added:counter
  }
  return result
}

export const generate_product_array_of = async (length:number):Promise<product[]> => {
  const result: product[]=[]
  for(let i=0; i<length; i++)result.push(generate_product());
  return result
}

export const generate_products_and_push = async (length:number): Promise<void> => {
  let products:product[]=await generate_product_array_of(length)
  await push_products_to_localstorage(products)
}

export const push_products_to_localstorage = async (products:product[]): Promise<void> => {
  localStorage.setItem('products','are exist')
  await products.forEach( async value =>{
    const as_string = await JSON.stringify(value)
    await localStorage.setItem('product'+value.id, as_string)
  })
}


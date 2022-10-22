import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name:'xigua',
      brand:'buddy',
      flavors: ['chixigua','code']
    }
  ]
  findAll(){
    return this.coffees
  }

  findOne(id:string){
    //这里id是string  但是item.id 是 number   所以通过+id 传入的id转为number
    const coffee = this.coffees.find(item=>item.id===+id)
    //异常处理，message 和 status
    if(!coffee){
      throw new HttpException(`Coffee ${id} is not found`,HttpStatus.NOT_FOUND)
    }

    //如果我们忘记处理异常，并且不一定是http异常，
    //nestjs有一层异常处理，会自动捕获异常
    // throw 'A random error'
    return coffee
  }

  create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto)
  }

  update(id: string,updateCoffeeDto:any){
    //是否存在
    const existingCoffee = this.findOne(id)
    if(existingCoffee){
      //update this entityu
    }
  }
  remove(id:string){
    const coffeeIndex =  this.coffees.findIndex(item=>item.id===+id)
    if(coffeeIndex >=0){
      //找到了 
      this.coffees.splice(coffeeIndex,1)
    }
  }
}

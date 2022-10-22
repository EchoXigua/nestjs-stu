import { Controller, Get, Param, Post,Body, HttpCode, HttpStatus, Res, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  //注入service
  constructor(private readonly coffeesService: CoffeesService){}


  @Get()
  // findAll(@Res() response){
  //   response.status(200).send('this is all coffees')
  //   // return 'all get request'
  // }
  //分页查询
  findAll(@Query() paginatonQuery){
    // const { limit, offset } = paginatonQuery
    // return `this action return all coffees,Limit:${limit},offset:${offset}`

    //搭配service
    return this.coffeesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.coffeesService.findOne(id)
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  //之前body一直没有类型，当我们使用了dto之后就可以了
  //dto只是简单的类，不包含任何业务逻辑、方法
  //它只是试图创建我们的数据传输对象的接口、形状
  create(@Body() createCoffeeDto: CreateCoffeeDto){
    //可以传入name body 就是name的值了

    //全局中的ValidationPipe 里的 transform:true,  将会是实例
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    
    return this.coffeesService.create(createCoffeeDto)
  }

  @Patch(':id')
  update(@Param('id') id:string,@Body() UpdateCoffeeDto: UpdateCoffeeDto){
    //直接取id
    return this.coffeesService.update(id,UpdateCoffeeDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.coffeesService.remove(id)
  }
}

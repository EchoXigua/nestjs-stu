import { IsString } from "class-validator";
//这个包会帮助我们校验，不通过会返回报错信息和状态码
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({each:true})
  readonly flavors: string[]
  //暂时看不出readonly的作用，等到真正数据库的时候就可以了
}

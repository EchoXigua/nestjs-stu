import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// export class UpdateCoffeeDto {
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavors?: string[]
//   //我们允许更新任何一个部分，使用？可选参数
// }

//我们从create里面去复制类型，这样做代码冗余，使用@nestjs/mapped-types宝来帮我解决
//传入一个想要CreateCoffeeDto(拷贝的类型)
/**
 * PartialType函数会返回我们传给它的类型，并且所有的属性都是可选的，减少重复代码
 * PartialType还继承了  CreateCoffeeDto中装饰器的所有校验规则
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){

}
import { MenuSchemas } from "./MenuController";
import MenuController from "./MenuController";
import type { IMenu, IMenuRepository } from "./MenuController";

export default class MenuRepository {
  Repository: Array<MenuController> = [];

  constructor(setup: IMenuRepository) {
    if (!MenuSchemas.safeParse(setup).success) {
      throw new Error("Wrong Type on MenuRepository");
    }
    setup.forEach((item: IMenu) => this.Repository.push(new MenuController(item)));
  }

  get() {
    return this.Repository
  }
}
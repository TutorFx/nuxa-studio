import MenuService from "../classes/menu/MenuService";
import MenuRepository from "../classes/menu/MenuRepository";
import type { IMenuRepository } from "../classes/menu/MenuController";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            /**
             * Creates a new instance of Menu with provided items.
             * @param items {@link IMenuRepository} Array of menu items to be used in the Menu.
             * @returns {typeof MenuService.prototype} An instance of Menu.
             */
            menu: (items: IMenuRepository): typeof MenuService.prototype => {
                const repository = new MenuRepository(items);
                return new MenuService(repository);
            },
        },
    };
});
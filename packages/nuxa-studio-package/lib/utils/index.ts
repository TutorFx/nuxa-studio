import type { IMenuRepository } from '../classes/menu/MenuController';

/**
 * Defines a menu configuration.
 * @param defined {() => IMenuRepository} A function that returns a set of menu items.
 * @returns {IMenuRepository} The defined set of menu items.
 */
export const defineMenuConfig = (defined: () => IMenuRepository): IMenuRepository => {
    return defined();
};
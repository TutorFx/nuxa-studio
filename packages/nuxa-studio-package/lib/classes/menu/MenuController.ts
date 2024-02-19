import { z } from "zod";

export enum LinkType {
  ExternalLink,
  InternalLink,
}

// Define a schema for the object structure of RouteLocationRaw
const RouteLocationPathRawSchema = z.object({
  path: z.string(),
});

const RouteLocationNamedRawSchema = z.object({
  name: z.string(),
  params: z.record(z.string()),
});

// Define a schema that covers all possible shapes of RouteLocationRaw
const RouteLocationRawSchema = z.union([
  z.string(),
  RouteLocationPathRawSchema,
  RouteLocationNamedRawSchema,
]);

const MenuSchema = z.object({
  LinkType: z.nativeEnum(LinkType),
  url: z.string().min(1),
  content: RouteLocationRawSchema,
});

export const MenuSchemas = z.array(MenuSchema);

export type IMenu = z.infer<typeof MenuSchema>;
export type IMenuRepository = z.infer<typeof MenuSchemas>;
type IRouteLocationRaw = z.infer<typeof RouteLocationRawSchema>

interface ExternalBinding {
  href: string;
}

interface InternalBinding {
  to: string | IRouteLocationRaw;
}

interface MenuItemInterface extends IMenu {
  getBinding: () => ExternalBinding | InternalBinding;
}

export default class MenuItem implements MenuItemInterface {
  LinkType: LinkType;
  url: string;
  content: IRouteLocationRaw;
  constructor(menu: IMenu) {
    this.LinkType = menu.LinkType;
    this.url = menu.url;
    this.content = menu.content;
  }

    /**
     * Gets the binding information based on the LinkType.
     *
     * This method determines whether a menu item is an internal or external link
     * and provides the appropriate binding object needed for navigation.
     * @returns {ExternalBinding | InternalBinding} The binding object containing the URL or path for the link.
     */
    getBinding() {
      const bindings: Record<LinkType, ExternalBinding | InternalBinding> = {
        [LinkType.ExternalLink]: {
          href: this.url
        },
        [LinkType.InternalLink]: {
          to: this.url
        }
      };
      return bindings[this.LinkType];
    }
}

import {
  addPlugin,
  defineNuxtModule,
  createResolver,
  installModule,
  useLogger,
  addImports,
} from "@nuxt/kit";
import { join } from "path";

export * from "./lib/classes/menu/MenuController"

export default defineNuxtModule({
  async setup(_, nuxt) {
    const logger = useLogger('nuxa-studio-package')
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "lib/components"),
        prefix: "nuxa",
      });
    });

    await installModule("@nuxtjs/color-mode", {
      preference: "light",
    });

    await installModule("@nuxt/ui", {
      global: true,
      icons: ["mdi", "simple-icons"],
    });

    await installModule("@vueuse/nuxt");

    const { resolve } = createResolver(import.meta.url);

    // add the helper plugin
    addPlugin(resolve("lib/plugins/helper.ts"));

    addImports({
      name: "defineMenuConfig",
      as: "defineMenuConfig",
      from: resolve('lib/utils')
    })

    // add animate.css file from animate.css library
    nuxt.options.css.push("animate.css");


    logger.success('💫 Running Nuxa Studio')
  },
});


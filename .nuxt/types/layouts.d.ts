import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "/home/dmrudy17/VueSandbox/nuxt-tutorial/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
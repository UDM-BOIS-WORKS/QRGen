import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Nuxt3js_Acts/QRsample/QRGenerator/QRGen/node_modules/.pnpm/nuxt@3.5.2_@types+node@20.3.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
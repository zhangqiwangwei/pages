/**
 * Created by zhao on 2020/10/28.
 */
import Vue from'vue'
import Page from  './page/ssy/pc/customFormPage.vue'
const el = "#app";
export function createApp() {
    const app = new Vue({
        render: h => h(Page)
    });
    return { app }
}
export const $el = process.env.NODE_ENV === 'production'? Page.magentoEl?Page.magentoEl:el : el;
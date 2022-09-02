import { createWebHashHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./code-demo/switch-demo/SwitchDemo.vue"
import ButtonDemo from "./code-demo/button-demo/ButtonDemo.vue"
import DialogDemo from "./code-demo/dialog-demo/DialogDemo.vue"
import TabsDemo from "./code-demo/tabs-demo/TabsDemo.vue"
import { h } from "vue"
import Markdown from "./components/Markdown.vue"
import intro from "./markdown/intro.md"
import start from "./markdown/start.md"
import install from "./markdown/install.md"

const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(intro) },
        { path: "start", component: md(start) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        {
          path: "calendar",
          component: () => import("./code-demo/calendar-demo/CalendarDemo.vue"),
        },
      ],
    },
  ],
})
router.afterEach(() => {
  console.log("路由切换了")
})

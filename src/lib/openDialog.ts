import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, ok, close} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              //@ts-ignore
              app.unmount(div);
              div.remove();
            }
          },
          ok, close
        },
        {title, content});
    }
  });
  app.mount(div);
};
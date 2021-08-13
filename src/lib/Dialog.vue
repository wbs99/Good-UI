<template>
  <div v-if="visible">
    <div @click="closeOnClickOverlay" class="good-dialog-overlay">Dialog</div>
    <div class="good-dialog-wrapper">
      <div class="good-dialog">
        <header>标题
          <span @click="close" class="good-dialog-close"></span>
        </header>
        <main>
          <p>对话框内容</p>
          <p>对话框内容</p>
          <p>对话框内容</p>
        </main>
        <footer>
          <Button @click="close">取消</Button>
          <Button level="main">确定</Button>
        </footer>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok:{
      type:Function
    }
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const closeOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok =()=>{
      if(props.ok&&props.ok()!==false){
        close()
      }
    }
    return {close, closeOnClickOverlay,ok};
  }
};
</script>

<style lang='scss' scoped>
.good-dialog {
  background: white;
  min-width: 30em;
  max-width: 90%;
  border-radius: 6px;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out(black, 0.7);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }


  > header {
    padding: 12px 16px;
    font-size: 18px;
    border-bottom: 1px solid #d9d9d9;
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid #d9d9d9;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before, &::after {
      content: '';
      position: absolute;
      background: black;
      top: 50%;
      left: 50%;
      height: 1px;
      width: 100%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
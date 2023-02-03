import { NButton } from 'naive-ui';
import Style from './index.module.less';

export default defineComponent({
  setup() {
    onMounted(() => {});
  },
  render() {
    return (
      <div class={Style['blue']}>
        <NButton>hello world</NButton>
      </div>
    );
  },
});

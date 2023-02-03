import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      title: 'title',
      theme: '',
    }),
    getters: {},
    actions: {},
    persist: {},
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}

export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('/@/views/home'),
  },
];

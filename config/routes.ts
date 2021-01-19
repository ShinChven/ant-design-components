export default [
  {
    path: '/user',
    layout: false,
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/showcase/checkbox',
    name: 'Checkbox',
    icon: 'CheckOutlined',
    component: './showcase/Checkbox',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

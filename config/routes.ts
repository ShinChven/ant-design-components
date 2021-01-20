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
    path: '/showcase/Checkbox/',
    name: 'Checkbox',
    icon: 'CheckOutlined',
    routes: [
      {
        path: '/showcase/Checkbox/GridCheckboxGroup',
        name: 'GridCheckboxGroup',
        component: './showcase/Checkbox/GridCheckboxGroupShowcase',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

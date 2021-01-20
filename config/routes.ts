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
    path: '/showcase/Descriptions/',
    name: 'Descriptions',
    icon: 'InfoCircleFilled',
    routes: [
      {
        path: '/showcase/Descriptions/MappedDescriptions',
        name: 'MappedDescriptions',
        component: './showcase/Descriptions/MappedDescriptionsShowcase',
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

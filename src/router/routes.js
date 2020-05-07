const routes = [
  {
    path: '/', //首页模板
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/group/GroupMain.vue') },
      { path: 'group/:id', component: () => import('pages/group/GroupMain.vue') },
    ],
  },
  {
    path: '/articles/:id',
    component: () => import('pages/article/Index.vue'),
  },
  {
    path: '/person', //人物信息模板
    component: () => import('layouts/PersonLayout.vue'),
    children: [
      { path: '', component: () => import('pages/person/PersonDetails.vue') },
      { path: 'show/:id', props: true, component: () => import('pages/person/PersonDetails.vue') },
    ],
  },
  {
    path: '/manage', //管理模板
    component: () => import('layouts/ManageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/manage/ManageMember.vue') },
      { path: ':id', props: true, component: () => import('pages/manage/ManageMember.vue') },
    ],
  },
  {
    path: '/toast', //测试弹窗模板
    component: () => import('pages/toast/index.vue'),
    name: 'toast',
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;

import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import UserProfile from "../views/UserProfile.vue";
import BlogDetail from "../views/BlogDetail.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blog",
    children: [
      {
        path: "",
        name: "blog",
        component: Blog,
      },
      // /blog/:id
      {
        path: ":id",
        name: "blog-detail",
        component: BlogDetail,
      },
      // /blog/detail
      /*
      {
        path: "detail",
        name: "blog-detail",
        component: BlogDetail,
      },
      */
    ],
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/user-profile",
    name: "user-profile",
    component: UserProfile,
    meta: {
      title: "Profile",
    },
  },
];

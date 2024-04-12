<template>
    <!-- blog card -->
    <section class="mt-11">
        <h1 class="text-3xl font-bold mb-4 animate-wiggle">Latest Blogs</h1>
        <router-link v-for="post in posts" :key="post.id" :to="{name: 'blog-detail', params: {id: post.id}}" class="block mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ post.title }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                {{ post.body }}
            </p>
        </router-link>
    </section>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        getPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => {
                this.posts = result.splice(90);
            });
        }
    },
    created() {
        this.getPosts()
    }
}
</script>
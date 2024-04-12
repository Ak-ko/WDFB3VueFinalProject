<template>
   <section class="my-5">
    <div v-if="post.title && post.body" class="block mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ post.title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ post.body }}
        </p>
    </div>
    <div v-else class="block mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 animate-pulse">
        <div class="rounded-full bg-slate-300 h-[15px] w-[300px]"></div>
        <div class="mt-5">
            <div class="rounded-full bg-slate-300 h-[13px] w-full"></div>
            <div class="mt-2 rounded-full bg-slate-300 h-[13px] w-[50%]"></div>
        </div>
    </div>
   </section>
</template>
<script>
export default {
    data() {
        return {
            post: {},
        }
    },
    methods: {
        // fetch().then().catch()
        getPost() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
            .then(res => {
                return res.json()
            })
            .then(result => {
               setTimeout(() => {
                 this.post = result;
               }, 3000)
            })
            .catch(err => console.log(err));
        }
    },
    created() {
        this.getPost()
    }
}
</script>
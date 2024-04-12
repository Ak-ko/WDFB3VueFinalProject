<template>
    <header class="@container border-b">
      <nav class="@md:px-[50px] flex justify-between dark:bg-neutral-500 bg-white">
        <div>
          <router-link active-class="nav-active" class="inline-block py-3" to="/">Home</router-link>
          <router-link active-class="nav-active" class="inline-block py-3 mx-5" to="/blog">Blog</router-link>
          <router-link active-class="nav-active" class="inline-block py-3" to="/user-profile">Profile</router-link>
        </div>
        <div class="flex items-center gap-2">
          <button class="flex items-center gap-2 text-xl text-green-500 hover:text-gray-500" @click="openModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="30" height="30" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
            <span class="mt-[0.5]">Create</span>
          </button>
          <button @click="changeTheme">
            Change Theme
          </button>
        </div>
      </nav>
    </header>
    <teleport to="#modal">
      <div @click="isOpen = false" class="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] transition-all" :class="[isOpen ? 'opacity-[1] visible' : 'opacity-0 invisible']"></div>
      <div :class="[isOpen ? 'opacity-[1] visible' : 'opacity-0 invisible']" class="transition-all fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[800px] p-11 rounded-xl">
        <h2 class="mb-5 text-xl font-bold">Create a blog !</h2>
        <form @submit.prevent="createBlog" class="space-y-5">
          <div>
            <input v-model="formData.title" type="text" placeholder="Title" class="w-full p-2 border rounded-xl">
          </div>
          <div>
            <textarea v-model="formData.body" placeholder="Body" class="w-full p-2 border rounded-xl h-[300px]"></textarea>
          </div>
          <button class="w-full py-4 text-white bg-primary hover:opacity-[0.8] rounded-xl">Create</button>
        </form>
      </div>
    </teleport>
</template>
<script>
import { useThemeStore } from '@/stores/theme';
import { mapActions } from 'pinia';
export default {
  data() {
    return {
      isOpen: false,
      formData: {
        title: '',
        body: ''
      }
    }
  },
  watch: {
    isOpen(value) {
      if(value) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    }
  },
  methods: {
    ...mapActions(useThemeStore, ['changeTheme']),
    openModal() {
      this.isOpen = true;
    },
    createBlog() {
      fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.formData)
      }).then(() => {
        this.isOpen = false;
        this.formData.title = ''
        this.formData.body = ''
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>
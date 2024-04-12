<template>
    <div class="my-7">
        <div class="mb-7">
            <h3 class="text-3xl font-bold">{{ user.name }}</h3>
            <span class="text-gray-500">{{ user.email }}</span>
        </div>
        <div>
            <h2 class="text-xl font-bold underline mb-4">About</h2>
            <div class="mb-3">
                <span class="text-md text-gray-500 mr-2">Phone</span>
                <span>{{ user.phone }}</span>
            </div>
            <div class="mb-4">
                <span class="text-md text-gray-500 mr-2">Address</span>
                <span>{{ user.address?.street }}</span>
            </div>
            <div>
                <span class="text-md text-gray-500 mr-2">Website</span>
                <a :href="user.website" target="_blank">{{ user.website }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
        }
    },
    methods: {
        getUser() {
            fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(result => {
                this.user = result;
            })
        }
    },
    created() {
        this.getUser();
    }
}
</script>
<template>
    <div class="container">
        <div>
            <h1 class="title">Live From the Heygate</h1>
            <Loader v-if="$fetchState.pending" />
            <div v-else>
                <blog-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
                    :title="post.title" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import BlogItem from "@/components/BlogItem";
import Loader from "@/components/Loader";

/**
 * Need to bundles into store
 */
export default {
    components: {
        Loader,
        // PostList
    },
    // store isn't working - not sure what I'm missing. 
    // computed: {
    //   loadedPosts() {
    //     return this.$store.getters.loadedPosts
    //   }
    // }
    data() {
        return {
            loadedPosts: []
        };
    },
    async fetch() {
        const { data: posts } = await axios.get(
            "https://timbeckett-writing.com/wp-json/wp/v2/posts?categories=2"
        );
        this.posts = posts;
        console.log(this.posts);
    }
};
</script>

<template>
    <div class="container">
        <section>
            <h1 class="title">Fiction</h1>
            <p class="intro">
                Some intro text about my fiction.
            </p>
            <Loader v-if="$fetchState.pending" />
            <div v-else>
                <post-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
                    :title="post.title" />
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import PostItem from "@/components/PostItem";
import Loader from "@/components/Loader";

/**
 * Need to bundle into store
 */
export default {
    components: {
        Loader,
        PostItem
    },
    data() {
        return {
            posts: []
        };
    },
    async fetch() {
        const { data: posts } = await axios.get(
            "https://timbeckett-writing.com/wp-json/wp/v2/posts?categories=12"
        );
        this.posts = posts;
    }
};
</script>

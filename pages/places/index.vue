<template>
    <section class="container">
        <div>
            <h1 class="title">Places</h1>
            <article>
                <p>On the site <a href="https://uraniumcity-history.com">Uranium City History Project</a>, I have a
                    section
                    called 'Places', where I a few guest authors write about notable places in and around Uranium City.
                    These are supplemented by photos, maps, whatever is available.</p>
            </article>
            <Loader v-if="$fetchState.pending" />
            <div v-else>
                <post-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
                    :title="post.title" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
// import PostList from "@/components/PostList";
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
            "https://uraniumcity-history.com/wp-json/wp/v2/places"
        );
        this.posts = posts;
        // console.log(this.posts);
    }
};
</script>

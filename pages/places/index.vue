<template>
    <section class="places-list container">
        <div>
            <h1 class="places-list__title">Places</h1>
            <article class="places-list__intro">
                <p>On the site <a href="https://uraniumcity-history.com">Uranium City History Project</a>, I have a
                    section
                    called 'Places', where I a few guest authors write about notable places in and around Uranium City.
                    These are supplemented by photos, maps, whatever is available.</p>
            </article>
            <Loader v-if="$fetchState.pending" />
            <div v-else>
                <places-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
                    :title="post.title" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
///import PostList from "@/components/PostList";
import PlacesItem from "/components/PlacesItem";
import Loader from "/components/Loader";

/**
 * Need to bundles into store
 */
export default {
    components: {
        Loader,
        // PostList
        PlacesItem
    },
    data() {
        return {
            posts: []
        };
    },
    async fetch() {
        // get local site for now, so I can get featured images. 
        const { data: posts } = await axios.get(
            "http://uchistory.local/wp-json/wp/v2/places"
        );
        this.posts = posts;
        console.log(this.posts);
    }
};
</script>

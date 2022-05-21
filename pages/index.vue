<template>
  <div class="container">
    <div>
      <h1 class="title">Home Page</h1>
      <Loader v-if="$fetchState.pending" />
      <div v-else>
        <post-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
          :title="post.title" />
      </div>
    </div>
  </div>
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
  data() {
    return {
      loadedPosts: []
    };
  },
  async fetch() {
    const { data: posts } = await axios.get(
      "https://timbeckett-writing.com/wp-json/wp/v2/posts"
    );
    this.posts = posts;
  }
};
</script>

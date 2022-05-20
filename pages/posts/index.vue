<template>
  <div class="container">
    <div>
      <h1 class="title">Posts</h1>
      <Loader v-if="$fetchState.pending" />
      <div v-else>
        <post-item v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
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
      "https://timbeckett-writing.com/wp-json/wp/v2/posts"
    );
    this.posts = posts;
  }
};
</script>

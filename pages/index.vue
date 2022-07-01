<template>
  <div class="container">
    <div>
      <h1 class="title">Home Page</h1>
      <Loader v-if="$fetchState.pending" />
      <div v-else>
        <post-item v-for="post in posts" 
        :post="post" 
        :key="post.id" 
        :id="post.slug" 
        :slug="post.slug"
        :title="post.title" 
        :thumbnail="post.fimg_url" 
        />
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
  // store isn't working - not sure what I'm missing. 
  // computed: {
  //   loadedPosts() {
  //     return this.$store.getters.loadedPosts
  //   }
  // }
  data() {
    return {
      //loadedPosts: []
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

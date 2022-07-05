<template>
  <div class="home-page">
    <h2 class="home-page__title">
      Welcome</h2>
    <article class="home-page__content">
      <p>I write mostly fiction, published here and there. Currently working on a novel, tentatively title 'Crossings'
        set in
        northern Canada, where I grew up.</p>
      <p>I also write occasional journalism, and maintained two blogs in the late '00s and early 10's. I recently
        started blogging about technology at <a href="https://tim-beckett/blog">on my tech portfolio.</a></p>
      <p>I currently live in Brooklyn, NY with my wife and our cats.</p>
    </article>
    <div class="home-page-container">
      <Loader v-if="$fetchState.pending" />
      <section class="home-page__articles" v-else>
        <post-item v-for="post in posts" :post="post" :key="post.id" :id="post.slug" :slug="post.slug"
          :title="post.title" :thumbnail="post.fimg_url" />
      </section>
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

<template>
  <div class="post-item">

    <h3>
      <nuxt-link :to="postLink">
        <p v-html="post.title.rendered"></p>
      </nuxt-link>
    </h3>
    <div class="the-excerpt" v-html="post.excerpt.rendered"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      default: () => { }
    }
  },
  computed: {
    postLink() {
      // QUESTION - is it going to be possible to store everything under proper '/category/post' slug, or should I just make the slug the name, with no category? 
      // Maybe a seperate call for the category, which is then appelled to the url below? 
      return '/fiction/' + this.slug
    }
  }
};
</script>

<template>
  <article class="blog-item">
    <!-- Need to put in an 'if' statement to check if 
    // thumbnail exists. -->
    <img v-bind:src="post.fimg_url" v-bind:alt="post.title.rendered">

    <div class="blog-item__sidebar">
      <h3 class="blog-item__title">
        <nuxt-link :to="postLink">
          <span v-html="post.title.rendered"></span>
        </nuxt-link>
      </h3>
      <div class="blog-item__excerpt" v-html="post.excerpt.rendered"></div>
    </div>
  </article>
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
      return '/blog/' + this.slug
    }
  }
};
</script>

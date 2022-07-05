<template>
  <div class="places-item">
    <!-- Need to put in an 'if' statement to check if 
    // thumbnail exists. -->
    <img v-bind:src="post.fimg_url" v-bind:alt="post.title.rendered" class="places-item__featured-image">

    <h3 class="places-item__title">
      <nuxt-link :to="placesLink">
        <span v-html="post.title.rendered"></span>
      </nuxt-link>
    </h3>
    <div class="places-tem__excerpt" v-html="post.excerpt.rendered"></div>
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
    placesLink() {
      // QUESTION - is it going to be possible to store everything under proper '/category/post' slug, or should I just make the slug the name, with no category? 
      // Maybe a seperate call for the category, which is then appelled to the url below? 
      return '/places/' + this.slug
    }
  }
};
</script>

<template>
  <div class="post-item">
    
    <h3>
      <nuxt-link :to="postLink">
        {{ post.title.rendered }}
      </nuxt-link>
    </h3>
    <div class="the-excerpt" v-html="post.excerpt.rendered"></div>
    <h5>Post id: #{{ post.id }}:</h5>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }, 
  computed: {
    postLink() {
      return '/posts/' + this.slug
    }
  }
};
</script>

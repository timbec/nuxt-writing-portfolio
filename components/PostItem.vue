<template>
  <div class="post-item">
    <h3>{{ post.title.rendered }}</h3>
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
  }
};
</script>

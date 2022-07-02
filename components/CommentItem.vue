<template>
  <div class="post-item">
    <!-- Need to put in an 'if' statement to check if 
    // thumbnail exists. -->

    <h3>
      <p v-html="comment.title.rendered"></p>
    </h3>
    <div class="the-excerpt" v-html="comment.content.rendered"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    comment: {
      type: Object,
      default: () => { }
    }
  }
};
</script>

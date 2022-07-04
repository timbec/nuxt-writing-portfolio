<template>
    <div>
        <div class="single-post-page">
            <section class="post">
                <h1 class="post__title" v-html="loadedPost[0].title.rendered"></h1>
                <div class="post__details post__date">
                    Last updated on {{ loadedPost[0].date || date }}
                </div>
                <div class="post__content">
                    <div v-html="loadedPost[0].content.rendered"></div>

                </div>
            </section>
            <section v-if="postComments.length > 0">
                <article class="post__comment">
                    <h4 class="post__comment-length">{{ postComments.length }} comments</h4>
                    <h2 class="post__comment-title">Comments</h2>
                    <div v-for="comment in postComments">
                        <!-- {{ comment }} -->
                        <p v-html="comment.content.rendered"></p>
                    </div>
                </article>
            </section>

            <!-- <div>
                <comment-item v-for="comment in postComments" :key="comment.id" :comment="comment" />
            </div> -->
        </div>
    </div>
</template>


<script>
import axios from "axios";
import CommentItem from "@/components/CommentItem";
import Loader from "@/components/Loader";

export default {
    data() {
        return {
            post: {},
            postComments: []
        };
    },

    async asyncData(context) {

        let { data: loadedPost } = await axios.get("https://timbeckett-writing.com/wp-json/wp/v2/posts?slug=" + context.params.id);

        let { data: postComments } = await axios.get("https://timbeckett-writing.com/wp-json/wp/v2/comments?post=" + loadedPost[0].id);

        return {
            loadedPost,
            postComments
        }
    }
}
</script>
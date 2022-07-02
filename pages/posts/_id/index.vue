<template>
    <div>
        <h1>{{ loadedPost[0].title.rendered }}</h1>
        {{ postComments.length }}
        <div>
            <h1 class="title">Comments</h1>
            <div v-for="comment in postComments">
                <!-- {{ comment }} -->
                <p v-html="comment.content.rendered"></p>
            </div>
        </div>

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
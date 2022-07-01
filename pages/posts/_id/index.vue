<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title" v-html="loadedPost.title.rendered"></h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ loadedPost.date }}</div>
            </div>
            <div class="post-content">
                <div v-html="loadedPost.content.rendered"></div>

            </div>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to <a
                    href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
        </section>
    </div>
</template>


<script>
import axios from 'axios';

export default {

    asyncData(context) {
        return axios.get("https://timbeckett-writing.com/wp-json/wp/v2/posts?slug=" + context.params.id)
            .then(res => {
                console.log(res.data[0]);
                return {
                    loadedPost: res.data[0]
                }
            })
            .catch(e => context.error(e))
    }
}
</script>
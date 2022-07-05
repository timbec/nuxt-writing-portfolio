<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title" v-html="loadedPlace.title.rendered"></h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ loadedPlace.date }}</div>
            </div>
            <div class="post-content">
                <div v-html="loadedPlace.content.rendered"></div>

            </div>
        </section>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    asyncData(context) {
        return axios.get("https://uraniumcity-history.com/wp-json/wp/v2/places?slug=" + context.params.id)
            .then(res => {
                // console.log(res.data[0]);
                return {
                    loadedPlace: res.data[0]
                }
            })
            .catch(e => context.error(e))
    }
}
</script>
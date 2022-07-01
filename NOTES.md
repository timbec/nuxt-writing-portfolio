General Notes

- Discover I like Vue much more than React. Why? Less complicated. React always feels over-engineered. Next.js is okay but even there you soon run into headaches that are difficult to resolve. Error messaging in Vue.js, for example, is much more clear and easier to understand. 

To start - just have posts load in sequence on front page. Then have individual pages for each category. 

then design home page. 

IMPORTANT - how to fix that bug in Vue where it won't load until page is reloaded - a way around this, but can't remember it. 

For featured images, add: 

https://github.com/dalenguyen/wordpress-snippets/blob/master/src/get_featured_image_from_rest_api.php

in functions.php

then, in vue templates, pass in featured image to the child component as: 
`thumbnail:post.fimg_url`, then: 
`<img v-bind:src="post.fimg_url" alt="">`

can use `post.title` in alt tag, but be better to pull out the actual alt tag - might have to alter the output in functions.php to get all the thumbnail-image metadata. 
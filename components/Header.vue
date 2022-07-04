<template>
  <header class="site-header">

    <div class="site-header__title-container">
      <h1 class="site-header__title">
        <nuxt-link to="/">
          Tim Beckett
        </nuxt-link>
      </h1>
      <h4 class="site-header__sub-title">
        Writing Portfolio
      </h4>
    </div>

    <!-- <div class="site-header__logos">
      <svg height="300" width="400" class="triangle">
        <polygon points="250,60 100,400 400,400"
          style="fill: #c6372c;stroke:#c6372c;fill-opacity:1;stroke-opacity:0.9" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="200" height="200" class="black-square">
        <rect x="50" y="20" width="150" height="150"
          style="fill:#09012d;stroke:#09012d;fill-opacity:1;stroke-opacity:0.9" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg width="200" height="200" class="red-square">
        <rect x="50" y="20" width="150" height="150"
          style="fill:#c6372c;stroke:#c6372c;fill-opacity:1;stroke-opacity:0.9" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div> -->

    <nav class="site-header__navigation">
      <ul class="site-header__navigation--menu">
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/fiction">Fiction</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blogs">Blogs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/places">Places</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

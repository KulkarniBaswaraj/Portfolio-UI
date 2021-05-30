<template>
  <div>
    <section
      class="page-hero"
      style='background-image: url("/static/img/bg_hiking.6a2f16e.jpg");'
    >
      <div class="page-hero__overlay"></div>
      <h1><span>About</span></h1>
    </section>
    <div class="container">
      <h2>About Me</h2>
      <div class="image-right">
        <figure>
          <img
            src="/static/img/movie_time.jpg"
            alt="Kulkarni Baswaraj"
            style="max-width: 200px; cursor: pointer;"
          />
          <figcaption>
            Me,cousin and sister @theater!
          </figcaption>
        </figure>
      </div>
      <p>
        My name is <strong>Kulkarni Baswaraj</strong>, I’m a Senior Frontend Developer
        currently working in Wipro Limited, Hyderabad! I've spent
        the last {{this.getTotalExp()}} years as a professional web developer where I specialize in
        transforming beautiful designs into full-fledged interactive web
        applications for various clients all around the world.
      </p>
      <p>
        My job involves doing what I love,
        <strong>developing</strong> new websites and applications. I absolutely
        love learning new things and taking on new challenges. A more detailed
        look at my professional capabilities and experience is available in my
        <a href="#/experience" class="">Experience </a> page
      </p>

      <div class="h-text-center">
        <blockquote>
          <span
            >"Success consists of going from failure to failure without loss of
            enthusiasm."</span
          >
          <em>—Winston Churchill</em>
        </blockquote>
        <p>★ ★ ★ ★ ★</p>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "../../_utils/mixins";

export default {
  mixins: [mixins],

};
</script>

<style></style>

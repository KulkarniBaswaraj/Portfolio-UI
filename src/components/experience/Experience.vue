<template>
  <div data-v-385a8c25="" data-v-50076768="">
    <section
      data-v-400f85ac=""
      data-v-385a8c25=""
      class="page-hero"
      style='background-image: url("/static/img/skills_tech.jpg");'
    >
      <div data-v-400f85ac="" class="page-hero__overlay"></div>
      <h1 data-v-400f85ac=""><span data-v-400f85ac="">Experience</span></h1>
    </section>
    <div class="container" id="d-pdf">
      <div v-for="(data, i_index) in getExpData" :key="i_index">
        <h3>{{ data.heading }}</h3>
        <ul class="points">
          <li v-for="(points, j_index) in data.keyPoints" :key="j_index">
            <span>
              {{ i_index == 0 && j_index == 0 ? getTotalExp() : "" }} {{ points }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import mixins from "../../_utils/mixins";

export default {
  mixins: [mixins],
  computed: {
    ...mapState({
      _expData: (state) => state.expData,
    }),
    ...mapGetters("userModule", ["getExpData"]),
  },
  data() {
    return {
      bullets: [
        {
          name: "Fast",
          desc:
            "Fast load times and lag free interaction, my highest priority.",
          className: "mdi mdi-speedometer",
        },
        {
          name: "Responsive",
          desc: "My layouts will work on any device, big or small.",
          className: "mdi mdi-cellphone-link",
        },
        {
          name: "Intuitive",
          desc: "Strong preference for easy to use, intuitive UX/UI.",
          className: "mdi mdi-lightbulb-outline",
        },
        {
          name: "Dynamic",
          desc:
            "Websites do not have to be static, I love making pages come to life.",
          className: "mdi mdi-rocket",
        },
      ],
      technologies: [
        {
          name: "HTML",
          percentage: "95%",
        },
        {
          name: "CSS",
          percentage: "95%",
        },
        {
          name: "Bootstrap",
          percentage: "90%",
        },
        {
          name: "JavaScript",
          percentage: "85%",
        },
        {
          name: "Angular",
          percentage: "85%",
        },
        {
          name: "VueJS",
          percentage: "85%",
        },
        {
          name: "UI design",
          percentage: "90%",
        },
        {
          name: "JQuery",
          percentage: "80%",
        },
        {
          name: "Git Hub",
          percentage: "80%",
        },
      ],
      expData: [],
    };
  },
  methods: {
    async loadData() {
      await this.$store.dispatch("userModule/fetchExpData");
    }
  },
  created() {
    this.loadData();
    this.getTotalExp();
  },
};
</script>

<style scoped>
ul {
  padding-left: 25px;
}
.points li {
  list-style-type: disc !important;
  margin-bottom: 5px;
}
</style>

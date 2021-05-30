<template>
  <div data-v-385a8c25="" data-v-50076768="">
    <section
      data-v-400f85ac=""
      data-v-385a8c25=""
      class="page-hero"
      style='background-image: url("/static/img/skills_tech.jpg");'
    >
      <div data-v-400f85ac="" class="page-hero__overlay"></div>
      <h1 data-v-400f85ac=""><span data-v-400f85ac="">Skills</span></h1>
    </section>
    <div class="container">
      <div class="web-technologies-wrapper">
        <h3>Web Technologies</h3>
      </div>
      <div class="web-tech-list-wrapper">
        <div
          v-for="(tech, index) in technologies"
          :key="index"
          class="web-tech-list"
        >
          <div class="technology-bar">
            <div>{{ tech.name }}</div>
            <div :style="{ width: tech.percentage }"></div>
            <div> {{ tech.percentage }} </div>
          </div>
        </div>
      </div>
      <div class="bullet-main-wrapper">
        <div
          class="flex bullet-wrap"
          v-for="(bullet, index) in bullets"
          :key="index"
        >
          <div
            class="hex-wrap waypoint animated flip-in-x"
            data-animation="flip-in-x"
          >
            <div class="hexagon">
              <i :class="bullet.className"></i>
            </div>
          </div>
          <div class="waypoint animated fade-in" data-animation="fade-in">
            <div class="label bold">{{ bullet.name }}</div>
            <div>
              {{ bullet.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          name: "TypeScript",
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
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.bullet-main-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
}
.bullet-wrap {
  padding: 0 10px;
}
.hex-wrap {
  height: 100px;
  width: 100px;
  position: relative;
  margin: auto;
}
.hexagon {
  background-color: #293558;
  display: inline-block;
  height: 100%;
  width: calc(100% * 0.57735);
}
.hexagon::before {
  background-color: inherit;
  content: "";
  height: inherit;
  position: absolute;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  top: 0;
  transform: rotateZ(60deg);
  width: inherit;
}
.hexagon::after {
  background-color: inherit;
  content: "";
  height: inherit;
  position: absolute;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  top: 0;
  transform: rotateZ(-60deg);
  width: inherit;
}
.label.bold {
  margin: 14px 0 0px 0;
  font-size: 21px;
  font-weight: 600;
}
.hexagon .mdi {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  font-size: 43px;
  color: white;
}
.web-technologies-wrapper {
  margin: 0px;
  margin-bottom: 10px;
}
.web-tech-list-wrapper {
  margin-bottom: 50px;
  max-width: 750px;
  width: 90%;
}
.technology-bar {
  position: relative;
  background: lightgray;
  height: 30px;
  margin-bottom: 15px;
}
.technology-bar div:nth-child(1) {
  position: absolute;
  z-index: 9;
  background: #993e43;
  height: 100%;
  padding: 0px 10px;
  min-width: 125px;
  text-align: center;
  color: white;
  font-size: 15px;
}
.technology-bar div:nth-child(2) {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  background: #6f1217;
}
.technology-bar div:nth-child(3) {
      position: absolute;
    top: 0px;
    right: -30px;
    height: 100%;
    background: transparent;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
}
</style>

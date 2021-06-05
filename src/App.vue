<template>
  <div id="app">
    <div class="app-wrapper">
      <app-aside class="app-sidebar"> </app-aside>
      <div class="app-content">
    <router-view />
      </div>
    </div>
    <app-loader v-if="isLoading"></app-loader>
  </div>
</template>
<script>
import Vue from 'vue';
import Bus from "./_utils/eventbus";
import Loader from "./components/common/Loader";
import Aside from "./components/common/Aside";
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate)

export default {
  components: {
    "app-loader": Loader,
    "app-aside": Aside
  },
  data() {
    return {
      refCount: 0,
      isLoading: false
    };
  },
  methods: {
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = this.refCount > 0;
      }
    },
    
  },
  mounted() {
    Bus.$on("isLoading", bool => {
      this.setLoading(bool);
    });
  },
  beforeDestroy() {
    Bus.$off("isLoading");
  }
};
</script>
<style>
@import "assets/styles/main.css";
@import "assets/styles/custom.css";
@import "assets/styles/responsive.css";
@import "assets/styles/theme.css";

/* @import "assets/styles/theme.css"; */
</style>

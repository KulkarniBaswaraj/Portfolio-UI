<template>
  <div class="app-sidebar__container">
    <div class="app-sidebar__content">
      <div class="app-sidebar__header">
        <div class="header__left">
          <div class="logo-wrapper">
            <span class="logo"></span>
          </div>
          <div class="profile">
            <h2>Kulkarni Baswaraj</h2>
            <p>Sr. Frontend Developer</p>
          </div>
        </div>
        <div class="mobile-menu" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM21 17H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="nav-links-list">
        <nav class="app-sidebar__nav">
          <ul>
            <li>
              <router-link :to="{ path: 'home' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <path d="M9 22V12h6v10"></path>
                </svg>
                <span>Home</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ path: 'about' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>About</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ path: 'skills' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-box"
                >
                  <path
                    d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"
                  ></path>
                  <path d="M2.32 6.16L12 11l9.68-4.84M12 22.76V11"></path>
                </svg>
                <span>Skills</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ path: 'experience' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-book-open"
                >
                  <path
                    d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                  ></path>
                </svg>
                <span>Experience</span></router-link
              >
            </li>
            <li>
              <router-link :to="{ path: 'contact' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
                <span>Contact</span></router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="app-sidebar__footer">
      <ul>
        <li>
          <a href="https://www.twitter.com/k_baswaraj" target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-twitter"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kulkarni-baswaraj-128333163"
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2"></circle></svg
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/kulkarnibaswaraj" target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5"
              ></path></svg
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      refCount: 0,
      isLoading: false,
    };
  },
  methods: {
    toggleMenu() {
      const menuList = document.getElementsByClassName(
        "app-sidebar__content"
      )[0];
      if (!menuList.classList.contains("active")) {
        menuList.classList.add("active");
      } else {
        menuList.classList.remove("active");
      }
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped>
.app-sidebar__footer a,
  a {
    color: #d69fa2;
  }

  .app-sidebar__footer a:hover {
    color:white;
  }

</style>

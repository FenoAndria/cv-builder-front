<template>
  <nav
    class="
      relative
      w-full
      flex
      items-center
      justify-center
      py-4
      bg-white
      font-semibold
      text-maroon
      hover:text-orange
      focus:text-orange
      shadow-md
      navbar navbar-expand-lg navbar-light
    "
  >
    <div
      class="
        container-fluid
        w-full
        flex flex-wrap
        items-center
        justify-between
        px-6
      "
    >
      <button
        class="
          navbar-toggler
          text-gray-500
          border-0
          hover:shadow-none
          hover:no-underline
          py-2
          px-2.5
          bg-transparent
          focus:outline-none
          focus:ring-0
          focus:shadow-none
          focus:no-underline
        "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        class="collapse navbar-collapse flex-grow items-center"
        id="navbarSupportedContent"
      >
        <a
          class="
            flex
            items-center
            text-orange
            hover:text-orange
            focus:text-orange
            mt-2
            lg:mt-0
            mr-1
          "
          href="#"
        >
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            style="height: 15px"
            alt=""
            loading="lazy"
          />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2" v-for="link in links">
            <router-link
              active-class="nav-link-active"
              :to="{ name: link.name, params: link.params }"
              :class="'nav-link text-maroon hover:text-orange focus:text-orange p-0 '"
              >{{ link.title }}
            </router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="flex items-center relative">
        <div class="dropdown relative">
          <a
            class="dropdown-toggle flex items-center hidden-arrow"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person text-2xl"></i>
          </a>
          <ul
            class="
              dropdown-menu
              min-w-max
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              py-2
              list-none
              text-left
              rounded-lg
              shadow-lg
              mt-1
              m-0
              bg-clip-padding
              border-none
              left-auto
              right-0
            "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-orange
                  hover:bg-martext-maroon
                "
                href="#"
                >Action</a
              >
            </li>
            <li>
              <a
                class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-orange
                  hover:bg-martext-maroon
                "
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-orange
                  hover:bg-martext-maroon
                "
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { title: "VOIR", name: "Voir", params: { id: 1 } },
        { title: "A Propos", name: "profil" },
        { title: "Exp??riences", name: "experiences" },
        { title: "Formations", name: "formations" },
        { title: "Comp??tences", name: "competences" },
        { title: "Langues", name: "langues" },
        { title: "Autres", name: "autres" },
      ],
      active: "",
    };
  },
  mounted() {},
};
</script>

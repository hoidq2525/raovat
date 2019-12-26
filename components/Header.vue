<template>
  <header class="header">
    <div class="header__main">
      <div class="container">
        <div class="inner--header">
          <h1 class="logo">
            <a href>
              <img src="/img/logo/logo%201.png" alt />
            </a>
          </h1>
          <nav class="row py-2">
            <div class="col-12 d-flex justify-content-between align-items-center">
              <ul class="header__nav">
                <li class="current">
                  <a href data-hover="Nhà đất">Nhà đất</a>
                </li>
                <li>
                  <a href>Xe</a>
                </li>
                <li>
                  <a href>Việc làm</a>
                </li>
                <li>
                  <a href>Học hành</a>
                </li>
                <li>
                  <a href>Sản phẩm - Dịch vụ</a>
                </li>
                <li>
                  <a href>Khác</a>
                </li>
                <li>
                  <a class="btn-search" v-html="spanhtml"></a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="header__account">
            <div id="status-user" v-if="$store.state.auth">
              <NuxtLink to="/user">
                <span>{{$store.state.auth.full_name}}</span>
              </NuxtLink> /
              <span v-on:click="logout">Thoát</span>
            </div>
            <div v-else>
              <span data-toggle="modal" data-target="#signInModal">Đăng ký</span> /
              <span data-toggle="modal" data-target="#accountModal">Đăng nhập</span>
            </div>
            <a class="btn-sell" href="#">Đăng bán</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;
import { mapState } from "vuex";
import { setCookie, getCookie } from "../common/helper";
import { slateblue } from "color-name";
export default {
  middleware: "notAuthenticated",
  data() {
    return {
      Islogin: false,
      username: "",
      spanhtml: '<span class="icon">&#61788</span>'
    };
  },
  methods: {
    logout() {
      Cookie.remove("auth");
      this.$store.commit("SetAuth", null);
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["islogin", "user"])
  }
};
</script>

<style>
</style>
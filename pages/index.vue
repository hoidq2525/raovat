<template>
  <div>
    <div class="banner text-center">
      <div class="banner__img">
        <img src="/img/cover.png" alt />
      </div>
      <h2>Bạn muốn mua gì? {{findkeyword}}</h2>
      <div class="header__search text-center">
        <input
          v-model="findkeyword"
          placeholder="Tìm kiếm nhà đất,xe cộ, ..."
          type="search"
          aria-label
        />
        <span class="header__search__btn"></span>
        <a class="icon-search"></a>
      </div>
    </div>
    <main>
      <div class="container main">
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import siteConfig from "./../common/siteConfig";
import { isEmptyObj } from "../common/helper";

export default {
  data() {
    return {
      findkeyword: "0"
    };
  },
  watch: {
    findkeyword: function(val) {
      this.findkeyword = val;
      this.FindValue(val);
    }
  },
  methods: {
    async FindValue(q) {
      //  var config = {
      //     headers: { 'access-control-allow-credentials': true,
      //     'access-control-allow-headers':'Content-Type,Authorization,X-Requested-With,X-CSRFToken,If-None-Match-,X-API-SOURCE',
      //     'access-control-allow-methods':'POST,GET,OPTIONS,PUT,DELETE',
      //     'access-control-allow-origin':'https://banhang.shopee.vn'}
      //   };
      //   const { data } = await axios.get(`https://shopee.vn/api/v2/shop/get?username=${q}`);
      //   console.log(data)
      //   return data;
    }
  },
  head: {
    title: "Báo Chí - Tạp Chí - Đọc Báo - Tuổi Trẻ Cuối Tuần - TTO",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Tuần báo của Tuổi Trẻ - Cập nhật tin tức nhanh &amp; mới nhất về văn hóa, giải trí, nghệ thuật và các vấn đề, sự kiện đang diễn ra trong tuần."
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Báo Chí - Tạp Chí - Đọc Báo - Tuổi Trẻ Cuối Tuần - TTO"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: ""
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "baseUrl"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Tuần báo của Tuổi Trẻ - Cập nhật tin tức nhanh &amp; mới nhất về văn hóa, giải trí, nghệ thuật và các vấn đề, sự kiện đang diễn ra trong tuần."
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "article"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "55555"
      }
    ]
  },
  components: {}
};
</script>

<style>
</style>
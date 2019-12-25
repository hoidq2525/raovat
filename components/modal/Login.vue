<template>
  <div
    v-show="IsShow"
    class="modal fade"
    id="accountModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <span class="modal__close" data-dismiss="modal">&times;</span>
        <div class="modal-body">
          <h4 class="text-center">Đăng Nhập</h4>
          <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
              <input
                v-model="email"
                aria-label
                type="text"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <label class="err">{{errEmail}}</label>
            <div class="form-group">
              <input
                v-model="password"
                aria-label
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
              />
            </div>
            <label class="err">{{errPassword}}</label>
            <div class="form-group pt-3 text-right">
              <a
                href="#"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#forgetPassModal"
              >Quên mật khẩu ?</a>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn--red btn--full">Đăng nhập</button>
            </div>
            <span class="text-center d-block">Hoặc</span>
            <div class="outer-dk my-2">
              <a v-on:click="LoginFB" class="btn btn--full btn--facebook">
                <i class="icon-facebook"></i>Đăng nhập bằng facebook
              </a>
            </div>
            <div class="outer-dk">
              <button class="btn btn--full btn--facebook">
                <i class="icon-google"></i>Đăng nhập bằng google
              </button>
            </div>
            <p class="text-center s-text mt-3">
              Tiếp tục đăng nhập là bạn đã đồng ý với
              <a href="#">điều khoản của RaoVat</a>
            </p>
          </form>
          <a
            class="text-center pt-4 d-block"
            href="#"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#signInModal"
          >Chưa có tài khoản ? Đăng ký ở đây!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import axios from "axios";
import { mapState } from "vuex";
import { ValidateEmail, ValidateField } from "@/common/helper";
export default {
  data() {
    return {
      IsShow: true,
      email: "",
      errEmail: "",
      password: "",
      errPassword: ""
    };
  },
  methods: {
    LoginFB(e) {
      var bt = this;
      FB.login(
        function(response) {
          if (response.authResponse) {
            FB.api("/me", function(response) {
              console.log(response);
              bt.$store.dispatch("Call_Login", response.name);
            });
          }
        },
        { scope: "email,user_likes" } //! yêu cầu quyền khi login
      );
      this.IsShow = false;
      $(".modal-backdrop").removeClass("modal-backdrop fade show");
    },
    async handleSubmit(e) {
      let auth = this;
      this.errEmail = ValidateEmail(this.email, 8);
      this.errPassword = ValidateField(this.password, 8);
      if (this.errEmail == "" && this.errPassword == "") {
        
        setTimeout(() => {
          // we simulate the async request with timeout.
          const auth = {
            accessToken: "someStringGotFromApiServiceWithAjax",
            username: this.email.replace(/(@gmail.com)/gm, ``)
          };
          this.$store.commit("SetAuth", auth); // mutating to store for client rendering
          Cookie.set("auth", auth); // saving token in cookie for server rendering
          this.$router.push("/");
        }, 1000);

        this.IsShow = false;
        $(".modal-backdrop").removeClass("modal-backdrop fade show");
      }
    }
  },
  watch: {
    email: function(val) {
      this.errEmail = ValidateEmail(val);
    },
    password: function(val) {
      this.errPassword = ValidateField(val, 8);
    }
  },
  components: {}
};
</script>

<style>
.err {
  color: red;
}
</style>
<template>
  <form>
            <div class="form-group">
              <input aria-label type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group">
              <input aria-label type="password" class="form-control" placeholder="Mật khẩu" />
            </div>
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
</template>

<script>
  import validations from "@/utils/validations";

  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          name: '',
          email: '',
          password: ''
        },
        ...validations
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
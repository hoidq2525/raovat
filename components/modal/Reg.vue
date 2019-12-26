<template>
  <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <span class="modal__close" data-dismiss="modal">&times;</span>
        <div class="modal-body">
          <h4 class="text-center">Đăng Ký</h4>
          <form v-on:submit.prevent="handRegis">
            <div class="form-group justify-content-start">
              <div class="pretty p-default p-round p-fill mr-5">
                <input aria-label type="radio" name="type-account" />
                <div class="state">
                  <label>Cá nhân</label>
                </div>
              </div>
              <div class="pretty p-default p-round p-fill">
                <input aria-label type="radio" name="type-account" />
                <div class="state">
                  <label>Doanh nghiệp</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                v-model="email"
                aria-label
                type="email"
                class="form-control"
                placeholder="Email (*)"
              />
            </div>
            <div class="form-group">
              <input
                v-model="phone"
                aria-label
                type="tel"
                class="form-control"
                placeholder="Số điện thoại (*)"
              />
            </div>
            <div class="form-group">
              <input
                v-model="password"
                aria-label
                type="password"
                class="form-control"
                placeholder="Mật khẩu (*)"
              />
            </div>
            <div class="form-group">
              <input
                v-model="rePassword"
                aria-label
                type="password"
                class="form-control"
                placeholder="Nhập lại mật khẩu (*)"
              />
            </div>
            <label class="s-label text--bold">Thông tin cá nhân</label>
            <div class="form-group">
              <input
                v-model="fullname"
                aria-label
                type="text"
                class="form-control"
                placeholder="Tên đầy đủ"
              />
            </div>
            <div class="form-group">
              <select class="form-control">
                <option>Giới tính</option>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Năm sinh dd/mm/yyyy" />
            </div>
            <div class="form-group">
              <input
                v-model="website"
                aria-label
                type="text"
                class="form-control"
                placeholder="Website"
              />
            </div>
            <label class="s-label">(*) là thông tin bắt buộc</label>
            <div class="outer-dk py-3">
              <button type="submit" class="btn btn--red btn--full">Đăng ký</button>
            </div>
          </form>
          <p class="s-text">
            Tiếp tục đăng ký đồng nghĩa với việc bạn đã đồng ý với
            <a href="#">điều khoản sử dụng</a> và
            <a href="#">chính sách bảo mật của RaoVat</a>
          </p>
          <a
            class="text-center pt-4 d-block"
            href="#"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#accountModal"
          >Đã có tài khoản? Đăng nhập ngay!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      fullname: "",
      gender: "",
      birth_timestamp: "",
      website: "",
      address: ""
    };
  },
  methods: {
    async handRegis(e) {
      let info = {
        app_id: 15,
        email: "giang.nam1401@gmail.com",
        password: 123456,
        rePassword: 12456,
        phone: 123456,
        fullname: "",
        gender: 1,
        birth_timestamp: 11111,
        website: "https://member.tuoitre.vn/v1/member/register",
        address: "HCM"
      };
      const { data } = await axios.post(
        "https://member.tuoitre.vn/v1/member/register",
        info
      );
      if (data.success) {
        console.log(data.message); //Đăng kí thành công. Bạn cần kiểm tra email để kích hoạt tài khoản.
      } else {
        data.data.map((v, k) => {
          switch (v) {
            case "duplicate_email":
              console.log("email da ton tai");
              break;
            case "invalid_rePassword":
              console.log("mat khau nhap vao khong khop");
              break;
            case "fullname không được để trống.":
              console.log("fullname không được để trống");
              break;
            case "password không được để trống.":
              console.log("email da ton tai");
              break;
            case "rePassword không được để trống.":
              console.log("email da ton tai");
              break;
            default:
              break;
          }
        });
      }
    }
  }
};
</script>

<style>
</style>
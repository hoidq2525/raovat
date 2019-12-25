<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <div class="footer__top__left">
              <a href>
                <img src="/img/logo/logo%201.png" alt />
              </a>
            </div>
            <div class="footer__top__right">
              <!--                        <span>NHẬN MAIL</span>-->
              <!--                        <form class="footer__email">-->
              <!--                            <input aria-label="" type="text">-->
              <!--                            <button type="submit">Đăng kí</button>-->
              <!--                        </form>-->
              <ul>
                <li>
                  <a href>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href>
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__main">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <h6>Chăm sóc khách hàng</h6>
            <ul>
              <li>
                <a href>trung tâm trợ giúp</a>
              </li>
              <li>
                <a href>hướng dẫn mua điểm</a>
              </li>
              <li>
                <a href>các câu trả lời thường gặp</a>
              </li>
              <li>
                <a href>bảng giá</a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h6>Về chúng tôi</h6>
            <ul>
              <li>
                <a href>Giới thiệu</a>
              </li>
              <li>
                <a href>Chính sách bảo mật thanh toán</a>
              </li>
              <li>
                <a href>Chính sách bảo mật thông tin cá nhân</a>
              </li>
              <li>
                <a href>Điều khoản sử dụng</a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h6>Phương thức thanh toán</h6>
            <a class="footer__trade">
              <img src="/img/trade/image6.png" alt />
            </a>
            <a class="footer__trade">
              <img src="/img/trade/image4.png" alt />
            </a>
            <a class="footer__trade">
              <img src="/img/trade/image1.png" alt />
            </a>
            <a class="footer__trade">
              <img src="/img/trade/image2.png" alt />
            </a>
            <a class="footer__trade">
              <img src="/img/trade/image3.png" alt />
            </a>
            <a class="footer__trade">
              <img src="/img/trade/image5.png" alt />
            </a>
          </div>
          <div class="col-3">
            <h6>Chứng nhận</h6>
            <ul>
              <li class="p-0">
                <img src="/img/logo/congthuong.png" alt />
              </li>
              <li class="p-0">
                <img src="/img/logo/congthuong2.png" alt />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom p-3 text-center">
      <p class="m-0">Địa chỉ: 60A Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh.</p>
      <p class="m-0">Hỗ trợ : 39974848 - 38440928 - 38440213 - Email: abc@truyenthong.com.vn.</p>
      <p class="m-0">© 2019 - Trung tâm truyền thông quảng cáo báo Tuổi Trẻ</p>
    </div>
    <div class="btn--to-top">
      <i class="fas fa-chevron-up"></i>
    </div>
        <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v5.0&appId=290947458129936&autoLogAppEvents=1"></script>
    <script src="/vendor/jquery/jquery.min.js"></script>
    <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="/vendor/select2-develop/dist/js/select2.min.js"></script>
    <script src="/js/start.js"></script>
      <Modal/>
  </footer>

</template>

<script>
import Modal from "~/components/modal/popup.vue";
export default {
  data() {
    return {};
  },
  methods: {
    createAElement() {
      return '<span class="icon">&#61736</span>';
    }
  },
  components:{
    Modal
  }
};
</script>

<style>
</style>
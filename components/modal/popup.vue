<template>
  <div>
      <!-- Modal -->
<Account/>
<div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <span class="modal__close" data-dismiss="modal">
                    &times;
                </span>
            <div class="modal-body">
                <h4 class="text-center">Đăng Ký</h4>
                <form>
                    <div class="form-group justify-content-start">
                        <div class="pretty p-default p-round p-fill mr-5"><input aria-label="" type="radio" name="type-account">
                            <div class="state"><label>Cá nhân</label></div>
                        </div>
                        <div class="pretty p-default p-round p-fill"><input aria-label="" type="radio" name="type-account">
                            <div class="state"><label>Doanh nghiệp</label></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="email" class="form-control" placeholder="Email (*)">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="tel" class="form-control" placeholder="Số điện thoại (*)">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Mật khẩu (*)">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Nhập lại mật khẩu (*)">
                    </div>
                    <label class="s-label text--bold">Thông tin cá nhân</label>
                    <div class="form-group">
                        <input aria-label="" type="text" class="form-control" placeholder="Tên đầy đủ">
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>Giới tính</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Năm sinh dd/mm/yyyy">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="text" class="form-control" placeholder="Website">
                    </div>
                    <label class="s-label">(*) là thông tin bắt buộc</label>
                    <div class="outer-dk py-3">
                        <button type="submit" class="btn btn--red btn--full">
                            Đăng ký
                        </button>
                    </div>
                </form>
                <p class="s-text">
                    Tiếp tục đăng ký đồng nghĩa với việc bạn đã đồng ý với
                    <a href="#"> điều khoản sử dụng</a> và <a href="#">chính sách bảo mật của RaoVat</a>
                </p>
                <a class=" text-center pt-4 d-block" href="#" data-dismiss="modal" data-toggle="modal" data-target="#accountModal">Đã có tài khoản? Đăng nhập ngay!</a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="forgetPassModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <span class="modal__close" data-dismiss="modal">
                    &times;
                </span>
            <div class="modal-body text-center">
                <h4>Lấy lại mật khẩu</h4>
                <form>
                    <div class="form-group">
                        <input aria-label="" type="email" class="form-control" placeholder="Nhập email">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn--full btn--red">Lấy lại mật khẩu</button>
                    </div>
                </form>
                <a class="pt-5 d-inline-block" href="#" data-dismiss="modal" data-toggle="modal" data-target="#accountModal">Quay lại đăng nhập</a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <span class="modal__close" data-dismiss="modal">
                    &times;
                </span>
            <div class="modal-body text-center">
                <h4>Cập nhật tin</h4>
                <form>
                    <div class="form-group">
                        <input aria-label="" type="tel" class="form-control" placeholder="Số điện thoại">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Mật khẩu *">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Nhập lại mật khẩu *">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="text" class="form-control" placeholder="Tên đầy đủ">
                    </div>
                    <div class="row pt-3">
                        <div class="col-6 text-right">
                            <button type="submit" class="btn btn--red btn--fixed">
                                Cập nhật
                            </button>
                        </div>
                        <div class="col-6 text-left">
                            <button type="button" class="btn btn--light btn--fixed">
                                Xóa
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="mapPickModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <span class="modal__close" data-dismiss="modal">
                    &times;
                </span>
            <div class="modal-body text-center">
                <h4>Cập nhật tin</h4>
                <form>
                    <div class="form-group">
                        <input aria-label="" type="tel" class="form-control" placeholder="Số điện thoại">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Mật khẩu *">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="password" class="form-control" placeholder="Nhập lại mật khẩu *">
                    </div>
                    <div class="form-group">
                        <input aria-label="" type="text" class="form-control" placeholder="Tên đầy đủ">
                    </div>
                    <div class="row pt-3">
                        <div class="col-6 text-right">
                            <button type="submit" class="btn btn--red btn--fixed">
                                Cập nhật
                            </button>
                        </div>
                        <div class="col-6 text-left">
                            <button type="button" class="btn btn--light btn--fixed">
                                Xóa
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Account from "~/components/modal/Account.vue";
export default {
  components:{
    Account
  }

}
</script>

<style>

</style>
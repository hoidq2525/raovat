<template>
 <div><!-- Modal -->
<Login/>
<Reg/>
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
import Login from "~/components/modal/Login.vue";
import Reg from "~/components/modal/Reg.vue";
export default {
  components:{
    Login,
    Reg
  }

}
</script>

<style>

</style>
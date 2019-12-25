<template>
   <main>
        <div class="container main">
            <div class="row">
                <aside class="aside">
                    <div class="box-normal sticky-top">
                        <div class="aside__user ">
                            <div class="user mb-3">
                                <a class="inner-user" href="">
                                    <i class="icon-gold"></i>
                                    <img src="img/avatar/11%201.png" alt="">
                                </a>
                                <div class="user__info">
                                    <h1 class="user__name">Robert chen</h1>
                                    <span class="level gold">Thành viên vàng</span>
                                    <p><span>100</span> điểm</p>
                                    <p><span>1,000</span> điểm thường</p>
                                </div>
                            </div>
                            <ul>
                                <li class="active"><a href="#"><i class="far fa-user"></i> Thông tin cá nhân</a></li>
                                <li><a href="#"><i class="fab fa-telegram-plane"></i> Thông tin đăng nhập</a></li>
                                <li><a href="#"><i class="fas fa-tasks"></i> Danh sách yêu thích</a></li>
                                <li><a href="#"><i class="far fa-bell"></i> Quản lý tin đăng</a></li>
                                <li><a href="#"><i class="far fa-heart"></i> Thông báo khuyến mãi</a></li>
                                <li><a href="#"><i class="fas fa-shopping-bag"></i> Mua gói điểm</a></li>
                                <li><a href="#"><i class="fas fa-history"></i> Lịch sử giao dịch</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <section class="section">
                    <div class="box">
                        <h1 class="title">Thông tin cá nhân</h1>
                        <div class="container container--inner">
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">
                                        Hình đại diện
                                    </span>
                                </div>
                                <div class="col-8">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">
                                        Tên đăng nhập
                                    </span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="vanlam0201" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Mật khẩu</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="password" value="1234@va" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Email</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="email" value="vanlam@gmail.com" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Họ và tên</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="Văn Lâm Chi" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Số điện thoại</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="password" value="0328710090" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Giới tính</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group justify-content-start" style="line-height: 35px">
                                        <div class="pretty p-default p-round p-fill mr-5"><input aria-label="" type="radio" name="gender" checked disabled>
                                            <div class="state"><label>Nam</label></div>
                                        </div>
                                        <div class="pretty p-default p-round p-fill"><input aria-label="" type="radio" name="gender" disabled>
                                            <div class="state"><label>Nữ</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Ngày / tháng / năm sinh</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group--three">
                                        <div>
                                            <select id="inputCategory" class="input--select form-control" aria-label="" disabled>
                                                <option value="" disabled selected>05</option>
                                                <option value="">Nhà đất</option>
                                                <option value="">Xe</option>
                                                <option value="">Việc làm</option>
                                                <option value="">Học hành</option>
                                                <option value="">Sản phẩm - Dịch vụ</option>
                                                <option value="">Khác</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select class="input--select form-control" aria-label="" disabled>
                                                <option value="" disabled selected>11</option>
                                                <option value="">Nhà đất</option>
                                                <option value="">Xe</option>
                                                <option value="">Việc làm</option>
                                                <option value="">Học hành</option>
                                                <option value="">Sản phẩm - Dịch vụ</option>
                                                <option value="">Khác</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select class="input--select form-control" aria-label="" disabled>
                                                <option value="" disabled selected>1998</option>
                                                <option value="">Nhà đất</option>
                                                <option value="">Xe</option>
                                                <option value="">Việc làm</option>
                                                <option value="">Học hành</option>
                                                <option value="">Sản phẩm - Dịch vụ</option>
                                                <option value="">Khác</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Địa chỉ</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="60A , đường Hoàng Văn Thụ ..." disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Website</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="https://figma.com" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Facebook</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="https://figma.com" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                    <span class="info-type">Skype</span>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <input class="form-control" aria-label="" type="text" value="https://figma.com" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-right">
                                </div>
                                <div class="col-8">
                                    <div class="form-group mt-3">
                                        <button class="btn btn--red mr-3">
                                            Cập nhật thông tin
                                        </button>
                                        <button class="btn btn--darkgray">
                                            Huỷ bỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

<style>

</style>
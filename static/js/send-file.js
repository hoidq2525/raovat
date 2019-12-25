class SendFile{
    constructor(input){
        this.apiSend = '';
        this.appId=15;
        this.input = input.input;
        this.container = $(this.input).parents('[data-container]');
        this.listFile = {};
        this.maxFile = input.maxFile;
        this.maxSize = input.maxSize;
        this.type= input.type.trim().split("|");
        this.formData = $('#form--send');
        this.fileError =this.container.next('.error');
        this.event();
    }

    event(){
        this.eventLoadFile();
        this.eventDeleteFile();
        this.eventSendFile();
    }

    eventLoadFile() {
        $(this.input).siblings(".file-holder").click(()=>{
            $(this.input).click();
        });
        $(this.input).on('change',(e)=>{
            let files = e.currentTarget.files;
            if (files)
                this.saveFile(files);
            $(e.currentTarget).val("");
        });
    }
    eventDeleteFile(){
        $(this.input).parents("[data-container]").on("click",'.file-catcher-close',(e)=>{
            let value = $(e.currentTarget).data('delete');
            $(e.currentTarget).parents('.file-item').remove();
            this.deleteFile(value);
        })
    }
    eventSendFile(){
        // this.formData.submit((e)=>{
        //     e.preventDefault();
        //     let name = $('#form--send input#nameSendNews');
        //     let email = $('#form--send input#emailSendNews');
        //     let checkName =  sendFileHelper.checkName(name);
        //     let checkEmail = sendFileHelper.checkEmail(email);
        //     let checkFile = this.checkCountFile();
        //     if (checkName && checkEmail && checkFile){
        //         let formData = this.getDataToSend(e.currentTarget);
        //         this.sendFile(formData);
        //     }
        // })
    }

    saveFile(files) {
        let list = Object.keys(this.listFile);
        let index = 0;
        if (! list.length){
            index = 0;
        }else {
            index = parseInt(list[list.length -1]) + 1;
        }
        Object.keys(files).forEach(key => {
            if (this.verifyFileType(files[key]) && this.checkMaxFile() && this.checkMaxSize(files[key]))
            {
                this.mapToView(files[key],index);
                this.listFile = {...this.listFile,[index] : files[key]};
                index++;
            }

        });
        console.log(this.listFile)
    }

    mapToView(file,index) {
        let reader = new FileReader();
        let type = file.type.trim().split("/")[0];
        let catcher = $(`<span class="file-item" data-toggle="tooltip" data-placement="bottom" title="${file.name}"><span data-delete="${index}" class="file-catcher-close"></span></span>`);
        reader.onload = function (e) {
            switch (type) {
                case 'image':
                    $(`<img src="${e.target.result}" alt=""/>`).prependTo(catcher);
                    break;
                case 'video':
                    $('<i class="fa fa-file-video"></i>').prependTo(catcher);
                    break;
                case 'application':
                    $('<i class="fa fa-file-archive"></i>').prependTo(catcher);
                    break;
                default :
                    $('<i class="fa fa-file"></i>').prependTo(catcher);
                    break;
            }
        };
        reader.readAsDataURL(file);
        catcher.appendTo(this.container);
        $('[data-toggle="tooltip"]').tooltip();
    }
    checkMaxFile() {
        if (!(Object.keys(this.listFile).length >= this.maxFile)){
            return !(Object.keys(this.listFile).length >= this.maxFile);
        }else {
            this.fileError.text(`File được upload tối đa ${this.maxFile}.`).show();
            setTimeout( ()=> {
                this.fileError.hide();
            },3000);
            return !(Object.keys(this.listFile).length >= this.maxFile);
        }
    }
    verifyFileType(file) {
        let filePath = file.name.trim().split(".");
        let type = filePath[filePath.length - 1];
        if (this.type.includes(type)){
            return this.type.includes(type);
        }else {
            this.fileError.text(`File upload không đúng định dạng . (file được upload phải có đuôi là ${this.type.join(" .")}) `).show();
            setTimeout( ()=> {
                this.fileError.hide();
            },3000);
            return this.type.includes(type);
        }
    }

    deleteFile(value) {
        delete this.listFile[value];
    }

    checkCountFile() {
        if (Object.keys(this.listFile).length === 0){
            this.fileError.text("Vui lòng upload file !").show();
            setTimeout( ()=> {
                this.fileError.hide();
            },3000);
            return false;
        }else {
            this.fileError.hide();
            return true;
        }
    }

    getDataToSend(form) {
        let data = new FormData(form);
        Object.keys(this.listFile).forEach(key =>{
            data.append('files[]' , this.listFile[key],this.listFile[key].name);
        });
        data.append("app_id",this.appId);
        return data;
    }

    sendFile(fd) {
        $.blockUI({
            message: $(`<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`),
            baseZ: 2000
        });
        $.ajax({
            type: 'POST',
            url: this.apiSend,
            cache: false,
            timeout: 10000,
            contentType: false,
            processData: false,
            data : fd,
            success: (result)=>{
                this.formData.parents(".inner").hide();
                let name = fd.get("author_name").toUpperCase();
                $(sendFileHelper.showSuccess(name)).fadeIn().appendTo(this.formData.parents(".box-guitin"));
                let count =3;
                let countFunc = setInterval(function () {
                    count-=1;
                    if (count === 0){
                        document.location.href="/";
                        clearInterval(countFunc);
                        return false;
                    }
                    $('.count-down').text(count);
                },1000);
                this.resetForm();
            },
            error: (err)=>{
                this.resetForm();
            }
        })
    }

    checkMaxSize(file) {
        let size = file.size/(1024*1024);
        if (this.maxSize > size){
            return (this.maxSize > size);
        }else{
            this.fileError.text(`File không được quá ${this.maxSize}MB`).show();
            setTimeout( ()=> {
                this.fileError.hide();
            },3000);
            return (this.maxSize > size);
        }
    }

    resetForm() {
        this.formData[0].reset();
        this.listFile = {};
        $('.file-preview').empty();
    }
}

// maxsize: mb
$(()=>new SendFile({
        input :'#fileImage',
        maxSize:20,
        maxFile:5,
        type: "jpg|jpeg|png|gif"
    })
);
$(()=>new SendFile({
        input :'#fileContent',
        maxSize:20,
        maxFile:5,
        type: "doc|docx|pdf|zip"
    })
);
sendFileHelper = {
    isEmail:
        (email) => {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
            return regex.test(email.val());
        },
    //check validate email (email = <input/>)
    checkEmail:
        email => {
            if (email.val() === "") {
                email.next(".error").text("Hãy nhập Email !").show();
                return false
            } else {
                if (sendFileHelper.isEmail(email)) {
                    email.next(".error").hide();
                    return true
                } else {
                    email.next(".error").text("Email bạn nhập không đúng !").show();
                    return false
                }
            }
        },
    checkName : name => {
        if (name.val() === "") {
            name.next(".error").text("Hãy nhập họ và tên !").show();
            return false
        } else {
            name.next(".error").hide();
            return true
        }
    },
    showSuccess : name => {
        return ` <section class="box-success" style="display: none">
                    <h3><i class="icon icon-check-success"></i> CÁM ƠN { ${name} } ĐÃ GỬI BÀI</h3>
                    <p>TUỔI TRẺ CƯỜI ONLINE SẼ PHẢI HỒI VÀ LIÊN HỆ BẠN QUA EMAIL  TRONG <br> THỜI GIAN SỚM NHẤT</p>
                    <p class="txt-i">Hệ thống sẽ tự động chuyển trang trong <span class="count-down">3</span> giây</p>
                </section>`;
    }
};
// Usage:
// !   utoa('✓ à la mode'); // 4pyTIMOgIGxhIG1vZGU=
// !   atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

export const utoa = (str) => {
    return window.btoa(unescape(encodeURIComponent(str)));
}
export const atou = (str) => {
    return decodeURIComponent(escape(window.atob(str)));
}
export function timeAgo(time) {
    const now = getTimestamp()
        // get timestamp millisecond
    const between = (now - Number(time)) / 1000 // second
    if (between < 60) {
        return pluralize(0, 'vừa xong')
    } else if (between < 3600) {
        return pluralize(~~(between / 60), ' phút')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' giờ')
    } else if (between < 2592000) {
        return pluralize(~~(between / 86400), ' ngày')
    } else if (between < 31104000) {
        return pluralize(~~(between / 2592000), ' tháng')
    } else {
        return pluralize(~~(between / 31104000), ' năm')
    }
}

export function getTimestamp(time) {
    const date = time ? new Date(time) : new Date()
    return date.getTime()
}

function pluralize(time, label) {
    if (time === 0) {
        return label
    }
    if (time === 1) {
        return time + label + ' ago'
    }
    return time + label + 's ago'
}

export function getRandomArrayElement(arr, n) {
    const shuffled = arr.sort(() => 0.5 - Math.random())

    // Get sub-array of first n elements after shuffled
    return shuffled.slice(0, n)
}

export const isEmptyStr = str => (!str || 0 === str.length);

export const isBlank = str => (!str || /^\s*$/.test(str));
export const to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
}
export const ValidateEmail = (value, length) => {
    let msg = '';
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/;
    let isEmail = regex.test(value);
    if (value.length == 0) {
        msg = 'Email không được để trống!';
    } else if (value.length < length) {
        msg = `Email không dc nho hon ${length} ki tu!`;
    } else if (isEmail == false) {
        msg = 'Email không đúng định dạng!';
    } else {
        msg = '';
    }
    return msg;
}
export const ValidateField = (value, length) => {
    let msg = '';
    if (value.length == 0) {
        msg = 'Password không được để trống!';
    } else if (value.length < length) {
        msg = `Password không dc nho hon ${length} ki tu!`;
    } else {
        msg = '';
    }
    return msg;
}
export const isEmptyObj = obj => {
    if (!obj) return false;
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
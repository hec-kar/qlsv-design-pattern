'use strict'


const chuyenDoiNgaySinh = (ngaySinh) => {
    const ngaySinhDate = new Date(ngaySinh);

    if (isNaN(ngaySinhDate.getTime())) {
        console.error('Ngày sinh không hợp lệ:', ngaySinh);
        return null;
    }
    // Chuyển đổi thành chuỗi trong định dạng 'yyyy-mm-dd'
    const nam = ngaySinhDate.getFullYear();
    let thang = ngaySinhDate.getMonth() + 1;
    thang = thang < 10 ? '0' + thang : thang;
    let ngay = ngaySinhDate.getDate();
    ngay = ngay < 10 ? '0' + ngay : ngay;

    return `${nam}-${thang}-${ngay}`;

}

module.exports = { chuyenDoiNgaySinh }
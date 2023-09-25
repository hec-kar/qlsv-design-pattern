'use strict'


class SinhVienRepo {
    constructor() {
        this.chuoiKetNoi = '';
    }


    readData() {
        throw new Error('Phương thức chưa được triển khai');
    }

    setChuoiKetNoi(chuoiKetNoi) {
        this.chuoiKetNoi = chuoiKetNoi;
    }

    static createRepo(loaiNguon) {
        if (loaiNguon === 1) {
            const SinhVienRepoText = require('./SinhVienRepoText');
            return new SinhVienRepoText(this.chuoiKetNoi);
        } else if (loaiNguon === 2) {
            const SinhVienRepoCsdl = require('./SinhVienRepoCsdl');
            return new SinhVienRepoCsdl(this.chuoiKetNoi);
        } else {
            throw new Error('Loại nguồn không hợp lệ');
        }
    }
}


module.exports = SinhVienRepo;
'use strict'

const fs = require('node:fs');

const SinhVienRepo = require('./SinhVienRepo');
const SinhVien = require('../models/sinhvien.model');

class SinhVienRepoText extends SinhVienRepo {
    constructor(chuoiKetNoi) {
        super(chuoiKetNoi);
    }

    readData() {

        const data = fs.readFileSync(this.chuoiKetNoi, { encoding: 'utf-8' })
        const lines = data.trim().split('\n');

        const sinhViens = lines.map(line => {
            const [id, fullName, date, gender] = line.split('|').map(item => item.replace(/"/g, '').trim());
            return new SinhVien(id, fullName, date, gender);
        });

        console.log(sinhViens);
    }

    writeData(filePath, sinhVien) {
        const data = fs.readFileSync(filePath, 'utf8');
        let lines = data.split('\n');
        let id = lines.length + 1;
        let newSinhVien = `${id}|"${sinhVien.hoTen}"|"${sinhVien.ngaySinh}"|${sinhVien.gioiTinh}`;
        lines.push(newSinhVien);
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');

        console.log('Thêm sinh viên thành công!');
    }
}


module.exports = SinhVienRepoText;
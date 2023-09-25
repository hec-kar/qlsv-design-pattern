'use strict'

const SinhVienRepo = require('./SinhVienRepo');
const Database = require('./database.connect');

const { chuyenDoiNgaySinh } = require('../utils/index')


class SinhVienRepoCsdl extends SinhVienRepo {
    constructor(chuoiKetNoi) {
        super(chuoiKetNoi);
    }



    readData() {

        const db = Database.getInstance(this.chuoiKetNoi);
        db.connection.execute('select * from student', (error, data) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            console.log('Query results:', data);
        });
    }


    writeData({ hoTen, ngaySinh, gioiTinh }) {
        const db = Database.getInstance(this.chuoiKetNoi);
        const ngaySinhCdsl = chuyenDoiNgaySinh(ngaySinh);
        db.connection.execute('INSERT INTO student (full_name, date_of_birth, gender) VALUES (?, ?, ?)',
            [hoTen, ngaySinhCdsl, gioiTinh],
            (error, data) => {
                if (error) {
                    console.error('Error executing query:', error);
                    return;
                }
                console.log('Query results:', {
                    id: data.insertId,
                    hoTen,
                    ngaySinh,
                    gioiTinh
                });
            })
    }
}

module.exports = SinhVienRepoCsdl;
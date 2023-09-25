const Config = require('./models/config.model');


const SinhVienRepo = require('./dao/SinhVienRepo');

const configText = {
    "kieu_nguon": 1,
    "chuoi_ket_noi": "./sinhvien.txt"
}
const configDb = {
    "kieu_nguon": 2,
    "chuoi_ket_noi": {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "student"
    }
}


//em xin insert cứng cứng tại nodejs cần tải thêm lib để để nhập vào terminal .
const sinhVienMoi = {
    hoTen: 'Ngô Thị Lý',
    ngaySinh: '2000-09-20',
    gioiTinh: 0
}

let repo;
// text
if (configText.kieu_nguon === 4) {
    repo = SinhVienRepo.createRepo(configText.kieu_nguon);
    repo.setChuoiKetNoi(configText.chuoi_ket_noi);

    // repo.writeData(configText.chuoi_ket_noi, sinhVienMoi);
} else if (configDb.kieu_nguon === 2) {
    repo = SinhVienRepo.createRepo(configDb.kieu_nguon);
    repo.setChuoiKetNoi(configDb.chuoi_ket_noi)

    repo.writeData(sinhVienMoi);

}


// repo.readData();

// new db(this.chuoiKetNoi)

// { host: 'localhost', user: 'root', password: '', database: 'student' }







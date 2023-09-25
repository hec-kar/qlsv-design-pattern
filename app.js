const Config = require('./models/config.model');


const SinhVienRepo = require('./dao/SinhVienRepo');

// const configText = {
//     "kieu_nguon": 1,
//     "chuoi_ket_noi": "./sinhvien.txt"
// }
// const configDb = {
//     "kieu_nguon": 2,
//     "chuoi_ket_noi": {
//         "host": "localhost",
//         "user": "root",
//         "password": "",
//         "database": "student"
//     }
// }


//em  insert cứng cứng tại nodejs cần tải thêm lib để để nhập vào terminal .
const sinhVienMoi = {
    hoTen: 'Ngô Thị Loan',
    ngaySinh: '2000-08-20',
    gioiTinh: 0
}

const cauHinh = "csdl";

let repo;
// text
if (cauHinh) {
    Config.readConfig(cauHinh);
    repo = SinhVienRepo.createRepo(Config.kieu_nguon);
    repo.setChuoiKetNoi(Config.chuoi_ket_noi);

    repo.readData();
    // repo.writeData(Config.chuoi_ket_noi, sinhVienMoi);
}











const fs = require('fs');

// !simple factory

class Config {
    constructor() {
        this.kieu_nguon = null;
        this.chuoi_ket_noi = null;
    }

    static readConfig(loaiNguon) {
        try {
            const configData = fs.readFileSync('./config.json');
            const jsonData = JSON.parse(configData);
            if (loaiNguon === "text") {
                this.kieu_nguon = jsonData[0].kieu_nguon;
                this.chuoi_ket_noi = jsonData[0].chuoi_ket_noi;
            } else if (loaiNguon === "csdl") {
                this.kieu_nguon = jsonData[1].kieu_nguon;
                this.chuoi_ket_noi = jsonData[1].chuoi_ket_noi;
            } else {
                new Error("loại kết nối không hợp lệ!")
            }

        } catch (error) {
            throw new Error(`Error reading config file: ${error}`);
        }
    }
}

module.exports = Config;

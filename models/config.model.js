const fs = require('fs');

class Config {
    constructor() {

        this.kieu_nguon = null;
        this.chuoi_ket_noi = null;
    }

    readConfig() {
        try {
            const configData = fs.readFileSync('./', 'utf8');
            const jsonData = JSON.parse(configData);
            this.kieu_nguon = jsonData.kieu_nguon;
            this.chuoi_ket_noi = jsonData.chuoi_ket_noi;
        } catch (error) {
            throw new Error(`Error reading config file: ${error}`);
        }
    }
}

module.exports = Config;

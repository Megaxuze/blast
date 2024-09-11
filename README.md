Bridge ETH Sepolia To Blast Sepolia - For 0.1 ETH need 0.007 ETH for fee = 0.107 ETH

Jika Menggunakan VPS Contabo bisa Open File Lewat folder Kiri, cari aja nama folder blash - run.py klik 2x untuk edit, via command bisa ( ```nano run.js``` )

const INFURA_KEY = "a941edf5892741ef82081211559ec2ff";  // Masukkan Infura API Key di sini | Jika ingin ganti INFURA KEY bisa buat di https://app.infura.io/ Edit dan centang Semua Sepolia dan Copy Key
const PRIVATE_KEY = "isi Private key - USER WALLET NEW"; // Masukkan Private Key Anda di sini 

jalankan

```nvm install 22.8.0```

```npm install ethers```
jika Error install ```apt install python3```

Run Bridge '''node run.js''''

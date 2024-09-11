const ethers = require("ethers");

// Isi dengan Infura API Key dan Private Key Anda
const INFURA_KEY = "a941edf5892741ef82081211559ec2ff";  // Masukkan Infura API Key di sini
const PRIVATE_KEY = "isi Private key - USER WALLET NEW"; // Masukkan Private Key Anda di sini

// Alamat untuk Blast Sepolia Testnet
const BlastBridgeAddress = "0xc644cc19d2A9388b71dd1dEde07cFFC73237Dca8";

// Penyedia untuk jaringan Sepolia dan Blast
const sepoliaProvider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_KEY}`);
const blastProvider = new ethers.providers.JsonRpcProvider("https://sepolia.blast.io");

// Setup wallet
const wallet = new ethers.Wallet(PRIVATE_KEY);
const sepoliaWallet = wallet.connect(sepoliaProvider);
const blastWallet = wallet.connect(blastProvider);

// Fungsi async untuk melakukan transaksi dan memeriksa saldo
async function bridgeTransaction() {
    try {
        // Transaksi untuk mengirim 0.1 Sepolia ETH
        const tx = {
    to: BlastBridgeAddress,
    value: ethers.utils.parseEther("0.1"),
    gasPrice: ethers.utils.parseUnits("20", "gwei"), // Menetapkan gas price manual
    gasLimit: ethers.BigNumber.from("300000") // Menetapkan gas limit manual
};

        // Mengirim transaksi
        const transaction = await sepoliaWallet.sendTransaction(tx);
        console.log("Transaction sent:", transaction);

        // Menunggu konfirmasi transaksi
        await transaction.wait();
        console.log("Transaction confirmed!");

        // Memeriksa saldo di jaringan Blast
        const balance = await blastProvider.getBalance(wallet.address);
        console.log(`Balance on Blast: ${ethers.utils.formatEther(balance)} ETH`);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Jalankan fungsi bridgeTransaction
bridgeTransaction();

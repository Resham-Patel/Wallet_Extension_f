require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());
app.use(cors());

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/7541da672aeb47b79fd95af3ffa3bbbf"); // Replace with your Infura/Alchemy endpoint

// Function to create a wallet from an environment variable
const createEthWallet = () => {
    const privateKey = process.env.PRIVATE_KEY?.trim();
    if (!privateKey || privateKey.length !== 66 || !privateKey.startsWith("0x")) {
        throw new Error("Invalid Ethereum private key in .env file");
    }
    return new ethers.Wallet(privateKey, provider);
};

// API to get wallet address
app.get("/wallet", async (req, res) => {
    try {
        const wallet = createEthWallet();
        res.json({ address: wallet.address });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// API to sign and send a transaction
app.post("/send-eth", async (req, res) => {
    try {
        const { to, amount } = req.body;
        if (!to || !amount) {
            return res.status(400).json({ error: "Missing 'to' address or 'amount' field" });
        }

        const wallet = createEthWallet();
        const tx = {
            to,
            value: ethers.parseEther(amount), // Convert ETH to Wei
            gasLimit: 21000,
            maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"),
            maxFeePerGas: ethers.parseUnits("50", "gwei"),
        };

        const transactionResponse = await wallet.sendTransaction(tx);
        await transactionResponse.wait();

        res.json({ txHash: transactionResponse.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

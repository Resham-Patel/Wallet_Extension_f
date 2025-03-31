import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Select } from "antd";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import RecoveryAccount from "./components/RecoveryAccount";
import WalletView from "./components/WalletView";

function App() {
  const [selectedChain, setSelectedChain] = useState("0x1");
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);

  return (
    <div className="App">
      <header>
        <i className="fa-solid fa-wallet logo"></i>
        <Select
          onChange={(val) => setSelectedChain(val)}
          className="dropdown"
          value={selectedChain}
          options={[
            { label: "Ethereum", value: "0x1" },
            { label: "Solana", value: "0x2710" },
          ]}
          placeholder="Choose a blockchain"
        />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recover" element={<RecoveryAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet} />} />
        <Route
          path="/yourwallet"
          element={
            wallet ? (
              <WalletView
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            ) : (
              <CreateAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet} selectedChain={selectedChain} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
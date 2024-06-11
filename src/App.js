import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import "./App.css";

// The contract address
const greeterAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";

function App() {

  const [message, setMessage] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchGreeting() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
        setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function setGreeting() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(message);

      setMessage("");
      await transaction.wait();
      fetchGreeting();
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <div className="description">
          <h1>MY SHOP</h1>
          <h3>Shop Dapp using ReactJS and Hardhat</h3>
        </div>
        <div className="custom-buttons">
          <button onClick={fetchGreeting} style={{ backgroundColor: "green" }}>
            Fetch Shop Name
          </button>
          <button onClick={setGreeting} style={{ backgroundColor: "red" }}>
            Message/Feedback
          </button>
        </div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Any Message/Feedback"
        />
        <h2 className="greeting">Output: {currentGreeting}</h2>
      </div>
    </div>
  );
}

export default App;
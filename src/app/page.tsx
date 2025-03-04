"use client"; // Mark this as a client component

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const { publicKey } = useWallet();
  const [title, setTitle] = useState("Hello sir");

  const toggleTitle = () => {
    setTitle((prev) => (prev === "Hello sir" ? "Hello madam" : "Hello sir"));
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <title>{title}</title>
      <h1 data-testid="wallet-status">
        {publicKey ? `Connected: ${publicKey.toBase58()}` : "Not Connected"}
      </h1>
      <WalletMultiButton data-testid="connect-wallet-btn" />
      <button data-testid="toggle-title-btn" onClick={toggleTitle}>
        Toggle Title
      </button>
      <h2 data-testid="title-display">{title}</h2>
    </div>
  );
}
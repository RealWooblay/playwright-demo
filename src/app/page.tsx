"use client"; // Mark this as a client component

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 data-testid="wallet-status">
        {publicKey ? `Connected: ${publicKey.toBase58()}` : "Not Connected"}
      </h1>
      <WalletMultiButton data-testid="connect-wallet-btn" />
    </div>
  );
}
import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  // This hook gets wallet address of connected user
  const address = useAddress();

  // Check if claimed ERC20 tokens
  const {
    contract: tokenContract
  } = useContract()
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        
      </div>
    </main>
  );
};

export default Home;

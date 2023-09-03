import { ConnectWallet, useAddress, useContract, useTokenBalance, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { PASS_CONTRACT, TOKEN_CONTRACT } from "../constants/addresses";

const Home: NextPage = () => {
  // This hook gets wallet address of connected user
  const address = useAddress();

  // Check if claimed ERC20 tokens
  const {
    contract: tokenContract
  } = useContract(TOKEN_CONTRACT);

  const {
    contract: passContract   
  } = useContract(PASS_CONTRACT);

  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
  } = useTokenBalance(tokenContract, address);

  const {
    data: passBalance,
    isLoading: isPassBalanceLoading,
  } = useOwnedNFTs(passContract, address);


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h1>Base app</h1>
            <ConnectWallet />
          </div>
          {!address ? (
            <p>Please connect your wallet.</p>
          ) : (
            !isTokenBalanceLoading ? (
              tokenBalance && parseInt(ethers.utils.formatUnit(tokenBalance.value, 18)) >= 10  (
            ) : (
              <p>Loading...</p>
            )
            
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

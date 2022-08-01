import React from 'react'
import Web3 from 'web3'
import toast from 'react-hot-toast'
import { setAccount } from '../store/account';
import { useDispatch } from 'react-redux';
const ConnectWallet = () => {
    const dispatch = useDispatch();
    const connect = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            const web3 = window.web3
            await window.ethereum.enable();
            const networkId = await web3.eth.net.getId()
            if (networkId == 4) {
                const accounts = await web3.eth.getAccounts()
                dispatch(setAccount(accounts[0]))
            } else {
                alert("works")
                toast("Please Connect to ethereum mainnet")
            }
        } else {
            toast.error("Non-ethereum Browser")
        }
    }
  return (
      <div className="cusBtn ms-3 ms-md-5" onClick={connect}>CONNECT WALLET</div>
  )
}

export default ConnectWallet
import React from "react";

function ConnectWalletButton(props) {
  return (
    <>
      {props.web3Provider ? (
        <button className="button" type="button" onClick={props.disconnect}>
          Disconnect
        </button>
      ) : (
        <button className="button" type="button" onClick={props.connect}>
          Connect
        </button>
      )}

      <style jsx>{`
        .button {
          padding: 1rem 1.5rem;
          background: ${props.web3Provider ? 'red' : 'green'};
          border: none;
          border-radius: 0.5rem;
          color: #fff;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}

export default ConnectWalletButton;

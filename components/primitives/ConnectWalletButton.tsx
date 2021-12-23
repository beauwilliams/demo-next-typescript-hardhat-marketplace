import React from "react";

function ConnectWalletButton(props) {
  return (
    <div className="container">
        <h1 className="title">Web3Modal Example</h1>
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
        main {
          padding: 5rem 0;
          text-align: center;
        }
        p {
          margin-top: 0;
        }
        .container {
          padding: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        .grid {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
        }
        .button {
          padding: 1rem 1.5rem;
          background: ${props.web3Provider ? 'red' : 'green'};
          border: none;
          border-radius: 0.5rem;
          color: #fff;
          font-size: 1.2rem;
        }
        .mb-0 {
          margin-bottom: 0;
        }
        .mb-1 {
          margin-bottom: 0.25rem;
        }
      `}</style>

    </div>
  );
}

export default ConnectWalletButton;

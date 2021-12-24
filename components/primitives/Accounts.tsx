

 //      <header>
 //        {address && (
 //          <div className="grid">
 //            <div>
 //              <p className="mb-1">Network:</p>
 //              <p>{chainData?.name}</p>
 //            </div>
 //            <div>
 //              <p className="mb-1">Address:</p>
 //              <p>{ellipseAddress(address)}</p>
 //            </div>
 //          </div>
 //        )}
 //      </header>

 //      <main>
 //        <h1 className="title">Web3Modal Example</h1>
 //        {web3Provider ? (
 //          <button className="button" type="button" onClick={disconnect}>
 //            Disconnect
 //          </button>
 //        ) : (
 //          <button className="button" type="button" onClick={connect}>
 //            Connect
 //          </button>
 //        )}
 //      </main>

 //      <style jsx>{`
 //        main {
 //          padding: 5rem 0;
 //          text-align: center;
 //        }
 //        p {
 //          margin-top: 0;
 //        }
 //        .container {
 //          padding: 2rem;
 //          margin: 0 auto;
 //          max-width: 1200px;
 //        }
 //        .grid {
 //          display: grid;
 //          grid-template-columns: auto auto;
 //          justify-content: space-between;
 //        }
 //        .button {
 //          padding: 1rem 1.5rem;
 //          background: ${web3Provider ? 'red' : 'green'};
 //          border: none;
 //          border-radius: 0.5rem;
 //          color: #fff;
 //          font-size: 1.2rem;
 //        }
 //        .mb-0 {
 //          margin-bottom: 0;
 //        }
 //        .mb-1 {
 //          margin-bottom: 0.25rem;
 //        }
 //      `}</style>

 //      <style jsx global>{`
 //        html,
 //        body {
 //          padding: 0;
 //          margin: 0;
 //          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
 //            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
 //            sans-serif;
 //        }
 //        * {
 //          box-sizing: border-box;
 //        }
 //      `}</style>

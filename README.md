# Jupiter Solana React widget
<img width="1496" alt="Screen Shot 2022-06-07 at 11 37 31" src="https://user-images.githubusercontent.com/13947203/172408491-adbc7efb-5618-4366-bc6a-0d24ef4eb954.png">

<p align="center">
  <a href="https://boson.son">Provided by: Boson! (boson.so)</a>
  <br/>
  A ready for production Jupiter React component.
</p>
<br/>

## Getting Started

1. Install the react package and Jupiter deps

```
yarn add @bosonso/react-jup-ag
yarn add @jup-ag/react-hook
```

2. Wrap your app with JupiterProvider like so:

```
import { JupiterProvider } from '@jup-ag/react-hook';
import { Connection } from '@solana/web3.js';

const connection = new Connection('https://solana-api.projectserum.com');

const App = ({ children }) => {
  const wallet = useWallet() // user wallet
  return (
    <JupiterProvider connection={connection} cluster="mainnet-beta" userPublicKey={wallet.publicKey}>
      {children}
    </JupiterProvider>
  )
}
```

3. Import React Jupiter and use it on your app:

```
import JupiterForm from '@boson-so/react-jup';

const connection = new Connection('https://solana-api.projectserum.com');

const SwapScreen = ({ children }) => {
  return (
    <JupiterForm />
  )
}
```

4. Customizing styles:

You can customize whole form colors by replacing the styles prop, the default props are:

```
const defaultProps = {
  styles: {
    primaryBackground: "#0E0D11",
    secondaryBackground: "#131318",
    stroke: "#51576B",
    primaryText: "#fff",
    accent: "#3f52ff",
  },
};
```

## Demo: https://boson.so/swap

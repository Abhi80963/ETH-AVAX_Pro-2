# Shop Frontend with Smart Contracts using Hardhat and React

This project demonstrates a basic use case of Hardhat for developing smart contracts, and React for building a simple frontend for a shop. The frontend has two buttons:
1. Fetch shop name
2. Submit any message/feedback and display the output.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Smart Contracts](#smart-contracts)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- Hardhat installed globally
- A code editor like VSCode

## Project Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Abhi80963/ETH-AVAX_Pro-2.git
    cd myproj
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Smart Contracts
This project includes a simple smart contract that allows fetching the shop name and submitting messages.

1. Create a new Hardhat project:
    ```bash
    npx hardhat
    ```

2. Add the sample contract `Greeter.sol` in the `contracts` folder:
   Our smart contracts : Greeter.sol

3. Write a test for the contract in the `test` folder:
   npx hardhat test :- To test the hardhat project

4. Deploy the contract using a script in the `scripts` folder:
    ```javascript
    async function main() {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Shop.deploy("Metacrafters");

        await shop.deployed();

        console.log("Shop deployed to:", shop.address);
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
    ```

## Frontend Setup
   Using React App
1. Create a new React app:
    ```bash
    npx create-react-app shop-frontend
    cd shop-frontend
    ```

2. Install web3 dependencies:
    ```bash
    npm install ethers
    ```
3. Add `ShopABI.json` in the `src` folder. This file should contain the ABI of the `Shop` contract.

4. Create `App.js` to include the `Shop` component:
    ```React app for frontend:
    import  {React } from "react";

    function App() {
        return (
            <div className="App">
                <Shop />
            </div>
        );
    }

    export default App;
    ```

## Running the Project
1. Start the Hardhat local network:
    ```bash
    npx hardhat node
    ```

2. Deploy the smart contract to the local network:
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

3. Start the React development server:
    ```bash
    npm run start
    ```

4. Open your browser and go to `http://localhost:3000` to interact with the frontend.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



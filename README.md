# Gas Saver Simulator

Gas Saver Simulator is a full stack web app (React and Node.js) that allows users to simulate gas costs for token swaps on the Ethereum blockchain. It utilizes the [Enso Network API](https://api-docs.enso.finance/) to fetch real-time swap data.

## Features

- Simulate gas costs and token swaps on the Ethereum blockchain.
- Get insights on gas cost (in ETH), price impact, and amount out.
- Simple and intuitive React user interface built with [v0](https://v0.dev/).
- Powered by the [Enso Network API](https://api-docs.enso.finance/introduction/intro-to-enso).

### Walkthrough

Here’s a quick walkthrough of the app in action:

![Gas Saver Simulator Walkthrough](./gas_simulator.gif)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/hummusonrails/gas-saver-simulator.git
   cd gas-saver-simulator
   npm install
   ```
2. Rename the `.env.sample` file to `.env` and fill in the required environment variables:
  - `ENSO_API_KEY`: Your Enso Network API key. Info on getting your API key can be found [in the docs](https://api-docs.enso.finance/introduction/get-api-key).
  - `VITE_API_BASE_URL`: The base URL of your backend server, i.e. `https://localhost:3000`.

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run the backend server:
   ```bash
   node src/app.js
   ```

5. Open the application in your browser at http://localhost:5173 (or the URL where you deployed it to).

### Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (button, card, input, etc.)
│   └── GasSaverSimulator.tsx  # Main application component
├── pages/               # Styles and page-level files
├── routes/              # Backend API routes
├── services/            # Enso API service logic
```

### API Reference

This project integrates with the Enso Network API to simulate token swaps and fetch real-time gas data. The API [Swagger reference](https://api.enso.finance/api#) provides detailed information on the available endpoints.

## License

This project is licensed under the [MIT License](LICENSE).
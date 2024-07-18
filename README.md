# Crypto Tracker

Welcome to **Crypto Tracker**, the ultimate tool to monitor, analyze, and optimize your cryptocurrency investments.

![Crypto Tracker Logo](/public/logo.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Project Locally](#running-the-project-locally)
- [Environment Variables](#environment-variables)
- [Custom 404 Page](#custom-404-page)
- [Credits](#credits)

## Overview

Crypto Tracker is a dynamic web application built with Next.js that provides real-time information on the top 20 cryptocurrencies. Using data from the CoinGecko API, the app displays detailed metrics and visualizations to help users stay informed about the crypto market.

## Features

- **Dynamic Landing Page:** Featuring animations and a global market cap graph for all cryptocurrencies.
- **Explore Button:** Opens a list of the top 20 cryptocurrencies with real-time updates on ranking, symbol, price, 24H change, and market cap.
- **Detailed Coin View:** Clicking on a specific coin provides an in-depth view with line and bar charts, and comprehensive information about the selected cryptocurrency.
- **Custom Not Found Page:** A custom 404 page for a better user experience.

## Screenshots

### Landing Page
![Landing Page](/public/landing.png)
*Dynamic landing page with animations and a global market cap graph.*

### Global Cryptocurrency Market Cap
![Global Market Cap](/public/market.png)
*Graph showing the global market cap of all cryptocurrencies.*

### Explore Page
![Explore Page](/public/explore.png)
![All Coins](/public/explore1.png)
*List of the top 20 cryptocurrencies with real-time data.*

### Product Page
![Product page](/public/product.png)
![all Graphs](/public/product1.png)
*Detailed Insights for Particular coin*

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Running the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/crypto-tracker.git
   cd crypto-tracker
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Create the `.env.local` File**

   In the root directory of the project, create a file named `.env.local` and add the following line:
   ```
   NEXT_PUBLIC_COIN_API_KEY=your_coingecko_api_key
   ```

4. **Run the Development Server**

   Using npm:
   ```bash
   npm run dev
   ```
   Or using yarn:
   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Make sure to set up your environment variables in a `.env.local` file:

```
NEXT_PUBLIC_COIN_API_KEY=your_coingecko_api_key
```

Replace `your_coingecko_api_key` with your actual CoinGecko API key.

## Custom 404 Page

Crypto Tracker includes a custom 404 page to enhance the user experience when a page is not found.

![Custom 404 Page](https://via.placeholder.com/600x300?text=Custom+404+Page)

## Credits

- **CoinGecko API:** For providing the cryptocurrency data.

Feel free to contribute to this project by opening issues or submitting pull requests. Happy tracking!

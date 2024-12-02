const express = require('express');
const { formatUnits } = require('ethers');
const { getQuote, getBundleQuote } = require('../services/ensoApi');

const router = express.Router();

router.post('/simulate-swap', async (req, res) => {
  const {
    chainId,
    fromAddress,
    tokenIn,
    tokenOut,
    amountIn,
    feeReceiver,
    disableRFQs = false,
  } = req.body; 

  if (!chainId || !fromAddress || !tokenIn || !tokenOut || !amountIn || !feeReceiver) {
    return res.status(400).json({
      error: 'Missing required parameters. Ensure all fields are included.',
      required: ['chainId', 'fromAddress', 'tokenIn', 'tokenOut', 'amountIn', 'feeReceiver'],
    });
  }

  try {
    const params = {
      chainId,
      fromAddress,
      tokenIn,
      tokenOut,
      amountIn,
      feeReceiver,
      disableRFQs,
    };

    console.log('Simulate Swap Request:', params);

    const quote = await getQuote(params);

    const gasPrice = 20e9; 
    const gasCostInEth = (gasPrice * quote.gas) / 1e18;

    // Convert amountOut to a human-readable format
    const humanReadableAmountOut = parseFloat(formatUnits(quote.amountOut, 18)).toFixed(4);

    const formattedResponse = {
      gasCost: Number(quote.gas), 
      gasCostInEth: gasCostInEth.toFixed(6), 
      amountOut: humanReadableAmountOut, 
      priceImpact: Number(quote.priceImpact), 
    };

    if (quote.priceImpact > 5) {
      formattedResponse.warning = 'High price impact! This trade may result in significant slippage.';
    }

    res.json({ success: true, data: formattedResponse });
  } catch (error) {
    console.error('Error during simulate-swap:', error);
    res.status(500).json({ error: error.message || 'An unknown error occurred.' });
  }
});

module.exports = router;

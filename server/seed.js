const fs = require('fs');
const path = require('path');

function main() {
  const data = {
    wallet: {
      userId: 1,
      currency: {
        BTC: 0.0,
        USD: 450.0
      },
      operations: createOperations()
    }
  };

  fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(data, null, 2));
}

main();

function createOperations(limit = 3) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const today = new Date();

    result.push({
      type: 'buy_fiat',
      date: `${today.getMonth()}/${today.getDay()}/${today.getFullYear()},${today.getHours()}:${today.getMinutes()}`,
      currencyStart: null,
      currencyEnd: 'USD',
      substractionAmount: 150.00,
      ingressAmount: 150.00
    });
  }

  return result;
}
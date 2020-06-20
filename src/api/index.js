function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function randomRate() {
  return (Math.floor(Math.random() * (30 - 10)) + 10) / 100;
}

function mockData(amount, months) {
  const rate = randomRate();
  const totalPayable = amount * (1 + rate);
  return {
    principal: { currency: "GBP", amount: financial(amount) },
    numPayments: months,
    monthlyPayment: {
      currency: "GBP",
      amount: financial(totalPayable / months),
    },
    nominalInterestRate: rate,
    apr: rate,
    totalPayable: { currency: "GBP", amount: financial(totalPayable) },
    totalInterest: {
      currency: "GBP",
      amount: financial(totalPayable - amount),
    },
  };
}

export default async function quote(amount, months) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData(amount, months));
    }, 300);
  });
}

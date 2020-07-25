const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'drawId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'entropy',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'winnings',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'Rewarded',
    type: 'event',
  },
];

module.exports = { abi };

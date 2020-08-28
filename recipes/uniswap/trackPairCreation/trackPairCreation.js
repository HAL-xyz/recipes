const abi = require('./abi');

const uniswapTrackPairCreation = (input) => {

  const Triggers = [];

  if (input.parameters.token) {
    return Triggers = [
      {
        TriggerType: 'WatchEvents',
        TriggerName: `${input.name} - Part 1`,
        ContractAdd: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
        ContractABI: JSON.stringify(abi),
        Filters: [
          {
            method: {
              name: 'PairCreated',
            },
            parameter: {
              name: 'token0',
              type: 'address',
              index: null,
            },
            type: 'CheckEventParameter',
            condition: {
              attribute: input.parameters.token,
              predicate: 'Eq',
            }
          },
        ],
      };
      {
        TriggerType: 'WatchEvents',
        TriggerName: `${input.name} - Part 2`,
        ContractAdd: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
        ContractABI: JSON.stringify(abi),
        Filters: [
          {
            method: {
              name: 'PairCreated',
            },
            parameter: {
              name: 'token1',
              type: 'address',
              index: null,
            },
            type: 'CheckEventParameter',
            condition: {
              attribute: input.parameters.token,
              predicate: 'Eq',
            }
          },
        ],
      };
    ];
  }

  // Se input doppo, allora creo due trigger

  return ({
    RecipeId: 'uniswap-track-pair-creation',
    Triggers: [
      TriggerType: 'WatchEvents',
      TriggerName: input.name,
      ContractAdd: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
      ContractABI: JSON.stringify(abi),
      Filters,
    ]
  })
};

module.exports = uniswapTrackPairCreation;

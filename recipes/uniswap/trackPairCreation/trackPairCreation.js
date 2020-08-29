const abi = require('./abi');

const uniswapTrackPairCreation = (input) => {
  if (input.parameters) {
    return ({
      TriggerType: 'WatchEvents',
      TriggerName: input.name,
      ContractAdd: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
      ContractABI: JSON.stringify(abi.abi),
      Filters: [
        {
          EventName: 'PairCreated',
          ParameterName: input.parameters.position,
          ParameterType: 'address',
          FilterType: 'CheckEventParameter',
          Condition: {
            Attribute: input.parameters.token,
            Predicate: 'Eq',
          },
        },
      ],
    });
  }

  return ({
    TriggerType: 'WatchEvents',
    TriggerName: input.name,
    ContractAdd: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    ContractABI: JSON.stringify(abi.abi),
    Filters: [
      {
        EventName: 'PairCreated',
        FilterType: 'CheckEventEmitted',
      },
    ],
  });
};

module.exports = uniswapTrackPairCreation;

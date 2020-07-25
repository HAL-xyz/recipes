const abi = require('./abi');

const pooltogetherWinnerNotification = (input) => {
  const Filters = [];

  if (Object.keys(input.parameters).length === 1 && Object.keys(input.parameters)[0] === 'pool') {
    const filter = {
      EventName: 'Rewarded',
      FilterType: 'CheckEventEmitted',
    };
    Filters.push(filter);
  }

  if (input.parameters.winner) {
    const filter = {
      Condition: {
        Attribute: input.parameters.winner,
        Predicate: 'Eq',
      },
      EventName: 'Rewarded',
      FilterType: 'CheckEventParameter',
      ParameterName: 'winner',
      ParameterType: 'address',
    };
    Filters.push(filter);
  }

  return ({
    TriggerType: 'WatchEvents',
    TriggerName: input.name,
    ContractAdd: input.parameters.pool ? input.parameters.pool : null,
    ContractABI: JSON.stringify(abi),
    Filters,
  });
};

module.exports = pooltogetherWinnerNotification;

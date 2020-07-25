const abi = require('./abi');

const pooltogetherWithdrawalNotification = (input) => {
  const Filters = [];

  if (Object.keys(input.parameters).length === 1 && Object.keys(input.parameters)[0] === 'pool') {
    const filter = {
      EventName: 'CommittedDepositWithdrawn',
      FilterType: 'CheckEventEmitted',
    };
    Filters.push(filter);
  }

  if (input.parameters.address) {
    const filter = {
      Condition: {
        Attribute: input.parameters.address,
        Predicate: 'Eq',
      },
      EventName: 'CommittedDepositWithdrawn',
      FilterType: 'CheckEventParameter',
      ParameterName: 'sender',
      ParameterType: 'address',
    };
    Filters.push(filter);
  }

  if (input.parameters.condition) {
    const filter = {
      Condition: {
        Attribute: input.parameters.condition.value,
        Predicate: input.parameters.condition.predicate,
      },
      EventName: 'CommittedDepositWithdrawn',
      FilterType: 'CheckEventParameter',
      ParameterName: 'amount',
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

module.exports = pooltogetherWithdrawalNotification;

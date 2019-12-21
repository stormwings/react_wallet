import { ResultOperation } from '../../entities/Operation';
import CurrencyPrice from '../../entities/CurrencyPrice';

const INITIAL_STATE = {
  userId: 1 as number,
  currency: {
    BTC: 0,
    USD: 0
  } as CurrencyPrice,
  operations: [] as Array<ResultOperation>
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'WALLET_LOAD': {
      const { currency, operations, userId } = action.payload;
      return {
        currency,
        operations,
        userId
      };
    }
    case 'WALLET_UPDATE': {
      const { currency, operations, userId } = action.payload;
      return {
        currency,
        operations,
        userId
      };
    }
    default:
      return state;
  }
}

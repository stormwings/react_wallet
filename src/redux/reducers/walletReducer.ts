import { ResultOperation } from '../../entities/Operation';
import CurrencyPrice from '../../entities/CurrencyPrice';

const INITIAL_STATE = {
  currency: {
    BTC: 0,
    USD: 0
  } as CurrencyPrice,
  operations: [] as Array<ResultOperation>,
  tradings: [] as Array<any>
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'WALLET_LOAD': {
      const { wallet, operations, tradings } = action.payload;

      return {
        currency: wallet.data,
        operations: operations.data,
        tradings: tradings.data
      };
    }
    case 'WALLET_UPDATE': {
      const { BTC, USD } = action.payload;
      return {
        ...state,
        currency: { BTC, USD }
      };
    }
    default:
      return state;
  }
}

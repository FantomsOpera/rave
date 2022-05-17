import { fns } from 'fns-helper';

export const getInfo = async () => {
  let totalSupply;
  fns.functions.totalSupply().then(res => {
    totalSupply = res[0];
  });

  let ftmBalance;
  let ftmHoldingsPrice;
  await fetch(`https://openapi.debank.com/v1/user/token?id=0x87f385d152944689f92Ed523e9e5E9Bd58Ea62ef&chain_id=ftm&token_id=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83`).then(async res => {
    let json = await res.json();
    ftmBalance = json["amount"];
    ftmHoldingsPrice = (json["price"]*ftmBalance);
  });

  let totalHoldingsPrice;
  await fetch(`https://openapi.debank.com/v1/user/chain_balance?id=0x87f385d152944689f92Ed523e9e5E9Bd58Ea62ef&chain_id=ftm`).then(async res => {
    let json = await res.json();
    totalHoldingsPrice = json["usd_value"];
  });

  let debt;
  await fetch(`https://openapi.debank.com/v1/user/protocol?id=0x87f385d152944689f92Ed523e9e5E9Bd58Ea62ef&protocol_id=ftm_scream`).then(async res => {
    let json = await res.json();
    try {
      debt = json["portfolio_item_list"][1]["stats"]["debt_usd_value"];
    } catch (e) {
      debt = 0
    }
  });

  return {
    totalSupply: totalSupply,
    ftmBalance: ftmBalance,
    ftmHoldingsPrice: ftmHoldingsPrice,
    totalHoldingsPrice: totalHoldingsPrice,
    debt: debt
  }
}

import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

console.log(process.env.REACT_APP_NODE_ENV)

export const FACTORY_ADDRESSES = {
  '56': '0x27aD238316128DC85b23b0EC1eb3f7153afd6860',
  '97': '0x037768f79c2985079c0B29C0b39F5bf1D598Db83'
} as {
  [key: string]: string
}

export const FACTORY_ADDRESS = FACTORY_ADDRESSES[process.env.REACT_APP_CHAIN_ID as string]

export const INIT_CODE_HASHES = {
  '56': '0xfe604490e88884eee0a2ef7362417e3771d067dc74cd2e605d0b3e1e90f300cb',
  '97': '0x3a37cf8ecde8166faa9daa2f4a070be1e622988f207a874db2907fd5220573f1'
} as {
  [key: string]: string
}

export const INIT_CODE_HASH = INIT_CODE_HASHES[process.env.REACT_APP_CHAIN_ID as string]

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

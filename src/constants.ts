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
  '56': '0x7067079bc460d2c5984cC89008786fE46839FCF0',
  '97': '0x765317D857df6BceA1B3489b8B66422B9967eF8B'
} as {
  [key: string]: string
}

// Use value from environment variable if defined
export const FACTORY_ADDRESS: string =
  process.env.REACT_APP_FACTORY_ADDRESS || FACTORY_ADDRESSES[process.env.REACT_APP_CHAIN_ID as string]

export const INIT_CODE_HASHES = {
  '56': '0x62107283605281eee5af96c604a5ce1219d62f714a93ce98f5837b27c19b698c',
  '97': '0xfe604490e88884eee0a2ef7362417e3771d067dc74cd2e605d0b3e1e90f300cb'
} as {
  [key: string]: string
}

// Use value from environment variable if defined
export const INIT_CODE_HASH: string =
  process.env.REACT_INIT_CODE_HASH || INIT_CODE_HASHES[process.env.REACT_APP_CHAIN_ID as string]

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

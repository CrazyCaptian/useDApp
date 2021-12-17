import { expect } from 'chai'
import { TEST_ADDRESS, TEST_TX } from './defaults'
import { optikov } from '../../../src'

describe('optikov Chain', () => {
  it('getChainId', () => {
    expect(optikov.chainId).to.equal(69)
  })

  it('getChainName', () => {
    expect(optikov.chainName).to.eq('optikov')
  })

  it('isTestChain', () => {
    expect(optikov.isTestChain).to.be.true
  })

  it('isLocalChain', () => {
    expect(xDai.isLocalChain).to.be.false
  })

  it('getExplorerAddressLink', () => {
    expect(optikov.getExplorerAddressLink(TEST_ADDRESS)).to.eq(
      `https://kovan-optimistic.etherscan.io/address/${TEST_ADDRESS}/transactions`
    )
  })

  it('getExplorerTransactionLink', () => {
    expect(optikov.getExplorerTransactionLink(TEST_TX)).to.eq(
      `https://kovan-optimistic.etherscan.io/tx/${TEST_TX}/internal-transactions`
    )
  })
})

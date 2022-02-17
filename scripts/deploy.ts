import { ethers } from 'hardhat'

enum NETWORKS {
  'ZNX_TESTNET' = 'ZNX_TESTNET'
}

enum UCC {
  'ZNX_TESTNET' = '0x8A2AA3F73402972FeBBE74a1f99390158C8802Be'
}

const FEES_COLLECTOR_CUT_PER_MILLION = 0
const ROYALTIES_CUT_PER_MILLION = 25000

/**
 * @dev Steps:
 * Deploy the Bid
 */
async function main() {
  const owner = process.env['OWNER']
  const feeCollector = process.env['FEE_COLLECTOR']
  const royaltiesManager = process.env['ROYALTIES_MANAGER']

  const network =
    NETWORKS[(process.env['NETWORK'] || 'ZNX_TESTNET') as NETWORKS]
  if (!network) {
    throw 'Invalid network'
  }

  // Deploy collection marketplace
  let acceptedToken: string = UCC[network]

  const BidContract = await ethers.getContractFactory('ERC721Bid')
  const bidContract = await BidContract.deploy(
    owner,
    feeCollector,
    acceptedToken,
    royaltiesManager,
    FEES_COLLECTOR_CUT_PER_MILLION,
    ROYALTIES_CUT_PER_MILLION
  )

  console.log('Bid Contract:', bidContract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

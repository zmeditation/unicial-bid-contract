var ERC721Bid = artifacts.require('./ERC721Bid.sol')

module.exports = async function(deployer) {
  const owner = '0x17E7BB9216206424eFc98354e7aae5F818CAbEE3'
  const feesCollector = '0x6b0bA1d80E5447DC37d90813ad4eaEB983f6543d'
  const uccAddress = '0x8A2AA3F73402972FeBBE74a1f99390158C8802Be'
  const royaltiesManager = '0x3BCB30779B9ED6F4141C93244425f1881aDd9f34' //contract address
  const feesCollectorCutPerMillion = 0
  const royaltiesCutPerMillion = 0

  await deployer.deploy(
    ERC721Bid,
    owner,
    feesCollector,
    uccAddress,
    royaltiesManager,
    feesCollectorCutPerMillion,
    royaltiesCutPerMillion
  )
}

import { bids as bidsEvent } from "../generated/Crowdfunding/Crowdfunding"
import { bids } from "../generated/schema"

export function handlebids(event: bidsEvent): void {
  let entity = new bids(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignId = event.params.campaignId
  entity.account = event.params.account
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

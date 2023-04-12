import {bids as bidsEvent} from "../generated/Crowdfunding/Crowdfunding"
import {crowdfunding} from "../generated/schema"

export function handlebids(event: bidsEvent): void {
    let entity = crowdfunding.load(event.params.campaignId.toString());
    if(entity == null){
      entity = new crowdfunding(event.params.campaignId.toString());
      entity.campaignId = event.params.campaignId
      entity.account = event.params.account
      entity.amount = event.params.amount

      entity.blockNumber = event.block.number
      entity.blockTimestamp = event.block.timestamp
      entity.transactionHash = event.transaction.hash
      entity.save()
    }
}

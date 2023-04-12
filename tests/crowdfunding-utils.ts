import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { bids } from "../generated/Crowdfunding/Crowdfunding"

export function createbidsEvent(
  campaignId: BigInt,
  account: Address,
  amount: BigInt
): bids {
  let bidsEvent = changetype<bids>(newMockEvent())

  bidsEvent.parameters = new Array()

  bidsEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  bidsEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bidsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bidsEvent
}

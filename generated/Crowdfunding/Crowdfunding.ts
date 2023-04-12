// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class bids extends ethereum.Event {
  get params(): bids__Params {
    return new bids__Params(this);
  }
}

export class bids__Params {
  _event: bids;

  constructor(event: bids) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Crowdfunding extends ethereum.SmartContract {
  static bind(address: Address): Crowdfunding {
    return new Crowdfunding("Crowdfunding", address);
  }

  haveParticipated(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "haveParticipated",
      "haveParticipated(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_haveParticipated(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "haveParticipated",
      "haveParticipated(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initiateCampaign(receiver: Address, goal: BigInt): BigInt {
    let result = super.call(
      "initiateCampaign",
      "initiateCampaign(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(goal)
      ]
    );

    return result[0].toBigInt();
  }

  try_initiateCampaign(
    receiver: Address,
    goal: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initiateCampaign",
      "initiateCampaign(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(goal)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numOfCampaign(): BigInt {
    let result = super.call("numOfCampaign", "numOfCampaign():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numOfCampaign(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numOfCampaign",
      "numOfCampaign():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdraw(campaignId: BigInt): boolean {
    let result = super.call("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(campaignId)
    ]);

    return result[0].toBoolean();
  }

  try_withdraw(campaignId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(campaignId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitiateCampaignCall extends ethereum.Call {
  get inputs(): InitiateCampaignCall__Inputs {
    return new InitiateCampaignCall__Inputs(this);
  }

  get outputs(): InitiateCampaignCall__Outputs {
    return new InitiateCampaignCall__Outputs(this);
  }
}

export class InitiateCampaignCall__Inputs {
  _call: InitiateCampaignCall;

  constructor(call: InitiateCampaignCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get goal(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class InitiateCampaignCall__Outputs {
  _call: InitiateCampaignCall;

  constructor(call: InitiateCampaignCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ParticipateCampaignCall extends ethereum.Call {
  get inputs(): ParticipateCampaignCall__Inputs {
    return new ParticipateCampaignCall__Inputs(this);
  }

  get outputs(): ParticipateCampaignCall__Outputs {
    return new ParticipateCampaignCall__Outputs(this);
  }
}

export class ParticipateCampaignCall__Inputs {
  _call: ParticipateCampaignCall;

  constructor(call: ParticipateCampaignCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ParticipateCampaignCall__Outputs {
  _call: ParticipateCampaignCall;

  constructor(call: ParticipateCampaignCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get finished(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

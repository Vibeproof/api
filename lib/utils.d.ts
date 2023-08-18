export declare const domain: {
  readonly name: 'Snaphost'
  readonly version: '1'
  readonly chainId: 1
  readonly verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
}
export declare const types: {
  readonly SismoAuth: readonly [
    {
      readonly name: 'authType'
      readonly type: 'uint8'
    },
    {
      readonly name: 'isAnon'
      readonly type: 'bool'
    }
  ]
  readonly SismoClaim: readonly [
    {
      readonly name: 'claimType'
      readonly type: 'uint8'
    },
    {
      readonly name: 'groupId'
      readonly type: 'string'
    },
    {
      readonly name: 'value'
      readonly type: 'uint'
    }
  ]
  readonly Event: readonly [
    {
      readonly name: 'id'
      readonly type: 'string'
    },
    {
      readonly name: 'title'
      readonly type: 'string'
    },
    {
      readonly name: 'organizer'
      readonly type: 'string'
    },
    {
      readonly name: 'description'
      readonly type: 'string'
    },
    {
      readonly name: 'tags'
      readonly type: 'string'
    },
    {
      readonly name: 'link'
      readonly type: 'string'
    },
    {
      readonly name: 'note'
      readonly type: 'string'
    },
    {
      readonly name: 'note_encrypted'
      readonly type: 'bool'
    },
    {
      readonly name: 'location'
      readonly type: 'string'
    },
    {
      readonly name: 'registration_start'
      readonly type: 'uint'
    },
    {
      readonly name: 'registration_end'
      readonly type: 'uint'
    },
    {
      readonly name: 'capacity'
      readonly type: 'uint'
    },
    {
      readonly name: 'start'
      readonly type: 'uint'
    },
    {
      readonly name: 'end'
      readonly type: 'uint'
    },
    {
      readonly name: 'price'
      readonly type: 'uint'
    },
    {
      readonly name: 'auths'
      readonly type: 'SismoAuth[]'
    },
    {
      readonly name: 'claims'
      readonly type: 'SismoClaim[]'
    },
    {
      readonly name: 'owner'
      readonly type: 'address'
    },
    {
      readonly name: 'timestamp'
      readonly type: 'uint'
    }
  ]
}

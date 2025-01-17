export type EscrowV2 = {
  "version": "0.1.0",
  "name": "escrow_v2",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenAccountMaker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintTokenMaker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintTokenTaker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountA",
          "type": "u64"
        },
        {
          "name": "amountB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancel",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenAccountMaker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "exchange",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "maker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountMakerB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountTakerA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountTakerB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "takerMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "escrow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mintTokenMaker",
            "type": "publicKey"
          },
          {
            "name": "mintTokenTaker",
            "type": "publicKey"
          },
          {
            "name": "amountA",
            "type": "u64"
          },
          {
            "name": "amountB",
            "type": "u64"
          },
          {
            "name": "escrowBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "vecU8",
            "type": "bytes"
          },
          {
            "name": "vecU16",
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    }
  ]
};

export const IDL: EscrowV2 = {
  "version": "0.1.0",
  "name": "escrow_v2",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenAccountMaker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintTokenMaker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintTokenTaker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountA",
          "type": "u64"
        },
        {
          "name": "amountB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancel",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenAccountMaker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "exchange",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "maker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountMakerB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountTakerA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccountTakerB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "takerMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "escrow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mintTokenMaker",
            "type": "publicKey"
          },
          {
            "name": "mintTokenTaker",
            "type": "publicKey"
          },
          {
            "name": "amountA",
            "type": "u64"
          },
          {
            "name": "amountB",
            "type": "u64"
          },
          {
            "name": "escrowBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "vecU8",
            "type": "bytes"
          },
          {
            "name": "vecU16",
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    }
  ]
};

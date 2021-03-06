export default function() {
  return {
    currentGroup: {
      creator: 0,
      desc_text: '',
      id: 0,
      last_post_at: '',
      create_at: '',
      name: '',
      num_member: 0,
      num_post: 0,
      password: '',
      read_permission: 1,
      joined: false,
      reward_contract: '',
      contractSymbol: '',
      reward_join: '0.00',
      reward_post: '0.00',

      pinned: 0,
    },
    currentGroupOwner: {
      address: '',
      avatar: '',
      id: 0,
      mail_export: '',
      name: '',
    },
    contracts: [
      {
        contract: '0x7Ef8ab7d65ed4209a5714e80bD497C2852A1666b',
        name: 'baby2016',
        symbol: 'baby2016',
      },
      { contract: '', name: 'Ethereum', symbol: 'ETH' },

      {
        contract: '0xa74ae2d3a4c3f6d9454634fee91dc7aab6724cf9',
        name: 'Gencoin',
        symbol: 'NES',
      },
      {
        contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        name: 'Tether USD',
        symbol: 'USDT',
      },
    ],
    joinedGroupIdList: [],
  };
}

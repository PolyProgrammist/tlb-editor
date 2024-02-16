let jsonUnit = {
    kind: 'Unit',
}
let jsonTrue = {
    kind: 'True',
}
let jsonBoolFalse = {
    kind: 'BoolFalse',
}
let jsonBoolTrue = {
    kind: 'BoolTrue',
}
let jsonHmLabel = {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
}
let jsonUnary = {
    kind: 'Unary_unary_zero',
}
let jsonBitstringSet = {
    kind: 'BitstringSet',
    n: 0,
    _: {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
}
let jsonAnycast = {
    kind: 'Anycast',
    depth: 0,
    rewrite_pfx: 0b0,
}
let jsonCoins = {
    kind: 'Coins',
    grams: 0,
}
let jsonExtraCurrencyCollection = {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
}
let jsonCurrencyCollection = {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
}
let jsonCommonMsgInfo = {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
}
let jsonCommonMsgInfoRelaxed = {
    kind: 'CommonMsgInfoRelaxed_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
}
let jsonTickTock = {
    kind: 'TickTock',
    tick: false,
    tock: false,
}
let jsonStateInit = {
    kind: 'StateInit',
    split_depth: {
    kind: 'Maybe_nothing',
},
    special: {
    kind: 'Maybe_nothing',
},
    code: {
    kind: 'Maybe_nothing',
},
    data: {
    kind: 'Maybe_nothing',
},
    library: {
    kind: 'Maybe_nothing',
},
}
let jsonStateInitWithLibs = {
    kind: 'StateInitWithLibs',
    split_depth: {
    kind: 'Maybe_nothing',
},
    special: {
    kind: 'Maybe_nothing',
},
    code: {
    kind: 'Maybe_nothing',
},
    data: {
    kind: 'Maybe_nothing',
},
    library: {
},
}
let jsonSimpleLib = {
    kind: 'SimpleLib',
    public0: false,
    root: 'te6cckEBAQEAAgAAAEysuc0=',
}
let jsonMessageAny = {
    kind: 'MessageAny',
    anon0: {
    kind: 'Message',
    info: {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
}
let jsonIntermediateAddress = {
    kind: 'IntermediateAddress_interm_addr_regular',
    use_dest_bits: 0,
}
let jsonMsgEnvelope = {
    kind: 'MsgEnvelope',
    cur_addr: {
    kind: 'IntermediateAddress_interm_addr_regular',
    use_dest_bits: 0,
},
    next_addr: {
    kind: 'IntermediateAddress_interm_addr_regular',
    use_dest_bits: 0,
},
    fwd_fee_remaining: 0,
    msg: {
    kind: 'Message',
    info: {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
}
let jsonInMsg = {
    kind: 'InMsg_msg_import_ext',
    msg: {
    kind: 'Message',
    info: {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
    transaction: {
    kind: 'Transaction',
    account_addr: 0b0,
    lt: 0,
    prev_trans_hash: 0b0,
    prev_trans_lt: 0,
    now: 0,
    outmsg_cnt: 0,
    orig_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    end_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    out_msgs: {
},
    total_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    state_update: {
    kind: 'HASH_UPDATE',
    old_hash: 0b0,
    new_hash: 0b0,
},
    description: {
    kind: 'TransactionDescr_trans_ord',
    credit_first: false,
    compute_ph: {
    kind: 'TrComputePhase_tr_phase_compute_skipped',
    reason: {
    kind: 'ComputeSkipReason_cskip_no_state',
},
},
    aborted: false,
    destroyed: false,
},
},
}
let jsonImportFees = {
    kind: 'ImportFees',
    fees_collected: 0,
    value_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonInMsgDescr = {
    kind: 'InMsgDescr',
    anon0: {
},
}
let jsonOutMsg = {
    kind: 'OutMsg_msg_export_ext',
    msg: {
    kind: 'Message',
    info: {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
    transaction: {
    kind: 'Transaction',
    account_addr: 0b0,
    lt: 0,
    prev_trans_hash: 0b0,
    prev_trans_lt: 0,
    now: 0,
    outmsg_cnt: 0,
    orig_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    end_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    out_msgs: {
},
    total_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    state_update: {
    kind: 'HASH_UPDATE',
    old_hash: 0b0,
    new_hash: 0b0,
},
    description: {
    kind: 'TransactionDescr_trans_ord',
    credit_first: false,
    compute_ph: {
    kind: 'TrComputePhase_tr_phase_compute_skipped',
    reason: {
    kind: 'ComputeSkipReason_cskip_no_state',
},
},
    aborted: false,
    destroyed: false,
},
},
}
let jsonEnqueuedMsg = {
    kind: 'EnqueuedMsg',
    enqueued_lt: 0,
    out_msg: {
    kind: 'MsgEnvelope',
    cur_addr: {
    kind: 'IntermediateAddress_interm_addr_regular',
    use_dest_bits: 0,
},
    next_addr: {
    kind: 'IntermediateAddress_interm_addr_regular',
    use_dest_bits: 0,
},
    fwd_fee_remaining: 0,
    msg: {
    kind: 'Message',
    info: {
    kind: 'CommonMsgInfo_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
},
}
let jsonOutMsgDescr = {
    kind: 'OutMsgDescr',
    anon0: {
},
}
let jsonOutMsgQueue = {
    kind: 'OutMsgQueue',
    anon0: {
},
}
let jsonProcessedUpto = {
    kind: 'ProcessedUpto',
    last_msg_lt: 0,
    last_msg_hash: 0b0,
}
let jsonProcessedInfo = {
    kind: 'ProcessedInfo',
    anon0: {
},
}
let jsonIhrPendingSince = {
    kind: 'IhrPendingSince',
    import_lt: 0,
}
let jsonIhrPendingInfo = {
    kind: 'IhrPendingInfo',
    anon0: {
},
}
let jsonOutMsgQueueInfo = {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
}
let jsonStorageUsed = {
    kind: 'StorageUsed',
    _cells: 0,
    bits: 0,
    public_cells: 0,
}
let jsonStorageUsedShort = {
    kind: 'StorageUsedShort',
    _cells: 0,
    bits: 0,
}
let jsonStorageInfo = {
    kind: 'StorageInfo',
    used: {
    kind: 'StorageUsed',
    _cells: 0,
    bits: 0,
    public_cells: 0,
},
    last_paid: 0,
    due_payment: {
    kind: 'Maybe_nothing',
},
}
let jsonAccount = {
    kind: 'Account_account_none',
}
let jsonAccountStorage = {
    kind: 'AccountStorage',
    last_trans_lt: 0,
    balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    state: {
    kind: 'AccountState_account_uninit',
},
}
let jsonAccountState = {
    kind: 'AccountState_account_uninit',
}
let jsonAccountStatus = {
    kind: 'AccountStatus_acc_state_uninit',
}
let jsonShardAccount = {
    kind: 'ShardAccount',
    account: {
    kind: 'Account_account_none',
},
    last_trans_hash: 0b0,
    last_trans_lt: 0,
}
let jsonDepthBalanceInfo = {
    kind: 'DepthBalanceInfo',
    split_depth: 0,
    balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonShardAccounts = {
    kind: 'ShardAccounts',
    anon0: {
},
}
let jsonTransaction = {
    kind: 'Transaction',
    account_addr: 0b0,
    lt: 0,
    prev_trans_hash: 0b0,
    prev_trans_lt: 0,
    now: 0,
    outmsg_cnt: 0,
    orig_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    end_status: {
    kind: 'AccountStatus_acc_state_uninit',
},
    in_msg: {
    kind: 'Maybe_nothing',
},
    out_msgs: {
},
    total_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    state_update: {
    kind: 'HASH_UPDATE',
    old_hash: 0b0,
    new_hash: 0b0,
},
    description: {
    kind: 'TransactionDescr_trans_ord',
    credit_first: false,
    storage_ph: {
    kind: 'Maybe_nothing',
},
    credit_ph: {
    kind: 'Maybe_nothing',
},
    compute_ph: {
    kind: 'TrComputePhase_tr_phase_compute_skipped',
    reason: {
    kind: 'ComputeSkipReason_cskip_no_state',
},
},
    action: {
    kind: 'Maybe_nothing',
},
    aborted: false,
    bounce: {
    kind: 'Maybe_nothing',
},
    destroyed: false,
},
}
let jsonAccountBlock = {
    kind: 'AccountBlock',
    account_addr: 0b0,
    transactions: {
    kind: 'HashmapAug',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
    state_update: {
    kind: 'HASH_UPDATE',
    old_hash: 0b0,
    new_hash: 0b0,
},
}
let jsonShardAccountBlocks = {
    kind: 'ShardAccountBlocks',
    anon0: {
},
}
let jsonTrStoragePhase = {
    kind: 'TrStoragePhase',
    storage_fees_collected: 0,
    storage_fees_due: {
    kind: 'Maybe_nothing',
},
    status_change: {
    kind: 'AccStatusChange_acst_unchanged',
},
}
let jsonAccStatusChange = {
    kind: 'AccStatusChange_acst_unchanged',
}
let jsonTrCreditPhase = {
    kind: 'TrCreditPhase',
    due_fees_collected: {
    kind: 'Maybe_nothing',
},
    credit: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonTrComputePhase = {
    kind: 'TrComputePhase_tr_phase_compute_skipped',
    reason: {
    kind: 'ComputeSkipReason_cskip_no_state',
},
}
let jsonComputeSkipReason = {
    kind: 'ComputeSkipReason_cskip_no_state',
}
let jsonTrActionPhase = {
    kind: 'TrActionPhase',
    success: false,
    valid: false,
    no_funds: false,
    status_change: {
    kind: 'AccStatusChange_acst_unchanged',
},
    total_fwd_fees: {
    kind: 'Maybe_nothing',
},
    total_action_fees: {
    kind: 'Maybe_nothing',
},
    result_code: 0,
    result_arg: {
    kind: 'Maybe_nothing',
},
    tot_actions: 0,
    spec_actions: 0,
    skipped_actions: 0,
    msgs_created: 0,
    action_list_hash: 0b0,
    tot_msg_size: {
    kind: 'StorageUsedShort',
    _cells: 0,
    bits: 0,
},
}
let jsonTrBouncePhase = {
    kind: 'TrBouncePhase_tr_phase_bounce_negfunds',
}
let jsonTransactionDescr = {
    kind: 'TransactionDescr_trans_ord',
    credit_first: false,
    storage_ph: {
    kind: 'Maybe_nothing',
},
    credit_ph: {
    kind: 'Maybe_nothing',
},
    compute_ph: {
    kind: 'TrComputePhase_tr_phase_compute_skipped',
    reason: {
    kind: 'ComputeSkipReason_cskip_no_state',
},
},
    action: {
    kind: 'Maybe_nothing',
},
    aborted: false,
    bounce: {
    kind: 'Maybe_nothing',
},
    destroyed: false,
}
let jsonSplitMergeInfo = {
    kind: 'SplitMergeInfo',
    cur_shard_pfx_len: 0,
    acc_split_depth: 0,
    this_addr: 0b0,
    sibling_addr: 0b0,
}
let jsonSmartContractInfo = {
    kind: 'SmartContractInfo',
    actions: 0,
    msgs_sent: 0,
    unixtime: 0,
    block_lt: 0,
    trans_lt: 0,
    rand_seed: 0b0,
    balance_remaining: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    myself: '0:0000000000000000000000000000000000000000000000000000000000000000',
    global_config: {
    kind: 'Maybe_nothing',
},
}
let jsonOutList = {
    kind: 'OutList_out_list_empty',
}
let jsonOutAction = {
    kind: 'OutAction_action_send_msg',
    mode: 0,
    out_msg: {
    kind: 'MessageRelaxed',
    info: {
    kind: 'CommonMsgInfoRelaxed_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
}
let jsonLibRef = {
    kind: 'LibRef_libref_hash',
    lib_hash: 0b0,
}
let jsonOutListNode = {
    kind: 'OutListNode',
    prev: 'te6cckEBAQEAAgAAAEysuc0=',
    action: {
    kind: 'OutAction_action_send_msg',
    mode: 0,
    out_msg: {
    kind: 'MessageRelaxed',
    info: {
    kind: 'CommonMsgInfoRelaxed_int_msg_info',
    ihr_disabled: false,
    bounce: false,
    bounced: false,
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
    dest: '0:0000000000000000000000000000000000000000000000000000000000000000',
    value: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    ihr_fee: 0,
    fwd_fee: 0,
    created_lt: 0,
    created_at: 0,
},
},
},
}
let jsonShardIdent = {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
}
let jsonExtBlkRef = {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
}
let jsonBlockIdExt = {
    kind: 'BlockIdExt',
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
}
let jsonBlkMasterInfo = {
    kind: 'BlkMasterInfo',
    master: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
}
let jsonShardStateUnsplit = {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
}
let jsonShardState = {
    kind: 'ShardState_split_state',
    left: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
    right: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
}
let jsonLibDescr = {
    kind: 'LibDescr',
    lib: 'te6cckEBAQEAAgAAAEysuc0=',
    publishers: {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
}
let jsonBlockInfo = {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
}
let jsonBlkPrevInfo = {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
}
let jsonBlock = {
    kind: 'Block',
    global_id: 0,
    info: {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
},
    value_flow: {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
},
    extra: {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
},
}
let jsonBlockExtra = {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
}
let jsonValueFlow = {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonFutureSplitMerge = {
    kind: 'FutureSplitMerge_fsm_none',
}
let jsonShardDescr = {
    kind: 'ShardDescr_shard_descr',
    seq_no: 0,
    reg_mc_seqno: 0,
    start_lt: 0,
    end_lt: 0,
    root_hash: 0b0,
    file_hash: 0b0,
    before_split: false,
    before_merge: false,
    want_split: false,
    want_merge: false,
    nx_cc_updated: false,
    flags: 0,
    next_catchain_seqno: 0,
    next_validator_shard: 0,
    min_ref_mc_seqno: 0,
    gen_utime: 0,
    split_merge_at: {
    kind: 'FutureSplitMerge_fsm_none',
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    funds_created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonShardHashes = {
    kind: 'ShardHashes',
    anon0: {
},
}
let jsonShardFeeCreated = {
    kind: 'ShardFeeCreated',
    fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    create: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonShardFees = {
    kind: 'ShardFees',
    anon0: {
},
}
let jsonConfigParams = {
    kind: 'ConfigParams',
    config_addr: 0b0,
    config: {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
}
let jsonValidatorInfo = {
    kind: 'ValidatorInfo',
    validator_list_hash_short: 0,
    catchain_seqno: 0,
    nx_cc_updated: false,
}
let jsonValidatorBaseInfo = {
    kind: 'ValidatorBaseInfo',
    validator_list_hash_short: 0,
    catchain_seqno: 0,
}
let jsonKeyMaxLt = {
    kind: 'KeyMaxLt',
    key: false,
    max_end_lt: 0,
}
let jsonKeyExtBlkRef = {
    kind: 'KeyExtBlkRef',
    key: false,
    blk_ref: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
}
let jsonOldMcBlocksInfo = {
    kind: 'OldMcBlocksInfo',
    anon0: {
},
}
let jsonCounters = {
    kind: 'Counters',
    last_updated: 0,
    total: 0,
    cnt2048: 0,
    cnt65536: 0,
}
let jsonCreatorStats = {
    kind: 'CreatorStats',
    mc_blocks: {
    kind: 'Counters',
    last_updated: 0,
    total: 0,
    cnt2048: 0,
    cnt65536: 0,
},
    shard_blocks: {
    kind: 'Counters',
    last_updated: 0,
    total: 0,
    cnt2048: 0,
    cnt65536: 0,
},
}
let jsonBlockCreateStats = {
    kind: 'BlockCreateStats_block_create_stats',
    counters: {
},
}
let jsonMcStateExtra = {
    kind: 'McStateExtra',
    shard_hashes: {
    kind: 'ShardHashes',
    anon0: {
},
},
    config: {
    kind: 'ConfigParams',
    config_addr: 0b0,
    config: {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
},
    flags: 0,
    validator_info: {
    kind: 'ValidatorInfo',
    validator_list_hash_short: 0,
    catchain_seqno: 0,
    nx_cc_updated: false,
},
    prev_blocks: {
    kind: 'OldMcBlocksInfo',
    anon0: {
},
},
    after_key_block: false,
    last_key_block: {
    kind: 'Maybe_nothing',
},
    global_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
}
let jsonSigPubKey = {
    kind: 'SigPubKey',
    pubkey: 0b0,
}
let jsonCryptoSignatureSimple = {
    kind: 'CryptoSignatureSimple',
    R: 0b0,
    s: 0b0,
}
let jsonCryptoSignature = {
    kind: 'CryptoSignature_chained_signature',
    signed_cert: {
    kind: 'SignedCertificate',
    certificate: {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
},
},
    temp_key_signature: {
    kind: 'CryptoSignatureSimple',
    R: 0b0,
    s: 0b0,
},
}
let jsonCryptoSignaturePair = {
    kind: 'CryptoSignaturePair',
    node_id_short: 0b0,
    sign: {
    kind: 'CryptoSignature_chained_signature',
    signed_cert: {
    kind: 'SignedCertificate',
    certificate: {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
},
},
    temp_key_signature: {
    kind: 'CryptoSignatureSimple',
    R: 0b0,
    s: 0b0,
},
},
}
let jsonCertificate = {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
}
let jsonCertificateEnv = {
    kind: 'CertificateEnv',
    certificate: {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
},
}
let jsonSignedCertificate = {
    kind: 'SignedCertificate',
    certificate: {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
},
    certificate_signature: {
    kind: 'CryptoSignature_chained_signature',
    temp_key_signature: {
    kind: 'CryptoSignatureSimple',
    R: 0b0,
    s: 0b0,
},
},
}
let jsonMcBlockExtra = {
    kind: 'McBlockExtra',
    key_block: 0,
    shard_hashes: {
    kind: 'ShardHashes',
    anon0: {
},
},
    shard_fees: {
    kind: 'ShardFees',
    anon0: {
},
},
    prev_blk_signatures: {
},
    recover_create_msg: {
    kind: 'Maybe_nothing',
},
    mint_msg: {
    kind: 'Maybe_nothing',
},
}
let jsonValidatorDescr = {
    kind: 'ValidatorDescr_validator',
    public_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    weight: 0,
}
let jsonValidatorSet = {
    kind: 'ValidatorSet_validators',
    utime_since: 0,
    utime_until: 0,
    total: 0,
    main: 0,
    list: {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel_hml_short',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary_unary_zero',
},
},
},
}
let jsonConfigParam = {
    kind: 'ConfigParam__',
    config_addr: 0b0,
}
let jsonBurningConfig = {
    kind: 'BurningConfig',
    blackhole_addr: {
    kind: 'Maybe_nothing',
},
    fee_burn_num: 0,
    fee_burn_denom: 0,
}
let jsonGlobalVersion = {
    kind: 'GlobalVersion',
    version: 0,
    capabilities: 0,
}
let jsonConfigProposalSetup = {
    kind: 'ConfigProposalSetup',
    min_tot_rounds: 0,
    max_tot_rounds: 0,
    min_wins: 0,
    max_losses: 0,
    min_store_sec: 0,
    max_store_sec: 0,
    bit_price: 0,
    _cell_price: 0,
}
let jsonConfigVotingSetup = {
    kind: 'ConfigVotingSetup',
    normal_params: {
    kind: 'ConfigProposalSetup',
    min_tot_rounds: 0,
    max_tot_rounds: 0,
    min_wins: 0,
    max_losses: 0,
    min_store_sec: 0,
    max_store_sec: 0,
    bit_price: 0,
    _cell_price: 0,
},
    critical_params: {
    kind: 'ConfigProposalSetup',
    min_tot_rounds: 0,
    max_tot_rounds: 0,
    min_wins: 0,
    max_losses: 0,
    min_store_sec: 0,
    max_store_sec: 0,
    bit_price: 0,
    _cell_price: 0,
},
}
let jsonConfigProposal = {
    kind: 'ConfigProposal',
    param_id: 0,
    param_value: {
    kind: 'Maybe_nothing',
},
    if_hash_equal: {
    kind: 'Maybe_nothing',
},
}
let jsonConfigProposalStatus = {
    kind: 'ConfigProposalStatus',
    expires: 0,
    proposal: {
    kind: 'ConfigProposal',
    param_id: 0,
    param_value: {
    kind: 'Maybe_nothing',
},
    if_hash_equal: {
    kind: 'Maybe_nothing',
},
},
    is_critical: false,
    voters: {
},
    remaining_weight: 0,
    validator_set_id: 0,
    rounds_remaining: 0,
    wins: 0,
    losses: 0,
}
let jsonWorkchainFormat = {
    kind: 'WorkchainFormat_wfmt_basic',
    vm_version: 0,
    vm_mode: 0,
}
let jsonWcSplitMergeTimings = {
    kind: 'WcSplitMergeTimings',
    split_merge_delay: 0,
    split_merge_interval: 0,
    min_split_merge_interval: 0,
    max_split_merge_delay: 0,
}
let jsonWorkchainDescr = {
    kind: 'WorkchainDescr_workchain',
    enabled_since: 0,
    actual_min_split: 0,
    min_split: 0,
    max_split: 0,
    basic: 0,
    active: false,
    accept_msgs: false,
    flags: 0,
    zerostate_root_hash: 0b0,
    zerostate_file_hash: 0b0,
    version: 0,
    format: {
    kind: 'WorkchainFormat_wfmt_basic',
    vm_version: 0,
    vm_mode: 0,
},
}
let jsonComplaintPricing = {
    kind: 'ComplaintPricing',
    deposit: 0,
    bit_price: 0,
    _cell_price: 0,
}
let jsonBlockCreateFees = {
    kind: 'BlockCreateFees',
    masterchain_block_fee: 0,
    basechain_block_fee: 0,
}
let jsonStoragePrices = {
    kind: 'StoragePrices',
    utime_since: 0,
    bit_price_ps: 0,
    _cell_price_ps: 0,
    mc_bit_price_ps: 0,
    mc_cell_price_ps: 0,
}
let jsonGasLimitsPrices = {
    kind: 'GasLimitsPrices_gas_prices',
    gas_price: 0,
    gas_limit: 0,
    gas_credit: 0,
    block_gas_limit: 0,
    freeze_due_limit: 0,
    delete_due_limit: 0,
}
let jsonParamLimits = {
    kind: 'ParamLimits',
    underload: 0,
    soft_limit: 0,
    hard_limit: 0,
}
let jsonBlockLimits = {
    kind: 'BlockLimits',
    bytes: {
    kind: 'ParamLimits',
    underload: 0,
    soft_limit: 0,
    hard_limit: 0,
},
    gas: {
    kind: 'ParamLimits',
    underload: 0,
    soft_limit: 0,
    hard_limit: 0,
},
    lt_delta: {
    kind: 'ParamLimits',
    underload: 0,
    soft_limit: 0,
    hard_limit: 0,
},
}
let jsonMsgForwardPrices = {
    kind: 'MsgForwardPrices',
    lump_price: 0,
    bit_price: 0,
    _cell_price: 0,
    ihr_price_factor: 0,
    first_frac: 0,
    next_frac: 0,
}
let jsonCatchainConfig = {
    kind: 'CatchainConfig_catchain_config',
    mc_catchain_lifetime: 0,
    shard_catchain_lifetime: 0,
    shard_validators_lifetime: 0,
    shard_validators_num: 0,
}
let jsonConsensusConfig = {
    kind: 'ConsensusConfig_consensus_config',
    round_candidates: 0,
    next_candidate_delay_ms: 0,
    consensus_timeout_ms: 0,
    fast_attempts: 0,
    attempt_duration: 0,
    catchain_max_deps: 0,
    max_block_bytes: 0,
    max_collated_bytes: 0,
}
let jsonValidatorTempKey = {
    kind: 'ValidatorTempKey',
    adnl_addr: 0b0,
    temp_public_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    seqno: 0,
    valid_until: 0,
}
let jsonValidatorSignedTempKey = {
    kind: 'ValidatorSignedTempKey',
    key: {
    kind: 'ValidatorTempKey',
    adnl_addr: 0b0,
    temp_public_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    seqno: 0,
    valid_until: 0,
},
    signature: {
    kind: 'CryptoSignature_chained_signature',
    signed_cert: {
    kind: 'SignedCertificate',
    certificate: {
    kind: 'Certificate',
    temp_key: {
    kind: 'SigPubKey',
    pubkey: 0b0,
},
    valid_since: 0,
    valid_until: 0,
},
},
    temp_key_signature: {
    kind: 'CryptoSignatureSimple',
    R: 0b0,
    s: 0b0,
},
},
}
let jsonMisbehaviourPunishmentConfig = {
    kind: 'MisbehaviourPunishmentConfig',
    default_flat_fine: 0,
    default_proportional_fine: 0,
    severity_flat_mult: 0,
    severity_proportional_mult: 0,
    unpunishable_interval: 0,
    long_interval: 0,
    long_flat_mult: 0,
    long_proportional_mult: 0,
    medium_interval: 0,
    medium_flat_mult: 0,
    medium_proportional_mult: 0,
}
let jsonSizeLimitsConfig = {
    kind: 'SizeLimitsConfig_size_limits_config',
    max_msg_bits: 0,
    max_msg_cells: 0,
    max_library_cells: 0,
    max_vm_data_depth: 0,
    max_ext_msg_size: 0,
    max_ext_msg_depth: 0,
}
let jsonSuspendedAddressList = {
    kind: 'SuspendedAddressList',
    addresses: {
},
    suspended_until: 0,
}
let jsonOracleBridgeParams = {
    kind: 'OracleBridgeParams',
    bridge_address: 0b0,
    oracle_mutlisig_address: 0b0,
    oracles: {
},
    external_chain_address: 0b0,
}
let jsonJettonBridgePrices = {
    kind: 'JettonBridgePrices',
    bridge_burn_fee: {
    kind: 'Coins',
    grams: 0,
},
    bridge_mint_fee: {
    kind: 'Coins',
    grams: 0,
},
    wallet_min_tons_for_storage: {
    kind: 'Coins',
    grams: 0,
},
    wallet_gas_consumption: {
    kind: 'Coins',
    grams: 0,
},
    minter_min_tons_for_storage: {
    kind: 'Coins',
    grams: 0,
},
    discover_gas_consumption: {
    kind: 'Coins',
    grams: 0,
},
}
let jsonJettonBridgeParams = {
    kind: 'JettonBridgeParams_jetton_bridge_params_v0',
    bridge_address: 0b0,
    oracles_address: 0b0,
    oracles: {
},
    state_flags: 0,
    burn_bridge_fee: {
    kind: 'Coins',
    grams: 0,
},
}
let jsonBlockSignaturesPure = {
    kind: 'BlockSignaturesPure',
    sig_count: 0,
    sig_weight: 0,
    signatures: {
},
}
let jsonBlockSignatures = {
    kind: 'BlockSignatures',
    validator_info: {
    kind: 'ValidatorBaseInfo',
    validator_list_hash_short: 0,
    catchain_seqno: 0,
},
    pure_signatures: {
    kind: 'BlockSignaturesPure',
    sig_count: 0,
    sig_weight: 0,
    signatures: {
},
},
}
let jsonBlockProof = {
    kind: 'BlockProof',
    proof_for: {
    kind: 'BlockIdExt',
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    root: 'te6cckEBAQEAAgAAAEysuc0=',
    signatures: {
    kind: 'Maybe_nothing',
},
}
let jsonProofChain = {
    kind: 'ProofChain_chain_empty',
}
let jsonTopBlockDescr = {
    kind: 'TopBlockDescr',
    proof_for: {
    kind: 'BlockIdExt',
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    signatures: {
    kind: 'Maybe_nothing',
},
    len: 0,
    chain: {
    kind: 'ProofChain_chain_empty',
},
}
let jsonTopBlockDescrSet = {
    kind: 'TopBlockDescrSet',
    collection: {
},
}
let jsonProducerInfo = {
    kind: 'ProducerInfo',
    utime: 0,
    mc_blk_ref: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    state_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'Block',
    global_id: 0,
    info: {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
},
    value_flow: {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
},
    extra: {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
    prod_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'ShardState_split_state',
    left: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
    right: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
}
let jsonComplaintDescr = {
    kind: 'ComplaintDescr_no_blk_gen',
    from_utime: 0,
    prod_info: {
    kind: 'ProducerInfo',
    utime: 0,
    mc_blk_ref: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    state_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'Block',
    global_id: 0,
    info: {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
},
    value_flow: {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
},
    extra: {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
    prod_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'ShardState_split_state',
    left: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
    right: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
},
}
let jsonValidatorComplaint = {
    kind: 'ValidatorComplaint',
    validator_pubkey: 0b0,
    description: {
    kind: 'ComplaintDescr_no_blk_gen',
    from_utime: 0,
    prod_info: {
    kind: 'ProducerInfo',
    utime: 0,
    mc_blk_ref: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    state_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'Block',
    global_id: 0,
    info: {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
},
    value_flow: {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
},
    extra: {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
    prod_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'ShardState_split_state',
    left: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
    right: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
},
},
    created_at: 0,
    severity: 0,
    reward_addr: 0,
    paid: 0,
    suggested_fine: 0,
    suggested_fine_part: 0,
}
let jsonValidatorComplaintStatus = {
    kind: 'ValidatorComplaintStatus',
    complaint: {
    kind: 'ValidatorComplaint',
    validator_pubkey: 0b0,
    description: {
    kind: 'ComplaintDescr_no_blk_gen',
    from_utime: 0,
    prod_info: {
    kind: 'ProducerInfo',
    utime: 0,
    mc_blk_ref: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
    state_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'Block',
    global_id: 0,
    info: {
    kind: 'BlockInfo',
    prev_seq_no: 0,
    version: 0,
    not_master: 0,
    after_merge: 0,
    before_split: 0,
    after_split: 0,
    want_split: false,
    want_merge: false,
    key_block: false,
    vert_seqno_incr: 0,
    flags: 0,
    seq_no: 0,
    vert_seq_no: 0,
    shard: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    gen_utime: 0,
    start_lt: 0,
    end_lt: 0,
    gen_validator_list_hash_short: 0,
    gen_catchain_seqno: 0,
    min_ref_mc_seqno: 0,
    prev_key_block_seqno: 0,
    prev_ref: {
    kind: 'BlkPrevInfo_prev_blk_info',
    prev: {
    kind: 'ExtBlkRef',
    end_lt: 0,
    seq_no: 0,
    root_hash: 0b0,
    file_hash: 0b0,
},
},
},
    value_flow: {
    kind: 'ValueFlow_value_flow',
    from_prev_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    to_next_blk: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    exported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_collected: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    fees_imported: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    recovered: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    created: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    minted: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
},
    extra: {
    kind: 'BlockExtra',
    in_msg_descr: {
    kind: 'InMsgDescr',
    anon0: {
},
},
    out_msg_descr: {
    kind: 'OutMsgDescr',
    anon0: {
},
},
    account_blocks: {
    kind: 'ShardAccountBlocks',
    anon0: {
},
},
    rand_seed: 0b0,
    created_by: 0b0,
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
    prod_proof: {
    kind: 'MERKLE_PROOF',
    virtual_hash: 0b0,
    depth: 0,
    virtual_root: {
    kind: 'ShardState_split_state',
    left: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
    right: {
    kind: 'ShardStateUnsplit',
    global_id: 0,
    shard_id: {
    kind: 'ShardIdent',
    shard_pfx_bits: 0,
    workchain_id: 0,
    shard_prefix: 0,
},
    seq_no: 0,
    vert_seq_no: 0,
    gen_utime: 0,
    gen_lt: 0,
    min_ref_mc_seqno: 0,
    out_msg_queue_info: {
    kind: 'OutMsgQueueInfo',
    out_queue: {
    kind: 'OutMsgQueue',
    anon0: {
},
},
    proc_info: {
    kind: 'ProcessedInfo',
    anon0: {
},
},
    ihr_pending: {
    kind: 'IhrPendingInfo',
    anon0: {
},
},
},
    before_split: 0,
    accounts: {
    kind: 'ShardAccounts',
    anon0: {
},
},
    overload_history: 0,
    underload_history: 0,
    total_balance: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    total_validator_fees: {
    kind: 'CurrencyCollection',
    grams: 0,
    other: {
    kind: 'ExtraCurrencyCollection',
    dict: {
},
},
},
    libraries: {
},
    master_ref: {
    kind: 'Maybe_nothing',
},
    custom: {
    kind: 'Maybe_nothing',
},
},
},
},
},
},
    created_at: 0,
    severity: 0,
    reward_addr: 0,
    paid: 0,
    suggested_fine: 0,
    suggested_fine_part: 0,
},
    voters: {
},
    vset_id: 0,
    weight_remaining: 0,
}
let jsonVmStackValue = {
    kind: 'VmStackValue_vm_stk_null',
}
let jsonVmCellSlice = {
    kind: 'VmCellSlice',
    _cell: 'te6cckEBAQEAAgAAAEysuc0=',
    st_bits: 0,
    end_bits: 0,
    st_ref: 0,
    end_ref: 0,
}
let jsonVmTupleRef = {
    kind: 'VmTupleRef_vm_tupref_nil',
}
let jsonVmTuple = {
    kind: 'VmTuple_vm_tuple_nil',
}
let jsonVmStack = {
    kind: 'VmStack',
    depth: 0,
    stack: {
    kind: 'VmStackList_vm_stk_nil',
},
}
let jsonVmStackList = {
    kind: 'VmStackList_vm_stk_nil',
}
let jsonVmSaveList = {
    kind: 'VmSaveList',
    cregs: {
},
}
let jsonVmGasLimits = {
    kind: 'VmGasLimits',
    remaining: 0,
    max_limit: 0,
    cur_limit: 0,
    credit: 0,
}
let jsonVmLibraries = {
    kind: 'VmLibraries',
    libraries: {
},
}
let jsonVmControlData = {
    kind: 'VmControlData',
    nargs: {
    kind: 'Maybe_nothing',
},
    stack: {
    kind: 'Maybe_nothing',
},
    save: {
    kind: 'VmSaveList',
    cregs: {
},
},
    cp: {
    kind: 'Maybe_nothing',
},
}
let jsonVmCont = {
    kind: 'VmCont_vmc_std',
    cdata: {
    kind: 'VmControlData',
    nargs: {
    kind: 'Maybe_nothing',
},
    stack: {
    kind: 'Maybe_nothing',
},
    save: {
    kind: 'VmSaveList',
    cregs: {
},
},
    cp: {
    kind: 'Maybe_nothing',
},
},
    code: {
    kind: 'VmCellSlice',
    _cell: 'te6cckEBAQEAAgAAAEysuc0=',
    st_bits: 0,
    end_bits: 0,
    st_ref: 0,
    end_ref: 0,
},
}
let jsonDNS_RecordSet = {
    kind: 'DNS_RecordSet',
    anon0: {
},
}
let jsonTextChunkRef = {
    kind: 'TextChunkRef_chunk_ref_empty',
}
let jsonTextChunks = {
    kind: 'TextChunks_text_chunk_empty',
}
let jsonText = {
    kind: 'Text',
    chunks: 0,
    rest: {
    kind: 'TextChunks_text_chunk_empty',
},
}
let jsonDNSRecord = {
    kind: 'DNSRecord_dns_text',
    _: {
    kind: 'Text',
    chunks: 0,
    rest: {
    kind: 'TextChunks_text_chunk_empty',
},
},
}
let jsonProtoList = {
    kind: 'ProtoList_proto_list_nil',
}
let jsonProtocol = {
    kind: 'Protocol',
}
let jsonSmcCapList = {
    kind: 'SmcCapList_cap_list_nil',
}
let jsonSmcCapability = {
    kind: 'SmcCapability_cap_method_seqno',
}
let jsonChanConfig = {
    kind: 'ChanConfig',
    init_timeout: 0,
    close_timeout: 0,
    a_key: 0b0,
    b_key: 0b0,
    a_addr: '0:0000000000000000000000000000000000000000000000000000000000000000',
    b_addr: '0:0000000000000000000000000000000000000000000000000000000000000000',
    channel_id: 0,
    min_A_extra: 0,
}
let jsonChanState = {
    kind: 'ChanState_chan_state_init',
    signed_A: false,
    signed_B: false,
    min_A: 0,
    min_B: 0,
    expire_at: 0,
    A: 0,
    B: 0,
}
let jsonChanPromise = {
    kind: 'ChanPromise',
    channel_id: 0,
    promise_A: 0,
    promise_B: 0,
}
let jsonChanSignedPromise = {
    kind: 'ChanSignedPromise',
    sig: {
    kind: 'Maybe_nothing',
},
    promise: {
    kind: 'ChanPromise',
    channel_id: 0,
    promise_A: 0,
    promise_B: 0,
},
}
let jsonChanMsg = {
    kind: 'ChanMsg_chan_msg_init',
    inc_A: 0,
    inc_B: 0,
    min_A: 0,
    min_B: 0,
    channel_id: 0,
}
let jsonChanSignedMsg = {
    kind: 'ChanSignedMsg',
    sig_A: {
    kind: 'Maybe_nothing',
},
    sig_B: {
    kind: 'Maybe_nothing',
},
    msg: {
    kind: 'ChanMsg_chan_msg_init',
    inc_A: 0,
    inc_B: 0,
    min_A: 0,
    min_B: 0,
    channel_id: 0,
},
}
let jsonChanOp = {
    kind: 'ChanOp',
    msg: {
    kind: 'ChanSignedMsg',
    sig_A: {
    kind: 'Maybe_nothing',
},
    sig_B: {
    kind: 'Maybe_nothing',
},
    msg: {
    kind: 'ChanMsg_chan_msg_init',
    inc_A: 0,
    inc_B: 0,
    min_A: 0,
    min_B: 0,
    channel_id: 0,
},
},
}
let jsonChanData = {
    kind: 'ChanData',
    config: {
    kind: 'ChanConfig',
    init_timeout: 0,
    close_timeout: 0,
    a_key: 0b0,
    b_key: 0b0,
    a_addr: '0:0000000000000000000000000000000000000000000000000000000000000000',
    b_addr: '0:0000000000000000000000000000000000000000000000000000000000000000',
    channel_id: 0,
    min_A_extra: 0,
},
    state: {
    kind: 'ChanState_chan_state_init',
    signed_A: false,
    signed_B: false,
    min_A: 0,
    min_B: 0,
    expire_at: 0,
    A: 0,
    B: 0,
},
}
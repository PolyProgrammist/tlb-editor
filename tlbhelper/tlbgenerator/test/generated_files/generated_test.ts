let jsonSimple = {
    kind: 'Simple',
    a: 0,
    b: 0,
}
let jsonTypedArg = {
    kind: 'TypedArg',
}
let jsonTypedArgUser = {
    kind: 'TypedArgUser',
    x: {
    kind: 'TypedArg',
},
}
let jsonTwoConstructors = {
    kind: 'TwoConstructors',
    a: 0,
    b: 0,
    c: 0,
}
let jsonFixedIntParam = {
    kind: 'FixedIntParam',
    y: 0,
}
let jsonTypedField = {
    kind: 'TypedField',
    y: {
    kind: 'FixedIntParam',
    y: 0,
},
    c: 0,
}
let jsonSharpConstructor = {
    kind: 'SharpConstructor',
    y: {
    kind: 'FixedIntParam',
    y: 0,
},
    c: 0,
}
let jsonMaybe = {
    kind: 'Maybe',
}
let jsonTypedParam = {
    kind: 'TypedParam',
    x: {
    kind: 'Maybe',
},
}
let jsonEither = {
    kind: 'Either',
}
let jsonBitLenArg = {
    kind: 'BitLenArg',
    x: 0,
    value: 0,
}
let jsonBitLenArgUser = {
    kind: 'BitLenArgUser',
    t: {
    kind: 'BitLenArg',
    x: 0,
    value: 0,
},
}
let jsonExprArg = {
    kind: 'ExprArg',
    x: 0,
    value: 0,
}
let jsonExprArgUser = {
    kind: 'ExprArgUser',
    t: {
    kind: 'ExprArg',
    x: 0,
    value: 0,
},
}
let jsonComplexTypedField = {
    kind: 'ComplexTypedField',
    a: {
    kind: 'ExprArgUser',
    t: {
    kind: 'ExprArg',
    x: 0,
    value: 0,
},
},
}
let jsonCellTypedField = {
    kind: 'CellTypedField',
    a: {
    kind: 'ExprArgUser',
    t: {
    kind: 'ExprArg',
    x: 0,
    value: 0,
},
},
}
let jsonCellsSimple = {
    kind: 'CellsSimple',
    t: 0,
    q: 0,
    a: 0,
    e: 0,
    b: 0,
    d: 0,
    c: 0,
}
let jsonIntBits = {
    kind: 'IntBits',
    d: 0,
    g: 0b0,
    x: 'te6cckEBAQEAAgAAAEysuc0=',
}
let jsonIntBitsInside = {
    kind: 'IntBitsInside',
    x: 0,
    a: {
    kind: 'IntBits',
    d: 0,
    g: 0b0,
    x: 'te6cckEBAQEAAgAAAEysuc0=',
},
}
let jsonIntBitsOutside = {
    kind: 'IntBitsOutside',
    x: {
    kind: 'IntBitsInside',
    x: 0,
    a: {
    kind: 'IntBits',
    d: 0,
    g: 0b0,
    x: 'te6cckEBAQEAAgAAAEysuc0=',
},
},
}
let jsonIntBitsParametrized = {
    kind: 'IntBitsParametrized',
    e: 0,
    h: 0,
    f: 0,
    i: 0b0,
    j: 0,
    k: 0,
    tc: 'te6cckEBAQEAAgAAAEysuc0=',
}
let jsonIntBitsParametrizedInside = {
    kind: 'IntBitsParametrizedInside',
    x: 0,
    a: {
    kind: 'IntBitsParametrized',
    e: 0,
    h: 0,
    f: 0,
    i: 0b0,
    j: 0,
    k: 0,
    tc: 'te6cckEBAQEAAgAAAEysuc0=',
},
}
let jsonIntBitsParametrizedOutside = {
    kind: 'IntBitsParametrizedOutside',
    x: {
    kind: 'IntBitsParametrizedInside',
    x: 0,
    a: {
    kind: 'IntBitsParametrized',
    e: 0,
    h: 0,
    f: 0,
    i: 0b0,
    j: 0,
    k: 0,
    tc: 'te6cckEBAQEAAgAAAEysuc0=',
},
},
}
let jsonLessThan = {
    kind: 'LessThan',
    x: 0,
    y: 0,
}
let jsonOneComb = {
    kind: 'OneComb',
    t: 0,
}
let jsonManyComb = {
    kind: 'ManyComb',
}
let jsonUnary = {
    kind: 'Unary',
}
let jsonParamConst = {
    kind: 'ParamConst',
    m: 0,
    k: 0,
}
let jsonParamDifNames = {
    kind: 'ParamDifNames',
}
let jsonParamDifNamesUser = {
    kind: 'ParamDifNamesUser',
    k: 0,
    x: {
    kind: 'ParamDifNames',
},
}
let jsonNegationFromImplicit = {
    kind: 'NegationFromImplicit',
    y: 0,
    t: 0,
    z: 0,
}
let jsonUnaryUserCheckOrder = {
    kind: 'UnaryUserCheckOrder',
    l: 0,
    m: 0,
    label: {
    kind: 'Unary',
},
}
let jsonCombArgCellRef = {
    kind: 'CombArgCellRef',
    info: 0,
    init: {
    kind: 'Maybe',
},
}
let jsonCombArgCellRefUser = {
    kind: 'CombArgCellRefUser',
    x: {
    kind: 'CombArgCellRef',
    info: 0,
    init: {
    kind: 'Maybe',
},
},
}
let jsonMathExprAsCombArg = {
    kind: 'MathExprAsCombArg',
    n: 0,
    ref: {
    kind: 'BitLenArg',
    x: 0,
    value: 0,
},
}
let jsonEmptyTag = {
    kind: 'EmptyTag',
    a: 0,
}
let jsonSharpTag = {
    kind: 'SharpTag',
    x: 0,
}
let jsonDollarTag = {
    kind: 'DollarTag',
    x: 0,
}
let jsonTupleCheck = {
    kind: 'TupleCheck',
}
let jsonHashmap = {
    kind: 'Hashmap',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary',
},
},
    node: {
    kind: 'HashmapNode',
},
}
let jsonHashmapNode = {
    kind: 'HashmapNode',
}
let jsonHmLabel = {
    kind: 'HmLabel',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary',
},
}
let jsonHashmapEUser = {
    kind: 'HashmapEUser',
    x: {
},
}
let jsonConditionalField = {
    kind: 'ConditionalField',
    a: 0,
}
let jsonBitSelection = {
    kind: 'BitSelection',
    a: 0,
}
let jsonImplicitCondition = {
    kind: 'ImplicitCondition',
    flags: 0,
}
let jsonMultipleEmptyConstructor = {
    kind: 'MultipleEmptyConstructor',
    a: 0,
}
let jsonTrue = {
    kind: 'True',
}
let jsonParamNamedArgInSecondConstr = {
    kind: 'ParamNamedArgInSecondConstr',
    n: 0,
}
let jsonRefCombinatorAny = {
    kind: 'RefCombinatorAny',
    msg: {
    kind: 'Maybe',
},
}
let jsonEqualityExpression = {
    kind: 'EqualityExpression',
    n: 0,
}
let jsonConditionalRef = {
    kind: 'ConditionalRef',
    x: 0,
}
let jsonLoadFromNegationOutsideExpr = {
    kind: 'LoadFromNegationOutsideExpr',
    prev_seq_no: 0,
    seq_no: 0,
}
let jsonAnonymousData = {
    kind: 'AnonymousData',
    anon0: 0,
    anon0_0: 0,
}
let jsonFalseAnonField = {
    kind: 'FalseAnonField',
    value: 0,
}
let jsonConstructorOrder = {
    kind: 'ConstructorOrder',
    anon0: {
    kind: 'Simple',
    a: 0,
    b: 0,
},
}
let jsonCheckCrc32 = {
    kind: 'CheckCrc32',
    a: 0,
}
let jsonCheckKeyword = {
    kind: 'CheckKeyword',
    const0: 0,
}
let jsonRefCombinatorInRefHelper = {
    kind: 'RefCombinatorInRefHelper',
    t: 0,
    y: {
    kind: 'Maybe',
},
}
let jsonRefCombinatorInRef = {
    kind: 'RefCombinatorInRef',
    msg: {
    kind: 'RefCombinatorInRefHelper',
    t: 0,
    y: {
    kind: 'Maybe',
},
},
}
let jsonBoolUser = {
    kind: 'BoolUser',
    a: false,
}
let jsonAnycast = {
    kind: 'Anycast',
    depth: 0,
    rewrite_pfx: 0b0,
}
let jsonAddressUser = {
    kind: 'AddressUser',
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
}
let jsonExtAddressUser = {
    kind: 'ExtAddressUser',
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
}
let jsonAnyAddressUser = {
    kind: 'AnyAddressUser',
    src: '0:0000000000000000000000000000000000000000000000000000000000000000',
}
let jsonBitUser = {
    kind: 'BitUser',
    b: 0b0,
}
let jsonVarUIntegerUser = {
    kind: 'VarUIntegerUser',
    v: 0,
}
let jsonVarIntegerUser = {
    kind: 'VarIntegerUser',
    v: 0,
}
let jsonGramsUser = {
    kind: 'GramsUser',
    g: 0,
}
let jsonHashmapVUIUser = {
    kind: 'HashmapVUIUser',
    x: {
},
}
let jsonHashmapTPCell = {
    kind: 'HashmapTPCell',
    x: {
},
}
let jsonHashmapVarKey = {
    kind: 'HashmapVarKey',
    n: 0,
    x: {
},
}
let jsonHashmapVarKeyUser = {
    kind: 'HashmapVarKeyUser',
    x: {
    kind: 'HashmapVarKey',
    n: 0,
    x: {
},
},
}
let jsonHashmapExprKey = {
    kind: 'HashmapExprKey',
    n: 0,
    x: {
},
}
let jsonHashmapExprKeyUser = {
    kind: 'HashmapExprKeyUser',
    x: {
    kind: 'HashmapExprKey',
    n: 0,
    x: {
},
},
}
let jsonHashmapOneComb = {
    kind: 'HashmapOneComb',
    x: {
},
}
let jsonHashmapOneCombUser = {
    kind: 'HashmapOneCombUser',
    x: {
    kind: 'HashmapOneComb',
    x: {
},
},
}
let jsonHashmapAug = {
    kind: 'HashmapAug',
    n: 0,
    l: 0,
    m: 0,
    label: {
    kind: 'HmLabel',
    m: 0,
    n: 0,
    len: {
    kind: 'Unary',
},
},
    node: {
    kind: 'HashmapAugNode',
},
}
let jsonHashmapAugNode = {
    kind: 'HashmapAugNode',
}
let jsonHashmapAugEUser = {
    kind: 'HashmapAugEUser',
    x: {
},
}

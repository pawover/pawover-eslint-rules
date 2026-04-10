export default {
  indent: 2,
  tsMemberOrder: [
    // 1. 签名
    "signature",
    "call-signature",

    // 2. 静态初始化
    "static-initialization",

    // 3. 字段
    "#private-static-field",
    "private-static-field",
    "protected-static-field",
    "public-static-field",
    "static-field",

    "#private-instance-field",
    "private-instance-field",
    "protected-instance-field",
    "public-instance-field",
    "instance-field",

    "#private-field",
    "private-field",
    "protected-field",
    "public-field",
    "field",

    // 4. 构造函数
    "private-constructor",
    "protected-constructor",
    "public-constructor",

    // 5. 访问器 (Get/Set)
    "#private-static-get",
    "#private-static-set",
    "private-static-get",
    "private-static-set",
    "protected-static-get",
    "protected-static-set",
    "public-static-get",
    "public-static-set",
    "static-get",
    "static-set",

    "protected-abstract-get",
    "protected-abstract-set",
    "public-abstract-get",
    "public-abstract-set",
    "abstract-get",
    "abstract-set",

    "#private-instance-get",
    "#private-instance-set",
    "private-instance-get",
    "private-instance-set",
    "protected-instance-get",
    "protected-instance-set",
    "public-instance-get",
    "public-instance-set",
    "instance-get",
    "instance-set",

    "private-decorated-get",
    "private-decorated-set",
    "protected-decorated-get",
    "protected-decorated-set",
    "public-decorated-get",
    "public-decorated-set",
    "decorated-get",
    "decorated-set",

    "#private-get",
    "#private-set",
    "private-get",
    "private-set",
    "protected-get",
    "protected-set",
    "public-get",
    "public-set",
    "get",
    "set",

    // 6. 方法
    "#private-static-method",
    "private-static-method",
    "protected-static-method",
    "public-static-method",
    "static-method",

    "#private-instance-method",
    "private-instance-method",
    "protected-instance-method",
    "public-instance-method",
    "instance-method",

    "private-method",
    "protected-method",
    "public-method",
    "#private-method",
    "method",
  ],
};

var random = function random() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 255;
  var maxNum = Number(max) + 1;
  return Math.floor(Math.random() * maxNum);
};

var int = /*#__PURE__*/Object.freeze({
  __proto__: null,
  random: random
});

var random$1 = function random() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

  if (typeof size !== 'number' && size <= 0) {
    throw new Error('You have to add a number at least 1');
  }

  var outputNum = '';
  var basicNum = '0123456789';

  for (var i = 0; i < size; i++) {
    outputNum += basicNum.charAt(Math.floor(Math.random() * basicNum.length));
  }

  return outputNum;
};

var loop = function loop(fromNum, toNum) {
  if (typeof fromNum !== 'number' & fromNum <= -1) {
    throw new Error('Only accept number here, start from 0');
  }

  if (typeof toNum !== 'number' & toNum <= 0) {
    throw new Error('Only accept number here, start from 1');
  }

  var arrNum = [];

  while (fromNum <= toNum) {
    arrNum.push(fromNum++);
  }

  return arrNum;
};

var isNumber = function isNumber(numArg) {
  return !isNaN(numArg) && typeof Number(numArg) === 'number' ? true : false;
};
var isPositive = function isPositive(numArg) {
  if (typeof numArg !== 'number' && typeof numArg !== 'string') {
    throw new Error('You must input only number format here');
  }

  return Math.sign(numArg) === 1 ? true : false;
};
var isNegative = function isNegative(numArg) {
  if (typeof numArg !== 'number' && typeof numArg !== 'string') {
    throw new Error('You must input only number format here');
  }

  return Math.sign(numArg) === -1 ? true : false;
};

var isString = function isString(param) {
  return typeof param === 'string' ? true : false;
};

var calc = function calc(leftOperand, rightOperand, operator) {
  if (!isNumber(leftOperand)) {
    throw new Error('This is left operand and must be in number type');
  }

  if (!isNumber(rightOperand)) {
    throw new Error('This is left operand and must be in number type');
  }

  if (!isString(operator)) {
    throw new Error('Operator must be one of these: add, subtract, multiply, divide, reminder or exponent');
  }

  var calcNumber = 0;

  if (operator === 'add' || operator === 'addition' || operator === 'plus' || operator === '+') {
    calcNumber = Number(leftOperand) + Number(rightOperand);
  } else if (operator === 'subtract' || operator === 'subtraction' || operator === 'minus' || operator === '-') {
    calcNumber = Number(leftOperand) - Number(rightOperand);
  } else if (operator === 'multiply' || operator === 'multiplication' || operator === '×' || operator === '*') {
    calcNumber = Number(leftOperand) * Number(rightOperand);
  } else if (operator === 'divide' || operator === 'division' || operator === '÷' || operator === '/') {
    calcNumber = Number(leftOperand) / Number(rightOperand);
  } else if (operator === 'remainder' || operator === 'modulo' || operator === '%') {
    // remainder/modulo: the left operand must be greater than the right one, the right operand will be calculate first to match the number of the left operand until they the same or below the left number and the left over will be the result, otherwise the left operand as a result if lower than the right operand
    calcNumber = Number(leftOperand) % Number(rightOperand);
  } else if (operator === 'exponent' || operator === 'exponentiation' || operator === '**') {
    calcNumber = Math.pow(Number(leftOperand), Number(rightOperand));
  }

  return calcNumber;
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var isObject = function isObject(objArg) {
  return _typeof(objArg) === 'object' && objArg !== null && Object.prototype.toString.call(objArg) === "[object Object]" ? true : false;
};
var isObjectValues = function isObjectValues(objArg) {
  return Object.values(objArg).filter(function (objVal) {
    return objVal !== '' && objVal !== 0 && objVal !== {} && objVal !== [];
  }).join('') ? true : false;
};

var currency = function currency(amount) {
  var ccy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (!isNumber(amount)) {
    throw new Error('Amount must be in a number type');
  }

  if (!isString(ccy) && ccy.length === 3) {
    throw new Error('Currency code must have at least 3 uppercase character');
  }

  if (!isString(locale)) {
    throw new Error('Locale code must contain 2 languages and 2 country code and separated by dash (-)');
  }

  if (!isObject(options)) {
    throw new Error('Currency options must be in object type');
  }

  return new Intl.NumberFormat(locale, _objectSpread2({
    style: 'currency',
    currency: ccy.toUpperCase()
  }, options)).format(amount);
};

var number = /*#__PURE__*/Object.freeze({
  __proto__: null,
  random: random$1,
  loop: loop,
  isNumber: isNumber,
  isPositive: isPositive,
  isNegative: isNegative,
  calc: calc,
  currency: currency
});

var random$2 = function random() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 11;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';
  var output = '';
  var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?';

  if (type === 'short' || type === 'alphadash') {
    characters = characters.slice(0, 64);
  } else if (type === 'narrow' || type === 'alphanumeric') {
    characters = characters.slice(0, 62);
  } else if (type === 'alpha') {
    characters = characters.slice(10, 62);
  } else if (type === 'hex') {
    characters = characters.slice(0, 16);
  } else if (type === 'number' || type === 'numeric') {
    characters = characters.slice(0, 10);
  }

  for (var i = 0; i < size; i++) {
    output += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return output;
};

var char = /*#__PURE__*/Object.freeze({
  __proto__: null,
  random: random$2
});

var split = function split(str) {
  var splitString = function splitString(start) {
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var strArray = [];

    if (typeof str === 'string') {
      if (start >= 1) {
        strArray.push(str.slice(0, start));
      }

      if (end !== null) {
        strArray.push(str.slice(start, end));
        strArray.push(str.slice(end));
      } else {
        strArray.push(str.slice(start));
      }
    }

    return strArray;
  };

  return splitString;
};

var capitalize = function capitalize(str) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'single';
  if (typeof str !== 'string') return;
  var capStr = str;

  if (opt === 'multiple') {
    capStr = capStr.toLowerCase().replace(/\w\S*/g, function (w) {
      return w.replace(/^\w/, function (c) {
        return c.toUpperCase();
      });
    });
  } else {
    capStr = capStr.trimStart().replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
  }

  return capStr;
};

var includes = function includes(valueStr, searchStr) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return valueStr.indexOf(searchStr, position) !== -1 ? true : false;
};

var string = /*#__PURE__*/Object.freeze({
  __proto__: null,
  split: split,
  capitalize: capitalize,
  includes: includes,
  isString: isString
});

var isArray = function isArray(arg) {
  return _typeof(arg) === 'object' && arg !== null && Array.isArray(arg) ? true : false;
};
var isSuperset = function isSuperset(oriArr, subArr) {
  if (!isArray(oriArr) && !isArray(subArr)) {
    throw new Error('The both of arguments must be in arrays');
  }

  var set = new Set(oriArr);

  var _iterator = _createForOfIteratorHelper(subArr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sub = _step.value;

      if (!set.has(sub)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
};

var insert = function insert(fromArr) {
  var at = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    position: null,
    index: null
  };

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, only array accept here');
  }

  if (!isObject(at)) {
    throw new Error('On the second argument, only object with 2 properties (position and index property) accepted');
  }

  for (var _len = arguments.length, restVal = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restVal[_key - 2] = arguments[_key];
  }

  if (restVal.length < 1) {
    throw new Error('On the third or the next arguments, you have to enter at least one argument');
  }

  var newArray = [];

  if (at.position === 'first') {
    newArray = insertFirst.apply(void 0, [fromArr].concat(restVal));
  } else if (at.position === 'last') {
    newArray = insertLast.apply(void 0, [fromArr].concat(restVal));
  } else if (at.position === 'before') {
    newArray = insertBefore.apply(void 0, [fromArr, at.index].concat(restVal));
  } else if (at.position === 'after') {
    newArray = insertAfter.apply(void 0, [fromArr, at.index].concat(restVal));
  }

  return newArray;
};
var insertFirst = function insertFirst(fromArr) {
  if (!isArray(fromArr)) {
    throw new Error('On the first argument must be in array type');
  }

  for (var _len2 = arguments.length, restVal = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    restVal[_key2 - 1] = arguments[_key2];
  }

  if (restVal.length < 1) {
    throw new Error('On the next arguments, you have to provide at least one argument');
  }

  var fromArray = Array.from(fromArr);
  fromArray.unshift.apply(fromArray, restVal);
  return fromArray;
};
var insertLast = function insertLast(fromArr) {
  if (!isArray(fromArr)) {
    throw new Error('On the first argument must be in array type');
  }

  for (var _len3 = arguments.length, restVal = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    restVal[_key3 - 1] = arguments[_key3];
  }

  if (restVal.length < 1) {
    throw new Error('On the next arguments, you have to provide at least one argument');
  }

  var fromArray = Array.from(fromArr);
  fromArray.push.apply(fromArray, restVal);
  return fromArray;
};
var insertBefore = function insertBefore(fromArr, atIndex) {
  if (!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array type');
  }

  if (!isNumber(atIndex)) {
    throw new Error('On the second argument, accept only numeric or number type');
  }

  for (var _len4 = arguments.length, restVal = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    restVal[_key4 - 2] = arguments[_key4];
  }

  if (restVal.length < 1) {
    throw new Error('On the next arguments, you have to enter at least one value');
  }

  var fromArray = Array.from(fromArr);
  var indexBefore = isNaN(atIndex) ? 1 : atIndex;
  fromArray.splice.apply(fromArray, [Number(indexBefore) - 1, 0].concat(restVal));
  return fromArray;
};
var insertAfter = function insertAfter(fromArr, atIndex) {
  if (!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array type');
  }

  if (!isNumber(atIndex)) {
    throw new Error('On the second argument, accept only numeric or number type');
  }

  for (var _len5 = arguments.length, restVal = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    restVal[_key5 - 2] = arguments[_key5];
  }

  if (restVal.length < 1) {
    throw new Error('On the next arguments, you have to enter at least one value');
  }

  var fromArray = Array.from(fromArr);
  var indexAfter = isNaN(atIndex) ? 0 : atIndex;
  fromArray.splice.apply(fromArray, [Number(indexAfter) + 1, 0].concat(restVal));
  return fromArray;
};

var index = function index(indexArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    key: 'id',
    value: 0
  };

  if (!isArray(indexArr)) {
    throw new Error('You must enter the first argument in array only');
  }

  var indexedArray = Array.from(indexArr);
  var resultNum = -1;

  if ('key' in options && 'value' in options) {
    resultNum = indexedArray.length >= 1 ? indexedArray.findIndex(function (obj) {
      return obj[options.key] === options.value;
    }) : -1;
  } else {
    if (indexedArray.length >= 1) {
      resultNum = indexedArray.findIndex(function (obj) {
        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (key in obj && obj[key] === val) {
            return true;
          }
        }
      });
    }
  }

  return resultNum;
};
var toIndex = function toIndex(fromArr) {
  var typeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dense';

  if (!isArray(fromArr)) {
    throw new Error('You must enter the first argument in array only');
  }

  var resIndex = [];

  if (typeStr === 'sparse') {
    resIndex = Object.keys(fromArr).map(function (item) {
      return Number(item);
    });
  } else {
    resIndex = _toConsumableArray(fromArr.keys());
  }

  return resIndex;
};
var randomIndex = function randomIndex(fromIndexArr) {
  if (!isArray(fromIndexArr)) {
    throw new Error('You must enter the argument in array only');
  }

  var indexArr = toIndex(fromIndexArr);
  var ranInd = Number(indexArr[Math.floor(Math.random() * indexArr.length)]);
  return ranInd;
};

var merge = function merge() {
  for (var _len = arguments.length, obj = new Array(_len), _key = 0; _key < _len; _key++) {
    obj[_key] = arguments[_key];
  }

  if (!obj) return;
  var newObj = {};
  var newMap = new Map();

  for (var _i = 0, _obj = obj; _i < _obj.length; _i++) {
    var prop = _obj[_i];

    for (var _i2 = 0, _Object$entries = Object.entries(prop); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          val = _Object$entries$_i[1];

      if (!newMap.has(key)) {
        newMap.set(key, val);
        newObj[key] = val;
      }
    }
  }

  return newObj;
};

var replace = function replace() {
  for (var _len2 = arguments.length, obj = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    obj[_key2] = arguments[_key2];
  }

  if (!obj) return;
  var newObj = {};

  for (var _i3 = 0, _obj2 = obj; _i3 < _obj2.length; _i3++) {
    var prop = _obj2[_i3];

    for (var _i4 = 0, _Object$entries2 = Object.entries(prop); _i4 < _Object$entries2.length; _i4++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
          key = _Object$entries2$_i[0],
          val = _Object$entries2$_i[1];

      newObj[key] = val;
    }
  }

  return newObj;
};

var update = function update(fromArr, setObj, whereArg) {
  if (!isArray(fromArr)) {
    throw new Error('You have to enter array only on the first argument');
  }

  if (!isObject(setObj)) {
    throw new Error('You must enter object only here on the second argument');
  }

  if (!isObject(whereArg) && !isNumber(whereArg)) {
    throw new Error('You must enter object only on the second argument');
  }

  var fromArray = Array.from(fromArr);
  var newArray = [];
  var indexNum = isObject(whereArg) ? index(fromArray, whereArg) : Number(whereArg);
  newArray = fromArray.map(function (obj, ind) {
    var resMap = obj;

    if (ind === indexNum) {
      resMap = replace(obj, setObj);
    }

    return resMap;
  });
  return newArray;
};
var updateBy = function updateBy(fromArr, setObj, whereArr) {
  if (!isArray(fromArr)) {
    throw new Error('You have to enter array only on the first argument');
  }

  if (!isObject(setObj)) {
    throw new Error('You must enter object only here on the second argument');
  }

  if (!isArray(whereArr)) {
    throw new Error('You must enter array of objects or numbers on the second argument');
  }

  var fromArray = Array.from(fromArr);
  var newArray = [];
  newArray = fromArray.map(function (obj, ind) {
    var resMap = obj;

    var _iterator = _createForOfIteratorHelper(whereArr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var where = _step.value;
        var indexNum = isObject(where) ? index(fromArray, where) : Number(where);

        if (ind === indexNum) {
          resMap = replace(obj, setObj);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return resMap;
  });
  return newArray;
};

var destroy = function destroy(oriArr) {
  if (!isArray(oriArr)) {
    throw new Error('Please provide array that you want to remove its element');
  }

  for (var _len = arguments.length, whereOpt = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    whereOpt[_key - 1] = arguments[_key];
  }

  if (whereOpt.length < 1) {
    throw new Error('On the last of argument, you have to enter at least one argument');
  }

  var oriArray = Array.from(oriArr);
  var newArray = [];

  var _loop = function _loop() {
    var opt = _whereOpt[_i];

    if (typeof opt === 'string' && opt === 'first') {
      oriArray = oriArray.map(function (obj, ind) {
        if (ind === 0) {
          return null;
        } else {
          return obj;
        }
      });
      newArray = oriArray;
    } else if (typeof opt === 'string' && opt === 'last') {
      oriArray = oriArray.map(function (obj, ind) {
        if (ind === oriArray.length - 1) {
          return null;
        } else {
          return obj;
        }
      });
      newArray = oriArray;
    } else if (typeof opt === 'number') {
      oriArray = oriArray.map(function (obj, ind) {
        if (ind === opt) {
          return null;
        } else {
          return obj;
        }
      });
      newArray = oriArray;
    } else if (_typeof(opt) === 'object' && opt !== null) {
      var indx = index(oriArray, opt);
      oriArray = oriArray.map(function (obj, ind) {
        if (ind === indx) {
          return null;
        } else {
          return obj;
        }
      });
      newArray = oriArray;
    }
  };

  for (var _i = 0, _whereOpt = whereOpt; _i < _whereOpt.length; _i++) {
    _loop();
  }

  return newArray.filter(function (obj) {
    return obj !== null;
  });
};

var select = function select(fromArr) {
  for (var _len = arguments.length, selProp = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selProp[_key - 1] = arguments[_key];
  }

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only');
  }

  if (selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value');
  }

  var newArray = Array.from(fromArr);
  return newArray.map(function (item) {
    var newObject = {};

    var _iterator = _createForOfIteratorHelper(selProp),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sel = _step.value;

        if (sel in item) {
          newObject[sel] = item[sel];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return newObject;
  });
};
var hidden = function hidden(fromArr) {
  for (var _len2 = arguments.length, selProp = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    selProp[_key2 - 1] = arguments[_key2];
  }

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only');
  }

  if (selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value');
  }

  var newArray = Array.from(fromArr);
  return newArray.map(function (item) {
    var newObject = item;

    var _iterator2 = _createForOfIteratorHelper(selProp),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var sel = _step2.value;

        if (sel in item) {
          delete newObject[sel];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return newObject;
  });
};

var toggle = function toggle(val) {
  var toggleFrom = function toggleFrom(arr) {
    var toggleArr = Array.from(arr);

    if (toggleArr.includes(val)) {
      var index = toggleArr.findIndex(function (el) {
        return el === val;
      });
      toggleArr.splice(index, 1);
    } else {
      toggleArr.push(val);
    }

    return toggleArr;
  };

  return toggleFrom;
};

var flatten = function flatten(nestArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var flattenArray = [];
  var flattenOptions = {};
  flattenOptions.id = options.id || 'id';
  flattenOptions.parent = options.parent || 'parent';
  flattenOptions.children = options.children || 'children';

  var parentArray = function parentArray() {
    var nestedArray = Array.from(nestArr);
    nestedArray.forEach(function (item) {
      if (_typeof(item) === 'object' && item !== null) {
        var newObject = item;
        newObject[flattenOptions.parent] = '0';

        if (_typeof(newObject[flattenOptions.children]) === 'object' && Array.isArray(newObject[flattenOptions.children])) {
          childrenArray(newObject[flattenOptions.children], item);
          delete newObject[flattenOptions.children];
        }

        flattenArray.push(newObject);
      }
    });
  };

  var childrenArray = function childrenArray(childArr, parentObj) {
    if (childArr.length >= 1) {
      var nestedArray = Array.from(childArr);
      nestedArray.forEach(function (item) {
        if (_typeof(item) === 'object' && item !== null) {
          var newObject = item;
          newObject[flattenOptions.parent] = parentObj[flattenOptions.id];

          if (_typeof(newObject[flattenOptions.children]) === 'object' && Array.isArray(newObject[flattenOptions.children])) {
            childrenArray(newObject[flattenOptions.children], item);
            delete newObject[flattenOptions.children];
          }

          flattenArray.push(newObject);
        }
      });
    }
  };

  parentArray();
  return flattenArray;
};

var nested = function nested(flatArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var nestedArray = [];
  var flattenArray = Array.from(flatArr);
  var nestedOptions = {};
  nestedOptions.id = options.id || 'id';
  nestedOptions.parent = options.parent || 'parent';
  nestedOptions.children = options.children || 'children';

  var parentArray = function parentArray(flattenArr) {
    flattenArr.forEach(function (item) {
      if (_typeof(item) === 'object' && item !== null) {
        var newObject = null;

        if (typeof item[nestedOptions.parent] === 'string' && item[nestedOptions.parent] === '0') {
          newObject = createNewObject(item);
        } else if (typeof item[nestedOptions.parent] === 'number' && item[nestedOptions.parent] === 0) {
          newObject = createNewObject(item);
        }

        if (newObject !== null) {
          nestedArray.push(newObject);
        }
      }
    });
  };

  var createNewObject = function createNewObject(itemObj) {
    var newObject = itemObj;

    if (itemObj[nestedOptions.children] === undefined || itemObj[nestedOptions.children] === null) {
      newObject[nestedOptions.children] = childrenArray(itemObj[nestedOptions.id]);

      if (newObject[nestedOptions.children].length <= 0) {
        delete newObject[nestedOptions.children];
      }
    }

    delete newObject[nestedOptions.parent];
    return newObject;
  };

  var childrenArray = function childrenArray(parent) {
    var childArray = [];

    if (filteredArray(parent).length >= 1) {
      filteredArray(parent).forEach(function (item) {
        childArray.push(createNewObject(item));
      });
    }

    return childArray;
  };

  var filteredArray = function filteredArray(parent) {
    return flattenArray.filter(function (item) {
      return item.parent === parent;
    });
  };

  parentArray(flattenArray);
  return nestedArray;
};

var unique = function unique(fromArr) {
  var byProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (!isArray(fromArr)) {
    throw new Error('');
  }

  var fromArray = Array.from(fromArr);
  var newArray = [];

  if (typeof byProp === 'string') {
    var newSet = new Set();

    var _iterator = _createForOfIteratorHelper(fromArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var oriItem = _step.value;

        if (!newSet.has(oriItem[byProp])) {
          newSet.add(oriItem[byProp]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    newArray = _toConsumableArray(newSet);
  } else {
    newArray = Array.from(new Set(fromArray));
  }

  return newArray;
};

var search = function search(fromArr) {
  if (!isArray) {
    throw new Error('The first argument must be in array');
  }

  for (var _len = arguments.length, searchStr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchStr[_key - 1] = arguments[_key];
  }

  if (searchStr.length < 1) {
    throw new Error('On the next arguments, you must provide at least one argument in either string or number');
  }

  var filteredArray = [];

  var _loop = function _loop() {
    var searchString = _searchStr[_i];
    var filterFromArr = Array.from(fromArr).filter(function (obj) {
      if (isNumber(obj) && Number(obj) === Number(searchString)) {
        return true;
      } else if (isString(obj) && obj.toLowerCase().includes(searchString.toLowerCase())) {
        return true;
      } else if (isObject(obj)) {
        for (var _i2 = 0, _Object$entries = Object.entries(obj); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (isNumber(obj[key]) && Number(val) === Number(searchString)) {
            return true;
          } else if (isString(obj[key]) && val.toLowerCase().includes(searchString.toLowerCase())) {
            return true;
          }
        }
      }

      return false;
    });
    filteredArray = unique(filteredArray.concat(filterFromArr));
  };

  for (var _i = 0, _searchStr = searchStr; _i < _searchStr.length; _i++) {
    _loop();
  }

  return filteredArray;
};
var searchBy = function searchBy(fromArr, queryArr, propArr) {
  if (!isArray(fromArr)) {
    throw new Error('The first argument must be in array of objects and it is needed in order to be searched');
  }

  if (!isArray(queryArr) && queryArr.length < 1) {
    throw new Error('The second argument must have at least one argument either in a string or in a number');
  }

  if (!isArray(propArr) && propArr.length < 1) {
    throw new Error('The last argument required at least one argument either in a string or in a number');
  }

  var filteredArray = [];

  var _iterator = _createForOfIteratorHelper(queryArr),
      _step;

  try {
    var _loop2 = function _loop2() {
      var query = _step.value;
      var filterFromArr = Array.from(fromArr).filter(function (obj) {
        for (var _i3 = 0, _Array$from = Array.from(propArr); _i3 < _Array$from.length; _i3++) {
          var val = _Array$from[_i3];

          if (val in obj) {
            if (isNumber(obj[val]) && Number(obj[val]) === Number(query)) {
              return true;
            } else if (isString(obj[val]) && obj[val].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
              return true;
            }
          }
        }

        return false;
      });
      filteredArray = unique(filteredArray.concat(filterFromArr));
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return filteredArray;
};

var remove = function remove(fromObj) {
  if (!isObject(fromObj)) {
    throw new Error('This is object helper, you must provide the first argument in an object');
  }

  for (var _len = arguments.length, propKey = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propKey[_key - 1] = arguments[_key];
  }

  if (propKey.length < 1) {
    throw new Error('The next arguments must be in a string and at least one argument');
  }

  var newObj = Object.assign({}, fromObj);

  for (var _i = 0, _propKey = propKey; _i < _propKey.length; _i++) {
    var key = _propKey[_i];

    if (key in newObj) {
      delete newObj[key];
    }
  }

  return newObj;
};

var removeBy = function removeBy(fromObj) {
  if (!isObject(fromObj)) {
    throw new Error('This is object helper, you must provide the first argument in an object');
  }

  for (var _len2 = arguments.length, propVal = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    propVal[_key2 - 1] = arguments[_key2];
  }

  if (propVal.length < 1) {
    throw new Error('The next arguments must be in a string or in a number and at least one argument');
  }

  var newObj = {};
  var newSet = new Set(propVal);

  for (var _i2 = 0, _Object$entries = Object.entries(fromObj); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 1),
        key = _Object$entries$_i[0];

    if (!newSet.has(fromObj[key])) {
      newObj[key] = fromObj[key];
    }
  }

  return newObj;
};

var filter = function filter(fromArr, filterObj) {
  if (!isArray(fromArr)) {
    throw new Error('The first argument must be in array of objects');
  }

  if (!isObject(filterObj)) {
    throw new Error('The second argument must be in object type and must have at least one property');
  }

  var filteredArray = Array.from(fromArr);

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        ftrKey = _Object$entries$_i[0],
        ftrVal = _Object$entries$_i[1];

    var filterFromArr = filteredArray.filter(function (obj) {
      if (ftrKey in obj) {
        if (isNumber(obj[ftrKey]) && Number(obj[ftrKey]) === Number(ftrVal)) {
          return true;
        } else if (isString(obj[ftrKey]) && obj[ftrKey].toLowerCase().includes(ftrVal.toLowerCase())) {
          return true;
        }
      }

      return false;
    });
    filteredArray = filterFromArr;
  };

  for (var _i = 0, _Object$entries = Object.entries(removeBy(filterObj, '', 0)); _i < _Object$entries.length; _i++) {
    _loop();
  }

  return filteredArray;
};

var isFunction = function isFunction(param) {
  return typeof param === 'function' ? true : false;
};

var sort = function sort(fromArr) {
  var sortStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

  if (!isArray(fromArr)) {
    throw new Error('Only array of strings or numbers accepted');
  }

  if (!isString(sortStr)) {
    throw new Error('The second argument must be in a string and a value either "", "asc" or "desc"');
  }

  var newArray = Array.from(fromArr);

  if (sortStr === 'asc') {
    newArray.sort(function (a, b) {
      if (isNumber(a) && isNumber(b)) {
        return Number(a) - Number(b);
      } else if (isString(a) && isString(b)) {
        var propA = a.toLowerCase();
        var propB = b.toLowerCase();
        var propRes = 0;

        if (propA < propB) {
          propRes = -1;
        } else if (propA > propB) {
          propRes = 1;
        }

        return propRes;
      }
    });
  } else if (sortStr === 'desc') {
    newArray.sort(function (a, b) {
      if (isNumber(a) && isNumber(b)) {
        return Number(b) - Number(a);
      } else if (isString(a) && isString(b)) {
        var propA = a.toLowerCase();
        var propB = b.toLowerCase();
        var propRes = 0;

        if (propB < propA) {
          propRes = -1;
        } else if (propB > propA) {
          propRes = 1;
        }

        return propRes;
      }
    });
  }

  return newArray;
};
var sortBy = function sortBy(fromArr, propStr) {
  var sortStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

  if (!isArray(fromArr)) {
    throw new Error('Only array of objects accepted');
  }

  if (!isString(propStr)) {
    throw new Error('The second argument must be in a string and a value must be object property key or name');
  }

  if (!isString(sortStr)) {
    throw new Error('The third argument must be in a string and a value either "", "asc" or "desc"');
  }

  var newArray = Array.from(fromArr);

  if (sortStr === 'asc') {
    newArray.sort(function (a, b) {
      if (propStr in a && propStr in b) {
        if (isNumber(a[propStr]) && isNumber(b[propStr])) {
          return Number(a[propStr]) - Number(b[propStr]);
        } else if (isString(a[propStr]) && isString(b[propStr])) {
          var propA = a[propStr].toLowerCase();
          var propB = b[propStr].toLowerCase();
          var propRes = 0;

          if (propA < propB) {
            propRes = -1;
          } else if (propA > propB) {
            propRes = 1;
          }

          return propRes;
        }
      }
    });
  } else if (sortStr === 'desc') {
    newArray.sort(function (a, b) {
      if (propStr in a && propStr in b) {
        if (isNumber(a[propStr]) && isNumber(b[propStr])) {
          return Number(b[propStr]) - Number(a[propStr]);
        } else if (isString(a[propStr]) && isString(b[propStr])) {
          var propA = a[propStr].toLowerCase();
          var propB = b[propStr].toLowerCase();
          var propRes = 0;

          if (propB < propA) {
            propRes = -1;
          } else if (propB > propA) {
            propRes = 1;
          }

          return propRes;
        }
      }
    });
  }

  return newArray;
};
var sortWith = function sortWith(fromArr, compareFunc) {
  if (!isArray(fromArr)) {
    throw new Error('The first argument must be in an array type');
  }

  if (!isFunction(compareFunc)) {
    throw new Error('The second argument is a compare or callback function');
  }

  var fromArray = Array.from(fromArr);
  fromArray.sort(function (a, b) {
    var res = 0;

    if (Math.sign(compareFunc(a, b)) === -1) {
      res = -1;
    } else {
      res = 1;
    }

    return res;
  });
  return fromArray;
};

var paginate = function paginate(fromArr) {
  var pageActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var limitPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array');
  }

  if (!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only');
  }

  if (!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only');
  }

  var newArr = Array.from(fromArr);
  var startPaginate = Number(limitPerPage) * Number(pageActive) - (Number(limitPerPage) - 1);
  var endPaginate = Number(limitPerPage) * Number(pageActive);
  return newArr.slice(startPaginate - 1, endPaginate <= newArr.length ? endPaginate : newArr.length);
};
var pages = function pages(fromArr) {
  var limitPerPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array');
  }

  if (!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only');
  }

  var newArr = Array.from(fromArr);
  var divideLength = newArr.length / Number(limitPerPage);
  var pageNumber = Math.ceil(divideLength); //(pageNumber === Number(limitPerPage)) ? 1 : pageNumber

  return pageNumber;
};
var pageInfo = function pageInfo(fromArr) {
  var pageActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var limitPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array');
  }

  if (!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only');
  }

  if (!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only');
  }

  var newArr = Array.from(fromArr);
  var startPaginate = Number(limitPerPage) * Number(pageActive) - (Number(limitPerPage) - 1);
  var endPaginate = Number(limitPerPage) * Number(pageActive);
  return {
    from: newArr.length >= 1 ? startPaginate : 0,
    start: newArr.length >= 1 ? startPaginate : 0,
    to: endPaginate <= newArr.length ? endPaginate : newArr.length,
    end: endPaginate <= newArr.length ? endPaginate : newArr.length,
    of: newArr.length,
    length: newArr.length
  };
};
var pagination = function pagination(totalPages) {
  var pageActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var positionOfEllipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!isNumber(totalPages)) {
    throw new Error('This is the total or all pages in numbers, please enter number only');
  }

  if (!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only');
  }

  if (!isNumber(positionOfEllipsis)) {
    throw new Error('This is the position of ellipsis [...], please enter number only');
  }

  var newArray = [];
  var maxPages = Number(totalPages) < Number(pageActive) ? Number(totalPages) : Number(pageActive);
  var minPages = Number(pageActive) < 1 ? 1 : Number(pageActive);
  var pageAddition = maxPages + Number(positionOfEllipsis);
  var pageSubtraction = minPages - Number(positionOfEllipsis);

  if (Number(positionOfEllipsis) === 0) {
    for (var i = 1; i <= Number(totalPages); i++) {
      newArray.push(i);
    }
  } else {
    if (minPages > 1) {
      for (var _i = pageSubtraction; _i < minPages; _i++) {
        newArray.push(_i);
      }
    }

    for (var _i2 = maxPages; _i2 <= pageAddition; _i2++) {
      newArray.push(_i2);
    }
  }

  var filterNegative = newArray.filter(function (num) {
    return num > 0;
  });
  var filterMax = filterNegative.filter(function (num) {
    return num <= Number(totalPages);
  });

  if (pageAddition < Number(totalPages) && Number(positionOfEllipsis) !== 0) {
    filterMax.push('...');
  }

  if (pageSubtraction > 1 && Number(positionOfEllipsis) !== 0) {
    filterMax.unshift('...');
  }

  return filterMax;
};

var sum = function sum(fromArr) {
  var byObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (!isArray(fromArr)) {
    throw new Error('In the first argument, you must enter a data in array');
  }

  var newArray = Array.from(fromArr);
  var sumNum = 0;

  if (newArray.length >= 1) {
    if (typeof byObj === 'string' && byObj !== '') {
      var numArray = newArray.map(function (item) {
        if (byObj in item) {
          return Number(item[byObj]);
        } else {
          return 0;
        }
      });
      sumNum = numArray.reduce(function (accumulator, current) {
        return Number(accumulator) + Number(current);
      });
    } else {
      sumNum = newArray.reduce(function (acc, val) {
        return Number(acc) + Number(val);
      });
    }
  }

  return sumNum;
};

// Union of Arrays (Set Theory/Operation) in JavaScript by Tedir Ghazali
var union = function union() {
  for (var _len = arguments.length, restArg = new Array(_len), _key = 0; _key < _len; _key++) {
    restArg[_key] = arguments[_key];
  }

  return Array.from(new Set(restArg.flat()));
};

var countDuplication = function countDuplication(arrArg) {
  if (!isArray(arrArg)) {
    throw new Error('This argument only accept array');
  }

  var newObj = {};
  var newSet = new Set();

  var _iterator = _createForOfIteratorHelper(new Set(arrArg)),
      _step;

  try {
    var _loop = function _loop() {
      var setItem = _step.value;
      var tempArr = Array.from(arrArg).filter(function (filterItem) {
        return filterItem === setItem;
      });

      if (!newSet.has(tempArr.length)) {
        newSet.add(tempArr.length);
        newObj[tempArr.length] = [];
      }

      tempArr.forEach(function (arrItem) {
        newObj[tempArr.length].push(arrItem);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newObj;
};
var countBy = function countBy(arrParam, callbackParam) {
  if (!isArray(arrParam)) {
    throw new Error('The first paramenter only accept array');
  }

  if (!isFunction(callbackParam)) {
    throw new Error('The second paramenter only accept callback function');
  }

  return arrParam.filter(function (item) {
    return callbackParam(item);
  }).length;
};

var intersection = function intersection() {
  for (var _len = arguments.length, restArg = new Array(_len), _key = 0; _key < _len; _key++) {
    restArg[_key] = arguments[_key];
  }

  if (!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments');
  }

  var newArr = [];
  var obj = {};
  restArg.forEach(function (arr, index) {
    if (isArray(arr)) {
      obj[index] = new Set(arr);
    } else {
      obj[index] = new Set().add(arr);
    }

    if (index !== 0) {
      var _iterator = _createForOfIteratorHelper(arr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (obj[index - 1].has(item)) {
            newArr.push(item);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
  var filter = countDuplication(newArr);
  return Array.from(new Set(filter[restArg.length - 1]));
};

var difference = function difference() {
  for (var _len = arguments.length, restArg = new Array(_len), _key = 0; _key < _len; _key++) {
    restArg[_key] = arguments[_key];
  }

  if (!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments');
  }

  var set = new Set();
  var interArr = intersection.apply(void 0, restArg);
  restArg.forEach(function (arr) {
    if (!isArray(arr)) {
      throw new Error('Here only accept arrays from all arguments');
    }

    var _iterator = _createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (!interArr.includes(item) && !set.has(item)) {
          set.add(item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return Array.from(set);
};
var asymmetricDifference = function asymmetricDifference() {
  for (var _len2 = arguments.length, restArg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    restArg[_key2] = arguments[_key2];
  }

  if (!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments');
  }

  var set = new Set();
  var temp = [];

  for (var _i = 0, _restArg = restArg; _i < _restArg.length; _i++) {
    var arr = _restArg[_i];

    if (!isArray(arr)) {
      throw new Error('Here only accept arrays from all arguments');
    }

    arr.forEach(function (item) {
      if (set.has(item)) {
        set["delete"](item);
        temp.push(item);
      } else {
        if (!temp.includes(item)) {
          set.add(item);
        }
      }
    });
  }

  return Array.from(set);
};
var complement = function complement() {
  for (var _len3 = arguments.length, restArg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    restArg[_key3] = arguments[_key3];
  }

  if (!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 1 value');
  }

  var restArr = Array.from(restArg);
  restArr.shift();
  var set = new Set(without.apply(void 0, [restArg[0]].concat(_toConsumableArray(restArr))));
  return Array.from(set);
};
var without = function without(arrArg) {
  for (var _len4 = arguments.length, restArg = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    restArg[_key4 - 1] = arguments[_key4];
  }

  if (!isArray(arrArg) && arrArg.length <= 0) {
    throw new Error('You need to provide more values to your array');
  }

  if (!restArg && restArg.length <= 0) {
    throw new Error('You have to provide here at least 1 value');
  }

  var arr = [];

  var _iterator2 = _createForOfIteratorHelper(arrArg),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (!restArg.flat().includes(item)) {
        arr.push(item);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return arr;
};

var transpose = function transpose() {
  for (var _len = arguments.length, restArr = new Array(_len), _key = 0; _key < _len; _key++) {
    restArr[_key] = arguments[_key];
  }

  if (restArr.length < 2 && !isArray(restArr[0]) && !isArray(restArr[1]) && Number(restArr[0].length) !== Number(restArr[1].length)) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length');
  }

  var newArray = Array.from(restArr[0]).map(function (item) {
    item = [];
    return item;
  });

  for (var _i = 0, _restArr = restArr; _i < _restArr.length; _i++) {
    var itemArr = _restArr[_i];
    itemArr.forEach(function (item, index) {
      if (index in newArray) {
        newArray[index].push(item);
      }
    });
  }

  return newArray;
};

var zip = function zip() {
  for (var _len = arguments.length, restArr = new Array(_len), _key = 0; _key < _len; _key++) {
    restArr[_key] = arguments[_key];
  }

  if (restArr.length < 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length');
  }

  var oriArr = Array.from(restArr);
  var newArr = [];
  var firstArr = oriArr.shift();

  var _loop = function _loop() {
    var varArr = _oriArr[_i];
    var newMap = new Map();
    varArr.forEach(function (item, ind) {
      if (firstArr[ind]) {
        newMap.set(firstArr[ind], item);
      }
    });
    newArr.push(Object.fromEntries(newMap));
  };

  for (var _i = 0, _oriArr = oriArr; _i < _oriArr.length; _i++) {
    _loop();
  }

  return newArr;
};

var unzip = function unzip() {
  for (var _len = arguments.length, restArr = new Array(_len), _key = 0; _key < _len; _key++) {
    restArr[_key] = arguments[_key];
  }

  if (restArr.length < 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length');
  }

  var oriArr = Array.from(restArr);
  var objKeys = Object.keys(oriArr[0]);
  var newObj = {};

  for (var _i = 0, _objKeys = objKeys; _i < _objKeys.length; _i++) {
    var key = _objKeys[_i];
    newObj[key] = [];
  }

  for (var _i2 = 0, _oriArr = oriArr; _i2 < _oriArr.length; _i2++) {
    var obj = _oriArr[_i2];

    for (var prop in obj) {
      newObj[prop].push(obj[prop]);
    }
  }

  return [objKeys].concat(_toConsumableArray(transpose.apply(void 0, _toConsumableArray(Object.values(newObj)))));
};

var range = function range() {
  if (arguments.length === 0 || arguments.length >= 4) {
    throw new Error('Here only accept 3 arguments, so you have to provide at least 1 argument');
  }

  var startNum = arguments.length === 1 ? 0 : Number(arguments.length <= 0 ? undefined : arguments[0]);
  var endNum = arguments.length >= 2 ? Number(arguments.length <= 1 ? undefined : arguments[1]) : Number(arguments.length <= 0 ? undefined : arguments[0]);
  var stepNum = arguments.length === 3 ? Number(arguments.length <= 2 ? undefined : arguments[2]) : 1;

  if (arguments.length < 3 && isNegative(endNum)) {
    stepNum = -1;
  }

  var newArr = [];
  var loopNum = 0;
  var result = 0;

  if (isNegative(startNum) && isPositive(endNum)) {
    loopNum = startNum - 1;
  } else if (isPositive(startNum) && isNegative(endNum)) {
    loopNum = startNum + 1;
  } else if (isPositive(startNum) && isPositive(endNum)) {
    loopNum = startNum - 1;
  } else if (isNegative(startNum) && isNegative(endNum)) {
    loopNum = startNum + 1;
  }

  if (loopNum < endNum) {
    while (loopNum < endNum) {
      loopNum++;

      if (stepNum > 1) {
        result += stepNum;

        if (result < endNum) {
          newArr.push(result);
        }
      } else {
        if (loopNum < endNum) {
          newArr.push(loopNum);
        }
      }
    }

    if (startNum === 0 && !newArr.includes(0)) {
      newArr.unshift(0);
    }
  } else if (loopNum > endNum) {
    while (loopNum > endNum) {
      loopNum--;

      if (stepNum < -1) {
        result -= stepNum;

        if (result > endNum) {
          newArr.unshift(result);
        }
      } else {
        if (loopNum > endNum) {
          newArr.unshift(loopNum);
        }
      }
    }

    if (startNum === 0 && !newArr.includes(0)) {
      newArr.push(0);
    }
  }

  return newArr.length === 1 && newArr[0] === 0 ? [] : newArr;
};

var move = function move() {
  for (var _len = arguments.length, indexes = new Array(_len), _key = 0; _key < _len; _key++) {
    indexes[_key] = arguments[_key];
  }

  if (indexes.length === 0) {
    throw new Error('Only accept index of array elements and you must input at least one index in number type');
  }

  return function (fromArr, toIndex) {
    var removeCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (!isArray(fromArr)) {
      throw new Error('Please enter array only here');
    }

    if (!isNumber(toIndex)) {
      throw new Error('Input only index number here');
    }

    var oriArr = Array.from(fromArr);
    var tempArr = [];

    var _iterator = _createForOfIteratorHelper(indexes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ind = _step.value;

        if (oriArr[Number(ind)] !== undefined) {
          tempArr.push(oriArr[Number(ind)]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var newArr = destroy.apply(void 0, [oriArr].concat(indexes));
    newArr.splice.apply(newArr, [toIndex, removeCount].concat(tempArr));
    return newArr;
  };
};
var switched = function switched() {
  for (var _len2 = arguments.length, fromIndex = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fromIndex[_key2] = arguments[_key2];
  }

  if (fromIndex.length === 0) {
    throw new Error('Accept index of array elements only and you add at least one index in number');
  }

  return function (fromArr) {
    if (!isArray(fromArr)) {
      throw new Error('Please enter array only here');
    }

    for (var _len3 = arguments.length, withIndex = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      withIndex[_key3 - 1] = arguments[_key3];
    }

    if (withIndex.length === 0 && withIndex.length !== fromIndex.length && intersection(fromIndex, withIndex).length !== 0) {
      throw new Error('Only accept index of array elements and the number of the first indexes must be the same as the second indexes and also, both indexes must be different');
    }

    var oriArr = Array.from(fromArr);
    var newArr = Array.from(fromArr);

    for (var i = 0; i < fromIndex.length; i++) {
      if (fromIndex[i] !== undefined && withIndex[i] !== undefined) {
        newArr.splice(fromIndex[i], 1, oriArr[withIndex[i]]);
        newArr.splice(withIndex[i], 1, oriArr[fromIndex[i]]);
      }
    }

    return newArr;
  };
};
var transfer = function transfer() {
  for (var _len4 = arguments.length, indexes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    indexes[_key4] = arguments[_key4];
  }

  if (indexes.length === 0) {
    throw new Error('Only accept index of array elements and you must enter at least one index in number type');
  }

  return function (fromArr, toArr) {
    var byIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (!isArray(fromArr)) {
      throw new Error('Accept array only here');
    }

    if (!isArray(toArr)) {
      throw new Error('Accept array only here');
    }

    if (!isNumber(byIndex)) {
      throw new Error('Input only index number here');
    }

    var varFromArr = Array.from(fromArr);
    var varToArr = Array.from(toArr);
    var tempArr = [];

    var _iterator2 = _createForOfIteratorHelper(indexes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var ind = _step2.value;

        if (varFromArr[Number(ind)] !== undefined) {
          tempArr.push(varFromArr[Number(ind)]);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var byInd = byIndex === null ? Number(varToArr.length) : byIndex;
    varToArr.splice.apply(varToArr, [byInd, 0].concat(tempArr));
    var newArr = destroy.apply(void 0, [varFromArr].concat(indexes));
    return {
      from: newArr,
      to: varToArr
    };
  };
};

var compact = function compact(argArr) {
  if (!isArray(argArr)) {
    throw new Error('Enter only array type here');
  }

  var newArr = Array.from(argArr);
  return newArr.filter(function (val) {
    return val !== undefined && val !== null && val !== false && !isNaN(val) && val !== "" && val > 0;
  });
};

var chunk = function chunk(arrArg) {
  var sizeArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (!isArray(arrArg) && arrArg.length <= 2) {
    throw new Error('Please insert array only on the first argument and must have 3 values at least');
  }

  if (typeof sizeArg !== 'number') {
    throw new Error('On the second argument, you must input in a number type only');
  }

  var stepArr = range(sizeArg, arrArg.length, sizeArg);
  var newArr = [];

  var _iterator = _createForOfIteratorHelper(stepArr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var step = _step.value;
      var childArr = arrArg.slice(Number(step) - Number(sizeArg), step);
      newArr.push(childArr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (stepArr[Number(stepArr.length) - 1] <= arrArg.length) {
    newArr.push(arrArg.slice(stepArr[Number(stepArr.length) - 1], arrArg.length));
  }

  return newArr;
};

var shuffle = function shuffle(arrArg) {
  if (!isArray(arrArg) && arrArg.length <= 2) {
    throw new Error('This shuffle method only work on data in array type');
  }

  var newArr = Array.from(arrArg);

  for (var i = Number(newArr.length) - 1; i > 2; i--) {
    var sliceArr = newArr.slice(0, Number(i) + 1);
    newArr = switched(i)(newArr, randomIndex(sliceArr));
  }

  return newArr;
};

var group = function group(param, callback) {
  if (!isArray(param)) {
    throw new Error('You must enter array literal here');
  }

  if (!isFunction(callback)) {
    throw new Error('You have to enter a function or callback on the second argument');
  }

  var obj = {};

  var _iterator = _createForOfIteratorHelper(param),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (obj[callback(item).toString()] === undefined) {
        obj[callback(item).toString()] = [];
      }

      obj[callback(item).toString()].push(item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return obj;
};

var calculate = function calculate(fromArr, newProp, callBack) {
  if (!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only');
  }

  if (!isString(newProp)) {
    throw new Error('New property must be in string type');
  }

  if (!isFunction(callBack)) {
    throw new Error('Callback must be in function or method');
  }

  var newArray = Array.from(fromArr);
  return newArray.map(function (item) {
    item[newProp] = callBack.apply(void 0, _toConsumableArray(Object.values(item).filter(function (i) {
      return isNaN(i) === false;
    })));
    return item;
  });
};

var array = /*#__PURE__*/Object.freeze({
  __proto__: null,
  insert: insert,
  insertFirst: insertFirst,
  insertLast: insertLast,
  insertBefore: insertBefore,
  insertAfter: insertAfter,
  update: update,
  updateBy: updateBy,
  destroy: destroy,
  select: select,
  hidden: hidden,
  toggle: toggle,
  flatten: flatten,
  nested: nested,
  index: index,
  toIndex: toIndex,
  randomIndex: randomIndex,
  search: search,
  searchBy: searchBy,
  filter: filter,
  filtered: filter,
  sort: sort,
  sortBy: sortBy,
  sorted: sortBy,
  sortWith: sortWith,
  paginate: paginate,
  pages: pages,
  pageInfo: pageInfo,
  show: pageInfo,
  pagination: pagination,
  sum: sum,
  calculate: calculate,
  calc: calculate,
  unique: unique,
  isArray: isArray,
  isSuperset: isSuperset,
  union: union,
  intersection: intersection,
  difference: difference,
  asymmetricDifference: asymmetricDifference,
  complement: complement,
  without: without,
  transpose: transpose,
  zip: zip,
  unzip: unzip,
  range: range,
  move: move,
  switched: switched,
  transfer: transfer,
  compact: compact,
  chunk: chunk,
  shuffle: shuffle,
  group: group,
  countDuplication: countDuplication,
  countBy: countBy
});

var invert = function invert(objArg) {
  if (!isObject(objArg)) {
    throw new Error('You have to input object only here');
  }

  var allKeys = Object.keys(objArg);
  var allValues = Object.values(objArg);
  return zip(allValues, allKeys)[0];
};

var clone = function clone() {
  for (var _len = arguments.length, restArg = new Array(_len), _key = 0; _key < _len; _key++) {
    restArg[_key] = arguments[_key];
  }

  if (restArg.length < 1) {
    throw new Error('In this argument must have at least one argument and please provide it in object type');
  }

  return Object.assign.apply(Object, [{}].concat(restArg));
};

var object = /*#__PURE__*/Object.freeze({
  __proto__: null,
  remove: remove,
  removeBy: removeBy,
  merge: merge,
  replace: replace,
  isObject: isObject,
  isObjectValues: isObjectValues,
  invert: invert,
  clone: clone
});

var REGEX_PARSE_DATE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_DATE_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|T|H{1,2}|h{1,2}|a|A|i{1,2}|s{1,2}|Z{1,2}|SSS/g;

var isYear = function isYear(yearParams) {
  return typeof yearParams === 'number' || typeof yearParams === 'string' ? true : false;
}; // pengecekan bulan mulai dari tipenya sampai jumlahnya

var isMonth = function isMonth(monthParams) {
  return typeof monthParams === 'number' || typeof monthParams === 'string' ? true : false;
}; // pengecekan tanggal dan hasilnya selalu dalam tipe boolean (true atau false)

var isDate = function isDate(dateParams) {
  return typeof dateParams === 'number' || typeof dateParams === 'string' ? true : false;
}; // pengecekan tanggal, bulan dan tahun sekaligus

var isFullDate = function isFullDate(dateParams) {
  return _typeof(new Date(dateParams)) === 'object' && dateParams !== null || typeof dateParams === 'string' && new RegExp(REGEX_PARSE_DATE).test(dateParams) ? true : false;
};
var isFormatDate = function isFormatDate(formatParams) {
  return typeof formatParams === 'string' && new RegExp(REGEX_DATE_FORMAT).test(formatParams) ? true : false;
}; // cek tahun kabisat (leap year)

var isLeapYear = function isLeapYear(yearParams) {
  return yearParams % 400 === 0 || yearParams % 100 !== 0 && yearParams % 4 === 0 ? true : false;
};

// semua pesan untuk date helper saya kumpulkan disini
var msgDate = {
  yearMsg: 'Year must be in a number or a string type, the length of year either 4 or 2',
  monthMsg: 'Month must be in a number or a string type, the month number start from 1 to 12',
  dateMsg: 'Date must be in a number or a string type, the date number start from 1 to 31',
  fullDateMsg: 'Full date must be in string or array type'
};

// ambil pengecekan

var day = function day(yearParams) {
  var monthParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var dateParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var locale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en-US';
  var dayType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'long';

  // pengecekan tahun, bulan, dan tangal, saya pisahkan dengan pesannya pada berkas lain
  if (!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isDate(dateParams)) {
    throw new Error(msgDate.dateMsg);
  } // disini kita ingin mendapatkan tanggal secara lokal


  var localDate = new Date(Date.UTC(Number(yearParams), Number(monthParams) - 1, Number(dateParams))); // kemudian kita ubah menjadi nama hari

  return new Intl.DateTimeFormat(locale, {
    weekday: dayType
  }).format(localDate);
}; // fungsi ini untuk mendapatkan semua nama hari dalam tipe array

var days = function days() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  var dayType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';
  var daysArr = []; // melakukan iterasi dari tanggal 4 sampai 10 April 2021, kemudian kita isi nama harinya kedalam array

  for (var i = 4; i <= 10; i++) {
    var localDate = new Date(Date.UTC(2021, 3, i));
    daysArr.push(new Intl.DateTimeFormat(locale, {
      weekday: dayType
    }).format(localDate));
  }

  return daysArr;
};
var daysInMonth = function daysInMonth(yearParams) {
  var monthParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg);
  } // jumlah hari (rata-rata) dari setiap bulan


  var commonDays = [28, 29, 30, 31]; // ambil hari ini (angka)

  var numOfDays = new Date(Date.UTC(Number(yearParams), Number(monthParams), 0)).getUTCDate(); // kemudian saring atau cek apakah angkanya sesuai dari jumlah hari diatas, jika tidak maka hasilnya 31

  return commonDays.includes(numOfDays) ? numOfDays : 31;
};
var daysInYear = function daysInYear(yearParams) {
  if (!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg);
  } // jumlah hari dalam setahun


  return isLeapYear(yearParams) ? 366 : 365;
};
var daysInBetween = function daysInBetween(firstDate, lastDate) {
  if (!isFullDate(firstDate)) {
    throw new Error('Error in the first argument: ' + msgDate.fullDateMsg);
  }

  if (!isFullDate(lastDate)) {
    throw new Error('Error in the second argument: ' + msgDate.fullDateMsg);
  }

  var startDate = new Date(firstDate);
  var endDate = new Date(lastDate); // hitung perbedaan waktu

  var timeDifference = Number(endDate.getTime()) - Number(startDate.getTime()); // hasilnya dapat dibagi dari perbedaan waktu dengan jumlah semua milisekon

  return timeDifference / (1000 * 60 * 60 * 24);
};

var month = function month(yearParam, monthParam) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var monthType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'long';

  if (!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg);
  }

  var currentMonth = Date.UTC(yearParam, Number(monthParam) - 1);
  return new Intl.DateTimeFormat(locale, {
    month: monthType
  }).format(new Date(currentMonth));
};
var months = function months() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  var monthType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'long';
  var monthNames = [];

  for (var i = 0; i <= 11; i++) {
    var currentMonth = Date.UTC(2021, i);
    monthNames.push(new Intl.DateTimeFormat(locale, {
      month: monthType
    }).format(new Date(currentMonth)));
  }

  return monthNames;
};

var format = function format(dateParam, formatStr) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var dayType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'long';

  if (!isFullDate(dateParam)) {
    throw new Error('You\'re entering the wrong date string, please use this statement "new Date(\'yourdateParam\').toString()" instead or array "[year, monthIndex, dateNumber]"');
  }

  if (!isFormatDate(formatStr)) {
    throw new Error('Please enter the correct date format');
  }

  var oriDate = new Date(dateParam);
  var formatDate = formatStr;
  var newDate = formatStr;
  var tokens = {
    YY: function YY() {
      var shortYear = oriDate.getFullYear().toString().slice(-2);
      var dateYear = oriDate.getFullYear();

      if (shortYear !== "00") {
        dateYear = Number(shortYear);
      }

      return dateYear;
    },
    YYYY: oriDate.getFullYear(),
    M: Number(oriDate.getMonth()) + 1,
    MM: function MM() {
      var dateMonth = Number(Number(oriDate.getMonth()) + 1).toString();

      if (dateMonth.length === 1) {
        var addZero = "0" + dateMonth;
        return addZero;
      } else {
        return dateMonth;
      }
    },
    m: months(locale, dayType)[oriDate.getMonth()].slice(0, 3),
    mm: months(locale, dayType)[oriDate.getMonth()],
    D: oriDate.getDate,
    DD: function DD() {
      var dateDay = oriDate.getDate().toString();
      var resDay = dateDay;

      if (dateDay.length === 1) {
        var addDayZero = "0" + dateDay;
        resDay = addDayZero;
      }

      return resDay;
    },
    d: days(locale, dayType)[oriDate.getDay()].slice(0, 3),
    dd: days(locale, dayType)[oriDate.getDay()],
    H: oriDate.getHours(),
    HH: function HH() {
      var dateHour = oriDate.getHours().toString();

      if (dateHour.length === 1) {
        var addHourZero = "0" + dateHour;
        return addHourZero;
      } else {
        return dateHour;
      }
    },
    h: function h() {
      var dateHour2 = Number(oriDate.getHours() + 1);
      var resetDateHour2 = dateHour2;

      if (dateHour2 > 12) {
        resetDateHour2 = dateHour2 - (dateHour2 - 1);
      }

      return resetDateHour2;
    },
    hh: function hh() {
      var dateHour2 = Number(oriDate.getHours() + 1);
      var resetDateHour2 = dateHour2;

      if (dateHour2 > 12) {
        resetDateHour2 = dateHour2 - (dateHour2 - 1);
      }

      var dateHour3 = resetDateHour2.toString();

      if (dateHour3.length === 1) {
        var addHour3Zero = "0" + dateHour3;
        return addHour3Zero;
      } else {
        return dateHour3;
      }
    },
    k: function k() {
      return Number(oriDate.getHours()) === 0 ? 24 : oriDate.getHours();
    },
    kk: function kk() {
      var dateHour4 = Number(oriDate.getHours()).toString();

      if (dateHour4.length === 1) {
        var addHour4Zero = "0" + dateHour4;
        return Number(addHour4Zero) === 0 ? 24 : addHour4Zero;
      } else {
        return Number(dateHour4) === 0 ? 24 : dateHour4;
      }
    },
    i: oriDate.getMinutes(),
    ii: function ii() {
      var dateMinute = oriDate.getMinutes().toString();

      if (dateMinute.length === 1) {
        var addMinuteZero = "0" + dateMinute;
        return addMinuteZero;
      } else {
        return dateMinute;
      }
    },
    s: oriDate.getSeconds(),
    ss: function ss() {
      var dateSecond = oriDate.getSeconds().toString();

      if (dateSecond.length === 1) {
        var addSecondZero = "0" + dateSecond;
        return addSecondZero;
      } else {
        return dateSecond;
      }
    },
    uuu: oriDate.getMilliseconds(),
    A: oriDate.getHours() < 12 ? 'AM' : 'PM',
    a: oriDate.getHours() < 12 ? 'am' : 'pm',
    Do: oriDate.getDate().toString() + 'st'
  };
  var splitFormat = formatDate.split(/-|\/|\.|:|\s/);

  var _iterator = _createForOfIteratorHelper(splitFormat),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sf = _step.value;

      if ('YY' === sf) {
        newDate = newDate.replace(sf, tokens.YY());
      } else if ('YYYY' === sf) {
        newDate = newDate.replace(sf, tokens.YYYY);
      } else if ('M' === sf) {
        newDate = newDate.replace(sf, tokens.M);
      } else if ('MM' === sf) {
        newDate = newDate.replace(sf, tokens.MM());
      } else if ('m' === sf) {
        newDate = newDate.replace(sf, tokens.m);
      } else if ('mm' === sf) {
        newDate = newDate.replace(sf, tokens.mm);
      } else if ('D' === sf) {
        newDate = newDate.replace(sf, tokens.D);
      } else if ('DD' === sf) {
        newDate = newDate.replace(sf, tokens.DD());
      } else if ('d' === sf) {
        newDate = newDate.replace(sf, tokens.d);
      } else if ('dd' === sf) {
        newDate = newDate.replace(sf, tokens.dd);
      } else if ('H' === sf) {
        newDate = newDate.replace(sf, tokens.H);
      } else if ('HH' === sf) {
        newDate = newDate.replace(sf, tokens.HH());
      } else if ('h' === sf) {
        newDate = newDate.replace(sf, tokens.h());
      } else if ('hh' === sf) {
        newDate = newDate.replace(sf, tokens.hh());
      } else if ('k' === sf) {
        newDate = newDate.replace(sf, tokens.k());
      } else if ('kk' === sf) {
        newDate = newDate.replace(sf, tokens.kk());
      } else if ('i' === sf) {
        newDate = newDate.replace(sf, tokens.i);
      } else if ('ii' === sf) {
        newDate = newDate.replace(sf, tokens.ii());
      } else if ('s' === sf) {
        newDate = newDate.replace(sf, tokens.s);
      } else if ('ss' === sf) {
        newDate = newDate.replace(sf, tokens.ss());
      } else if ('uuu' === sf) {
        newDate = newDate.replace(sf, tokens.uuu);
      } else if ('A' === sf) {
        newDate = newDate.replace(sf, tokens.A);
      } else if ('a' === sf) {
        newDate = newDate.replace(sf, tokens.a);
      } else if ('Do' === sf) {
        newDate = newDate.replace(sf, tokens.Do);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newDate;
};

var now = function now() {
  var dateFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var newDate = new Date().toString();

  if (typeof dateFormat === 'string') {
    newDate = format(newDate, dateFormat);
  }

  return newDate;
};
var nowHijri = function nowHijri() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  var utcNowDate = Date.UTC(Number(new Date().getFullYear()), Number(new Date().getMonth()), Number(new Date().getDate()), Number(new Date().getHours()), Number(new Date().getMinutes()), Number(new Date().getSeconds()), Number(new Date().getMilliseconds()));
  var newDate = new Intl.DateTimeFormat(locale, {
    calendar: 'islamic',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24'
  }).format(new Date(utcNowDate));
  return newDate;
};

//import * as dateVar from './dateVar.js'
var parse = function parse(dateStr, formatStr) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var dayType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'long';

  if (!isFullDate(dateStr)) {
    throw new Error('On the first argument, you have to input only the correct date');
  }

  if (!isFormatDate(formatStr)) {
    throw new Error('For format date, you must always input the correct one by using characters like these: Y, M, m, D, d, H, h, k, i, S, s, A, a or Do');
  }

  var dateArr = dateStr.split(/-|\/|\.|T|Z|:|\s/).filter(function (dt) {
    return dt.length >= 1 && dt !== " ";
  }).map(function (word) {
    return word.trim();
  });
  var formatArr = formatStr.split(/-|\/|\.|T|Z|:|\s/).filter(function (dt) {
    return dt.length >= 1 && dt !== " ";
  }).map(function (word) {
    return word.trim();
  });
  var newDate = {
    year: new Date().getFullYear(),
    month: Number(new Date().getMonth()) + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    millisecond: new Date().getMilliseconds()
  };

  if (dateArr.length === formatArr.length) {
    for (var i = 0; i < dateArr.length; i++) {
      if (dateArr[i].length === 4 && isNaN(dateArr[i]) === false && formatArr[i] === 'YYYY') {
        newDate.year = dateArr[i];
      } else if (dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'YY') {
        newDate.year = dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'M' || formatArr[i] === 'MM') {
        newDate.month = Number(dateArr[i]) - 1;
      } else if (dateArr[i].length === 3 && months(locale, dayType).map(function (mn) {
        return mn.slice(0, 3);
      }).includes(dateArr[i]) && formatArr[i] === 'm') {
        newDate.month = months(locale, dayType).map(function (mn) {
          return mn.slice(0, 3);
        }).findIndex(dateArr[i]);
      } else if (dateArr[i].length >= 3 && months(locale, dayType).includes(dateArr[i]) && formatArr[i] === 'mm') {
        newDate.month = months(locale, dayType).findIndex(dateArr[i]);
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'D' || formatArr[i] === 'DD') {
        newDate.day = dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'H' || formatArr[i] === 'HH') {
        newDate.hour = dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'h' || formatArr[i] === 'hh') {
        newDate.hour = dateArr[i] > 12 ? Number(dateArr[i]) - (Number(dateArr[i]) - 1) : dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'k' || formatArr[i] === 'kk') {
        newDate.hour = Number(dateArr[i]) === 24 ? 0 : dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'i' || formatArr[i] === 'ii') {
        newDate.minute = dateArr[i];
      } else if (dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 's' || formatArr[i] === 'ss') {
        newDate.second = dateArr[i];
      } else if (dateArr[i].length >= 3 && isNaN(dateArr[i]) === false && formatArr[i] === 'uuu') {
        newDate.millisecond = dateArr[i];
      } else if (dateArr[i].slice(-2) === 'st' || dateArr[i].slice(-2) === 'nd' || dateArr[i].slice(-2) === 'th' && formatArr[i] === 'Do') {
        newDate.second = Number(dateArr[i].slice(0, -2));
      }
    }
  } else {
    throw new Error('The numbers and the formats must be in place, so when we check the length of both of these arguments then the result will be the same');
  }

  return new Date(newDate.year, newDate.month, newDate.day, newDate.hour, newDate.minute, newDate.second, newDate.millisecond).toString();
};

var utc = function utc() {
  return new Date(Date.UTC.apply(Date, arguments));
};

var addDate = function addDate(dateParam, addNum) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!isFullDate(dateParam)) {
    throw new Error('Please enter a date in correct way, either in string or array type');
  }

  if (!isNumber(addNum)) {
    throw new Error('Only accept number type on second argument');
  }

  var newDate = new Date(dateParam); // tambah hari atau tanggal

  var addNewDate = Number(newDate.getDate()) + Number(addNum); // pastikan tanggal tidak melewati jumlah tanggal pada bulan tertentu

  var allDays = Number(daysInMonth(Number(newDate.getFullYear()), newDate.getMonth() + 1));

  if (addNewDate > allDays) {
    var restNewDate = addNewDate - allDays; // pastikan juga bulannya tidak bulan 12, kalau ya berati masuk tahun baru

    if (Number(newDate.getMonth()) === 11) {
      newDate = new Date(Number(newDate.getFullYear()) + 1, 0, restNewDate);
    } else {
      newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()) + 1, restNewDate);
    }
  } else {
    newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()), addNewDate);
  } // cek format


  var formatDate = formatParam !== null && isFormatDate(formatParam) !== false ? format(newDate, formatParam) : newDate;
  return formatDate;
};

var subtractDate = function subtractDate(dateParam, subtractNum) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!isFullDate(dateParam)) {
    throw new Error('Please enter a date in correct way, either in string or array type');
  }

  if (!isNumber(subtractNum)) {
    throw new Error('Only accept number type on second argument');
  }

  var newDate = new Date(dateParam); // kurangi tanggal

  var subtractNewDate = Number(newDate.getDate()) - Number(subtractNum); // pastikan tanggal tidak melewati jumlah tanggal pada bulan tertentu

  var allDays = Number(daysInMonth(Number(newDate.getFullYear()), newDate.getMonth()));

  if (subtractNewDate < 1) {
    var restNewDate = allDays + (subtractNewDate - 1); // pastikan juga bulannya tidak bulan 1, kalau ya berati masuk tahun lama

    if (Number(newDate.getMonth()) === 0) {
      newDate = new Date(Number(newDate.getFullYear()) - 1, 0, restNewDate);
    } else {
      newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()) + 1, restNewDate);
    }
  } else {
    newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()), subtractNewDate);
  } // cek dan buat formatnya


  var formatDate = formatParam !== null && isFormatDate(formatParam) !== false ? format(newDate, formatParam) : newDate;
  return formatDate;
};

var rangeDate = function rangeDate(startDate, endDate) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!isFullDate(firstDate)) {
    throw new Error('Error in the first argument: ' + msgDate.fullDateMsg);
  }

  if (!isFullDate(lastDate)) {
    throw new Error('Error in the second argument: ' + msgDate.fullDateMsg);
  }

  var firstDate = new Date(startDate);
  var lastDate = new Date(endDate);
  var arrayDate = [];
  var currentDate = firstDate; // iterasi tanggal dan push kedalam array

  while (currentDate <= lastDate) {
    var formatDate = formatParam !== null && isFormatDate(formatParam) !== false ? format(currentDate, formatParam) : currentDate;
    arrayDate.push(formatDate);
    currentDate = addDate(currentDate, 1);
  } // tanggal dalam array


  return arrayDate;
};

var week = function week(yearParams, monthParams, dateParams) {
  // pengecekan tahun, bulan, dan tangal dan untuk pesan saya pisahkan pada berkas lain
  if (!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isDate(dateParams)) {
    throw new Error(msgDate.dateMsg);
  } // hitung jumlah hari yang telah dilalui dalam tahun ini


  var calcCurrentDays = daysInBetween(new Date(Number(yearParams), 0, 1), new Date(Number(yearParams), Number(monthParams) - 1, Number(dateParams))); // kurangi hari yang tidak dimulai dari hari ahad

  var getFirstDay = Number(new Date(yearParams, 0, 1).getDay());
  var subtractDay = 0;

  if (getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1);
  } // perlu penambahan jika tidak berakhir hari sabtu


  var getLastDay = Number(new Date(Number(yearParams), Number(monthParams) - 1, Number(dateParams)).getDay());
  var addDay = 0;

  if (getLastDay < 6) {
    addDay = 6 - getLastDay;
  }

  return Math.ceil((Number(calcCurrentDays) + addDay - subtractDay) / 7);
};
var weeks = function weeks(yearParam, weekParam) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isNumber(weekParam)) {
    throw new Error('You have to enter a number');
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // pengecekan posisi dari tanggal dan bulan pertama


  var getFirstDay = Number(new Date(Number(yearParam), 0, 1).getDay());
  var subtractDay = 0;

  if (getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1);
  } // ini akan menghasilkan object dengan angka setiap pekan sebagai property key dan tanggal mulai dan akhir dari sepekan dalam array


  var arrWeek = [];
  var startDay = subtractDay + 1;
  var startMonth = 0;
  var startYear = yearParam;

  for (var i = 1; i <= Number(weekParam); i++) {
    if (i === Number(weekParam)) {
      arrWeek.push(format(new Date(startYear, startMonth, startDay), formatParam));
      var j = 0;

      while (j < 6) {
        j++;
        arrWeek.push(format(addDate(new Date(startYear, startMonth, startDay), j), formatParam));
      }
    }

    startDay = startDay + 7;

    if (startMonth < 12 && startDay > Number(daysInMonth(yearParam, startMonth + 1))) {
      startDay = startDay - Number(daysInMonth(yearParam, startMonth + 1));

      if (startMonth !== 11) {
        startMonth = startMonth + 1;
      } else {
        startMonth = 1;
        startYear = startYear + 1;
      }
    }
  }

  return arrWeek;
};
var weeksInMonth = function weeksInMonth(yearParam, monthParam) {
  if (!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg);
  } // cek bulan dari semua nilai pekan dalam setahun


  var getWeekNumbers = weeksOfYear(yearParam, 52, 'M');
  var resWeeks = [];

  for (var _i = 0, _Object$entries = Object.entries(getWeekNumbers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        val = _Object$entries$_i[1];

    if (val.includes(monthParam.toString())) {
      resWeeks.push(key);
    }
  }

  return Number(monthParam) === 1 ? resWeeks.filter(function (w) {
    return w !== '52';
  }) : resWeeks;
};
var weeksInYear = function weeksInYear(yearParams) {
  if (!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg);
  } // cek posisi dari tanggal dan bulan pertama


  var getFirstDay = Number(new Date(Number(yearParams), 0, 1).getDay());
  var subtractDay = 0;

  if (getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1);
  } // cek posisi dari tanggal dan bulan terakhir


  var getLastDay = Number(new Date(Number(yearParams), 11, 31).getDay());
  var addDay = 0;

  if (getLastDay < 6) {
    addDay = 6 - getLastDay;
  } // hitung jumlah pekan dalam satu tahun


  var totalWeeks = Math.ceil((Number(daysInYear(yearParams)) + addDay - subtractDay) / 7);
  return totalWeeks;
};
var weeksOfYear = function weeksOfYear(yearParam, weekParam) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isNumber(weekParam)) {
    throw new Error('You have to enter a number');
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // pengecekan posisi dari tanggal dan bulan pertama


  var getFirstDay = Number(new Date(Number(yearParam), 0, 1).getDay());
  var subtractDay = 0;

  if (getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1);
  } // ini akan menghasilkan object dengan angka setiap pekan sebagai property key dan tanggal mulai dan akhir dari sepekan dalam array


  var objWeek = {};
  var startDay = subtractDay + 1;
  var startMonth = 0;
  var startYear = yearParam;

  for (var i = 1; i <= weekParam; i++) {
    objWeek[i.toString()] = [format(new Date(startYear, startMonth, startDay), formatParam), format(addDate(new Date(startYear, startMonth, startDay), 6), formatParam)];
    startDay = startDay + 7;

    if (startMonth < 12 && startDay > Number(daysInMonth(yearParam, startMonth + 1))) {
      startDay = startDay - Number(daysInMonth(yearParam, startMonth + 1));

      if (startMonth !== 11) {
        startMonth = startMonth + 1;
      } else {
        startMonth = 1;
        startYear = startYear + 1;
      }
    }
  }

  return objWeek;
};

var calendar = function calendar(yearArg, monthArg) {
  var flatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var formatParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'YYYY-MM-DD';
  var locale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'en-US';

  if (!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // ambil nama-nama hari


  var dayNames = days(locale); // rangekan dan hasilkan semua tanggal

  var currentMonth = rangeDate(new Date(yearArg, Number(monthArg) - 1, 1), new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)), formatParam); // cek hari pertama, kurangi hari yang tidak dimulai dari hari ahad

  var getFirstDay = Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay());
  var prevMonth = [];

  if (getFirstDay > 0) {
    var subtractPrevDay = getFirstDay - 1;
    prevMonth = rangeDate(new Date(yearArg, Number(monthArg) - 2, Number(daysInMonth(yearArg, Number(monthArg) - 1)) - subtractPrevDay), new Date(yearArg, Number(monthArg) - 2, daysInMonth(yearArg, Number(monthArg) - 1)), formatParam);
  } // cek hari terakhir, perlu penambahan jika tidak berakhir hari sabtu


  var getLastDay = Number(new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)).getDay());
  var nextMonth = [];

  if (getLastDay < 6) {
    var addNextDay = 6 - (getLastDay + 1);
    nextMonth = rangeDate(new Date(yearArg, Number(monthArg), 1), new Date(yearArg, Number(monthArg), 1 + addNextDay), formatParam);
  }

  var newMonth = [dayNames, prevMonth, currentMonth, nextMonth];
  return flatParam === true ? newMonth.flat() : newMonth;
};
var daysInCalendar = function daysInCalendar(yearArg, monthArg) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // rangekan dan hasilkan semua tanggal untuk bulan ini


  return rangeDate(new Date(yearArg, Number(monthArg) - 1, 1), new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)), formatParam);
};
var prevDaysInCalendar = function prevDaysInCalendar(yearArg, monthArg) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // cek hari pertama, kurangi hari yang tidak dimulai dari hari ahad


  var getFirstDay = Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay());
  var restPrevMonth = [];

  if (getFirstDay > 0) {
    var subtractPrevDay = getFirstDay - 1;
    restPrevMonth = rangeDate(new Date(yearArg, Number(monthArg) - 2, Number(daysInMonth(yearArg, Number(monthArg) - 1)) - subtractPrevDay), new Date(yearArg, Number(monthArg) - 2, daysInMonth(yearArg, Number(monthArg) - 1)), formatParam);
  }

  return restPrevMonth;
};
var nextDaysInCalendar = function nextDaysInCalendar(yearArg, monthArg) {
  var formatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // cek hari terakhir, perlu penambahan jika tidak berakhir hari sabtu


  var getLastDay = Number(new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)).getDay());
  var restNextMonth = [];

  if (getLastDay < 6) {
    var addNextDay = 6 - (getLastDay + 1);
    restNextMonth = rangeDate(new Date(yearArg, Number(monthArg), 1), new Date(yearArg, Number(monthArg), 1 + addNextDay), formatParam);
  }

  return restNextMonth;
};
var weeklyCalendar = function weeklyCalendar(yearParam, monthParam, dateParam) {
  var formatParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'YYYY-MM-DD';
  var locale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'en-US';

  if (!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isDate(dateParam)) {
    throw new Error(msgDate.dateMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  }

  var dayNames = days(locale);
  var weekNumbers = week(yearParam, monthParam, dateParam);
  var weekDates = weeks(yearParam, weekNumbers, formatParam);
  return zip(dayNames, weekDates)[0];
};
var calendarWithWeeks = function calendarWithWeeks(yearArg, monthArg) {
  var flatParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var formatParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'YYYY-MM-DD';
  var locale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'en-US';

  if (!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg);
  }

  if (!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg);
  }

  if (!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly');
  } // ambil nama-nama hari


  var dayNames = days(locale); // ambil nomor pekan saja dari bulan ini

  var weekNumbers = weeksInMonth(yearArg, monthArg);
  var currentMonth = [];

  if (Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay()) !== 0 && Number(monthArg) === 1) {
    currentMonth.push('52');
    currentMonth.push(weeks(Number(yearArg) - 1, 52, formatParam));
  }

  var _iterator = _createForOfIteratorHelper(weekNumbers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var wn = _step.value;
      currentMonth.push(wn);
      currentMonth.push(weeks(yearArg, wn, formatParam));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newMonth = ['Week', dayNames].concat(currentMonth);
  return flatParam === true ? newMonth.flat() : newMonth;
};

var dateToArray = function dateToArray(date) {
  if (!isFullDate(date)) {
    throw new Error('Please enter a valid date');
  }

  var newDate = new Date(date).toJSON();
  return newDate.replace('Z', '').split(/-|:|\s|\.|T/g);
};

var date = /*#__PURE__*/Object.freeze({
  __proto__: null,
  now: now,
  nowHijri: nowHijri,
  parse: parse,
  parseDate: parse,
  utc: utc,
  addDate: addDate,
  subtractDate: subtractDate,
  rangeDate: rangeDate,
  day: day,
  days: days,
  daysInMonth: daysInMonth,
  daysInYear: daysInYear,
  daysInBetween: daysInBetween,
  week: week,
  weeks: weeks,
  weeksInMonth: weeksInMonth,
  weeksInYear: weeksInYear,
  month: month,
  months: months,
  isYear: isYear,
  isMonth: isMonth,
  isDate: isDate,
  isFullDate: isFullDate,
  isFormatDate: isFormatDate,
  isLeapYear: isLeapYear,
  calendar: calendar,
  daysInCalendar: daysInCalendar,
  prevDaysInCalendar: prevDaysInCalendar,
  nextDaysInCalendar: nextDaysInCalendar,
  weeklyCalendar: weeklyCalendar,
  calendarWithWeeks: calendarWithWeeks,
  dateToArray: dateToArray
});

var size = function size(bytes, decimalPoint) {
  if (bytes === 0) return '0 Bytes';
  var k = 1000;
  var dm = decimalPoint || 1;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

var name = function name(val) {
  if (typeof val === 'string') {
    if (val.indexOf('', 41) > 40) {
      return val.slice(0, 41) + "...";
    } else {
      return val;
    }
  }
};

var type = function type(val) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'type';
  var arrFile = val.split('/');

  if (type == 'format') {
    arrFile.shift();
  } else {
    arrFile.pop();
  }

  return arrFile.join("");
};

var date$1 = function date(val) {
  return new Date(val).toDateString();
};

var image = function image(_image) {
  if ('name' in _image && typeof _image.name === 'string') {
    return URL.createObjectURL(_image);
  }
};

var loadImage = function loadImage(image) {
  if ('name' in image && typeof image.name === 'string') {
    URL.revokeObjectURL(image);
  }
};
/* Alternative */


var formatSize = function formatSize(file) {
  var nBytes = 0,
      oFiles = file,
      nFiles = oFiles.length;

  for (var nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }

  var sOutput = nBytes + " bytes";
  var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

  for (var nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }

  return sOutput;
};

var humanSize = function humanSize(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  var r = Math.pow(10, dp);

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return bytes.toFixed(dp) + ' ' + units[u];
};

var exported = function exported(oriArr, toFile) {
  if (_typeof(oriArr) !== 'object') return;
  if (typeof toFile !== 'string') return;
  var oriArray = Array.from(oriArr);
  var toStringFile = '';

  if (toFile.toLowerCase() === 'json') {
    toStringFile = 'data:application/json;charset=utf-8,' + JSON.stringify(oriArray, null, 2);
  } else if (toFile.toLowerCase() === 'csv') {
    var csvStr = '';

    var _iterator = _createForOfIteratorHelper(oriArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var csvObj = _step.value;

        for (var csvKey in csvObj) {
          csvStr += csvObj[csvKey] + ',';
        }

        csvStr = csvStr.trim().substring(0, csvStr.length - 1);
        csvStr += '\n';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    csvStr = csvStr.trim().substring(0, csvStr.length - 1);
    toStringFile = 'data:text/csv;charset=utf-8,' + csvStr;
  } else if (toFile.toLowerCase() === 'sql') {
    var sqlStr = 'INSERT INTO `export_table` (';

    for (var sqlKey in oriArray[0]) {
      sqlStr += '`' + sqlKey + '`,';
    }

    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
    sqlStr += ') VALUES ';

    var _iterator2 = _createForOfIteratorHelper(oriArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var sqlObj = _step2.value;
        sqlStr += '(';

        for (var _sqlKey in sqlObj) {
          sqlStr += '`' + sqlObj[_sqlKey] + '`,';
        }

        sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
        sqlStr += '),';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
    sqlStr += ';';
    toStringFile = 'data:application/sql;charset=utf-8,' + sqlStr;
  } else if (toFile.toLowerCase() === 'xml') {
    var xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n<data>';

    for (var xmlObj in oriArray) {
      xmlStr += '\n  <entry>';

      for (var xmlKey in xmlObj) {
        xmlStr += '\n    <' + xmlKey + '`>' + xmlObj[xmlKey] + '</' + xmlKey + '`>';
      }

      xmlStr += '\n  </entry>';
    }

    xmlStr += '\n</data>';
    toStringFile = 'data:application/xml;charset=utf-8,' + xmlStr;
  } else if (toFile.toLowerCase() === 'xhs') {
    var xhsStr = '//visit official site: http://xhs.glitch.me \n("data", [';

    var _iterator3 = _createForOfIteratorHelper(oriArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var xhsObj = _step3.value;
        xhsStr += '\n  ("entry", [';

        for (var xhsKey in xhsObj) {
          xhsStr += '\n    ("' + xhsKey + '", ';
          xhsStr += xhsObj[xhsKey] + '),';
        }

        xhsStr = xhsStr.trim().substring(0, xhsStr.length - 1);
        xhsStr += ']),';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    xhsStr = xhsStr.trim().substring(0, xhsStr.length - 1);
    xhsStr = '])';
    toStringFile = 'data:application/xhs;charset=utf-8,' + xhsStr;
  }

  return toStringFile;
};

var download = function download(strFile) {
  var asFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'txt';
  var nameFile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'export-to';
  if (typeof strFile !== 'string') return;
  var fileName = nameFile + '.' + asFile.toLowerCase();
  var fileStr = encodeURI(strFile);
  var fileLink = document.createElement("a");
  fileLink.href = fileStr;
  fileLink.download = fileName;
  document.body.appendChild(fileLink);
  fileLink.click();
  document.body.removeChild(fileLink);
};

var printed = function printed(oriArr) {
  if (_typeof(oriArr) !== 'object') return;
  var oriArray = Array.from(oriArr);
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  var trow = document.createElement("tr");

  for (var tableKey in oriArray[0]) {
    var tcol = document.createElement("th");
    tcol.textContent = tableKey.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
    trow.appendChild(tcol);
  }

  thead.appendChild(trow);

  for (var _i = 0, _oriArray = oriArray; _i < _oriArray.length; _i++) {
    var tableObj = _oriArray[_i];
    var tr = document.createElement("tr");

    for (var _tableKey in tableObj) {
      var td = document.createElement("td");
      td.textContent = tableObj[_tableKey];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  var w = window.open();
  w.document.body.appendChild(table);
  w.focus();
  w.print();
};

var file = /*#__PURE__*/Object.freeze({
  __proto__: null,
  size: size,
  name: name,
  type: type,
  image: image,
  date: date$1,
  loadImage: loadImage,
  formatSize: formatSize,
  humanSize: humanSize,
  exported: exported,
  download: download,
  printed: printed
});

var setCookie = function setCookie(name, value, days) {
  var expires;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "expires=" + date.toGMTString();
  } else {
    expires = "";
  }

  document.cookie = name + "=" + value + "; SameSite=Lax;" + expires + "; path=/";
};
var getCookie = function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};
var hasCookie = function hasCookie(name) {
  return getCookie(name) ? true : false;
};
var removeCookie = function removeCookie(name) {
  setCookie(name, "", -1);
};
var clearCookie = function clearCookie() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

var isStorage = function isStorage(storageType) {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && "".concat(storageType, "Storage") in window ? true : false;
};
var isCookie = function isCookie() {
  return (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && 'cookie' in document ? true : false;
};

var setStorage = function setStorage(key, value) {
  var storageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'local';
  if (!isStorage(storageType)) return;
  window["".concat(storageType, "Storage")].setItem(key, value);
};
var getStorage = function getStorage(key) {
  var storageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  if (!isStorage(storageType)) return;
  return window["".concat(storageType, "Storage")].getItem(key);
};
var hasStorage = function hasStorage(key) {
  var storageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  if (!isStorage(storageType)) return;
  return window["".concat(storageType, "Storage")].getItem(key) ? true : false;
};
var removeStorage = function removeStorage(key) {
  var storageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  if (!isStorage(storageType)) return;

  if (hasStorage(key, storageType)) {
    window["".concat(storageType, "Storage")].removeItem(key);
  }
};
var clearStorage = function clearStorage() {
  var storageType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'local';
  if (!isStorage(storageType)) return;
  window["".concat(storageType, "Storage")].clear();
};

var storage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setCookie: setCookie,
  getCookie: getCookie,
  hasCookie: hasCookie,
  removeCookie: removeCookie,
  clearCookie: clearCookie,
  isStorage: isStorage,
  isCookie: isCookie,
  setStorage: setStorage,
  getStorage: getStorage,
  hasStorage: hasStorage,
  removeStorage: removeStorage,
  clearStorage: clearStorage
});

var ternary = function ternary(cb1, cb2, cb3) {
  if (!isFunction(cb1) && !isFunction(cb2) && !isFunction(cb3)) {
    throw new Error('All arguments here only accept value in function');
  }

  return cb1() ? cb2() : cb3();
};

var func = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ternary: ternary
});

export { array as $array, char as $char, date as $date, file as $file, int as $int, number as $number, object as $object, string as $string, array, char, date, file, func, int, number, object, storage, string };

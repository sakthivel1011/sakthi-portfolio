import {
  require_hoist_non_react_statics_cjs
} from "./chunk-MFUCCS4W.js";
import {
  require_react
} from "./chunk-4X6FFAZQ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports2, module2) {
    "use strict";
    var isArray2 = Array.isArray;
    var keyList = Object.keys;
    var hasProp = Object.prototype.hasOwnProperty;
    var hasElementType = typeof Element !== "undefined";
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        var arrA = isArray2(a), arrB = isArray2(b), i, length, key;
        if (arrA && arrB) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (arrA != arrB) return false;
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();
        var keys2 = keyList(a);
        length = keys2.length;
        if (length !== keyList(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!hasProp.call(b, keys2[i])) return false;
        if (hasElementType && a instanceof Element && b instanceof Element)
          return a === b;
        for (i = length; i-- !== 0; ) {
          key = keys2[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          } else {
            if (!equal(a[key], b[key])) return false;
          }
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module2.exports = function exportedEqual(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
          console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/deepmerge/dist/es.js
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var es_default = deepmerge_1;

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isPlainObject.js
var objectTag = "[object Object]";
var funcProto = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto2 = Function.prototype;
var funcToString2 = funcProto2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto3 = Function.prototype;
var objectProto4 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString3.call(hasOwnProperty3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_Map.js
var Map = getNative_default(root_default, "Map");
var Map_default = Map;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/_assignValue.js
var objectProto7 = Object.prototype;
var hasOwnProperty6 = objectProto7.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty6.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto8 = Object.prototype;
var hasOwnProperty7 = objectProto8.hasOwnProperty;
var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty7.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag2 = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag2] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty8 = objectProto9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty8.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_isPrototype.js
var objectProto10 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto10;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty9.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default = baseAssign;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto12 = Object.prototype;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty10.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto13 = Object.prototype;
var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default = copySymbols;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result = [];
  while (object) {
    arrayPush_default(result, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set = getNative_default(root_default, "Set");
var Set_default = Set;

// node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_initCloneArray.js
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var initCloneArray_default = initCloneArray;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/lodash-es/_cloneRegExp.js
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/lodash-es/_cloneSymbol.js
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag:
      return cloneSymbol_default(object);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_baseIsMap.js
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/lodash-es/_baseIsSet.js
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag4 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag2 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var baseClone_default = baseClone;

// node_modules/lodash-es/cloneDeep.js
var CLONE_DEEP_FLAG2 = 1;
var CLONE_SYMBOLS_FLAG2 = 4;
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
}
var cloneDeep_default = cloneDeep;

// node_modules/formik/dist/formik.esm.js
var import_react = __toESM(require_react());
var import_react_fast_compare = __toESM(require_react_fast_compare());

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/lodash-es/clone.js
var CLONE_SYMBOLS_FLAG3 = 4;
function clone(value) {
  return baseClone_default(value, CLONE_SYMBOLS_FLAG3);
}
var clone_default = clone;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isSymbol.js
var symbolTag3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag3;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/_toKey.js
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseToString.js
var INFINITY2 = 1 / 0;
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto2 ? symbolProto2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/toPath.js
function toPath(value) {
  if (isArray_default(value)) {
    return arrayMap_default(value, toKey_default);
  }
  return isSymbol_default(value) ? [value] : copyArray_default(stringToPath_default(toString_default(value)));
}
var toPath_default = toPath;

// node_modules/formik/dist/formik.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var FormikContext = (0, import_react.createContext)(void 0);
FormikContext.displayName = "FormikContext";
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0, import_react.useContext)(FormikContext);
  !!!formik ? true ? tiny_warning_esm_default(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : tiny_warning_esm_default(false) : void 0;
  return formik;
}
var isEmptyArray = function isEmptyArray2(value) {
  return Array.isArray(value) && value.length === 0;
};
var isFunction2 = function isFunction3(obj) {
  return typeof obj === "function";
};
var isObject2 = function isObject3(obj) {
  return obj !== null && typeof obj === "object";
};
var isInteger = function isInteger2(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isString = function isString2(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isNaN$1 = function isNaN2(obj) {
  return obj !== obj;
};
var isEmptyChildren = function isEmptyChildren2(children) {
  return import_react.Children.count(children) === 0;
};
var isPromise = function isPromise2(value) {
  return isObject2(value) && isFunction2(value.then);
};
var isInputEvent = function isInputEvent2(value) {
  return value && isObject2(value) && isObject2(value.target);
};
function getActiveElement(doc) {
  doc = doc || (typeof document !== "undefined" ? document : void 0);
  if (typeof doc === "undefined") {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }
  var path = toPath_default(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  if (p !== path.length && !obj) {
    return def;
  }
  return obj === void 0 ? def : obj;
}
function setIn(obj, path, value) {
  var res = clone_default(obj);
  var resVal = res;
  var i = 0;
  var pathArray = toPath_default(path);
  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject2(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone_default(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === void 0) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }
  if (i === 0 && value === void 0) {
    delete res[pathArray[i]];
  }
  return res;
}
function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = /* @__PURE__ */ new WeakMap();
  }
  if (response === void 0) {
    response = {};
  }
  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];
    if (isObject2(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }
  return response;
}
function formikReducer(state, msg) {
  switch (msg.type) {
    case "SET_VALUES":
      return _extends({}, state, {
        values: msg.payload
      });
    case "SET_TOUCHED":
      return _extends({}, state, {
        touched: msg.payload
      });
    case "SET_ERRORS":
      if ((0, import_react_fast_compare.default)(state.errors, msg.payload)) {
        return state;
      }
      return _extends({}, state, {
        errors: msg.payload
      });
    case "SET_STATUS":
      return _extends({}, state, {
        status: msg.payload
      });
    case "SET_ISSUBMITTING":
      return _extends({}, state, {
        isSubmitting: msg.payload
      });
    case "SET_ISVALIDATING":
      return _extends({}, state, {
        isValidating: msg.payload
      });
    case "SET_FIELD_VALUE":
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_ERROR":
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });
    case "RESET_FORM":
      return _extends({}, state, msg.payload);
    case "SET_FORMIK_STATE":
      return msg.payload(state);
    case "SUBMIT_ATTEMPT":
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return _extends({}, state, {
        isSubmitting: false
      });
    case "SUBMIT_SUCCESS":
      return _extends({}, state, {
        isSubmitting: false
      });
    default:
      return state;
  }
}
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);
  var props = _extends({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    onSubmit
  }, rest);
  var initialValues = (0, import_react.useRef)(props.initialValues);
  var initialErrors = (0, import_react.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0, import_react.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0, import_react.useRef)(props.initialStatus);
  var isMounted = (0, import_react.useRef)(false);
  var fieldRegistry = (0, import_react.useRef)({});
  if (true) {
    (0, import_react.useEffect)(function() {
      !(typeof isInitialValid === "undefined") ? true ? tiny_warning_esm_default(false, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  (0, import_react.useEffect)(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var _React$useState = (0, import_react.useState)(0), setIteration = _React$useState[1];
  var stateRef = (0, import_react.useRef)({
    values: cloneDeep_default(props.initialValues),
    errors: cloneDeep_default(props.initialErrors) || emptyErrors,
    touched: cloneDeep_default(props.initialTouched) || emptyTouched,
    status: cloneDeep_default(props.initialStatus),
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  });
  var state = stateRef.current;
  var dispatch = (0, import_react.useCallback)(function(action) {
    var prev = stateRef.current;
    stateRef.current = formikReducer(prev, action);
    if (prev !== stateRef.current) setIteration(function(x) {
      return x + 1;
    });
  }, []);
  var runValidateHandler = (0, import_react.useCallback)(function(values, field) {
    return new Promise(function(resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);
      if (maybePromisedErrors == null) {
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function(errors) {
          resolve(errors || emptyErrors);
        }, function(actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }
          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  var runValidationSchema = (0, import_react.useCallback)(function(values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction2(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function(resolve, reject) {
      promise.then(function() {
        resolve(emptyErrors);
      }, function(err) {
        if (err.name === "ValidationError") {
          resolve(yupToFormErrors(err));
        } else {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }
          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0, import_react.useCallback)(function(field, value) {
    return new Promise(function(resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0, import_react.useCallback)(function(values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
      return isFunction2(fieldRegistry.current[f].validate);
    });
    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(fieldValidations).then(function(fieldErrorsList) {
      return fieldErrorsList.reduce(function(prev, curr, index) {
        if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") {
          return prev;
        }
        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }
        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]);
  var runAllValidations = (0, import_react.useCallback)(function(values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function(_ref2) {
      var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
      var combinedErrors = es_default.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]);
  var validateFormWithHighPriority = useEventCallback(function(values) {
    if (values === void 0) {
      values = state.values;
    }
    dispatch({
      type: "SET_ISVALIDATING",
      payload: true
    });
    return runAllValidations(values).then(function(combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
        dispatch({
          type: "SET_ERRORS",
          payload: combinedErrors
        });
      }
      return combinedErrors;
    });
  });
  (0, import_react.useEffect)(function() {
    if (validateOnMount && isMounted.current === true && (0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0, import_react.useCallback)(function(nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;
    var dispatchFn = function dispatchFn2() {
      dispatch({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors,
          touched,
          status,
          values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
        }
      });
    };
    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched, props.onReset]);
  (0, import_react.useEffect)(function() {
    if (isMounted.current === true && !(0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
        if (validateOnMount) {
          validateFormWithHighPriority(initialValues.current);
        }
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0, import_react.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: "SET_ERRORS",
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0, import_react.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: "SET_TOUCHED",
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0, import_react.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: "SET_STATUS",
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function(name) {
    if (fieldRegistry.current[name] && isFunction2(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);
      if (isPromise(maybePromise)) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: true
        });
        return maybePromise.then(function(x) {
          return x;
        }).then(function(error) {
          dispatch({
            type: "SET_FIELD_ERROR",
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: "SET_ISVALIDATING",
            payload: false
          });
        });
      } else {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: "SET_ISVALIDATING",
        payload: true
      });
      return runValidationSchema(state.values, name).then(function(x) {
        return x;
      }).then(function(error) {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: getIn(error, name)
          }
        });
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
      });
    }
    return Promise.resolve();
  });
  var registerField = (0, import_react.useCallback)(function(name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate
    };
  }, []);
  var unregisterField = (0, import_react.useCallback)(function(name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function(touched, shouldValidate) {
    dispatch({
      type: "SET_TOUCHED",
      payload: touched
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0, import_react.useCallback)(function(errors) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function(values, shouldValidate) {
    var resolvedValues = isFunction2(values) ? values(state.values) : values;
    dispatch({
      type: "SET_VALUES",
      payload: resolvedValues
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0, import_react.useCallback)(function(field, value) {
    dispatch({
      type: "SET_FIELD_ERROR",
      payload: {
        field,
        value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: {
        field,
        value
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0, import_react.useCallback)(function(eventOrTextValue, maybePath) {
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!isString(eventOrTextValue)) {
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }
      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;
      if (!field && true) {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
          handlerName: "handleChange"
        });
      }
      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple ? getSelectedValues(options) : value;
    }
    if (field) {
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function(eventOrPath) {
    if (isString(eventOrPath)) {
      return function(event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field,
        value: touched
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0, import_react.useCallback)(function(e, path) {
    if (e.persist) {
      e.persist();
    }
    var _e$target = e.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;
    if (!field && true) {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: "handleblur-e-any--void",
        handlerName: "handleBlur"
      });
    }
    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function(eventOrString) {
    if (isString(eventOrString)) {
      return function(event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0, import_react.useCallback)(function(stateOrCb) {
    if (isFunction2(stateOrCb)) {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0, import_react.useCallback)(function(status) {
    dispatch({
      type: "SET_STATUS",
      payload: status
    });
  }, []);
  var setSubmitting = (0, import_react.useCallback)(function(isSubmitting) {
    dispatch({
      type: "SET_ISSUBMITTING",
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function() {
    dispatch({
      type: "SUBMIT_ATTEMPT"
    });
    return validateFormWithHighPriority().then(function(combinedErrors) {
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
      if (isActuallyValid) {
        var promiseOrUndefined;
        try {
          promiseOrUndefined = executeSubmit();
          if (promiseOrUndefined === void 0) {
            return;
          }
        } catch (error) {
          throw error;
        }
        return Promise.resolve(promiseOrUndefined).then(function(result) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_SUCCESS"
            });
          }
          return result;
        })["catch"](function(_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_FAILURE"
            });
            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        dispatch({
          type: "SUBMIT_FAILURE"
        });
        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }
      return;
    });
  });
  var handleSubmit = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction2(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction2(e.stopPropagation)) {
      e.stopPropagation();
    }
    if (typeof document !== "undefined") {
      var activeElement = getActiveElement();
      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem("type")) ? true ? tiny_warning_esm_default(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : tiny_warning_esm_default(false) : void 0;
      }
    }
    submitForm()["catch"](function(reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormikState,
    submitForm
  };
  var executeSubmit = useEventCallback(function() {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction2(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction2(e.stopPropagation)) {
      e.stopPropagation();
    }
    resetForm();
  });
  var getFieldMeta = (0, import_react.useCallback)(function(name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0, import_react.useCallback)(function(name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched2(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0, import_react.useCallback)(function(nameOrOptions) {
    var isAnObject = isObject2(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };
    if (isAnObject) {
      var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
      if (type === "checkbox") {
        if (valueProp === void 0) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === "radio") {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === "select" && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }
    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0, import_react.useMemo)(function() {
    return !(0, import_react_fast_compare.default)(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = (0, import_react.useMemo)(function() {
    return typeof isInitialValid !== "undefined" ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction2(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);
  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount
  });
  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
  (0, import_react.useImperativeHandle)(innerRef, function() {
    return formikbag;
  });
  if (true) {
    (0, import_react.useEffect)(function() {
      !!props.render ? true ? tiny_warning_esm_default(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  return (0, import_react.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0, import_react.createElement)(component, formikbag) : render ? render(formikbag) : children ? isFunction2(children) ? children(formikbag) : !isEmptyChildren(children) ? import_react.Children.only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
  var errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref5;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }
      var err = _ref5;
      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }
  var normalizedValues = prepareDataForValidation(values);
  return schema[sync ? "validateSync" : "validate"](normalizedValues, {
    abortEarly: false,
    context: context || normalizedValues
  });
}
function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};
  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);
      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function(value) {
          if (Array.isArray(value) === true || isPlainObject_default(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== "" ? value : void 0;
          }
        });
      } else if (isPlainObject_default(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== "" ? values[key] : void 0;
      }
    }
  }
  return data;
}
function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === "undefined") {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? es_default(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = es_default(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
function getSelectedValues(options) {
  return Array.from(options).filter(function(el) {
    return el.selected;
  }).map(function(el) {
    return el.value;
  });
}
function getValueForCheckbox(currentValue, checked, valueProp) {
  if (typeof currentValue === "boolean") {
    return Boolean(checked);
  }
  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;
  if (!Array.isArray(currentValue)) {
    if (!valueProp || valueProp == "true" || valueProp == "false") {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  }
  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }
  if (!isValueInArray) {
    return currentArrayOfValues;
  }
  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useEventCallback(fn) {
  var ref = (0, import_react.useRef)(fn);
  useIsomorphicLayoutEffect(function() {
    ref.current = fn;
  });
  return (0, import_react.useCallback)(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
}
function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps, getFieldMeta = formik.getFieldMeta, getFieldHelpers = formik.getFieldHelpers, registerField = formik.registerField, unregisterField = formik.unregisterField;
  var isAnObject = isObject2(propsOrFieldName);
  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name, validateFn = props.validate;
  (0, import_react.useEffect)(function() {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }
    return function() {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);
  if (true) {
    !formik ? true ? tiny_warning_esm_default(false, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : tiny_warning_esm_default(false) : void 0;
  }
  !fieldName ? true ? tiny_warning_esm_default(false, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : tiny_warning_esm_default(false) : void 0;
  var fieldHelpers = (0, import_react.useMemo)(function() {
    return getFieldHelpers(fieldName);
  }, [getFieldHelpers, fieldName]);
  return [getFieldProps(props), getFieldMeta(fieldName), fieldHelpers];
}
function Field(_ref) {
  var validate = _ref.validate, name = _ref.name, render = _ref.render, children = _ref.children, is = _ref.as, component = _ref.component, className = _ref.className, props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component", "className"]);
  var _useFormikContext = useFormikContext(), formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);
  if (true) {
    (0, import_react.useEffect)(function() {
      !!render ? true ? tiny_warning_esm_default(false, '<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name="' + name + '" render={({field, form}) => ...} /> with <Field name="' + name + '">{({field, form, meta}) => ...}</Field>') : tiny_warning_esm_default(false) : void 0;
      !!(is && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.") : tiny_warning_esm_default(false) : void 0;
      !!(component && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.") : tiny_warning_esm_default(false) : void 0;
      !!(render && children && !isEmptyChildren(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  var registerField = formik.registerField, unregisterField = formik.unregisterField;
  (0, import_react.useEffect)(function() {
    registerField(name, {
      validate
    });
    return function() {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field,
    form: formik
  };
  if (render) {
    return render(_extends({}, legacyBag, {
      meta
    }));
  }
  if (isFunction2(children)) {
    return children(_extends({}, legacyBag, {
      meta
    }));
  }
  if (component) {
    if (typeof component === "string") {
      var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
      return (0, import_react.createElement)(component, _extends({
        ref: innerRef
      }, field, rest, {
        className
      }), children);
    }
    return (0, import_react.createElement)(component, _extends({
      field,
      form: formik
    }, props, {
      className
    }), children);
  }
  var asElement = is || "input";
  if (typeof asElement === "string") {
    var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
    return (0, import_react.createElement)(asElement, _extends({
      ref: _innerRef
    }, field, _rest, {
      className
    }), children);
  }
  return (0, import_react.createElement)(asElement, _extends({}, field, props, {
    className
  }), children);
}
var Form = (0, import_react.forwardRef)(function(props, ref) {
  var action = props.action, rest = _objectWithoutPropertiesLoose(props, ["action"]);
  var _action = action != null ? action : "#";
  var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
  return (0, import_react.createElement)("form", _extends({
    onSubmit: handleSubmit,
    ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = "Form";
function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues, mapPropsToValues = _ref$mapPropsToValues === void 0 ? function(vanillaProps) {
    var val = {};
    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== "function") {
        val[k] = vanillaProps[k];
      }
    }
    return val;
  } : _ref$mapPropsToValues, config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);
  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || "Component";
    var C = function(_React$Component) {
      _inheritsLoose(C2, _React$Component);
      function C2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.validate = function(values) {
          return config.validate(values, _this.props);
        };
        _this.validationSchema = function() {
          return isFunction2(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };
        _this.handleSubmit = function(values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        _this.renderFormComponent = function(formikProps) {
          return (0, import_react.createElement)(Component$1, _extends({}, _this.props, formikProps));
        };
        return _this;
      }
      var _proto = C2.prototype;
      _proto.render = function render() {
        var _this$props = this.props, props = _objectWithoutPropertiesLoose(_this$props, ["children"]);
        return (0, import_react.createElement)(Formik, _extends({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };
      return C2;
    }(import_react.Component);
    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return (0, import_hoist_non_react_statics.default)(
      C,
      Component$1
      // cast type to ComponentClass (even if SFC)
    );
  };
}
function connect(Comp) {
  var C = function C2(props) {
    return (0, import_react.createElement)(FormikConsumer, null, function(formik) {
      !!!formik ? true ? tiny_warning_esm_default(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : tiny_warning_esm_default(false) : void 0;
      return (0, import_react.createElement)(Comp, _extends({}, props, {
        formik
      }));
    });
  };
  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || "Component";
  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return (0, import_hoist_non_react_statics.default)(
    C,
    Comp
    // cast type to ComponentClass (even if SFC)
  );
}
var move = function move2(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap2(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert2(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace2(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};
var copyArrayLike = function copyArrayLike2(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function(key) {
      return parseInt(key);
    }).reduce(function(max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};
var createAlterationHandler = function createAlterationHandler2(alteration, defaultFunction) {
  var fn = typeof alteration === "function" ? alteration : defaultFunction;
  return function(data) {
    if (Array.isArray(data) || isObject2(data)) {
      var clone2 = copyArrayLike(data);
      return fn(clone2);
    }
    return data;
  };
};
var FieldArrayInner = function(_React$Component) {
  _inheritsLoose(FieldArrayInner2, _React$Component);
  function FieldArrayInner2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.updateArrayField = function(fn, alterTouched, alterErrors) {
      var _this$props = _this.props, name = _this$props.name, setFormikState = _this$props.formik.setFormikState;
      setFormikState(function(prevState) {
        var updateErrors = createAlterationHandler(alterErrors, fn);
        var updateTouched = createAlterationHandler(alterTouched, fn);
        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : void 0;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : void 0;
        if (isEmptyArray(fieldError)) {
          fieldError = void 0;
        }
        if (isEmptyArray(fieldTouched)) {
          fieldTouched = void 0;
        }
        return _extends({}, prevState, {
          values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };
    _this.push = function(value) {
      return _this.updateArrayField(function(arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [cloneDeep_default(value)]);
      }, false, false);
    };
    _this.handlePush = function(value) {
      return function() {
        return _this.push(value);
      };
    };
    _this.swap = function(indexA, indexB) {
      return _this.updateArrayField(function(array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };
    _this.handleSwap = function(indexA, indexB) {
      return function() {
        return _this.swap(indexA, indexB);
      };
    };
    _this.move = function(from, to) {
      return _this.updateArrayField(function(array) {
        return move(array, from, to);
      }, true, true);
    };
    _this.handleMove = function(from, to) {
      return function() {
        return _this.move(from, to);
      };
    };
    _this.insert = function(index, value) {
      return _this.updateArrayField(function(array) {
        return insert(array, index, value);
      }, function(array) {
        return insert(array, index, null);
      }, function(array) {
        return insert(array, index, null);
      });
    };
    _this.handleInsert = function(index, value) {
      return function() {
        return _this.insert(index, value);
      };
    };
    _this.replace = function(index, value) {
      return _this.updateArrayField(function(array) {
        return replace(array, index, value);
      }, false, false);
    };
    _this.handleReplace = function(index, value) {
      return function() {
        return _this.replace(index, value);
      };
    };
    _this.unshift = function(value) {
      var length = -1;
      _this.updateArrayField(function(array) {
        var arr = array ? [value].concat(array) : [value];
        length = arr.length;
        return arr;
      }, function(array) {
        return array ? [null].concat(array) : [null];
      }, function(array) {
        return array ? [null].concat(array) : [null];
      });
      return length;
    };
    _this.handleUnshift = function(value) {
      return function() {
        return _this.unshift(value);
      };
    };
    _this.handleRemove = function(index) {
      return function() {
        return _this.remove(index);
      };
    };
    _this.handlePop = function() {
      return function() {
        return _this.pop();
      };
    };
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = FieldArrayInner2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, import_react_fast_compare.default)(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };
  _proto.remove = function remove(index) {
    var result;
    this.updateArrayField(
      // so this gets call 3 times
      function(array) {
        var copy = array ? copyArrayLike(array) : [];
        if (!result) {
          result = copy[index];
        }
        if (isFunction2(copy.splice)) {
          copy.splice(index, 1);
        }
        return isFunction2(copy.every) ? copy.every(function(v) {
          return v === void 0;
        }) ? [] : copy : copy;
      },
      true,
      true
    );
    return result;
  };
  _proto.pop = function pop() {
    var result;
    this.updateArrayField(
      // so this gets call 3 times
      function(array) {
        var tmp = array.slice();
        if (!result) {
          result = tmp && tmp.pop && tmp.pop();
        }
        return tmp;
      },
      true,
      true
    );
    return result;
  };
  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };
    var _this$props2 = this.props, component = _this$props2.component, render2 = _this$props2.render, children = _this$props2.children, name = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);
    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name
    });
    return component ? (0, import_react.createElement)(component, props) : render2 ? render2(props) : children ? typeof children === "function" ? children(props) : !isEmptyChildren(children) ? import_react.Children.only(children) : null : null;
  };
  return FieldArrayInner2;
}(import_react.Component);
FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = connect(FieldArrayInner);
var ErrorMessageImpl = function(_React$Component) {
  _inheritsLoose(ErrorMessageImpl2, _React$Component);
  function ErrorMessageImpl2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ErrorMessageImpl2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, component = _this$props.component, formik = _this$props.formik, render2 = _this$props.render, children = _this$props.children, name = _this$props.name, rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);
    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render2 ? isFunction2(render2) ? render2(error) : null : children ? isFunction2(children) ? children(error) : null : component ? (0, import_react.createElement)(component, rest, error) : error : null;
  };
  return ErrorMessageImpl2;
}(import_react.Component);
var ErrorMessage = connect(ErrorMessageImpl);
var FastFieldInner = function(_React$Component) {
  _inheritsLoose(FastFieldInner2, _React$Component);
  function FastFieldInner2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    var render = props.render, children = props.children, component = props.component, is = props.as, name = props.name;
    !!render ? true ? tiny_warning_esm_default(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : tiny_warning_esm_default(false) : void 0;
    !!(component && render) ? true ? tiny_warning_esm_default(false, "You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored") : tiny_warning_esm_default(false) : void 0;
    !!(is && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.") : tiny_warning_esm_default(false) : void 0;
    !!(component && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.") : tiny_warning_esm_default(false) : void 0;
    !!(render && children && !isEmptyChildren(children)) ? true ? tiny_warning_esm_default(false, "You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored") : tiny_warning_esm_default(false) : void 0;
    return _this;
  }
  var _proto = FastFieldInner2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };
  _proto.render = function render() {
    var _this$props = this.props, name = _this$props.name, render2 = _this$props.render, is = _this$props.as, children = _this$props.children, component = _this$props.component, formik = _this$props.formik, props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);
    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);
    var field = formik.getFieldProps(_extends({
      name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field,
      meta,
      form: restOfFormik
    };
    if (render2) {
      return render2(bag);
    }
    if (isFunction2(children)) {
      return children(bag);
    }
    if (component) {
      if (typeof component === "string") {
        var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
        return (0, import_react.createElement)(component, _extends({
          ref: innerRef
        }, field, rest), children);
      }
      return (0, import_react.createElement)(component, _extends({
        field,
        form: formik
      }, props), children);
    }
    var asElement = is || "input";
    if (typeof asElement === "string") {
      var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
      return (0, import_react.createElement)(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }
    return (0, import_react.createElement)(asElement, _extends({}, field, props), children);
  };
  return FastFieldInner2;
}(import_react.Component);
var FastField = connect(FastFieldInner);
export {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikConsumer,
  FormikContext,
  FormikProvider,
  connect,
  getActiveElement,
  getIn,
  insert,
  isEmptyArray,
  isEmptyChildren,
  isFunction2 as isFunction,
  isInputEvent,
  isInteger,
  isNaN$1 as isNaN,
  isObject2 as isObject,
  isPromise,
  isString,
  move,
  prepareDataForValidation,
  replace,
  setIn,
  setNestedObjectValues,
  swap,
  useField,
  useFormik,
  useFormikContext,
  validateYupSchema,
  withFormik,
  yupToFormErrors
};
//# sourceMappingURL=formik.js.map

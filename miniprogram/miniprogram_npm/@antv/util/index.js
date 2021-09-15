module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1630693367178, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// array
var contains_1 = require("./contains");
Object.defineProperty(exports, "contains", { enumerable: true, get: function () { return contains_1.default; } });
Object.defineProperty(exports, "includes", { enumerable: true, get: function () { return contains_1.default; } });
var difference_1 = require("./difference");
Object.defineProperty(exports, "difference", { enumerable: true, get: function () { return difference_1.default; } });
var find_1 = require("./find");
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_1.default; } });
var find_index_1 = require("./find-index");
Object.defineProperty(exports, "findIndex", { enumerable: true, get: function () { return find_index_1.default; } });
var first_value_1 = require("./first-value");
Object.defineProperty(exports, "firstValue", { enumerable: true, get: function () { return first_value_1.default; } });
var flatten_1 = require("./flatten");
Object.defineProperty(exports, "flatten", { enumerable: true, get: function () { return flatten_1.default; } });
var flatten_deep_1 = require("./flatten-deep");
Object.defineProperty(exports, "flattenDeep", { enumerable: true, get: function () { return flatten_deep_1.default; } });
var get_range_1 = require("./get-range");
Object.defineProperty(exports, "getRange", { enumerable: true, get: function () { return get_range_1.default; } });
var pull_1 = require("./pull");
Object.defineProperty(exports, "pull", { enumerable: true, get: function () { return pull_1.default; } });
var pull_at_1 = require("./pull-at");
Object.defineProperty(exports, "pullAt", { enumerable: true, get: function () { return pull_at_1.default; } });
var reduce_1 = require("./reduce");
Object.defineProperty(exports, "reduce", { enumerable: true, get: function () { return reduce_1.default; } });
var remove_1 = require("./remove");
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return remove_1.default; } });
var sort_by_1 = require("./sort-by");
Object.defineProperty(exports, "sortBy", { enumerable: true, get: function () { return sort_by_1.default; } });
var union_1 = require("./union");
Object.defineProperty(exports, "union", { enumerable: true, get: function () { return union_1.default; } });
var uniq_1 = require("./uniq");
Object.defineProperty(exports, "uniq", { enumerable: true, get: function () { return uniq_1.default; } });
var values_of_key_1 = require("./values-of-key");
Object.defineProperty(exports, "valuesOfKey", { enumerable: true, get: function () { return values_of_key_1.default; } });
var head_1 = require("./head");
Object.defineProperty(exports, "head", { enumerable: true, get: function () { return head_1.default; } });
var last_1 = require("./last");
Object.defineProperty(exports, "last", { enumerable: true, get: function () { return last_1.default; } });
var starts_with_1 = require("./starts-with");
Object.defineProperty(exports, "startsWith", { enumerable: true, get: function () { return starts_with_1.default; } });
var ends_with_1 = require("./ends-with");
Object.defineProperty(exports, "endsWith", { enumerable: true, get: function () { return ends_with_1.default; } });
var filter_1 = require("./filter");
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return filter_1.default; } });
var every_1 = require("./every");
Object.defineProperty(exports, "every", { enumerable: true, get: function () { return every_1.default; } });
var some_1 = require("./some");
Object.defineProperty(exports, "some", { enumerable: true, get: function () { return some_1.default; } });
var group_1 = require("./group");
Object.defineProperty(exports, "group", { enumerable: true, get: function () { return group_1.default; } });
var group_by_1 = require("./group-by");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return group_by_1.default; } });
var group_to_map_1 = require("./group-to-map");
Object.defineProperty(exports, "groupToMap", { enumerable: true, get: function () { return group_to_map_1.default; } });
// event
var get_wrap_behavior_1 = require("./get-wrap-behavior");
Object.defineProperty(exports, "getWrapBehavior", { enumerable: true, get: function () { return get_wrap_behavior_1.default; } });
var wrap_behavior_1 = require("./wrap-behavior");
Object.defineProperty(exports, "wrapBehavior", { enumerable: true, get: function () { return wrap_behavior_1.default; } });
// format
var number2color_1 = require("./number2color");
Object.defineProperty(exports, "number2color", { enumerable: true, get: function () { return number2color_1.default; } });
var parse_radius_1 = require("./parse-radius");
Object.defineProperty(exports, "parseRadius", { enumerable: true, get: function () { return parse_radius_1.default; } });
// math
var clamp_1 = require("./clamp");
Object.defineProperty(exports, "clamp", { enumerable: true, get: function () { return clamp_1.default; } });
var fixed_base_1 = require("./fixed-base");
Object.defineProperty(exports, "fixedBase", { enumerable: true, get: function () { return fixed_base_1.default; } });
var is_decimal_1 = require("./is-decimal");
Object.defineProperty(exports, "isDecimal", { enumerable: true, get: function () { return is_decimal_1.default; } });
var is_even_1 = require("./is-even");
Object.defineProperty(exports, "isEven", { enumerable: true, get: function () { return is_even_1.default; } });
var is_integer_1 = require("./is-integer");
Object.defineProperty(exports, "isInteger", { enumerable: true, get: function () { return is_integer_1.default; } });
var is_negative_1 = require("./is-negative");
Object.defineProperty(exports, "isNegative", { enumerable: true, get: function () { return is_negative_1.default; } });
var is_number_equal_1 = require("./is-number-equal");
Object.defineProperty(exports, "isNumberEqual", { enumerable: true, get: function () { return is_number_equal_1.default; } });
var is_odd_1 = require("./is-odd");
Object.defineProperty(exports, "isOdd", { enumerable: true, get: function () { return is_odd_1.default; } });
var is_positive_1 = require("./is-positive");
Object.defineProperty(exports, "isPositive", { enumerable: true, get: function () { return is_positive_1.default; } });
var max_1 = require("./max");
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.default; } });
var max_by_1 = require("./max-by");
Object.defineProperty(exports, "maxBy", { enumerable: true, get: function () { return max_by_1.default; } });
var min_1 = require("./min");
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.default; } });
var min_by_1 = require("./min-by");
Object.defineProperty(exports, "minBy", { enumerable: true, get: function () { return min_by_1.default; } });
var mod_1 = require("./mod");
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return mod_1.default; } });
var to_degree_1 = require("./to-degree");
Object.defineProperty(exports, "toDegree", { enumerable: true, get: function () { return to_degree_1.default; } });
var to_integer_1 = require("./to-integer");
Object.defineProperty(exports, "toInteger", { enumerable: true, get: function () { return to_integer_1.default; } });
var to_radian_1 = require("./to-radian");
Object.defineProperty(exports, "toRadian", { enumerable: true, get: function () { return to_radian_1.default; } });
// object
var for_in_1 = require("./for-in");
Object.defineProperty(exports, "forIn", { enumerable: true, get: function () { return for_in_1.default; } });
var has_1 = require("./has");
Object.defineProperty(exports, "has", { enumerable: true, get: function () { return has_1.default; } });
var has_key_1 = require("./has-key");
Object.defineProperty(exports, "hasKey", { enumerable: true, get: function () { return has_key_1.default; } });
var has_value_1 = require("./has-value");
Object.defineProperty(exports, "hasValue", { enumerable: true, get: function () { return has_value_1.default; } });
var keys_1 = require("./keys");
Object.defineProperty(exports, "keys", { enumerable: true, get: function () { return keys_1.default; } });
var is_match_1 = require("./is-match");
Object.defineProperty(exports, "isMatch", { enumerable: true, get: function () { return is_match_1.default; } });
var values_1 = require("./values");
Object.defineProperty(exports, "values", { enumerable: true, get: function () { return values_1.default; } });
// string
var lower_case_1 = require("./lower-case");
Object.defineProperty(exports, "lowerCase", { enumerable: true, get: function () { return lower_case_1.default; } });
var lower_first_1 = require("./lower-first");
Object.defineProperty(exports, "lowerFirst", { enumerable: true, get: function () { return lower_first_1.default; } });
var substitute_1 = require("./substitute");
Object.defineProperty(exports, "substitute", { enumerable: true, get: function () { return substitute_1.default; } });
var upper_case_1 = require("./upper-case");
Object.defineProperty(exports, "upperCase", { enumerable: true, get: function () { return upper_case_1.default; } });
var upper_first_1 = require("./upper-first");
Object.defineProperty(exports, "upperFirst", { enumerable: true, get: function () { return upper_first_1.default; } });
// type
var get_type_1 = require("./get-type");
Object.defineProperty(exports, "getType", { enumerable: true, get: function () { return get_type_1.default; } });
var is_arguments_1 = require("./is-arguments");
Object.defineProperty(exports, "isArguments", { enumerable: true, get: function () { return is_arguments_1.default; } });
var is_array_1 = require("./is-array");
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return is_array_1.default; } });
var is_array_like_1 = require("./is-array-like");
Object.defineProperty(exports, "isArrayLike", { enumerable: true, get: function () { return is_array_like_1.default; } });
var is_boolean_1 = require("./is-boolean");
Object.defineProperty(exports, "isBoolean", { enumerable: true, get: function () { return is_boolean_1.default; } });
var is_date_1 = require("./is-date");
Object.defineProperty(exports, "isDate", { enumerable: true, get: function () { return is_date_1.default; } });
var is_error_1 = require("./is-error");
Object.defineProperty(exports, "isError", { enumerable: true, get: function () { return is_error_1.default; } });
var is_function_1 = require("./is-function");
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return is_function_1.default; } });
var is_finite_1 = require("./is-finite");
Object.defineProperty(exports, "isFinite", { enumerable: true, get: function () { return is_finite_1.default; } });
var is_nil_1 = require("./is-nil");
Object.defineProperty(exports, "isNil", { enumerable: true, get: function () { return is_nil_1.default; } });
var is_null_1 = require("./is-null");
Object.defineProperty(exports, "isNull", { enumerable: true, get: function () { return is_null_1.default; } });
var is_number_1 = require("./is-number");
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return is_number_1.default; } });
var is_object_1 = require("./is-object");
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return is_object_1.default; } });
var is_object_like_1 = require("./is-object-like");
Object.defineProperty(exports, "isObjectLike", { enumerable: true, get: function () { return is_object_like_1.default; } });
var is_plain_object_1 = require("./is-plain-object");
Object.defineProperty(exports, "isPlainObject", { enumerable: true, get: function () { return is_plain_object_1.default; } });
var is_prototype_1 = require("./is-prototype");
Object.defineProperty(exports, "isPrototype", { enumerable: true, get: function () { return is_prototype_1.default; } });
var is_reg_exp_1 = require("./is-reg-exp");
Object.defineProperty(exports, "isRegExp", { enumerable: true, get: function () { return is_reg_exp_1.default; } });
var is_string_1 = require("./is-string");
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return is_string_1.default; } });
var is_type_1 = require("./is-type");
Object.defineProperty(exports, "isType", { enumerable: true, get: function () { return is_type_1.default; } });
var is_undefined_1 = require("./is-undefined");
Object.defineProperty(exports, "isUndefined", { enumerable: true, get: function () { return is_undefined_1.default; } });
var is_element_1 = require("./is-element");
Object.defineProperty(exports, "isElement", { enumerable: true, get: function () { return is_element_1.default; } });
var request_animation_frame_1 = require("./request-animation-frame");
Object.defineProperty(exports, "requestAnimationFrame", { enumerable: true, get: function () { return request_animation_frame_1.default; } });
var clear_animation_frame_1 = require("./clear-animation-frame");
Object.defineProperty(exports, "clearAnimationFrame", { enumerable: true, get: function () { return clear_animation_frame_1.default; } });
// other
var augment_1 = require("./augment");
Object.defineProperty(exports, "augment", { enumerable: true, get: function () { return augment_1.default; } });
var clone_1 = require("./clone");
Object.defineProperty(exports, "clone", { enumerable: true, get: function () { return clone_1.default; } });
var debounce_1 = require("./debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return debounce_1.default; } });
var memoize_1 = require("./memoize");
Object.defineProperty(exports, "memoize", { enumerable: true, get: function () { return memoize_1.default; } });
var deep_mix_1 = require("./deep-mix");
Object.defineProperty(exports, "deepMix", { enumerable: true, get: function () { return deep_mix_1.default; } });
var each_1 = require("./each");
Object.defineProperty(exports, "each", { enumerable: true, get: function () { return each_1.default; } });
var extend_1 = require("./extend");
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return extend_1.default; } });
var index_of_1 = require("./index-of");
Object.defineProperty(exports, "indexOf", { enumerable: true, get: function () { return index_of_1.default; } });
var is_empty_1 = require("./is-empty");
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return is_empty_1.default; } });
var is_equal_1 = require("./is-equal");
Object.defineProperty(exports, "isEqual", { enumerable: true, get: function () { return is_equal_1.default; } });
var is_equal_with_1 = require("./is-equal-with");
Object.defineProperty(exports, "isEqualWith", { enumerable: true, get: function () { return is_equal_with_1.default; } });
var map_1 = require("./map");
Object.defineProperty(exports, "map", { enumerable: true, get: function () { return map_1.default; } });
var map_values_1 = require("./map-values");
Object.defineProperty(exports, "mapValues", { enumerable: true, get: function () { return map_values_1.default; } });
var mix_1 = require("./mix");
Object.defineProperty(exports, "mix", { enumerable: true, get: function () { return mix_1.default; } });
Object.defineProperty(exports, "assign", { enumerable: true, get: function () { return mix_1.default; } });
var get_1 = require("./get");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return get_1.default; } });
var set_1 = require("./set");
Object.defineProperty(exports, "set", { enumerable: true, get: function () { return set_1.default; } });
var pick_1 = require("./pick");
Object.defineProperty(exports, "pick", { enumerable: true, get: function () { return pick_1.default; } });
var omit_1 = require("./omit");
Object.defineProperty(exports, "omit", { enumerable: true, get: function () { return omit_1.default; } });
var throttle_1 = require("./throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return throttle_1.default; } });
var to_array_1 = require("./to-array");
Object.defineProperty(exports, "toArray", { enumerable: true, get: function () { return to_array_1.default; } });
var to_string_1 = require("./to-string");
Object.defineProperty(exports, "toString", { enumerable: true, get: function () { return to_string_1.default; } });
var unique_id_1 = require("./unique-id");
Object.defineProperty(exports, "uniqueId", { enumerable: true, get: function () { return unique_id_1.default; } });
var noop_1 = require("./noop");
Object.defineProperty(exports, "noop", { enumerable: true, get: function () { return noop_1.default; } });
var identity_1 = require("./identity");
Object.defineProperty(exports, "identity", { enumerable: true, get: function () { return identity_1.default; } });
var size_1 = require("./size");
Object.defineProperty(exports, "size", { enumerable: true, get: function () { return size_1.default; } });
// 不知道为什么，需要把这个 export，不然 ts 会报类型错误
var cache_1 = require("./cache");
Object.defineProperty(exports, "Cache", { enumerable: true, get: function () { return cache_1.default; } });
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./contains":1630693367179,"./difference":1630693367181,"./find":1630693367183,"./find-index":1630693367194,"./first-value":1630693367195,"./flatten":1630693367196,"./flatten-deep":1630693367197,"./get-range":1630693367198,"./pull":1630693367201,"./pull-at":1630693367202,"./reduce":1630693367203,"./remove":1630693367204,"./sort-by":1630693367205,"./union":1630693367207,"./uniq":1630693367208,"./values-of-key":1630693367209,"./head":1630693367210,"./last":1630693367211,"./starts-with":1630693367212,"./ends-with":1630693367213,"./filter":1630693367182,"./every":1630693367214,"./some":1630693367215,"./group":1630693367216,"./group-by":1630693367218,"./group-to-map":1630693367217,"./get-wrap-behavior":1630693367219,"./wrap-behavior":1630693367220,"./number2color":1630693367221,"./parse-radius":1630693367222,"./clamp":1630693367223,"./fixed-base":1630693367224,"./is-decimal":1630693367225,"./is-even":1630693367227,"./is-integer":1630693367228,"./is-negative":1630693367229,"./is-number-equal":1630693367230,"./is-odd":1630693367231,"./is-positive":1630693367232,"./max":1630693367199,"./max-by":1630693367233,"./min":1630693367200,"./min-by":1630693367234,"./mod":1630693367235,"./to-degree":1630693367236,"./to-integer":1630693367237,"./to-radian":1630693367238,"./for-in":1630693367239,"./has":1630693367240,"./has-key":1630693367241,"./has-value":1630693367242,"./keys":1630693367188,"./is-match":1630693367186,"./values":1630693367243,"./lower-case":1630693367244,"./lower-first":1630693367246,"./substitute":1630693367247,"./upper-case":1630693367248,"./upper-first":1630693367249,"./get-type":1630693367250,"./is-arguments":1630693367251,"./is-array":1630693367190,"./is-array-like":1630693367180,"./is-boolean":1630693367252,"./is-date":1630693367253,"./is-error":1630693367254,"./is-function":1630693367184,"./is-finite":1630693367255,"./is-nil":1630693367187,"./is-null":1630693367256,"./is-number":1630693367226,"./is-object":1630693367191,"./is-object-like":1630693367193,"./is-plain-object":1630693367192,"./is-prototype":1630693367257,"./is-reg-exp":1630693367258,"./is-string":1630693367206,"./is-type":1630693367185,"./is-undefined":1630693367259,"./is-element":1630693367260,"./request-animation-frame":1630693367261,"./clear-animation-frame":1630693367262,"./augment":1630693367263,"./clone":1630693367265,"./debounce":1630693367266,"./memoize":1630693367267,"./deep-mix":1630693367268,"./each":1630693367189,"./extend":1630693367269,"./index-of":1630693367270,"./is-empty":1630693367271,"./is-equal":1630693367272,"./is-equal-with":1630693367273,"./map":1630693367274,"./map-values":1630693367275,"./mix":1630693367264,"./get":1630693367276,"./set":1630693367277,"./pick":1630693367278,"./omit":1630693367279,"./throttle":1630693367280,"./to-array":1630693367281,"./to-string":1630693367245,"./unique-id":1630693367282,"./noop":1630693367283,"./identity":1630693367284,"./size":1630693367285,"./cache":1630693367286}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367179, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var contains = function (arr, value) {
    if (!is_array_like_1.default(arr)) {
        return false;
    }
    return arr.indexOf(value) > -1;
};
exports.default = contains;
//# sourceMappingURL=contains.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367180, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var isArrayLike = function (value) {
    /**
     * isArrayLike([1, 2, 3]) => true
     * isArrayLike(document.body.children) => true
     * isArrayLike('abc') => true
     * isArrayLike(Function) => false
     */
    return value !== null && typeof value !== 'function' && isFinite(value.length);
};
exports.default = isArrayLike;
//# sourceMappingURL=is-array-like.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367181, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
var contains_1 = require("./contains");
/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
var difference = function (arr, values) {
    if (values === void 0) { values = []; }
    return filter_1.default(arr, function (value) { return !contains_1.default(values, value); });
};
exports.default = difference;
//# sourceMappingURL=difference.js.map
}, function(modId) { var map = {"./filter":1630693367182,"./contains":1630693367179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367182, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var filter = function (arr, func) {
    if (!is_array_like_1.default(arr)) {
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        if (func(value, index)) {
            result.push(value);
        }
    }
    return result;
};
exports.default = filter;
//# sourceMappingURL=filter.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367183, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = require("./is-function");
var is_match_1 = require("./is-match");
var is_array_1 = require("./is-array");
var is_plain_object_1 = require("./is-plain-object");
function find(arr, predicate) {
    if (!is_array_1.default(arr))
        return null;
    var _predicate;
    if (is_function_1.default(predicate)) {
        _predicate = predicate;
    }
    if (is_plain_object_1.default(predicate)) {
        _predicate = function (a) { return is_match_1.default(a, predicate); };
    }
    if (_predicate) {
        for (var i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;
}
exports.default = find;
//# sourceMappingURL=find.js.map
}, function(modId) { var map = {"./is-function":1630693367184,"./is-match":1630693367186,"./is-array":1630693367190,"./is-plain-object":1630693367192}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367184, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */
var is_type_1 = require("./is-type");
exports.default = (function (value) {
    return is_type_1.default(value, 'Function');
});
//# sourceMappingURL=is-function.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367185, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var toString = {}.toString;
var isType = function (value, type) { return toString.call(value) === '[object ' + type + ']'; };
exports.default = isType;
//# sourceMappingURL=is-type.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367186, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var keys_1 = require("./keys");
function isMatch(obj, attrs) {
    var _keys = keys_1.default(attrs);
    var length = _keys.length;
    if (is_nil_1.default(obj))
        return !length;
    for (var i = 0; i < length; i += 1) {
        var key = _keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }
    return true;
}
exports.default = isMatch;
//# sourceMappingURL=is-match.js.map
}, function(modId) { var map = {"./is-nil":1630693367187,"./keys":1630693367188}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367187, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// isFinite,
var isNil = function (value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
    return value === null || value === undefined;
};
exports.default = isNil;
//# sourceMappingURL=is-nil.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367188, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_function_1 = require("./is-function");
var keys = Object.keys ? function (obj) { return Object.keys(obj); } : function (obj) {
    var result = [];
    each_1.default(obj, function (value, key) {
        if (!(is_function_1.default(obj) && key === 'prototype')) {
            result.push(key);
        }
    });
    return result;
};
exports.default = keys;
//# sourceMappingURL=keys.js.map
}, function(modId) { var map = {"./each":1630693367189,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367189, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_object_1 = require("./is-object");
function each(elements, func) {
    if (!elements) {
        return;
    }
    var rst;
    if (is_array_1.default(elements)) {
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
                break;
            }
        }
    }
    else if (is_object_1.default(elements)) {
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(elements[k], k);
                if (rst === false) {
                    break;
                }
            }
        }
    }
}
exports.default = each;
//# sourceMappingURL=each.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-object":1630693367191}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367190, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = require("./is-type");
exports.default = (function (value) {
    return Array.isArray ?
        Array.isArray(value) :
        is_type_1.default(value, 'Array');
});
//# sourceMappingURL=is-array.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367191, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    var type = typeof value;
    return value !== null && type === 'object' || type === 'function';
});
//# sourceMappingURL=is-object.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367192, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_object_like_1 = require("./is-object-like");
var is_type_1 = require("./is-type");
var isPlainObject = function (value) {
    /**
     * isObjectLike(new Foo) => false
     * isObjectLike([1, 2, 3]) => false
     * isObjectLike({ x: 0, y: 0 }) => true
     * isObjectLike(Object.create(null)) => true
     */
    if (!is_object_like_1.default(value) || !is_type_1.default(value, 'Object')) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};
exports.default = isPlainObject;
//# sourceMappingURL=is-plain-object.js.map
}, function(modId) { var map = {"./is-object-like":1630693367193,"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367193, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var isObjectLike = function (value) {
    /**
     * isObjectLike({}) => true
     * isObjectLike([1, 2, 3]) => true
     * isObjectLike(Function) => false
     * isObjectLike(null) => false
     */
    return typeof value === 'object' && value !== null;
};
exports.default = isObjectLike;
//# sourceMappingURL=is-object-like.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367194, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function findIndex(arr, predicate, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = fromIndex; i < arr.length; i++) {
        if (predicate(arr[i], i)) {
            // 找到终止循环
            return i;
        }
    }
    return -1;
}
exports.default = findIndex;
//# sourceMappingURL=find-index.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367195, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var is_array_1 = require("./is-array");
var firstValue = function (data, name) {
    var rst = null;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil_1.default(value)) {
            if (is_array_1.default(value)) {
                rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
            }
            else {
                rst = value;
            }
            break;
        }
    }
    return rst;
};
exports.default = firstValue;
//# sourceMappingURL=first-value.js.map
}, function(modId) { var map = {"./is-nil":1630693367187,"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367196, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
 */
var flatten = function (arr) {
    if (!is_array_1.default(arr)) {
        return [];
    }
    var rst = [];
    for (var i = 0; i < arr.length; i++) {
        rst = rst.concat(arr[i]);
    }
    return rst;
};
exports.default = flatten;
//# sourceMappingURL=flatten.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367197, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */
var flattenDeep = function (arr, result) {
    if (result === void 0) { result = []; }
    if (!is_array_1.default(arr)) {
        result.push(arr);
    }
    else {
        for (var i = 0; i < arr.length; i += 1) {
            flattenDeep(arr[i], result);
        }
    }
    return result;
};
exports.default = flattenDeep;
//# sourceMappingURL=flatten-deep.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367198, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var max_1 = require("./max");
var min_1 = require("./min");
var getRange = function (values) {
    // 存在 NaN 时，min,max 判定会出问题
    var filterValues = values.filter(function (v) { return !isNaN(v); });
    if (!filterValues.length) {
        // 如果没有数值则直接返回0
        return {
            min: 0,
            max: 0,
        };
    }
    if (is_array_1.default(values[0])) {
        var tmp = [];
        for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
        }
        filterValues = tmp;
    }
    var max = max_1.default(filterValues);
    var min = min_1.default(filterValues);
    return {
        min: min,
        max: max,
    };
};
exports.default = getRange;
//# sourceMappingURL=get-range.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./max":1630693367199,"./min":1630693367200}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367199, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
/**
 * @param {Array} arr The array to iterate over.
 * @return {*} Returns the maximum value.
 * @example
 *
 * max([1, 2]);
 * // => 2
 *
 * max([]);
 * // => undefined
 *
 * const data = new Array(1250010).fill(1).map((d,idx) => idx);
 *
 * max(data);
 * // => 1250010
 * // Math.max(...data) will encounter "Maximum call stack size exceeded" error
 */
exports.default = (function (arr) {
    if (!is_array_1.default(arr)) {
        return undefined;
    }
    return arr.reduce(function (prev, curr) {
        return Math.max(prev, curr);
    }, arr[0]);
});
//# sourceMappingURL=max.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367200, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
/**
 * @param {Array} arr The array to iterate over.
 * @return {*} Returns the minimum value.
 * @example
 *
 * min([1, 2]);
 * // => 1
 *
 * min([]);
 * // => undefined
 *
 * const data = new Array(1250010).fill(1).map((d,idx) => idx);
 *
 * min(data);
 * // => 1250010
 * // Math.min(...data) will encounter "Maximum call stack size exceeded" error
 */
exports.default = (function (arr) {
    if (!is_array_1.default(arr)) {
        return undefined;
    }
    return arr.reduce(function (prev, curr) {
        return Math.min(prev, curr);
    }, arr[0]);
});
//# sourceMappingURL=min.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367201, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var arrPrototype = Array.prototype;
var splice = arrPrototype.splice;
var indexOf = arrPrototype.indexOf;
var pull = function (arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var fromIndex = -1;
        while ((fromIndex = indexOf.call(arr, value)) > -1) {
            splice.call(arr, fromIndex, 1);
        }
    }
    return arr;
};
exports.default = pull;
//# sourceMappingURL=pull.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367202, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var splice = Array.prototype.splice;
var pullAt = function pullAt(arr, indexes) {
    if (!is_array_like_1.default(arr)) {
        return [];
    }
    var length = arr ? indexes.length : 0;
    var last = length - 1;
    while (length--) {
        var previous = void 0;
        var index = indexes[length];
        if (length === last || index !== previous) {
            previous = index;
            splice.call(arr, index, 1);
        }
    }
    return arr;
};
exports.default = pullAt;
//# sourceMappingURL=pull-at.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367203, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_array_1 = require("./is-array");
var is_plain_object_1 = require("./is-plain-object");
var reduce = function (arr, fn, init) {
    if (!is_array_1.default(arr) && !is_plain_object_1.default(arr)) {
        return arr;
    }
    var result = init;
    each_1.default(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
exports.default = reduce;
//# sourceMappingURL=reduce.js.map
}, function(modId) { var map = {"./each":1630693367189,"./is-array":1630693367190,"./is-plain-object":1630693367192}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367204, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var pull_at_1 = require("./pull-at");
var remove = function (arr, predicate) {
    /**
     * const arr = [1, 2, 3, 4]
     * const evens = remove(arr, n => n % 2 == 0)
     * console.log(arr) // => [1, 3]
     * console.log(evens) // => [2, 4]
     */
    var result = [];
    if (!is_array_like_1.default(arr)) {
        return result;
    }
    var i = -1;
    var indexes = [];
    var length = arr.length;
    while (++i < length) {
        var value = arr[i];
        if (predicate(value, i, arr)) {
            result.push(value);
            indexes.push(i);
        }
    }
    pull_at_1.default(arr, indexes);
    return result;
};
exports.default = remove;
//# sourceMappingURL=remove.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180,"./pull-at":1630693367202}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367205, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_string_1 = require("./is-string");
var is_function_1 = require("./is-function");
function sortBy(arr, key) {
    var comparer;
    if (is_function_1.default(key)) {
        comparer = function (a, b) { return key(a) - key(b); };
    }
    else {
        var keys_1 = [];
        if (is_string_1.default(key)) {
            keys_1.push(key);
        }
        else if (is_array_1.default(key)) {
            keys_1 = key;
        }
        comparer = function (a, b) {
            for (var i = 0; i < keys_1.length; i += 1) {
                var prop = keys_1[i];
                if (a[prop] > b[prop]) {
                    return 1;
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    arr.sort(comparer);
    return arr;
}
exports.default = sortBy;
//# sourceMappingURL=sort-by.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-string":1630693367206,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367206, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = require("./is-type");
exports.default = (function (str) {
    return is_type_1.default(str, 'String');
});
//# sourceMappingURL=is-string.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367207, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var uniq_1 = require("./uniq");
var union = function () {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return uniq_1.default([].concat.apply([], sources));
};
exports.default = union;
//# sourceMappingURL=union.js.map
}, function(modId) { var map = {"./uniq":1630693367208}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367208, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function uniq(arr, cache) {
    if (cache === void 0) { cache = new Map(); }
    var r = [];
    if (Array.isArray(arr)) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            // 加一个 cache，提升性能
            if (!cache.has(item)) {
                r.push(item);
                cache.set(item, true);
            }
        }
    }
    return r;
}
exports.default = uniq;
//# sourceMappingURL=uniq.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367209, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_nil_1 = require("./is-nil");
exports.default = (function (data, name) {
    var rst = [];
    var tmpMap = {};
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil_1.default(value)) {
            // flatten
            if (!is_array_1.default(value)) {
                value = [value];
            }
            for (var j = 0; j < value.length; j++) {
                var val = value[j];
                // unique
                if (!tmpMap[val]) {
                    rst.push(val);
                    tmpMap[val] = true;
                }
            }
        }
    }
    return rst;
});
//# sourceMappingURL=values-of-key.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-nil":1630693367187}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367210, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
function head(o) {
    if (is_array_like_1.default(o)) {
        return o[0];
    }
    return undefined;
}
exports.default = head;
//# sourceMappingURL=head.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367211, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
function last(o) {
    if (is_array_like_1.default(o)) {
        var arr = o;
        return arr[arr.length - 1];
    }
    return undefined;
}
exports.default = last;
//# sourceMappingURL=last.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367212, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_string_1 = require("./is-string");
function startsWith(arr, e) {
    return (is_array_1.default(arr) || is_string_1.default(arr)) ? arr[0] === e : false;
}
exports.default = startsWith;
//# sourceMappingURL=starts-with.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-string":1630693367206}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367213, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_string_1 = require("./is-string");
function endsWith(arr, e) {
    return (is_array_1.default(arr) || is_string_1.default(arr)) ? arr[arr.length - 1] === e : false;
}
exports.default = endsWith;
//# sourceMappingURL=ends-with.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-string":1630693367206}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367214, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 只要有一个不满足条件就返回 false
 * @param arr
 * @param func
 */
var every = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i))
            return false;
    }
    return true;
};
exports.default = every;
//# sourceMappingURL=every.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367215, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 只要有一个满足条件就返回 true
 * @param arr
 * @param func
 */
var some = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i))
            return true;
    }
    return false;
};
exports.default = some;
//# sourceMappingURL=some.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367216, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var group_to_map_1 = require("./group-to-map");
exports.default = (function (data, condition) {
    if (!condition) {
        // 没有条件，则自身改成数组
        return [data];
    }
    var groups = group_to_map_1.default(data, condition);
    var array = [];
    for (var i in groups) {
        array.push(groups[i]);
    }
    return array;
});
//# sourceMappingURL=group.js.map
}, function(modId) { var map = {"./group-to-map":1630693367217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367217, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_function_1 = require("./is-function");
var group_by_1 = require("./group-by");
/**
 * 将数据分组成 map
 * @param data
 * @param condition
 */
function groupToMap(data, condition) {
    if (!condition) {
        return {
            0: data,
        };
    }
    if (!is_function_1.default(condition)) {
        // 如果是字符串，则按照 a*b 风格成数组
        var paramscondition_1 = is_array_1.default(condition) ? condition : condition.replace(/\s+/g, '').split('*');
        condition = function (row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            // 根据字段列表的值，拼接成 key
            for (var i = 0, l = paramscondition_1.length; i < l; i++) {
                unique += row[paramscondition_1[i]] && row[paramscondition_1[i]].toString();
            }
            return unique;
        };
    }
    return group_by_1.default(data, condition);
}
exports.default = groupToMap;
//# sourceMappingURL=group-to-map.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-function":1630693367184,"./group-by":1630693367218}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367218, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_function_1 = require("./is-function");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(data, condition) {
    if (!condition || !is_array_1.default(data)) {
        return {};
    }
    var result = {};
    // 兼容方法和 字符串的写法
    var predicate = is_function_1.default(condition) ? condition : function (item) { return item[condition]; };
    var key;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        key = predicate(item);
        if (hasOwnProperty.call(result, key)) {
            result[key].push(item);
        }
        else {
            result[key] = [item];
        }
    }
    return result;
}
exports.default = groupBy;
//# sourceMappingURL=group-by.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367219, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取封装的事件
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function getWrapBehavior(obj, action) {
    return obj['_wrap_' + action];
}
exports.default = getWrapBehavior;
//# sourceMappingURL=get-wrap-behavior.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367220, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 封装事件，便于使用上下文this,和便于解除事件时使用
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function wrapBehavior(obj, action) {
    if (obj['_wrap_' + action]) {
        return obj['_wrap_' + action];
    }
    var method = function (e) {
        obj[action](e);
    };
    obj['_wrap_' + action] = method;
    return method;
}
exports.default = wrapBehavior;
//# sourceMappingURL=wrap-behavior.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367221, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var numColorCache = {};
function numberToColor(num) {
    // 增加缓存
    var color = numColorCache[num];
    if (!color) {
        var str = num.toString(16);
        for (var i = str.length; i < 6; i++) {
            str = '0' + str;
        }
        color = '#' + str;
        numColorCache[num] = color;
    }
    return color;
}
exports.default = numberToColor;
//# sourceMappingURL=number2color.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367222, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
function parseRadius(radius) {
    var r1 = 0, r2 = 0, r3 = 0, r4 = 0;
    if (is_array_1.default(radius)) {
        if (radius.length === 1) {
            r1 = r2 = r3 = r4 = radius[0];
        }
        else if (radius.length === 2) {
            r1 = r3 = radius[0];
            r2 = r4 = radius[1];
        }
        else if (radius.length === 3) {
            r1 = radius[0];
            r2 = r4 = radius[1];
            r3 = radius[2];
        }
        else {
            r1 = radius[0];
            r2 = radius[1];
            r3 = radius[2];
            r4 = radius[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = radius;
    }
    return {
        r1: r1,
        r2: r2,
        r3: r3,
        r4: r4
    };
}
exports.default = parseRadius;
//# sourceMappingURL=parse-radius.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367223, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var clamp = function (a, min, max) {
    if (a < min) {
        return min;
    }
    else if (a > max) {
        return max;
    }
    return a;
};
exports.default = clamp;
//# sourceMappingURL=clamp.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367224, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var fixedBase = function (v, base) {
    var str = base.toString();
    var index = str.indexOf('.');
    if (index === -1) {
        return Math.round(v);
    }
    var length = str.substr(index + 1).length;
    if (length > 20) {
        length = 20;
    }
    return parseFloat(v.toFixed(length));
};
exports.default = fixedBase;
//# sourceMappingURL=fixed-base.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367225, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isDecimal = function (num) {
    return is_number_1.default(num) && num % 1 !== 0;
};
exports.default = isDecimal;
//# sourceMappingURL=is-decimal.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367226, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否数字
 * @return {Boolean} 是否数字
 */
var is_type_1 = require("./is-type");
var isNumber = function (value) {
    return is_type_1.default(value, 'Number');
};
exports.default = isNumber;
//# sourceMappingURL=is-number.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367227, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isEven = function (num) {
    return is_number_1.default(num) && num % 2 === 0;
};
exports.default = isEven;
//# sourceMappingURL=is-even.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367228, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isInteger = Number.isInteger ? Number.isInteger : function (num) {
    return is_number_1.default(num) && num % 1 === 0;
};
exports.default = isInteger;
//# sourceMappingURL=is-integer.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367229, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isNegative = function (num) {
    return is_number_1.default(num) && num < 0;
};
exports.default = isNegative;
//# sourceMappingURL=is-negative.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367230, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PRECISION = 0.00001; // numbers less than this is considered as 0
function isNumberEqual(a, b, precision) {
    if (precision === void 0) { precision = PRECISION; }
    return Math.abs((a - b)) < precision;
}
exports.default = isNumberEqual;
;
//# sourceMappingURL=is-number-equal.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367231, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isOdd = function (num) {
    return is_number_1.default(num) && num % 2 !== 0;
};
exports.default = isOdd;
//# sourceMappingURL=is-odd.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367232, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("./is-number");
var isPositive = function (num) {
    return is_number_1.default(num) && num > 0;
};
exports.default = isPositive;
//# sourceMappingURL=is-positive.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367233, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_function_1 = require("./is-function");
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
exports.default = (function (arr, fn) {
    if (!is_array_1.default(arr)) {
        return undefined;
    }
    var maxItem;
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var v = is_function_1.default(fn) ? fn(item) : item[fn];
        if (v > max) {
            maxItem = item;
            max = v;
        }
    }
    return maxItem;
});
//# sourceMappingURL=max-by.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367234, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_function_1 = require("./is-function");
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */
exports.default = (function (arr, fn) {
    if (!is_array_1.default(arr)) {
        return undefined;
    }
    var minItem;
    var min = Infinity;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var v = is_function_1.default(fn) ? fn(item) : item[fn];
        if (v < min) {
            minItem = item;
            min = v;
        }
    }
    return minItem;
});
//# sourceMappingURL=min-by.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367235, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var mod = function (n, m) {
    return ((n % m) + m) % m;
};
exports.default = mod;
//# sourceMappingURL=mod.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367236, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var DEGREE = 180 / Math.PI;
var toDegree = function (radian) {
    return DEGREE * radian;
};
exports.default = toDegree;
//# sourceMappingURL=to-degree.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367237, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseInt;
//# sourceMappingURL=to-integer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367238, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var RADIAN = Math.PI / 180;
var toRadian = function (degree) {
    return RADIAN * degree;
};
exports.default = toRadian;
//# sourceMappingURL=to-radian.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367239, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
exports.default = each_1.default;
//# sourceMappingURL=for-in.js.map
}, function(modId) { var map = {"./each":1630693367189}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367240, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (obj, key) { return obj.hasOwnProperty(key); });
//# sourceMappingURL=has.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367241, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var has_1 = require("./has");
exports.default = has_1.default;
//# sourceMappingURL=has-key.js.map
}, function(modId) { var map = {"./has":1630693367240}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367242, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = require("./contains");
var values_1 = require("./values");
exports.default = (function (obj, value) { return contains_1.default(values_1.default(obj), value); });
//# sourceMappingURL=has-value.js.map
}, function(modId) { var map = {"./contains":1630693367179,"./values":1630693367243}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367243, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_function_1 = require("./is-function");
// @ts-ignore
var values = Object.values ? function (obj) { return Object.values(obj); } : function (obj) {
    var result = [];
    each_1.default(obj, function (value, key) {
        if (!(is_function_1.default(obj) && key === 'prototype')) {
            result.push(value);
        }
    });
    return result;
};
exports.default = values;
//# sourceMappingURL=values.js.map
}, function(modId) { var map = {"./each":1630693367189,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367244, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var to_string_1 = require("./to-string");
var lowerCase = function (str) {
    return to_string_1.default(str).toLowerCase();
};
exports.default = lowerCase;
//# sourceMappingURL=lower-case.js.map
}, function(modId) { var map = {"./to-string":1630693367245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367245, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
exports.default = (function (value) {
    if (is_nil_1.default(value))
        return '';
    return value.toString();
});
//# sourceMappingURL=to-string.js.map
}, function(modId) { var map = {"./is-nil":1630693367187}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367246, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var to_string_1 = require("./to-string");
var lowerFirst = function (value) {
    var str = to_string_1.default(value);
    return str.charAt(0).toLowerCase() + str.substring(1);
};
exports.default = lowerFirst;
//# sourceMappingURL=lower-first.js.map
}, function(modId) { var map = {"./to-string":1630693367245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367247, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function substitute(str, o) {
    if (!str || !o) {
        return str;
    }
    return str.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
        if (match.charAt(0) === '\\') {
            return match.slice(1);
        }
        return (o[name] === undefined) ? '' : o[name];
    });
}
exports.default = substitute;
//# sourceMappingURL=substitute.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367248, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var to_string_1 = require("./to-string");
var upperCase = function (str) {
    return to_string_1.default(str).toUpperCase();
};
exports.default = upperCase;
//# sourceMappingURL=upper-case.js.map
}, function(modId) { var map = {"./to-string":1630693367245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367249, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var to_string_1 = require("./to-string");
var upperFirst = function (value) {
    var str = to_string_1.default(value);
    return str.charAt(0).toUpperCase() + str.substring(1);
};
exports.default = upperFirst;
//# sourceMappingURL=upper-first.js.map
}, function(modId) { var map = {"./to-string":1630693367245}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367250, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var toString = {}.toString;
var getType = function (value) {
    return toString.call(value).replace(/^\[object /, '').replace(/]$/, '');
};
exports.default = getType;
//# sourceMappingURL=get-type.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367251, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */
var is_type_1 = require("./is-type");
var isArguments = function (value) {
    return is_type_1.default(value, 'Arguments');
};
exports.default = isArguments;
//# sourceMappingURL=is-arguments.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367252, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否是布尔类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */
var is_type_1 = require("./is-type");
var isBoolean = function (value) {
    return is_type_1.default(value, 'Boolean');
};
exports.default = isBoolean;
//# sourceMappingURL=is-boolean.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367253, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = require("./is-type");
var isDate = function (value) {
    return is_type_1.default(value, 'Date');
};
exports.default = isDate;
//# sourceMappingURL=is-date.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367254, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */
var is_type_1 = require("./is-type");
var isError = function (value) {
    return is_type_1.default(value, 'Error');
};
exports.default = isError;
//# sourceMappingURL=is-error.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367255, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否为有限数
 * @return {Boolean}
 */
var is_number_1 = require("./is-number");
function default_1(value) {
    return is_number_1.default(value) && isFinite(value);
}
exports.default = default_1;
//# sourceMappingURL=is-finite.js.map
}, function(modId) { var map = {"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367256, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var isNull = function (value) {
    return value === null;
};
exports.default = isNull;
//# sourceMappingURL=is-null.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367257, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectProto = Object.prototype;
var isPrototype = function (value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
    return value === proto;
};
exports.default = isPrototype;
//# sourceMappingURL=is-prototype.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367258, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = require("./is-type");
var isRegExp = function (str) {
    return is_type_1.default(str, 'RegExp');
};
exports.default = isRegExp;
//# sourceMappingURL=is-reg-exp.js.map
}, function(modId) { var map = {"./is-type":1630693367185}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367259, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var isUndefined = function (value) {
    return value === undefined;
};
exports.default = isUndefined;
//# sourceMappingURL=is-undefined.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367260, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否HTML元素
 * @return {Boolean} 是否HTML元素
 */
var isElement = function (o) {
    return o instanceof Element || o instanceof HTMLDocument;
};
exports.default = isElement;
//# sourceMappingURL=is-element.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367261, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function requestAnimationFrame(fn) {
    var method = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
exports.default = requestAnimationFrame;
;
//# sourceMappingURL=request-animation-frame.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367262, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function cancelAnimationFrame(handler) {
    var method = window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        clearTimeout;
    method(handler);
}
exports.default = cancelAnimationFrame;
;
//# sourceMappingURL=clear-animation-frame.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367263, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var mix_1 = require("./mix");
var is_function_1 = require("./is-function");
var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if (is_function_1.default(obj)) {
            obj = obj.prototype;
        }
        mix_1.default(c.prototype, obj);
    }
};
exports.default = augment;
//# sourceMappingURL=augment.js.map
}, function(modId) { var map = {"./mix":1630693367264,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367264, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}
function mix(dist, src1, src2, src3) {
    if (src1)
        _mix(dist, src1);
    if (src2)
        _mix(dist, src2);
    if (src3)
        _mix(dist, src3);
    return dist;
}
exports.default = mix;
//# sourceMappingURL=mix.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367265, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var clone = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var rst;
    if (is_array_1.default(obj)) {
        rst = [];
        for (var i = 0, l = obj.length; i < l; i++) {
            if (typeof obj[i] === 'object' && obj[i] != null) {
                rst[i] = clone(obj[i]);
            }
            else {
                rst[i] = obj[i];
            }
        }
    }
    else {
        rst = {};
        for (var k in obj) {
            if (typeof obj[k] === 'object' && obj[k] != null) {
                rst[k] = clone(obj[k]);
            }
            else {
                rst[k] = obj[k];
            }
        }
    }
    return rst;
};
exports.default = clone;
//# sourceMappingURL=clone.js.map
}, function(modId) { var map = {"./is-array":1630693367190}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367266, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
exports.default = debounce;
//# sourceMappingURL=debounce.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367267, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = require("./is-function");
/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 */
exports.default = (function (f, resolver) {
    if (!is_function_1.default(f)) {
        throw new TypeError('Expected a function');
    }
    var memoized = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
        var key = resolver ? resolver.apply(this, args) : args[0];
        var cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = f.apply(this, args);
        // 缓存起来
        cache.set(key, result);
        return result;
    };
    memoized.cache = new Map();
    return memoized;
});
//# sourceMappingURL=memoize.js.map
}, function(modId) { var map = {"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367268, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_plain_object_1 = require("./is-plain-object");
var MAX_MIX_LEVEL = 5;
function _deepMix(dist, src, level, maxLevel) {
    level = level || 0;
    maxLevel = maxLevel || MAX_MIX_LEVEL;
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            var value = src[key];
            if (value !== null && is_plain_object_1.default(value)) {
                if (!is_plain_object_1.default(dist[key])) {
                    dist[key] = {};
                }
                if (level < maxLevel) {
                    _deepMix(dist[key], value, level + 1, maxLevel);
                }
                else {
                    dist[key] = src[key];
                }
            }
            else if (is_array_1.default(value)) {
                dist[key] = [];
                dist[key] = dist[key].concat(value);
            }
            else if (value !== undefined) {
                dist[key] = value;
            }
        }
    }
}
// todo 重写
var deepMix = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        _deepMix(rst, args[i]);
    }
    return rst;
};
exports.default = deepMix;
//# sourceMappingURL=deep-mix.js.map
}, function(modId) { var map = {"./is-array":1630693367190,"./is-plain-object":1630693367192}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367269, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var mix_1 = require("./mix");
var is_function_1 = require("./is-function");
var extend = function (subclass, superclass, overrides, staticOverrides) {
    // 如果只提供父类构造函数，则自动生成子类构造函数
    if (!is_function_1.default(superclass)) {
        overrides = superclass;
        superclass = subclass;
        subclass = function () { };
    }
    var create = Object.create ?
        function (proto, c) {
            return Object.create(proto, {
                constructor: {
                    value: c
                }
            });
        } :
        function (proto, c) {
            function Tmp() { }
            Tmp.prototype = proto;
            var o = new Tmp();
            o.constructor = c;
            return o;
        };
    var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
    subclass.prototype = mix_1.default(superObj, subclass.prototype); // 指定子类的prototype
    subclass.superclass = create(superclass.prototype, superclass);
    mix_1.default(superObj, overrides);
    mix_1.default(subclass, staticOverrides);
    return subclass;
};
exports.default = extend;
//# sourceMappingURL=extend.js.map
}, function(modId) { var map = {"./mix":1630693367264,"./is-function":1630693367184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367270, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var indexOf = function (arr, obj) {
    if (!is_array_like_1.default(arr)) {
        return -1;
    }
    var m = Array.prototype.indexOf;
    if (m) {
        return m.call(arr, obj);
    }
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            index = i;
            break;
        }
    }
    return index;
};
exports.default = indexOf;
//# sourceMappingURL=index-of.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367271, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var is_array_like_1 = require("./is-array-like");
var get_type_1 = require("./get-type");
var is_prototype_1 = require("./is-prototype");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(value) {
    /**
     * isEmpty(null) => true
     * isEmpty() => true
     * isEmpty(true) => true
     * isEmpty(1) => true
     * isEmpty([1, 2, 3]) => false
     * isEmpty('abc') => false
     * isEmpty({ a: 1 }) => false
     */
    if (is_nil_1.default(value)) {
        return true;
    }
    if (is_array_like_1.default(value)) {
        return !value.length;
    }
    var type = get_type_1.default(value);
    if (type === 'Map' || type === 'Set') {
        return !value.size;
    }
    if (is_prototype_1.default(value)) {
        return !Object.keys(value).length;
    }
    for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
exports.default = isEmpty;
//# sourceMappingURL=is-empty.js.map
}, function(modId) { var map = {"./is-nil":1630693367187,"./is-array-like":1630693367180,"./get-type":1630693367250,"./is-prototype":1630693367257}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367272, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_object_like_1 = require("./is-object-like");
var is_array_like_1 = require("./is-array-like");
var is_string_1 = require("./is-string");
var isEqual = function (value, other) {
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    if (is_string_1.default(value) || is_string_1.default(other)) {
        return false;
    }
    if (is_array_like_1.default(value) || is_array_like_1.default(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (is_object_like_1.default(value) || is_object_like_1.default(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    return false;
};
exports.default = isEqual;
//# sourceMappingURL=is-equal.js.map
}, function(modId) { var map = {"./is-object-like":1630693367193,"./is-array-like":1630693367180,"./is-string":1630693367206}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367273, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = require("./is-function");
var is_equal_1 = require("./is-equal");
/**
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);  // => true
 */
exports.default = (function (value, other, fn) {
    if (!is_function_1.default(fn)) {
        return is_equal_1.default(value, other);
    }
    return !!fn(value, other);
});
//# sourceMappingURL=is-equal-with.js.map
}, function(modId) { var map = {"./is-function":1630693367184,"./is-equal":1630693367272}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367274, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
var map = function (arr, func) {
    if (!is_array_like_1.default(arr)) {
        // @ts-ignore
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        result.push(func(value, index));
    }
    return result;
};
exports.default = map;
//# sourceMappingURL=map.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367275, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var is_object_1 = require("./is-object");
var identity = function (v) { return v; };
exports.default = (function (object, func) {
    if (func === void 0) { func = identity; }
    var r = {};
    if (is_object_1.default(object) && !is_nil_1.default(object)) {
        Object.keys(object).forEach(function (key) {
            // @ts-ignore
            r[key] = func(object[key], key);
        });
    }
    return r;
});
//# sourceMappingURL=map-values.js.map
}, function(modId) { var map = {"./is-nil":1630693367187,"./is-object":1630693367191}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367276, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_string_1 = require("./is-string");
/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */
exports.default = (function (obj, key, defaultValue) {
    var p = 0;
    var keyArr = is_string_1.default(key) ? key.split('.') : key;
    while (obj && p < keyArr.length) {
        obj = obj[keyArr[p++]];
    }
    return (obj === undefined || p < keyArr.length) ? defaultValue : obj;
});
//# sourceMappingURL=get.js.map
}, function(modId) { var map = {"./is-string":1630693367206}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367277, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_object_1 = require("./is-object");
var is_string_1 = require("./is-string");
var is_number_1 = require("./is-number");
/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */
exports.default = (function (obj, path, value) {
    var o = obj;
    var keyArr = is_string_1.default(path) ? path.split('.') : path;
    keyArr.forEach(function (key, idx) {
        // 不是最后一个
        if (idx < keyArr.length - 1) {
            if (!is_object_1.default(o[key])) {
                o[key] = is_number_1.default(keyArr[idx + 1]) ? [] : {};
            }
            o = o[key];
        }
        else {
            o[key] = value;
        }
    });
    return obj;
});
//# sourceMappingURL=set.js.map
}, function(modId) { var map = {"./is-object":1630693367191,"./is-string":1630693367206,"./is-number":1630693367226}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367278, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_plain_object_1 = require("./is-plain-object");
var hasOwnProperty = Object.prototype.hasOwnProperty;
exports.default = (function (object, keys) {
    if (object === null || !is_plain_object_1.default(object)) {
        return {};
    }
    var result = {};
    each_1.default(keys, function (key) {
        if (hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    });
    return result;
});
//# sourceMappingURL=pick.js.map
}, function(modId) { var map = {"./each":1630693367189,"./is-plain-object":1630693367192}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367279, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
exports.default = (function (obj, keys) {
    return reduce_1.default(obj, function (r, curr, key) {
        if (!keys.includes(key)) {
            r[key] = curr;
        }
        return r;
    }, {});
});
//# sourceMappingURL=omit.js.map
}, function(modId) { var map = {"./reduce":1630693367203}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367280, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options)
        options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
            context = args = null;
    };
    var throttled = function () {
        var now = Date.now();
        if (!previous && options.leading === false)
            previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
});
//# sourceMappingURL=throttle.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367281, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_like_1 = require("./is-array-like");
exports.default = (function (value) {
    return is_array_like_1.default(value) ? Array.prototype.slice.call(value) : [];
});
//# sourceMappingURL=to-array.js.map
}, function(modId) { var map = {"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367282, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var map = {};
exports.default = (function (prefix) {
    prefix = prefix || 'g';
    if (!map[prefix]) {
        map[prefix] = 1;
    }
    else {
        map[prefix] += 1;
    }
    return prefix + map[prefix];
});
//# sourceMappingURL=unique-id.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367283, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { });
//# sourceMappingURL=noop.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367284, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (v) { return v; });
//# sourceMappingURL=identity.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367285, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var is_array_like_1 = require("./is-array-like");
function size(o) {
    if (is_nil_1.default(o)) {
        return 0;
    }
    if (is_array_like_1.default(o)) {
        return o.length;
    }
    return Object.keys(o).length;
}
exports.default = size;
//# sourceMappingURL=size.js.map
}, function(modId) { var map = {"./is-nil":1630693367187,"./is-array-like":1630693367180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1630693367286, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * k-v 存储
 */
var default_1 = /** @class */ (function () {
    function default_1() {
        this.map = {};
    }
    default_1.prototype.has = function (key) {
        return this.map[key] !== undefined;
    };
    default_1.prototype.get = function (key, def) {
        var v = this.map[key];
        return v === undefined ? def : v;
    };
    default_1.prototype.set = function (key, value) {
        this.map[key] = value;
    };
    default_1.prototype.clear = function () {
        this.map = {};
    };
    default_1.prototype.delete = function (key) {
        delete this.map[key];
    };
    default_1.prototype.size = function () {
        return Object.keys(this.map).length;
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=cache.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1630693367178);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map
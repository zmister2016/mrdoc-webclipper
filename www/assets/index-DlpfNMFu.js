import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-BWERQOLb.js";
var axios$2 = { exports: {} };
var bind;
var hasRequiredBind;
function requireBind() {
  if (hasRequiredBind) return bind;
  hasRequiredBind = 1;
  bind = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  return bind;
}
var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var bind2 = requireBind();
  var toString = Object.prototype.toString;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
  }
  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isFile(val) {
    return toString.call(val) === "[object File]";
  }
  function isBlob(val) {
    return toString.call(val) === "[object Blob]";
  }
  function isFunction(val) {
    return toString.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind2(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  utils = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM
  };
  return utils;
}
var buildURL;
var hasRequiredBuildURL;
function requireBuildURL() {
  if (hasRequiredBuildURL) return buildURL;
  hasRequiredBuildURL = 1;
  var utils2 = requireUtils();
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  buildURL = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils2.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils2.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils2.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils2.forEach(val, function parseValue(v) {
          if (utils2.isDate(v)) {
            v = v.toISOString();
          } else if (utils2.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  return buildURL;
}
var InterceptorManager_1;
var hasRequiredInterceptorManager;
function requireInterceptorManager() {
  if (hasRequiredInterceptorManager) return InterceptorManager_1;
  hasRequiredInterceptorManager = 1;
  var utils2 = requireUtils();
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils2.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  InterceptorManager_1 = InterceptorManager;
  return InterceptorManager_1;
}
var normalizeHeaderName;
var hasRequiredNormalizeHeaderName;
function requireNormalizeHeaderName() {
  if (hasRequiredNormalizeHeaderName) return normalizeHeaderName;
  hasRequiredNormalizeHeaderName = 1;
  var utils2 = requireUtils();
  normalizeHeaderName = function normalizeHeaderName2(headers, normalizedName) {
    utils2.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  return normalizeHeaderName;
}
var enhanceError;
var hasRequiredEnhanceError;
function requireEnhanceError() {
  if (hasRequiredEnhanceError) return enhanceError;
  hasRequiredEnhanceError = 1;
  enhanceError = function enhanceError2(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
  return enhanceError;
}
var createError;
var hasRequiredCreateError;
function requireCreateError() {
  if (hasRequiredCreateError) return createError;
  hasRequiredCreateError = 1;
  var enhanceError2 = requireEnhanceError();
  createError = function createError2(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError2(error, config, code, request, response);
  };
  return createError;
}
var settle;
var hasRequiredSettle;
function requireSettle() {
  if (hasRequiredSettle) return settle;
  hasRequiredSettle = 1;
  var createError2 = requireCreateError();
  settle = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError2(
        "Request failed with status code " + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };
  return settle;
}
var cookies;
var hasRequiredCookies;
function requireCookies() {
  if (hasRequiredCookies) return cookies;
  hasRequiredCookies = 1;
  var utils2 = requireUtils();
  cookies = utils2.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    /* @__PURE__ */ (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils2.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils2.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils2.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    })()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    /* @__PURE__ */ (function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    })()
  );
  return cookies;
}
var isAbsoluteURL;
var hasRequiredIsAbsoluteURL;
function requireIsAbsoluteURL() {
  if (hasRequiredIsAbsoluteURL) return isAbsoluteURL;
  hasRequiredIsAbsoluteURL = 1;
  isAbsoluteURL = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  return isAbsoluteURL;
}
var combineURLs;
var hasRequiredCombineURLs;
function requireCombineURLs() {
  if (hasRequiredCombineURLs) return combineURLs;
  hasRequiredCombineURLs = 1;
  combineURLs = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  return combineURLs;
}
var buildFullPath;
var hasRequiredBuildFullPath;
function requireBuildFullPath() {
  if (hasRequiredBuildFullPath) return buildFullPath;
  hasRequiredBuildFullPath = 1;
  var isAbsoluteURL2 = requireIsAbsoluteURL();
  var combineURLs2 = requireCombineURLs();
  buildFullPath = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL2(requestedURL)) {
      return combineURLs2(baseURL, requestedURL);
    }
    return requestedURL;
  };
  return buildFullPath;
}
var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders) return parseHeaders;
  hasRequiredParseHeaders = 1;
  var utils2 = requireUtils();
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  parseHeaders = function parseHeaders2(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils2.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils2.trim(line.substr(0, i)).toLowerCase();
      val = utils2.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders;
}
var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;
function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var utils2 = requireUtils();
  isURLSameOrigin = utils2.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    })()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ (function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    })()
  );
  return isURLSameOrigin;
}
var xhr;
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr) return xhr;
  hasRequiredXhr = 1;
  var utils2 = requireUtils();
  var settle2 = requireSettle();
  var cookies2 = requireCookies();
  var buildURL2 = requireBuildURL();
  var buildFullPath2 = requireBuildFullPath();
  var parseHeaders2 = requireParseHeaders();
  var isURLSameOrigin2 = requireIsURLSameOrigin();
  var createError2 = requireCreateError();
  xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;
      if (utils2.isFormData(requestData)) {
        delete requestHeaders["Content-Type"];
      }
      var request = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath2(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL2(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders2(request.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle2(resolve, reject, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(createError2("Request aborted", config, "ECONNABORTED", request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(createError2("Network Error", config, null, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError2(
          timeoutErrorMessage,
          config,
          config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          request
        ));
        request = null;
      };
      if (utils2.isStandardBrowserEnv()) {
        var xsrfValue = (config.withCredentials || isURLSameOrigin2(fullPath)) && config.xsrfCookieName ? cookies2.read(config.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request) {
        utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }
      if (!utils2.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
          request.abort();
          reject(cancel);
          request = null;
        });
      }
      if (!requestData) {
        requestData = null;
      }
      request.send(requestData);
    });
  };
  return xhr;
}
var defaults_1;
var hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var utils2 = requireUtils();
  var normalizeHeaderName2 = requireNormalizeHeaderName();
  var enhanceError2 = requireEnhanceError();
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils2.isUndefined(headers) && utils2.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = requireXhr();
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = requireXhr();
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils2.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils2.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName2(headers, "Accept");
      normalizeHeaderName2(headers, "Content-Type");
      if (utils2.isFormData(data) || utils2.isArrayBuffer(data) || utils2.isBuffer(data) || utils2.isStream(data) || utils2.isFile(data) || utils2.isBlob(data)) {
        return data;
      }
      if (utils2.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils2.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data.toString();
      }
      if (utils2.isObject(data) || headers && headers["Content-Type"] === "application/json") {
        setContentTypeIfUnset(headers, "application/json");
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional;
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
      if (strictJSONParsing || forcedJSONParsing && utils2.isString(data) && data.length) {
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw enhanceError2(e, this, "E_JSON_PARSE");
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  };
  utils2.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils2.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils2.merge(DEFAULT_CONTENT_TYPE);
  });
  defaults_1 = defaults;
  return defaults_1;
}
var transformData;
var hasRequiredTransformData;
function requireTransformData() {
  if (hasRequiredTransformData) return transformData;
  hasRequiredTransformData = 1;
  var utils2 = requireUtils();
  var defaults = requireDefaults();
  transformData = function transformData2(data, headers, fns) {
    var context = this || defaults;
    utils2.forEach(fns, function transform(fn) {
      data = fn.call(context, data, headers);
    });
    return data;
  };
  return transformData;
}
var isCancel;
var hasRequiredIsCancel;
function requireIsCancel() {
  if (hasRequiredIsCancel) return isCancel;
  hasRequiredIsCancel = 1;
  isCancel = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel;
}
var dispatchRequest;
var hasRequiredDispatchRequest;
function requireDispatchRequest() {
  if (hasRequiredDispatchRequest) return dispatchRequest;
  hasRequiredDispatchRequest = 1;
  var utils2 = requireUtils();
  var transformData2 = requireTransformData();
  var isCancel2 = requireIsCancel();
  var defaults = requireDefaults();
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  dispatchRequest = function dispatchRequest2(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData2.call(
      config,
      config.data,
      config.headers,
      config.transformRequest
    );
    config.headers = utils2.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
    utils2.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData2.call(
        config,
        response.data,
        response.headers,
        config.transformResponse
      );
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel2(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData2.call(
            config,
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
      return Promise.reject(reason);
    });
  };
  return dispatchRequest;
}
var mergeConfig;
var hasRequiredMergeConfig;
function requireMergeConfig() {
  if (hasRequiredMergeConfig) return mergeConfig;
  hasRequiredMergeConfig = 1;
  var utils2 = requireUtils();
  mergeConfig = function mergeConfig2(config1, config2) {
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = ["url", "method", "data"];
    var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
    var defaultToConfig2Keys = [
      "baseURL",
      "transformRequest",
      "transformResponse",
      "paramsSerializer",
      "timeout",
      "timeoutMessage",
      "withCredentials",
      "adapter",
      "responseType",
      "xsrfCookieName",
      "xsrfHeaderName",
      "onUploadProgress",
      "onDownloadProgress",
      "decompress",
      "maxContentLength",
      "maxBodyLength",
      "maxRedirects",
      "transport",
      "httpAgent",
      "httpsAgent",
      "cancelToken",
      "socketPath",
      "responseEncoding"
    ];
    var directMergeKeys = ["validateStatus"];
    function getMergedValue(target, source) {
      if (utils2.isPlainObject(target) && utils2.isPlainObject(source)) {
        return utils2.merge(target, source);
      } else if (utils2.isPlainObject(source)) {
        return utils2.merge({}, source);
      } else if (utils2.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils2.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    }
    utils2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(void 0, config2[prop]);
      }
    });
    utils2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(void 0, config2[prop]);
      } else if (!utils2.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    utils2.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });
    utils2.forEach(otherKeys, mergeDeepProperties);
    return config;
  };
  return mergeConfig;
}
const version = "0.21.4";
const require$$0 = {
  version
};
var validator;
var hasRequiredValidator;
function requireValidator() {
  if (hasRequiredValidator) return validator;
  hasRequiredValidator = 1;
  var pkg = require$$0;
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
    validators[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  var currentVerArr = pkg.version.split(".");
  function isOlderVersion(version2, thanVersion) {
    var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
    var destVer = version2.split(".");
    for (var i = 0; i < 3; i++) {
      if (pkgVersionArr[i] > destVer[i]) {
        return true;
      } else if (pkgVersionArr[i] < destVer[i]) {
        return false;
      }
    }
    return false;
  }
  validators.transitional = function transitional(validator2, version2, message) {
    var isDeprecated = version2 && isOlderVersion(version2);
    function formatMessage(opt, desc) {
      return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return function(value, opt, opts) {
      if (validator2 === false) {
        throw new Error(formatMessage(opt, " has been removed in " + version2));
      }
      if (isDeprecated && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version2 + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new TypeError("options must be an object");
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator2 = schema[opt];
      if (validator2) {
        var value = options[opt];
        var result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new TypeError("option " + opt + " must be " + result);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw Error("Unknown option " + opt);
      }
    }
  }
  validator = {
    isOlderVersion,
    assertOptions,
    validators
  };
  return validator;
}
var Axios_1;
var hasRequiredAxios$2;
function requireAxios$2() {
  if (hasRequiredAxios$2) return Axios_1;
  hasRequiredAxios$2 = 1;
  var utils2 = requireUtils();
  var buildURL2 = requireBuildURL();
  var InterceptorManager = requireInterceptorManager();
  var dispatchRequest2 = requireDispatchRequest();
  var mergeConfig2 = requireMergeConfig();
  var validator2 = requireValidator();
  var validators = validator2.validators;
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios.prototype.request = function request(config) {
    if (typeof config === "string") {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }
    config = mergeConfig2(this.defaults, config);
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }
    var transitional = config.transitional;
    if (transitional !== void 0) {
      validator2.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
      }, false);
    }
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest2, void 0];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }
    try {
      promise = dispatchRequest2(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
  };
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig2(this.defaults, config);
    return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
  };
  utils2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig2(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils2.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    Axios.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig2(config || {}, {
        method,
        url,
        data
      }));
    };
  });
  Axios_1 = Axios;
  return Axios_1;
}
var Cancel_1;
var hasRequiredCancel;
function requireCancel() {
  if (hasRequiredCancel) return Cancel_1;
  hasRequiredCancel = 1;
  function Cancel(message) {
    this.message = message;
  }
  Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  Cancel.prototype.__CANCEL__ = true;
  Cancel_1 = Cancel;
  return Cancel_1;
}
var CancelToken_1;
var hasRequiredCancelToken;
function requireCancelToken() {
  if (hasRequiredCancelToken) return CancelToken_1;
  hasRequiredCancelToken = 1;
  var Cancel = requireCancel();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  CancelToken_1 = CancelToken;
  return CancelToken_1;
}
var spread;
var hasRequiredSpread;
function requireSpread() {
  if (hasRequiredSpread) return spread;
  hasRequiredSpread = 1;
  spread = function spread2(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread;
}
var isAxiosError;
var hasRequiredIsAxiosError;
function requireIsAxiosError() {
  if (hasRequiredIsAxiosError) return isAxiosError;
  hasRequiredIsAxiosError = 1;
  isAxiosError = function isAxiosError2(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
  };
  return isAxiosError;
}
var hasRequiredAxios$1;
function requireAxios$1() {
  if (hasRequiredAxios$1) return axios$2.exports;
  hasRequiredAxios$1 = 1;
  var utils2 = requireUtils();
  var bind2 = requireBind();
  var Axios = requireAxios$2();
  var mergeConfig2 = requireMergeConfig();
  var defaults = requireDefaults();
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind2(Axios.prototype.request, context);
    utils2.extend(instance, Axios.prototype, context);
    utils2.extend(instance, context);
    return instance;
  }
  var axios2 = createInstance(defaults);
  axios2.Axios = Axios;
  axios2.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(axios2.defaults, instanceConfig));
  };
  axios2.Cancel = requireCancel();
  axios2.CancelToken = requireCancelToken();
  axios2.isCancel = requireIsCancel();
  axios2.all = function all(promises) {
    return Promise.all(promises);
  };
  axios2.spread = requireSpread();
  axios2.isAxiosError = requireIsAxiosError();
  axios$2.exports = axios2;
  axios$2.exports.default = axios2;
  return axios$2.exports;
}
var axios$1;
var hasRequiredAxios;
function requireAxios() {
  if (hasRequiredAxios) return axios$1;
  hasRequiredAxios = 1;
  axios$1 = requireAxios$1();
  return axios$1;
}
var axiosExports = requireAxios();
const axios = /* @__PURE__ */ getDefaultExportFromCjs(axiosExports);
export {
  axios as a
};

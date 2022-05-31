'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.1.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.1.0';

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		// ATTENTION

		var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
		var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE =  Symbol.for('react.memo');
		var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_development.exports));
	return react_development.exports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$9 = ".styles_module_icon__0f281710 {\n  display: flex;\n  height: 24px;\n  width: 24px;\n}\n.styles_module_icon__0f281710 svg {\n  width: 100%;\n  height: 100%;\n  fill: var(--color-main-500);\n}";
var modules_efc4e723$9 = {"icon":"styles_module_icon__0f281710"};
n(css$9,{});

var menu = "M24 5.5H0V4.5H24V5.5Z M24 12.5H0V11.5H24V12.5Z M24 19.5H0V18.5H24V19.5Z";
var cross = "M11.2929 12L3.16117 3.86827L3.86827 3.16116L12 11.2929L20.1317 3.16116L20.8388 3.86827L12.7071 12L20.8388 20.1317L20.1317 20.8388L12 12.7071L3.86827 20.8388L3.16116 20.1317L11.2929 12Z";
var chekbox = "M12.8489 16.5275V-4.57764e-05H11.8489V16.4252L6.35356 10.9299L5.64646 11.637L12.4 18.3905L19.1536 11.637L18.4465 10.9299L12.8489 16.5275Z M2.5 21.5V17H1.5V22.5H22.5V17H21.5V21.5H2.5Z";
var plus = "M11.5001 11.4999V0H12.5001V11.4999H24V12.4999H12.5001V24H11.5001V12.4999H0V11.4999H11.5001Z";
var question = "M8.6543 9.69216C8.6543 9.11987 8.85104 8.48558 9.34028 7.99563C9.82401 7.51119 10.6467 7.11523 12.0005 7.11523C13.2169 7.11523 14.0602 7.42615 14.5878 7.84251C15.111 8.25544 15.3466 8.78685 15.3466 9.30754C15.3466 9.83101 15.1561 10.1383 14.8678 10.3756C14.5447 10.6415 14.0966 10.8224 13.5509 11.0335L13.495 11.0551C12.9986 11.2468 12.4169 11.4715 11.9654 11.8311C11.46 12.2337 11.1158 12.8031 11.1158 13.629V15.0768L12.1158 15.0767V13.629C12.1158 13.1333 12.3005 12.8427 12.5884 12.6133C12.9131 12.3546 13.3621 12.1787 13.9116 11.9662L13.9286 11.9596C14.437 11.763 15.0384 11.5305 15.5033 11.1477C16.0083 10.732 16.3466 10.1477 16.3466 9.30754C16.3466 8.46459 15.9578 7.64985 15.2073 7.05753C14.4612 6.46865 13.3814 6.11523 12.0005 6.11523C10.4451 6.11523 9.34473 6.57592 8.63265 7.28904C7.92608 7.99664 7.6543 8.90081 7.6543 9.69216H8.6543Z M12.3457 17.15C12.3457 17.5642 12.0099 17.9 11.5957 17.9C11.1815 17.9 10.8457 17.5642 10.8457 17.15C10.8457 16.7358 11.1815 16.4 11.5957 16.4C12.0099 16.4 12.3457 16.7358 12.3457 17.15Z M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z";
var alert = "M12 17.5C12.4142 17.5 12.75 17.1642 12.75 16.75C12.75 16.3358 12.4142 16 12 16C11.5858 16 11.25 16.3358 11.25 16.75C11.25 17.1642 11.5858 17.5 12 17.5Z M12.5 14.5V6H11.5V14.5H12.5Z M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z";
var mail = "M0 21V3H24V21H0ZM22.1702 4H1.82926L11.9947 13.7082L22.1702 4ZM1 4.59082V20H23V4.59047L11.9944 15.0906L1 4.59082Z";
var photo = "M17 3H7V7H8V4H16V7H23V21H1V13H0V22H24V6H17V3Z M2.5 6V8.5H0V9.5H2.5V12H3.5V9.5H6V8.5H3.5V6H2.5Z M12 18C14.4853 18 16.5 15.9853 16.5 13.5C16.5 11.0147 14.4853 9 12 9C9.51472 9 7.5 11.0147 7.5 13.5C7.5 15.9853 9.51472 18 12 18ZM12 17C13.933 17 15.5 15.433 15.5 13.5C15.5 11.567 13.933 10 12 10C10.067 10 8.5 11.567 8.5 13.5C8.5 15.433 10.067 17 12 17Z";
var image = "M19.7996 10.2222C19.7996 11.695 18.5908 12.8889 17.0996 12.8889C15.6084 12.8889 14.3996 11.695 14.3996 10.2222C14.3996 8.74948 15.6084 7.55557 17.0996 7.55557C18.5908 7.55557 19.7996 8.74948 19.7996 10.2222ZM18.7996 10.2222C18.7996 11.131 18.0502 11.8889 17.0996 11.8889C16.149 11.8889 15.3996 11.131 15.3996 10.2222C15.3996 9.31344 16.149 8.55557 17.0996 8.55557C18.0502 8.55557 18.7996 9.31344 18.7996 10.2222Z M23.9999 20H17.4072L17.3486 20.0592L17.2887 20H-6.10352e-05V15.5335L-0.0429077 15.4881L-6.10352e-05 15.4477V4H23.9999V20ZM0.999939 5H22.9999V19H17.6996L7.22036 8.63831L0.999939 14.5046V5ZM7.20392 10.0284L16.2773 19H0.999939V15.8792L7.20392 10.0284Z";
var trashcan = "M9.33938 19.4869L8.50269 8.15695L9.49736 8.05385L10.3341 19.3838L9.33938 19.4869Z M15.5522 8.15695L14.7156 19.4869L13.7209 19.3838L14.5576 8.05385L15.5522 8.15695Z M8.5 1.5H15.5V4.5H21.5857L18.7268 22.5H5.27313L2.41431 4.5H8.5V1.5ZM14.5 2.5V4.5H9.5V2.5H14.5ZM3.58566 5.5L6.12684 21.5H17.8731L20.4143 5.5H3.58566Z";
var settings = "M16.4212 11.9998C16.4212 14.4415 14.4418 16.4209 12.0002 16.4209C9.55847 16.4209 7.5791 14.4415 7.5791 11.9998C7.5791 9.55814 9.55847 7.57877 12.0002 7.57877C14.4418 7.57877 16.4212 9.55814 16.4212 11.9998ZM15.4212 11.9998C15.4212 13.8892 13.8895 15.4209 12.0002 15.4209C10.1108 15.4209 8.5791 13.8892 8.5791 11.9998C8.5791 10.1104 10.1108 8.57877 12.0002 8.57877C13.8895 8.57877 15.4212 10.1104 15.4212 11.9998Z M14.1179 3.06935C15.0856 3.29792 15.9941 3.6797 16.8164 4.18768L18.9871 2.01705L21.9819 5.01185L19.8117 7.18205C20.3203 8.00486 20.7025 8.91405 20.9313 9.88253H24V14.1178H20.9314C20.7028 15.0858 20.3208 15.9946 19.8126 16.8171L21.9834 18.9879L18.9886 21.9827L16.818 19.812C15.9952 20.3205 15.0862 20.7026 14.1179 20.9313V24H9.88257V20.9312C8.91411 20.7024 8.00495 20.3202 7.18217 19.8116L5.0113 21.9824L2.0165 18.9876L4.1878 16.8163C3.67983 15.994 3.29806 15.0855 3.06949 14.1178H0V9.88253H3.06956C3.29828 8.91435 3.68036 8.00543 4.18875 7.18282L2.01803 5.0121L5.01284 2.0173L7.1837 4.18816C8.00608 3.68002 8.91472 3.29811 9.88257 3.06946V0H14.1179V3.06935ZM18.9871 3.43126L20.5676 5.01185L18.5449 7.03461L18.9611 7.70785C19.4142 8.44096 19.7545 9.25046 19.9581 10.1124L20.14 10.8825H23V13.1178H20.1401L19.9582 13.888C19.7547 14.7495 19.4147 15.5586 18.9619 16.2914L18.546 16.9646L20.5692 18.9879L18.9886 20.5685L16.9655 18.5453L16.2922 18.9614C15.5592 19.4144 14.7498 19.7545 13.888 19.9581L13.1179 20.14V23H10.8826V20.1399L10.1125 19.958C9.25053 19.7543 8.44105 19.4141 7.70797 18.9609L7.03473 18.5448L5.0113 20.5682L3.43071 18.9876L5.4544 16.9639L5.03856 16.2908C4.58598 15.5581 4.24614 14.7492 4.04271 13.888L3.86081 13.1178H1V10.8825H3.86085L4.04277 10.1124C4.24634 9.25073 4.58645 8.44146 5.0394 7.70854L5.45546 7.03532L3.43225 5.0121L5.01284 3.43151L7.03615 5.45482L7.70934 5.03887C8.44206 4.58613 9.25106 4.24618 10.1125 4.04267L10.8826 3.86075V1H13.1179V3.86068L13.888 4.04258C14.7493 4.24601 15.5582 4.58585 16.2909 5.03844L16.964 5.45429L18.9871 3.43126Z";
var profile = "M12.125 11C14.8864 11 17.125 8.76142 17.125 6C17.125 3.23858 14.8864 1 12.125 1C9.36358 1 7.125 3.23858 7.125 6C7.125 8.76142 9.36358 11 12.125 11ZM12.125 10C14.3341 10 16.125 8.20914 16.125 6C16.125 3.79086 14.3341 2 12.125 2C9.91586 2 8.125 3.79086 8.125 6C8.125 8.20914 9.91586 10 12.125 10Z M20.9451 22C20.4476 17.5 16.6326 14 12 14C7.36745 14 3.55237 17.5 3.05493 22C3.01863 22.3283 3 22.662 3 23H21C21 22.662 20.9814 22.3283 20.9451 22ZM12 15C7.92038 15 4.55399 18.0537 4.06189 22H19.9381C19.446 18.0537 16.0796 15 12 15Z";
var person = "M17.5 6.5H5.5V7.5H17.5V6.5Z M14.1154 10.5H5.5V11.5H14.1154V10.5Z M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V14C23.5 15.933 21.933 17.5 20 17.5H19.4257V24.2067L12.719 17.5H4C2.067 17.5 0.5 15.933 0.5 14V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V14C1.5 15.3807 2.61929 16.5 4 16.5H13.1332L18.4257 21.7925V16.5H20C21.3807 16.5 22.5 15.3807 22.5 14V4C22.5 2.61929 21.3807 1.5 20 1.5H4Z";
var analytics = "M1.5 4.8501V18.3501H23V19.3501H0.5V4.8501H1.5Z M15.6177 13.3172L23.3239 5.61104L22.6168 4.90393L15.6177 11.903L11.4819 7.76714L3.7757 15.4733L4.48281 16.1804L11.4819 9.18136L15.6177 13.3172Z";
var gift = "M18.4287 6.50001H22.5V23.5H1.5V6.50001H5.56691C4.38066 5.40985 4.15574 3.58308 5.1051 2.22726C6.13902 0.750669 8.17418 0.391815 9.65077 1.42573C10.0619 1.7136 10.4194 2.22956 10.7167 2.75973C11.0238 3.30742 11.3052 3.94219 11.5423 4.53731C11.7191 4.98096 11.8736 5.40836 11.9978 5.77006C12.122 5.40836 12.2765 4.98096 12.4533 4.53731C12.6904 3.94219 12.9718 3.30742 13.2789 2.75973C13.5762 2.22956 13.9337 1.7136 14.3448 1.42573C15.8214 0.391815 17.8566 0.750669 18.8905 2.22726C19.8399 3.58308 19.615 5.40985 18.4287 6.50001ZM14.9184 2.24488C15.9426 1.52774 17.3542 1.77665 18.0714 2.80083C18.7885 3.82501 18.5396 5.23663 17.5154 5.95377C17.3013 6.10367 16.8883 6.23679 16.3096 6.33137C15.7507 6.4227 15.1065 6.46801 14.488 6.48665C13.8716 6.50522 13.2918 6.49702 12.8655 6.48408L12.8134 6.48246L12.8297 6.43303C12.9634 6.02796 13.154 5.48036 13.3822 4.90748C13.6113 4.33266 13.8742 3.74278 14.1512 3.24884C14.438 2.73739 14.7043 2.39478 14.9184 2.24488ZM2.5 22.5V7.50001H11.5V22.5H2.5ZM12.5 22.5H21.5V7.50001H12.5V22.5ZM5.92425 2.80083C6.64139 1.77665 8.05301 1.52774 9.07719 2.24488C9.29127 2.39478 9.55764 2.73739 9.84443 3.24884C10.1214 3.74278 10.3843 4.33266 10.6134 4.90748C10.8416 5.48036 11.0322 6.02796 11.1659 6.43303L11.1822 6.48246L11.1302 6.48408C10.7038 6.49702 10.124 6.50522 9.50763 6.48665C8.88913 6.46801 8.2449 6.4227 7.68602 6.33137C7.10733 6.23679 6.69428 6.10367 6.4802 5.95377C5.45602 5.23663 5.20711 3.82501 5.92425 2.80083Z";
var calendar = "M6.5 2.5H15.5V0.5H16.5V2.5H20.5V9.84524C20.5 12.4733 21.2142 15.0519 22.5664 17.3054L23.8831 19.5H20.5V23.5H0.5V10.5H0.521848C0.507309 10.2265 0.5 9.95211 0.5 9.67724V2.5H5.5V0.5H6.5V2.5ZM5.5 3.5V6.5H6.5V3.5H15.5V6.5H16.5V3.5H19.5V9.5H1.5V3.5H5.5ZM1.52336 10.5C1.66215 12.9424 2.41713 15.315 3.72377 17.3937L4.41914 18.5H22.1169L21.7089 17.8199C20.376 15.5985 19.623 13.0814 19.5138 10.5H1.52336ZM3.86657 19.5H19.5V22.5H1.5V15.1545C1.8638 16.1176 2.32427 17.0463 2.87713 17.9259L3.86657 19.5Z";
var shield = "M17.358 8.84907L11.15 15.2162L7.64197 11.6183L8.35797 10.9202L11.15 13.7838L16.642 8.15097L17.358 8.84907Z M12 0.393829L13.2808 1.27169C15.3744 2.70669 17.728 3.71916 20.2096 4.25229L21 4.4221V13.0096C21 15.8339 19.5972 18.4738 17.2564 20.0542L12 23.6033L6.74355 20.0542C4.40284 18.4738 3 15.8339 3 13.0096V4.4221L3.79044 4.25229C6.27201 3.71916 8.62564 2.70669 10.7192 1.27169L12 0.393829ZM12 1.60618L11.2846 2.09653C9.08364 3.60512 6.60931 4.66952 4.00048 5.22998L4 13.0096C4 15.5016 5.2378 17.8309 7.30313 19.2254L12 22.3967L16.6969 19.2254C18.7622 17.8309 20 15.5016 20 13.0096V5.23008C17.3912 4.66962 14.9164 3.60512 12.7154 2.09653L12 1.60618Z";
var icons = {
	menu: menu,
	"arrow-left": "M2.20711 12.5L9.83883 20.1317L9.13173 20.8388L0.292892 12L9.13173 3.16116L9.83883 3.86827L2.20711 11.5H24V12.5H2.20711Z",
	cross: cross,
	"chevron-left": "M7.70711 12L15.3536 4.35355L14.6464 3.64645L6.29289 12L14.6464 20.3536L15.3536 19.6464L7.70711 12Z",
	"chevron-in-circle-left": "M8.0934 12L13.3967 6.6967L14.1038 7.40381L9.50761 12L14.1038 16.5962L13.3967 17.3033L8.0934 12Z M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z",
	"close-circle": "M11.2427 11.9498L6.64645 7.35355L7.35355 6.64645L11.9498 11.2427L16.546 6.64645L17.2531 7.35355L12.6569 11.9498L17.253 16.5459L16.5459 17.253L11.9498 12.6569L7.35359 17.253L6.64649 16.5459L11.2427 11.9498Z M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z",
	"tickmark-in-circle": "M10.6767 16.1839L6.84631 12.3534L7.55342 11.6463L10.6767 14.7696L16.7389 8.70748L17.446 9.41459L10.6767 16.1839Z M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z",
	chekbox: chekbox,
	plus: plus,
	question: question,
	alert: alert,
	"credit-card": "M6.19287 11.5C7.57358 11.5 8.69287 10.3807 8.69287 9C8.69287 7.61929 7.57358 6.5 6.19287 6.5C4.81216 6.5 3.69287 7.61929 3.69287 9C3.69287 10.3807 4.81216 11.5 6.19287 11.5ZM6.19287 10.5C7.0213 10.5 7.69287 9.82843 7.69287 9C7.69287 8.17157 7.0213 7.5 6.19287 7.5C5.36444 7.5 4.69287 8.17157 4.69287 9C4.69287 9.82843 5.36444 10.5 6.19287 10.5Z M3.69287 16.5H20.3083V15.5H3.69287V16.5Z M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z",
	mail: mail,
	photo: photo,
	image: image,
	trashcan: trashcan,
	settings: settings,
	profile: profile,
	person: person,
	"pointing-hand": "M13.8672 9.52484L13.8686 9.52456C13.6519 9.57154 13.4299 9.47026 13.3236 9.27562C13.2171 9.08067 13.2521 8.83879 13.4094 8.68191L13.7624 9.03594L13.8672 9.52484Z M20.2088 2.63537C20.3915 1.97017 20.2755 1.30627 19.755 0.785712C19.4618 0.492526 19.1363 0.299457 18.7788 0.221347C18.4218 0.143326 18.0749 0.189178 17.7538 0.304508C17.1355 0.526565 16.5538 1.02906 16.0345 1.54838L7.90239 9.68049C7.90393 9.62099 7.90547 9.55978 7.90702 9.49694C7.92875 8.61309 7.95094 7.40625 7.95268 6.1153C7.95382 5.27198 7.83321 4.39366 7.46449 3.70881C7.07626 2.98771 6.41251 2.49128 5.43456 2.4943C4.93109 2.49585 4.50453 2.66137 4.16255 2.96513C3.83215 3.25861 3.60753 3.65684 3.44643 4.08666C3.12837 4.93524 3.00495 6.0595 2.91132 7.18073C2.88738 7.46748 2.8635 7.74086 2.84004 8.00942C2.67835 9.86075 2.53668 11.4828 2.53077 15.6728C2.52357 20.7774 6.73558 23.7752 10.7229 23.8784C12.7851 23.9318 14.6469 22.9262 16.3003 21.6216C17.5868 20.6066 18.7995 19.3661 19.9141 18.2258C20.2293 17.9034 20.5366 17.589 20.8356 17.29C21.7522 16.3732 21.476 15.0159 20.8377 14.3776C20.4587 13.9985 19.9568 13.8434 19.5999 13.7757C19.5381 13.7639 19.4786 13.7545 19.4225 13.7468C19.3683 13.1429 19.2039 12.6548 18.957 12.266C18.6478 11.7791 18.2323 11.4841 17.8261 11.3105C17.4548 11.1519 17.0904 11.0938 16.8115 11.0754C16.7824 10.4745 16.6418 9.98887 16.411 9.60304C16.112 9.10332 15.6891 8.81727 15.2724 8.66264C15.1613 8.62137 15.0505 8.58939 14.9423 8.56484C15.2534 8.25435 15.63 7.87833 16.0324 7.4763C17.0778 6.43196 18.2984 5.21137 18.9969 4.50859C19.5915 3.91026 20.0343 3.27069 20.2088 2.63537ZM13.7624 9.03594C13.4093 8.68195 13.4094 8.68191 13.4094 8.68191L13.9755 8.11702C14.3239 7.76927 14.803 7.29098 15.3257 6.76883C16.3713 5.72428 17.5906 4.50496 18.2876 3.80366C18.8223 3.26569 19.1342 2.77195 19.2445 2.37047C19.3466 1.99888 19.2776 1.7225 19.0479 1.49282C18.8628 1.30771 18.7014 1.22803 18.5653 1.19829C18.4288 1.16847 18.2755 1.17967 18.0918 1.24565C17.7004 1.38621 17.2537 1.74336 16.7416 2.25549L7.71818 11.2789C7.71818 11.2789 7.71782 11.2793 7.36426 10.9257L7.71818 11.2789C7.57274 11.4244 7.3527 11.4663 7.1642 11.384C6.9757 11.3017 6.85683 11.1123 6.86462 10.9068L6.86555 10.8817L6.86823 10.8069C6.87054 10.7412 6.87385 10.6442 6.87785 10.5196C6.88583 10.2706 6.89652 9.9116 6.90732 9.47236C6.92893 8.59364 6.95095 7.39492 6.95268 6.11395C6.95373 5.33905 6.83809 4.65481 6.584 4.18287C6.34942 3.74717 6.00378 3.49255 5.43764 3.4943C5.16906 3.49512 4.9799 3.57665 4.82665 3.71277C4.66183 3.85918 4.51173 4.09368 4.38282 4.43762C4.12085 5.13656 4.00305 6.12394 3.90785 7.26395C3.88381 7.55191 3.85987 7.82586 3.8364 8.09454C3.67572 9.93362 3.53662 11.5257 3.53077 15.6742C3.5245 20.1219 7.18225 22.7864 10.7488 22.8787C12.4636 22.9231 14.0953 22.0875 15.6809 20.8365C16.9115 19.8656 18.0622 18.6889 19.1703 17.5556C19.493 17.2257 19.8121 16.8994 20.1284 16.583C20.5773 16.134 20.4605 15.4146 20.1306 15.0847C19.9592 14.9133 19.6901 14.8106 19.4134 14.7581C19.282 14.7332 19.1639 14.7224 19.0793 14.718C19.0373 14.7158 19.0045 14.7151 18.9834 14.7151L18.9614 14.7152H18.9585C18.8233 14.7195 18.6913 14.6688 18.5941 14.5746C18.4964 14.48 18.4415 14.3498 18.442 14.2138C18.4442 13.5347 18.2973 13.0926 18.1128 12.802C17.9294 12.5131 17.6862 12.3382 17.4332 12.2301C17.175 12.1198 16.9083 12.0804 16.6992 12.0706C16.5962 12.0658 16.5113 12.0684 16.4542 12.072C16.4258 12.0737 16.4046 12.0757 16.3919 12.077L16.3794 12.0785C16.2316 12.0993 16.0826 12.053 15.9724 11.9523C15.862 11.8514 15.8026 11.7063 15.8105 11.5569C15.8484 10.8402 15.7191 10.3944 15.5528 10.1165C15.3898 9.84402 15.1655 9.6896 14.9245 9.60014C14.6755 9.50774 14.4106 9.48631 14.197 9.49195C14.0924 9.49472 14.0055 9.50382 13.9466 9.5119C13.9172 9.51592 13.8952 9.51963 13.8819 9.52204L13.8686 9.52456L13.8672 9.52484L13.7624 9.03594Z",
	analytics: analytics,
	gift: gift,
	"new-tab": "M10 1.5H1.5V22.5H22.5V14H21.5V21.5H2.5V2.5H10V1.5Z M14 2.5H20.7929L7.64648 15.6464L8.35359 16.3535L21.5 3.20712V10H22.5V1.5H14V2.5Z",
	calendar: calendar,
	shield: shield,
	"opened-eye": "M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z M23.3859 12.318L23.3848 12.3192L23.3814 12.3234L23.3691 12.3382C23.3585 12.3508 23.3432 12.3689 23.3233 12.3922C23.2835 12.4388 23.2252 12.506 23.1494 12.5909C22.9978 12.7606 22.7759 13.0013 22.491 13.2892C21.9216 13.8645 21.098 14.6315 20.0791 15.3993C18.0527 16.9263 15.1961 18.5 12 18.5C8.80385 18.5 5.94728 16.9263 3.92092 15.3993C2.90199 14.6315 2.07835 13.8645 1.50903 13.2892C1.2241 13.0013 1.00215 12.7606 0.850561 12.5909C0.774749 12.506 0.71648 12.4388 0.676677 12.3922C0.656774 12.3689 0.641483 12.3508 0.63092 12.3382L0.618632 12.3234L0.615173 12.3192L0.613518 12.3172L0.353134 12L0.614119 11.682C0.614119 11.682 0.613518 11.6828 0.999998 12L0.614119 11.682L0.615173 11.6808L0.618632 11.6766L0.63092 11.6618C0.641483 11.6492 0.656774 11.6311 0.676677 11.6078C0.71648 11.5612 0.774749 11.494 0.850561 11.4091C1.00215 11.2394 1.2241 10.9987 1.50903 10.7108C2.07835 10.1355 2.90199 9.36848 3.92092 8.60068C5.94728 7.07374 8.80385 5.5 12 5.5C15.1961 5.5 18.0527 7.07374 20.0791 8.60068C21.098 9.36848 21.9216 10.1355 22.491 10.7108C22.7759 10.9987 22.9978 11.2394 23.1494 11.4091C23.2252 11.494 23.2835 11.5612 23.3233 11.6078C23.3432 11.6311 23.3585 11.6492 23.3691 11.6618L23.3814 11.6766L23.3848 11.6808L23.3862 11.6825L23.6469 12L23.3859 12.318ZM2.21984 12.5858C1.98856 12.3521 1.8018 12.152 1.66409 12C1.8018 11.848 1.98856 11.6479 2.21984 11.4142C2.76377 10.8645 3.55105 10.1315 4.52273 9.39932C6.47758 7.92626 9.12102 6.5 12 6.5C14.879 6.5 17.5224 7.92626 19.4773 9.39932C20.4489 10.1315 21.2362 10.8645 21.7802 11.4142C22.0114 11.6479 22.1982 11.848 22.3359 12C22.1982 12.152 22.0114 12.3521 21.7802 12.5858C21.2362 13.1355 20.4489 13.8685 19.4773 14.6007C17.5224 16.0737 14.879 17.5 12 17.5C9.12102 17.5 6.47758 16.0737 4.52273 14.6007C3.55105 13.8685 2.76377 13.1355 2.21984 12.5858ZM23 12C23.3865 11.6828 23.3862 11.6825 23.3862 11.6825L23 12ZM23 12L23.3859 12.318C23.3859 12.318 23.3865 12.3172 23 12Z",
	"closed-eye": "M4.52278 10.6007C6.47763 12.0737 9.12107 13.5 12.0001 13.5C14.879 13.5 17.5225 12.0737 19.4773 10.6007C20.449 9.86849 21.2363 9.13548 21.7802 8.58581C22.0519 8.31124 22.2622 8.08315 22.4037 7.92475C22.4744 7.84557 22.5278 7.78387 22.5631 7.74256C22.5808 7.7219 22.5939 7.70635 22.6023 7.69626L22.6115 7.68528L22.6134 7.68295L22.6175 7.68635C22.6322 7.69831 22.6987 7.75264 23 8C23.3865 8.31723 23.3863 8.31753 23.3863 8.31753L23.3849 8.31924L23.3691 8.33817C23.3586 8.35079 23.3433 8.36893 23.3234 8.39222C23.2836 8.43879 23.2253 8.506 23.1495 8.59088C22.9979 8.76061 22.7759 9.00126 22.491 9.2892C22.0247 9.7604 21.3878 10.3602 20.6128 10.9837L23.4001 14.7L22.6001 15.3L19.8191 11.5921C18.6383 12.4532 17.2005 13.3075 15.5933 13.865L16.4881 17.8915L15.5119 18.1085L14.6334 14.1554C13.7906 14.3727 12.9091 14.5 12.0001 14.5C11.091 14.5 10.2094 14.3727 9.36653 14.1553L8.48806 18.1085L7.51187 17.8915L8.40667 13.8649C6.79955 13.3074 5.36171 12.4531 4.18096 11.5921L1.40001 15.3L0.600006 14.7L3.38728 10.9837C2.61224 10.3602 1.97537 9.7604 1.50908 9.2892C1.22415 9.00126 1.0022 8.76061 0.850614 8.59088C0.774801 8.506 0.716532 8.43879 0.676729 8.39222C0.656826 8.36893 0.641535 8.35079 0.630972 8.33817L0.618684 8.32343L0.615225 8.31924L0.614171 8.31796C0.614171 8.31796 0.61357 8.31723 1.00005 8C1.38653 7.68278 1.3864 7.68262 1.3864 7.68262L1.3886 7.68528L1.39775 7.69626C1.4062 7.70635 1.4193 7.7219 1.43695 7.74256C1.47226 7.78387 1.52573 7.84557 1.59645 7.92475C1.73792 8.08315 1.94819 8.31124 2.21989 8.58581C2.76382 9.13548 3.5511 9.86849 4.52278 10.6007Z",
	"arrow-right": "M21.7929 11.5L14.1612 3.86827L14.8683 3.16116L23.7071 12L14.8683 20.8388L14.1612 20.1317L21.7929 12.5H0L8.74228e-08 11.5H21.7929Z",
	"chevron-right": "M16.2929 12L8.64645 19.6464L9.35356 20.3536L17.7071 12L9.35356 3.64645L8.64646 4.35355L16.2929 12Z",
	"chevron-down": "M12 16.2929L4.35356 8.64645L3.64645 9.35355L12 17.7071L20.3536 9.35355L19.6465 8.64645L12 16.2929Z",
	"chevron-top": "M12 7.70711L19.6465 15.3536L20.3536 14.6464L12 6.29289L3.64645 14.6464L4.35356 15.3536L12 7.70711Z",
	"chevron-in-circle-right": "M15.9066 12L10.6033 17.3033L9.89619 16.5962L14.4924 12L9.8962 7.40381L10.6033 6.6967L15.9066 12Z M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 5.79387e-07 12 0C5.37258 -5.79387e-07 5.79387e-07 5.37258 0 12C-5.79387e-07 18.6274 5.37258 24 12 24ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 0.999999 1 5.92487 1 12C0.999999 18.0751 5.92487 23 12 23Z"
};

var Icon = function (props) {
    return (React.createElement("i", { className: "".concat(modules_efc4e723$9.icon, " ").concat(props.className), style: __assign({}, props.style) },
        React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 24 24", fillRule: "evenodd" },
            React.createElement("path", { d: icons[props.name] }))));
};
Icon.defaultProps = {
    className: "",
    name: "cross",
    style: {},
};

var css$8 = ".styles_module_button__4101439f {\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px 20px;\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  background: none;\n  text-decoration: none;\n  transition: background 0.16s ease, border 0.16s ease, color 0.16s ease;\n}\n\n.styles_module_text__4101439f {\n  font-family: \"ABCMarfa\", sans-serif;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.styles_module_primary__4101439f {\n  background: var(--color-main-500);\n}\n.styles_module_primary__4101439f .styles_module_text__4101439f {\n  color: var(--color-main-0);\n}\n.styles_module_primary__4101439f .styles_module_icon__4101439f svg {\n  fill: var(--color-main-0);\n}\n.styles_module_primary__4101439f:hover {\n  background: var(--color-main-400);\n}\n.styles_module_primary__4101439f:focus-visible {\n  outline: 1px solid var(--color-main-500);\n  outline-offset: 4px;\n}\n\n.styles_module_accent__4101439f {\n  background: var(--color-accent-500);\n}\n.styles_module_accent__4101439f .styles_module_text__4101439f {\n  color: var(--color-main-0);\n}\n.styles_module_accent__4101439f .styles_module_icon__4101439f svg {\n  fill: var(--color-main-0);\n}\n.styles_module_accent__4101439f:hover {\n  background: var(--color-accent-800);\n}\n.styles_module_accent__4101439f:focus-visible {\n  outline: 1px solid var(--color-accent-500);\n  outline-offset: 4px;\n}\n\n.styles_module_outline__4101439f {\n  border: 1px solid var(--color-main-500);\n}\n.styles_module_outline__4101439f .styles_module_text__4101439f {\n  color: var(--color-main-500);\n}\n.styles_module_outline__4101439f .styles_module_icon__4101439f svg {\n  fill: var(--color-main-500);\n}\n.styles_module_outline__4101439f:hover {\n  border: 1px solid var(--color-main-200);\n}\n.styles_module_outline__4101439f:focus-visible {\n  outline: 1px solid var(--color-main-500);\n  outline-offset: 4px;\n}\n\n.styles_module_ghost__4101439f .styles_module_text__4101439f {\n  color: var(--color-main-500);\n}\n.styles_module_ghost__4101439f .styles_module_icon__4101439f svg {\n  fill: var(--color-main-500);\n}\n.styles_module_ghost__4101439f:hover {\n  background-color: var(--color-main-transparent-50);\n}\n.styles_module_ghost__4101439f:focus-visible {\n  outline: 1px solid var(--color-main-500);\n  outline-offset: 4px;\n}\n\n.styles_module_default__4101439f {\n  height: 60px;\n}\n.styles_module_default__4101439f .styles_module_text__4101439f {\n  font-size: 16px;\n}\n\n.styles_module_fixedSizeDefault__4101439f {\n  width: 60px;\n}\n\n.styles_module_minWidthDefault__4101439f {\n  min-width: 260px;\n}\n\n.styles_module_small__4101439f {\n  height: 45px;\n}\n.styles_module_small__4101439f .styles_module_text__4101439f {\n  font-size: 16px;\n}\n\n.styles_module_fixedSizeSmall__4101439f {\n  width: 45px;\n}\n\n.styles_module_minWidthSmall__4101439f {\n  min-width: 180px;\n}\n\n.styles_module_disabled__4101439f {\n  pointer-events: none;\n  opacity: 0.2;\n}";
var modules_efc4e723$8 = {"button":"styles_module_button__4101439f","text":"styles_module_text__4101439f","primary":"styles_module_primary__4101439f","icon":"styles_module_icon__4101439f","accent":"styles_module_accent__4101439f","outline":"styles_module_outline__4101439f","ghost":"styles_module_ghost__4101439f","default":"styles_module_default__4101439f","fixedSize-default":"styles_module_fixedSizeDefault__4101439f","minWidth-default":"styles_module_minWidthDefault__4101439f","small":"styles_module_small__4101439f","fixedSize-small":"styles_module_fixedSizeSmall__4101439f","minWidth-small":"styles_module_minWidthSmall__4101439f","disabled":"styles_module_disabled__4101439f"};
n(css$8,{});

// Description
var ButtonContent = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(React.Fragment, null,
        props.children ? (React.createElement("span", { className: "".concat(modules_efc4e723$8.text) }, props.children)) : null,
        props.icon ? (React.createElement(Icon, { name: props.icon, className: modules_efc4e723$8.icon, style: props.children
                ? {
                    marginLeft: "10px",
                }
                : {} })) : null));
};
var ButtonTag = function (_a) {
    var props = __rest(_a, []);
    var handleClick = function (event) {
        event.preventDefault();
        if (props.onClick) {
            props.onClick(event);
        }
    };
    return (React.createElement("button", { type: props.behaviour, className: "".concat(props.className, " ").concat(modules_efc4e723$8.button, " ").concat(modules_efc4e723$8[props.mode], " ").concat(modules_efc4e723$8[props.size], " ").concat(props.disabled ? modules_efc4e723$8.disabled : "", " ").concat(props.children
            ? modules_efc4e723$8["minWidth-".concat(props.size)]
            : modules_efc4e723$8["fixedSize-".concat(props.size)]), style: props.maxWidth ? { maxWidth: props.maxWidth } : {}, onClick: handleClick },
        React.createElement(ButtonContent, __assign({}, props))));
};
var LinkTag = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement("a", { className: "".concat(props.className, " ").concat(modules_efc4e723$8.button, " ").concat(modules_efc4e723$8[props.mode], " ").concat(modules_efc4e723$8[props.size], " ").concat(props.disabled ? modules_efc4e723$8.disabled : "", " ").concat(props.children
            ? modules_efc4e723$8["minWidth-".concat(props.size)]
            : modules_efc4e723$8["fixedSize-".concat(props.size)]), rel: "noreferrer", href: props.href, style: props.maxWidth
            ? {
                maxWidth: props.maxWidth,
            }
            : {}, onClick: function (e) { return props.onClick(e); }, target: props.target },
        React.createElement(ButtonContent, __assign({}, props))));
};
var Button = function (props) {
    return props.type === "button" ? (React.createElement(ButtonTag, __assign({}, props))) : (React.createElement(LinkTag, __assign({}, props)));
};
Button.defaultProps = {
    className: "",
    mode: "primary",
    size: "default",
    type: "button",
    behaviour: "submit",
    href: "#",
    target: "_self",
    disabled: false,
    children: "Button",
};

var css$7 = ".styles_module_componentWrap__65018663 {\n  position: relative;\n  justify-content: flex-end;\n  display: flex;\n  flex-direction: column;\n}\n\n.styles_module_inputWrap__65018663 {\n  position: relative;\n  justify-content: flex-end;\n  display: flex;\n  flex-direction: column;\n  height: 68px;\n}\n\n.styles_module_label__65018663 {\n  pointer-events: none;\n  position: absolute;\n  bottom: 13px;\n  font-family: \"ABCMarfa\", sans-serif;\n  font-weight: 200;\n  font-size: 24px;\n  line-height: 18px;\n  opacity: 0.3;\n  transform-origin: left;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.styles_module_input__65018663 {\n  height: 44px;\n  padding: 0;\n  padding-bottom: 5px;\n  font-family: \"ABCMarfa\", sans-serif;\n  font-weight: 200;\n  font-size: 24px;\n  line-height: 24px;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 0;\n  transition: box-shadow 0.15s ease;\n  box-shadow: 0 1px 0 0 var(--color-main-500);\n}\n.styles_module_input__65018663:hover, .styles_module_input__65018663:focus {\n  box-shadow: 0 2px 0 0 var(--color-main-500);\n}\n.styles_module_input__65018663:focus {\n  box-shadow: 0 2px 0 0 var(--color-main-500);\n}\n.styles_module_input__65018663:focus + .styles_module_label__65018663 {\n  opacity: 1;\n  transform: translateY(-34px) scale(0.6);\n}\n.styles_module_input__65018663:not(:placeholder-shown) + .styles_module_label__65018663 {\n  opacity: 1;\n  transform: translateY(-34px) scale(0.6);\n}\n\n.styles_module_helperText__65018663 {\n  color: var(--color-main-transparent-200);\n  margin-top: 12px;\n  line-height: 120%;\n}\n\n.styles_module_hideSpinButton__65018663 {\n  /* Chrome, Safari, Edge, Opera */\n  /* Firefox */\n}\n.styles_module_hideSpinButton__65018663::-webkit-outer-spin-button, .styles_module_hideSpinButton__65018663::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.styles_module_hideSpinButton__65018663[type=number] {\n  -moz-appearance: textfield;\n}\n\n.styles_module_icon__65018663 {\n  position: absolute;\n  cursor: pointer;\n  bottom: 10px;\n  right: 0;\n}\n\n.styles_module_error__65018663 .styles_module_input__65018663 {\n  box-shadow: 0 2px 0 0 var(--color-service-error-main);\n}\n.styles_module_error__65018663 .styles_module_helperText__65018663 {\n  color: var(--color-service-error-main);\n}\n\n.styles_module_shake__65018663 {\n  animation-name: styles_module_shakeAnimation__65018663;\n  animation-duration: 0.4s;\n  animation-iteration-count: 1;\n  animation-timing-function: ease;\n}\n\n@keyframes styles_module_shakeAnimation__65018663 {\n  0% {\n    transform: translateX(0);\n  }\n  30% {\n    transform: translateX(-10px);\n  }\n  40% {\n    transform: translateX(10px);\n  }\n  60% {\n    transform: translateX(-10px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}";
var modules_efc4e723$7 = {"componentWrap":"styles_module_componentWrap__65018663","inputWrap":"styles_module_inputWrap__65018663","label":"styles_module_label__65018663","input":"styles_module_input__65018663","helperText":"styles_module_helperText__65018663","hideSpinButton":"styles_module_hideSpinButton__65018663","icon":"styles_module_icon__65018663","error":"styles_module_error__65018663","shake":"styles_module_shake__65018663","shake-animation":"styles_module_shakeAnimation__65018663"};
n(css$7,{});

var Input = React.forwardRef(function (props, ref) {
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        if (props.isInvalid && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.isInvalid]);
    return (React.createElement("div", { ref: ref, className: "".concat(modules_efc4e723$7.componentWrap, " ").concat(props.className, " ").concat(props.isInvalid ? modules_efc4e723$7.error : "", " ").concat(props.isInvalid ? modules_efc4e723$7.shake : "") },
        React.createElement("div", { className: "".concat(modules_efc4e723$7.inputWrap), style: {
                height: props.label !== "" ? "68px" : "40px",
            } },
            props.icon ? (React.createElement("div", { onClick: props.icon.onClick, className: modules_efc4e723$7.icon, style: {
                    pointerEvents: props.icon.onClick !== undefined ? "auto" : "none",
                } },
                React.createElement(Icon, { name: props.icon.name }))) : null,
            React.createElement("input", { ref: inputRef, autoFocus: props.autoFocus, type: props.type, id: props.id ? props.id : props.name, name: props.name, className: "".concat(modules_efc4e723$7.input, " ").concat(props.hideSpinButton ? modules_efc4e723$7.hideSpinButton : ""), placeholder: "\u00A0", value: props.value, required: props.required, onChange: props.onChange, onSubmit: props.onSubmit, onBlur: props.onBlur, onFocus: props.onFocus, onInvalid: props.onInvalid }),
            props.label !== "" ? (React.createElement("label", { className: modules_efc4e723$7.label, htmlFor: props.name }, props.label)) : null),
        props.helperText && !props.isInvalid ? (React.createElement("span", { className: "".concat(modules_efc4e723$7.helperText, " typo-app-body-caption") }, props.helperText)) : null,
        props.isInvalid ? (React.createElement("span", { className: "".concat(modules_efc4e723$7.helperText, " typo-app-body-caption") }, props.errorMessage)) : null));
});
Input.displayName = "Input";
Input.defaultProps = {
    className: "",
    label: "Label",
    type: "text",
    required: false,
    autoFocus: false,
    isInvalid: false,
    errorMessage: "",
    hideSpinButton: true,
};

var css$6 = ".styles_module_logo__64b3d2ef {\n  height: 40px;\n}\n.styles_module_logo__64b3d2ef svg {\n  overflow: visible;\n  fill: var(--color-main-500);\n  width: 100%;\n  height: 100%;\n}\n\n.styles_module_hoverAnimation__64b3d2ef:hover .styles_module_core__64b3d2ef {\n  transform: rotate(90deg) scale(0.9);\n}\n.styles_module_hoverAnimation__64b3d2ef:hover .styles_module_firstrect__64b3d2ef {\n  transform: rotate(-90deg) scale(0.9);\n}\n.styles_module_hoverAnimation__64b3d2ef:hover .styles_module_secondrect__64b3d2ef {\n  transform: rotate(90deg) scale(0.9);\n}\n\n.styles_module_core__64b3d2ef,\n.styles_module_firstrect__64b3d2ef,\n.styles_module_secondrect__64b3d2ef {\n  transform-origin: 21px;\n  transition: all 0.4s ease;\n}";
var modules_efc4e723$6 = {"logo":"styles_module_logo__64b3d2ef","hoverAnimation":"styles_module_hoverAnimation__64b3d2ef","core":"styles_module_core__64b3d2ef","firstrect":"styles_module_firstrect__64b3d2ef","secondrect":"styles_module_secondrect__64b3d2ef"};
n(css$6,{});

var BackerSignPath = function () { return (React.createElement(React.Fragment, null,
    React.createElement("path", { className: modules_efc4e723$6.firstrect, fillRule: "evenodd", clipRule: "evenodd", d: "M36.3867 10.2071L16.757 1.97949C14.4649 1.01878 11.828 2.09807 10.8673 4.39016L2.63966 24.0198C1.67895 26.3119 2.75824 28.9488 5.05033 29.9095L24.68 38.1372C26.9721 39.0979 29.609 38.0186 30.5697 35.7265L38.7973 16.0968C39.758 13.8047 38.6787 11.1678 36.3867 10.2071ZM17.3368 0.596088C14.2807 -0.684856 10.7648 0.754203 9.48387 3.81032L1.25626 23.44C-0.0246837 26.4961 1.41438 30.012 4.47049 31.2929L24.1002 39.5206C27.1563 40.8015 30.6722 39.3624 31.9531 36.3063L40.1807 16.6766C41.4617 13.6205 40.0226 10.1046 36.9665 8.8237L17.3368 0.596088Z" }),
    React.createElement("path", { className: modules_efc4e723$6.secondrect, fillRule: "evenodd", clipRule: "evenodd", d: "M24.7248 1.98933L5.07483 10.1683C2.78037 11.1233 1.69455 13.7576 2.64958 16.052L10.8285 35.702C11.7836 37.9965 14.4178 39.0823 16.7123 38.1273L36.3623 29.9483C38.6567 28.9933 39.7425 26.359 38.7875 24.0646L30.6085 4.41458C29.6535 2.12012 27.0193 1.0343 24.7248 1.98933ZM4.49842 8.78347C1.43914 10.0568 -0.00862256 13.5691 1.26475 16.6284L9.44372 36.2784C10.7171 39.3377 14.2294 40.7855 17.2887 39.5121L36.9387 31.3331C39.998 30.0598 41.4457 26.5474 40.1723 23.4882L31.9934 3.83817C30.72 0.77889 27.2077 -0.668876 24.1484 0.604497L4.49842 8.78347Z" }),
    React.createElement("path", { className: modules_efc4e723$6.core, fillRule: "evenodd", clipRule: "evenodd", d: "M16.9699 8.99338L12.1133 8.27388C10.4539 8.02804 9.02804 9.45389 9.27388 11.1133L9.99338 15.9699C10.3893 18.642 10.3893 21.3579 9.99338 24.0301L9.27388 28.8867C9.02804 30.5461 10.4539 31.9719 12.1133 31.7261L16.9699 31.0066C19.642 30.6107 22.3579 30.6107 25.0301 31.0066L29.8867 31.7261C31.5461 31.9719 32.9719 30.5461 32.7261 28.8867L32.0066 24.0301C31.6107 21.3579 31.6107 18.642 32.0066 15.9699L32.7261 11.1133C32.9719 9.45389 31.5461 8.02804 29.8867 8.27388L25.0301 8.99338C22.3579 9.38925 19.642 9.38925 16.9699 8.99338ZM12.3331 6.79007C9.6781 6.39674 7.39674 8.6781 7.79007 11.3331L8.50957 16.1897C8.88385 18.7161 8.88385 21.2839 8.50957 23.8102L7.79007 28.6669C7.39674 31.3219 9.6781 33.6032 12.3331 33.2099L17.1897 32.4904C19.7161 32.1161 22.2839 32.1161 24.8102 32.4904L29.6669 33.2099C32.3219 33.6032 34.6032 31.3219 34.2099 28.6669L33.4904 23.8102C33.1161 21.2839 33.1161 18.7161 33.4904 16.1897L34.2099 11.3331C34.6032 8.6781 32.3219 6.39674 29.6669 6.79007L24.8102 7.50957C22.2839 7.88385 19.7161 7.88385 17.1897 7.50957L12.3331 6.79007Z" }))); };
var BackerFoundation = function (props) { return (React.createElement("svg", { viewBox: "0 0 138 40", xmlns: "http://www.w3.org/2000/svg", className: "".concat(props.hoverAnimation ? modules_efc4e723$6.hoverAnimation : "") },
    React.createElement(BackerSignPath, null),
    React.createElement("path", { d: "M53.0368 39.5449V35.4531H57.1108V34.5232H53.0368V31.7829H58.2452V30.8653H52V39.5449H53.0368Z" }),
    React.createElement("path", { d: "M63.3648 39.7185C65.7556 39.7309 67.5242 37.809 67.5242 35.2175C67.5242 32.626 65.7556 30.7041 63.3648 30.6917C60.9619 30.6793 59.2054 32.6136 59.2054 35.2051C59.2054 37.7966 60.9619 39.7061 63.3648 39.7185ZM63.3648 38.7762C61.5352 38.7638 60.2666 37.313 60.2666 35.2051C60.2666 33.0848 61.5352 31.6217 63.3648 31.6341C65.1945 31.6465 66.4508 33.0972 66.4508 35.2175C66.4508 37.3254 65.1945 38.7886 63.3648 38.7762Z" }),
    React.createElement("path", { d: "M72.8874 39.7185C75.0098 39.7185 76.2661 38.4662 76.2661 36.4203V30.8653H75.2415V36.3707C75.2415 37.933 74.3633 38.739 72.8874 38.739C71.4115 38.739 70.5088 37.933 70.5088 36.3707V30.8653H69.4842V36.4203C69.4842 38.4662 70.7528 39.7185 72.8874 39.7185Z" }),
    React.createElement("path", { d: "M84.7784 37.933L80.4604 30.8653H78.8015V39.5449H79.7896V31.6961L84.5833 39.5449H85.7664V30.8653H84.7784V37.933Z" }),
    React.createElement("path", { d: "M91.4156 39.5449C93.7697 39.5449 95.575 38.0198 95.575 35.1679C95.575 32.4648 93.9283 30.8653 91.7083 30.8653H88.3905V39.5449H91.4156ZM89.4273 31.7829H91.5985C93.3062 31.7829 94.5138 33.0352 94.5138 35.2051C94.5138 37.5362 93.1111 38.615 91.318 38.615H89.4273V31.7829Z" }),
    React.createElement("path", { d: "M104.139 39.5449L101.126 30.8653H99.6258L96.5031 39.5449H97.5765L98.3938 37.2014H102.236L103.017 39.5449H104.139ZM100.345 31.5969L101.919 36.2591H98.7231L100.345 31.5969Z" }),
    React.createElement("path", { d: "M108.075 39.5449V31.8201H111.369V30.8653H103.745V31.8201H107.038V39.5449H108.075Z" }),
    React.createElement("path", { d: "M114.025 39.5449V30.8653H112.988V39.5449H114.025Z" }),
    React.createElement("path", { d: "M120.244 39.7185C122.634 39.7309 124.403 37.809 124.403 35.2175C124.403 32.626 122.634 30.7041 120.244 30.6917C117.841 30.6793 116.084 32.6136 116.084 35.2051C116.084 37.7966 117.841 39.7061 120.244 39.7185ZM120.244 38.7762C118.414 38.7638 117.145 37.313 117.145 35.2051C117.145 33.0848 118.414 31.6217 120.244 31.6341C122.073 31.6465 123.33 33.0972 123.33 35.2175C123.33 37.3254 122.073 38.7886 120.244 38.7762Z" }),
    React.createElement("path", { d: "M132.438 37.933L128.12 30.8653H126.461V39.5449H127.449V31.6961L132.242 39.5449H133.426V30.8653H132.438V37.933Z" }),
    React.createElement("path", { d: "M64.2681 10.6462C66.4606 9.85209 67.5199 8.31347 67.5199 6.05518C67.5199 2.92831 65.2042 0.843734 61.2627 0.843734H52V21.2925H61.1641C65.5738 21.2925 68.3082 19.1334 68.3082 15.5351C68.3082 13.1279 66.8301 11.1425 64.2681 10.6462ZM55.9416 4.21877H60.4497C62.4451 4.21877 63.5291 5.16179 63.5291 6.55151C63.5291 8.13976 62.3466 9.13242 60.4251 9.13242H55.9662V4.21877H55.9416ZM60.8932 17.9671H55.9662V12.4578H60.8439C63.0856 12.4578 64.3174 13.5497 64.3174 15.2124C64.3174 17.024 62.9378 17.9671 60.8932 17.9671Z" }),
    React.createElement("path", { d: "M76.2406 5.78218C72.6685 5.78218 70.1804 7.81712 69.7124 10.8447H73.4815C73.6539 9.67835 74.6393 8.76015 76.2406 8.76015C77.9896 8.76015 78.8272 9.72799 78.8272 11.2418V11.7877L75.1813 12.0855C71.2643 12.3833 69.195 13.922 69.195 16.8999C69.195 19.8034 71.2643 21.6647 74.4422 21.6647C76.7086 21.6647 78.3592 20.5479 78.9504 19.2327V21.3173H82.7688V11.5148C82.7688 8.06529 80.5024 5.78218 76.2406 5.78218ZM78.8272 15.4854C78.8272 17.6692 77.5462 18.9597 75.5262 18.9597C73.9249 18.9597 73.038 18.0911 73.038 16.8007C73.038 15.3613 74.1712 14.8402 75.9696 14.6913L78.8519 14.4679V15.4854H78.8272Z" }),
    React.createElement("path", { d: "M91.5387 9.15718C93.3617 9.15718 94.4456 10.2987 94.8644 11.7877H98.6582C98.1901 8.31343 95.5542 5.75734 91.4894 5.75734C86.7842 5.75734 83.8034 9.40535 83.8034 13.6986C83.8034 17.9918 86.7842 21.6398 91.4894 21.6398C95.5542 21.6398 98.1901 19.1086 98.6582 15.6095H94.8644C94.421 17.0984 93.3617 18.2648 91.5387 18.2648C89.0999 18.2648 87.7696 16.081 87.7696 13.6738C87.7696 11.3162 89.0999 9.15718 91.5387 9.15718Z" }),
    React.createElement("path", { d: "M114.104 6.12965H109.448L103.832 12.3338V0H99.8653V21.3173H103.832V17.3467L105.999 15.0884L109.793 21.3173H114.227L108.66 12.2345L114.104 6.12965Z" }),
    React.createElement("path", { d: "M120.337 5.78218C115.927 5.78218 112.848 9.28129 112.848 13.7234C112.848 18.1904 115.656 21.6647 120.509 21.6647C124.007 21.6647 126.717 19.5801 127.407 16.5773H123.81C123.318 17.7189 122.332 18.5874 120.485 18.5874C118.169 18.5874 116.789 16.8751 116.666 14.592H127.629V13.6242C127.604 9.23166 125.116 5.78218 120.337 5.78218ZM116.765 11.8126C117.11 9.97615 118.391 8.58643 120.337 8.58643C122.308 8.58643 123.564 9.9017 123.81 11.8126H116.765Z" }),
    React.createElement("path", { d: "M136.842 5.95594C134.453 5.95594 133.098 7.42011 132.654 9.55432V6.12965H128.86V21.3173H132.827V14.5672C132.827 11.49 134.354 9.8273 137.039 9.8273C137.409 9.8273 137.704 9.8273 138 9.85212V6.08002C137.704 5.98076 137.261 5.95594 136.842 5.95594Z" }))); };
var Backer = function (props) { return (React.createElement("svg", { viewBox: "0 0 170 40", xmlns: "http://www.w3.org/2000/svg", className: "".concat(props.hoverAnimation ? modules_efc4e723$6.hoverAnimation : "") },
    React.createElement(BackerSignPath, null),
    React.createElement("path", { d: "M69.3146 19.7423C72.3384 18.6426 73.7993 16.512 73.7993 13.3849C73.7993 9.05496 70.6057 6.16835 65.1698 6.16835H52.3954V34.4846H65.0339C71.1153 34.4846 74.8864 31.4949 74.8864 26.512C74.8864 23.1787 72.848 20.4296 69.3146 19.7423ZM57.8313 10.8419H64.0486C66.8005 10.8419 68.2954 12.1477 68.2954 14.0722C68.2954 16.2715 66.6646 17.646 64.0146 17.646H57.8653V10.8419H57.8313ZM64.6601 29.8797H57.8653V22.2509H64.5922C67.6839 22.2509 69.3826 23.7629 69.3826 26.0653C69.3826 28.5739 67.48 29.8797 64.6601 29.8797Z" }),
    React.createElement("path", { d: "M85.8261 13.0068C80.8998 13.0068 77.4684 15.8247 76.8229 20.0171H82.021C82.2588 18.402 83.6178 17.1305 85.8261 17.1305C88.2383 17.1305 89.3934 18.4708 89.3934 20.567V21.323L84.3652 21.7354C78.9633 22.1477 76.1095 24.2783 76.1095 28.402C76.1095 32.4227 78.9633 35 83.346 35C86.4716 35 88.7479 33.4536 89.5633 31.6323V34.5189H94.8294V20.945C94.8294 16.1683 91.7037 13.0068 85.8261 13.0068ZM89.3934 26.4433C89.3934 29.4673 87.6268 31.2543 84.8409 31.2543C82.6325 31.2543 81.4095 30.0515 81.4095 28.2646C81.4095 26.2715 82.9723 25.5498 85.4524 25.3436L89.4274 25.0343V26.4433H89.3934Z" }),
    React.createElement("path", { d: "M106.924 17.6803C109.438 17.6803 110.933 19.2611 111.511 21.323H116.743C116.097 16.512 112.462 12.9724 106.856 12.9724C100.367 12.9724 96.2562 18.024 96.2562 23.969C96.2562 29.914 100.367 34.9656 106.856 34.9656C112.462 34.9656 116.097 31.4604 116.743 26.6151H111.511C110.899 28.6769 109.438 30.2921 106.924 30.2921C103.561 30.2921 101.726 27.268 101.726 23.9346C101.726 20.67 103.561 17.6803 106.924 17.6803Z" }),
    React.createElement("path", { d: "M138.045 13.488H131.624L123.877 22.0791V5H118.408V34.519H123.877V29.0207L126.867 25.8935L132.099 34.519H138.215L130.536 21.9416L138.045 13.488Z" }),
    React.createElement("path", { d: "M146.64 13.0068C140.559 13.0068 136.312 17.8522 136.312 24.0034C136.312 30.189 140.185 35 146.878 35C151.703 35 155.44 32.1134 156.391 27.9553H151.431C150.751 29.5361 149.392 30.7388 146.844 30.7388C143.651 30.7388 141.748 28.3677 141.578 25.2062H156.697V23.866C156.663 17.7835 153.231 13.0068 146.64 13.0068ZM141.714 21.3574C142.19 18.8144 143.956 16.89 146.64 16.89C149.358 16.89 151.091 18.7113 151.431 21.3574H141.714Z" }),
    React.createElement("path", { d: "M169.403 13.2474C166.108 13.2474 164.239 15.2749 163.628 18.2303V13.488H158.396V34.519H163.865V25.1719C163.865 20.9107 165.972 18.6083 169.675 18.6083C170.185 18.6083 170.592 18.6083 171 18.6426V13.4193C170.592 13.2818 169.981 13.2474 169.403 13.2474Z" }))); };
var BackerSign = function (props) { return (React.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", className: "".concat(props.hoverAnimation ? modules_efc4e723$6.hoverAnimation : "") },
    React.createElement(BackerSignPath, null))); };
var renderLogo = function (props) {
    switch (props.type) {
        case "default":
            return React.createElement(Backer, { hoverAnimation: props.hoverAnimation });
        case "foundation":
            return React.createElement(BackerFoundation, { hoverAnimation: props.hoverAnimation });
        case "sign":
            return React.createElement(BackerSign, { hoverAnimation: props.hoverAnimation });
    }
};
var Logo = React.forwardRef(function (props, ref) {
    return (React.createElement("div", { ref: ref, className: "".concat(props.className, " ").concat(modules_efc4e723$6.logo) }, renderLogo(props)));
});
Logo.displayName = "Logo";
Logo.defaultProps = {
    className: "",
    hoverAnimation: true,
    type: "default",
};

var css$5 = ".styles_module_sliderContainer__9993b592 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n}\n\n.styles_module_sliderWrap__9993b592 {\n  z-index: 1;\n  position: relative;\n  width: 100%;\n}\n.styles_module_sliderWrap__9993b592 div:first-child {\n  height: auto;\n}\n.styles_module_sliderWrap__9993b592::-webkit-scrollbar {\n  display: none;\n}\n.styles_module_sliderWrap__9993b592::after, .styles_module_sliderWrap__9993b592::before {\n  pointer-events: none;\n  z-index: 2;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 40px;\n  height: 100%;\n}\n.styles_module_sliderWrap__9993b592::after {\n  left: 0;\n  background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n}\n.styles_module_sliderWrap__9993b592::before {\n  right: 0;\n  background: linear-gradient(to left, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n}\n\n.styles_module_slider__9993b592 {\n  width: 100%;\n  padding: 4px 0;\n  position: relative;\n  height: 100%;\n}\n.styles_module_slider__9993b592::-webkit-scrollbar {\n  display: none;\n}\n\n.styles_module_sliderCards__9993b592 {\n  display: flex;\n  flex-wrap: nowrap;\n  width: fit-content;\n  display: grid;\n  grid-auto-flow: column;\n}\n\n.styles_module_itemWrap__9993b592 {\n  display: flex;\n  overflow: visible;\n  scroll-snap-align: center;\n  backface-visibility: hidden;\n  justify-content: center;\n  align-items: center;\n}\n\n.styles_module_item__9993b592 {\n  cursor: pointer;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--color-main-200);\n  border-radius: 15px;\n  width: 76px;\n  height: 76px;\n  color: var(--color-main-200);\n  background-color: var(--color-main-0);\n}\n.styles_module_item__9993b592 span {\n  pointer-events: none;\n  user-select: none;\n}\n\n.styles_module_active__9993b592 {\n  background-color: var(--color-accent-500);\n  border: 1px solid transparent;\n  transform: scaleY(1.2);\n  transition: all 0.1s ease;\n}\n.styles_module_active__9993b592 span {\n  color: var(--color-main-0);\n}\n\n.styles_module_itemCaption__9993b592 {\n  user-select: none;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.styles_module_itemCaption__9993b592 span {\n  font-weight: 200;\n  font-size: 17px;\n}\n\n.styles_module_arrowButton__9993b592 {\n  z-index: 2;\n  user-select: none;\n  position: absolute;\n  margin-top: 36px;\n}\n\n.styles_module_arrowLeft__9993b592 {\n  left: -60px;\n}\n\n.styles_module_rightArrow__9993b592 {\n  right: -60px;\n}";
var modules_efc4e723$5 = {"sliderContainer":"styles_module_sliderContainer__9993b592","sliderWrap":"styles_module_sliderWrap__9993b592","slider":"styles_module_slider__9993b592","sliderCards":"styles_module_sliderCards__9993b592","itemWrap":"styles_module_itemWrap__9993b592","item":"styles_module_item__9993b592","active":"styles_module_active__9993b592","itemCaption":"styles_module_itemCaption__9993b592","arrowButton":"styles_module_arrowButton__9993b592","arrowLeft":"styles_module_arrowLeft__9993b592","rightArrow":"styles_module_rightArrow__9993b592"};
n(css$5,{});

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config$1 = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum$2 = 1e8,
    _tinyNum$1 = 1 / _bigNum$2,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString$1 = function _isString(value) {
  return typeof value === "string";
},
    _isFunction$1 = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber$1 = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject$1 = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction$1(value) || _isString$1(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray$1 = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win$1,
    _coreInitted$2,
    _doc$1,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap$2;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc$1 = function _emptyFunc() {
  return 0;
},
    _reservedProps$1 = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject$1(target) || _isFunction$1(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache$2 = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round$2 = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject$1(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray$1(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum$1) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp$1(0, child.totalDuration(), t) - child._tTime > _tinyNum$1) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum$1; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber$1(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker$1.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp$1(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum$1 || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum$1 : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc$1,
  totalDuration: _emptyFunc$1
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum$2 ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString$1(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray$1(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber$1(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp$1 = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp$1(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject$1(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject$1(value[0])) && !value.nodeType && value !== _win$1;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$1).querySelectorAll(value), 0) : _isArray$1(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$1.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction$1(v)) {
    return v;
  }

  var vars = _isObject$1(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase$1(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString$1(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$2])[1];

      if (!wrapAt) {
        max = -_bigNum$2;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum$2 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum$2;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray$1(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject$1(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum$2;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber$1(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum$2,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray$1(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray$1(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray$1(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray$1(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString$1(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray$1(start) && !_isArray$1(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray$1(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum$2,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction$1(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc$1,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps$1[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap$2, Plugin, PropTween$1);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber$1(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker$1 = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted$2 && _windowExists$1()) {
          _win$1 = _coreInitted$2 = window;
          _doc$1 = _win$1.document || {};
          _globals.gsap = gsap$2;
          (_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap$2.version);

          _install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});

          _raf = _win$1.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win$1.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc$1;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum$1; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker$1.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase$1 = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum$1;
    return function (p) {
      return ((p2 * _clamp$1(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker$1.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum$1 || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum$1 ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum$1 ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp$1(-this._delay, this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum$1 && (this._tTime -= _tinyNum$1)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum$1 : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum$1;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum$1);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum$1,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum$1); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum$1 : _tinyNum$1); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum$1)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber$1(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray$1(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString$1(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction$1(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum$2;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString$1(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction$1(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker$1.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc$1, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber$1(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum$1,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum$1);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum$2,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker$1.frame;
    }

    if (_ticker$1.frame >= _nextGCFrame) {
      _nextGCFrame += _config$1.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config$1.autoSleep && _ticker$1._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker$1.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween$1(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction$1(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString$1(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween$1(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config$1.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject$1(vars) || vars.style && vars.nodeType || _isArray$1(vars) || _isTypedArray(vars)) {
    return _isString$1(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween$1(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase$1(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase$1(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache$2(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps$1);

    if (prevStartAt) {
      _removeFromParent(prevStartAt.render(-1, true));

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum$1); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween$1(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum$2, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property) {
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    pt = ptCache[i];
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    pt.e && (pt.e = _round$2(value) + getUnit(pt.e)); // mainly for CSSPlugin (end value)

    pt.b && (pt.b = pt.s + getUnit(pt.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache$2(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray$1(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray$1(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config$1.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject$1(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase$1(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray$1(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum$1; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum$1 && totalTime >= 0 ? tDur : totalTime < _tinyNum$1 ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum$1 : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker$1.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString$1(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween$1 = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps$1[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config$1.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString$1(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache$2(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap$2.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache$2(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap$2.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase$1(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config$1, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject$1(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase$1(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase$1(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker$1,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween$1,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache$2,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker$1.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString$1(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap$2 = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap$2.version = "3.10.4";
_coreReady = 1;
_windowExists$1() && _wake();
_easeMap.Power0;
    _easeMap.Power1;
    _easeMap.Power2;
    _easeMap.Power3;
    _easeMap.Power4;
    _easeMap.Linear;
    _easeMap.Quad;
    _easeMap.Cubic;
    _easeMap.Quart;
    _easeMap.Quint;
    _easeMap.Strong;
    _easeMap.Elastic;
    _easeMap.Back;
    _easeMap.SteppedEase;
    _easeMap.Bounce;
    _easeMap.Sine;
    _easeMap.Expo;
    _easeMap.Circ;

/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum$1 = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore$2 = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween$1(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round$2(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker$1.time) {
    return _round$2(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = _getCache$2(parent);
      cache.time = _ticker$1.time;
      cache.width = parent[measureProperty];
    }
  }

  return _round$2(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore$2();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new PropTween$1(this._pt, target.style, prop, 0, 1, _renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  _colorStringFilter(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _config$1.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween$1(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round$2);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || _getCache$2(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = _round$2(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round$2(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round$2(scaleX);
  cache.scaleY = _round$2(scaleY);
  cache.rotation = _round$2(rotation) + deg;
  cache.rotationX = _round$2(rotationX) + deg;
  cache.rotationY = _round$2(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config$1.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = getUnit(start);
  return _round$2(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = _round$2(a11);
    a21 = _round$2(a21);
    a12 = _round$2(a12);
    a22 = _round$2(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round$2(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round$2(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = _round$2(tx + xPercent / 100 * temp.width);
    ty = _round$2(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = _isString$1(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new PropTween$1(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween$1(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


_forEachName("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore$2,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore$2();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;

        if (!_colorExp.test(startValue)) {
          // colors don't have units
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || (startValue += _config$1.units[p] || getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween$1(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new PropTween$1(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = getUnit(endValue) || (p in _config$1.units ? _config$1.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween$1(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            _missingPlugin(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        props.push(p);
      }
    }

    hasPriority && _sortPropTweensByPriority(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
gsap$2.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  _forEachName(rotation, function (name) {
    _config$1.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  _forEachName(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _config$1.units[name] = "px";
});

gsap$2.registerPlugin(CSSPlugin);

var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
    // to protect from tree shaking
gsapWithCSS.core.Tween;

var Draggable = {exports: {}};

(function (module, exports) {
	(function (global, factory) {
	  factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  var _doc,
	      _win,
	      _docElement,
	      _body,
	      _divContainer,
	      _svgContainer,
	      _identityMatrix,
	      _gEl,
	      _transformProp = "transform",
	      _transformOriginProp = _transformProp + "Origin",
	      _hasOffsetBug,
	      _setDoc = function _setDoc(element) {
	    var doc = element.ownerDocument || element;

	    if (!(_transformProp in element.style) && "msTransform" in element.style) {
	      _transformProp = "msTransform";
	      _transformOriginProp = _transformProp + "Origin";
	    }

	    while (doc.parentNode && (doc = doc.parentNode)) {}

	    _win = window;
	    _identityMatrix = new Matrix2D();

	    if (doc) {
	      _doc = doc;
	      _docElement = doc.documentElement;
	      _body = doc.body;
	      _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
	      _gEl.style.transform = "none";
	      var d1 = doc.createElement("div"),
	          d2 = doc.createElement("div");

	      _body.appendChild(d1);

	      d1.appendChild(d2);
	      d1.style.position = "static";
	      d1.style[_transformProp] = "translate3d(0,0,1px)";
	      _hasOffsetBug = d2.offsetParent !== d1;

	      _body.removeChild(d1);
	    }

	    return doc;
	  },
	      _forceNonZeroScale = function _forceNonZeroScale(e) {
	    var a, cache;

	    while (e && e !== _body) {
	      cache = e._gsap;
	      cache && cache.uncache && cache.get(e, "x");

	      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
	        cache.scaleX = cache.scaleY = 1e-4;
	        cache.renderTransform(1, cache);
	        a ? a.push(cache) : a = [cache];
	      }

	      e = e.parentNode;
	    }

	    return a;
	  },
	      _svgTemps = [],
	      _divTemps = [],
	      _getDocScrollTop = function _getDocScrollTop() {
	    return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
	  },
	      _getDocScrollLeft = function _getDocScrollLeft() {
	    return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
	  },
	      _svgOwner = function _svgOwner(element) {
	    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
	  },
	      _isFixed = function _isFixed(element) {
	    if (_win.getComputedStyle(element).position === "fixed") {
	      return true;
	    }

	    element = element.parentNode;

	    if (element && element.nodeType === 1) {
	      return _isFixed(element);
	    }
	  },
	      _createSibling = function _createSibling(element, i) {
	    if (element.parentNode && (_doc || _setDoc(element))) {
	      var svg = _svgOwner(element),
	          ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
	          type = svg ? i ? "rect" : "g" : "div",
	          x = i !== 2 ? 0 : 100,
	          y = i === 3 ? 100 : 0,
	          css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
	          e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

	      if (i) {
	        if (!svg) {
	          if (!_divContainer) {
	            _divContainer = _createSibling(element);
	            _divContainer.style.cssText = css;
	          }

	          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

	          _divContainer.appendChild(e);
	        } else {
	          _svgContainer || (_svgContainer = _createSibling(element));
	          e.setAttribute("width", 0.01);
	          e.setAttribute("height", 0.01);
	          e.setAttribute("transform", "translate(" + x + "," + y + ")");

	          _svgContainer.appendChild(e);
	        }
	      }

	      return e;
	    }

	    throw "Need document and parent.";
	  },
	      _consolidate = function _consolidate(m) {
	    var c = new Matrix2D(),
	        i = 0;

	    for (; i < m.numberOfItems; i++) {
	      c.multiply(m.getItem(i).matrix);
	    }

	    return c;
	  },
	      _getCTM = function _getCTM(svg) {
	    var m = svg.getCTM(),
	        transform;

	    if (!m) {
	      transform = svg.style[_transformProp];
	      svg.style[_transformProp] = "none";
	      svg.appendChild(_gEl);
	      m = _gEl.getCTM();
	      svg.removeChild(_gEl);
	      transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
	    }

	    return m || _identityMatrix.clone();
	  },
	      _placeSiblings = function _placeSiblings(element, adjustGOffset) {
	    var svg = _svgOwner(element),
	        isRootSVG = element === svg,
	        siblings = svg ? _svgTemps : _divTemps,
	        parent = element.parentNode,
	        container,
	        m,
	        b,
	        x,
	        y,
	        cs;

	    if (element === _win) {
	      return element;
	    }

	    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
	    container = svg ? _svgContainer : _divContainer;

	    if (svg) {
	      if (isRootSVG) {
	        b = _getCTM(element);
	        x = -b.e / b.a;
	        y = -b.f / b.d;
	        m = _identityMatrix;
	      } else if (element.getBBox) {
	        b = element.getBBox();
	        m = element.transform ? element.transform.baseVal : {};
	        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
	        x = m.a * b.x + m.c * b.y;
	        y = m.b * b.x + m.d * b.y;
	      } else {
	        m = new Matrix2D();
	        x = y = 0;
	      }

	      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
	        x = y = 0;
	      }

	      (isRootSVG ? svg : parent).appendChild(container);
	      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
	    } else {
	      x = y = 0;

	      if (_hasOffsetBug) {
	        m = element.offsetParent;
	        b = element;

	        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
	          if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
	            x = b.offsetLeft;
	            y = b.offsetTop;
	            b = 0;
	          }
	        }
	      }

	      cs = _win.getComputedStyle(element);

	      if (cs.position !== "absolute" && cs.position !== "fixed") {
	        m = element.offsetParent;

	        while (parent && parent !== m) {
	          x += parent.scrollLeft || 0;
	          y += parent.scrollTop || 0;
	          parent = parent.parentNode;
	        }
	      }

	      b = container.style;
	      b.top = element.offsetTop - y + "px";
	      b.left = element.offsetLeft - x + "px";
	      b[_transformProp] = cs[_transformProp];
	      b[_transformOriginProp] = cs[_transformOriginProp];
	      b.position = cs.position === "fixed" ? "fixed" : "absolute";
	      element.parentNode.appendChild(container);
	    }

	    return container;
	  },
	      _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
	    m.a = a;
	    m.b = b;
	    m.c = c;
	    m.d = d;
	    m.e = e;
	    m.f = f;
	    return m;
	  };

	  var Matrix2D = function () {
	    function Matrix2D(a, b, c, d, e, f) {
	      if (a === void 0) {
	        a = 1;
	      }

	      if (b === void 0) {
	        b = 0;
	      }

	      if (c === void 0) {
	        c = 0;
	      }

	      if (d === void 0) {
	        d = 1;
	      }

	      if (e === void 0) {
	        e = 0;
	      }

	      if (f === void 0) {
	        f = 0;
	      }

	      _setMatrix(this, a, b, c, d, e, f);
	    }

	    var _proto = Matrix2D.prototype;

	    _proto.inverse = function inverse() {
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f,
	          determinant = a * d - b * c || 1e-10;
	      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
	    };

	    _proto.multiply = function multiply(matrix) {
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f,
	          a2 = matrix.a,
	          b2 = matrix.c,
	          c2 = matrix.b,
	          d2 = matrix.d,
	          e2 = matrix.e,
	          f2 = matrix.f;
	      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
	    };

	    _proto.clone = function clone() {
	      return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
	    };

	    _proto.equals = function equals(matrix) {
	      var a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
	    };

	    _proto.apply = function apply(point, decoratee) {
	      if (decoratee === void 0) {
	        decoratee = {};
	      }

	      var x = point.x,
	          y = point.y,
	          a = this.a,
	          b = this.b,
	          c = this.c,
	          d = this.d,
	          e = this.e,
	          f = this.f;
	      decoratee.x = x * a + y * c + e || 0;
	      decoratee.y = x * b + y * d + f || 0;
	      return decoratee;
	    };

	    return Matrix2D;
	  }();
	  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
	    if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
	      return new Matrix2D();
	    }

	    var zeroScales = _forceNonZeroScale(element),
	        svg = _svgOwner(element),
	        temps = svg ? _svgTemps : _divTemps,
	        container = _placeSiblings(element, adjustGOffset),
	        b1 = temps[0].getBoundingClientRect(),
	        b2 = temps[1].getBoundingClientRect(),
	        b3 = temps[2].getBoundingClientRect(),
	        parent = container.parentNode,
	        isFixed = !includeScrollInFixed && _isFixed(element),
	        m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

	    parent.removeChild(container);

	    if (zeroScales) {
	      b1 = zeroScales.length;

	      while (b1--) {
	        b2 = zeroScales[b1];
	        b2.scaleX = b2.scaleY = 0;
	        b2.renderTransform(1, b2);
	      }
	    }

	    return inverse ? m.inverse() : m;
	  }

	  var gsap,
	      _win$1,
	      _doc$1,
	      _docElement$1,
	      _body$1,
	      _tempDiv,
	      _placeholderDiv,
	      _coreInitted,
	      _checkPrefix,
	      _toArray,
	      _supportsPassive,
	      _isTouchDevice,
	      _touchEventLookup,
	      _dragCount,
	      _isMultiTouching,
	      _isAndroid,
	      InertiaPlugin,
	      _defaultCursor,
	      _supportsPointer,
	      _windowExists = function _windowExists() {
	    return typeof window !== "undefined";
	  },
	      _getGSAP = function _getGSAP() {
	    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	  },
	      _isFunction = function _isFunction(value) {
	    return typeof value === "function";
	  },
	      _isObject = function _isObject(value) {
	    return typeof value === "object";
	  },
	      _isUndefined = function _isUndefined(value) {
	    return typeof value === "undefined";
	  },
	      _emptyFunc = function _emptyFunc() {
	    return false;
	  },
	      _transformProp$1 = "transform",
	      _transformOriginProp$1 = "transformOrigin",
	      _round = function _round(value) {
	    return Math.round(value * 10000) / 10000;
	  },
	      _isArray = Array.isArray,
	      _createElement = function _createElement(type, ns) {
	    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
	    return e.style ? e : _doc$1.createElement(type);
	  },
	      _RAD2DEG = 180 / Math.PI,
	      _bigNum = 1e20,
	      _identityMatrix$1 = new Matrix2D(),
	      _getTime = Date.now || function () {
	    return new Date().getTime();
	  },
	      _renderQueue = [],
	      _lookup = {},
	      _lookupCount = 0,
	      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
	      _lastDragTime = 0,
	      _temp1 = {},
	      _windowProxy = {},
	      _copy = function _copy(obj, factor) {
	    var copy = {},
	        p;

	    for (p in obj) {
	      copy[p] = factor ? obj[p] * factor : obj[p];
	    }

	    return copy;
	  },
	      _extend = function _extend(obj, defaults) {
	    for (var p in defaults) {
	      if (!(p in obj)) {
	        obj[p] = defaults[p];
	      }
	    }

	    return obj;
	  },
	      _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
	    var i = elements.length,
	        children;

	    while (i--) {
	      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
	      children = elements[i].children;
	      children && children.length && _setTouchActionForAllDescendants(children, value);
	    }
	  },
	      _renderQueueTick = function _renderQueueTick() {
	    return _renderQueue.forEach(function (func) {
	      return func();
	    });
	  },
	      _addToRenderQueue = function _addToRenderQueue(func) {
	    _renderQueue.push(func);

	    if (_renderQueue.length === 1) {
	      gsap.ticker.add(_renderQueueTick);
	    }
	  },
	      _renderQueueTimeout = function _renderQueueTimeout() {
	    return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
	  },
	      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
	    var i = _renderQueue.length;

	    while (i--) {
	      if (_renderQueue[i] === func) {
	        _renderQueue.splice(i, 1);
	      }
	    }

	    gsap.to(_renderQueueTimeout, {
	      overwrite: true,
	      delay: 15,
	      duration: 0,
	      onComplete: _renderQueueTimeout,
	      data: "_draggable"
	    });
	  },
	      _setDefaults = function _setDefaults(obj, defaults) {
	    for (var p in defaults) {
	      if (!(p in obj)) {
	        obj[p] = defaults[p];
	      }
	    }

	    return obj;
	  },
	      _addListener = function _addListener(element, type, func, capture) {
	    if (element.addEventListener) {
	      var touchType = _touchEventLookup[type];
	      capture = capture || (_supportsPassive ? {
	        passive: false
	      } : null);
	      element.addEventListener(touchType || type, func, capture);
	      touchType && type !== touchType && element.addEventListener(type, func, capture);
	    }
	  },
	      _removeListener = function _removeListener(element, type, func) {
	    if (element.removeEventListener) {
	      var touchType = _touchEventLookup[type];
	      element.removeEventListener(touchType || type, func);
	      touchType && type !== touchType && element.removeEventListener(type, func);
	    }
	  },
	      _preventDefault = function _preventDefault(event) {
	    event.preventDefault && event.preventDefault();
	    event.preventManipulation && event.preventManipulation();
	  },
	      _hasTouchID = function _hasTouchID(list, ID) {
	    var i = list.length;

	    while (i--) {
	      if (list[i].identifier === ID) {
	        return true;
	      }
	    }
	  },
	      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
	    _isMultiTouching = event.touches && _dragCount < event.touches.length;

	    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
	  },
	      _onMultiTouchDocument = function _onMultiTouchDocument(event) {
	    _isMultiTouching = event.touches && _dragCount < event.touches.length;

	    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
	  },
	      _getDocScrollTop$1 = function _getDocScrollTop(doc) {
	    return _win$1.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
	  },
	      _getDocScrollLeft$1 = function _getDocScrollLeft(doc) {
	    return _win$1.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
	  },
	      _addScrollListener = function _addScrollListener(e, callback) {
	    _addListener(e, "scroll", callback);

	    if (!_isRoot(e.parentNode)) {
	      _addScrollListener(e.parentNode, callback);
	    }
	  },
	      _removeScrollListener = function _removeScrollListener(e, callback) {
	    _removeListener(e, "scroll", callback);

	    if (!_isRoot(e.parentNode)) {
	      _removeScrollListener(e.parentNode, callback);
	    }
	  },
	      _isRoot = function _isRoot(e) {
	    return !!(!e || e === _docElement$1 || e.nodeType === 9 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
	  },
	      _getMaxScroll = function _getMaxScroll(element, axis) {
	    var dim = axis === "x" ? "Width" : "Height",
	        scroll = "scroll" + dim,
	        client = "client" + dim;
	    return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
	  },
	      _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
	    var x = _getMaxScroll(e, "x"),
	        y = _getMaxScroll(e, "y");

	    if (_isRoot(e)) {
	      e = _windowProxy;
	    } else {
	      _recordMaxScrolls(e.parentNode, skipCurrent);
	    }

	    e._gsMaxScrollX = x;
	    e._gsMaxScrollY = y;

	    if (!skipCurrent) {
	      e._gsScrollX = e.scrollLeft || 0;
	      e._gsScrollY = e.scrollTop || 0;
	    }
	  },
	      _setStyle = function _setStyle(element, property, value) {
	    var style = element.style;

	    if (!style) {
	      return;
	    }

	    if (_isUndefined(style[property])) {
	      property = _checkPrefix(property, element) || property;
	    }

	    if (value == null) {
	      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
	    } else {
	      style[property] = value;
	    }
	  },
	      _getComputedStyle = function _getComputedStyle(element) {
	    return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
	  },
	      _tempRect = {},
	      _parseRect = function _parseRect(e) {
	    if (e === _win$1) {
	      _tempRect.left = _tempRect.top = 0;
	      _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
	      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
	      return _tempRect;
	    }

	    var doc = e.ownerDocument || _doc$1,
	        r = !_isUndefined(e.pageX) ? {
	      left: e.pageX - _getDocScrollLeft$1(doc),
	      top: e.pageY - _getDocScrollTop$1(doc),
	      right: e.pageX - _getDocScrollLeft$1(doc) + 1,
	      bottom: e.pageY - _getDocScrollTop$1(doc) + 1
	    } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

	    if (_isUndefined(r.right) && !_isUndefined(r.width)) {
	      r.right = r.left + r.width;
	      r.bottom = r.top + r.height;
	    } else if (_isUndefined(r.width)) {
	      r = {
	        width: r.right - r.left,
	        height: r.bottom - r.top,
	        right: r.right,
	        left: r.left,
	        bottom: r.bottom,
	        top: r.top
	      };
	    }

	    return r;
	  },
	      _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
	    var vars = target.vars,
	        callback = vars[callbackName],
	        listeners = target._listeners[type],
	        result;

	    if (_isFunction(callback)) {
	      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
	    }

	    if (listeners && target.dispatchEvent(type) === false) {
	      result = false;
	    }

	    return result;
	  },
	      _getBounds = function _getBounds(target, context) {
	    var e = _toArray(target)[0],
	        top,
	        left,
	        offset;

	    if (!e.nodeType && e !== _win$1) {
	      if (!_isUndefined(target.left)) {
	        offset = {
	          x: 0,
	          y: 0
	        };
	        return {
	          left: target.left - offset.x,
	          top: target.top - offset.y,
	          width: target.width,
	          height: target.height
	        };
	      }

	      left = target.min || target.minX || target.minRotation || 0;
	      top = target.min || target.minY || 0;
	      return {
	        left: left,
	        top: top,
	        width: (target.max || target.maxX || target.maxRotation || 0) - left,
	        height: (target.max || target.maxY || 0) - top
	      };
	    }

	    return _getElementBounds(e, context);
	  },
	      _point1 = {},
	      _getElementBounds = function _getElementBounds(element, context) {
	    context = _toArray(context)[0];
	    var isSVG = element.getBBox && element.ownerSVGElement,
	        doc = element.ownerDocument || _doc$1,
	        left,
	        right,
	        top,
	        bottom,
	        matrix,
	        p1,
	        p2,
	        p3,
	        p4,
	        bbox,
	        width,
	        height,
	        cs,
	        contextParent;

	    if (element === _win$1) {
	      top = _getDocScrollTop$1(doc);
	      left = _getDocScrollLeft$1(doc);
	      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
	      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
	    } else if (context === _win$1 || _isUndefined(context)) {
	      return element.getBoundingClientRect();
	    } else {
	      left = top = 0;

	      if (isSVG) {
	        bbox = element.getBBox();
	        width = bbox.width;
	        height = bbox.height;
	      } else {
	        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
	          left = bbox.x || 0;
	          top = bbox.y || 0;
	          width = bbox.width;
	          height = bbox.height;
	        }

	        if (!width) {
	          cs = _getComputedStyle(element);
	          bbox = cs.boxSizing === "border-box";
	          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
	          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
	        }
	      }

	      right = width;
	      bottom = height;
	    }

	    if (element === context) {
	      return {
	        left: left,
	        top: top,
	        width: right - left,
	        height: bottom - top
	      };
	    }

	    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
	    p1 = matrix.apply({
	      x: left,
	      y: top
	    });
	    p2 = matrix.apply({
	      x: right,
	      y: top
	    });
	    p3 = matrix.apply({
	      x: right,
	      y: bottom
	    });
	    p4 = matrix.apply({
	      x: left,
	      y: bottom
	    });
	    left = Math.min(p1.x, p2.x, p3.x, p4.x);
	    top = Math.min(p1.y, p2.y, p3.y, p4.y);
	    contextParent = context.parentNode || {};
	    return {
	      left: left + (contextParent.scrollLeft || 0),
	      top: top + (contextParent.scrollTop || 0),
	      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
	      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
	    };
	  },
	      _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
	    var vars = {},
	        a,
	        i,
	        l;

	    if (snap) {
	      if (factor !== 1 && snap instanceof Array) {
	        vars.end = a = [];
	        l = snap.length;

	        if (_isObject(snap[0])) {
	          for (i = 0; i < l; i++) {
	            a[i] = _copy(snap[i], factor);
	          }
	        } else {
	          for (i = 0; i < l; i++) {
	            a[i] = snap[i] * factor;
	          }
	        }

	        max += 1.1;
	        min -= 1.1;
	      } else if (_isFunction(snap)) {
	        vars.end = function (value) {
	          var result = snap.call(draggable, value),
	              copy,
	              p;

	          if (factor !== 1) {
	            if (_isObject(result)) {
	              copy = {};

	              for (p in result) {
	                copy[p] = result[p] * factor;
	              }

	              result = copy;
	            } else {
	              result *= factor;
	            }
	          }

	          return result;
	        };
	      } else {
	        vars.end = snap;
	      }
	    }

	    if (max || max === 0) {
	      vars.max = max;
	    }

	    if (min || min === 0) {
	      vars.min = min;
	    }

	    if (forceZeroVelocity) {
	      vars.velocity = 0;
	    }

	    return vars;
	  },
	      _isClickable = function _isClickable(element) {
	    var data;
	    return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
	  },
	      _setSelectable = function _setSelectable(elements, selectable) {
	    var i = elements.length,
	        e;

	    while (i--) {
	      e = elements[i];
	      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
	      gsap.set(e, {
	        lazy: true,
	        userSelect: selectable ? "text" : "none"
	      });
	    }
	  },
	      _isFixed$1 = function _isFixed(element) {
	    if (_getComputedStyle(element).position === "fixed") {
	      return true;
	    }

	    element = element.parentNode;

	    if (element && element.nodeType === 1) {
	      return _isFixed(element);
	    }
	  },
	      _supports3D,
	      _addPaddingBR,
	      ScrollProxy = function ScrollProxy(element, vars) {
	    element = gsap.utils.toArray(element)[0];
	    vars = vars || {};
	    var content = document.createElement("div"),
	        style = content.style,
	        node = element.firstChild,
	        offsetTop = 0,
	        offsetLeft = 0,
	        prevTop = element.scrollTop,
	        prevLeft = element.scrollLeft,
	        scrollWidth = element.scrollWidth,
	        scrollHeight = element.scrollHeight,
	        extraPadRight = 0,
	        maxLeft = 0,
	        maxTop = 0,
	        elementWidth,
	        elementHeight,
	        contentHeight,
	        nextNode,
	        transformStart,
	        transformEnd;

	    if (_supports3D && vars.force3D !== false) {
	      transformStart = "translate3d(";
	      transformEnd = "px,0px)";
	    } else if (_transformProp$1) {
	      transformStart = "translate(";
	      transformEnd = "px)";
	    }

	    this.scrollTop = function (value, force) {
	      if (!arguments.length) {
	        return -this.top();
	      }

	      this.top(-value, force);
	    };

	    this.scrollLeft = function (value, force) {
	      if (!arguments.length) {
	        return -this.left();
	      }

	      this.left(-value, force);
	    };

	    this.left = function (value, force) {
	      if (!arguments.length) {
	        return -(element.scrollLeft + offsetLeft);
	      }

	      var dif = element.scrollLeft - prevLeft,
	          oldOffset = offsetLeft;

	      if ((dif > 2 || dif < -2) && !force) {
	        prevLeft = element.scrollLeft;
	        gsap.killTweensOf(this, {
	          left: 1,
	          scrollLeft: 1
	        });
	        this.left(-prevLeft);

	        if (vars.onKill) {
	          vars.onKill();
	        }

	        return;
	      }

	      value = -value;

	      if (value < 0) {
	        offsetLeft = value - 0.5 | 0;
	        value = 0;
	      } else if (value > maxLeft) {
	        offsetLeft = value - maxLeft | 0;
	        value = maxLeft;
	      } else {
	        offsetLeft = 0;
	      }

	      if (offsetLeft || oldOffset) {
	        if (!this._skip) {
	          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
	        }

	        if (offsetLeft + extraPadRight >= 0) {
	          style.paddingRight = offsetLeft + extraPadRight + "px";
	        }
	      }

	      element.scrollLeft = value | 0;
	      prevLeft = element.scrollLeft;
	    };

	    this.top = function (value, force) {
	      if (!arguments.length) {
	        return -(element.scrollTop + offsetTop);
	      }

	      var dif = element.scrollTop - prevTop,
	          oldOffset = offsetTop;

	      if ((dif > 2 || dif < -2) && !force) {
	        prevTop = element.scrollTop;
	        gsap.killTweensOf(this, {
	          top: 1,
	          scrollTop: 1
	        });
	        this.top(-prevTop);

	        if (vars.onKill) {
	          vars.onKill();
	        }

	        return;
	      }

	      value = -value;

	      if (value < 0) {
	        offsetTop = value - 0.5 | 0;
	        value = 0;
	      } else if (value > maxTop) {
	        offsetTop = value - maxTop | 0;
	        value = maxTop;
	      } else {
	        offsetTop = 0;
	      }

	      if (offsetTop || oldOffset) {
	        if (!this._skip) {
	          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
	        }
	      }

	      element.scrollTop = value | 0;
	      prevTop = element.scrollTop;
	    };

	    this.maxScrollTop = function () {
	      return maxTop;
	    };

	    this.maxScrollLeft = function () {
	      return maxLeft;
	    };

	    this.disable = function () {
	      node = content.firstChild;

	      while (node) {
	        nextNode = node.nextSibling;
	        element.appendChild(node);
	        node = nextNode;
	      }

	      if (element === content.parentNode) {
	        element.removeChild(content);
	      }
	    };

	    this.enable = function () {
	      node = element.firstChild;

	      if (node === content) {
	        return;
	      }

	      while (node) {
	        nextNode = node.nextSibling;
	        content.appendChild(node);
	        node = nextNode;
	      }

	      element.appendChild(content);
	      this.calibrate();
	    };

	    this.calibrate = function (force) {
	      var widthMatches = element.clientWidth === elementWidth,
	          cs,
	          x,
	          y;
	      prevTop = element.scrollTop;
	      prevLeft = element.scrollLeft;

	      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
	        return;
	      }

	      if (offsetTop || offsetLeft) {
	        x = this.left();
	        y = this.top();
	        this.left(-element.scrollLeft);
	        this.top(-element.scrollTop);
	      }

	      cs = _getComputedStyle(element);

	      if (!widthMatches || force) {
	        style.display = "block";
	        style.width = "auto";
	        style.paddingRight = "0px";
	        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);

	        if (extraPadRight) {
	          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
	        }
	      }

	      style.display = "inline-block";
	      style.position = "relative";
	      style.overflow = "visible";
	      style.verticalAlign = "top";
	      style.boxSizing = "content-box";
	      style.width = "100%";
	      style.paddingRight = extraPadRight + "px";

	      if (_addPaddingBR) {
	        style.paddingBottom = cs.paddingBottom;
	      }

	      elementWidth = element.clientWidth;
	      elementHeight = element.clientHeight;
	      scrollWidth = element.scrollWidth;
	      scrollHeight = element.scrollHeight;
	      maxLeft = element.scrollWidth - elementWidth;
	      maxTop = element.scrollHeight - elementHeight;
	      contentHeight = content.offsetHeight;
	      style.display = "block";

	      if (x || y) {
	        this.left(x);
	        this.top(y);
	      }
	    };

	    this.content = content;
	    this.element = element;
	    this._skip = false;
	    this.enable();
	  },
	      _initCore = function _initCore(required) {
	    if (_windowExists() && document.body) {
	      var nav = window && window.navigator;
	      _win$1 = window;
	      _doc$1 = document;
	      _docElement$1 = _doc$1.documentElement;
	      _body$1 = _doc$1.body;
	      _tempDiv = _createElement("div");
	      _supportsPointer = !!window.PointerEvent;
	      _placeholderDiv = _createElement("div");
	      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
	      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
	      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
	      _isTouchDevice = "ontouchstart" in _docElement$1 && "orientation" in _win$1 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);

	      _addPaddingBR = function () {
	        var div = _createElement("div"),
	            child = _createElement("div"),
	            childStyle = child.style,
	            parent = _body$1,
	            val;

	        childStyle.display = "inline-block";
	        childStyle.position = "relative";
	        div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
	        div.appendChild(child);
	        parent.appendChild(div);
	        val = child.offsetHeight + 18 > div.scrollHeight;
	        parent.removeChild(div);
	        return val;
	      }();

	      _touchEventLookup = function (types) {
	        var standard = types.split(","),
	            converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
	            obj = {},
	            i = 4;

	        while (--i > -1) {
	          obj[standard[i]] = converted[i];
	          obj[converted[i]] = standard[i];
	        }

	        try {
	          _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
	            get: function get() {
	              _supportsPassive = 1;
	            }
	          }));
	        } catch (e) {}

	        return obj;
	      }("touchstart,touchmove,touchend,touchcancel");

	      _addListener(_doc$1, "touchcancel", _emptyFunc);

	      _addListener(_win$1, "touchmove", _emptyFunc);

	      _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);

	      _addListener(_doc$1, "contextmenu", function () {
	        for (var p in _lookup) {
	          if (_lookup[p].isPressed) {
	            _lookup[p].endDrag();
	          }
	        }
	      });

	      gsap = _coreInitted = _getGSAP();
	    }

	    if (gsap) {
	      InertiaPlugin = gsap.plugins.inertia;
	      _checkPrefix = gsap.utils.checkPrefix;
	      _transformProp$1 = _checkPrefix(_transformProp$1);
	      _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
	      _toArray = gsap.utils.toArray;
	      _supports3D = !!_checkPrefix("perspective");
	    } else if (required) {
	      console.warn("Please gsap.registerPlugin(Draggable)");
	    }
	  };

	  var EventDispatcher = function () {
	    function EventDispatcher(target) {
	      this._listeners = {};
	      this.target = target || this;
	    }

	    var _proto = EventDispatcher.prototype;

	    _proto.addEventListener = function addEventListener(type, callback) {
	      var list = this._listeners[type] || (this._listeners[type] = []);

	      if (!~list.indexOf(callback)) {
	        list.push(callback);
	      }
	    };

	    _proto.removeEventListener = function removeEventListener(type, callback) {
	      var list = this._listeners[type],
	          i = list && list.indexOf(callback) || -1;
	      i > -1 && list.splice(i, 1);
	    };

	    _proto.dispatchEvent = function dispatchEvent(type) {
	      var _this = this;

	      var result;
	      (this._listeners[type] || []).forEach(function (callback) {
	        return callback.call(_this, {
	          type: type,
	          target: _this.target
	        }) === false && (result = false);
	      });
	      return result;
	    };

	    return EventDispatcher;
	  }();

	  var Draggable = function (_EventDispatcher) {
	    _inheritsLoose(Draggable, _EventDispatcher);

	    function Draggable(target, vars) {
	      var _this2;

	      _this2 = _EventDispatcher.call(this) || this;
	      _coreInitted || _initCore(1);
	      target = _toArray(target)[0];

	      if (!InertiaPlugin) {
	        InertiaPlugin = gsap.plugins.inertia;
	      }

	      _this2.vars = vars = _copy(vars || {});
	      _this2.target = target;
	      _this2.x = _this2.y = _this2.rotation = 0;
	      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
	      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
	      _this2.lockAxis = vars.lockAxis;
	      _this2.autoScroll = vars.autoScroll || 0;
	      _this2.lockedAxis = null;
	      _this2.allowEventDefault = !!vars.allowEventDefault;
	      gsap.getProperty(target, "x");

	      var type = (vars.type || "x,y").toLowerCase(),
	          xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
	          rotationMode = type.indexOf("rotation") !== -1,
	          xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
	          yProp = xyMode ? "y" : "top",
	          allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"),
	          allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"),
	          minimumMovement = vars.minimumMovement || 2,
	          self = _assertThisInitialized(_this2),
	          triggers = _toArray(vars.trigger || vars.handle || target),
	          killProps = {},
	          dragEndTime = 0,
	          checkAutoScrollBounds = false,
	          autoScrollMarginTop = vars.autoScrollMarginTop || 40,
	          autoScrollMarginRight = vars.autoScrollMarginRight || 40,
	          autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
	          autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
	          isClickable = vars.clickableTest || _isClickable,
	          clickTime = 0,
	          gsCache = target._gsap || gsap.core.getCache(target),
	          isFixed = _isFixed$1(target),
	          getPropAsNum = function getPropAsNum(property, unit) {
	        return parseFloat(gsCache.get(target, property, unit));
	      },
	          ownerDoc = target.ownerDocument || _doc$1,
	          enabled,
	          scrollProxy,
	          startPointerX,
	          startPointerY,
	          startElementX,
	          startElementY,
	          hasBounds,
	          hasDragCallback,
	          hasMoveCallback,
	          maxX,
	          minX,
	          maxY,
	          minY,
	          touch,
	          touchID,
	          rotationOrigin,
	          dirty,
	          old,
	          snapX,
	          snapY,
	          snapXY,
	          isClicking,
	          touchEventTarget,
	          matrix,
	          interrupted,
	          allowNativeTouchScrolling,
	          touchDragAxis,
	          isDispatching,
	          clickDispatch,
	          trustedClickDispatch,
	          isPreventingDefault,
	          innerMatrix,
	          onContextMenu = function onContextMenu(e) {
	        _preventDefault(e);

	        e.stopImmediatePropagation && e.stopImmediatePropagation();
	        return false;
	      },
	          render = function render(suppressEvents) {
	        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
	          var e = target,
	              autoScrollFactor = self.autoScroll * 15,
	              parent,
	              isRoot,
	              rect,
	              pointerX,
	              pointerY,
	              changeX,
	              changeY,
	              gap;
	          checkAutoScrollBounds = false;
	          _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
	          _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
	          pointerX = self.pointerX - _windowProxy.scrollLeft;
	          pointerY = self.pointerY - _windowProxy.scrollTop;

	          while (e && !isRoot) {
	            isRoot = _isRoot(e.parentNode);
	            parent = isRoot ? _windowProxy : e.parentNode;
	            rect = isRoot ? {
	              bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
	              right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
	              left: 0,
	              top: 0
	            } : parent.getBoundingClientRect();
	            changeX = changeY = 0;

	            if (allowY) {
	              gap = parent._gsMaxScrollY - parent.scrollTop;

	              if (gap < 0) {
	                changeY = gap;
	              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
	                checkAutoScrollBounds = true;
	                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
	              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
	                checkAutoScrollBounds = true;
	                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
	              }

	              if (changeY) {
	                parent.scrollTop += changeY;
	              }
	            }

	            if (allowX) {
	              gap = parent._gsMaxScrollX - parent.scrollLeft;

	              if (gap < 0) {
	                changeX = gap;
	              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
	                checkAutoScrollBounds = true;
	                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
	              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
	                checkAutoScrollBounds = true;
	                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
	              }

	              if (changeX) {
	                parent.scrollLeft += changeX;
	              }
	            }

	            if (isRoot && (changeX || changeY)) {
	              _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);

	              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
	            }

	            e = parent;
	          }
	        }

	        if (dirty) {
	          var x = self.x,
	              y = self.y;

	          if (rotationMode) {
	            self.deltaX = x - parseFloat(gsCache.rotation);
	            self.rotation = x;
	            gsCache.rotation = x + "deg";
	            gsCache.renderTransform(1, gsCache);
	          } else {
	            if (scrollProxy) {
	              if (allowY) {
	                self.deltaY = y - scrollProxy.top();
	                scrollProxy.top(y);
	              }

	              if (allowX) {
	                self.deltaX = x - scrollProxy.left();
	                scrollProxy.left(x);
	              }
	            } else if (xyMode) {
	              if (allowY) {
	                self.deltaY = y - parseFloat(gsCache.y);
	                gsCache.y = y + "px";
	              }

	              if (allowX) {
	                self.deltaX = x - parseFloat(gsCache.x);
	                gsCache.x = x + "px";
	              }

	              gsCache.renderTransform(1, gsCache);
	            } else {
	              if (allowY) {
	                self.deltaY = y - parseFloat(target.style.top || 0);
	                target.style.top = y + "px";
	              }

	              if (allowX) {
	                self.deltaX = x - parseFloat(target.style.left || 0);
	                target.style.left = x + "px";
	              }
	            }
	          }

	          if (hasDragCallback && !suppressEvents && !isDispatching) {
	            isDispatching = true;

	            if (_dispatchEvent(self, "drag", "onDrag") === false) {
	              if (allowX) {
	                self.x -= self.deltaX;
	              }

	              if (allowY) {
	                self.y -= self.deltaY;
	              }

	              render(true);
	            }

	            isDispatching = false;
	          }
	        }

	        dirty = false;
	      },
	          syncXY = function syncXY(skipOnUpdate, skipSnap) {
	        var x = self.x,
	            y = self.y,
	            snappedValue,
	            cs;

	        if (!target._gsap) {
	          gsCache = gsap.core.getCache(target);
	        }

	        gsCache.uncache && gsap.getProperty(target, "x");

	        if (xyMode) {
	          self.x = parseFloat(gsCache.x);
	          self.y = parseFloat(gsCache.y);
	        } else if (rotationMode) {
	          self.x = self.rotation = parseFloat(gsCache.rotation);
	        } else if (scrollProxy) {
	          self.y = scrollProxy.top();
	          self.x = scrollProxy.left();
	        } else {
	          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
	          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
	        }

	        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
	          if (snapXY) {
	            _temp1.x = self.x;
	            _temp1.y = self.y;
	            snappedValue = snapXY(_temp1);

	            if (snappedValue.x !== self.x) {
	              self.x = snappedValue.x;
	              dirty = true;
	            }

	            if (snappedValue.y !== self.y) {
	              self.y = snappedValue.y;
	              dirty = true;
	            }
	          }

	          if (snapX) {
	            snappedValue = snapX(self.x);

	            if (snappedValue !== self.x) {
	              self.x = snappedValue;

	              if (rotationMode) {
	                self.rotation = snappedValue;
	              }

	              dirty = true;
	            }
	          }

	          if (snapY) {
	            snappedValue = snapY(self.y);

	            if (snappedValue !== self.y) {
	              self.y = snappedValue;
	            }

	            dirty = true;
	          }
	        }

	        dirty && render(true);

	        if (!skipOnUpdate) {
	          self.deltaX = self.x - x;
	          self.deltaY = self.y - y;

	          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
	        }
	      },
	          buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
	        if (min == null) {
	          min = -_bigNum;
	        }

	        if (max == null) {
	          max = _bigNum;
	        }

	        if (_isFunction(snap)) {
	          return function (n) {
	            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
	            return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
	          };
	        }

	        if (_isArray(snap)) {
	          return function (n) {
	            var i = snap.length,
	                closest = 0,
	                absDif = _bigNum,
	                val,
	                dif;

	            while (--i > -1) {
	              val = snap[i];
	              dif = val - n;

	              if (dif < 0) {
	                dif = -dif;
	              }

	              if (dif < absDif && val >= min && val <= max) {
	                closest = i;
	                absDif = dif;
	              }
	            }

	            return snap[closest];
	          };
	        }

	        return isNaN(snap) ? function (n) {
	          return n;
	        } : function () {
	          return snap * factor;
	        };
	      },
	          buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
	        radius = radius && radius < _bigNum ? radius * radius : _bigNum;

	        if (_isFunction(snap)) {
	          return function (point) {
	            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
	                x = point.x,
	                y = point.y,
	                result,
	                dx,
	                dy;
	            point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
	            point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
	            result = snap.call(self, point);

	            if (result !== point) {
	              point.x = result.x;
	              point.y = result.y;
	            }

	            if (factor !== 1) {
	              point.x *= factor;
	              point.y *= factor;
	            }

	            if (radius < _bigNum) {
	              dx = point.x - x;
	              dy = point.y - y;

	              if (dx * dx + dy * dy > radius) {
	                point.x = x;
	                point.y = y;
	              }
	            }

	            return point;
	          };
	        }

	        if (_isArray(snap)) {
	          return function (p) {
	            var i = snap.length,
	                closest = 0,
	                minDist = _bigNum,
	                x,
	                y,
	                point,
	                dist;

	            while (--i > -1) {
	              point = snap[i];
	              x = point.x - p.x;
	              y = point.y - p.y;
	              dist = x * x + y * y;

	              if (dist < minDist) {
	                closest = i;
	                minDist = dist;
	              }
	            }

	            return minDist <= radius ? snap[closest] : p;
	          };
	        }

	        return function (n) {
	          return n;
	        };
	      },
	          calculateBounds = function calculateBounds() {
	        var bounds, targetBounds, snap, snapIsRaw;
	        hasBounds = false;

	        if (scrollProxy) {
	          scrollProxy.calibrate();
	          self.minX = minX = -scrollProxy.maxScrollLeft();
	          self.minY = minY = -scrollProxy.maxScrollTop();
	          self.maxX = maxX = self.maxY = maxY = 0;
	          hasBounds = true;
	        } else if (!!vars.bounds) {
	          bounds = _getBounds(vars.bounds, target.parentNode);

	          if (rotationMode) {
	            self.minX = minX = bounds.left;
	            self.maxX = maxX = bounds.left + bounds.width;
	            self.minY = minY = self.maxY = maxY = 0;
	          } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
	            bounds = vars.bounds;
	            self.minX = minX = bounds.minX;
	            self.minY = minY = bounds.minY;
	            self.maxX = maxX = bounds.maxX;
	            self.maxY = maxY = bounds.maxY;
	          } else {
	            targetBounds = _getBounds(target, target.parentNode);
	            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
	            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
	            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
	            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
	          }

	          if (minX > maxX) {
	            self.minX = maxX;
	            self.maxX = maxX = minX;
	            minX = self.minX;
	          }

	          if (minY > maxY) {
	            self.minY = maxY;
	            self.maxY = maxY = minY;
	            minY = self.minY;
	          }

	          if (rotationMode) {
	            self.minRotation = minX;
	            self.maxRotation = maxX;
	          }

	          hasBounds = true;
	        }

	        if (vars.liveSnap) {
	          snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
	          snapIsRaw = _isArray(snap) || _isFunction(snap);

	          if (rotationMode) {
	            snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
	            snapY = null;
	          } else {
	            if (snap.points) {
	              snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
	            } else {
	              if (allowX) {
	                snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
	              }

	              if (allowY) {
	                snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
	              }
	            }
	          }
	        }
	      },
	          onThrowComplete = function onThrowComplete() {
	        self.isThrowing = false;

	        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
	      },
	          onThrowInterrupt = function onThrowInterrupt() {
	        self.isThrowing = false;
	      },
	          animate = function animate(inertia, forceZeroVelocity) {
	        var snap, snapIsRaw, tween, overshootTolerance;

	        if (inertia && InertiaPlugin) {
	          if (inertia === true) {
	            snap = vars.snap || vars.liveSnap || {};
	            snapIsRaw = _isArray(snap) || _isFunction(snap);
	            inertia = {
	              resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
	            };

	            if (rotationMode) {
	              inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
	            } else {
	              if (allowX) {
	                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
	              }

	              if (allowY) {
	                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
	              }

	              if (snap.points || _isArray(snap) && _isObject(snap[0])) {
	                inertia.linkedProps = xProp + "," + yProp;
	                inertia.radius = snap.radius;
	              }
	            }
	          }

	          self.isThrowing = true;
	          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;

	          if (!inertia.duration) {
	            inertia.duration = {
	              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
	              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
	              overshoot: overshootTolerance
	            };
	          }

	          self.tween = tween = gsap.to(scrollProxy || target, {
	            inertia: inertia,
	            data: "_draggable",
	            onComplete: onThrowComplete,
	            onInterrupt: onThrowInterrupt,
	            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
	            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
	          });

	          if (!vars.fastMode) {
	            if (scrollProxy) {
	              scrollProxy._skip = true;
	            }

	            tween.render(1e9, true, true);
	            syncXY(true, true);
	            self.endX = self.x;
	            self.endY = self.y;

	            if (rotationMode) {
	              self.endRotation = self.x;
	            }

	            tween.play(0);
	            syncXY(true, true);

	            if (scrollProxy) {
	              scrollProxy._skip = false;
	            }
	          }
	        } else if (hasBounds) {
	          self.applyBounds();
	        }
	      },
	          updateMatrix = function updateMatrix(shiftStart) {
	        var start = matrix,
	            p;
	        matrix = getGlobalMatrix(target.parentNode, true);

	        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
	          p = start.inverse().apply({
	            x: startPointerX,
	            y: startPointerY
	          });
	          matrix.apply(p, p);
	          startPointerX = p.x;
	          startPointerY = p.y;
	        }

	        if (matrix.equals(_identityMatrix$1)) {
	          matrix = null;
	        }
	      },
	          recordStartPositions = function recordStartPositions() {
	        var edgeTolerance = 1 - self.edgeResistance,
	            offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0,
	            offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0,
	            parsedOrigin,
	            x,
	            y;
	        updateMatrix(false);
	        _point1.x = self.pointerX - offsetX;
	        _point1.y = self.pointerY - offsetY;
	        matrix && matrix.apply(_point1, _point1);
	        startPointerX = _point1.x;
	        startPointerY = _point1.y;

	        if (dirty) {
	          setPointerPosition(self.pointerX, self.pointerY);
	          render(true);
	        }

	        innerMatrix = getGlobalMatrix(target);

	        if (scrollProxy) {
	          calculateBounds();
	          startElementY = scrollProxy.top();
	          startElementX = scrollProxy.left();
	        } else {
	          if (isTweening()) {
	            syncXY(true, true);
	            calculateBounds();
	          } else {
	            self.applyBounds();
	          }

	          if (rotationMode) {
	            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
	            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
	              x: parseFloat(parsedOrigin[0]) || 0,
	              y: parseFloat(parsedOrigin[1]) || 0
	            });
	            syncXY(true, true);
	            x = self.pointerX - rotationOrigin.x - offsetX;
	            y = rotationOrigin.y - self.pointerY + offsetY;
	            startElementX = self.x;
	            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
	          } else {
	            startElementY = getPropAsNum(yProp, "px");
	            startElementX = getPropAsNum(xProp, "px");
	          }
	        }

	        if (hasBounds && edgeTolerance) {
	          if (startElementX > maxX) {
	            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
	          } else if (startElementX < minX) {
	            startElementX = minX - (minX - startElementX) / edgeTolerance;
	          }

	          if (!rotationMode) {
	            if (startElementY > maxY) {
	              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
	            } else if (startElementY < minY) {
	              startElementY = minY - (minY - startElementY) / edgeTolerance;
	            }
	          }
	        }

	        self.startX = startElementX = _round(startElementX);
	        self.startY = startElementY = _round(startElementY);
	      },
	          isTweening = function isTweening() {
	        return self.tween && self.tween.isActive();
	      },
	          removePlaceholder = function removePlaceholder() {
	        if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
	          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
	        }
	      },
	          onPress = function onPress(e, force) {
	        var i;

	        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
	          isPreventingDefault && e && enabled && _preventDefault(e);
	          return;
	        }

	        interrupted = isTweening();
	        self.pointerEvent = e;

	        if (_touchEventLookup[e.type]) {
	          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;

	          _addListener(touchEventTarget, "touchend", onRelease);

	          _addListener(touchEventTarget, "touchmove", onMove);

	          _addListener(touchEventTarget, "touchcancel", onRelease);

	          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
	        } else {
	          touchEventTarget = null;

	          _addListener(ownerDoc, "mousemove", onMove);
	        }

	        touchDragAxis = null;

	        if (!_supportsPointer || !touchEventTarget) {
	          _addListener(ownerDoc, "mouseup", onRelease);

	          e && e.target && _addListener(e.target, "mouseup", onRelease);
	        }

	        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

	        if (isClicking) {
	          _addListener(e.target, "change", onRelease);

	          _dispatchEvent(self, "pressInit", "onPressInit");

	          _dispatchEvent(self, "press", "onPress");

	          _setSelectable(triggers, true);

	          isPreventingDefault = false;
	          return;
	        }

	        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
	        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;

	        if (isPreventingDefault) {
	          _preventDefault(e);

	          _addListener(_win$1, "touchforcechange", _preventDefault);
	        }

	        if (e.changedTouches) {
	          e = touch = e.changedTouches[0];
	          touchID = e.identifier;
	        } else if (e.pointerId) {
	          touchID = e.pointerId;
	        } else {
	          touch = touchID = null;
	        }

	        _dragCount++;

	        _addToRenderQueue(render);

	        startPointerY = self.pointerY = e.pageY;
	        startPointerX = self.pointerX = e.pageX;

	        _dispatchEvent(self, "pressInit", "onPressInit");

	        if (allowNativeTouchScrolling || self.autoScroll) {
	          _recordMaxScrolls(target.parentNode);
	        }

	        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
	          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
	          target.parentNode.appendChild(_placeholderDiv);
	        }

	        recordStartPositions();
	        self.tween && self.tween.kill();
	        self.isThrowing = false;
	        gsap.killTweensOf(scrollProxy || target, killProps, true);
	        scrollProxy && gsap.killTweensOf(target, {
	          scrollTo: 1
	        }, true);
	        self.tween = self.lockedAxis = null;

	        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
	          target.style.zIndex = Draggable.zIndex++;
	        }

	        self.isPressed = true;
	        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
	        hasMoveCallback = !!(vars.onMove || self._listeners.move);

	        if (vars.cursor !== false || vars.activeCursor) {
	          i = triggers.length;

	          while (--i > -1) {
	            gsap.set(triggers[i], {
	              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
	            });
	          }
	        }

	        _dispatchEvent(self, "press", "onPress");
	      },
	          onMove = function onMove(e) {
	        var originalEvent = e,
	            touches,
	            pointerX,
	            pointerY,
	            i,
	            dx,
	            dy;

	        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
	          isPreventingDefault && e && enabled && _preventDefault(e);
	          return;
	        }

	        self.pointerEvent = e;
	        touches = e.changedTouches;

	        if (touches) {
	          e = touches[0];

	          if (e !== touch && e.identifier !== touchID) {
	            i = touches.length;

	            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

	            if (i < 0) {
	              return;
	            }
	          }
	        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
	          return;
	        }

	        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
	          _point1.x = e.pageX - (isFixed ? _getDocScrollLeft$1(ownerDoc) : 0);
	          _point1.y = e.pageY - (isFixed ? _getDocScrollTop$1(ownerDoc) : 0);
	          matrix && matrix.apply(_point1, _point1);
	          pointerX = _point1.x;
	          pointerY = _point1.y;
	          dx = Math.abs(pointerX - startPointerX);
	          dy = Math.abs(pointerY - startPointerY);

	          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
	            touchDragAxis = dx > dy && allowX ? "x" : "y";

	            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
	              _addListener(_win$1, "touchforcechange", _preventDefault);
	            }

	            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
	              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
	              _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
	            }

	            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
	              onRelease(originalEvent);
	              return;
	            }
	          }
	        }

	        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
	          _preventDefault(originalEvent);

	          isPreventingDefault = true;
	        } else if (isPreventingDefault) {
	          isPreventingDefault = false;
	        }

	        if (self.autoScroll) {
	          checkAutoScrollBounds = true;
	        }

	        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
	      },
	          setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
	        var dragTolerance = 1 - self.dragResistance,
	            edgeTolerance = 1 - self.edgeResistance,
	            prevPointerX = self.pointerX,
	            prevPointerY = self.pointerY,
	            prevStartElementY = startElementY,
	            prevX = self.x,
	            prevY = self.y,
	            prevEndX = self.endX,
	            prevEndY = self.endY,
	            prevEndRotation = self.endRotation,
	            prevDirty = dirty,
	            xChange,
	            yChange,
	            x,
	            y,
	            dif,
	            temp;
	        self.pointerX = pointerX;
	        self.pointerY = pointerY;

	        if (isFixed) {
	          pointerX -= _getDocScrollLeft$1(ownerDoc);
	          pointerY -= _getDocScrollTop$1(ownerDoc);
	        }

	        if (rotationMode) {
	          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
	          dif = self.y - y;

	          if (dif > 180) {
	            startElementY -= 360;
	            self.y = y;
	          } else if (dif < -180) {
	            startElementY += 360;
	            self.y = y;
	          }

	          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
	            self.y = y;
	            x = startElementX + (startElementY - y) * dragTolerance;
	          } else {
	            x = startElementX;
	          }
	        } else {
	          if (matrix) {
	            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
	            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
	            pointerX = temp;
	          }

	          yChange = pointerY - startPointerY;
	          xChange = pointerX - startPointerX;

	          if (yChange < minimumMovement && yChange > -minimumMovement) {
	            yChange = 0;
	          }

	          if (xChange < minimumMovement && xChange > -minimumMovement) {
	            xChange = 0;
	          }

	          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
	            temp = self.lockedAxis;

	            if (!temp) {
	              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

	              if (temp && _isFunction(self.vars.onLockAxis)) {
	                self.vars.onLockAxis.call(self, self.pointerEvent);
	              }
	            }

	            if (temp === "y") {
	              yChange = 0;
	            } else if (temp === "x") {
	              xChange = 0;
	            }
	          }

	          x = _round(startElementX + xChange * dragTolerance);
	          y = _round(startElementY + yChange * dragTolerance);
	        }

	        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
	          if (snapXY) {
	            _temp1.x = x;
	            _temp1.y = y;
	            temp = snapXY(_temp1);
	            x = _round(temp.x);
	            y = _round(temp.y);
	          }

	          if (snapX) {
	            x = _round(snapX(x));
	          }

	          if (snapY) {
	            y = _round(snapY(y));
	          }
	        }

	        if (hasBounds) {
	          if (x > maxX) {
	            x = maxX + Math.round((x - maxX) * edgeTolerance);
	          } else if (x < minX) {
	            x = minX + Math.round((x - minX) * edgeTolerance);
	          }

	          if (!rotationMode) {
	            if (y > maxY) {
	              y = Math.round(maxY + (y - maxY) * edgeTolerance);
	            } else if (y < minY) {
	              y = Math.round(minY + (y - minY) * edgeTolerance);
	            }
	          }
	        }

	        if (self.x !== x || self.y !== y && !rotationMode) {
	          if (rotationMode) {
	            self.endRotation = self.x = self.endX = x;
	            dirty = true;
	          } else {
	            if (allowY) {
	              self.y = self.endY = y;
	              dirty = true;
	            }

	            if (allowX) {
	              self.x = self.endX = x;
	              dirty = true;
	            }
	          }

	          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
	            if (!self.isDragging && self.isPressed) {
	              self.isDragging = true;

	              _dispatchEvent(self, "dragstart", "onDragStart");
	            }
	          } else {
	            self.pointerX = prevPointerX;
	            self.pointerY = prevPointerY;
	            startElementY = prevStartElementY;
	            self.x = prevX;
	            self.y = prevY;
	            self.endX = prevEndX;
	            self.endY = prevEndY;
	            self.endRotation = prevEndRotation;
	            dirty = prevDirty;
	          }
	        }
	      },
	          onRelease = function onRelease(e, force) {
	        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
	          isPreventingDefault && e && enabled && _preventDefault(e);
	          return;
	        }

	        self.isPressed = false;
	        var originalEvent = e,
	            wasDragging = self.isDragging,
	            isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
	            placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder),
	            touches,
	            i,
	            syntheticEvent,
	            eventTarget,
	            syntheticClick;

	        if (touchEventTarget) {
	          _removeListener(touchEventTarget, "touchend", onRelease);

	          _removeListener(touchEventTarget, "touchmove", onMove);

	          _removeListener(touchEventTarget, "touchcancel", onRelease);

	          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
	        } else {
	          _removeListener(ownerDoc, "mousemove", onMove);
	        }

	        _removeListener(_win$1, "touchforcechange", _preventDefault);

	        if (!_supportsPointer || !touchEventTarget) {
	          _removeListener(ownerDoc, "mouseup", onRelease);

	          e && e.target && _removeListener(e.target, "mouseup", onRelease);
	        }

	        dirty = false;

	        if (wasDragging) {
	          dragEndTime = _lastDragTime = _getTime();
	          self.isDragging = false;
	        }

	        if (isClicking && !isContextMenuRelease) {
	          if (e) {
	            _removeListener(e.target, "change", onRelease);

	            self.pointerEvent = originalEvent;
	          }

	          _setSelectable(triggers, false);

	          _dispatchEvent(self, "release", "onRelease");

	          _dispatchEvent(self, "click", "onClick");

	          isClicking = false;
	          return;
	        }

	        _removeFromRenderQueue(render);

	        i = triggers.length;

	        while (--i > -1) {
	          _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
	        }

	        _dragCount--;

	        if (e) {
	          touches = e.changedTouches;

	          if (touches) {
	            e = touches[0];

	            if (e !== touch && e.identifier !== touchID) {
	              i = touches.length;

	              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

	              if (i < 0) {
	                return;
	              }
	            }
	          }

	          self.pointerEvent = originalEvent;
	          self.pointerX = e.pageX;
	          self.pointerY = e.pageY;
	        }

	        if (isContextMenuRelease && originalEvent) {
	          _preventDefault(originalEvent);

	          isPreventingDefault = true;

	          _dispatchEvent(self, "release", "onRelease");
	        } else if (originalEvent && !wasDragging) {
	          isPreventingDefault = false;

	          if (interrupted && (vars.snap || vars.bounds)) {
	            animate(vars.inertia || vars.throwProps);
	          }

	          _dispatchEvent(self, "release", "onRelease");

	          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
	            _dispatchEvent(self, "click", "onClick");

	            if (_getTime() - clickTime < 300) {
	              _dispatchEvent(self, "doubleclick", "onDoubleClick");
	            }

	            eventTarget = originalEvent.target || target;
	            clickTime = _getTime();

	            syntheticClick = function syntheticClick() {
	              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
	                if (eventTarget.click) {
	                  eventTarget.click();
	                } else if (ownerDoc.createEvent) {
	                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
	                  syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
	                  eventTarget.dispatchEvent(syntheticEvent);
	                }
	              }
	            };

	            if (!_isAndroid && !originalEvent.defaultPrevented) {
	              gsap.delayedCall(0.05, syntheticClick);
	            }
	          }
	        } else {
	          animate(vars.inertia || vars.throwProps);

	          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
	            isPreventingDefault = true;

	            _preventDefault(originalEvent);
	          } else {
	            isPreventingDefault = false;
	          }

	          _dispatchEvent(self, "release", "onRelease");
	        }

	        isTweening() && placeholderDelayedCall.duration(self.tween.duration());
	        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
	        return true;
	      },
	          updateScroll = function updateScroll(e) {
	        if (e && self.isDragging && !scrollProxy) {
	          var parent = e.target || target.parentNode,
	              deltaX = parent.scrollLeft - parent._gsScrollX,
	              deltaY = parent.scrollTop - parent._gsScrollY;

	          if (deltaX || deltaY) {
	            if (matrix) {
	              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
	              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
	            } else {
	              startPointerX -= deltaX;
	              startPointerY -= deltaY;
	            }

	            parent._gsScrollX += deltaX;
	            parent._gsScrollY += deltaY;
	            setPointerPosition(self.pointerX, self.pointerY);
	          }
	        }
	      },
	          onClick = function onClick(e) {
	        var time = _getTime(),
	            recentlyClicked = time - clickTime < 100,
	            recentlyDragged = time - dragEndTime < 50,
	            alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
	            defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
	            alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
	            trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;

	        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
	          e.stopImmediatePropagation();
	        }

	        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
	          if (trusted && alreadyDispatched) {
	            trustedClickDispatch = clickTime;
	          }

	          clickDispatch = clickTime;
	          return;
	        }

	        if (self.isPressed || recentlyDragged || recentlyClicked) {
	          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
	            _preventDefault(e);
	          }
	        }

	        if (!recentlyClicked && !recentlyDragged) {
	          e && e.target && (self.pointerEvent = e);

	          _dispatchEvent(self, "click", "onClick");
	        }
	      },
	          localizePoint = function localizePoint(p) {
	        return matrix ? {
	          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
	          y: p.x * matrix.b + p.y * matrix.d + matrix.f
	        } : {
	          x: p.x,
	          y: p.y
	        };
	      };

	      old = Draggable.get(target);
	      old && old.kill();

	      _this2.startDrag = function (event, align) {
	        var r1, r2, p1, p2;
	        onPress(event || self.pointerEvent, true);

	        if (align && !self.hitTest(event || self.pointerEvent)) {
	          r1 = _parseRect(event || self.pointerEvent);
	          r2 = _parseRect(target);
	          p1 = localizePoint({
	            x: r1.left + r1.width / 2,
	            y: r1.top + r1.height / 2
	          });
	          p2 = localizePoint({
	            x: r2.left + r2.width / 2,
	            y: r2.top + r2.height / 2
	          });
	          startPointerX -= p1.x - p2.x;
	          startPointerY -= p1.y - p2.y;
	        }

	        if (!self.isDragging) {
	          self.isDragging = true;

	          _dispatchEvent(self, "dragstart", "onDragStart");
	        }
	      };

	      _this2.drag = onMove;

	      _this2.endDrag = function (e) {
	        return onRelease(e || self.pointerEvent, true);
	      };

	      _this2.timeSinceDrag = function () {
	        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
	      };

	      _this2.timeSinceClick = function () {
	        return (_getTime() - clickTime) / 1000;
	      };

	      _this2.hitTest = function (target, threshold) {
	        return Draggable.hitTest(self.target, target, threshold);
	      };

	      _this2.getDirection = function (from, diagonalThreshold) {
	        var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start",
	            xChange,
	            yChange,
	            ratio,
	            direction,
	            r1,
	            r2;

	        if (mode === "element") {
	          r1 = _parseRect(self.target);
	          r2 = _parseRect(from);
	        }

	        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

	        if (rotationMode) {
	          return xChange < 0 ? "counter-clockwise" : "clockwise";
	        } else {
	          diagonalThreshold = diagonalThreshold || 2;
	          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
	          ratio = Math.abs(xChange / yChange);
	          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

	          if (ratio < diagonalThreshold) {
	            if (direction !== "") {
	              direction += "-";
	            }

	            direction += yChange < 0 ? "up" : "down";
	          }
	        }

	        return direction;
	      };

	      _this2.applyBounds = function (newBounds, sticky) {
	        var x, y, forceZeroVelocity, e, parent, isRoot;

	        if (newBounds && vars.bounds !== newBounds) {
	          vars.bounds = newBounds;
	          return self.update(true, sticky);
	        }

	        syncXY(true);
	        calculateBounds();

	        if (hasBounds && !isTweening()) {
	          x = self.x;
	          y = self.y;

	          if (x > maxX) {
	            x = maxX;
	          } else if (x < minX) {
	            x = minX;
	          }

	          if (y > maxY) {
	            y = maxY;
	          } else if (y < minY) {
	            y = minY;
	          }

	          if (self.x !== x || self.y !== y) {
	            forceZeroVelocity = true;
	            self.x = self.endX = x;

	            if (rotationMode) {
	              self.endRotation = x;
	            } else {
	              self.y = self.endY = y;
	            }

	            dirty = true;
	            render(true);

	            if (self.autoScroll && !self.isDragging) {
	              _recordMaxScrolls(target.parentNode);

	              e = target;
	              _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
	              _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;

	              while (e && !isRoot) {
	                isRoot = _isRoot(e.parentNode);
	                parent = isRoot ? _windowProxy : e.parentNode;

	                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
	                  parent.scrollTop = parent._gsMaxScrollY;
	                }

	                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
	                  parent.scrollLeft = parent._gsMaxScrollX;
	                }

	                e = parent;
	              }
	            }
	          }

	          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
	            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
	          }
	        }

	        return self;
	      };

	      _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
	        if (sticky && self.isPressed) {
	          var m = getGlobalMatrix(target),
	              p = innerMatrix.apply({
	            x: self.x - startElementX,
	            y: self.y - startElementY
	          }),
	              m2 = getGlobalMatrix(target.parentNode, true);
	          m2.apply({
	            x: m.e - p.x,
	            y: m.f - p.y
	          }, p);
	          self.x -= p.x - m2.e;
	          self.y -= p.y - m2.f;
	          render(true);
	          recordStartPositions();
	        }

	        var x = self.x,
	            y = self.y;
	        updateMatrix(!sticky);

	        if (applyBounds) {
	          self.applyBounds();
	        } else {
	          dirty && ignoreExternalChanges && render(true);
	          syncXY(true);
	        }

	        if (sticky) {
	          setPointerPosition(self.pointerX, self.pointerY);
	          dirty && render(true);
	        }

	        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
	          recordStartPositions();
	        }

	        if (self.autoScroll) {
	          _recordMaxScrolls(target.parentNode, self.isDragging);

	          checkAutoScrollBounds = self.isDragging;
	          render(true);

	          _removeScrollListener(target, updateScroll);

	          _addScrollListener(target, updateScroll);
	        }

	        return self;
	      };

	      _this2.enable = function (type) {
	        var setVars = {
	          lazy: true
	        },
	            id,
	            i,
	            trigger;

	        if (vars.cursor !== false) {
	          setVars.cursor = vars.cursor || _defaultCursor;
	        }

	        if (gsap.utils.checkPrefix("touchCallout")) {
	          setVars.touchCallout = "none";
	        }

	        if (type !== "soft") {
	          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");

	          i = triggers.length;

	          while (--i > -1) {
	            trigger = triggers[i];
	            _supportsPointer || _addListener(trigger, "mousedown", onPress);

	            _addListener(trigger, "touchstart", onPress);

	            _addListener(trigger, "click", onClick, true);

	            gsap.set(trigger, setVars);

	            if (trigger.getBBox && trigger.ownerSVGElement) {
	              gsap.set(trigger.ownerSVGElement, {
	                touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
	              });
	            }

	            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
	          }

	          _setSelectable(triggers, false);
	        }

	        _addScrollListener(target, updateScroll);

	        enabled = true;

	        if (InertiaPlugin && type !== "soft") {
	          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
	        }

	        target._gsDragID = id = "d" + _lookupCount++;
	        _lookup[id] = self;

	        if (scrollProxy) {
	          scrollProxy.enable();
	          scrollProxy.element._gsDragID = id;
	        }

	        (vars.bounds || rotationMode) && recordStartPositions();
	        vars.bounds && self.applyBounds();
	        return self;
	      };

	      _this2.disable = function (type) {
	        var dragging = self.isDragging,
	            i = triggers.length,
	            trigger;

	        while (--i > -1) {
	          _setStyle(triggers[i], "cursor", null);
	        }

	        if (type !== "soft") {
	          _setTouchActionForAllDescendants(triggers, null);

	          i = triggers.length;

	          while (--i > -1) {
	            trigger = triggers[i];

	            _setStyle(trigger, "touchCallout", null);

	            _removeListener(trigger, "mousedown", onPress);

	            _removeListener(trigger, "touchstart", onPress);

	            _removeListener(trigger, "click", onClick);

	            _removeListener(trigger, "contextmenu", onContextMenu);
	          }

	          _setSelectable(triggers, true);

	          if (touchEventTarget) {
	            _removeListener(touchEventTarget, "touchcancel", onRelease);

	            _removeListener(touchEventTarget, "touchend", onRelease);

	            _removeListener(touchEventTarget, "touchmove", onMove);
	          }

	          _removeListener(ownerDoc, "mouseup", onRelease);

	          _removeListener(ownerDoc, "mousemove", onMove);
	        }

	        _removeScrollListener(target, updateScroll);

	        enabled = false;
	        InertiaPlugin && type !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
	        scrollProxy && scrollProxy.disable();

	        _removeFromRenderQueue(render);

	        self.isDragging = self.isPressed = isClicking = false;
	        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
	        return self;
	      };

	      _this2.enabled = function (value, type) {
	        return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
	      };

	      _this2.kill = function () {
	        self.isThrowing = false;
	        self.tween && self.tween.kill();
	        self.disable();
	        gsap.set(triggers, {
	          clearProps: "userSelect"
	        });
	        delete _lookup[target._gsDragID];
	        return self;
	      };

	      if (~type.indexOf("scroll")) {
	        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
	          onKill: function onKill() {
	            self.isPressed && onRelease(null);
	          }
	        }, vars));
	        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
	        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
	        target = scrollProxy.content;
	      }

	      if (rotationMode) {
	        killProps.rotation = 1;
	      } else {
	        if (allowX) {
	          killProps[xProp] = 1;
	        }

	        if (allowY) {
	          killProps[yProp] = 1;
	        }
	      }

	      gsCache.force3D = "force3D" in vars ? vars.force3D : true;

	      _this2.enable();

	      return _this2;
	    }

	    Draggable.register = function register(core) {
	      gsap = core;

	      _initCore();
	    };

	    Draggable.create = function create(targets, vars) {
	      _coreInitted || _initCore(true);
	      return _toArray(targets).map(function (target) {
	        return new Draggable(target, vars);
	      });
	    };

	    Draggable.get = function get(target) {
	      return _lookup[(_toArray(target)[0] || {})._gsDragID];
	    };

	    Draggable.timeSinceDrag = function timeSinceDrag() {
	      return (_getTime() - _lastDragTime) / 1000;
	    };

	    Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
	      if (obj1 === obj2) {
	        return false;
	      }

	      var r1 = _parseRect(obj1),
	          r2 = _parseRect(obj2),
	          top = r1.top,
	          left = r1.left,
	          right = r1.right,
	          bottom = r1.bottom,
	          width = r1.width,
	          height = r1.height,
	          isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
	          overlap,
	          area,
	          isRatio;

	      if (isOutside || !threshold) {
	        return !isOutside;
	      }

	      isRatio = (threshold + "").indexOf("%") !== -1;
	      threshold = parseFloat(threshold) || 0;
	      overlap = {
	        left: Math.max(left, r2.left),
	        top: Math.max(top, r2.top)
	      };
	      overlap.width = Math.min(right, r2.right) - overlap.left;
	      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

	      if (overlap.width < 0 || overlap.height < 0) {
	        return false;
	      }

	      if (isRatio) {
	        threshold *= 0.01;
	        area = overlap.width * overlap.height;
	        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
	      }

	      return overlap.width > threshold && overlap.height > threshold;
	    };

	    return Draggable;
	  }(EventDispatcher);

	  _setDefaults(Draggable.prototype, {
	    pointerX: 0,
	    pointerY: 0,
	    startX: 0,
	    startY: 0,
	    deltaX: 0,
	    deltaY: 0,
	    isDragging: false,
	    isPressed: false
	  });

	  Draggable.zIndex = 1000;
	  Draggable.version = "3.10.4";
	  _getGSAP() && gsap.registerPlugin(Draggable);

	  exports.Draggable = Draggable;
	  exports.default = Draggable;

	  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

	})));
} (Draggable, Draggable.exports));

var ScrollToPlugin = {exports: {}};

(function (module, exports) {
	(function (global, factory) {
		factory(exports) ;
	}(commonjsGlobal, (function (exports) {
		/*!
		 * ScrollToPlugin 3.10.4
		 * https://greensock.com
		 *
		 * @license Copyright 2008-2022, GreenSock. All rights reserved.
		 * Subject to the terms at https://greensock.com/standard-license or for
		 * Club GreenSock members, the agreement issued with that membership.
		 * @author: Jack Doyle, jack@greensock.com
		*/
		var gsap,
		    _coreInitted,
		    _window,
		    _docEl,
		    _body,
		    _toArray,
		    _config,
		    _windowExists = function _windowExists() {
		  return typeof window !== "undefined";
		},
		    _getGSAP = function _getGSAP() {
		  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
		},
		    _isString = function _isString(value) {
		  return typeof value === "string";
		},
		    _isFunction = function _isFunction(value) {
		  return typeof value === "function";
		},
		    _max = function _max(element, axis) {
		  var dim = axis === "x" ? "Width" : "Height",
		      scroll = "scroll" + dim,
		      client = "client" + dim;
		  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
		},
		    _buildGetter = function _buildGetter(e, axis) {
		  var p = "scroll" + (axis === "x" ? "Left" : "Top");

		  if (e === _window) {
		    if (e.pageXOffset != null) {
		      p = "page" + axis.toUpperCase() + "Offset";
		    } else {
		      e = _docEl[p] != null ? _docEl : _body;
		    }
		  }

		  return function () {
		    return e[p];
		  };
		},
		    _clean = function _clean(value, index, target, targets) {
		  _isFunction(value) && (value = value(index, target, targets));

		  if (typeof value !== "object") {
		    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
		      x: value,
		      y: value
		    } : {
		      y: value
		    };
		  } else if (value.nodeType) {
		    return {
		      y: value,
		      x: value
		    };
		  } else {
		    var result = {},
		        p;

		    for (p in value) {
		      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
		    }

		    return result;
		  }
		},
		    _getOffset = function _getOffset(element, container) {
		  element = _toArray(element)[0];

		  if (!element || !element.getBoundingClientRect) {
		    return console.warn("scrollTo target doesn't exist. Using 0") || {
		      x: 0,
		      y: 0
		    };
		  }

		  var rect = element.getBoundingClientRect(),
		      isRoot = !container || container === _window || container === _body,
		      cRect = isRoot ? {
		    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
		    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
		  } : container.getBoundingClientRect(),
		      offsets = {
		    x: rect.left - cRect.left,
		    y: rect.top - cRect.top
		  };

		  if (!isRoot && container) {
		    offsets.x += _buildGetter(container, "x")();
		    offsets.y += _buildGetter(container, "y")();
		  }

		  return offsets;
		},
		    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
		  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
		},
		    _initCore = function _initCore() {
		  gsap = _getGSAP();

		  if (_windowExists() && gsap && document.body) {
		    _window = window;
		    _body = document.body;
		    _docEl = document.documentElement;
		    _toArray = gsap.utils.toArray;
		    gsap.config({
		      autoKillThreshold: 7
		    });
		    _config = gsap.config();
		    _coreInitted = 1;
		  }
		};

		var ScrollToPlugin = {
		  version: "3.10.4",
		  name: "scrollTo",
		  rawVars: 1,
		  register: function register(core) {
		    gsap = core;

		    _initCore();
		  },
		  init: function init(target, value, tween, index, targets) {
		    _coreInitted || _initCore();
		    var data = this,
		        snapType = gsap.getProperty(target, "scrollSnapType");
		    data.isWin = target === _window;
		    data.target = target;
		    data.tween = tween;
		    value = _clean(value, index, target, targets);
		    data.vars = value;
		    data.autoKill = !!value.autoKill;
		    data.getX = _buildGetter(target, "x");
		    data.getY = _buildGetter(target, "y");
		    data.x = data.xPrev = data.getX();
		    data.y = data.yPrev = data.getY();

		    if (snapType && snapType !== "none") {
		      data.snap = 1;
		      data.snapInline = target.style.scrollSnapType;
		      target.style.scrollSnapType = "none";
		    }

		    if (value.x != null) {
		      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

		      data._props.push("scrollTo_x");
		    } else {
		      data.skipX = 1;
		    }

		    if (value.y != null) {
		      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

		      data._props.push("scrollTo_y");
		    } else {
		      data.skipY = 1;
		    }
		  },
		  render: function render(ratio, data) {
		    var pt = data._pt,
		        target = data.target,
		        tween = data.tween,
		        autoKill = data.autoKill,
		        xPrev = data.xPrev,
		        yPrev = data.yPrev,
		        isWin = data.isWin,
		        snap = data.snap,
		        snapInline = data.snapInline,
		        x,
		        y,
		        yDif,
		        xDif,
		        threshold;

		    while (pt) {
		      pt.r(ratio, pt.d);
		      pt = pt._next;
		    }

		    x = isWin || !data.skipX ? data.getX() : xPrev;
		    y = isWin || !data.skipY ? data.getY() : yPrev;
		    yDif = y - yPrev;
		    xDif = x - xPrev;
		    threshold = _config.autoKillThreshold;

		    if (data.x < 0) {
		      data.x = 0;
		    }

		    if (data.y < 0) {
		      data.y = 0;
		    }

		    if (autoKill) {
		      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
		        data.skipX = 1;
		      }

		      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
		        data.skipY = 1;
		      }

		      if (data.skipX && data.skipY) {
		        tween.kill();
		        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
		      }
		    }

		    if (isWin) {
		      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
		    } else {
		      data.skipY || (target.scrollTop = data.y);
		      data.skipX || (target.scrollLeft = data.x);
		    }

		    if (snap && (ratio === 1 || ratio === 0)) {
		      y = target.scrollTop;
		      x = target.scrollLeft;
		      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
		      target.scrollTop = y + 1;
		      target.scrollLeft = x + 1;
		      target.scrollTop = y;
		      target.scrollLeft = x;
		    }

		    data.xPrev = data.x;
		    data.yPrev = data.y;
		  },
		  kill: function kill(property) {
		    var both = property === "scrollTo";

		    if (both || property === "scrollTo_x") {
		      this.skipX = 1;
		    }

		    if (both || property === "scrollTo_y") {
		      this.skipY = 1;
		    }
		  }
		};
		ScrollToPlugin.max = _max;
		ScrollToPlugin.getOffset = _getOffset;
		ScrollToPlugin.buildGetter = _buildGetter;
		_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

		exports.ScrollToPlugin = ScrollToPlugin;
		exports.default = ScrollToPlugin;

		Object.defineProperty(exports, '__esModule', { value: true });

	})));
} (ScrollToPlugin, ScrollToPlugin.exports));

/*!
 * VelocityTracker: 3.0.5
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap$1,
    _coreInitted$1,
    _toArray$1,
    _getUnit$1,
    _first,
    _ticker,
    _time1,
    _getCache$1,
    _getGSAP$1 = function _getGSAP() {
  return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap);
},
    _lookup = {},
    _round$1 = function _round(value) {
  return Math.round(value * 10000) / 10000;
},
    _getID = function _getID(target) {
  return _getCache$1(target).id;
},
    _getByTarget = function _getByTarget(target) {
  return _lookup[_getID(typeof target === "string" ? _toArray$1(target)[0] : target)];
},
    _onTick = function _onTick(time) {
  var pt = _first,
      val; //if the frame rate is too high, we won't be able to track the velocity as well, so only update the values about 20 times per second

  if (time - _time1 >= 0.05) {
    _time1 = time;

    while (pt) {
      val = pt.g(pt.t, pt.p);

      if (val !== pt.v1 || time - pt.t1 > 0.2) {
        //use a threshold of 0.2 seconds for zeroing-out velocity. If we only use 0.05 and things update slightly slower, like some Android devices dispatch "touchmove" events sluggishly so 2 or 3 ticks of the gsap.ticker may elapse inbetween, thus it may appear like the object is not moving but it actually is but it's not updating as frequently. A threshold of 0.2 seconds seems to be a good balance. We want to update things frequently (0.05 seconds) when they're moving so that we can respond to fast motions accurately, but we want to be more resistant to go back to a zero velocity.
        pt.v2 = pt.v1;
        pt.v1 = val;
        pt.t2 = pt.t1;
        pt.t1 = time;
      }

      pt = pt._next;
    }
  }
},
    _types = {
  deg: 360,
  rad: Math.PI * 2
},
    _initCore$1 = function _initCore() {
  gsap$1 = _getGSAP$1();

  if (gsap$1) {
    _toArray$1 = gsap$1.utils.toArray;
    _getUnit$1 = gsap$1.utils.getUnit;
    _getCache$1 = gsap$1.core.getCache;
    _ticker = gsap$1.ticker;
    _coreInitted$1 = 1;
  }
};

var PropTracker = function PropTracker(target, property, type, next) {
  this.t = target;
  this.p = property;
  this.g = target._gsap.get;
  this.rCap = _types[type || _getUnit$1(this.g(target, property))]; //rotational cap (for degrees, "deg", it's 360 and for radians, "rad", it's Math.PI * 2)

  this.v1 = this.v2 = 0;
  this.t1 = this.t2 = _ticker.time;

  if (next) {
    this._next = next;
    next._prev = this;
  }
};

var VelocityTracker =
/*#__PURE__*/
function () {
  function VelocityTracker(target, property) {
    if (!_coreInitted$1) {
      _initCore$1();
    }

    this.target = _toArray$1(target)[0];
    _lookup[_getID(this.target)] = this;
    this._props = {};
    property && this.add(property);
  }

  VelocityTracker.register = function register(core) {
    gsap$1 = core;

    _initCore$1();
  };

  var _proto = VelocityTracker.prototype;

  _proto.get = function get(property, skipRecentTick) {
    var pt = this._props[property],
        val,
        dif,
        rotationCap;

    if (!pt) {
      console.warn("Not tracking " + property + " velocity.");
    }

    val = parseFloat(skipRecentTick ? pt.v1 : pt.g(pt.t, pt.p));
    dif = val - parseFloat(pt.v2);
    rotationCap = pt.rCap;

    if (rotationCap) {
      //rotational values need special interpretation so that if, for example, they go from 179 to -178 degrees it is interpreted as a change of 3 instead of -357.
      dif = dif % rotationCap;

      if (dif !== dif % (rotationCap / 2)) {
        dif = dif < 0 ? dif + rotationCap : dif - rotationCap;
      }
    }

    return _round$1(dif / ((skipRecentTick ? pt.t1 : _ticker.time) - pt.t2));
  };

  _proto.getAll = function getAll() {
    var result = {},
        props = this._props,
        p;

    for (p in props) {
      result[p] = this.get(p);
    }

    return result;
  };

  _proto.isTracking = function isTracking(property) {
    return property in this._props;
  };

  _proto.add = function add(property, type) {
    if (!(property in this._props)) {
      if (!_first) {
        _ticker.add(_onTick);

        _time1 = _ticker.time;
      }

      _first = this._props[property] = new PropTracker(this.target, property, type, _first);
    }
  };

  _proto.remove = function remove(property) {
    var pt = this._props[property],
        prev,
        next;

    if (pt) {
      prev = pt._prev;
      next = pt._next;

      if (prev) {
        prev._next = next;
      }

      if (next) {
        next._prev = prev;
      } else if (_first === pt) {
        _ticker.remove(_onTick);

        _first = 0;
      }

      delete this._props[property];
    }
  };

  _proto.kill = function kill(shallow) {
    for (var p in this._props) {
      this.remove(p);
    }

    if (!shallow) {
      delete _lookup[_getID(this.target)];
    }
  };

  VelocityTracker.track = function track(targets, properties, types) {
    if (!_coreInitted$1) {
      _initCore$1();
    }

    var result = [],
        targs = _toArray$1(targets),
        a = properties.split(","),
        t = (types || "").split(","),
        i = targs.length,
        tracker,
        j;

    while (i--) {
      tracker = _getByTarget(targs[i]) || new VelocityTracker(targs[i]);
      j = a.length;

      while (j--) {
        tracker.add(a[j], t[j] || t[0]);
      }

      result.push(tracker);
    }

    return result;
  };

  VelocityTracker.untrack = function untrack(targets, properties) {
    var props = (properties || "").split(",");

    _toArray$1(targets).forEach(function (target) {
      var tracker = _getByTarget(target);

      if (tracker) {
        if (!props.length) {
          tracker.kill(1);
        } else {
          props.forEach(function (p) {
            return tracker.remove(p);
          });
        }
      }
    });
  };

  VelocityTracker.isTracking = function isTracking(target, property) {
    var tracker = _getByTarget(target);

    return tracker && tracker.isTracking(property);
  };

  VelocityTracker.getVelocity = function getVelocity(target, property) {
    var tracker = _getByTarget(target);

    return !tracker || !tracker.isTracking(property) ? console.warn("Not tracking velocity of " + property) : tracker.get(property);
  };

  return VelocityTracker;
}();
VelocityTracker.getByTarget = _getByTarget;
_getGSAP$1() && gsap$1.registerPlugin(VelocityTracker);

/*!
 * InertiaPlugin 3.0.5
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

var gsap,
    _coreInitted,
    _parseEase,
    _toArray,
    _power3,
    _config,
    _getUnit,
    PropTween,
    _getCache,
    _checkPointRatio,
    _clamp,
    _getTracker = VelocityTracker.getByTarget,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _bonusValidated = 1,
    //<name>InertiaPlugin</name>
_isArray = Array.isArray,
    _emptyFunc = function _emptyFunc(p) {
  return p;
},
    _bigNum = 1e10,
    _tinyNum = 1 / _bigNum,
    _checkPoint = 0.05,
    _round = function _round(value) {
  return Math.round(value * 10000) / 10000;
},
    _extend = function _extend(obj, defaults, exclude) {
  for (var p in defaults) {
    if (!(p in obj) && p !== exclude) {
      obj[p] = defaults[p];
    }
  }

  return obj;
},
    _getClosest = function _getClosest(n, values, max, min, radius) {
  var i = values.length,
      closest = 0,
      absDif = _bigNum,
      val,
      dif,
      p,
      dist;

  if (_isObject(n)) {
    while (i--) {
      val = values[i];
      dif = 0;

      for (p in n) {
        dist = val[p] - n[p];
        dif += dist * dist;
      }

      if (dif < absDif) {
        closest = i;
        absDif = dif;
      }
    }

    if ((radius || _bigNum) < _bigNum && radius < Math.sqrt(absDif)) {
      return n;
    }
  } else {
    while (i--) {
      val = values[i];
      dif = val - n;

      if (dif < 0) {
        dif = -dif;
      }

      if (dif < absDif && val >= min && val <= max) {
        closest = i;
        absDif = dif;
      }
    }
  }

  return values[closest];
},
    _parseEnd = function _parseEnd(curProp, end, max, min, name, radius) {
  if (curProp.end === "auto") {
    return curProp;
  }

  var endVar = curProp.end,
      adjustedEnd,
      p;
  max = isNaN(max) ? _bigNum : max;
  min = isNaN(min) ? -_bigNum : min;

  if (_isObject(end)) {
    //for objects, like {x, y} where they're linked and we must pass an object to the function or find the closest value in an array.
    adjustedEnd = end.calculated ? end : (_isFunction(endVar) ? endVar(end) : _getClosest(end, endVar, max, min, radius)) || end;

    if (!end.calculated) {
      for (p in adjustedEnd) {
        end[p] = adjustedEnd[p];
      }

      end.calculated = true;
    }

    adjustedEnd = adjustedEnd[name];
  } else {
    adjustedEnd = _isFunction(endVar) ? endVar(end) : _isArray(endVar) ? _getClosest(end, endVar, max, min, radius) : parseFloat(endVar);
  }

  if (adjustedEnd > max) {
    adjustedEnd = max;
  } else if (adjustedEnd < min) {
    adjustedEnd = min;
  }

  return {
    max: adjustedEnd,
    min: adjustedEnd,
    unitFactor: curProp.unitFactor
  };
},
    _getNumOrDefault = function _getNumOrDefault(vars, property, defaultValue) {
  return isNaN(vars[property]) ? defaultValue : +vars[property];
},
    _calculateChange = function _calculateChange(velocity, duration) {
  return duration * _checkPoint * velocity / _checkPointRatio;
},
    _calculateDuration = function _calculateDuration(start, end, velocity) {
  return Math.abs((end - start) * _checkPointRatio / velocity / _checkPoint);
},
    _reservedProps = {
  resistance: 1,
  checkpoint: 1,
  preventOvershoot: 1,
  linkedProps: 1,
  radius: 1,
  duration: 1
},
    _processLinkedProps = function _processLinkedProps(target, vars, getVal, resistance) {
  if (vars.linkedProps) {
    //when there are linkedProps (typically "x,y" where snapping has to factor in multiple properties, we must first populate an object with all of those end values, then feed it to the function that make any necessary alterations. So the point of this first loop is to simply build an object (like {x:100, y:204.5}) for feeding into that function which we'll do later in the "real" loop.
    var linkedPropNames = vars.linkedProps.split(","),
        linkedProps = {},
        i,
        p,
        curProp,
        curVelocity,
        tracker,
        curDuration;

    for (i = 0; i < linkedPropNames.length; i++) {
      p = linkedPropNames[i];
      curProp = vars[p];

      if (curProp) {
        if (_isNumber(curProp.velocity)) {
          curVelocity = curProp.velocity;
        } else {
          tracker = tracker || _getTracker(target);
          curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
        }

        curDuration = Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance));
        linkedProps[p] = parseFloat(getVal(target, p)) + _calculateChange(curVelocity, curDuration);
      }
    }

    return linkedProps;
  }
},
    _calculateTweenDuration = function _calculateTweenDuration(target, vars, maxDuration, minDuration, overshootTolerance, recordEnd) {
  if (maxDuration === void 0) {
    maxDuration = 10;
  }

  if (minDuration === void 0) {
    minDuration = 0.2;
  }

  if (overshootTolerance === void 0) {
    overshootTolerance = 1;
  }

  if (recordEnd === void 0) {
    recordEnd = 0;
  }

  if (_isString(target)) {
    target = _toArray(target)[0];
  }

  if (!target) {
    return 0;
  }

  var duration = 0,
      clippedDuration = _bigNum,
      inertiaVars = vars.inertia || vars,
      getVal = _getCache(target).get,
      resistance = _getNumOrDefault(inertiaVars, "resistance", _config.resistance),
      p,
      curProp,
      curDuration,
      curVelocity,
      curVal,
      end,
      curClippedDuration,
      tracker,
      unitFactor,
      linkedProps; //when there are linkedProps (typically "x,y" where snapping has to factor in multiple properties, we must first populate an object with all of those end values, then feed it to the function that make any necessary alterations. So the point of this first loop is to simply build an object (like {x:100, y:204.5}) for feeding into that function which we'll do later in the "real" loop.


  linkedProps = _processLinkedProps(target, inertiaVars, getVal, resistance);

  for (p in inertiaVars) {
    if (!_reservedProps[p]) {
      curProp = inertiaVars[p];

      if (!_isObject(curProp)) {
        tracker = tracker || _getTracker(target);

        if (tracker && tracker.isTracking(p)) {
          curProp = _isNumber(curProp) ? {
            velocity: curProp
          } : {
            velocity: tracker.get(p)
          }; //if we're tracking this property, we should use the tracking velocity and then use the numeric value that was passed in as the min and max so that it tweens exactly there.
        } else {
          curVelocity = +curProp || 0;
          curDuration = Math.abs(curVelocity / resistance);
        }
      }

      if (_isObject(curProp)) {
        if (_isNumber(curProp.velocity)) {
          curVelocity = curProp.velocity;
        } else {
          tracker = tracker || _getTracker(target);
          curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
        }

        curDuration = _clamp(minDuration, maxDuration, Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance)));
        curVal = parseFloat(getVal(target, p)) || 0;
        end = curVal + _calculateChange(curVelocity, curDuration);

        if ("end" in curProp) {
          curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, inertiaVars.radius);

          if (recordEnd) {
            inertiaVars[p] = _extend(curProp, inertiaVars[p], "end");
          }
        }

        if ("max" in curProp && end > +curProp.max + _tinyNum) {
          unitFactor = curProp.unitFactor || _config.unitFactors[p] || 1; //some values are measured in special units like radians in which case our thresholds need to be adjusted accordingly.
          //if the value is already exceeding the max or the velocity is too low, the duration can end up being uncomfortably long but in most situations, users want the snapping to occur relatively quickly (0.75 seconds), so we implement a cap here to make things more intuitive. If the max and min match, it means we're animating to a particular value and we don't want to shorten the time unless the velocity is really slow. Example: a rotation where the start and natural end value are less than the snapping spot, but the natural end is pretty close to the snap.

          curClippedDuration = curVal > curProp.max && curProp.min !== curProp.max || curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.max, curVelocity);

          if (curClippedDuration + overshootTolerance < clippedDuration) {
            clippedDuration = curClippedDuration + overshootTolerance;
          }
        } else if ("min" in curProp && end < +curProp.min - _tinyNum) {
          unitFactor = curProp.unitFactor || _config.unitFactors[p] || 1; //some values are measured in special units like radians in which case our thresholds need to be adjusted accordingly.
          //if the value is already exceeding the min or if the velocity is too low, the duration can end up being uncomfortably long but in most situations, users want the snapping to occur relatively quickly (0.75 seconds), so we implement a cap here to make things more intuitive.

          curClippedDuration = curVal < curProp.min && curProp.min !== curProp.max || curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.min, curVelocity);

          if (curClippedDuration + overshootTolerance < clippedDuration) {
            clippedDuration = curClippedDuration + overshootTolerance;
          }
        }

        if (curClippedDuration > duration) {
          duration = curClippedDuration;
        }
      }

      if (curDuration > duration) {
        duration = curDuration;
      }
    }
  }

  if (duration > clippedDuration) {
    duration = clippedDuration;
  }

  return duration > maxDuration ? maxDuration : duration < minDuration ? minDuration : duration;
},
    _initCore = function _initCore() {
  gsap = _getGSAP();

  if (gsap) {
    _parseEase = gsap.parseEase;
    _toArray = gsap.utils.toArray;
    _getUnit = gsap.utils.getUnit;
    _getCache = gsap.core.getCache;
    _clamp = gsap.utils.clamp;
    _power3 = _parseEase("power3");
    _checkPointRatio = _power3(0.05);
    PropTween = gsap.core.PropTween;
    gsap.config({
      resistance: 100,
      unitFactors: {
        time: 1000,
        totalTime: 1000
      }
    });
    _config = gsap.config();
    gsap.registerPlugin(VelocityTracker);
    _coreInitted = 1;
  }
};

var InertiaPlugin = {
  version: "3.0.5",
  name: "inertia",
  register: function register(core) {
    gsap = core;

    _initCore();
  },
  init: function init(target, vars, tween, index, targets) {
    if (!_coreInitted) {
      _initCore();
    }

    var tracker = _getTracker(target);

    if (vars === "auto") {
      if (!tracker) {
        console.warn("No inertia tracking on " + target + ". InertiaPlugin.track(target) first.");
        return;
      }

      vars = tracker.getAll();
    }

    this.target = target;
    this.tween = tween;

    var cache = target._gsap,
        getVal = cache.get,
        dur = vars.duration,
        durIsObj = _isObject(dur),
        preventOvershoot = vars.preventOvershoot || durIsObj && dur.overshoot === 0,
        resistance = _getNumOrDefault(vars, "resistance", _config.resistance),
        duration = _isNumber(dur) ? dur : _calculateTweenDuration(target, vars, durIsObj && dur.max || 10, durIsObj && dur.min || 0.2, durIsObj && "overshoot" in dur ? +dur.overshoot : preventOvershoot ? 0 : 1),
        p,
        curProp,
        curVal,
        unit,
        velocity,
        change1,
        end,
        change2,
        linkedProps; //when there are linkedProps (typically "x,y" where snapping has to factor in multiple properties, we must first populate an object with all of those end values, then feed it to the function that make any necessary alterations. So the point of this first loop is to simply build an object (like {x:100, y:204.5}) for feeding into that function which we'll do later in the "real" loop.


    linkedProps = _processLinkedProps(target, vars, getVal, resistance);

    for (p in vars) {
      if (!_reservedProps[p]) {
        curProp = vars[p];

        if (_isFunction(curProp)) {
          curProp = curProp(index, target, targets);
        }

        if (_isNumber(curProp)) {
          velocity = curProp;
        } else if (_isObject(curProp) && !isNaN(curProp.velocity)) {
          velocity = +curProp.velocity;
        } else {
          if (tracker && tracker.isTracking(p)) {
            velocity = tracker.get(p);
          } else {
            console.warn("ERROR: No velocity was defined for " + target + " property: " + p);
          }
        }

        change1 = _calculateChange(velocity, duration);
        change2 = 0;
        curVal = getVal(target, p);
        unit = _getUnit(curVal);
        curVal = parseFloat(curVal);

        if (_isObject(curProp)) {
          end = curVal + change1;

          if ("end" in curProp) {
            curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, vars.radius);
          }

          if ("max" in curProp && +curProp.max < end) {
            if (preventOvershoot || curProp.preventOvershoot) {
              change1 = curProp.max - curVal;
            } else {
              change2 = curProp.max - curVal - change1;
            }
          } else if ("min" in curProp && +curProp.min > end) {
            if (preventOvershoot || curProp.preventOvershoot) {
              change1 = curProp.min - curVal;
            } else {
              change2 = curProp.min - curVal - change1;
            }
          }
        }

        this._props.push(p);

        this._pt = new PropTween(this._pt, target, p, curVal, 0, _emptyFunc, 0, cache.set(target, p, this));
        this._pt.u = unit || 0;
        this._pt.c1 = change1;
        this._pt.c2 = change2;
      }
    }

    tween.duration(duration);
    return _bonusValidated;
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    ratio = _power3(data.tween._time / data.tween._dur);

    while (pt) {
      pt.set(pt.t, pt.p, _round(pt.s + pt.c1 * ratio + pt.c2 * ratio * ratio) + pt.u, pt.d, ratio);
      pt = pt._next;
    }
  }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function (name) {
  return InertiaPlugin[name] = VelocityTracker[name];
});
_getGSAP() && gsap.registerPlugin(InertiaPlugin);

var useDidMountEffect = function (func, deps) {
    var didMount = React.useRef(false);
    React.useEffect(function () {
        if (didMount.current)
            func();
        else
            didMount.current = true;
    }, deps);
};

var usePrevious = function (value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = JSON.parse(JSON.stringify(value));
    }, [value]);
    return ref.current;
};

var waitForScrollEnd = function () {
    var last_changed_frame = 0;
    var last_x = window.scrollX;
    var last_y = window.scrollY;
    return new Promise(function (resolve) {
        function tick(frames) {
            // We requestAnimationFrame either for 500 frames or until 20 frames with
            // no change have been observed.
            if (frames >= 10 || frames - last_changed_frame > 50) {
                resolve();
                // console.log("scroll end");
            }
            else {
                if (window.scrollX != last_x || window.scrollY != last_y) {
                    last_changed_frame = frames;
                    last_x = window.scrollX;
                    last_y = window.scrollY;
                }
                requestAnimationFrame(tick.bind(null, frames + 1));
            }
        }
        tick(0);
    });
};

var css$4 = ".styles_module_arrowButton__815a21cc {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  outline: none;\n  border-radius: 100px;\n  border: 1px solid var(--color-main-500);\n  background: none;\n  transition: border 0.2s ease, opacity 0.2s ease;\n}\n.styles_module_arrowButton__815a21cc svg {\n  stroke: var(--color-main-500);\n  transition: transform 0.2s ease;\n}\n.styles_module_arrowButton__815a21cc:hover {\n  outline: none;\n  border: 1px solid var(--color-main-200);\n}\n.styles_module_arrowButton__815a21cc:hover svg {\n  transform: translateX(-2px);\n}\n.styles_module_arrowButton__815a21cc:disabled {\n  cursor: not-allowed;\n  opacity: 0.25;\n}\n.styles_module_arrowButton__815a21cc:disabled:hover {\n  outline: none;\n  border: 1px solid var(--color-main-500);\n}\n.styles_module_arrowButton__815a21cc:disabled:hover svg {\n  transform: translateX(0);\n}";
var modules_efc4e723$4 = {"arrowButton":"styles_module_arrowButton__815a21cc"};
n(css$4,{});

var ArrowButton = React.forwardRef(function (props, ref) {
    return (React.createElement("button", { ref: ref, className: "".concat(modules_efc4e723$4.arrowButton, " ").concat(props.className), style: __assign({ transform: props.direction === "left" ? "rotate(0deg)" : "rotate(180deg)" }, props.style), disabled: props.disabled, onClick: props.onClick, onMouseUp: props.onMouseUp, onMouseDown: props.onMouseDown },
        React.createElement("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M7.12901 11.5292L1.59982 6L7.12901 0.47081" }))));
});
ArrowButton.displayName = "ArrowButton";
ArrowButton.defaultProps = {
    className: "",
    disabled: false,
    direction: "left",
    style: {},
    onClick: function () { },
    onMouseDown: function () { },
    onMouseUp: function () { },
};

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////
var ChipsSlider = function (props) {
    // Refs
    var sliderContainerRef = React.useRef(null);
    var sliderViewRef = React.useRef(null);
    var sliderRef = React.useRef(null);
    var sliderItemRefs = React.useRef([]);
    var sliderItemWrapRefs = React.useRef([]);
    var arrowLeftRef = React.useRef(null);
    var arrowRightRef = React.useRef(null);
    // States
    var _a = React.useState(0), sliderViewState = _a[0], setSliderViewWidthState = _a[1];
    var _b = React.useState({ left: 0, right: 0 }), triggerPointsState = _b[0], setTriggerPointsState = _b[1];
    var _c = React.useState(props.defaultIndex), activeIndex = _c[0], setActiveIndex = _c[1];
    var prevIndex = usePrevious(activeIndex);
    var _d = React.useState(true), onThrowComplete = _d[0], setOnThrowComplete = _d[1];
    var _e = React.useState(false), isDragLoaded = _e[0], setIsDragLoaded = _e[1];
    var _f = React.useState([]), snapPoints = _f[0], setSnapPoints = _f[1];
    var _g = React.useState(false), isScrollSnap = _g[0], setIsScrollSnap = _g[1];
    var _h = React.useState(false), isArrowButtonDisabled = _h[0], setIsArrowButtonDisabled = _h[1];
    // Animate cards
    var animateItemActiveState = function (item) {
        gsapWithCSS.to(item, {
            scale: props.activeCardScale,
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--color-accent-500"),
            color: "white",
            borderColor: getComputedStyle(document.documentElement).getPropertyValue("--color-accent-500"),
            duration: 0.1,
        });
    };
    var animateItemNormalState = function (item) {
        gsapWithCSS.to(item, {
            scale: 1,
            backgroundColor: "#fff",
            color: getComputedStyle(document.documentElement).getPropertyValue("--color-main-200"),
            borderColor: getComputedStyle(document.documentElement).getPropertyValue("--color-main-200"),
            duration: 0.4,
        });
    };
    //
    var getSliderPostionByIndex = function (index) {
        var currentItem = sliderItemWrapRefs.current[index];
        var clickedItemPosition = currentItem.offsetLeft;
        var sliderViewWidth = sliderViewRef.current.offsetWidth;
        var gridWidth = props.cardWidth + props.spaceBetween;
        var newSliderPosition = clickedItemPosition - sliderViewWidth / 2 + gridWidth / 2;
        // console.log("clickedItemPosition", newSliderPosition);
        return newSliderPosition;
    };
    // //
    var scrollToSelectedIndex = function (index, duration) {
        gsapWithCSS.to(sliderRef.current, {
            duration: duration,
            scrollTo: {
                x: getSliderPostionByIndex(index),
            },
            onComplete: function () {
                setIsArrowButtonDisabled(false);
            },
        });
    };
    //
    var updateOnResize = function () {
        setSliderViewWidthState(sliderViewRef.current.offsetWidth);
        var arrowLeftBoundingBox = arrowLeftRef.current.getBoundingClientRect();
        var arrowRightBoundingBox = arrowRightRef.current.getBoundingClientRect();
        var rightArrowXOffset = window.innerWidth - arrowRightBoundingBox.x - arrowRightBoundingBox.width;
        var hidePoint = 40;
        if (arrowLeftBoundingBox.x < hidePoint) {
            arrowLeftRef.current.style.opacity = "0";
            arrowLeftRef.current.style.pointerEvents = "none";
        }
        else {
            arrowLeftRef.current.style.opacity = "1";
            arrowLeftRef.current.style.pointerEvents = "all";
        }
        if (rightArrowXOffset < hidePoint) {
            arrowRightRef.current.style.opacity = "0";
            arrowRightRef.current.style.pointerEvents = "none";
        }
        else {
            arrowRightRef.current.style.opacity = "1";
            arrowRightRef.current.style.pointerEvents = "all";
        }
    };
    // Initial resize and resize updates
    React.useEffect(function () {
        gsapWithCSS.registerPlugin(Draggable.exports.Draggable, InertiaPlugin, ScrollToPlugin.exports.ScrollToPlugin);
        gsapWithCSS.set(sliderViewRef.current, {
            x: 200,
        });
        var snapPoints = sliderItemWrapRefs.current.map(function (item) {
            return (item.getBoundingClientRect().left -
                sliderViewRef.current.getBoundingClientRect().left);
        });
        setSnapPoints(snapPoints);
        window.addEventListener("resize", updateOnResize);
        return function () {
            window.removeEventListener("resize", updateOnResize);
        };
    }, []);
    // Initiate Draggable object on mount; updates on resize only
    React.useEffect(function () {
        var gridWidth = props.cardWidth + props.spaceBetween;
        var sliderViewWidth = sliderViewRef.current.offsetWidth;
        var updateOnDrag = function () {
            sliderItemWrapRefs.current.forEach(function (item, index) {
                var itemXLeftEdge = item.getBoundingClientRect().right -
                    sliderViewRef.current.getBoundingClientRect().left -
                    props.spaceBetween;
                var itemXRightEdge = item.getBoundingClientRect().left -
                    sliderViewRef.current.getBoundingClientRect().left +
                    props.spaceBetween;
                if (itemXLeftEdge < triggerPointsState.right &&
                    itemXRightEdge > triggerPointsState.left) {
                    // console.log("item", item);
                    setActiveIndex(index);
                }
            });
        };
        var triggerPointsState = {
            left: sliderViewWidth / 2 - gridWidth / 2 - props.spaceBetween / 2,
            right: sliderViewWidth / 2 + gridWidth / 2 + props.spaceBetween / 2,
        };
        setTriggerPointsState(triggerPointsState);
        Draggable.exports.Draggable.create(sliderRef.current, {
            type: "scrollLeft",
            edgeResistance: 0.9,
            inertia: true,
            maxDuration: 0.6,
            throwProps: true,
            throwResistance: 0.2,
            snap: snapPoints,
            onDragStart: function () {
                setIsScrollSnap(false);
                setOnThrowComplete(false);
            },
            onDrag: updateOnDrag,
            onThrowUpdate: updateOnDrag,
            onThrowComplete: function () {
                setOnThrowComplete(true);
            },
        });
        setIsDragLoaded(true);
    }, [sliderViewState, snapPoints]);
    // Change an active item on aactive index change
    useDidMountEffect(function () {
        animateItemActiveState(sliderItemRefs.current[activeIndex]);
        if (typeof props.onChange === "function") {
            props.onChange(activeIndex);
        }
        if (prevIndex !== activeIndex) {
            animateItemNormalState(sliderItemRefs.current[prevIndex]);
        }
        sliderItemRefs.current.forEach(function (item, index) {
            if (index !== activeIndex) {
                gsapWithCSS.set(item, {
                    x: index > activeIndex
                        ? props.spaceBetween / 2
                        : -props.spaceBetween / 2,
                });
            }
            else {
                gsapWithCSS.set(item, {
                    x: 0,
                });
            }
        });
    }, [activeIndex, prevIndex]);
    // Animate slider to the initial state when drag object and the document are loaded
    React.useEffect(function () {
        var executeAnimation = function () {
            gsapWithCSS.to(sliderContainerRef.current, {
                opacity: 1,
                duration: 0.3,
            });
            gsapWithCSS.to(sliderViewRef.current, {
                x: 0,
                duration: 1,
                ease: "elastic.out(1, 0.9)",
            });
        };
        if (document.readyState === "complete") {
            executeAnimation();
        }
        else {
            window.addEventListener("load", function () {
                executeAnimation();
            });
        }
        gsapWithCSS.set(sliderRef.current, {
            scrollTo: {
                x: getSliderPostionByIndex(activeIndex),
            },
        });
    }, [isDragLoaded]);
    //
    var handleCardClick = function (clickedIndex) {
        if (onThrowComplete) {
            // neutralizing the right margin of the slider
            if (clickedIndex > activeIndex) {
                scrollToSelectedIndex(clickedIndex, 0.4);
            }
            else {
                scrollToSelectedIndex(clickedIndex, 0.4);
            }
            setActiveIndex(clickedIndex);
        }
    };
    var goToNextCard = function () {
        if (activeIndex < props.items.length - 1) {
            setIsArrowButtonDisabled(true);
            var newIndex = activeIndex + 1;
            setActiveIndex(newIndex);
            scrollToSelectedIndex(newIndex, 0.3);
            // console.log("next", newIndex);
        }
    };
    var goPreviousCard = function () {
        if (activeIndex > 0) {
            setIsArrowButtonDisabled(true);
            var newIndex = activeIndex - 1;
            setActiveIndex(newIndex);
            scrollToSelectedIndex(newIndex, 0.3);
            // console.log("prev", newIndex);
        }
    };
    //
    return (React.createElement("div", { className: "".concat(modules_efc4e723$5.sliderContainer, " ").concat(props.containterClassName), ref: sliderContainerRef, onWheel: function () {
            setIsScrollSnap(true);
            // console.log(e.deltaX);
            waitForScrollEnd().then(function () {
                // console.log("foo", e.deltaX);
                sliderItemWrapRefs.current.forEach(function (item, index) {
                    var itemXLeftEdge = item.getBoundingClientRect().right -
                        sliderViewRef.current.getBoundingClientRect().left -
                        props.spaceBetween;
                    var itemXRightEdge = item.getBoundingClientRect().left -
                        sliderViewRef.current.getBoundingClientRect().left +
                        props.spaceBetween;
                    if (itemXLeftEdge < triggerPointsState.right &&
                        itemXRightEdge > triggerPointsState.left) {
                        // console.log("item", item);
                        setActiveIndex(index);
                    }
                });
            });
        }, style: {
            marginLeft: "-20px",
            marginRight: "-20px",
        } },
        React.createElement(ArrowButton, { ref: arrowLeftRef, className: "".concat(modules_efc4e723$5.arrowLeft, " ").concat(modules_efc4e723$5.arrowButton, " ").concat(props.arrowsClassName), direction: "left", onMouseUp: goPreviousCard, disabled: activeIndex === 0, style: {
                pointerEvents: isArrowButtonDisabled ? "none" : "auto",
            } }),
        React.createElement(ArrowButton, { ref: arrowRightRef, className: "".concat(modules_efc4e723$5.rightArrow, " ").concat(modules_efc4e723$5.arrowButton, " ").concat(props.arrowsClassName), direction: "right", onMouseUp: goToNextCard, disabled: activeIndex === props.items.length - 1, style: {
                pointerEvents: isArrowButtonDisabled ? "none" : "auto",
            } }),
        React.createElement("div", { className: "".concat(modules_efc4e723$5.sliderWrap), ref: sliderViewRef },
            props.showGuidelines ? (React.createElement(React.Fragment, null,
                React.createElement("div", { style: {
                        position: "absolute",
                        width: "1px",
                        height: "100%",
                        top: 0,
                        left: "".concat(triggerPointsState.left, "px"),
                        background: "red",
                    } }),
                React.createElement("div", { style: {
                        position: "absolute",
                        width: "1px",
                        height: "100%",
                        top: 0,
                        left: "".concat(triggerPointsState.right, "px"),
                        background: "blue",
                    } }))) : null,
            React.createElement("div", { className: modules_efc4e723$5.slider, ref: sliderRef, id: "small-cards-slider", style: {
                    columnGap: props.spaceBetween,
                    scrollSnapType: isScrollSnap ? "x mandatory" : "none",
                } },
                React.createElement("div", { className: modules_efc4e723$5.sliderCards, style: {
                        paddingLeft: sliderContainerRef.current
                            ? "".concat(sliderContainerRef.current.offsetWidth / 2 -
                                props.cardWidth / 2 -
                                props.spaceBetween / 2, "px")
                            : 0,
                        paddingRight: sliderContainerRef.current
                            ? "".concat(sliderContainerRef.current.offsetWidth / 2 -
                                props.cardWidth / 2, "px")
                            : 0,
                    } }, props.items.map(function (item, index) {
                    return (React.createElement("div", { key: index, className: "".concat(modules_efc4e723$5.itemWrap), ref: function (el) { return (sliderItemWrapRefs.current[index] = el); }, style: {
                            height: "".concat(props.cardHeight + props.spaceBetween, "px"),
                            width: "".concat(props.cardWidth + props.spaceBetween, "px"),
                        } },
                        React.createElement("div", { "data-index": index, className: "".concat(modules_efc4e723$5.item), ref: function (el) { return (sliderItemRefs.current[index] = el); }, onClick: function () { return handleCardClick(index); }, style: {
                                height: "".concat(props.cardHeight, "px"),
                                width: "".concat(props.cardWidth, "px"),
                            } },
                            React.createElement("span", { style: {
                                    fontSize: "".concat(props.cardFontSize, "px"),
                                } }, item.label))));
                })))),
        props.caption ? (React.createElement("div", { className: modules_efc4e723$5.itemCaption },
            React.createElement("span", null, props.items[activeIndex].caption))) : null));
};
ChipsSlider.defaultProps = {
    containterClassName: "",
    arrowsClassName: "",
    defaultIndex: 0,
    spaceBetween: 20,
    activeCardScale: 1.3,
    cardWidth: 76,
    cardHeight: 76,
    cardFontSize: 20,
    showGuidelines: false,
    caption: true,
};

var css$3 = ".styles_module_sliderContainer__ebbd8da4 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.styles_module_sliderContainer__ebbd8da4:after, .styles_module_sliderContainer__ebbd8da4:before {\n  z-index: 1;\n  content: \"\";\n  top: 0;\n  position: absolute;\n  width: 40px;\n  height: 100%;\n}\n.styles_module_sliderContainer__ebbd8da4:after {\n  left: -40px;\n  background-image: linear-gradient(to right, white, transparent);\n}\n.styles_module_sliderContainer__ebbd8da4:before {\n  right: -40px;\n  background-image: linear-gradient(to left, white, transparent);\n}\n\n.styles_module_slider__ebbd8da4 {\n  overflow-x: hidden;\n  position: relative;\n  display: inline-block;\n  scroll-snap-type: x mandatory;\n  scroll-padding-left: 40px;\n  scroll-padding-right: 40px;\n  margin-left: -40px;\n  margin-right: -40px;\n}\n.styles_module_slider__ebbd8da4::-webkit-scrollbar {\n  display: none;\n}\n.styles_module_slider__ebbd8da4 > div:first-child {\n  margin-left: 40px;\n}\n\n.styles_module_sliderCards__ebbd8da4 {\n  margin-left: 1px;\n  display: flex;\n  flex-wrap: nowrap;\n  width: fit-content;\n}\n\n.styles_module_cardWrap__ebbd8da4 {\n  scroll-snap-align: start;\n}\n\n.styles_module_paginationWrap__ebbd8da4 {\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n}\n\n.styles_module_arrowButton__ebbd8da4 {\n  z-index: 2;\n  position: absolute;\n  top: calc(50% - 40px);\n  transform: translateY(-50%);\n}\n\n.styles_module_lastCard__ebbd8da4 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  border: 1px solid var(--color-main-500);\n  border-radius: 15px;\n}\n.styles_module_lastCard__content__ebbd8da4 {\n  display: flex;\n  align-items: center;\n}\n.styles_module_lastCard__text__ebbd8da4 {\n  font-family: \"ABCMarfa\", sans-serif;\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 130%;\n  margin-right: 15px;\n}\n.styles_module_lastCard__icon__ebbd8da4 {\n  flex: 1 0 auto;\n}";
var modules_efc4e723$3 = {"sliderContainer":"styles_module_sliderContainer__ebbd8da4","slider":"styles_module_slider__ebbd8da4","sliderCards":"styles_module_sliderCards__ebbd8da4","cardWrap":"styles_module_cardWrap__ebbd8da4","paginationWrap":"styles_module_paginationWrap__ebbd8da4","arrowButton":"styles_module_arrowButton__ebbd8da4","lastCard":"styles_module_lastCard__ebbd8da4","lastCard__content":"styles_module_lastCard__content__ebbd8da4","lastCard__text":"styles_module_lastCard__text__ebbd8da4","lastCard__icon":"styles_module_lastCard__icon__ebbd8da4"};
n(css$3,{});

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////
var SliderWrapper = function (props) {
    var sliderContainerRef = React.useRef(null);
    var sliderRef = React.useRef(null);
    var sliderRefChildren = React.useRef([]);
    var lastCardRef = React.useRef(null);
    var arrowLeftRef = React.useRef(null);
    var arrowRightRef = React.useRef(null);
    var _a = React.useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var _b = React.useState(0), viewWidth = _b[0], setViewWidth = _b[1];
    var _c = React.useState({ left: 0, right: 0 }), triggerPointsState = _c[0], setTriggerPointsState = _c[1];
    var _d = React.useState(0), gridWidth = _d[0], setGridWidth = _d[1];
    var _e = React.useState(props.breakpoints[0].cardsToShow), cardsToShow = _e[0], setCardsToShow = _e[1];
    var _f = React.useState(0), paginationAmount = _f[0], setPaginationAmount = _f[1];
    var _g = React.useState(false), isArrowButtonDisabled = _g[0], setIsArrowButtonDisabled = _g[1];
    var lastCardWidth = 200;
    var isLastCard = function () { return props.lastCard && props.lastCard.label !== ""; };
    var setBreakpoint = function () {
        var viewWidth = sliderContainerRef.current.offsetWidth;
        setViewWidth(viewWidth);
        props.breakpoints.forEach(function (breakpoint, index) {
            if (props.breakpoints[index + 1]) {
                if (viewWidth < breakpoint.breakpoint &&
                    viewWidth > props.breakpoints[index + 1].breakpoint) {
                    setCardsToShow(breakpoint.cardsToShow);
                }
            }
            else {
                if (viewWidth < breakpoint.breakpoint) {
                    setCardsToShow(breakpoint.cardsToShow);
                }
            }
        });
    };
    var hideArrowsOnBreakpoint = function () {
        var arrowLeftBoundingBox = arrowLeftRef.current.getBoundingClientRect();
        var arrowRightBoundingBox = arrowRightRef.current.getBoundingClientRect();
        var rightArrowXOffset = window.innerWidth - arrowRightBoundingBox.x - arrowRightBoundingBox.width;
        var hidePoint = arrowsOffsetRatio / 2;
        if (arrowLeftBoundingBox.x < hidePoint) {
            arrowLeftRef.current.style.opacity = "0";
            arrowLeftRef.current.style.pointerEvents = "none";
        }
        else {
            arrowLeftRef.current.style.opacity = "1";
            arrowLeftRef.current.style.pointerEvents = "all";
        }
        if (rightArrowXOffset < hidePoint) {
            arrowRightRef.current.style.opacity = "0";
            arrowRightRef.current.style.pointerEvents = "none";
        }
        else {
            arrowRightRef.current.style.opacity = "1";
            arrowRightRef.current.style.pointerEvents = "all";
        }
    };
    var updateOnDrag = function () {
        // console.log(sliderRef.current.scrollLeft);
        var activeItemBoundsRatio = gridWidth / 2;
        sliderRefChildren.current.forEach(function (item, index) {
            var itemXLeftEdge = item.getBoundingClientRect().left -
                sliderContainerRef.current.getBoundingClientRect().left +
                activeItemBoundsRatio;
            var itemXRightEdge = item.getBoundingClientRect().left -
                sliderContainerRef.current.getBoundingClientRect().left +
                gridWidth -
                activeItemBoundsRatio;
            if (itemXLeftEdge >= triggerPointsState.left &&
                itemXRightEdge <= triggerPointsState.right) {
                setActiveIndex(index);
            }
        });
    };
    var arrowsOffsetRatio = 80;
    //
    var getSliderPostionByIndex = function (index) {
        var currentItem = sliderRefChildren.current[index];
        var clickedItemPosition = currentItem.offsetLeft;
        var newSliderPosition = clickedItemPosition - (arrowsOffsetRatio / 2 - props.spaceBetween * 2);
        // console.log(sliderViewWidth);
        return newSliderPosition;
    };
    //
    var scrollToSelectedIndex = function (index, duration) {
        // console.log(getSliderPostionByIndex(index));
        gsapWithCSS.to(sliderRef.current, {
            // x: getSliderPostionByIndex(index, shiftRatio),
            duration: duration,
            scrollTo: {
                x: getSliderPostionByIndex(index),
            },
            onComplete: function () {
                setIsArrowButtonDisabled(false);
            },
        });
    };
    //
    var goToNextCard = function () {
        if (activeIndex < sliderRefChildren.current.length - 1) {
            setIsArrowButtonDisabled(true);
            var newIndex = activeIndex + 1;
            setActiveIndex(newIndex);
            scrollToSelectedIndex(newIndex, 0.3);
        }
    };
    var goPreviousCard = function () {
        if (activeIndex > 0) {
            setIsArrowButtonDisabled(true);
            var newIndex = activeIndex - 1;
            setActiveIndex(newIndex);
            scrollToSelectedIndex(newIndex, 0.3);
            // console.log("prev", newIndex);
        }
    };
    // If active index was changed
    useDidMountEffect(function () {
        if (typeof props.onChange === "function") {
            props.onChange(activeIndex);
        }
    }, [activeIndex]);
    // Resize updates
    React.useEffect(function () {
        gsapWithCSS.registerPlugin(Draggable.exports.Draggable, ScrollToPlugin.exports.ScrollToPlugin, InertiaPlugin);
        setBreakpoint();
        var onWindowResize = function () {
            setBreakpoint();
            hideArrowsOnBreakpoint();
        };
        window.addEventListener("resize", onWindowResize);
        return function () {
            window.removeEventListener("resize", onWindowResize);
        };
    }, []);
    //
    React.useEffect(function () {
        if (sliderContainerRef.current && sliderRef.current) {
            // console.log(snapPoints);
            var paginationAmount_1 = sliderRefChildren.current.length - cardsToShow + (isLastCard() ? 2 : 1);
            setPaginationAmount(paginationAmount_1);
            var gridWidth_1 = (sliderContainerRef.current.offsetWidth -
                props.spaceBetween * cardsToShow) /
                cardsToShow +
                props.spaceBetween;
            setGridWidth(gridWidth_1);
            var snapPointsWithoutLastCard = sliderRefChildren.current.map(function (item, index) {
                return ((item.getBoundingClientRect().width + props.spaceBetween) * index);
            });
            var snapPoints = isLastCard()
                ? __spreadArray(__spreadArray([], snapPointsWithoutLastCard.slice(0, paginationAmount_1 - 1), true), [
                    snapPointsWithoutLastCard[paginationAmount_1 - 2] +
                        (lastCardWidth + props.spaceBetween),
                ], false) : snapPointsWithoutLastCard;
            // console.log(paginationAmount);
            setTriggerPointsState({
                left: 0,
                right: gridWidth_1,
            });
            Draggable.exports.Draggable.create(sliderRef.current, {
                type: "scrollLeft",
                edgeResistance: 0.9,
                inertia: true,
                maxDuration: 0.6,
                throwResistance: 0.2,
                snap: snapPoints,
                onDragStart: function () {
                    sliderRef.current.style.scrollSnapType = "none";
                },
                onDrag: updateOnDrag,
                onThrowUpdate: updateOnDrag,
            });
        }
    }, [viewWidth]);
    //
    return (React.createElement("div", { className: "".concat(modules_efc4e723$3.sliderContainer, " ").concat(props.containterClassName), ref: sliderContainerRef, onWheel: function () {
            sliderRef.current.style.scrollSnapType = "x mandatory";
            updateOnDrag();
        } },
        props.showGuidelines ? (React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    position: "absolute",
                    width: "1px",
                    height: "100%",
                    top: 0,
                    left: "".concat(triggerPointsState.left, "px"),
                    background: "red",
                } }),
            React.createElement("div", { style: {
                    position: "absolute",
                    width: "1px",
                    height: "100%",
                    top: 0,
                    left: "".concat(triggerPointsState.right, "px"),
                    background: "blue",
                } }))) : null,
        !props.hideArrows ? (React.createElement(React.Fragment, null,
            React.createElement(ArrowButton, { ref: arrowLeftRef, className: "".concat(modules_efc4e723$3.arrowButton, " ").concat(props.arrowsClassName), disabled: activeIndex === 0, onMouseUp: goPreviousCard, style: {
                    left: "".concat(-arrowsOffsetRatio, "px"),
                    pointerEvents: isArrowButtonDisabled ? "none" : "auto",
                } }),
            React.createElement(ArrowButton, { ref: arrowRightRef, direction: "right", className: "".concat(modules_efc4e723$3.arrowButton, " ").concat(props.arrowsClassName), disabled: activeIndex === paginationAmount - 1, onMouseUp: goToNextCard, style: {
                    right: "".concat(-arrowsOffsetRatio, "px"),
                    pointerEvents: isArrowButtonDisabled ? "none" : "auto",
                } }))) : null,
        React.createElement("div", { className: modules_efc4e723$3.slider, ref: sliderRef },
            React.createElement("div", { className: modules_efc4e723$3.sliderCards },
                React.Children.map(props.children, function (child, index) {
                    return (React.createElement("div", { ref: function (el) { return (sliderRefChildren.current[index] = el); }, className: modules_efc4e723$3.cardWrap, style: {
                            flex: "1 0 ".concat((viewWidth - props.spaceBetween * (cardsToShow - 1) - 2) /
                                cardsToShow, "px"),
                            marginRight: "".concat(props.spaceBetween, "px"),
                        } }, child));
                }),
                isLastCard() ? (React.createElement("div", { className: modules_efc4e723$3.lastCard, onClick: function (e) { return props.lastCard.onClick(e); }, style: {
                        flex: "1 0 ".concat(lastCardWidth, "px"),
                    }, ref: lastCardRef },
                    React.createElement("div", { className: modules_efc4e723$3.lastCard__content },
                        React.createElement("span", { className: modules_efc4e723$3.lastCard__text }, props.lastCard.label),
                        React.createElement(Icon, { className: modules_efc4e723$3.lastCard__icon, name: "chevron-in-circle-right" })))) : null)),
        React.createElement("div", { className: "".concat(modules_efc4e723$3.paginationWrap, " ").concat(props.paginationClassName) },
            React.createElement(DotPagination, { activeIndex: activeIndex, totalAmount: paginationAmount }))));
};
SliderWrapper.defaultProps = {
    containterClassName: "",
    paginationClassName: "",
    arrowsClassName: "",
    breakpoints: [
        {
            breakpoint: 1024,
            cardsToShow: 3,
        },
        {
            breakpoint: 768,
            cardsToShow: 2,
        },
        {
            breakpoint: 480,
            cardsToShow: 1,
        },
    ],
    spaceBetween: 20,
    showGuidelines: false,
    hideArrows: false,
};

var css$2 = ".styles_module_pagination__774d3d56 {\n  position: relative;\n  display: flex;\n}\n\n.styles_module_paginationDot__774d3d56 {\n  user-select: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  margin-right: 10px;\n  background-color: var(--color-main-500);\n  opacity: 0.2;\n  transition: width 0.3s ease-out, opacity 0.3s ease;\n}\n.styles_module_paginationDot__774d3d56:last-child {\n  margin-right: 0;\n}\n\n.styles_module_activeDot__774d3d56 {\n  width: 20px;\n  opacity: 1;\n}";
var modules_efc4e723$2 = {"pagination":"styles_module_pagination__774d3d56","paginationDot":"styles_module_paginationDot__774d3d56","activeDot":"styles_module_activeDot__774d3d56"};
n(css$2,{});

var DotPagination = function (props) {
    return (React.createElement("div", { className: "".concat(modules_efc4e723$2.pagination, " ").concat(props.className) }, Array.from(Array(props.totalAmount).keys()).map(function (_, index) {
        return (React.createElement("div", { className: "".concat(modules_efc4e723$2.paginationDot, " ").concat(props.activeIndex === index ? modules_efc4e723$2.activeDot : ""), key: index }));
    })));
};
DotPagination.defaultProps = {
    className: "",
    totalAmount: 6,
    activeIndex: 0,
};

var css$1 = ".styles_module_divider__86777761 {\n  position: relative;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color-main-500);\n  opacity: 0.12;\n}";
var modules_efc4e723$1 = {"divider":"styles_module_divider__86777761"};
n(css$1,{});

var Divider = function (props) {
    return React.createElement("div", { className: "".concat(modules_efc4e723$1.divider, " ").concat(props.className) });
};
Divider.defaultProps = {
    className: "",
};

var Text = function (props) {
    props.className; props.style; props.tag; props.context; props.appStyle; props.marketingStyle; var rest = __rest(props, ["className", "style", "tag", "context", "appStyle", "marketingStyle"]);
    return (React.createElement(props.tag, __assign({ className: "".concat(props.className, " typo-").concat(props.context, "-").concat(props.context === "app" ? props.appStyle : props.marketingStyle), style: __assign({}, props.style) }, rest), props.children));
};
Text.defaultProps = {
    className: "",
    tag: "p",
    context: "app",
    appStyle: "body-main",
    marketingStyle: "paragraph",
};

var css = ".styles_module_loaderWrap__9162498a {\n  position: relative;\n}\n\n.styles_module_loader__9162498a {\n  width: 100%;\n  height: 100%;\n  animation: styles_module_rotate__9162498a 1.2s linear infinite;\n  stroke: var(--color-main-500);\n}\n\n.styles_module_path__9162498a {\n  transform-origin: center;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  stroke-width: 1px;\n}\n\n.styles_module_backPath__9162498a {\n  transform-origin: center;\n  stroke-linecap: round;\n  stroke-width: 1px;\n  opacity: 0.2;\n}\n\n.styles_module_small__9162498a .styles_module_path__9162498a {\n  stroke-dasharray: 90;\n  animation: styles_module_dashSmall__9162498a 2.5s ease-in-out infinite;\n}\n\n.styles_module_medium__9162498a .styles_module_path__9162498a {\n  stroke-dasharray: 100;\n  animation: styles_module_dashMedium__9162498a 2.5s ease-in-out infinite;\n}\n\n.styles_module_large__9162498a .styles_module_path__9162498a {\n  stroke-dasharray: 200;\n  animation: styles_module_dashLarge__9162498a 3.5s ease-in-out infinite;\n}\n\n@keyframes styles_module_rotate__9162498a {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes styles_module_dashSmall__9162498a {\n  0% {\n    stroke-dashoffset: 90;\n  }\n  50% {\n    stroke-dashoffset: 45;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 90;\n    transform: rotate(360deg);\n  }\n}\n@keyframes styles_module_dashMedium__9162498a {\n  0% {\n    stroke-dashoffset: 100;\n  }\n  50% {\n    stroke-dashoffset: 45;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 100;\n    transform: rotate(360deg);\n  }\n}\n@keyframes styles_module_dashLarge__9162498a {\n  0% {\n    stroke-dashoffset: 200;\n  }\n  50% {\n    stroke-dashoffset: 45;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 200;\n    transform: rotate(360deg);\n  }\n}";
var modules_efc4e723 = {"loaderWrap":"styles_module_loaderWrap__9162498a","loader":"styles_module_loader__9162498a","rotate":"styles_module_rotate__9162498a","path":"styles_module_path__9162498a","backPath":"styles_module_backPath__9162498a","small":"styles_module_small__9162498a","dash-small":"styles_module_dashSmall__9162498a","medium":"styles_module_medium__9162498a","dash-medium":"styles_module_dashMedium__9162498a","large":"styles_module_large__9162498a","dash-large":"styles_module_dashLarge__9162498a"};
n(css,{});

var Spinner = function (props) {
    var getSize = function (size) {
        switch (size) {
            case "small":
                return 24;
            case "medium":
                return 40;
            case "large":
                return 80;
            default:
                return 24;
        }
    };
    return (React.createElement("div", { className: "".concat(modules_efc4e723.loaderWrap, " ").concat(props.className || ""), style: __assign(__assign({}, props.style), { width: getSize(props.size), height: getSize(props.size) }) },
        React.createElement("svg", { width: getSize(props.size), height: getSize(props.size), viewBox: "0 0 ".concat(getSize(props.size), " ").concat(getSize(props.size)), fill: "none", className: "".concat(modules_efc4e723.loader, " ").concat(modules_efc4e723[props.size]), xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("circle", { className: modules_efc4e723.path, cx: getSize(props.size) / 2, cy: getSize(props.size) / 2, r: getSize(props.size) / 2 - 3 }),
            React.createElement("circle", { className: modules_efc4e723.backPath, cx: getSize(props.size) / 2, cy: getSize(props.size) / 2, r: getSize(props.size) / 2 - 3 }))));
};
Spinner.defaultProps = {
    className: "",
    style: {},
    size: "small",
};

exports.ArrowButton = ArrowButton;
exports.Button = Button;
exports.ChipsSlider = ChipsSlider;
exports.Divider = Divider;
exports.DotPagination = DotPagination;
exports.Icon = Icon;
exports.Input = Input;
exports.Logo = Logo;
exports.SliderWrapper = SliderWrapper;
exports.Spinner = Spinner;
exports.Text = Text;
//# sourceMappingURL=index.js.map

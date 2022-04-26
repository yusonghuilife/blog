/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
// 定义installedChunks，用来存储加载过的js信息
 	const installedChunks = {
 		main: 0
 	};

 	__webpack_require__.e = function requireEnsure (chunkId) {
     	        // 定义一个存储promise的数组
 		const promises = [];

 		// JSONP chunk loading for javascript
  // installedChunks为一个对象，用来存储加载过的js信息
 		let installedChunkData = installedChunks[chunkId];
 		if (installedChunkData !== 0) { // 0代表已经加载过了
 			// 如果已经存在不为0，则代表正在加载
 			if (installedChunkData) {
    					// installedChunkData[2]存储的是正在加载中的promise
 				promises.push(installedChunkData[2]);
 			} else {
 				// 定义一个promise
 				const promise = new Promise(function (resolve, reject) {
 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
 				});
    					// 存储promise
 				promises.push(installedChunkData[2] = promise);

 				// 创建script标签，开始加载js
 				const script = document.createElement('script');
 				let onScriptComplete;

 				script.charset = 'utf-8';
    					// 设置一个超时时间
 				script.timeout = 120;
 				if (__webpack_require__.nc) {
 					script.setAttribute('nonce', __webpack_require__.nc);
 				}
    					// __webpack_require__.p 就是 __webpack_public_path__ 对应的地址
 				script.src = __webpack_require__.p + '' + ({ 0: 'a-async' }[chunkId] || chunkId) + '.async.js'; ;

 				// 创建一个error，在加载出错后返回
 				const error = new Error();
    					// 定义加载完成后的时间
 				onScriptComplete = function (event) {
 					// avoid mem leaks in IE.
 					script.onerror = script.onload = null;
 					clearTimeout(timeout);
    						// 判断是否加载成功
 					const chunk = installedChunks[chunkId];
    						// 不成功，进行错误处理
 					if (chunk !== 0) {
 						if (chunk) {
 							const errorType = event && (event.type === 'load' ? 'missing' : event.type);
 							const realSrc = event && event.target && event.target.src;
 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
 							error.name = 'ChunkLoadError';
 							error.type = errorType;
 							error.request = realSrc;
 							chunk[1](error);
 						}
 						installedChunks[chunkId] = undefined;
 					}
 				};
 				const timeout = setTimeout(function () {
 					onScriptComplete({ type: 'timeout', target: script });
 				}, 120000);
    					// 加载成功和失败都走onScriptComplete，具体原因看下文
 				script.onerror = script.onload = onScriptComplete;
 				document.head.appendChild(script);
 			}
 		}
    			// 返回promise
 		return Promise.all(promises);
 	};

// https://juejin.cn/post/6895375915140939790#comment

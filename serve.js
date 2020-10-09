// export const serverUrl = 'http://192.168.31.68:8080/api';
// export const serverUrl = 'http://154.8.201.198:8080/api';
export const serverUrl = 'https://qqx.sdrhup.com/api';
const request = (opt) => {
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || null;
	opt.method = opt.method || 'POST';
	opt.header = opt.header || {
		"Content-Type": "application/json"
	};
	opt.success = opt.success || function() {};

	uni.request({
		url: serverUrl + opt.url,
		method: opt.method,
		header: opt.header,
		data: opt.data,
		dataType: 'json',
		success: function(res) {
			opt.success(res.data);
		},
		fail: function() {
			uni.hideLoading();
			uni.showToast({
				icon: 'none',
				title: '请稍后重试'
			});
		}
	})
}
const toast = (opt) => {
	opt = opt || {};
	opt.title = opt.title || '';
	opt.duration = opt.duration || 1500;
	opt.icon = opt.icon || 'none';
	opt.mask = opt.mask || false;
	opt.position = opt.position || 'bottom';
	opt.success = opt.success || function() {};
	opt.fail = opt.fail || function() {};
	opt.complete = opt.complete || function() {};
	uni.showToast({
		title: opt.title,
		mask: opt.mask,
		duration: opt.duration,
		icon: opt.icon,
		position: opt.position,
		success: function(res) {
			opt.success(res);
		},
		fail: function(res) {
			opt.fail(res);
		},
		complete: function(res) {
			opt.complete(res);
		}
	});
}

const modal = (opt) => {
	opt = opt || {};
	opt.title = opt.title || '提示';
	opt.content = opt.content || '';
	opt.showCancel = opt.showCancel || true;
	opt.cancelText = opt.cancelText || '取消';
	opt.cancelColor = opt.cancelColor || '#000000';
	opt.confirmText = opt.confirmText || '确定';
	opt.success = opt.success || function() {};
	opt.fail = opt.fail || function() {};
	opt.complete = opt.complete || function() {};

	uni.showModal({
		title: opt.title,
		content: opt.content,
		showCancel: opt.showCancel,
		cancelText: opt.cancelText,
		cancelColor: opt.cancelColor,
		confirmText: opt.confirmText,
		success: function(res) {
			opt.success(res);
		},
		fail: function(res) {
			opt.fail(res);
		},
		complete: function(res) {
			opt.complete(res);
		}
	});
}
const setStorage = (key, val, fun) => {
	uni.setStorage({
		key: key,
		data: val,
		success: function(res) {
			fun
		}
	});
}

const getStorage = (key) => {
	let data = uni.getStorageSync(key);
	return data;
}

const removeStorage = (key, fun) => {
	uni.removeStorage({
		key: key,
		success: function(res) {
			fun(res)
		}
	})
}

const refunds = (uuid, refundsstatus) => {
	if (refundsstatus == -1 || refundsstatus == 0 || refundsstatus == 1 || refundsstatus == 5) {
		uni.navigateTo({
			url: '/pages/refunds/refunds?uuid=' + uuid
		});
	} else if (refundsstatus == 2 || refundsstatus == 3) {
		uni.navigateTo({
			url: 'pages/refunds/refundsing?uuid=' + uuid + '&refundsstatus=' + refundsstatus
		});
	} else {
		uni.navigateTo({
			url: 'pages/refunds/refundsend?uuid=' + uuid
		});
	}
}

const datechange = (date) => {
	// return new Date(parseInt(date)/1000 * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
	var date = new Date(date); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	// return Y + M + D + h + m + s;
	return Y + M + D;
}

const getwidthheight = (arr) => {
	let space = 12
	try {
		const res = uni.getSystemInfoSync();
		let itemwidth = res.screenWidth
		for (let i = 0; i < arr.length; i++) {
			var width
			var height
			if (arr.length > 1) {
				return {
					width: (itemwidth - 46) / 3,
					height: (itemwidth - 46) / 3,
					mode: 'aspectFill'
				}
			} else {
				if (arr[0].width > arr[0].height) {
					//横着的
					return {
						width: 2 * ((itemwidth - 46) / 3) + 10,
						height: (2 * ((itemwidth - 46) / 3) + 10) / (arr[0].width / arr[0].height)
					}
				} else if (arr[0].width < arr[0].height) {
					//竖着的
					return {
						width: (2 * ((itemwidth - 46) / 3) + 10) * (arr[0].width / arr[0].height),
						height: 2 * ((itemwidth - 46) / 3) + 10
					}
				} else {
					return {
						width: 2 * (itemwidth - 46) / 3 + 10,
						height: 2 * (itemwidth - 46) / 3 + 10
					}
				}
			}
		}
	} catch (e) {
		// error
	}
}
//状态判断
const stateJudgment = (res) => {
	if (res.status == 'TOKENINVALID') {
		uni.showToast({
			title: '登录失效',
			icon: 'none'
		});
		uni.clearStorage('maijiToken');
		uni.navigateTo({
			url: '/pages/login/login'
		});
	} else {
		uni.showToast({
			title: res.message,
			icon: 'none'
		});
	}
}

const Base64 = (res) => {
	var BASE64 = {
		enKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
		deKey: new Array(
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
			52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
			-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
			15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
			-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
			41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
		),
		encode: function(src) {
			//用一个数组来存放编码后的字符，效率比用字符串相加高很多。
			var str = new Array();
			var ch1, ch2, ch3;
			var pos = 0;
			//每三个字符进行编码。
			while (pos + 3 <= src.length) {
				ch1 = src.charCodeAt(pos++);
				ch2 = src.charCodeAt(pos++);
				ch3 = src.charCodeAt(pos++);
				str.push(this.enKey.charAt(ch1 >> 2), this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f));
				str.push(this.enKey.charAt(((ch2 << 2) + (ch3 >> 6)) & 0x3f), this.enKey.charAt(ch3 & 0x3f));
			}
			//给剩下的字符进行编码。
			if (pos < src.length) {
				ch1 = src.charCodeAt(pos++);
				str.push(this.enKey.charAt(ch1 >> 2));
				if (pos < src.length) {
					ch2 = src.charCodeAt(pos);
					str.push(this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f));
					str.push(this.enKey.charAt(ch2 << 2 & 0x3f), '=');
				} else {
					str.push(this.enKey.charAt(ch1 << 4 & 0x3f), '==');
				}
			}
			//组合各编码后的字符，连成一个字符串。
			return str.join('');
		},

		decode: function(src) {
			//用一个数组来存放解码后的字符。
			var str = new Array();
			var ch1, ch2, ch3, ch4;
			var pos = 0;
			//过滤非法字符，并去掉'='。
			src = src.replace(/[^A-Za-z0-9\+\/]/g, '');
			//decode the source string in partition of per four characters.
			while (pos + 4 <= src.length) {
				ch1 = this.deKey[src.charCodeAt(pos++)];
				ch2 = this.deKey[src.charCodeAt(pos++)];
				ch3 = this.deKey[src.charCodeAt(pos++)];
				ch4 = this.deKey[src.charCodeAt(pos++)];
				str.push(String.fromCharCode(
					(ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2), (ch3 << 6 & 0xff) + ch4));
			}
			//给剩下的字符进行解码。
			if (pos + 1 < src.length) {
				ch1 = this.deKey[src.charCodeAt(pos++)];
				ch2 = this.deKey[src.charCodeAt(pos++)];
				if (pos < src.length) {
					ch3 = this.deKey[src.charCodeAt(pos)];
					str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2)));
				} else {
					str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4)));
				}
			}
			//组合各解码后的字符，连成一个字符串。
			return str.join('');
		},
	};
	return BASE64;
}
//判断电子邮箱
const validateEmail = (str) => {
	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	return reg.test(str)
}
//判断发票抬头
const validateRise = (str) => {
	if (str.length > 50) {
		return false
	} else {
		return true
	}
}
//判断纳税人识别号
const checkTaxId = (taxId) => {
	var regArr = [/^[\da-z]{10,15}$/i, /^\d{6}[\da-z]{10,12}$/i, /^[a-z]\d{6}[\da-z]{9,11}$/i,
			/^[a-z]{2}\d{6}[\da-z]{8,10}$/i, /^\d{14}[\dx][\da-z]{4,5}$/i, /^\d{17}[\dx][\da-z]{1,2}$/i,
			/^[a-z]\d{14}[\dx][\da-z]{3,4}$/i, /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i, /^[\d]{6}[\da-z]{13,14}$/i
		],
		i, j = regArr.length;
	for (var i = 0; i < j; i++) {
		if (regArr[i].test(taxId)) {
			return true;
		}
	}
	//纳税人识别号格式错误
	return false;
}
//判断姓名
const validateName = (str) => {
	var reg = /^([\u4e00-\u9fa5]|[a-zA-Z]| |•|-|‧|•|⋅|ㆍ|・|●|(\（+\）)|(\（[\u4e00-\u9fa5]+\）)|(\（[a-zA-Z]+\）))+$/;
	if (str.length > 20 || str.length < 2) {
		return false;
	} else {
		return reg.test(str)
	}
}
//判断为空
const validateEmpty = (keyVal) => {
	if (keyVal == undefined || keyVal == "" || keyVal == null || keyVal.replace(/\s*/g, "") == "") {
		return false
	} else {
		return true
	}
}

const datatime = (val) => {
		var date = new Date(val.replace(/-/g, "/"));
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('1' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
	}
	
	export {
		request,
		toast,
		modal,
		getStorage,
		setStorage,
		removeStorage,
		refunds,
		datechange,
		getwidthheight,
		stateJudgment,
		Base64,
		validateEmail,
		validateName,
		validateEmpty,
		validateRise,
		checkTaxId,
		datatime
	}

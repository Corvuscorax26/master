<template>
	<view>
		<view class="login_title">设置昵称和密码</view>
		<view class="login_input_list">
			<input type="text" class="login_username" placeholder="请输入昵称" v-model="username"/>
		</view>
		<view class="login_input_list">
			<input type="text" class="login_username" placeholder="请输入密码" v-model="password"/>
		</view>
		<button class="login_button" @tap="goBinding">注册并登录</button>
		<view class="login_policy">
			登录即表示您同意<text>隐私政策</text>与<text>用户协议</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				second: 60,
				codeTag: true,
				codeMsg: '点击获取验证码'
			}
		},
		onLoad() {

		},
		methods: {
			clearUsername() {
				this.username = '';
			},
			sendCode() {
				var that = this;
				that.countDown()
			},
			countDown() {
				let that = this;
				if (this.codeTag) {
					this.codeTag = false;
					let interval = setInterval(function() {
						if (that.second-- <= 0) {
							that.second = 60;
							that.codeTag = true;
							that.codeMsg = '再次获取';
							clearInterval(interval);
						}
					}, 1000);
				}
			},
			goBinding() {
				uni.navigateTo({
					url: '/pages/login/binding'
				})
			}
		}
	}
</script>

<style>
	.login_title {
		width: 498rpx;
		height: 240rpx;
		line-height: 240rpx;
		margin-top: 20rpx;
		margin-left: 126rpx;
		font-size: 46rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.login_input_list {
		width: 490rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 130rpx;
		display: flex;
	}
	
	.login_input_list:nth-child(1) {
		margin-top: 62rpx;
	}
	
	.login_username {
		width: 490rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.login_button {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 102rpx;
		margin-left: 125rpx;
		background: #FFC700;
		border: none;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	button::after {
		border: none;
	}
	
	.login_policy {
		width: 750rpx;
		height: 26rpx;
		line-height: 26rpx;
		margin-top: 413rpx;
		text-align: center;
		font-size: 20rpx;
		color: #707070;
	}
	
	.login_policy text {
		border-bottom: 1rpx solid #707070;
		padding: 3rpx;
	}
</style>

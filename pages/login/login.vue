<template>
	<view>
		<view class="login_title">登录</view>
		<view class="login_input_list">
			<input type="text" class="login_username" placeholder="请输入账号" v-model="username"/>
			<image src="/static/img/close.png" mode="aspectFill" class="login_close" @click="clearUsername"></image>
		</view>
		<view class="login_input_list">
			<input type="password" class="login_password" placeholder="请输入密码"/>
		</view>
		<view class="login_sendcode" @click="goCodeLogin">验证码登录</view>
		<button class="login_button" @tap="goPersonalCenter">立即登录</button>
		<view class="login_operation">
			<view class="lo_left" @click="goRetrievePassword">忘记密码</view>
			<view class="lo_line"></view>
			<view class="lo_right" @click="goRegister">用户注册</view>
		</view>
		<view class="login_incision">
			<view class="li_line_left"></view>
			<view class="li_center"></view>
			<view class="li_line_right"></view>
		</view>
		<view class="third_party">
			<view class="tp_view">
				<image src="/static/img/wx_logo.png" class="tp_logo"></image>
				<view class="tp_name">微信登录</view>
			</view>
			<view class="tp_view">
				<image src="/static/img/zfb_logo.png" class="tp_logo"></image>
				<view class="tp_name">支付宝登录</view>
			</view>
		</view>
		<view class="login_policy">
			登录即表示您同意<text>隐私政策</text>与<text>用户协议</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: ''
			}
		},
		onLoad() {

		},
		methods: {
			clearUsername() {
				this.username = '';
			},
			goCodeLogin() {
				uni.navigateTo({
					url: '/pages/login/codeLogin'
				})
			},
			goRegister() {
				uni.navigateTo({
					url: '/pages/login/register'
				})
			},
			goRetrievePassword() {
				uni.navigateTo({
					url: '/pages/login/retrievePassword'
				})
			},
			goPersonalCenter() {
				uni.switchTab({
					url: '/pages/tabbar/tabbar-3/tabbar-3'
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
		width: 468rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.login_close {
		width: 22rpx;
		height: 22rpx;
		margin-top: 34rpx;
	}
	
	.login_password {
		width: 490rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.login_sendcode {
		width: 490rpx;
		height: 61rpx;
		line-height: 61rpx;
		text-align: right;
		margin-left: 130rpx;
		font-size: 24rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.login_button {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 42rpx;
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
	
	.login_operation {
		width: 750rpx;
		height: 64rpx;
		display: flex;
	}
	
	.lo_left {
		width: 355rpx;
		height: 64rpx;
		line-height: 64rpx;
		margin-right: 20rpx;
		text-align: right;
		font-size: 24rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.lo_line {
		width: 1rpx;
		height: 24rpx;
		margin-top: 20rpx;
		background: #E0E0E0;
	}
	
	.lo_right {
		width: 354rpx;
		height: 64rpx;
		line-height: 64rpx;
		margin-left: 20rpx;
		text-align: left;
		font-size: 24rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.login_incision {
		width: 750rpx;
		height: 8rpx;
		display: flex;
		margin-top: 168rpx;
	}
	
	.li_line_left {
		width: 192rpx;
		height: 1rpx;
		background: #343434;
		margin-left: 158rpx;
		margin-right: 21rpx;
		margin-top: 4rpx;
	}
	
	.li_center {
		width: 8rpx;
		height: 8rpx;
		border-radius: 50%;
		background: #343434;
	}
	
	.li_line_right {
		width: 192rpx;
		height: 1rpx;
		background: #343434;
		margin-left: 21rpx;
		margin-top: 4rpx;
	}
	
	.third_party {
		width: 328rpx;
		height: 138rpx;
		display: flex;
		margin-left: 211rpx;
	}
	
	.tp_view {
		width: 164rpx;
		height: 138rpx;
	}
	
	.tp_logo {
		width: 60rpx;
		height: 50rpx;
		margin-left: 52rpx;
		margin-top: 30rpx;
	}
	
	.tp_name {
		width: 164rpx;
		text-align: center;
		font-size: 22rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.login_policy {
		width: 750rpx;
		height: 26rpx;
		line-height: 26rpx;
		margin-top: 40rpx;
		text-align: center;
		font-size: 20rpx;
		color: #707070;
	}
	
	.login_policy text {
		border-bottom: 1rpx solid #707070;
		padding: 3rpx;
	}
</style>

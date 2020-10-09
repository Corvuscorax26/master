<template>
	<view>
		<view class="binding_card">
			<view class="bc_list">
				<view class="bc_title">旧密码</view>
				<input type="number" class="bc_input" placeholder="请输入旧密码"/>
			</view>
			<view class="bc_list">
				<view class="bc_title">新密码</view>
				<input type="number" class="bc_input" placeholder="请输入新密码"/>
			</view>
			<view class="bc_list">
				<view class="bc_title">确认密码</view>
				<input type="number" class="bc_input" placeholder="请再次输入新密码"/>
			</view>
			<view class="bc_list">
				<view class="bc_title">验证码</view>
				<input type="number" class="bc_input" placeholder="请输入验证码"/>
				<view class="input-right" @tap="sendCode()" v-if="codeTag">
					点击获取验证码
				</view>
				<view class="input-right" v-if="!codeTag">
					{{second}}59秒可重发
				</view>
			</view>
		</view>
		<button class="nc_button">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				second: 60,
				codeTag: true,
				codeMsg: '点击获取验证码'
			}
		},
		onLoad() {
			
		},
		methods: {
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
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.binding_card {
		width: 702rpx;
		height: 390rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.bc_list {
		width: 662rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
		margin-left: 20rpx;
	}
	
	.bc_title {
		width: 137rpx;
		height: 90rpx;
		line-height: 90rpx;
		padding: 0 10rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.bc_input {
		width: 308rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 30rpx;
		color: #343434;
	}
	
	.input-right {
		width: 180rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #FFC700;
	}
	
	.nc_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 50rpx;
		margin-left: 175rpx;
		text-align: center;
		background: #FFC700;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}
</style>

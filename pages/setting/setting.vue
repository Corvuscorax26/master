<template>
	<view>
		<view class="setting_box">
			<!-- <view class="setting_detail">
				<view class="setting_title">会员专享</view>
			</view> -->
			<!-- <view class="setting_detail">
				<view class="setting_title">分享领红包</view>
				<view style="display: flex;">
					<image class="pd_image"></image>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view> -->
			<view class="setting_detail" @click="goMyPet">
				<view class="setting_title">宠物身份证</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
			<!-- <view class="setting_detail">
				<view class="setting_title">消息通知</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view> -->
			<view class="setting_detail" @click="goAccountSettings">
				<view class="setting_title">账号设置</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
		</view>
		<view class="setting_box">
			<view class="setting_detail2">
				<view class="setting_title">用户调研</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
			<!-- <view class="setting_detail2">
				<view class="setting_title">关于</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view> -->
		</view>
		<view class="setting_button" @tap="maskShowOrHide">退出账户</view>
		<view v-if="ifMask == 1" class="showMask">
			<view class="mask_box">
				<view class="mask_title">确定退出该账号</view>
				<button class="mask_true">确定</button>
				<button class="mask_false" @tap="maskShowOrHide">取消</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ifMask: 0
			}
		},
		onLoad() {

		},
		methods: {
			maskShowOrHide () {
				if (this.ifMask == 0) {
					this.ifMask = 1;
				} else if (this.ifMask == 1) {
					this.ifMask = 0;
				}
			},
			goAccountSettings() {
				uni.navigateTo({
					url: '/pages/setting/accountSettings'
				})
			},
			goMyPet() {
				uni.navigateTo({
					url: '/pages/myPet/myPet'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.setting_box {
		width: 702rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.setting_detail {
		width: 662rpx;
		height: 89rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.setting_detail2 {
		width: 662rpx;
		height: 89rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.setting_detail:last-child,.setting_detail2:last-child {
		border: none;
	}
	
	.setting_title {
		width: 300rpx;
		height: 89rpx;
		line-height: 89rpx;
		padding-left: 10rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.setting_image {
		width: 26rpx;
		height: 26rpx;
		background: #666666;
		margin-top: 28rpx;
		margin-right: 28rpx;
	}
	
	.setting_subhead {
		width: 100rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 22rpx;
		color: #999999;
		text-align: center;
	}
	
	.setting_button {
		width: 672rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-left: 24rpx;
		padding-left: 30rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		border: none;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	button::after {
		border: none;
	}
	
	.pd_image {
		width: 70rpx;
		height: 70rpx;
		margin-top: 10rpx;
		background: #F3F2F7;
		border-radius: 10rpx;
	}
	
	.pd_more {
		width: 30rpx;
		height: 30rpx;
		margin-left: 12rpx;
		margin-top: 29rpx;
		margin-right: 10rpx;
	}
	
	.showMask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.mask_box {
		width: 500rpx;
		height: 318rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 445rpx;
		left: 125rpx;
	}
	
	.mask_title {
		width: 500rpx;
		height: 134rpx;
		line-height: 134rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		text-align: center;
	}
	
	.mask_true {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #FFC700;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-top: 10rpx;
		margin-left: 50rpx;
		border: none;
	}
	
	.mask_false {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #FFFFFF;
		font-size: 36rpx;
		color: #777777;
		font-weight: bold;
		margin-left: 50rpx;
		border: none;
	}
</style>

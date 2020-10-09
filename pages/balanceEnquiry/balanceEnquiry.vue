<template>
	<view>
		<image src="/static/img/yue.png" class="balance_image"></image>
		<view class="balance_money">¥ 328.32</view>
		<button class="recharge_button" @tap="goRecharge">充值</button>
		<view class="history_bill">
			<view class="history_title">历史账单</view>
			<view class="history_list">
				<view class="history_left">
					<view class="history_name">支付兽医问诊费用</view>
					<view class="history_time">9月12日  08:48</view>
				</view>
				<view class="history_right">- 6.00</view>
			</view>
			<view class="history_list">
				<view class="history_left">
					<view class="history_name">支付兽医问诊费用</view>
					<view class="history_time">9月12日  08:48</view>
				</view>
				<view class="history_right">- 6.00</view>
			</view>
			<view class="history_list">
				<view class="history_left">
					<view class="history_name">支付兽医问诊费用</view>
					<view class="history_time">9月12日  08:48</view>
				</view>
				<view class="history_right">- 6.00</view>
			</view>
			<view class="history_list">
				<view class="history_left">
					<view class="history_name">支付兽医问诊费用</view>
					<view class="history_time">9月12日  08:48</view>
				</view>
				<view class="history_right">- 6.00</view>
			</view>
			<view class="history_list">
				<view class="history_left">
					<view class="history_name">支付兽医问诊费用</view>
					<view class="history_time">9月12日  08:48</view>
				</view>
				<view class="history_right">- 6.00</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
			goRecharge() {
				uni.navigateTo({
					url: '/pages/recharge/recharge'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.balance_image {
		width: 70rpx;
		height: 70rpx;
		margin-top: 70rpx;
		margin-left: 340rpx;
	}
	
	.balance_money {
		width: 750rpx;
		height: 136rpx;
		line-height: 136rpx;
		text-align: center;
		font-size: 48rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.recharge_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 80rpx;
		margin-left: 175rpx;
		background: #FFC700;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}
	
	button:after {
		border: none;
	}
	
	.history_bill {
		width: 702rpx;
		min-height: 50rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 60rpx;
	}
	
	.history_title {
		width: 662rpx;
		height: 48rpx;
		line-height: 48rpx;
		padding-top: 20rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.history_list {
		width: 662rpx;
		height: 128rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
	}
	
	.history_list:last-child {
		border: none;
	}
	
	.history_left {
		width: 480rpx;
		height: 128rpx;
	}
	
	.history_name {
		width: 480rpx;
		height: 48rpx;
		line-height: 48rpx;
		padding-top: 18rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.history_time {
		width: 480rpx;
		height: 42rpx;
		line-height: 42rpx;
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.history_right {
		width: 182rpx;
		height: 128rpx;
		line-height: 128rpx;
		text-align: right;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
	}
</style>

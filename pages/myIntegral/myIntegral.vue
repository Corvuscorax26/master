<template>
	<view>
		<view class="integral_box">
			<image src="/static/img/integralbg.png" class="integral_bg"></image>
			<view class="integral">2382</view>
			<view class="integral_rule" @tap="goIntegralRule">获取和使用规则 ></view>
		</view>
		<view class="integral_detail">
			<view class="integral_title">积分账单</view>
			<view class="integral_list">
				<view class="integral_left">
					<view class="integral_name">活动积分获取</view>
					<view class="integral_time">9月12日  08:48</view>
				</view>
				<view class="integral_right">+ 2</view>
			</view>
			<view class="integral_list">
				<view class="integral_left">
					<view class="integral_name">活动积分获取</view>
					<view class="integral_time">9月12日  08:48</view>
				</view>
				<view class="integral_right">+ 2</view>
			</view>
			<view class="integral_list">
				<view class="integral_left">
					<view class="integral_name">活动积分获取</view>
					<view class="integral_time">9月12日  08:48</view>
				</view>
				<view class="integral_right">+ 2</view>
			</view>
			<view class="integral_list">
				<view class="integral_left">
					<view class="integral_name">活动积分获取</view>
					<view class="integral_time">9月12日  08:48</view>
				</view>
				<view class="integral_right">+ 2</view>
			</view>
			<view class="integral_list">
				<view class="integral_left">
					<view class="integral_name">活动积分获取</view>
					<view class="integral_time">9月12日  08:48</view>
				</view>
				<view class="integral_right">+ 2</view>
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
			goIntegralRule() {
				uni.navigateTo({
					url: '/pages/integralRule/integralRule'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.integral_box {
		width: 750rpx;
		height: 620rpx;
		background: #FFDA6E;
		border-radius: 0 0 374rpx 374rpx;
	}
	
	.integral_bg {
		width: 212rpx;
		height: 212rpx;
		position: absolute;
		top: 0;
		left: 269rpx;
	}
	
	.integral {
		width: 212rpx;
		height: 212rpx;
		line-height: 212rpx;
		text-align: center;
		position: absolute;
		top: 0;
		left: 269rpx;
		font-size: 48rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.integral_rule {
		width: 750rpx;
		height: 58rpx;
		line-height: 58rpx;
		text-align: center;
		font-size: 22rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 212rpx;
		left: 0;
	}
	
	.integral_detail {
		width: 702rpx;
		min-height: 90rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 292rpx;
		left: 24rpx;
	}
	
	.integral_title {
		width: 662rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.integral_list {
		width: 662rpx;
		height: 129rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 20rpx;
		display: flex;
	}
	
	.integral_list:last-child {
		border: none;
	}
	
	.integral_left {
		width: 480rpx;
		height: 128rpx;
	}
	
	.integral_name {
		width: 480rpx;
		height: 48rpx;
		line-height: 48rpx;
		padding-top: 18rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.integral_time {
		width: 480rpx;
		height: 42rpx;
		line-height: 42rpx;
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.integral_right {
		width: 182rpx;
		height: 128rpx;
		line-height: 128rpx;
		text-align: right;
		font-size: 28rpx;
		color: #FF5400;
		font-weight: bold;
	}
</style>

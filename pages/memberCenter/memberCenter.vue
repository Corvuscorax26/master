<template>
	<view>
		<view class="mc_box">
			<view class="member_message">
				<image src="/static/image/usertx.png" class="member_headurl"></image>
				<view class="member_view">
					<view class="member_name">哈密瓜的皮</view>
					<view class="ismember">当前未开通VIP会员</view>
				</view>
			</view>
			<view class="member_setmeal">会员套餐</view>
			<view class="setmeal_box">
				<view :class="[active==0 ? 'setmeal_view_act' : 'setmeal_view']" @tap="changeActive(0)">
					<view class="setmeal_title">连续包年</view>
					<view class="setmeal_money">￥108</view>
				</view>
				<view :class="[active==1 ? 'setmeal_view_act' : 'setmeal_view']" @tap="changeActive(1)">
					<view class="setmeal_title">连续包季</view>
					<view class="setmeal_money">￥108</view>
				</view>
				<view :class="[active==2 ? 'setmeal_view_act' : 'setmeal_view']" @tap="changeActive(2)">
					<view class="setmeal_title">连续包月</view>
					<view class="setmeal_money">￥108</view>
				</view>
			</view>
			<view class="dredge_button">立即开通</view>
		</view>
		<view class="equities_box">
			<view class="equities_title">会员权益</view>
			<view class="equities_view">
				<view class="equities">
					<image src="/static/img/thtc.png"></image>
					<view>会员权益</view>
				</view>
				<view class="equities">
					<image src="/static/img/thtc.png"></image>
					<view>会员权益</view>
				</view>
				<view class="equities">
					<image src="/static/img/thtc.png"></image>
					<view>会员权益</view>
				</view>
				<view class="equities">
					<image src="/static/img/thtc.png"></image>
					<view>会员权益</view>
				</view>
				<view class="equities">
					<image src="/static/img/thtc.png"></image>
					<view>会员权益</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			}
		},
		onLoad() {
	
		},
		methods: {
			changeActive(num) {
				if (this.active == num) {
					return false;
				} else {
					this.active = num;
				}
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.mc_box {
		width: 702rpx;
		height: 590rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
	}
	
	.member_message {
		width: 702rpx;
		height: 180rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
	}
	
	.member_headurl {
		width: 120rpx;
		height: 120rpx;
		margin-top: 20rpx;
		margin-left: 30rpx;
		border-radius: 50%;
	}
	
	.member_view {
		width: 472rpx;
		height: 120rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}
	
	.member_name {
		width: 472rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.ismember {
		width: 472rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.member_setmeal {
		width: 642rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-left: 30rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.setmeal_box {
		width: 658rpx;
		height: 162rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 20rpx;
	}
	
	.setmeal_view {
		width: 206rpx;
		height: 162rpx;
		background: #F3F2F7;
		border-radius: 20rpx;
	}
	
	.setmeal_view_act {
		width: 202rpx;
		height: 158rpx;
		background: #FFF6D8;
		border: 2rpx solid #FFC301;
		border-radius: 20rpx;
	}
	
	.setmeal_title {
		width: 206rpx;
		height: 54rpx;
		line-height: 54rpx;
		padding-top: 28rpx;
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.setmeal_money {
		width: 206rpx;
		height: 52rpx;
		line-height: 52rpx;
		text-align: center;
		font-size: 28rpx;
		color: #FF5400;
		font-weight: bold;
	}
	
	.dredge_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 50rpx;
		margin-left: 151rpx;
		background: #FFC301;
		border-radius: 40rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.equities_box {
		width: 702rpx;
		height: 272rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.equities_title {
		width: 642rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
	}
	
	.equities_view {
		width: 700rpx;
		height: 164rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 1rpx;
	}
	
	.equities {
		width: 140rpx;
		height: 164rpx;
	}
	
	.equities image {
		width: 100rpx;
		height: 100rpx;
		margin-left: 20rpx;
	}
	
	.equities view {
		width: 140rpx;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}
</style>

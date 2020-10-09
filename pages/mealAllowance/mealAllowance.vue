<template>
	<view>
		<view class="integral_box">
			<image src="/static/img/integralbg.png" class="integral_bg"></image>
			<view class="residus_title">剩余问诊</view>
			<view class="residus_detile"><text>5</text>次</view>
		</view>
		<view class="residus_card">
			<view class="residus_list">
				<view class="rl1">
					<view class="rl1_title">犬猫三次问诊</view>
					<view class="rl1_button">去问诊</view>
				</view>
				<view class="progress_bg">
					<view class="progress_bar"></view>
					<image src="/static/img/integralbg.png" class="progress_circle"></image>
				</view>
				<view class="rl2">
					<view class="rl2_view">剩余两次</view>
					<view class="rl2_view">共三次</view>
				</view>
			</view>
			<view class="residus_list">
				<view class="rl1">
					<view class="rl1_title">异宠五次问诊</view>
					<view class="rl1_button">去问诊</view>
				</view>
				<view class="progress_bg">
					<view class="progress_bar"></view>
					<image src="/static/img/integralbg.png" class="progress_circle"></image>
				</view>
				<view class="rl2">
					<view class="rl2_view">剩余两次</view>
					<view class="rl2_view">共三次</view>
				</view>
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
			
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.integral_box {
		width: 750rpx;
		height: 662rpx;
		background: #FFDA6E;
		border-radius: 0 0 374rpx 374rpx;
	}
	
	.integral_bg {
		width: 200rpx;
		height: 200rpx;
		position: absolute;
		top: 50rpx;
		left: 275rpx;
	}
	
	.residus_title {
		width: 200rpx;
		text-align: center;
		position: absolute;
		top: 106rpx;
		left: 275rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.residus_detile {
		width: 200rpx;
		text-align: center;
		position: absolute;
		top: 140rpx;
		left: 275rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.residus_detile text {
		font-size: 48rpx;
		margin-right: 4rpx;
	}
	
	.residus_card {
		width: 702rpx;
		height: 365rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 322rpx;
		left: 24rpx;
	}
	
	.residus_list {
		width: 702rpx;
		height: 182rpx;
	}
	
	.residus_list:first-child {
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.rl1 {
		width: 642rpx;
		height: 88rpx;
		margin-left: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.rl1_title {
		height: 88rpx;
		line-height: 88rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.rl1_button {
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 30rpx;
		margin-top: 19rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: bold;
		background: #FFC700;
		border-radius: 25rpx;
	}
	
	.progress_bg {
		width: 642rpx;
		height: 10rpx;
		margin-left: 30rpx;
		border-radius: 5rpx;
		background: #FFF6D8;
		position: relative;
	}
	
	.progress_bar {
		width: 428rpx;
		height: 10rpx;
		background: #FFDA6E;
		border-radius: 5rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.progress_circle {
		width: 18rpx;
		height: 18rpx;
		border-radius: 50%;
		position: absolute;
		top: -4rpx;
		left: 419rpx;
	}
	
	.rl2 {
		width: 642rpx;
		height: 84rpx;
		margin-left: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.rl2_view {
		height: 84rpx;
		line-height: 84rpx;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
	}
</style>

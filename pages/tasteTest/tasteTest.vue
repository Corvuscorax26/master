<template>
	<view>
		<image src="/static/img/taste_bg.png" class="taste_bg"></image>
		<view class="xq_view xq1" @click="goTasteDetail('猫咪性格测试',1)">
			<image src="/static/img/xq1.png"></image>
			<view>猫咪性格测试</view>
		</view>
		<view class="xq_view xq2" @click="goTasteDetail('狗狗性格测试',2)">
			<image src="/static/img/xq2.png"></image>
			<view>狗狗性格测试</view>
		</view>
		<view class="xq_view xq3" @click="goTasteDetail('哼哼性格测试',3)">
			<image src="/static/img/xq3.png"></image>
			<view>哼哼性格测试</view>
		</view>
		<view class="xq_view xq4" @click="goTasteDetail('啾啾性格测试',4)">
			<image src="/static/img/xq4.png"></image>
			<view>啾啾性格测试</view>
		</view>
		<view class="xq_view xq5" @click="goTasteDetail('猫咪性格测试',5)">
			<image src="/static/img/xq5.png"></image>
			<view>猫咪性格测试</view>
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
			goTasteDetail(title,num) {
				uni.navigateTo({
					url: '/pages/tasteTest/tasteDetail?title=' + title + '&num=' + num
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #132455;
	}
	
	.taste_bg {
		width: 750rpx;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.xq_view {
		width: 260rpx;
		height: 300rpx;
	}
	
	.xq1 {
		position: absolute;
		top: 142rpx;
		left: 103rpx;
	}
	
	.xq1 image {
		width: 260rpx;
		height: 260rpx;
	}
	
	.xq1 view {
		width: 260rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.xq2 {
		position: absolute;
		top: 289rpx;
		left: 445rpx;
	}
	
	.xq2 image {
		width: 170rpx;
		height: 170rpx;
		margin-left: 45rpx;
	}
	
	.xq2 view {
		width: 260rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-top: 20rpx;
	}
	
	.xq3 {
		position: absolute;
		top: 550rpx;
		left: 75rpx;
	}
	
	.xq3 image {
		width: 170rpx;
		height: 170rpx;
		margin-left: 45rpx;
	}
	
	.xq3 view {
		width: 260rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-top: 20rpx;
	}
	
	.xq4 {
		position: absolute;
		top: 634rpx;
		left: 433rpx;
	}
	
	.xq4 image {
		width: 260rpx;
		height: 260rpx;
	}
	
	.xq4 view {
		width: 260rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.xq5 {
		position: absolute;
		top: 945rpx;
		left: 125rpx;
	}
	
	.xq5 image {
		width: 170rpx;
		height: 170rpx;
		margin-left: 45rpx;
	}
	
	.xq5 view {
		width: 260rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-top: 20rpx;
	}
</style>

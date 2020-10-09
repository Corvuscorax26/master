<template>
	<view>
		<view class="npt_card">
			<image src="/static/img/chonghuiyuan.png" class="npt_bg"></image>
			<view class="npt_title">充会员</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
		</view>
		<view class="npt_card">
			<image src="/static/img/maitaocan.png" class="npt_bg"></image>
			<view class="npt_title">买套餐</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
		</view>
		<view class="npt_card">
			<image src="/static/img/woyaoxunchong.png" class="npt_bg"></image>
			<view class="npt_title">我要寻宠</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
		</view>
		<view class="npt_card">
			<image src="/static/img/woyaolingyang.png" class="npt_bg"></image>
			<view class="npt_title">我要领养</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
		</view>
		<view class="npt_card">
			<image src="/static/img/shichongzhaoling.png" class="npt_bg"></image>
			<view class="npt_title">失宠招领</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
		</view>
		<view class="npt_card">
			<image src="/static/img/chongwuzhaoxinjia.png" class="npt_bg"></image>
			<view class="npt_title">宠物找新家</view>
			<view class="npt_detail">猫尾巴表达的12种含义神奇的尾巴</view>
			<button class="npt_button">立即开通</button>
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
	view {
		z-index: 9;
	}
	
	.npt_card {
		width: 664rpx;
		height: 212rpx;
		margin-top: 28rpx;
		margin-left: 43rpx;
		position: relative;
	}
	
	.npt_card:last-child {
		margin-bottom: 50rpx;
	}
	
	.npt_bg {
		width: 664rpx;
		height: 212rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.npt_title {
		position: absolute;
		top: 30rpx;
		left: 51rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.npt_detail {
		position: absolute;
		top: 85rpx;
		left: 51rpx;
		font-size: 22rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.npt_button {
		width: 162rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		position: absolute;
		top: 141rpx;
		left: 51rpx;
		border: 1rpx solid #FFFFFF;
		background: none;
		font-size: 26rpx;
		color: #FFFFFF;
		font-weight: bold;
		border-radius: 25rpx;
		padding: 0 !important;
		box-sizing: content-box !important;
	}
	
	button::after {
		border: none;
	}
</style>

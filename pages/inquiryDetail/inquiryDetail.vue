<template>
	<view>
		<view class="doctor_message">
			<image src="/static/image/ystx.png" class="dm_image"></image>
			<view class="dm_box">
				<view class="dm_detail">
					<text class="dmd1">崔婷婷</text>
					<text class="dmd2">猫狗内科</text>
				</view>
				<image src="/static/img/certified_physician.png" class="rzys_image"></image>
			</view>
		</view>
		<view class="case_history">
			<view class="ch_box">
				<view class="ch_title">就诊宠物</view>
				<view class="ch_detail">
					<text>喵喵</text>
					<text style="margin-left: 20rpx;">1个月</text>
					<text style="margin-left: 20rpx;">蓝猫</text>
					<text style="margin-left: 20rpx;">母</text>
				</view>
			</view>
			<view class="ch_box">
				<view class="ch_title">主诉</view>
				<view class="ch_detail">猫咪到家不吃不喝</view>
			</view>
			<view class="ch_box">
				<view class="ch_title">拟诊</view>
				<view class="ch_detail">过敏性皮炎</view>
			</view>
			<view class="ch_box">
				<view class="ch_title">医生建议</view>
				<view class="ch_detail">后续如果有需要，随时上线咨询我。希望能帮助到您</view>
			</view>
			<view class="ch_box">
				<view class="ch_title">就诊时间</view>
				<view class="ch_detail">2020.05.20 11:10</view>
			</view>
		</view>
		<view class="inquiry_button_box">
			<view class="inquiry_button">复诊</view>
			<view class="inquiry_button" @tap="goInquiryDetail">问诊详情</view>
			<view class="inquiry_button">反馈</view>
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
	
	.doctor_message {
		width: 702rpx;
		height: 160rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		margin-left: 24rpx;
		margin-top: 24rpx;
	}
	
	.dm_image {
		width: 100rpx;
		height: 100rpx;
		margin: 30rpx;
		border-radius: 50%;
	}
	
	.dm_box {
		width: 550rpx;
		height: 100rpx;
		margin-top: 30rpx;
	}
	
	.dm_detail {
		width: 550rpx;
		height: 48rpx;
		line-height: 48rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.dmd1 {
		font-size: 30rpx;
	}
	
	.dmd2 {
		font-size: 26rpx;
		margin-left: 38rpx;
	}
	
	.rzys_image {
		width: 101rpx;
		height: 29rpx;
		margin-top: 10rpx;
	}
	
	.case_history {
		width: 702rpx;
		height: 504rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.ch_box {
		width: 662rpx;
		min-height: 85rpx;
		display: flex;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.ch_box:first-child {
		padding-top: 10rpx;
	}
	
	.ch_box:last-child {
		border: none;
	}
	
	.ch_title {
		width: 200rpx;
		height: 85rpx;
		line-height: 85rpx;
		margin-left: 10rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.ch_detail {
		margin: 20rpx 0;
		width: 425rpx;
		min-height: 45rpx;
		line-height: 45rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.inquiry_button_box {
		width: 452rpx;
		margin-top: 40rpx;
		margin-left: 253rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.inquiry_button {
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
		border-radius: 25rpx;
		background: #FFC800;
		border: none;
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	button:after {
		border: none;
	}
</style>

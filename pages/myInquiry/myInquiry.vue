<template>
	<view>
		<view class="being_inquiry">
			<view class="bi_view">您有一个正在进行的问诊</view>
			<button class="bi_button">继续问诊</button>
		</view>
		<view class="history_inquiry">
			<view class="hi_title">历史问诊</view>
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
					<view class="inquiry_button_box">
						<view class="inquiry_button">打赏</view>
						<view class="inquiry_button">复诊</view>
						<view class="inquiry_button" @tap="goInquiryDetail">问诊详情</view>
						<view class="inquiry_button">反馈</view>
					</view>
				</view>
			</view>
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
					<view class="inquiry_button_box">
						<view class="inquiry_button">打赏</view>
						<view class="inquiry_button">复诊</view>
						<view class="inquiry_button" @tap="goInquiryDetail">问诊详情</view>
						<view class="inquiry_button">反馈</view>
					</view>
				</view>
			</view>
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
					<view class="inquiry_button_box">
						<view class="inquiry_button">打赏</view>
						<view class="inquiry_button">复诊</view>
						<view class="inquiry_button" @tap="goInquiryDetail">问诊详情</view>
						<view class="inquiry_button">反馈</view>
					</view>
				</view>
			</view>
			<view style="height: 30rpx;"></view>
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
			goInquiryDetail() {
				uni.navigateTo({
					url: '/pages/inquiryDetail/inquiryDetail'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
		overflow: auto;
	}
	
	.being_inquiry {
		width: 702rpx;
		height: 86rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	
	.bi_view {
		width: 470rpx;
		height: 86rpx;
		line-height: 86rpx;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.bi_button {
		width: 172rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		margin-top: 18rpx;
		margin-left: 30rpx;
		background: #FDD032;
		border-radius: 25rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}
	
	.history_inquiry {
		width: 702rpx;
		min-height: 1rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.hi_title {
		width: 702rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.inquiry_box {
		width: 702rpx;
		height: 320rpx;
		background: #FFFFFF;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		display: flex;
	}
	
	.inquiry_image {
		width: 100rpx;
		height: 100rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		border-radius: 50%;
	}
	
	.inquiry_view {
		width: 532rpx;
		height: 320rpx;
		margin-left: 20rpx;
	}
	
	.inquiry_title {
		width: 532rpx;
		height: 58rpx;
		display: flex;
		margin-top: 25rpx;
	}
	
	.inquiry_name {
		height: 58rpx;
		line-height: 58rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.inquiry_administrative {
		height: 58rpx;
		line-height: 58rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
		margin-left: 38rpx;
	}
	
	.inquiry_detail {
		width: 532rpx;
		min-height: 59rpx;
		line-height: 36rpx;
		margin-top: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.inquiry_pet {
		width: 532rpx;
		height: 55rpx;
		line-height: 55rpx;
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.inquiry_button_box {
		width: 532rpx;
		margin-top: 15rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.inquiry_button {
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
		border-radius: 25rpx;
		border: 1rpx solid #FFC800;
		font-size: 28rpx;
		color: #FFC800;
		font-weight: bold;
	}
	
	button:after {
		border: none;
	}
</style>

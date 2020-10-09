<template>
	<view>
		<view class="visit_card" @click="goVisitDetail">
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
				</view>
			</view>
			<view class="visit_view">复诊主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义 </view>
		</view>
		<view class="visit_card" @click="goVisitDetail">
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
				</view>
			</view>
			<view class="visit_view">复诊主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义 </view>
		</view>
		<view class="visit_card" @click="goVisitDetail">
			<view class="inquiry_box">
				<image src="/static/image/ystx.png" mode="aspectFill" class="inquiry_image"></image>
				<view class="inquiry_view">
					<view class="inquiry_title">
						<view class="inquiry_name">阿里啊</view>
						<view class="inquiry_administrative">皮肤科</view>
					</view>
					<view class="inquiry_detail">主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义</view>
					<view class="inquiry_pet">就诊宠物：猫咪</view>
				</view>
			</view>
			<view class="visit_view">复诊主诉：A.神奇的尾巴会说话，猫尾巴表达的12种含义 </view>
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
			goVisitDetail() {
				uni.navigateTo({
					url: '/pages/visitDetail/visitDetail'
				})
			}
		}
	}
</script>


<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.visit_card {
		width: 702rpx;
		min-height: 300rpx;
		margin-top: 30rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.inquiry_box {
		width: 702rpx;
		height: 239rpx;
		display: flex;
		border-bottom: 1rpx solid #E0E0E0;
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
		height: 239rpx;
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
	
	.visit_view {
		width: 532rpx;
		min-height: 36rpx;
		line-height: 36rpx;
		margin-left: 150rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
</style>

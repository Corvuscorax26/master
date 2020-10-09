<template>
	<view>
		<view style="width: 702rpx;min-height: 188rpx;background: #FFFFFF;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 24rpx;margin-top: 20rpx;">
			<view style="display: flex;">
				<view style="margin-top: 30rpx;margin-left: 40rpx;">
					<image src="/static/image/ystx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
					<image src="/static/img/certified_physician.png" style="width: 101rpx;height: 29rpx;"></image>
				</view>
				<view style="margin-left: 30rpx;">
					<view style="display: flex;flex-flow: row wrap;justify-content: space-between;width: 522rpx;">
						<view style="width: 280rpx;height: 47rpx;line-height: 47rpx;margin-top: 30rpx;font-size: 30rpx;color: #333333;">阿里<text style="margin-left: 19rpx;font-size: 22rpx;">从业：3年</text></view>
						<view style="height: 44rpx;line-height: 44rpx;display: flex;font-size: 22rpx;color: #333333;margin-top: 30rpx;margin-right: 10rpx;">
							评级：<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
							<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
							<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
							<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
							<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
						</view>
					</view>
					<view style="width: 240rpx;height: 41rpx;line-height: 41rpx;font-size: 20rpx;color: #333333;margin-top: 10rpx;">擅长：狗狗，猫咪</view>
					<view style="height: 44rpx;display: flex;margin-top: 10rpx;">
						<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;padding: 0 20rpx;">2054次咨询</view>
						<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;margin-left: 15rpx;padding: 0 20rpx;">2小时内响应</view>
					</view>
				</view>
			</view>
			<view style="width: 522rpx;height: 50rpx;margin-left: 170rpx;padding-bottom: 30rpx;display: flex;">
				<view style="width: 160rpx;height: 50rpx;line-height: 50rpx;font-size: 26rpx;color: #343434;">图文:<text style="color: #FF5400;">￥100</text></view>
				<view style="width: 160rpx;height: 50rpx;line-height: 50rpx;font-size: 26rpx;color: #343434;">视频:<text style="color: #FF5400;">￥200</text></view>
				<button style="width: 182rpx;height: 50rpx;line-height: 50rpx;text-align: center;background: #FFC700;border-radius: 25rpx;font-size: 28rpx;color: #FFFFFF;font-weight: bold;">立即问诊</button>
			</view>
		</view>
		<view class="pet_box">
			<image src="/static/image/7.png" mode="aspectFill" class="pet_image"></image>
			<view class="pet_detail">
				<view class="pet_title">
					<view class="pet_message">姓名：团子</view>
					<view class="pet_message">性别：妹妹</view>
				</view>
				<view class="pet_message">年龄：10年10个月</view>
				<view class="pet_message">所属星球：喵星</view>
			</view>
		</view>
		<view class="visit_card" @tap="goRecordSession">
			<view class="visit_title">第一次问诊记录</view>
			<view class="record_view">阿里：您想咨询什么问题</view>
			<view class="record_view">哈密瓜的皮：神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义神奇</view>
			<view class="record_view">阿里：您想咨询什么问题</view>
			<view class="record_view">哈密瓜的皮：神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义神奇</view>
			<view class="record_line"></view>
			<view class="record_all">点击查看全部记录</view>
		</view>
		<view class="visit_card" style="margin-bottom: 30rpx;" @tap="goRecordSession">
			<view class="visit_title">复诊记录</view>
			<view class="record_view">阿里：您想咨询什么问题</view>
			<view class="record_view">哈密瓜的皮：神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义神奇</view>
			<view class="record_view">阿里：您想咨询什么问题</view>
			<view class="record_view">哈密瓜的皮：神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义神奇</view>
			<view class="record_line"></view>
			<view class="record_all">点击查看全部记录</view>
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
			goRecordSession() {
				uni.navigateTo({
					url: '/pages/recordSession/recordSession'
				})
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	button:after {
		border: none;
	}
	
	.pet_box {
		width: 702rpx;
		height: 262rpx;
		margin-left: 24rpx;
		margin-top: 30rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
	}
	
	.pet_image {
		width: 202rpx;
		height: 202rpx;
		margin: 30rpx 20rpx;
	}
	
	.pet_detail {
		width: 420rpx;
		height: 202rpx;
		margin-left: 20rpx;
		margin-top: 30rpx;
	}
	
	.pet_title {
		width: 420rpx;
		height: 56rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 15rpx;
	}
	
	.pet_message {
		height: 56rpx;
		line-height: 56rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.visit_card {
		width: 702rpx;
		min-height: 94rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 30rpx;
	}
	
	.visit_title {
		width: 662rpx;
		height: 94rpx;
		line-height: 94rpx;
		margin-left: 20rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.record_view {
		width: 662rpx;
		font-size: 26rpx;
		color: #777777;
		font-weight: bold;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.record_line {
		width: 100%;
		height: 1rpx;
		background: #E0E0E0;
	}
	
	.record_all {
		width: 702rpx;
		height: 87rpx;
		line-height: 87rpx;
		text-align: center;
		font-size: 28rpx;
		color: #777777;
		font-weight: bold;
	}
</style>

<template>
	<view>
		<!-- 视频内容 -->
		<view class="video_box">
			<video class="video" autoplay="true" poster="/static/image/7.png"></video>
			<image @tap="pageBack" src="/static/img/back.png" class="back_icon"></image>
		</view>
		<!-- 视频详情 -->
		<view class="video_synopsis">
			<view class="video_userbox">
				<view class="userview">
					<image src="/static/image/ystx.png" mode="aspectFill" class="user_image"></image>
					<view class="user_name">阿里医生</view>
				</view>
				<view class="attention">关注</view>
			</view>
			<view class="video_title">大熊猫对睡觉的地方并没有要求</view>
			<view class="video_function">
				<view class="function_box">
					<image src="/static/img/browse.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
				<view class="function_box">
					<image src="/static/img/praise.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
				<view class="function_box">
					<image src="/static/img/transpond.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="recommend_box">
			<view class="recommend_title">推荐</view>
			<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-bottom: 20rpx;">
				<image src="/static/image/4.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
				<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
					<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
				</view>
				<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
				<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
					<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
					<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
				</view>
			</view>
			<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-bottom: 20rpx;">
				<image src="/static/image/17.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
				<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
					<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
				</view>
				<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
				<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
					<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
					<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
				</view>
			</view>
			<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-bottom: 20rpx;">
				<image src="/static/image/13.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
				<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
					<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
				</view>
				<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
				<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
					<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
					<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
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
			goScienceVideo() {
				uni.navigateTo({
					url: '/pages/scienceVideo/scienceVideo'
				})
			},
			pageBack() {
				uni.navigateBack({
					delta: 1
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
	
	.back_icon {
		width: 26rpx;
		height: 44rpx;
		position: absolute;
		top: 22rpx;
		left: 34rpx;
		z-index: 9999;
	}

	.video_box {
		width: 750rpx;
		height: 455rpx;
		position: relative;
	}

	.video {
		width: 750rpx;
		height: 455rpx;
		position: absolute;
		top: 0;
		left: 0;
	}

	.video_synopsis {
		width: 750rpx;
		height: 310rpx;
		background: #FFFFFF;
	}

	.video_userbox {
		width: 750rpx;
		height: 70rpx;
		padding-top: 45rpx;
		display: flex;
		justify-content: space-between;
	}

	.userview {
		display: flex;
		margin-left: 20rpx;
	}

	.user_image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.user_name {
		height: 70rpx;
		line-height: 70rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
	}

	.attention {
		width: 120rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		margin-top: 15rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		background: #FFC700;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
	}

	.video_title {
		width: 690rpx;
		height: 110rpx;
		line-height: 110rpx;
		margin-left: 30rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.video_function {
		width: 750rpx;
		height: 84rpx;
		display: flex;
	}

	.function_box {
		width: 250rpx;
		height: 84rpx;
		display: flex;
	}

	.function_icon {
		width: 30rpx;
		height: 30rpx;
		margin-left: 60rpx;
		margin-top: 27rpx;
	}

	.function_number {
		height: 84rpx;
		line-height: 84rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 14rpx;
	}

	.recommend_box {
		
	}

	.recommend_title {
		height: 94rpx;
		line-height: 94rpx;
		font-size: 36rpx;
		margin-left: 44rpx;
		color: #333333;
		font-weight: bold;
	}
</style>

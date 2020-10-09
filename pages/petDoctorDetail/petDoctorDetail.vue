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
		<!-- 科普区 -->
		<view class="science_box">
			<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
				<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">科普</view>
				<view @tap="goCommunityList(3)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
			</view>
			<!-- 科普视频 -->
			<view @tap="goScienceVideo" style="width: 662rpx;height: 290rpx;position: relative;margin-left: 20rpx;">
				<image src="/static/image/13.png" mode="aspectFill" style="width: 662rpx;height: 290rpx;border-radius: 20rpx;"></image>
				<view style="width: 662rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
					<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
				</view>
				<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 129rpx;left: 291rpx;"></image>
			</view>
			<!-- 科普文章 -->
			<view style="width: 662rpx;height: 194rpx;margin-left: 20rpx;margin-top: 29rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;">
				<image src="/static/image/10.png" mode="aspectFill" style="width: 230rpx;height: 194rpx;border-radius: 20rpx 0 0 20rpx;"></image>
				<view style="width: 432rpx;height: 194rpx;">
					<view style="width: 372rpx;height: 62rpx;line-height: 62rpx;margin-top: 22rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
					<view style="width: 372rpx;min-height: 62rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
				</view>
			</view>
		</view>
		<!-- 宠物康复日志 -->
		<view class="recoverylog_box">
			<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
				<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">宠物康复日志</view>
				<view @tap="goCommunityList(1)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
			</view>
			<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
				<image src="/static/image/12.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
				<view style="width: 432rpx;height: 212rpx;">
					<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
					<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
					<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
						<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
						<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
						<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
					</view>
				</view>
			</view>
			<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
				<image src="/static/image/10.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
				<view style="width: 432rpx;height: 212rpx;">
					<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
					<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
					<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
						<image src="/static/img/praise_active.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
						<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
						<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
					</view>
				</view>
			</view>
			<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
				<image src="/static/image/14.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
				<view style="width: 432rpx;height: 212rpx;">
					<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
					<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
					<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
						<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
						<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
						<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 1rpx;"></view>
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
			goCommunityList(num) {
				uni.navigateTo({
					url: '/pages/communityList/communityList?current=' + num
				})
			},
			goScienceVideo() {
				uni.navigateTo({
					url: '/pages/scienceVideo/scienceVideo'
				})
			},
			goRecoveryLogDetail() {
				uni.navigateTo({
					url: '/pages/recoveryLogDetail/recoveryLogDetail'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	button:after {
		border: none;
	}
	
	.science_box {
		width: 702rpx;
		height: 638rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.recoverylog_box {
		width: 702rpx;
		min-height: 336rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
</style>

<template>
	<view>
		<view class="md_card">
			<view class="md_title">
				<image src="/static/image/12.png" mode="aspectFill" class="md_image"></image>
				<view class="md_titlebox">
					<view class="md_name">没没没什么</view>
					<view class="md_time">10:24</view>
				</view>
			</view>
			<view class="md_detail">赞了我的帖子</view>
			<view class="md_topicbox">
				<image src="/static/image/15.png" mode="aspectFill" class="topic_image"></image>
				<view class="topic_box">
					<view class="topic_title">大熊猫睡觉</view>
					<view class="topic_detail">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
				</view>
			</view>
			<view style="width: 100%;height: 1rpx;"></view>
		</view>
		<view class="md_card">
			<view class="md_title">
				<image src="/static/image/12.png" mode="aspectFill" class="md_image"></image>
				<view class="md_titlebox">
					<view class="md_name">没没没什么</view>
					<view class="md_time">10:24</view>
				</view>
			</view>
			<view class="md_detail">赞了我的评论</view>
			<view class="md_commentbox">
				<view class="md_commentdetail">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
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

		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}

	.md_card {
		width: 702rpx;
		min-height: 185rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}

	.md_title {
		width: 662rpx;
		height: 80rpx;
		margin-left: 20rpx;
		padding-top: 30rpx;
		display: flex;
	}

	.md_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.md_titlebox {
		height: 80rpx;
		margin-left: 20rpx;
	}

	.md_name {
		height: 54rpx;
		line-height: 54rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}

	.md_time {
		height: 20rpx;
		line-height: 20rpx;
		font-size: 22rpx;
		color: #777777;
		font-weight: bold;
	}

	.md_detail {
		width: 642rpx;
		height: 66rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
		margin-top: 10rpx;
	}

	.md_topicbox {
		width: 662rpx;
		height: 190rpx;
		margin-left: 20rpx;
		background: #F3F2F7;
		border-radius: 20rpx;
		margin-bottom: 40rpx;
		display: flex;
	}

	.topic_image {
		width: 200rpx;
		height: 190rpx;
		border-radius: 20rpx 0 0 20rpx;
	}

	.topic_box {
		width: 402rpx;
		height: 190rpx;
		margin-left: 30rpx;
	}

	.topic_title {
		width: 402rpx;
		height: 62rpx;
		line-height: 62rpx;
		margin-top: 22rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.topic_detail {
		width: 402rpx;
		min-height: 62rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #434343;
		font-weight: bold;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.md_commentbox {
		width: 662rpx;
		height: 84rpx;
		margin-left: 20rpx;
		background: #F3F2F7;
		border-radius: 20rpx;
		margin-bottom: 40rpx;
		display: flex;
	}
	
	.md_commentdetail {
		width: 622rpx;
		height: 84rpx;
		line-height: 84rpx;
		font-size: 26rpx;
		color: #333333;
		margin-left: 20rpx;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

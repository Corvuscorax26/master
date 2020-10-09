<template>
	<view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">您想咨询什么问题</view>
			</view>
		</view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义</view>
			</view>
		</view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">您想咨询什么问题</view>
			</view>
		</view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">您想咨询什么问题</view>
			</view>
		</view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">神奇的尾巴会说话，猫尾巴表达的12种含义神奇的尾巴会说话，猫尾巴表达的12种含义</view>
			</view>
		</view>
		<view class="session_list">
			<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
			<view class="chat_box">
				<view class="cb_top">
					<view class="cb_character">阿里</view>
					<view class="cb_character">9月20日  10:23</view>
				</view>
				<view class="cb_detail">您想咨询什么问题</view>
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
	.session_list {
		width: 702rpx;
		min-height: 120rpx;
		margin-left: 24rpx;
		display: flex;
	}
	
	.chat_image {
		width: 70rpx;
		height: 70rpx;
		margin-left: 20rpx;
		margin-top: 26rpx;
		border-radius: 50%;
	}
	
	.chat_box {
		width: 584rpx;
		min-height: 120rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 28rpx;
	}
	
	.cb_top {
		width: 584rpx;
		height: 36rpx;
		margin-top: 23rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.cb_character {
		height: 36rpx;
		line-height: 36rpx;
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.cb_detail {
		width: 584rpx;
		min-height: 36rpx;
		line-height: 36rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		padding: 15rpx 0;
	}
</style>

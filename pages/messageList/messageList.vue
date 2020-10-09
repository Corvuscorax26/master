<template>
	<view>
		<view class="message_icon">
			<view class="mi_box" @click="goPraise">
				<image src="/static/img/dianzan.png" class="mi_image"></image>
				<view class="mi_title">点赞</view>
			</view>
			<view class="mi_box" @click="goCollect">
				<image src="/static/img/shoucang.png" class="mi_image"></image>
				<view class="mi_title">收藏</view>
			</view>
			<view class="mi_box" @click="goTranspond">
				<image src="/static/img/zhuanfa.png" class="mi_image"></image>
				<view class="mi_title">转发</view>
			</view>
			<view class="mi_box" @click="gocomment">
				<image src="/static/img/pinglun.png" class="mi_image"></image>
				<view class="mi_title">评论</view>
			</view>
			<view class="mi_box" @click="goSystemMessage">
				<image src="/static/img/xitong.png" class="mi_image"></image>
				<view class="mi_title">系统</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="message_visit">
			<view class="session_list">
				<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
				<view class="chat_box">
					<view class="chat_view">
						<view class="cb_top">
							<view class="cb_character">阿里</view>
							<view class="cb_character2">10:23</view>
						</view>
						<view class="cb_detail">您想咨询什么问题</view>
					</view>
				</view>
			</view>
			<view class="session_list">
				<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
				<view class="chat_box">
					<view class="chat_view">
						<view class="cb_top">
							<view class="cb_character">阿里</view>
							<view class="cb_character2">10:23</view>
						</view>
						<view class="cb_detail">您想咨询什么问题</view>
					</view>
				</view>
			</view>
			<view class="session_list">
				<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
				<view class="chat_box">
					<view class="chat_view">
						<view class="cb_top">
							<view class="cb_character">阿里</view>
							<view class="cb_character2">10:23</view>
						</view>
						<view class="cb_detail">您想咨询什么问题</view>
					</view>
				</view>
			</view>
			<view class="session_list">
				<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
				<view class="chat_box">
					<view class="chat_view">
						<view class="cb_top">
							<view class="cb_character">阿里</view>
							<view class="cb_character2">10:23</view>
						</view>
						<view class="cb_detail">您想咨询什么问题</view>
					</view>
				</view>
			</view>
			<view class="session_list">
				<image src="/static/image/7.png" mode="aspectFill" class="chat_image"></image>
				<view class="chat_box">
					<view class="chat_view">
						<view class="cb_top">
							<view class="cb_character">阿里</view>
							<view class="cb_character2">10:23</view>
						</view>
						<view class="cb_detail">您想咨询什么问题</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
			goPraise() {
				uni.navigateTo({
					url: '/pages/messageDetail/praise'
				})
			},
			goCollect() {
				uni.navigateTo({
					url: '/pages/messageDetail/collect'
				})
			},
			goTranspond() {
				uni.navigateTo({
					url: '/pages/messageDetail/transpond'
				})
			},
			gocomment() {
				uni.navigateTo({
					url: '/pages/messageDetail/comment'
				})
			},
			goSystemMessage() {
				uni.navigateTo({
					url: '/pages/messageDetail/systemMessage'
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
	
	.message_icon {
		width: 750rpx;
		height: 168rpx;
		padding-top: 32rpx;
		display: flex;
		background: #FFFFFF;
	}
	
	.mi_box {
		width: 150rpx;
		height: 168rpx;
	}
	
	.mi_image {
		width: 84rpx;
		height: 84rpx;
		margin-left: 33rpx;
	}
	
	.mi_title {
		width: 150rpx;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.message_visit {
		width: 750rpx;
		height: calc(100vh - 310rpx);
		background: #FFFFFF;
		margin-top: 20rpx;
	}
	
	.session_list {
		width: 702rpx;
		height: 160rpx;
		margin-left: 24rpx;
		display: flex;
	}
	
	.session_list:first-child {
		margin-top: 50rpx;
	}
	
	.chat_image {
		width: 100rpx;
		height: 100rpx;
		margin-left: 20rpx;
		margin-top: 26rpx;
		border-radius: 50%;
	}
	
	.chat_box {
		width: 554rpx;
		height: 160rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 28rpx;
	}
	
	.chat_view {
		width: 554rpx;
		height: 100rpx;
		margin-top: 26rpx;
	}
	
	.cb_top {
		width: 554rpx;
		height: 58rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.cb_character {
		height: 58rpx;
		line-height: 58rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.cb_character2 {
		height: 58rpx;
		line-height: 58rpx;
		font-size: 26rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.cb_detail {
		width: 554rpx;
		height: 42rpx;
		line-height: 42rpx;
		font-size: 24rpx;
		color: #787878;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

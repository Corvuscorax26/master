<template>
	<view>
		<view class="recruitment_top">
			<image src="/static/image/7.png" mode="aspectFill" class="recruitment_image"></image>
			<view class="recruitment_message">
				<view class="recruitment_title">济南市流浪动物救助站</view>
				<view class="recruitment_sgs">机构认证</view>
			</view>
		</view>
		<view class="recruitment_synopsis">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥.按时完成参与其他志愿服务活动。</view>
		<view class="synopsis_video">
			<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">简介视频</view>
			<view class="sv_box">
				<image src="/static/image/1.png" mode="aspectFill" class="sv_image"></image>
				<image src="/static/image/2.png" mode="aspectFill" class="sv_image"></image>
				<image src="/static/image/3.png" mode="aspectFill" class="sv_image"></image>
				<image src="/static/image/9.png" mode="aspectFill" class="sv_image"></image>
				<image src="/static/image/10.png" mode="aspectFill" class="sv_image"></image>
				<image src="/static/image/11.png" mode="aspectFill" class="sv_image"></image>
			</view>
		</view>
		<view class="recruitment_demand">
			<view class="rd_view">
				<view class="rd_title">高级宠物医师</view>
				<view class="rd_detail">热爱公益事业，希望能为公益事业活动作出自己的一份贡献</view>
			</view>
			<view class="rd_view">
				<view class="rd_title">饲养员</view>
				<view class="rd_detail">按时完成指定的工作任务和项目</view>
			</view>
			<view class="rd_view">
				<view class="rd_title">验票</view>
				<view class="rd_detail">热爱公益事业，希望能为公益事业活动</view>
			</view>
		</view>
		<view class="recruitment_contact">
			<view class="rc_view">
				<image src="/static/img/wangzhi.png" class="rc_image"></image>
				<view class="rc_detail">公司网址：http://uigradients.com/ </view>
			</view>
			<view class="rc_view">
				<image src="/static/img/dianhua.png" class="rc_image"></image>
				<view class="rc_detail">电话：25987212365</view>
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
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.recruitment_top {
		width: 662rpx;
		height: 120rpx;
		margin-top: 20rpx;
		margin-left: 44rpx;
		display: flex;
	}
	
	.recruitment_image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
	}
	
	.recruitment_message {
		height: 120rpx;
		margin-left: 20rpx;
	}
	
	.recruitment_title {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.recruitment_sgs {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.recruitment_synopsis {
		width: 662rpx;
		min-height: 50rpx;
		line-height: 36rpx;
		margin-left: 44rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		font-size: 20rpx;
		color: #444444;
		font-weight: bold;
	}
	
	.synopsis_video {
		width: 702rpx;
		min-height: 332rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.sv_box {
		width: 664rpx;
		min-height: 208rpx;
		margin-left: 20rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.sv_image {
		width: 208rpx;
		height: 208rpx;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
	}
	
	.recruitment_demand {
		width: 702rpx;
		min-height: 294rpx;
		margin-left: 24rpx;
		margin-top: 32rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.rd_view {
		width: 702rpx;
		min-height: 98rpx;
		display: flex;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.rd_view:nth-child(3) {
		border: none;
	}
	
	.rd_title {
		width: 220rpx;
		height: 98rpx;
		line-height: 98rpx;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.rd_detail {
		width: 442rpx;
		padding: 38rpx 0;
		line-height: 36rpx;
		margin-right: 20rpx;
		font-size: 22rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.recruitment_contact {
		width: 702rpx;
		height: 140rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 52rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.rc_view {
		width: 662rpx;
		height: 54rpx;
		margin-left: 20rpx;
		display: flex;
	}
	
	.rc_view:nth-child(1) {
		padding-top: 16rpx;
	}
	
	.rc_image {
		width: 26rpx;
		height: 26rpx;
		margin-top: 14rpx;
	}
	
	.rc_detail {
		height: 54rpx;
		line-height: 54rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
	}
</style>

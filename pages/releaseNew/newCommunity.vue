<template>
	<view>
		<scroll-view scroll-y="true" class="new_box">
			<input type="text" class="nc_title" placeholder="请添加标题"/>
			<textarea class="nc_detail" placeholder="添加正文..."></textarea>
			<view class="nc_imagebox">
				<image src="/static/img/add_image.png" mode="aspectFill" class="nc_image"></image>
			</view>
		</scroll-view>
		<view class="nc_bottomview">
			<button class="nc_button">发布</button>
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
	
	.new_box {
		width: 750rpx;
		height: calc(100vh - 180rpx - 88rpx - 20rpx);
	}
	
	.nc_title {
		width: 702rpx;
		height: 64rpx;
		line-height: 64rpx;
		border-bottom: 1rpx solid #E0E0E0;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.nc_detail {
		width: 662rpx;
		min-height: 145rpx;
		background: #E9E7ED;
		margin-top: 30rpx;
		border-radius: 20rpx;
		margin-left: 24rpx;
		padding: 30rpx 20rpx;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.nc_imagebox {
		width: 702rpx;
		min-height: 220rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.nc_image {
		width: 220rpx;
		height: 220rpx;
		margin-top: 21rpx;
		border-radius: 20rpx;
	}
	
	.nc_bottomview {
		width: 750rpx;
		height: 180rpx;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.nc_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 50rpx;
		margin-left: 175rpx;
		text-align: center;
		background: #ACACAC;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}
	
	button:after {
		border: none;
	}
</style>

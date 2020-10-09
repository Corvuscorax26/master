<template>
	<view>
		<view class="pet_box" @tap="goMyPetDetail">
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
			goMyPetDetail() {
				uni.navigateTo({
					url: '/pages/myPetDetail/myPetDetail'
				})
			}
		}
	}
</script>


<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
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
</style>

<template>
	<view>
		<view class="as_box">
			<view class="pd_list2" v-if="phone == '' || phone == null || phone == undefined">
				<view class="pd_title">手机号</view>
				<view style="display: flex;" @click="goAccountBinding('phone')">
					<view class="pd_view">去绑定</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2" v-else>
				<view class="pd_title">手机号</view>
				<view class="pd_input">{{phone}}</view>
			</view>
			<view class="pd_list2" v-if="mail == ''">
				<view class="pd_title">邮箱</view>
				<view style="display: flex;" @click="goAccountBinding('mail')">
					<view class="pd_view">去绑定</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2" v-else>
				<view class="pd_title">邮箱</view>
				<view class="pd_input">{{mail}}</view>
			</view>
			<view class="pd_list2" @click="goChangePassword">
				<view class="pd_title">修改密码</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '15426874366',
				mail: ''
			}
		},
		onLoad() {

		},
		methods: {
			goAccountBinding(string) {
				uni.navigateTo({
					url: '/pages/setting/accountBinding?type=' + string
				})
			},
			goChangePassword() {
				uni.navigateTo({
					url: '/pages/setting/changePassword'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.as_box {
		width: 702rpx;
		height: 270rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
	}
	
	.as_list {
		width: 702rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
		justify-content: space-between;
	}
	
	.pd_title {
		width: 146rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.pd_input {
		width: 434rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		text-align: right;
	}
	
	.pd_list2 {
		width: 662rpx;
		height: 90rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
		justify-content: space-between;
	}
	
	.pd_list2:last-child {
		border: none;
	}
	
	.pd_view {
		width: 434rpx;
		height: 89rpx;
		line-height: 89rpx;
		font-size: 28rpx;
		color: #777777;
		font-weight: bold;
		text-align: right;
	}
	
	.pd_more {
		width: 30rpx;
		height: 30rpx;
		margin-left: 12rpx;
		margin-top: 29rpx;
	}
</style>

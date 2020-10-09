<template>
	<view>
		<scroll-view scroll-y="true" class="detail_top">
			<view class="uni-padding-wrap top-swipe">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						 :circular="true">
							<swiper-item>
								<image src="/static/image/1.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="/static/image/2.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="/static/image/3.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<image @tap="pageBack" src="/static/img/back.png" class="back_icon"></image>
			</view>
			<view class="adopt_list" style="margin-top: 50rpx;">
				<view class="adopt_char">姓名：哈哈哈</view>
				<view class="adopt_char">走失城市：济南</view>
			</view>
			<view class="adopt_list">
				<view class="adopt_char">走失地点：济南</view>
				<view class="adopt_char">走失时间：2020-03-04</view>
			</view>
			<view class="adopt_list2">领养宣言：我只想这样静静的我,只想这,样静静的我只,想这样,我只想这样静静的静静的</view>
		</scroll-view>
		<view class="nc_bottomview">
			<button class="nc_button" @tap="maskShowOrHide">{{button_text}}</button>
		</view>
		<view v-if="ifMask == 1" class="showMask">
			<view class="mask_box">
				<view class="mask_title">留言</view>
				<textarea class="mask_textarea" placeholder="请说明联系对方的原因，并留下姓名和联系方式，对方会主动联系您。"></textarea>
				<button @tap="maskShowOrHide" class="mask_button">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ifMask: 0,
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				type: 0,
				button_text: ''
			}
		},
		onLoad(option) {
			this.type = option.type;
			if (this.type == '0' || this.type == 0) {
				this.button_text = '我有线索'
			} else if (this.type == '1' || this.type == 1) {
				this.button_text = '我的爱宠'
			}
		},
		methods: {
			pageBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			maskShowOrHide () {
				if (this.ifMask == 0) {
					this.ifMask = 1;
				} else if (this.ifMask == 1) {
					this.ifMask = 0;
				}
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.detail_top {
		width: 100%;
		height: calc(100vh - 180rpx);
	}
	
	.top-swipe {
		width: 750rpx;
		height: 800rpx;
		position: relative;
	}
	
	.top-swipe uni-swiper {
		height: 855rpx;
	}
	
	.swiper {
		width: 100%;
		height: 800rpx;
	}
	
	swiper-item image {
		width: 100%;
		height: 800rpx;
	}
	
	uni-swiper-item uni-image {
		width: 100% !important;
		height: 800rpx;
	}
	
	.back_icon {
		width: 26rpx;
		height: 44rpx;
		position: absolute;
		top: 22rpx;
		left: 34rpx;
	}
	
	.adopt_list {
		width: 670rpx;
		height: 64rpx;
		display: flex;
		margin-left: 40rpx;
	}
	
	.adopt_list2 {
		width: 670rpx;
		min-height: 36rpx;
		line-height: 36rpx;
		margin-left: 40rpx;
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.adopt_char {
		width: 335rpx;
		height: 64rpx;
		line-height: 64rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
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
		background: #FFC700;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}
	
	button:after {
		border: none;
	}
	
	.showMask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.mask_box {
		width: 500rpx;
		height: 340rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 445rpx;
		left: 125rpx;
	}
	
	.mask_title {
		width: 500rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		padding-left: 30rpx;
	}
	
	.mask_textarea {
		width: 440rpx;
		height: 100rpx;
		line-height: 36rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		background: #F3F2F7;
		border-radius: 20rpx;
		padding: 10rpx;
	}
	
	.mask_button {
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		margin-left: 360rpx;
		margin-top: 40rpx;
		background: #FDD031;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>

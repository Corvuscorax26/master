<template>
	<view>
		<image src="/static/img/special_bg.png" class="special_bg"></image>
		<image src="/static/img/special_label.png" class="special_label sl1"></image>
		<view class="special_title sl1">犬猫</view>
		<view class="special_card sc1">
			<view class="sc_list">
				<view class="sc_left">三次问诊</view>
				<view class="sc_right">节省 13.97 </view>
			</view>
			<view class="sc_money">¥ 43.00</view>
			<view class="sc_button">立即开通</view>
		</view>
		<view class="special_card sc2">
			<view class="sc_list">
				<view class="sc_left">五次问诊</view>
				<view class="sc_right">节省 25.95 </view>
			</view>
			<view class="sc_money">¥ 69.00</view>
			<view class="sc_button">立即开通</view>
		</view>
		<image src="/static/img/special_label.png" class="special_label sl2"></image>
		<view class="special_title sl2">异宠</view>
		<view class="special_card sc3">
			<view class="sc_list">
				<view class="sc_left">三次问诊</view>
				<view class="sc_right">节省 15.97 </view>
			</view>
			<view class="sc_money">¥ 89.00</view>
			<view class="sc_button">立即开通</view>
		</view>
		<view class="special_card sc4">
			<view class="sc_list">
				<view class="sc_left">五次问诊</view>
				<view class="sc_right">节省 25.95 </view>
			</view>
			<view class="sc_money">¥ 149.00</view>
			<view class="sc_button">立即开通</view>
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
	.special_bg {
		width: 750rpx;
		height: 2000rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.special_label {
		width: 310rpx;
		height: 70rpx;
	}
	
	.special_title {
		width: 310rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 36rpx;
		color: #2E208C;
		font-weight: bold;
		letter-spacing: 4rpx;
	}
	
	.sl1 {
		position: absolute;
		top: 244rpx;
		left: 220rpx;
	}
	
	.sl2 {
		position: absolute;
		top: 1110rpx;
		left: 220rpx;
	}
	
	.sc1 {
		position: absolute;
		top: 327rpx;
		left: 122rpx;
	}
	
	.sc2 {
		position: absolute;
		top: 679rpx;
		left: 122rpx;
	}
	
	.sc3 {
		position: absolute;
		top: 1193rpx;
		left: 122rpx;
	}
	
	.sc4 {
		position: absolute;
		top: 1545rpx;
		left: 122rpx;
	}
	
	.special_card {
		width: 498rpx;
		height: 326rpx;
		border: 4rpx solid #2E208C;
		border-radius: 30rpx;
		background: #FFFFFF;
	}
	
	.sc_list {
		width: 390rpx;
		height: 114rpx;
		margin-left: 54rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.sc_left {
		height: 114rpx;
		line-height: 114rpx;
		font-size: 36rpx;
		color: #2E208C;
		font-weight: bold;
		letter-spacing: 4rpx;
	}
	
	.sc_right {
		height: 114rpx;
		line-height: 114rpx;
		font-size: 30rpx;
		color: #2E208C;
		font-weight: bold;
		letter-spacing: 4rpx;
	}
	
	.sc_money {
		width: 100%;
		height: 76rpx;
		line-height: 76rpx;
		text-align: center;
		font-size: 48rpx;
		color: #2E208C;
		font-weight: bold;
		letter-spacing: 4rpx;
	}
	
	.sc_button {
		width: 238rpx;
		height: 68rpx;
		line-height: 68rpx;
		text-align: center;
		border: 6rpx solid #2A2082;
		background: #F4D248;
		border-radius: 40rpx;
		box-shadow: 0rpx 13rpx 0rpx 0rpx #E87292;
		font-size: 36rpx;
		color: #6E6CF4;
		font-weight: bold;
		margin-top: 20rpx;
		margin-left: 128rpx;
	}
	
</style>

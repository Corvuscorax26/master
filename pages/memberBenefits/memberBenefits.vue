<template>
	<view>
		<image src="/static/img/benefits_bg.png" class="benefits_bg"></image>
		<view class="benefits_title">SVIP全年免费问诊</view>
		<image src="/static/img/benefits_label.png" class="benefits_label label1"></image>
		<view class="bl_title label1">年费会员</view>
		<view class="benefits_card card1">
			<view class="benefits_detail">会员每年可免费享受不限级别的一次文字图片问诊和一次语音问诊。</view>
			<view class="benefits_detail">会员积分的转换率为非会员的2倍，也就是每一元实付问诊费可兑换1点积分。</view>
		</view>
		<image src="/static/img/benefits_label.png" class="benefits_label label2"></image>
		<view class="bl_title label2">会员优惠</view>
		<view class="benefits_card card2">
			<view class="card_view">
				<view class="card_circle cc1">7折</view>
				<view class="card_circle cc2">8折</view>
			</view>
			<view class="card_title">
				<view class="cc_title cc1">全年问诊(不限级别)</view>
				<view class="cc_title cc2">购买套餐(折上折)</view>
			</view>
		</view>
		<image src="/static/img/benefits_label.png" class="benefits_label label3"></image>
		<view class="bl_title label3">年费福利</view>
		<view class="benefits_card card3">
			<view class="benefits_detail">会员可享受14天内对同一宠物及同一病症进行免费复诊。</view>
			<view class="benefits_detail">每年有一个会员周，会员可在会员周内无限次免费问诊。</view>
			<view class="benefits_detail">当有非会员用户在同一时间对同一兽医进行咨询，会员享受优先问诊。</view>
		</view>
		<image src="/static/img/benefits_label.png" class="benefits_label label4"></image>
		<view class="bl_title label4">备注</view>
		<view class="benefits_card card4">
			<view class="benefits_detail">若宠物主家中同时有常见宠物和异宠，不必购买两种会员，只需购买异宠会员便可同时享受猫狗鼠兔看诊优惠，同时购买异宠会员赠送的两次免费问诊两者通用。</view>
		</view>
		<button class="benefits_button" @tap="goMemberCenter">立即开通</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			
		},
		methods: {
			goMemberCenter() {
				uni.navigateTo({
					url: '/pages/memberCenter/memberCenter'
				})
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #FFD356;
	}
	
	view {
		z-index: 9;
	}
	
	.benefits_bg {
		width: 750rpx;
		height: 2861rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.benefits_title {
		width: 750rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 48rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 300rpx;
		left: 0;
		letter-spacing: 10rpx;
	}
	
	.benefits_label {
		width: 500rpx;
		height: 72rpx;
	}
	
	.bl_title {
		width: 500rpx;
		height: 61rpx;
		line-height: 61rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFBE00;
		font-weight: bold;
	}
	
	.label1 {
		position: absolute;
		top: 452rpx;
		left: 125rpx;
	}
	
	.label2 {
		position: absolute;
		top: 954rpx;
		left: 125rpx;
	}
	
	.label3 {
		position: absolute;
		top: 1514rpx;
		left: 125rpx;
	}
	
	.label4 {
		position: absolute;
		top: 2200rpx;
		left: 125rpx;
	}
	
	.card1 {
		position: absolute;
		top: 566rpx;
		left: 73rpx;
	}
	
	.card2 {
		position: absolute;
		top: 1068rpx;
		left: 73rpx;
	}
	
	.card3 {
		position: absolute;
		top: 1628rpx;
		left: 73rpx;
	}
	
	.card4 {
		position: absolute;
		top: 2314rpx;
		left: 73rpx;
	}
	
	.benefits_card {
		width: 532rpx;
		min-height: 50rpx;
		padding: 25rpx 36rpx;
		border-radius: 20rpx;
		background: rgba(255,255,255,0.7);
	}
	
	.benefits_detail {
		width: 532rpx;
		line-height: 50rpx;
		padding: 25rpx 0;
		font-size: 28rpx;
		color: #FFBE00;
		font-weight: bold;
		letter-spacing: 2rpx;
	}
	
	.card_view {
		width: 532rpx;
		height: 150rpx;
		margin-top: 25rpx;
		display: flex;
	}
	
	.card_circle {
		width: 150rpx;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
		border-radius: 50%;
		background: rgba(255,190,0,0.6);
		font-size: 60rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.cc1 {
		margin-left: 63rpx;
	}
	
	.cc2 {
		margin-left: 104rpx;
	}
	
	.card_title {
		width: 532rpx;
		height: 70rpx;
		margin-top: 30rpx;
		margin-bottom: 25rpx;
		display: flex;
	}
	
	.cc_title {
		width: 150rpx;
		font-size: 30rpx;
		color: #FFBE00;
		font-weight: bold;
		text-align: center;
	}
	
	.benefits_button {
		width: 378rpx;
		height: 108rpx;
		line-height: 108rpx;
		text-align: center;
		background: #FFFFFF;
		border: 2rpx solid #FFBE00;
		border-radius: 54rpx;
		font-size: 40rpx;
		color: #FFBE00;
		font-weight: bold;
		position: absolute;
		top: 2708rpx;
		left: 186rpx;
		box-shadow: 0rpx 10rpx 0rpx 0rpx rgba(255,255,255,0.5);
	}
</style>

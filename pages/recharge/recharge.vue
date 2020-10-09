<template>
	<view>
		<view class="recharge_box" @click="handleShowShare">
			<view class="recharge_way">支付方式</view>
			<view class="rb_detail">
				<image src="/static/img/wechat.png" class="rb_image"></image>
				<view class="rb_title">微信支付</view>
				<image src="/static/img/more.png" class="rb_more"></image>
			</view>
		</view>
		<view class="recharge_detail">
			<view class="rd_title">支付金额</view>
			<view class="recharge_view">
				<view class="money_symbol">￥</view>
				<input type="number" class="money_input" v-model="money" placeholder="请输入您需要充值的金额"/>
				<image src="/static/img/close.png" class="money_delete" @tap="deleteMoney"></image>
			</view>
			<button class="recharge_confirm">确认</button>
		</view>
		<!-- 选择宠物弹窗 -->
		<view class="share">
			<view :class="{'share-box': shareState}" @click="handleHiddenShare">
			</view>
			<view class="share-item" :class="{'share-show': shareState}">
				<view class="share_title">
					<image src="/static/img/close.png" class="share_close" @click="handleHiddenShare"></image>
					<view class="share-to">选择支付方式</view>
				</view>
				<view class="click_pet_box">
					<view style="width: 600rpx;">
						<view style="display: flex;border-bottom: 1rpx solid #E0E0E0;" v-for="(item,index) in petdata" :key="index">
							<image :src="item.image" mode="aspectFill" class="click_pet_image"></image>
							<view class="click_pet_name">{{item.name}}</view>
						</view>
					</view>
					<radio-group>
						<view class="click_pet_radiobox" v-for="(item,index) in petdata" :key="index">
							<radio class="click_pet_radio" color="#FFC700" @tap="handleHiddenShare" />
						</view>
					</radio-group>
				</view>
				<view style="width: 750rpx;height: 52rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '',
				shareState: false,
				petdata: [{
						image: '/static/img/wechat.png',
						name: '微信支付'
					},
					{
						image: '/static/img/alipay.png',
						name: '支付宝支付'
					}
				]
			}
		},
		onLoad() {
	
		},
		methods: {
			deleteMoney() {
				this.money = ''
			},
			// 显示分享
			handleShowShare() {
				this.shareState = true;
			},
			// 隐藏分享
			handleHiddenShare() {
				this.shareState = false;
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.recharge_box {
		width: 702rpx;
		height: 88rpx;
		display: flex;
		margin-left: 24rpx;
		margin-top: 20rpx;
	}
	
	.recharge_way {
		width: 130rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-left: 24rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.rb_detail {
		width: 434rpx;
		height: 88rpx;
		display: flex;
		margin-left: 114rpx;
	}
	
	.rb_image {
		width: 44rpx;
		height: 44rpx;
		margin-top: 22rpx;
	}
	
	.rb_title {
		width: 324rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.rb_more {
		width: 26rpx;
		height: 26rpx;
		margin-top: 31rpx;
		margin-left: 20rpx;
	}
	
	.recharge_detail {
		width: 702rpx;
		height: 434rpx;
		margin-top: 60rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.rd_title {
		width: 642rpx;
		height: 86rpx;
		line-height: 86rpx;
		margin-left: 30rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.recharge_view {
		width: 702rpx;
		height: 104rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
	}
	
	.money_symbol {
		height: 104rpx;
		line-height: 104rpx;
		margin-left: 30rpx;
		font-size: 60rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.money_input {
		width: 516rpx;
		height: 86rpx;
		line-height: 86rpx;
		margin-top: 18rpx;
		margin-left: 36rpx;
		font-size: 36rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.money_delete {
		width: 18rpx;
		height: 18rpx;
		margin-top: 50rpx;
		margin-left: 20rpx;
	}
	
	.recharge_confirm {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 80rpx;
		margin-left: 151rpx;
		background: #FFC700;
		border-radius: 40rpx;
		border: none;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	button:after {
		border: none;
	}
	
	.share {
		width: 100%;
		height: 100%;
	}
	
	.share-box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		bottom: 0rpx;
		right: 0rpx;
		background-color: rgba(0, 0, 0, 0.4);
		transition: .3s;
		z-index: 999;
	}
	
	// 进入分享动画
	.share-show {
		transition: all 0.3s ease;
		transform: translateY(0%) !important;
	}
	
	// 离开分享动画
	.share-item {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 1999;
	}
	
	.share_title {
		width: 738rpx;
		height: 135rpx;
		display: flex;
		margin-left: 6rpx;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.share_close {
		width: 28rpx;
		height: 28rpx;
		margin-left: 30rpx;
		margin-top: 54rpx;
	}
	
	.share-to {
		width: 634rpx;
		height: 135rpx;
		line-height: 135rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		text-align: center;
	}
	
	.click_pet_box {
		width: 702rpx;
		min-height: 108rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 24rpx;
	}
	
	.click_pet_image {
		width: 44rpx;
		height: 44rpx;
		margin-left: 8rpx;
		margin-top: 32rpx;
		border-radius: 50%;
	}
	
	.click_pet_name {
		height: 108rpx;
		line-height: 108rpx;
		font-size: 28rpx;
		color: #343434;
		font-weight: bold;
		margin-left: 20rpx;
	}
	
	.click_pet_radiobox {
		width: 110rpx;
		height: 108rpx;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.click_pet_radio {
		transform: scale(0.7);
		margin-left: 40rpx;
		margin-top: 30rpx;
	}
</style>

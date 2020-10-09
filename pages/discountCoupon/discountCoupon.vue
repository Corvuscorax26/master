<template>
	<view>
		<view class="discount_box" v-for="(item,index) in list" :key="index">
			<view class="discount_money">{{item.money}}</view>
			<view class="discount_view">
				<view class="dv_box">
					<view class="discount_detail">
						<view class="discount_title">{{item.title}}</view>
						<view class="discount_time">{{item.time}}</view>
						<view class="discount_rulebox" @tap="clickRule(item)">
							<view class="ruletitle">查看使用规则</view>
							<image v-if="item.showRule == 0" src="/static/img/xjt.png" class="rule_image"></image>
							<image v-else-if="item.showRule == 1" src="/static/img/sjt.png" class="rule_image"></image>
						</view>
					</view>
					<button class="use_button">去使用</button>
				</view>
				<view v-if="item.showRule == 1" class="rule">{{item.rule}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						money: '¥ 100',
						title: '优惠券名字',
						time: '2020.08.21到期',
						rule: '多样性保护的旗舰物种大熊猫最初是吃肉的经过进化99%的食物都是竹子了大熊猫喜欢独居.',
						showRule: 0
					},
					{
						money: '¥ 100',
						title: '优惠券名字',
						time: '2020.08.21到期',
						rule: '多样性保护的旗舰物种大熊猫最初是吃肉的经过进化99%的食物都是竹子了大熊猫喜欢独居.',
						showRule: 0
					},
					{
						money: '¥ 100',
						title: '优惠券名字',
						time: '2020.08.21到期',
						rule: '多样性保护的旗舰物种大熊猫最初是吃肉的经过进化99%的食物都是竹子了大熊猫喜欢独居.',
						showRule: 0
					},
					{
						money: '¥ 100',
						title: '优惠券名字',
						time: '2020.08.21到期',
						rule: '多样性保护的旗舰物种大熊猫最初是吃肉的经过进化99%的食物都是竹子了大熊猫喜欢独居.',
						showRule: 0
					},
					{
						money: '¥ 100',
						title: '优惠券名字',
						time: '2020.08.21到期',
						rule: '多样性保护的旗舰物种大熊猫最初是吃肉的经过进化99%的食物都是竹子了大熊猫喜欢独居.',
						showRule: 0
					}
				]
			}
		},
		onLoad() {
	
		},
		methods: {
			clickRule(item) {
				if (item.showRule == 0) {
					item.showRule = 1;
				} else if (item.showRule == 1) {
					item.showRule = 0;
				}
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.discount_box {
		width: 702rpx;
		min-height: 182rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 30rpx;
		display: flex;
	}
	
	.discount_money {
		width: 190rpx;
		height: 182rpx;
		line-height: 182rpx;
		text-align: center;
		font-size: 40rpx;
		color: #FF5400;
		font-weight: bold;
	}
	
	.discount_view {
		width: 492rpx;
		min-height: 182rpx;
	}
	
	.dv_box {
		width: 492rpx;
		height: 182rpx;
		display: flex;
	}
	
	.discount_detail {
		
	}
	
	.discount_title {
		width: 316rpx;
		height: 46rpx;
		line-height: 46rpx;
		padding-top: 20rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.discount_time {
		width: 316rpx;
		height: 48rpx;
		line-height: 48rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.discount_rulebox {
		width: 316rpx;
		height: 56rpx;
		display: flex;
	}
	
	.ruletitle {
		height: 56rpx;
		line-height: 56rpx;
		font-size: 22rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.rule_image {
		width: 22rpx;
		height: 12rpx;
		margin-left: 10rpx;
		margin-top: 24rpx;
	}
	
	.use_button {
		width: 148rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin-top: 61rpx;
		margin-left: 20rpx;
		background: #FDD032;
		border-radius: 30rpx;
		border: none;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.rule {
		width: 492rpx;
		min-height: 64rpx;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #787878;
		font-weight: bold;
		border-top: 1rpx solid #E0E0E0;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	
	button:after {
		border: none;
	}
</style>

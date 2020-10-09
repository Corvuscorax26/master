<template>
	<view>
		<view class="member_box">
			<view class="rule_box">
				<view class="line_left"></view>
				<view class="rule_title">会员使用规则</view>
				<view class="line_right"></view>
			</view>
			<view class="rule_detail">
				<view class="ruledetail_title">一、会员使用规则</view>
				<view class="ruledetail_detail">大熊猫已在地球上生存了至少800万年，被誉为“活化石”和中国国宝”，世界自然基金会的形象大使，是世界生物多样性保护的旗舰物种。大熊猫最初是吃肉的，经过进化，99%的食物都是竹子了，大熊猫喜欢，每只大熊猫有单独的活动区域。除发情期外。 </view>
				<view class="ruledetail_title">一、会员使用规则</view>
				<view class="ruledetail_detail">大熊猫已在地球上生存了至少800万年，被誉为“活化石”和中国国宝”，世界自然基金会的形象大使，是世界生物多样性保护的旗舰物种。大熊猫最初是吃肉的，经过进化，99%的食物都是竹子了，大熊猫喜欢，每只大熊猫有单独的活动区域。除发情期外。大熊猫已在地球上生存了至少800万年，被誉为“活化石”和中国国宝”，世界自然基金会的形象大，是世界生物多样性保护的旗舰物种。大熊猫最初是吃肉的，经过进99%的食物都是竹子了，大熊猫喜欢独居，每只大熊猫有单独的活动区域除发情期外。</view>
			</view>
			<button class="member_button" @tap="goMemberCenter">立即开通</button>
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
			goMemberCenter() {
				uni.navigateTo({
					url: '/pages/memberCenter/memberCenter'
				})
			},
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.member_box {
		width: 750rpx;
		min-height: 1334rpx;
		position: relative;
		background: #F3F2F7;
	}
	
	.rule_box {
		width: 750rpx;
		height: 56rpx;
		display: flex;
	}
	
	.line_left {
		width: 200rpx;
		height: 2rpx;
		background: linear-gradient(-90deg, #FFC700 0%, rgba(255, 255, 255, 0) 100%);
		margin-left: 48rpx;
		margin-top: 27rpx;
	}
	
	.rule_title {
		width: 254rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		font-size: 36rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.line_right {
		width: 200rpx;
		height: 2rpx;
		background: linear-gradient(90deg, #FFC700 0%, rgba(255, 255, 255, 0) 100%);
		margin-top: 27rpx;
	}
	
	.rule_detail {
		width: 702rpx;
		min-height: 30rpx;
		margin-left: 24rpx;
	}
	
	.ruledetail_title {
		width: 702rpx;
		height: 56rpx;
		line-height: 56rpx;
		margin-top: 34rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.ruledetail_detail {
		width: 702rpx;
		min-height: 40rpx;
		line-height: 40rpx;
		font-size: 22rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.member_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #FFC402;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		bottom: 140rpx;
		left: 175rpx;
		border: none;
	}
	
	button:after {
		border: none;
	}
</style>

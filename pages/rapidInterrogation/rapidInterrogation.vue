<template>
	<view>
		<view class="ri_title">请选择要问诊的宠物</view>
		<view class="pet_idcard">
			<view class="basic_information">
				<image src="/static/image/7.png" mode="aspectFill" class="pet_headurl"></image>
				<view class="pet_information">
					<view class="pet_viewbig">
						<view class="pet_viewsmall1">姓名：团子</view>
						<view class="pet_viewsmall2">性别：妹妹</view>
					</view>
					<view class="pet_viewbig">
						<view class="pet_viewsmall1">所属星球：喵星</view>
						<view class="pet_viewsmall2">年龄：3岁3个月</view>
					</view>
					<view class="pet_viewbig">
						<view class="pet_viewsmall1">生日：2017-4-26</view>
						<view class="pet_viewsmall2">是否绝育：否</view>
					</view>
					<view class="pet_view">城市：昆山</view>
					<view class="pet_view">身份证号：201704260015</view>
				</view>
			</view>
			<view class="pet_text">爱好:喜欢在温暖的地方躺着,喜欢你轻轻地给它刷毛和抚摩,喜欢恬静</view>
			<view class="pet_text">性格:喜欢你轻轻地给它刷毛和抚摩</view>
			<view class="pet_text">宣言:小猫喜欢恬静、柔和而亲切的音响</view>
			<view class="pet_line"></view>
			<view class="master_information">
				<view class="master_name">主人姓名：羽涅</view>
				<view class="master_sex">性别：男</view>
				<view class="master_age">年龄：27</view>
			</view>
		</view>
		<button class="add_button" @tap="goAddPet">添加宠物</button>
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
			goAddPet() {
				uni.navigateTo({
					url: '/pages/addPet/addPet'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.ri_title {
		height: 114rpx;
		line-height: 114rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 44rpx;
	}
	
	.pet_idcard {
		width: 702rpx;
		min-height: 470rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.basic_information {
		width: 702rpx;
		height: 202rpx;
		display: flex;
		padding-top: 30rpx;
		margin-bottom: 10rpx;
	}
	
	.pet_headurl {
		width: 202rpx;
		height: 202rpx;
		margin-left: 20rpx;
	}
	
	.pet_information {
		width: 430rpx;
		height: 198rpx;
		margin-top: 2rpx;
		margin-left: 30rpx;
	}
	
	.pet_viewbig {
		width: 430rpx;
		height: 40rpx;
		display: flex;
	}
	
	.pet_viewsmall1 {
		width: 240rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.pet_viewsmall2 {
		width: 190rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.pet_view {
		width: 430rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.pet_text {
		width: 662rpx;
		min-height: 40rpx;
		line-height: 40rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 20rpx;
	}
	
	.pet_line {
		width: 702rpx;
		height: 1rpx;
		margin-top: 10rpx;
		background: #E0E0E0;
	}
	
	.master_information {
		width: 702rpx;
		height: 80rpx;
		display: flex;
	}
	
	.master_name,.master_sex,.master_age {
		height: 80rpx;
		line-height: 80rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.master_name {
		width: 220rpx;
		margin-left: 20rpx;
	}
	
	.master_sex,.master_age {
		width: 160rpx;
	}
	
	.add_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin: 50rpx 175rpx;
		border: none;
		border-radius: 40rpx;
		background: #FFC700;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	button:after {
		border: none;
	}
</style>

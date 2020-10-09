<template>
	<view>
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
		<view class="health_data">
			<view class="hd_title">健康数据</view>
			<view class="hd_card" @tap="goPetHealthDetail">
				<view class="hd_box">
					<view class="hd_name">体重</view>
					<view class="hd_time">2020年09月18日  11:26  更新</view>
				</view>
				<view class="hd_data">23.56<text>kg</text></view>
			</view>
			<view class="hd_card">
				<view class="hd_box">
					<view class="hd_name">体重</view>
					<view class="hd_time">2020年09月18日  11:26  更新</view>
				</view>
				<view class="hd_data">23.56<text>kg</text></view>
			</view>
			<view class="hd_card">
				<view class="hd_box">
					<view class="hd_name">体重</view>
					<view class="hd_time">2020年09月18日  11:26  更新</view>
				</view>
				<view class="hd_data">23.56<text>kg</text></view>
			</view>
			<view style="width: 100%;height: 1rpx;"></view>
		</view>
		<view class="pet_case">
			<view class="hd_title">宠物病例</view>
			<view class="pc_detail"></view>
			<view style="width: 100%;height: 1rpx;"></view>
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
			goPetHealthDetail() {
				uni.navigateTo({
					url: '/pages/petHealthDetail/petHealthDetail'
				})
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.pet_idcard {
		width: 702rpx;
		min-height: 470rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 30rpx;
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
	
	.health_data {
		width: 702rpx;
		min-height: 246rpx;
		background: #FFFFFF;
		margin-left: 24rpx;
		margin-top: 20rpx;
		border-radius: 20rpx;
	}
	
	.hd_title {
		width: 662rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.hd_card {
		width: 662rpx;
		height: 128rpx;
		margin-left: 20rpx;
		box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);
		border-radius: 20rpx;
		display: flex;
		margin-bottom: 30rpx;
	}
	
	.hd_box {
		width: 375rpx;
		height: 128rpx;
		margin-left: 20rpx;
	}
	
	.hd_name {
		width: 375rpx;
		height: 48rpx;
		line-height: 48rpx;
		padding-top: 22rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.hd_time {
		width: 375rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 20rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.hd_data {
		width: 247rpx;
		height: 128rpx;
		line-height: 128rpx;
		text-align: right;
		font-size: 48rpx;
		color: #25C589;
		font-weight: bold;
	}
	
	.hd_data text {
		font-size: 36rpx;
		color: #333333;
		margin-left: 10rpx;
	}
	
	.pet_case {
		width: 702rpx;
		min-height: 88rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 35rpx;
	}
	
	.pc_detail {
		width: 662rpx;
		height: 458rpx;
		border-radius: 20rpx;
		margin-left: 20rpx;
		box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);
		margin-bottom: 35rpx;
	}
</style>

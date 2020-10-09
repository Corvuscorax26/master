<template>
	<view>
		<view class="user_top" style="background: url(/static/img/beijing.png) no-repeat;background-size: 100% 100%;">
			<view class="user_headurl">
				<view style="display: flex;" v-if="userid == '' || userid == null || userid == undefined">
					<image src="/static/img/nologin_img.png" mode="aspectFill" class="user_headurl_box_no" @tap="goLogin"></image>
					<view class="user_detail" @tap="goLogin">
						<view class="user_noname">点击登录</view>
					</view>
				</view>
				<view style="display: flex;" v-else>
					<image src="/static/img/default_img.png" mode="aspectFill" class="user_headurl_box" @tap="goPersonalInformation"></image>
					<view class="user_detail" @tap="goPersonalInformation">
						<view class="user_name">哈密瓜的皮</view>
						<view class="member_level" @tap="goMemberRule">
							<image src="/static/img/huiyuan.png"></image>
							<view>普通会员</view>
						</view>
					</view>
				</view>
				<view class="user_function">
					<image src="/static/img/shezhi.png" class="user_setting" @tap="goSetting"></image>
					<image src="/static/img/xiaoxi.png" class="user_message" @tap="goMessageList"></image>
				</view>
			</view>
			<view class="user_wallet">
				<view class="user_wallet_view" @tap="goBalanceEnquiry">
					<text class="user_wallet_bottom">余额</text>
					<text class="user_wallet_top">65</text>
				</view>
				<view class="user_wallet_view" @tap="goMyIntegral">
					<text class="user_wallet_bottom">积分</text>
					<text class="user_wallet_top">41</text>
				</view>
				<view class="user_wallet_view" @tap="goDiscountCoupon">
					<text class="user_wallet_bottom">优惠券</text>
					<text class="user_wallet_top">3</text>
				</view>
			</view>
		</view>
		<view class="user_extend">
			<view class="ue_left">
				<view class="ue_left_title">会员中心</view>
				<view class="ue_left_experience">经验值：20</view>
			</view>
			<view class="ue_line"></view>
			<view class="ue_center">
				<view class="ue_center_top">已免费问诊：2次</view>
				<view class="ue_center_bottom">已节省：100元</view>
			</view>
			<image class="ue_right"></image>
		</view>
		<view class="medical_service_box">
			<view class="mst_title">优惠活动</view>
			<view class="ms_classify_box">
				<view class="mscb_box" @tap="goMyInquiry">
					<image src="/static/img/wdwz.png" style="width: 70rpx;height: 70rpx;margin-left: 35rpx;margin-top: 21rpx;"></image>
					<view class="mscb_view">我的问诊</view>
				</view>
				<view class="mscb_box" @tap="goMyDoctor">
					<image src="/static/img/wdys.png" style="width: 70rpx;height: 70rpx;margin-left: 35rpx;margin-top: 21rpx;"></image>
					<view class="mscb_view">我的医生</view>
				</view>
				<view class="mscb_box" @tap="goMyPet">
					<image src="/static/img/wdcw.png" style="width: 70rpx;height: 70rpx;margin-left: 37rpx;margin-top: 21rpx;"></image>
					<view class="mscb_view">我的宠物</view>
				</view>
				<view class="mscb_box" @tap="goMyVisit">
					<image src="/static/img/wdfz.png" style="width: 62rpx;height: 72rpx;margin-left: 39rpx;margin-top: 21rpx;"></image>
					<view class="mscb_view" style="margin-top: 8rpx;">我的复诊</view>
				</view>
				<view class="mscb_box" @tap="goMyReport">
					<image src="/static/img/wdbg.png" style="width: 70rpx;height: 68rpx;margin-left: 35rpx;margin-top: 21rpx;"></image>
					<view class="mscb_view" style="margin-top: 12rpx;">我的报告</view>
				</view>
			</view>
		</view>
		<view class="medical_service_box">
			<view class="mst_title">宠物社区</view>
			<view class="ms_classify_box">
				<view class="mscb_box2">
					<image src="/static/img/kfrz.png" style="width: 42rpx;height: 48rpx;margin-left: 50rpx;"></image>
					<view class="mscb_view">康复日志</view>
				</view>
				<view class="mscb_box2">
					<image src="/static/img/lyac.png" style="width: 50rpx;height: 42rpx;margin-left: 50rpx;margin-top: 6rpx;"></image>
					<view class="mscb_view">领养爱宠</view>
				</view>
				<view class="mscb_box2" @tap="goMyCollect">
					<image src="/static/img/wdsc.png" style="width: 49rpx;height: 48rpx;margin-left: 46rpx;"></image>
					<view class="mscb_view">我的收藏</view>
				</view>
				<view class="mscb_box2">
					<image src="/static/img/syzb.png" style="width: 50rpx;height: 34rpx;margin-left: 44rpx;margin-top: 8rpx;"></image>
					<view class="mscb_view" style="margin-top: 16rpx;">兽医直播</view>
				</view>
				<view class="mscb_box2" @tap="goMyPosts">
					<image src="/static/img/wdtz.png" style="width: 44rpx;height: 42rpx;margin-left: 50rpx;margin-top: 6rpx;"></image>
					<view class="mscb_view">我的帖子</view>
				</view>
			</view>
		</view>
		<view class="user_discounts">
			<view class="ms_title_box">
				<view class="mst_title">常用工具</view>
			</view>
			<view style="display: flex;flex-flow: row wrap;">
				<view class="ud_box" @click="goNewProductTrial">
					<image src="/static/img/xpsy.png" style="width: 40rpx;height: 48rpx;margin-left: 66rpx;margin-top: 6rpx;"></image>
					<view class="ud_view">新品试用</view>
				</view>
				<view class="ud_box" @click="goMemberBenefits">
					<image src="/static/img/hyfl.png" style="width: 48rpx;height: 48rpx;margin-left: 62rpx;margin-top: 6rpx;"></image>
					<view class="ud_view">会员福利</view>
				</view>
				<view class="ud_box" @click="goSpecial">
					<image src="/static/img/thtc.png" style="width: 54rpx;height: 46rpx;margin-left: 60rpx;margin-top: 8rpx;"></image>
					<view class="ud_view">特惠套餐</view>
				</view>
				<view class="ud_box" @click="goLottery">
					<image src="/static/img/0ywz.png" style="width: 44rpx;height: 48rpx;margin-left: 66rpx;margin-top: 6rpx;"></image>
					<view class="ud_view">0元问诊</view>
				</view>
				<view class="ud_box" @click="goMealAllowance">
					<image src="/static/img/tcyl.png" style="width: 46rpx;height: 48rpx;margin-left: 66rpx;margin-top: 6rpx;"></image>
					<view class="ud_view">套餐余量</view>
				</view>
				<view class="ud_box">
					<image src="/static/img/yecz.png" style="width: 46rpx;height: 46rpx;margin-left: 66rpx;margin-top: 8rpx;"></image>
					<view class="ud_view">余额充值</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid: '1'
			}
		},
		onLoad() {

		},
		methods: {
			goSetting() {
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			},
			goMessageList() {
				uni.navigateTo({
					url: '/pages/messageList/messageList'
				})
			},
			goMyInquiry() {
				uni.navigateTo({
					url: '/pages/myInquiry/myInquiry'
				})
			},
			goMyDoctor() {
				uni.navigateTo({
					url: '/pages/myDoctor/myDoctor'
				})
			},
			goMemberRule() {
				uni.navigateTo({
					url: '/pages/memberRule/memberRule'
				})
			},
			goBalanceEnquiry() {
				uni.navigateTo({
					url: '/pages/balanceEnquiry/balanceEnquiry'
				})
			},
			goMyIntegral() {
				uni.navigateTo({
					url: '/pages/myIntegral/myIntegral'
				})
			},
			goDiscountCoupon() {
				uni.navigateTo({
					url: '/pages/discountCoupon/discountCoupon'
				})
			},
			goMyPet() {
				uni.navigateTo({
					url: '/pages/myPet/myPet'
				})
			},
			goMyVisit() {
				uni.navigateTo({
					url: '/pages/myVisit/myVisit'
				})
			},
			goMyReport() {
				uni.navigateTo({
					url: '/pages/myReport/myReport'
				})
			},
			goMyPosts() {
				uni.navigateTo({
					url: '/pages/myPosts/myPosts'
				})
			},
			goMyCollect() {
				uni.navigateTo({
					url: '/pages/myCollect/myCollect'
				})
			},
			goPersonalInformation() {
				uni.navigateTo({
					url: '/pages/personalInformation/personalInformation'
				})
			},
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			goLottery() {
				uni.navigateTo({
					url: '/pages/lottery/lottery'
				})
			},
			goMemberBenefits() {
				uni.navigateTo({
					url: '/pages/memberBenefits/memberBenefits'
				})
			},
			goNewProductTrial() {
				uni.navigateTo({
					url: '/pages/newProductTrial/newProductTrial'
				})
			},
			goMealAllowance() {
				uni.navigateTo({
					url: '/pages/mealAllowance/mealAllowance'
				})
			},
			goSpecial() {
				uni.navigateTo({
					url: '/pages/special/special'
				})
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F4F4F4;
	}

	.user_top {
		height: 542rpx;
		position: relative;
	}

	.user_headurl {
		width: 750rpx;
		height: 150rpx;
		display: flex;
		padding-top: 86rpx;
	}

	.user_headurl_box {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin-left: 64rpx;
	}
	
	.user_headurl_box_no {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin-left: 64rpx;
	}

	.user_detail {
		width: 334rpx;
		height: 150rpx;
		margin-left: 40rpx;
	}
	
	.user_noname {
		width: 334rpx;
		height: 150rpx;
		line-height: 150rpx;
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}

	.user_name {
		width: 334rpx;
		height: 72rpx;
		line-height: 72rpx;
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}

	.member_level {
		height: 54rpx;
		margin-top: 8rpx;
		position: relative;
	}

	.member_level image {
		width: 156rpx;
		height: 44rpx;
		z-index: 999;
	}

	.member_level view {
		width: 120rpx;
		height: 44rpx;
		line-height: 44rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 0;
		left: 51rpx;
		z-index: 9999;
	}

	.user_function {
		height: 72rpx;
		display: flex;
	}

	.user_setting {
		width: 44rpx;
		height: 44rpx;
		margin-top: 14rpx;
	}

	.user_message {
		width: 44rpx;
		height: 44rpx;
		margin-top: 14rpx;
		margin-left: 30rpx;
	}

	.user_wallet {
		width: 720rpx;
		height: 38rpx;
		display: flex;
		margin-top: 56rpx;
		margin-left: 15rpx;
	}

	.user_wallet_view {
		width: 240rpx;
		height: 38rpx;
		line-height: 38rpx;
		text-align: center;
		border-right: 1rpx solid #777777;
	}
	
	.user_wallet_view:nth-child(3) {
		border: none;
	}

	.user_wallet_top {
		font-size: 36rpx;
		color: #333333;
		margin-left: 19rpx;
		font-weight: bold;
	}

	.user_wallet_bottom {
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}

	.user_extend {
		width: 702rpx;
		height: 140rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 402rpx;
		left: 24rpx;
		display: flex;
		box-shadow: 0 1rpx 16rpx 1rpx rgba(255, 219, 119, 0.2);
	}

	.ue_left {
		width: 203rpx;
		height: 82rpx;
		margin-top: 28rpx;
	}

	.ue_left_title {
		width: 163rpx;
		height: 34rpx;
		line-height: 34rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
		margin-left: 40rpx;
	}

	.ue_left_experience {
		width: 163rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 40rpx;
		margin-top: 16rpx;
	}

	.ue_line {
		width: 1rpx;
		height: 82rpx;
		margin-top: 28rpx;
		background: #E0B68C;
	}

	.ue_center {
		width: 318rpx;
		height: 80rpx;
		margin-top: 28rpx;
	}

	.ue_center_top {
		width: 318rpx;
		height: 32rpx;
		margin-left: 40rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.ue_center_bottom {
		width: 260rpx;
		height: 32rpx;
		margin-left: 40rpx;
		margin-top: 18rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}

	.ue_right {
		width: 100rpx;
		height: 100rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		background: #E0B68C;
		border-radius: 50%;
	}

	.medical_service_box {
		width: 702rpx;
		height: 268rpx;
		border-radius: 20rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
	}

	.mst_title {
		height: 94rpx;
		line-height: 94rpx;
		font-size: 36rpx;
		margin-left: 20rpx;
		color: #333333;
		font-weight: bold;
	}

	.mst_more {
		width: 50rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #999999;
		font-family: Source Han Sans CN;
	}
	
	.ms_classify_box {
		width: 700rpx;
		display: flex;
	}
	
	.mscb_box {
		width: 140rpx;
		height: 174rpx;
	}
	
	.mscb_box2 {
		width: 140rpx;
		height: 130rpx;
		margin-top: 20rpx;
	}
	
	.mscb_view {
		width: 140rpx;
		text-align: center;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		margin-top: 10rpx;
	}
	
	.mscb_image {
		
	}
	
	.user_discounts {
		width: 702rpx;
		min-height: 202rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-bottom: 50rpx;
		border-radius: 20rpx;
		background: #FFFFFF;
	}
	
	.ud_box {
		width: 175rpx;
		height: 130rpx;
		margin-top: 10rpx;
	}
	
	.ud_view {
		width: 175rpx;
		font-size: 24rpx;
		color: #333333;
		text-align: center;
		font-weight: bold;
	}
</style>

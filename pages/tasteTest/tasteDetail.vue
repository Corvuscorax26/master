<template>
	<view>
		<image :src="bg_url" mode="aspectFill" class="td_bg"></image>
		<view class="td_view">
			<view class="td_progress_box">
				<view class="all_progress"></view>
				<view class="td_progress" :style="{width: progress_width}"></view>
				<view class="question_num">1/10</view>
			</view>
			<view class="td_question_card">
				<view class="tdq_view">
					<view class="tdq_question">1.大熊猫已在地球上生存了至少80</view>
					<view class="tdq_answer">A.大熊猫已</view>
					<view class="tdq_answer">B.大熊猫已在地球上生</view>
					<view class="tdq_answer">C.大熊猫已</view>
					<view class="tdq_answer">D.大熊猫已在地</view>
				</view>
			</view>
			<view class="upper_stage">上一题</view>
			<view class="back_home">返回测试主页</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				bg_url: '',
				question_num: 10,
				now_question: 2,
				progress_width: ''
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
			　　title: option.title
			})
			this.num = parseInt(option.num);
			this.bg_url = '/static/img/xq' + this.num + '_bg.png'
		},
		methods: {
			
		}
	}
</script>

<style>
	page,uni-page-wrapper {
		background: #132455;
	}
	
	.td_bg {
		width: 750rpx;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.td_view {
		width: 750rpx;
		min-height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
	}
	
	.td_progress_box {
		height: 48rpx;
		margin-left: 47rpx;
		margin-top: 20rpx;
		display: flex;
		position: relative;
	}
	
	.all_progress {
		width: 540rpx;
		height: 20rpx;
		background: rgba(255,255,255,0.4);
		border-radius: 10rpx;
		margin-top: 14rpx;
	}
	
	.td_progress {
		width: 54rpx;
		height: 20rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		position: absolute;
		left: 0;
		top: 14rpx;
	}
	
	.question_num {
		height: 48rpx;
		line-height: 48rpx;
		margin-left: 30rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.td_question_card {
		width: 662rpx;
		min-height: 50rpx;
		background: rgba(243,242,247,0.8);
		margin: 137rpx 44rpx;
		border-radius: 20rpx;
	}
	
	.tdq_view {
		width: 542rpx;
		min-height: 50rpx;
		padding: 100rpx 60rpx;
	}
	
	.tdq_question {
		width: 542rpx;
		line-height: 50rpx;
		font-size: 36rpx;
		color: #343434;
		font-weight: bold;
		margin-bottom: 100rpx;
	}
	
	.tdq_answer {
		width: 542rpx;
		line-height: 30rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
		margin-bottom: 69rpx;
	}
	
	.tdq_answer:last-child {
		margin: 0 !important;
	}
	
	.upper_stage {
		width: 272rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		border: 1rpx solid #FFFFFF;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-left: 239rpx;
		border-radius: 35rpx;
	}
	
	.back_home {
		width: 272rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		border: 1rpx solid #FFFFFF;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-left: 239rpx;
		border-radius: 35rpx;
		margin-top: 40rpx;
		margin-bottom: 60rpx;
	}
</style>

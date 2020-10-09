<template>
	<view>
		<view class="report_top">
			<view class="report_pet">
				<image src="/static/image/7.png" mode="aspectFill" class="report_headurl"></image>
				<view class="report_cut" @click="handleShowShare">切换宠物</view>
			</view>
			<view class="report_petname">阿里啊</view>
		</view>
		<view v-if="data == ''" class="report_detailbox_none">暂无报告</view>
		<view v-else class="report_detailbox">
			<view class="report_detail"></view>
		</view>
		<view class="report_botton_box">
			<button class="report_button">获取报告</button>
			<button class="report_button">上传报告</button>
		</view>
		<!-- 选择宠物弹窗 -->
		<view class="share">
			<view :class="{'share-box': shareState}" @click="handleHiddenShare">
			</view>
			<view class="share-item" :class="{'share-show': shareState}">
				<view class="share_title">
					<image src="/static/img/close.png" class="share_close" @click="handleHiddenShare"></image>
					<view class="share-to">选择宠物</view>
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: '1',
				shareState: false,
				petdata: [{
						image: '/static/image/7.png',
						name: '团子1'
					},
					{
						image: '/static/image/7.png',
						name: '团子2'
					},
					{
						image: '/static/image/7.png',
						name: '团子3'
					},
					{
						image: '/static/image/7.png',
						name: '团子4'
					},
					{
						image: '/static/image/7.png',
						name: '团子5'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
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

	.report_top {
		width: 682rpx;
		height: 186rpx;
		margin-left: 34rpx;
		margin-top: 50rpx;
	}

	.report_pet {
		width: 391rpx;
		height: 100rpx;
		display: flex;
		margin-left: 291rpx;
	}

	.report_headurl {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.report_cut {
		width: 142rpx;
		height: 50rpx;
		line-height: 50rpx;
		background: #E0E0E0;
		text-align: center;
		font-size: 26rpx;
		color: #787878;
		font-weight: bold;
		border-radius: 25rpx;
		margin-left: 149rpx;
	}

	.report_petname {
		width: 682rpx;
		height: 86rpx;
		line-height: 86rpx;
		text-align: center;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}

	.report_detailbox_none {
		width: 702rpx;
		height: 779rpx;
		line-height: 779rpx;
		margin-left: 24rpx;
		text-align: center;
		font-size: 36rpx;
		color: #787878;
		font-weight: bold;
	}

	.report_detailbox {
		width: 702rpx;
		height: 779rpx;
		margin-left: 24rpx;
	}

	.report_detail {
		width: 702rpx;
		height: 394rpx;
		background: #FFC800;
		border-radius: 20rpx;
		margin-top: 10rpx;
	}

	.report_botton_box {
		width: 660rpx;
		height: 80rpx;
		display: flex;
		margin-left: 45rpx;
		justify-content: space-between;
	}

	.report_button {
		width: 300rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		background: #FFC700;
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
		width: 60rpx;
		height: 60rpx;
		margin-left: 8rpx;
		margin-top: 24rpx;
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

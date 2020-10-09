<template>
	<view>
		<scroll-view scroll-y="true" class="new_box">
			<view class="log_card" v-for="(item,index) in datalist" :key="index">
				<view class="check_stage" @click="showFrame(item)">
					<text v-if="item.stage == '9'">选择治疗阶段<image src="/static/img/xjt.png" class="check_more"></image></text>
					<text v-else-if="item.stage == '0'">治疗前<image src="/static/img/xjt.png" class="check_more"></image></text>
					<text v-else-if="item.stage == '1'">治疗中<image src="/static/img/xjt.png" class="check_more"></image></text>
					<text v-else-if="item.stage == '2'">治疗后<image src="/static/img/xjt.png" class="check_more"></image></text>
				</view>
				<textarea class="new_detail" placeholder="文本描述..." v-model="item.detail"></textarea>
				<view class="new_imagebox">
					<image src="/static/img/add_image.png" mode="aspectFill" class="new_image"></image>
				</view>
				<view class="check_frame" v-if="item.ifshow == 1" @click="hideFrame(item)">
					<view class="check_view" @click="changeStage(item,'0')">治疗前</view>
					<view class="check_view" @click="changeStage(item,'1')">治疗中</view>
					<view class="check_view" @click="changeStage(item,'2')">治疗后</view>
				</view>
			</view>
			<view class="continue_add" @click="addNewCard">
				<text>继续添加</text>
				<image src="/static/img/xjt.png"></image>
			</view>
		</scroll-view>
		<view class="nc_bottomview">
			<button class="nc_button">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist: [{
					stage: '9',
					detail: '',
					imageList: [],
					ifshow: 0
				}, {
					stage: '1',
					detail: '',
					imageList: [],
					ifshow: 0
				}]
			}
		},
		onLoad() {

		},
		methods: {
			showFrame(item) {
				item.ifshow = 1;
			},
			hideFrame(item) {
				item.ifshow = 0;
			},
			changeStage(item, num) {
				item.stage = num;
			},
			addNewCard() {
				var data = {
					stage: '9',
					detail: '',
					imageList: [],
					ifshow: 0
				}
				this.datalist.push(data)
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}

	.new_box {
		width: 750rpx;
		height: calc(100vh - 180rpx - 88rpx - 20rpx);
	}

	.log_card {
		width: 750rpx;
		min-height: 100rpx;
		position: relative;
		margin-bottom: 20rpx;
	}

	.check_frame {
		width: 224rpx;
		height: 198rpx;
		position: absolute;
		top: 54rpx;
		left: 24rpx;
		background: #E0E0E0;
		border-radius: 25rpx;
	}

	.check_stage {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
		display: flex;
		margin-left: 24rpx;
	}

	.check_stage text {
		padding-left: 20rpx;
		background: #E0E0E0;
		border-radius: 25rpx;
	}

	.check_more {
		width: 22rpx;
		height: 14rpx;
		margin-left: 10rpx;
		margin-right: 20rpx;
		margin-top: -10rpx;
	}

	.check_view {
		width: 184rpx;
		height: 65rpx;
		line-height: 65rpx;
		padding: 0 20rpx;
		border-bottom: 1rpx solid #C6C6C6;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}

	.check_view:last-child {
		border: none;
	}

	.new_detail {
		width: 474rpx;
		height: 146rpx;
		padding: 30rpx 20rpx;
		margin-top: 30rpx;
		margin-left: 211rpx;
		background: #E9E7ED;
		border-radius: 20rpx;
		font-size: 24rpx;
		color: #343434;
		font-weight: bold;
	}

	.new_imagebox {
		width: 514rpx;
		min-height: 158rpx;
		margin-left: 211rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.new_image {
		width: 158rpx;
		height: 158rpx;
		margin-top: 10rpx;
		border-radius: 20rpx;
	}

	.nc_bottomview {
		width: 750rpx;
		height: 180rpx;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.nc_button {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 50rpx;
		margin-left: 175rpx;
		text-align: center;
		background: #FFC700;
		border-radius: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
	}

	button:after {
		border: none;
	}

	.continue_add {
		width: 662rpx;
		height: 46rpx;
		line-height: 46rpx;
		margin-left: 44rpx;
	}

	.continue_add text {
		font-size: 28rpx;
		color: #787878;
		font-weight: bold;
	}

	.continue_add image {
		width: 22rpx;
		height: 14rpx;
		margin-left: 10rpx;
		margin-top: 14rpx;
	}
</style>

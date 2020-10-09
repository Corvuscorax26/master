<template>
	<view>
		<scroll-view scroll-y="true" class="new_box">
			<view class="newadopt_card">
				<view class="newadopt_list">
					<view class="newadopt_title">姓名</view>
					<input type="text" class="newadopt_detail" />
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">性别</view>
					<view style="display: flex;" @tap="showSexPicker">
						<view class="newadopt_view">{{sexlaber}}</view>
						<image src="/static/img/more.png" class="newadopt_more"></image>
					</view>
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">领养宣言</view>
					<input type="text" class="newadopt_detail" />
				</view>
			</view>
			<view class="nc_imagebox">
				<image src="/static/img/add_image.png" mode="aspectFill" class="nc_image"></image>
			</view>
		</scroll-view>
		<view class="nc_bottomview">
			<button class="nc_button">发布</button>
		</view>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerA" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmA" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from 'mpvue-picker'
	import cityData from '../../common/city.data-3.js'
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				mode: '',
				deepLength: 0,
				pickerValueArray: [],
				pickerValueDefault: [0],
				pickerSexArray: [{
						label: '弟弟',
						value: 1
					},
					{
						label: '妹妹',
						value: 2
					}
				],
				sexlaber: '',
				type: 0
			}
		},
		onLoad(option) {
			this.type = option.type;
		},
		methods: {
			showSexPicker() {
				this.pickerValueArray = this.pickerSexArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerA.show()
			},
			onConfirmA(e) {
				var that = this;
				that.sexlaber = e.label;
			},
			onCancel(e) {}
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
	
	.newadopt_card {
		width: 702rpx;
		height: 300rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.newadopt_list {
		width: 662rpx;
		height: 89rpx;
		display: flex;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 20rpx;
		justify-content: space-between;
	}
	
	.newadopt_title {
		width: 146rpx;
		height: 89rpx;
		line-height: 89rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.newadopt_detail {
		width: 496rpx;
		height: 89rpx;
		line-height: 89rpx;
		margin-right: 10rpx;
		font-size: 30rpx;
		color: #777777;
		font-weight: bold;
		text-align: right;
	}
	
	.newadopt_view {
		width: 434rpx;
		height: 89rpx;
		line-height: 89rpx;
		font-size: 28rpx;
		color: #777777;
		font-weight: bold;
		text-align: right;
	}
	
	.newadopt_more {
		width: 30rpx;
		height: 30rpx;
		margin-left: 12rpx;
		margin-top: 29rpx;
	}
	
	.nc_imagebox {
		width: 702rpx;
		min-height: 220rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.nc_image {
		width: 220rpx;
		height: 220rpx;
		margin-top: 21rpx;
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
</style>

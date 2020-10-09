<template>
	<view>
		<scroll-view scroll-y="true" class="new_box">
			<view class="newadopt_card">
				<view class="newadopt_list">
					<view class="newadopt_title">姓名</view>
					<input type="text" class="newadopt_detail" />
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">走失城市</view>
					<view style="display: flex;" @tap="showCityPicker">
						<view class="newadopt_view">{{address}}</view>
						<image src="/static/img/more.png" class="newadopt_more"></image>
					</view>
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">走失地点</view>
					<input type="text" class="newadopt_detail" />
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">走失时间</view>
					<view style="display: flex;" @tap="showDatePicker">
						<view class="newadopt_view">{{date}}</view>
						<image src="/static/img/more.png" class="newadopt_more"></image>
					</view>
				</view>
				<view class="newadopt_list">
					<view class="newadopt_title">主人寄语</view>
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
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerC" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmC" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerD" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmD" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
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
				cityPicker: cityData,
				address: '',
				date: ''
			}
		},
		onLoad() {
	
		},
		methods: {
			showDatePicker() {
				// this.pickerValueArray = this.pickerDateArray
				this.mode = 'dateSelector'
				this.deepLength = 1
				this.pickerValueDefault = []
				this.$refs.mpvuePickerC.show()
			},
			showCityPicker() {
				this.pickerValueArray = this.cityPicker;
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePickerD.show()
			},
			onConfirmC(e) {
				var that = this;
				var y = e.value[0];
				var m = e.value[1];
				var d = e.value[2];
				if (m < 10) {
					m = '0' + m;
				}
				if (d < 10) {
					d = '0' + d;
				}
				that.date = y + '-' + m + '-' + d
			},
			onConfirmD(e) {
				var that = this;
				that.address = e.label;
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
		height: 480rpx;
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

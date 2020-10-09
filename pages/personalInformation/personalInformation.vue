<template>
	<view class="pi_view">
		<view class="pd_list">
			<view class="pd_title">昵称</view>
			<view class="pd_input" @tap="maskShowOrHide">{{nickname}}</view>
		</view>
		<view class="pd_list2">
			<view class="pd_title">头像</view>
			<view style="display: flex;">
				<image class="pd_image"></image>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
		</view>
		<view class="pd_list2">
			<view style="display: flex;">
				<view class="pd_title">性别</view>
			</view>
			<view style="display: flex;" @tap="showSexPicker">
				<view class="pd_view">{{sexlaber}}</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
		</view>
		<view class="pd_list2">
			<view style="display: flex;">
				<view class="pd_title">地区</view>
			</view>
			<view style="display: flex;" @tap="showCityPicker">
				<view class="pd_view">{{address}}</view>
				<image src="/static/img/more.png" class="pd_more"></image>
			</view>
		</view>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerA" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmA" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerD" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmD" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<view v-if="ifMask == 1" class="showMask">
			<view class="mask_box">
				<image src="/static/img/close.png" class="mask_close" @tap="maskHide"></image>
				<view class="mask_title">修改昵称</view>
				<input type="text" class="mask_input" v-model="changename"/>
				<button @tap="maskShowOrHide" class="mask_button">提交</button>
			</view>
		</view>
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
				sexlaber: '',
				nickname: '123',
				changename: '',
				ifMask: 0,
				pickerSexArray: [{
						label: '男',
						value: 1
					},
					{
						label: '女',
						value: 2
					}
				],
			}
		},
		onLoad() {
			
		},
		methods: {
			maskShowOrHide () {
				if (this.ifMask == 0) {
					this.ifMask = 1;
					this.changename = this.nickname;
				} else if (this.ifMask == 1) {
					this.ifMask = 0;
					this.nickname = this.changename;
				}
			},
			maskHide() {
				this.ifMask = 0;
			},
			showSexPicker() {
				this.pickerValueArray = this.pickerSexArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerA.show()
			},
			showCityPicker() {
				this.pickerValueArray = this.cityPicker;
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePickerD.show()
			},
			onConfirmA(e) {
				var that = this;
				that.sexlaber = e.label;
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
	
	.pi_view {
		width: 702rpx;
		height: 390rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.pd_list {
		width: 662rpx;
		height: 89rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
	}
	
	.pd_title {
		width: 146rpx;
		height: 89rpx;
		line-height: 89rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.pd_input {
		width: 434rpx;
		height: 89rpx;
		line-height: 89rpx;
		margin-left: 10rpx;
		margin-right: 42rpx;
		font-size: 30rpx;
		color: #777777;
		font-weight: bold;
		text-align: right;
	}
	
	.pd_list2 {
		width: 662rpx;
		height: 89rpx;
		margin-left: 20rpx;
		border-bottom: 1rpx solid #E0E0E0;
		display: flex;
		justify-content: space-between;
	}
	
	.masterdetail_card {
		width: 702rpx;
		height: 310rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	
	.pd_image {
		width: 70rpx;
		height: 70rpx;
		margin-top: 10rpx;
		background: #F3F2F7;
		border-radius: 10rpx;
	}
	
	.pd_view {
		width: 434rpx;
		height: 89rpx;
		line-height: 89rpx;
		font-size: 28rpx;
		color: #777777;
		font-weight: bold;
		text-align: right;
	}
	
	.pd_more {
		width: 30rpx;
		height: 30rpx;
		margin-left: 12rpx;
		margin-top: 29rpx;
	}
	
	.showMask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.mask_box {
		width: 500rpx;
		min-height: 300rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 445rpx;
		left: 125rpx;
	}
	
	.mask_close {
		width: 28rpx;
		height: 28rpx;
		margin-top: 20rpx;
		margin-left: 452rpx;
	}
	
	.mask_title {
		width: 500rpx;
		height: 58rpx;
		line-height: 58rpx;
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		text-align: center;
	}
	
	.mask_input {
		width: 440rpx;
		height: 88rpx;
		line-height: 88rpx;
		margin-top: 56rpx;
		margin-left: 20rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.mask_button {
		width: 300rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin-left: 100rpx;
		margin-top: 60rpx;
		background: #FDD031;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
		margin-bottom: 50rpx;
	}
	
	button:after {
		border: none;
	}
</style>

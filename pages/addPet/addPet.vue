<template>
	<view>
		<view class="petdetail_card">
			<view class="pd_list">
				<view class="pd_title">姓名</view>
				<image src="/static/img/required.png" class="pd_required"></image>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">年龄</view>
				<image src="/static/img/required.png" class="pd_required"></image>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list2">
				<view class="pd_title">宠物头像</view>
				<view style="display: flex;">
					<image class="pd_image"></image>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2">
				<view style="display: flex;">
					<view class="pd_title">性别</view>
					<image src="/static/img/required.png" class="pd_required"></image>
				</view>
				<view style="display: flex;" @tap="showSexPicker">
					<view class="pd_view">{{sexlaber}}</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2">
				<view style="display: flex;">
					<view class="pd_title">所属星球</view>
					<image src="/static/img/required.png" class="pd_required"></image>
				</view>
				<view style="display: flex;" @tap="showStarPicker">
					<view class="pd_view">{{star}}</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2">
				<view style="display: flex;">
					<view class="pd_title">生日</view>
					<image src="/static/img/required.png" class="pd_required"></image>
				</view>
				<view style="display: flex;" @tap="showDatePicker">
					<view class="pd_view">{{date}}</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2">
				<view style="display: flex;">
					<view class="pd_title">是否绝育</view>
					<image src="/static/img/required.png" class="pd_required"></image>
				</view>
				<view style="display: flex;" @tap="showSterilizationPicker">
					<view class="pd_view">{{sterilization}}</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list2">
				<view style="display: flex;">
					<view class="pd_title">城市</view>
					<image src="/static/img/required.png" class="pd_required"></image>
				</view>
				<view style="display: flex;" @tap="showCityPicker">
					<view class="pd_view">{{address}}</view>
					<image src="/static/img/more.png" class="pd_more"></image>
				</view>
			</view>
			<view class="pd_list">
				<view class="pd_title">爱好</view>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">性格</view>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">宣言</view>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">身份证号</view>
				<input type="text" class="pd_input" />
			</view>
		</view>
		<view class="masterdetail_card">
			<view class="pd_list">
				<view class="pd_title">主人姓名</view>
				<image src="/static/img/required.png" class="pd_required"></image>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">性别</view>
				<input type="text" class="pd_input" />
			</view>
			<view class="pd_list">
				<view class="pd_title">年龄</view>
				<input type="text" class="pd_input" />
			</view>
		</view>
		<button class="pd_button">添加宠物</button>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerA" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmA" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerB" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmB" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerC" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmC" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerD" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmD" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePickerE" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirmE" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
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
				pickerSterilizationArray: [{
						label: '是',
						value: 1
					},
					{
						label: '否',
						value: 2
					}
				],
				pickerDateArray: [],
				sexlaber: '',
				sterilization: '',
				cityPicker: cityData,
				address: '',
				date: '',
				star: '',
				pickerStarArray: [{
						label: '喵星',
						value: 1
					},
					{
						label: '汪星',
						value: 2
					},
					{
						label: '兔兔星',
						value: 3
					},
					{
						label: '啾啾星',
						value: 4
					},
					{
						label: '吱吱星',
						value: 5
					},
					{
						label: '哼哼星',
						value: 6
					},
					{
						label: '呱呱星',
						value: 7
					},
					{
						label: '嘶嘶星',
						value: 8
					},
					{
						label: '沉默星',
						value: 9
					},
					{
						label: '其他星球',
						value: 10
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			showSexPicker() {
				this.pickerValueArray = this.pickerSexArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerA.show()
			},
			showSterilizationPicker() {
				this.pickerValueArray = this.pickerSterilizationArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerB.show()
			},
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
			showStarPicker() {
				this.pickerValueArray = this.pickerStarArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerE.show()
			},
			onConfirmA(e) {
				var that = this;
				that.sexlaber = e.label;
			},
			onConfirmB(e) {
				var that = this;
				that.sterilization = e.label;
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
			onConfirmE(e) {
				var that = this;
				that.star = e.label;
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

	.petdetail_card {
		width: 702rpx;
		min-height: 1110rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 24rpx;
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

	.pd_required {
		width: 20rpx;
		height: 20rpx;
		margin-top: 35rpx;
	}

	.pd_button {
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

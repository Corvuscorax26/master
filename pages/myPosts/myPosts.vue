<template>
	<view>
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{menuTab.name}}</view>
						<view class="menu-one-bottom">
							<view class="menu-one-bottom-color"></view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<!-- 帖子 -->
		<view v-if="currentTab == 0" class="pet_list">
			<view class="recovery_card">
				<view class="date_box">
					<view class="date_day">16</view>
					<view class="date_slash">/</view>
					<view class="date_month">2月</view>
				</view>
				<view class="recovery_box">
					<view class="recovery_title">大熊猫对睡觉的地方有什么要求</view>
					<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
					<view class="recovery_imagebox">
						<image src="/static/image/1.png" mode="aspectFill" class="recovery_image"></image>
						<image src="/static/image/2.png" mode="aspectFill" class="recovery_image"></image>
						<image src="/static/image/3.png" mode="aspectFill" class="recovery_image"></image>
						<image src="/static/image/4.png" mode="aspectFill" class="recovery_image"></image>
						<image src="/static/image/5.png" mode="aspectFill" class="recovery_image"></image>
						<image src="/static/image/6.png" mode="aspectFill" class="recovery_image"></image>
					</view>
					<view class="recovery_operation">
						<view class="ro_box">
							<image src="/static/img/browse.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/praise.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/transpond.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
					</view>
				</view>
			</view>
			<view class="recovery_card">
				<view class="date_box">
					<view class="date_day">26</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_box">
					<view class="recovery_title">大熊猫对睡觉的地方有什么要求</view>
					<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
					<view class="recovery_imagebox">
						<image src="/static/image/1.png" mode="aspectFill" class="recovery_image_one"></image>
					</view>
					<view class="recovery_operation">
						<view class="ro_box">
							<image src="/static/img/browse.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/praise.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/transpond.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
					</view>
				</view>
			</view>
			<view class="recovery_card">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_box">
					<view class="recovery_title">大熊猫对睡觉的地方有什么要求</view>
					<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
					<view class="recovery_videobox">
						<video poster="/static/image/7.png" class="recovery_video"></video>
					</view>
					<view class="recovery_operation">
						<view class="ro_box">
							<image src="/static/img/browse.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/praise.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
						<view class="ro_box">
							<image src="/static/img/transpond.png" class="ro_icon"></image>
							<view class="ro_number">3525</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 领养 -->
		<view v-if="currentTab == 1" class="pet_list">
			<view class="recovery_card2">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt">
					<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
					<view class="ra_view">
						<view class="ra_text">姓名：哈哈哈</view>
						<view class="ra_text">性别：男</view>
						<view class="ra_text2">主人寄语：我只想这样静静的我只想这样静静的</view>
					</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt">
					<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
					<view class="ra_view">
						<view class="ra_text">姓名：哈哈哈</view>
						<view class="ra_text">性别：男</view>
						<view class="ra_text2">主人寄语：我只想这样静静的我只想这样静静的</view>
					</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt">
					<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
					<view class="ra_view">
						<view class="ra_text">姓名：哈哈哈</view>
						<view class="ra_text">性别：男</view>
						<view class="ra_text2">主人寄语：我只想这样静静的我只想这样静静的</view>
					</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt">
					<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
					<view class="ra_view">
						<view class="ra_text">姓名：哈哈哈</view>
						<view class="ra_text">性别：男</view>
						<view class="ra_text2">主人寄语：我只想这样静静的我只想这样静静的</view>
					</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt">
					<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
					<view class="ra_view">
						<view class="ra_text">姓名：哈哈哈</view>
						<view class="ra_text">性别：男</view>
						<view class="ra_text2">主人寄语：我只想这样静静的我只想这样静静的</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 寻宠 -->
		<view v-if="currentTab == 2" class="pet_list">
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
			<view class="recovery_card2">
				<view class="date_box2">
					<view class="date_day">14</view>
					<view class="date_slash">/</view>
					<view class="date_month">1月</view>
				</view>
				<view class="recovery_adopt2">
					<view style="display: flex;">
						<image src="/static/image/7.png" mode="aspectFill" class="ra_image"></image>
						<view class="ra_view">
							<view class="ra_text">姓名：哈哈哈</view>
							<view class="ra_text">走失城市：济南</view>
							<view class="ra_text">走失地点：济南市槐荫区</view>
							<view class="ra_text">走失时间：2020.08.30</view>
						</view>
					</view>
					<view class="ra_text3">主人寄语：我只想这样静静的我只想这样静静的</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				currentTab: 0,
				menuTabs: [{
						name: '帖子',
						newstype_id: '1'
					},
					{
						name: '领养',
						newstype_id: '2'
					},
					{
						name: '寻宠',
						newstype_id: '3'
					}
				]
			}
		},
		onLoad() {
	
		},
		methods: {
			swichMenu(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
				}
			},
			swiperChange(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.recovery_card {
		width: 702rpx;
		min-height: 300rpx;
		margin-left: 4rpx;
		margin-top: 50rpx;
		margin-bottom: 20rpx;
		display: flex;
	}
	
	.recovery_card2 {
		width: 702rpx;
		min-height: 210rpx;
		margin-left: 24rpx;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		display: flex;
	}
	
	.date_box {
		width: 120rpx;
		height: 42rpx;
		display: flex;
		margin-left: 20rpx;
	}
	
	.date_box2 {
		width: 120rpx;
		height: 42rpx;
		display: flex;
		margin-left: 10rpx;
	}
	
	.date_day {
		height: 34rpx;
		line-height: 34rpx;
		font-size: 32rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.date_slash {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 40rpx;
		color: #343434;
	}
	
	.date_month {
		height: 42rpx;
		line-height: 70rpx;
		font-size: 20rpx;
		color: #787878;
		font-weight: bold;
	}
	
	.recovery_box {
		width: 540rpx;
		min-height: 200rpx;
		border-bottom: 1rpx solid #E0E0E0;
		margin-left: 40rpx;
	}
	
	.recovery_title {
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.recovery_detail {
		font-size: 20rpx;
		color: #444444;
		line-height: 35rpx;
		margin-top: 18rpx;
		margin-bottom: 18rpx;
	}
	
	.recovery_imagebox {
		width: 538rpx;
		min-height: 166rpx;
		margin-bottom: 20rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.recovery_videobox {
		width: 538rpx;
		min-height: 166rpx;
		margin-bottom: 20rpx;
		position: relative;
	}
	
	.recovery_video {
		width: 540rpx;
		height: 290rpx;
	}
	
	.recovery_image {
		width: 166rpx;
		height: 166rpx;
		margin-bottom: 20rpx;
	}
	
	.recovery_image_one {
		width: 540rpx;
		height: 290rpx;
	}
	
	.recovery_operation {
		width: 540rpx;
		height: 42rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.ro_box {
		width: 102rpx;
		height: 42rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.ro_icon {
		width: 30rpx;
		height: 30rpx;
		margin-top: 6rpx;
	}
	
	.ro_number {
		height: 42rpx;
		line-height: 42rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 702rpx;
		margin-left: 24rpx;
		background-color: #F3F2F7;
		overflow: hidden;
		height: 80rpx;
		/* 在这里设置导航条高度 */
	}
	
	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		margin: 0 10rpx;
	}
	
	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 80rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #787878;
		line-height: 80rpx;
		font-weight: bold;
	}
	
	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	
	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}
	
	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		/* margin-left: 12upx;
		margin-right: 12upx; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 80rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #343434;
		line-height: 80rpx;
		font-weight: bold;
	}
	
	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 11rpx;
		height: 11rpx;
		background: #FFC700;
		border-radius: 50%;
	}
	
	.pet_list {
		margin-bottom: 30rpx;
	}
	
	.recovery_adopt {
		width: 560rpx;
		height: 210rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 10rpx;
		display: flex;
	}
	
	.recovery_adopt2 {
		width: 560rpx;
		min-height: 210rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 10rpx;
	}
	
	.ra_image {
		width: 150rpx;
		height: 150rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
	}
	
	.ra_view {
		width: 334rpx;
		height: 150rpx;
		margin-top: 30rpx;
		margin-left: 23rpx;
	}
	
	.ra_text {
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	
	.ra_text2 {
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		line-height: 30rpx;
	}
	
	.ra_text3 {
		width: 500rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
		margin-top: 22rpx;
		margin-bottom: 8rpx;
	}
</style>

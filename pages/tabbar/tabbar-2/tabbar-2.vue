<template>
	<view>
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{menuTab.name}}</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :current="currentTab" :circular="true" @change="tabChange">
			<!-- 萌宠天地 -->
			<swiper-item>
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 0" class="pet_list">
						<view style="width: 750rpx;height: 65rpx;display: flex;justify-content: space-between;background: #F3F2F7;">
							<scroll-view class="left-menu-view" scroll-x="true" :scroll-left="scrollLeft3">
								<block v-for="(menuTab,index3) in leftmenuTabs" :key="index3">
									<view class="menu-one-view" v-bind:id="'tabNum3'+index3" @click="swichMenu3(index3)">
										<view :class="[currentTab3==index3 ? 'menu-one-act' : 'menu-one']">
											<view class="menu-one-txt">{{menuTab.name}}</view>
										</view>
									</view>
								</block>
							</scroll-view>
							<scroll-view class="right-menu-view" scroll-x="true" :scroll-right="scrollLeft4">
								<block v-for="(menuTab,index4) in rightmenuTabs" :key="index4">
									<view class="menu-one-view" v-bind:id="'tabNum4'+index4" @click="swichMenu4(index4)">
										<view :class="[currentTab4==index4 ? 'menu-one-act' : 'menu-one']">
											<view class="menu-one-txt">{{menuTab.name}}</view>
										</view>
									</view>
								</block>
							</scroll-view>
						</view>
						<view class="detail_list">
							<view class="vertical_list">
								<view class="detail_card" @tap="goCommunityDetail">
									<image src="/static/image/1.png" mode="aspectFill" class="detail_image"></image>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view class="detail_synopsis">无竹令人俗，无肉使人瘦，不俗又不瘦，竹笋焖猪肉。</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityVideo">
									<image src="/static/image/2.png" mode="aspectFill" class="detail_image"></image>
									<image class="detail_play" src="/static/img/play.png"></image>
									<view class="detail_playview">
										<image src="/static/img/amount.png"></image>
										<view>1.32万</view>
									</view>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityVideo">
									<image src="/static/image/3.png" mode="aspectFill" class="detail_image"></image>
									<image class="detail_play" src="/static/img/play.png"></image>
									<view class="detail_playview">
										<image src="/static/img/amount.png"></image>
										<view>1.32万</view>
									</view>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityDetail">
									<image src="/static/image/4.png" mode="aspectFill" class="detail_image"></image>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view class="detail_synopsis">无竹令人俗，无肉使人瘦，不俗又不瘦，竹笋焖猪肉。</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
							</view>
							<view class="vertical_list">
								<view class="detail_card" @tap="goCommunityVideo">
									<image src="/static/image/5.png" mode="aspectFill" class="detail_image"></image>
									<image class="detail_play" src="/static/img/play.png"></image>
									<view class="detail_playview">
										<image src="/static/img/amount.png"></image>
										<view>1.32万</view>
									</view>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityDetail">
									<image src="/static/image/6.png" mode="aspectFill" class="detail_image"></image>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view class="detail_synopsis">无竹令人俗，无肉使人瘦，不俗又不瘦，竹笋焖猪肉。</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityDetail">
									<image src="/static/image/7.png" mode="aspectFill" class="detail_image"></image>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view class="detail_synopsis">无竹令人俗，无肉使人瘦，不俗又不瘦，竹笋焖猪肉。</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
								<view class="detail_card" @tap="goCommunityVideo">
									<image src="/static/image/8.png" mode="aspectFill" class="detail_image"></image>
									<image class="detail_play" src="/static/img/play.png"></image>
									<view class="detail_playview">
										<image src="/static/img/amount.png"></image>
										<view>1.32万</view>
									</view>
									<view class="detail_title">大熊猫睡觉的地方</view>
									<view style="width: 302rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
										<view style="width: 100%;height: 1rpx;"></view>
										<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 15rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
											<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
										</view>
										<view style="width: 282rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
											哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
										</view>
									</view>
									<view style="width: 100%;height: 64rpx;display: flex;justify-content: space-between;">
										<view style="display: flex;">
											<image src="/static/img/comment.png" style="width: 28rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">1.32万</view>
										</view>
										<view style="display: flex;margin-right: 20rpx;">
											<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
											<view style="height: 64rpx;line-height: 64rpx;font-size: 20rpx;color: #333333;font-weight: bold;margin-left: 20rpx;">236</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<image src="/static/img/publish.png" class="publish_image" @click="goNewCommunity"></image>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 康复日志 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 1" class="pet_list">
						<view @tap="goRecoveryLogDetail" style="width: 702rpx;height: 270rpx;margin-left: 24rpx;margin-top: 20rpx;display: flex;background: #FFFFFF;border-radius: 20rpx;">
							<image src="/static/image/9.png" mode="aspectFill" style="width: 230rpx;height: 270rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 20rpx;">
								<view style="display: flex;justify-content: space-between;height: 70rpx;margin-left: 30rpx;width: 422rpx;">
									<view style="display: flex;height: 70rpx;">
										<view style="font-size: 30rpx;color: #333333;font-weight: bold;height: 70rpx;line-height: 70rpx;">猫咪</view>
										<view style="font-size: 20rpx;color: #434343;font-weight: bold;height: 70rpx;line-height: 74rpx;margin-left: 20rpx;">主治医生:阿里</view>
									</view>
									<view style="font-size: 22rpx;color: #777777;font-weight: bold;height: 70rpx;line-height: 74rpx;">2019.02.28</view>
								</view>
								<view style="height: 44rpx;line-height: 44rpx;font-size: 24rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">症状：不停挠痒，脱毛</view>
								<view style="width: 422rpx;min-height: 44rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 10rpx;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 422rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
									<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
									<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
									<view style="height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding: 0 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
								</view>
							</view>
						</view>
						<view @tap="goRecoveryLogDetail" style="width: 702rpx;height: 270rpx;margin-left: 24rpx;margin-top: 20rpx;display: flex;background: #FFFFFF;border-radius: 20rpx;">
							<image src="/static/image/10.png" mode="aspectFill" style="width: 230rpx;height: 270rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 20rpx;">
								<view style="display: flex;justify-content: space-between;height: 70rpx;margin-left: 30rpx;width: 422rpx;">
									<view style="display: flex;height: 70rpx;">
										<view style="font-size: 30rpx;color: #333333;font-weight: bold;height: 70rpx;line-height: 70rpx;">猫咪</view>
										<view style="font-size: 20rpx;color: #434343;font-weight: bold;height: 70rpx;line-height: 74rpx;margin-left: 20rpx;">主治医生:阿里</view>
									</view>
									<view style="font-size: 22rpx;color: #777777;font-weight: bold;height: 70rpx;line-height: 74rpx;">2019.02.28</view>
								</view>
								<view style="height: 44rpx;line-height: 44rpx;font-size: 24rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">症状：不停挠痒，脱毛</view>
								<view style="width: 422rpx;min-height: 44rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 10rpx;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 422rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
									<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
									<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
									<view style="height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding: 0 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
								</view>
							</view>
						</view>
						<view @tap="goRecoveryLogDetail" style="width: 702rpx;height: 270rpx;margin-left: 24rpx;margin-top: 20rpx;display: flex;background: #FFFFFF;border-radius: 20rpx;">
							<image src="/static/image/11.png" mode="aspectFill" style="width: 230rpx;height: 270rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 20rpx;">
								<view style="display: flex;justify-content: space-between;height: 70rpx;margin-left: 30rpx;width: 422rpx;">
									<view style="display: flex;height: 70rpx;">
										<view style="font-size: 30rpx;color: #333333;font-weight: bold;height: 70rpx;line-height: 70rpx;">猫咪</view>
										<view style="font-size: 20rpx;color: #434343;font-weight: bold;height: 70rpx;line-height: 74rpx;margin-left: 20rpx;">主治医生:阿里</view>
									</view>
									<view style="font-size: 22rpx;color: #777777;font-weight: bold;height: 70rpx;line-height: 74rpx;">2019.02.28</view>
								</view>
								<view style="height: 44rpx;line-height: 44rpx;font-size: 24rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">症状：不停挠痒，脱毛</view>
								<view style="width: 422rpx;min-height: 44rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 10rpx;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 422rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
									<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
									<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
									<view style="height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding: 0 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
								</view>
							</view>
						</view>
						<view @tap="goRecoveryLogDetail" style="width: 702rpx;height: 270rpx;margin-left: 24rpx;margin-top: 20rpx;display: flex;background: #FFFFFF;border-radius: 20rpx;">
							<image src="/static/image/12.png" mode="aspectFill" style="width: 230rpx;height: 270rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 20rpx;">
								<view style="display: flex;justify-content: space-between;height: 70rpx;margin-left: 30rpx;width: 422rpx;">
									<view style="display: flex;height: 70rpx;">
										<view style="font-size: 30rpx;color: #333333;font-weight: bold;height: 70rpx;line-height: 70rpx;">猫咪</view>
										<view style="font-size: 20rpx;color: #434343;font-weight: bold;height: 70rpx;line-height: 74rpx;margin-left: 20rpx;">主治医生:阿里</view>
									</view>
									<view style="font-size: 22rpx;color: #777777;font-weight: bold;height: 70rpx;line-height: 74rpx;">2019.02.28</view>
								</view>
								<view style="height: 44rpx;line-height: 44rpx;font-size: 24rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">症状：不停挠痒，脱毛</view>
								<view style="width: 422rpx;min-height: 44rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 10rpx;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 422rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
									<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
									<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
									<view style="height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding: 0 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
								</view>
							</view>
						</view>
						<view @tap="goRecoveryLogDetail" style="width: 702rpx;height: 270rpx;margin-left: 24rpx;margin-top: 20rpx;display: flex;background: #FFFFFF;border-radius: 20rpx;">
							<image src="/static/image/13.png" mode="aspectFill" style="width: 230rpx;height: 270rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 20rpx;">
								<view style="display: flex;justify-content: space-between;height: 70rpx;margin-left: 30rpx;width: 422rpx;">
									<view style="display: flex;height: 70rpx;">
										<view style="font-size: 30rpx;color: #333333;font-weight: bold;height: 70rpx;line-height: 70rpx;">猫咪</view>
										<view style="font-size: 20rpx;color: #434343;font-weight: bold;height: 70rpx;line-height: 74rpx;margin-left: 20rpx;">主治医生:阿里</view>
									</view>
									<view style="font-size: 22rpx;color: #777777;font-weight: bold;height: 70rpx;line-height: 74rpx;">2019.02.28</view>
								</view>
								<view style="height: 44rpx;line-height: 44rpx;font-size: 24rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">症状：不停挠痒，脱毛</view>
								<view style="width: 422rpx;min-height: 44rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-top: 10rpx;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 422rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
									<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
									<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
									<view style="height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding: 0 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
								</view>
							</view>
						</view>
					</view>
					<image src="/static/img/publish.png" class="publish_image" @click="goNewLog"></image>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 直播 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 180rpx);">
					<view v-if="currentTab == 2" class="live_list">
						<view class="live_card">
							<image src="/static/image/14.png" mode="aspectFill" class="live_cover"></image>
							<view class="live_view">
								<view class="live_titlelist">
									<view class="live_title">晚上没电怎么办</view>
									<view class="watch_box">
										<image src="/static/img/watch.png" class="watch_image"></image>
										<view class="watch_number">3.2万</view>
									</view>
								</view>
							</view>
							<view class="anchor_box">
								<image src="/static/img/user.png" class="anchor_image"></image>
								<view class="anchor">肥花花啊</view>
							</view>
						</view>
						<view class="live_card">
							<image src="/static/image/15.png" mode="aspectFill" class="live_cover"></image>
							<view class="live_view">
								<view class="live_titlelist">
									<view class="live_title">晚上没电怎么办</view>
									<view class="watch_box">
										<image src="/static/img/watch.png" class="watch_image"></image>
										<view class="watch_number">3.2万</view>
									</view>
								</view>
							</view>
							<view class="anchor_box">
								<image src="/static/img/user.png" class="anchor_image"></image>
								<view class="anchor">肥花花啊</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 科普 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 3" class="scientific_list">
						<scroll-view class="scientific-menu-view" scroll-x="true" :scroll-left="scrollLeft2">
							<block v-for="(menuTab2,index2) in menuTabs2" :key="index2">
								<view class="menu-one-view" v-bind:id="'tabNum'+index2" @click="swichMenu2(index2)">
									<view :class="[currentTab2==index2 ? 'menu-one-act' : 'menu-one']">
										<view class="menu-one-txt">{{menuTab2.name}}</view>
										<view class="menu-one-bottom">
											<view class="menu-one-bottom-color"></view>
										</view>
									</view>
								</view>
							</block>
						</scroll-view>
						<view v-if="currentTab2 == 0" class="scientific_article_list">
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/1.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/2.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/3.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/4.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/5.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
							<view style="width: 702rpx;height: 236rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
								<image src="/static/image/6.png" mode="aspectFill" style="width: 236rpx;height: 236rpx;border-radius: 20rpx 0 0 20rpx;"></image>
								<view style="margin-top: 10rpx;">
									<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
									<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
									<view style="width: 406rpx;height: 76rpx;display: flex;margin-left: 30rpx;">
										<image src="/static/img/user.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">肥花花啊</view>
									</view>
								</view>
							</view>
						</view>
						<view v-if="currentTab2 == 1" class="scientific_video_list">
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/7.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/8.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/9.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/10.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/11.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
							<view @tap="goScienceVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 20rpx;margin-top: 20rpx;">
								<image src="/static/image/12.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;border-radius: 20rpx;"></image>
								<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
									<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
								</view>
								<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
								<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
									<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
									<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 领养 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 4" class="adopt_list">
						<view class="city_list">
							<image src="/static/img/location.png" class="city_image"></image>
							<view class="city_view">济南</view>
							<scroll-view class="top5-menu-view" scroll-x="true" :scroll-left="scrollLeft5">
								<block v-for="(menuTab,index5) in menuTabs5" :key="index5">
									<view class="menu-one-view" v-bind:id="'tabNum5'+index5" @click="swichMenu5(index5)">
										<view :class="[currentTab5==index5 ? 'menu-one-act' : 'menu-one']">
											<view class="menu-one-txt">{{menuTab.name}}</view>
										</view>
									</view>
								</block>
							</scroll-view>
						</view>
						<view v-if="currentTab5 == 0">
							<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 25rpx;width: 700rpx;margin-bottom: 50rpx;">
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/7.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/8.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/9.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/10.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/11.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(0)">
									<image src="/static/image/12.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
							</view>
							<image src="/static/img/publish.png" class="publish_image" @click="goNewAdopt(0)"></image>
						</view>
						<view v-if="currentTab5 == 1">
							<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 25rpx;width: 700rpx;margin-bottom: 50rpx;">
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/13.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/14.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/15.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/16.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/17.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
								<view style="width: 340rpx;min-height: 465rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goAdoptDetail(1)">
									<image src="/static/image/18.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
									<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
								</view>
							</view>
							<image src="/static/img/publish.png" class="publish_image" @click="goNewAdopt(1)"></image>
						</view>
					</view>
					<view v-if="ifMask == 1" class="showMask">
						<view class="mask_box">
							<view class="mask_title">留言</view>
							<textarea class="mask_textarea" placeholder="请说明联系对方的原因，并留下姓名和联系方式，对方会主动联系您。"></textarea>
							<button @tap="maskShowOrHide" class="mask_button">提交</button>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 寻宠 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 5" class="lost_list">
						<view class="city_list">
							<image src="/static/img/location.png" class="city_image"></image>
							<view class="city_view">济南</view>
							<scroll-view class="top5-menu-view" scroll-x="true" :scroll-left="scrollLeft6">
								<block v-for="(menuTab,index6) in menuTabs6" :key="index6">
									<view class="menu-one-view" v-bind:id="'tabNum6'+index6" @click="swichMenu6(index6)">
										<view :class="[currentTab6==index6 ? 'menu-one-act' : 'menu-one']">
											<view class="menu-one-txt">{{menuTab.name}}</view>
										</view>
									</view>
								</block>
							</scroll-view>
						</view>
						<view v-if="currentTab6 == 0">
							<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 25rpx;width: 700rpx;margin-bottom: 50rpx;">
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/1.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/2.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/3.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/4.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/5.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(0)">
									<image src="/static/image/6.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
							</view>
							<image src="/static/img/publish.png" class="publish_image" @click="goNewLost"></image>
						</view>
						<view v-if="currentTab6 == 1">
							<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 25rpx;width: 700rpx;margin-bottom: 50rpx;">
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/6.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/5.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/4.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/3.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/2.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
								<view style="width: 340rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-top: 20rpx;" @click="goLostDetail(1)">
									<image src="/static/image/1.png" mode="aspectFill" style="width: 340rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
									<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
								</view>
							</view>
							<image src="/static/img/publish.png" class="publish_image" @click="goNewLost"></image>
						</view>
					</view>
					<view v-if="ifMask2 == 1" class="showMask">
						<view class="mask_box">
							<view class="mask_title">留言</view>
							<textarea class="mask_textarea" placeholder="请说明联系对方的原因，并留下姓名和联系方式，对方会主动联系您。"></textarea>
							<button @tap="mask2ShowOrHide" class="mask_button">提交</button>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 志愿者招聘 -->
				<scroll-view scroll-y="true" style="width: 100%;height: calc(100vh - 80rpx);">
					<view v-if="currentTab == 6" class="lost_list">
						<view class="city_list">
							<image src="/static/img/location.png" class="city_image"></image>
							<view class="city_view">济南</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/7.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/8.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/9.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/10.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/11.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
						<view @tap="goRecruitmentDetail" style="width: 702rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 24rpx;margin-top: 24rpx;display: flex;">
							<image src="/static/image/12.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
							<view style="margin-top: 10rpx;">
								<view style="width: 406rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
								<view style="width: 406rpx;height: 76rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
								<view style="width: 406rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
									<view style="display: flex;">
										<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
										<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
									</view>
									<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [{
						name: '萌宠天地',
						newstype_id: '1'
					},
					{
						name: '康复日志',
						newstype_id: '2'
					},
					{
						name: '直播',
						newstype_id: '3'
					},
					{
						name: '科普',
						newstype_id: '4'
					},
					{
						name: '领养',
						newstype_id: '5'
					},
					{
						name: '寻宠',
						newstype_id: '6'
					},
					{
						name: '志愿者招聘',
						newstype_id: '7'
					}
				],
				scrollLeft2: 0,
				currentTab2: 0,
				menuTabs2: [{
						name: '文章',
						newstype_id: '1'
					},
					{
						name: '视频',
						newstype_id: '2'
					}
				],
				scrollLeft3: 0,
				currentTab3: 0,
				leftmenuTabs: [{
						name: '综合',
						newstype_id: '1'
					},
					{
						name: '最热',
						newstype_id: '2'
					},
					{
						name: '最新',
						newstype_id: '3'
					}
				],
				scrollLeft4: 22,
				currentTab4: -1,
				rightmenuTabs: [{
						name: '视频',
						newstype_id: '1'
					},
					{
						name: '文章',
						newstype_id: '2'
					}
				],
				scrollLeft5: 0,
				currentTab5: 0,
				menuTabs5: [{
						name: '求宠信息',
						newstype_id: '1'
					},
					{
						name: '宠物找新家',
						newstype_id: '2'
					}
				],
				scrollLeft6: 0,
				currentTab6: 0,
				menuTabs6: [{
						name: '寻宠信息',
						newstype_id: '1'
					},
					{
						name: '宠物招领',
						newstype_id: '2'
					}
				],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				ifMask: 0,
				ifMask2: 0
			}
		},
		onLoad() {
			
		},
		methods: {
			maskShowOrHide () {
				if (this.ifMask == 0) {
					this.ifMask = 1;
				} else if (this.ifMask == 1) {
					this.ifMask = 0;
				}
			},
			mask2ShowOrHide () {
				if (this.ifMask2 == 0) {
					this.ifMask2 = 1;
				} else if (this.ifMask2 == 1) {
					this.ifMask2 = 0;
				}
			},
			tabChange(e) {
				this.currentTab = e.detail.current;
			},
			goScienceVideo() {
				uni.navigateTo({
					url: '/pages/scienceVideo/scienceVideo'
				})
			},
			goRecruitmentDetail() {
				uni.navigateTo({
					url: '/pages/recruitmentDetail/recruitmentDetail'
				})
			},
			goCommunityDetail() {
				uni.navigateTo({
					url: '/pages/communityDetail/communityDetail'
				})
			},
			goCommunityVideo() {
				uni.navigateTo({
					url: '/pages/communityVideo/communityVideo'
				})
			},
			goRecoveryLogDetail() {
				uni.navigateTo({
					url: '/pages/recoveryLogDetail/recoveryLogDetail'
				})
			},
			goNewCommunity() {
				uni.navigateTo({
					url: '/pages/releaseNew/newCommunity'
				})
			},
			goNewAdopt(num) {
				uni.navigateTo({
					url: '/pages/releaseNew/newAdopt?type=' + num
				})
			},
			goNewLost() {
				uni.navigateTo({
					url: '/pages/releaseNew/newLost'
				})
			},
			goNewLog() {
				uni.navigateTo({
					url: '/pages/releaseNew/newLog'
				})
			},
			goAdoptDetail(num) {
				uni.navigateTo({
					url: '/pages/adoptDetail/adoptDetail?type=' + num
				})
			},
			goLostDetail(num) {
				uni.navigateTo({
					url: '/pages/lostDetail/lostDetail?type=' + num
				})
			},
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
			},
			swichMenu2(current) { //点击其中一个 menu
				if (this.currentTab2 == current) {
					return false;
				} else {
					this.currentTab2 = current;
					this.setScrollLeft2(current);
				}
				console.log(current);
			},
			swiperChange2(e) {
				let index = e.target.current;
				this.setScrollLeft2(index);
				this.currentTab2 = index;
			},
			setScrollLeft2(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth2('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth2: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			swichMenu3(current) { //点击其中一个 menu
				if (this.currentTab3 == current) {
					return false;
				} else {
					this.currentTab3 = current;
				}
			},
			swiperChange3(e) {
				let index = e.target.current;
				this.setScrollLeft3(index);
				this.currentTab3 = index;
			},
			setScrollLeft3(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth3('tabNum3' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft3 = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth3: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			swichMenu4(current) { //点击其中一个 menu
				if (this.currentTab4 == current) {
					this.currentTab4 = -1;
					return false;
				} else {
					this.currentTab4 = current;
				}
			},
			swiperChange4(e) {
				let index = e.target.current;
				this.setScrollLeft4(index);
				this.currentTab4 = index;
			},
			setScrollLeft4(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth('tabNum4' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft4 = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth4: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			swichMenu5(current) { //点击其中一个 menu
				if (this.currentTab5 == current) {
					return false;
				} else {
					this.currentTab5 = current;
				}
			},
			swiperChange5(e) {
				let index = e.target.current;
				this.setScrollLeft5(index);
				this.currentTab5 = index;
			},
			setScrollLeft5(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth('tabNum5' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft5 = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth5: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			swichMenu6(current) { //点击其中一个 menu
				if (this.currentTab6 == current) {
					return false;
				} else {
					this.currentTab6 = current;
				}
			},
			swiperChange6(e) {
				let index = e.target.current;
				this.setScrollLeft6(index);
				this.currentTab6 = index;
			},
			setScrollLeft6(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = this.getWidth('tabNum6' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft6 = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth6: function(id) { //得到元素的宽高
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
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #F3F2F7;
		overflow: hidden;
		height: 78rpx;
		border-bottom: 2upx solid #ECECEC;
		/* line-height: 78rpx; */
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
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
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #333333;
		line-height: 50rpx;
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
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFC700;
		border-radius: 25rpx;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 50rpx;
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
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}

	.adopt_list {
		margin-top: 80rpx;
		display: flex;
		/*子元素溢出父容器时换行*/
		flex-flow: row wrap;
	}

	.scientific_list {
		margin-top: 80rpx;
	}

	.scientific-menu-view {
		display: flex;
		white-space: nowrap;
		width: 50%;
		background-color: #F3F2F7;
		overflow: hidden;
		height: 90rpx;
		line-height: 90rpx;
		scientific: 0;
		z-index: 1000;
		margin-left: 25%;
		/* 在这里设置导航条高度 */
	}

	.scientific-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;
	}

	.scientific-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.scientific-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 90rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #777777;
		line-height: 90rpx;
		font-weight: bold;
	}

	.scientific-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.scientific-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.scientific-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.scientific-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 90rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFC700;
		line-height: 90rpx;
		font-weight: bold;
	}

	.scientific-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 10rpx;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.scientific-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: #FFC700;
	}
	
	.scientific_video_list {
		width: 750rpx;
		min-height: 1rpx;
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 30rpx;
	}
	
	.scientific_article_list {
		width: 750rpx;
		min-height: 1rpx;
		margin-bottom: 30rpx;
	}
	
	.article_box {
		width: 650rpx;
		height: 300rpx;
		position: relative;
	}
	
	.article_cover {
		width: 650rpx;
		height: 300rpx;
		background: #1478EA;
	}
	
	.article_title_box {
		width: 650rpx;
		height: 100rpx;
		background: rgba(0,0,0,0.3);
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.article_title {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 20rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.article_synopsis {
		width: 100%;
		height: 40rpx;
		line-height: 30rpx;
		padding-left: 20rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.live_list {
		margin-top: 130rpx;
		display: flex;
		flex-flow: row wrap;
	}
	
	.live_card {
		width: 702rpx;
		margin-left: 24rpx;
		margin-top: 12rpx;
	}
	
	.live_cover {
		width: 702rpx;
		height: 340rpx;
		border-radius: 20rpx;
	}
	
	.live_view {
		width: 702rpx;
	}
	
	.live_titlelist {
		width: 702rpx;
		height: 48rpx;
		margin-top: 10rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.live_title {
		font-size: 28rpx;
		height: 48rpx;
		line-height: 48rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 20rpx;
	}
	
	.watch_box {
		display: flex;
		height: 48rpx;
	}
	
	.watch_image {
		width: 24rpx;
		height: 26rpx;
		margin-top: 11rpx;
	}
	
	.watch_number {
		font-size: 28rpx;
		height: 48rpx;
		line-height: 48rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	
	.anchor_box {
		height: 40rpx;
		display: flex;
		margin-left: 20rpx;
	}
	
	.anchor_image {
		width: 18rpx;
		height: 20rpx;
		margin-top: 11rpx;
	}
	
	.anchor {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 22rpx;
		color: #777777;
		font-weight: bold;
		margin-left: 10rpx;
	}
	
	.pet_list {
		margin-top: 90rpx;
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 30rpx;
	}
	
	.detail_list {
		width: 704rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 23rpx;
		margin-top: 20rpx;
	}
	
	.vertical_list {
		width: 342rpx;
	}
	
	.detail_card {
		width: 342rpx;
		margin-bottom: 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: relative;
	}
	
	.detail_image {
		width: 342rpx;
		height: 258rpx;
		border-radius: 20rpx 20rpx 0 0;
		background: #DD524D;
	}
	
	.detail_play {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}
	
	.detail_playview {
		width: 100%;
		height: 68rpx;
		position: absolute;
		top: 190rpx;
		left: 0;
		display: flex;
	}
	
	.detail_playview image {
		width: 22rpx;
		height: 28rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	
	.detail_playview view {
		height: 68rpx;
		line-height: 68rpx;
		font-size: 22rpx;
		color: #FFFFFF;
		font-weight: bold;
		margin-left: 20rpx;
	}
	
	.detail_title {
		width: 302rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		height: 64rpx;
		line-height: 64rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.detail_synopsis {
		width: 302rpx;
		margin-left: 20rpx;
		min-height: 48rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #434343;
		font-weight: bold;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.city_list {
		width: 750rpx;
		height: 54rpx;
		display: flex;
	}
	
	.city_image {
		width: 28rpx;
		height: 34rpx;
		margin-left: 54rpx;
		margin-top: 20rpx;
	}

	.city_view {
		height: 74rpx;
		line-height: 74rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #777777;
	}

	.lost_city_change {
		height: 50rpx;
		line-height: 50rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
	}

	.lost_list {
		margin-top: 80rpx;
		display: flex;
		/*子元素溢出父容器时换行*/
		flex-flow: row wrap;
		margin-bottom: 30rpx;
	}
	
	swiper {
		height: calc(100vh - 80rpx);
	}
	
	uni-swiper-item {
		height: calc(100vh - 80rpx) !important;
	}
	
	.left-menu-view {
		display: flex;
		white-space: nowrap;
		background-color: #F3F2F7;
		overflow: hidden;
		width: 447rpx;
		height: 64rpx;
		line-height: 64rpx;
		margin-top: 10rpx;
		margin-left: 25rpx;
		z-index: 1000;
		/* 在这里设置导航条高度 */
	}

	.left-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		margin: 0 10rpx;
	}

	.left-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #777777;
		line-height: 50rpx;
		font-weight: bold;
	}

	.left-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.left-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.left-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		/* margin-left: 12upx;
		margin-right: 12upx; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #333333;
		line-height: 50rpx;
		font-weight: bold;
	}

	.left-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.left-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}
	
	.right-menu-view {
		display: flex;
		white-space: nowrap;
		background-color: #F3F2F7;
		overflow: hidden;
		width: 218rpx;
		height: 64rpx;
		line-height: 64rpx;
		margin-top: 10rpx;
		margin-right: 25rpx;
		z-index: 1000;
		/* 在这里设置导航条高度 */
	}

	.right-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		margin: 0 10rpx;
	}

	.right-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #777777;
		line-height: 50rpx;
		font-weight: bold;
	}

	.right-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.right-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.right-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		/* margin-left: 12upx;
		margin-right: 12upx; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #333333;
		line-height: 50rpx;
		font-weight: bold;
	}

	.right-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.right-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}
	
	button:after {
		border: none;
	}
	
	.top5-menu-view {
		display: flex;
		white-space: nowrap;
		width: 50%;
		background-color: #F3F2F7;
		overflow: hidden;
		height: 70rpx;
		border-bottom: 2upx solid #ECECEC;
		z-index: 1000;
		margin-left: 20rpx;
		/* 在这里设置导航条高度 */
	}

	.top5-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		margin: 0 10rpx;
	}

	.top5-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top5-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 70rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #333333;
		line-height: 70rpx;
		font-weight: bold;
	}

	.top5-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.top5-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.top5-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		/* margin-left: 12upx;
		margin-right: 12upx; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: relative;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top5-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 70rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFC800;
		line-height: 70rpx;
		font-weight: bold;
	}

	.top5-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.top5-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}
	
	.publish_image {
		width: 162rpx;
		height: 162rpx;
		position: fixed;
		bottom: 0;
		right: 22rpx;
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
		height: 340rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 445rpx;
		left: 125rpx;
	}
	
	.mask_title {
		width: 500rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		padding-left: 30rpx;
	}
	
	.mask_textarea {
		width: 440rpx;
		height: 100rpx;
		line-height: 36rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		background: #F3F2F7;
		border-radius: 20rpx;
		padding: 10rpx;
	}
	
	.mask_button {
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		margin-left: 360rpx;
		margin-top: 40rpx;
		background: #FDD031;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>

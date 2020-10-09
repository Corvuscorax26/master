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
		<!-- 科普 -->
		<view v-if="currentTab == 1" class="scientific_list">
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
		</view>
		<!-- 康复日志 -->
		<view v-if="currentTab == 2" class="pet_list">
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
						name: '科普',
						newstype_id: '2'
					},
					{
						name: '康复日志',
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
	
	.scientific_list {
		margin-bottom: 30rpx;
	}
	
	.pet_list {
		margin-bottom: 30rpx;
	}
</style>

<template>
	<view>
		<!-- 视频内容 -->
		<view class="video_box">
			<video class="video" autoplay="true" poster="/static/image/7.png"></video>
			<image @tap="pageBack" src="/static/img/back.png" class="back_icon"></image>
		</view>
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
		<!-- 视频详情 -->
		<view v-if="currentTab2 == 0">
			<view class="video_synopsis">
				<view class="video_userbox">
					<view class="userview">
						<image src="/static/image/1.png" mode="aspectFill" class="user_image"></image>
						<view class="user_name">阿里医生</view>
					</view>
				</view>
				<view class="video_title">大熊猫对睡觉的地方并没有要求</view>
				<view class="video_function">
					<view class="function_box">
						<image src="/static/img/collect.png" class="function_icon"></image>
						<view class="function_number">3525</view>
					</view>
					<view class="function_box">
						<image src="/static/img/praise.png" class="function_icon"></image>
						<view class="function_number">3525</view>
					</view>
					<view class="function_box" @click="handleShowShare2">
						<image src="/static/img/transpond.png" class="function_icon"></image>
						<view class="function_number">3525</view>
					</view>
				</view>
			</view>
			<!-- 推荐 -->
			<view class="recommend_box">
				<view class="recommend_title">推荐</view>
				<view @tap="goCommunityVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 24rpx;margin-bottom: 20rpx;">
					<image src="/static/image/4.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;background: #F6DCA8;border-radius: 20rpx;"></image>
					<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
						<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
					</view>
					<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
					<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
						<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
						<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
					</view>
				</view>
				<view @tap="goCommunityVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 24rpx;margin-bottom: 20rpx;">
					<image src="/static/image/4.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;background: #23C6AE;border-radius: 20rpx;"></image>
					<view style="width: 702rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
						<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
					</view>
					<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 130rpx;left: 311rpx;"></image>
					<view style="width: 702rpx;height: 80rpx;position: absolute;bottom: 0;left: 0;display: flex;">
						<image src="/static/img/user_white.png" style="width: 18rpx;height: 20rpx;margin-top: 30rpx;margin-left: 30rpx;"></image>
						<view style="height: 80rpx;line-height: 80rpx;margin-left: 10rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">肥花花啊</view>
					</view>
				</view>
				<view @tap="goCommunityVideo" style="width: 702rpx;height: 290rpx;position: relative;margin-left: 24rpx;margin-bottom: 20rpx;">
					<image src="/static/image/4.png" mode="aspectFill" style="width: 702rpx;height: 290rpx;background: #DD524D;border-radius: 20rpx;"></image>
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
		<!-- 评论 -->
		<view v-if="currentTab2 == 1" :style="{display: display}">
			<view class="comment_box">
				<view class="hot_comments">热门评论</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
					<view class="interaction_box">
						<image src="/static/img/like.png" class="like_image"></image>
						<view class="like_number">235</view>
						<image src="/static/img/unlike.png" class="unlike_image"></image>
					</view>
					<view class="reply_box">
						<view class="reply_view">
							<view class="reply_user">轻轻666：大熊猫对睡觉的地方没有要求</view>
						</view>
						<view class="reply_view">
							<view class="reply_user">宗原山 <text style="color: #343434;padding: 0 10rpx;">回复</text> 轻轻666：<text style="color: #434343;">大熊猫对睡觉的地方没有要求</text></view>
						</view>
						<view class="reply_view">
							<view class="reply_user">轻轻666：大熊猫对睡觉的地方没有要求</view>
						</view>
						<view class="more_reply" @click="handleShowShare">共963条评论 ></view>
					</view>
				</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡，大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
					<view class="interaction_box">
						<image src="/static/img/like.png" class="like_image"></image>
						<view class="like_number">235</view>
						<image src="/static/img/unlike.png" class="unlike_image"></image>
					</view>
					<view class="reply_box">
						<view class="reply_view">
							<view class="reply_user">轻轻666：大熊猫对睡觉的地方没有要求</view>
						</view>
						<view class="reply_view">
							<view class="reply_user">宗原山 <text style="color: #343434;padding: 0 10rpx;">回复</text> 轻轻666：<text style="color: #434343;">大熊猫对睡觉的地方没有要求</text></view>
						</view>
						<view class="reply_view">
							<view class="reply_user">轻轻666：大熊猫对睡觉的地方没有要求</view>
						</view>
						<view class="more_reply">共963条评论 ></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 评论弹窗 -->
		<view class="share">
			<view :class="{'share-box': shareState}" @click="handleHiddenShare">
			</view>
			<view class="share-item" :class="{'share-show': shareState}">
				<view class="share_title">
					<image src="/static/img/back_black.png" class="share_back" @click="handleHiddenShare"></image>
				</view>
				<scroll-view scroll-y="true" style="height: calc(100vh - 88rpx);">
					<view class="comment_box">
						<view class="comment_view">
							<view class="comment_userbox">
								<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
								<view class="cu_detail">
									<view class="cu_name">哈密瓜的皮</view>
									<view class="cu_date">6-15</view>
								</view>
							</view>
							<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							<view class="interaction_box">
								<image src="/static/img/like.png" class="like_image"></image>
								<view class="like_number">235</view>
								<image src="/static/img/unlike.png" class="unlike_image"></image>
							</view>
						</view>
						<view class="reply_box2">
							<view class="comment_view2">
								<view class="comment_userbox">
									<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
									<view class="cu_detail">
										<view class="cu_name">哈密瓜的皮</view>
										<view class="cu_date">6-15</view>
									</view>
									<view class="interaction_box2">
										<image src="/static/img/like.png" class="like_image"></image>
										<view class="like_number">235</view>
										<image src="/static/img/unlike.png" class="unlike_image"></image>
									</view>
								</view>
								<view class="comment_detail2">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							</view>
							<view class="comment_view2">
								<view class="comment_userbox">
									<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
									<view class="cu_detail">
										<view class="cu_name">哈密瓜的皮</view>
										<view class="cu_date">6-15</view>
									</view>
									<view class="interaction_box2">
										<image src="/static/img/like.png" class="like_image"></image>
										<view class="like_number">235</view>
										<image src="/static/img/unlike.png" class="unlike_image"></image>
									</view>
								</view>
								<view class="comment_detail2">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							</view>
							<view class="comment_view2">
								<view class="comment_userbox">
									<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
									<view class="cu_detail">
										<view class="cu_name">哈密瓜的皮</view>
										<view class="cu_date">6-15</view>
									</view>
									<view class="interaction_box2">
										<image src="/static/img/like.png" class="like_image"></image>
										<view class="like_number">235</view>
										<image src="/static/img/unlike.png" class="unlike_image"></image>
									</view>
								</view>
								<view class="comment_detail2">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							</view>
							<view class="comment_view2">
								<view class="comment_userbox">
									<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
									<view class="cu_detail">
										<view class="cu_name">哈密瓜的皮</view>
										<view class="cu_date">6-15</view>
									</view>
									<view class="interaction_box2">
										<image src="/static/img/like.png" class="like_image"></image>
										<view class="like_number">235</view>
										<image src="/static/img/unlike.png" class="unlike_image"></image>
									</view>
								</view>
								<view class="comment_detail2">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							</view>
							<view class="comment_view2">
								<view class="comment_userbox">
									<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
									<view class="cu_detail">
										<view class="cu_name">哈密瓜的皮</view>
										<view class="cu_date">6-15</view>
									</view>
									<view class="interaction_box2">
										<image src="/static/img/like.png" class="like_image"></image>
										<view class="like_number">235</view>
										<image src="/static/img/unlike.png" class="unlike_image"></image>
									</view>
								</view>
								<view class="comment_detail2">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 转发弹窗 -->
		<view class="share">
			<view :class="{'share-box': shareState2}" @click="handleHiddenShare2">
			</view>
			<view class="share-item2" :class="{'share-show': shareState2}">
				<view class="sharebox">
					<view class="transmit_box">
						<image src="/static/img/QQ.png" class="transmit_image"></image>
						<view class="transmit_name">QQ</view>
					</view>
					<view class="transmit_box">
						<image src="/static/img/wechat.png" class="transmit_image"></image>
						<view class="transmit_name">微信</view>
					</view>
					<view class="transmit_box">
						<image src="/static/img/moments.png" class="transmit_image"></image>
						<view class="transmit_name">朋友圈</view>
					</view>
					<view class="transmit_box">
						<image src="/static/img/microblog.png" class="transmit_image"></image>
						<view class="transmit_name">微博</view>
					</view>
				</view>
				<view class="share_cancel" @click="handleHiddenShare2">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft2: 0,
				currentTab2: 0,
				menuTabs2: [{
						name: '简介',
						newstype_id: '1'
					},
					{
						name: '评论',
						newstype_id: '2'
					}
				],
				shareState: false,
				shareState2: false,
				display: 'inline'
			}
		},
		onLoad() {

		},
		methods: {
			goCommunityVideo() {
				uni.navigateTo({
					url: '/pages/communityVideo/communityVideo'
				})
			},
			pageBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 显示分享
			handleShowShare() {
				this.shareState = true;
				this.display = 'none';
			},
			// 隐藏分享
			handleHiddenShare() {
				this.shareState = false;
				this.display = 'inline';
			},
			// 显示分享
			handleShowShare2() {
				this.shareState2 = true;
			},
			// 隐藏分享
			handleHiddenShare2() {
				this.shareState2 = false;
			},
			swichMenu2: async function(current) { //点击其中一个 menu
				if (this.currentTab2 == current) {
					return false;
				} else {
					this.currentTab2 = current;
					this.setScrollLeft2(current);
				}
				console.log(current);
			},
			swiperChange2: async function(e) {
				let index = e.target.current;
				this.setScrollLeft2(index);
				this.currentTab2 = index;
			},
			setScrollLeft2: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth2('tabNum' + i);
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
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.back_icon {
		width: 26rpx;
		height: 44rpx;
		position: absolute;
		top: 22rpx;
		left: 34rpx;
		z-index: 9999;
	}

	.video_box {
		width: 750rpx;
		height: 455rpx;
		position: relative;
	}

	.video {
		width: 750rpx;
		height: 455rpx;
		position: absolute;
		top: 0;
		left: 0;
	}

	.video_synopsis {
		width: 702rpx;
		height: 310rpx;
		margin-left: 24rpx;
		margin-top: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}

	.video_userbox {
		width: 702rpx;
		height: 70rpx;
		padding-top: 45rpx;
		display: flex;
		justify-content: space-between;
	}

	.userview {
		display: flex;
		margin-left: 20rpx;
	}

	.user_image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.user_name {
		height: 70rpx;
		line-height: 70rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
	}

	.video_title {
		width: 642rpx;
		height: 110rpx;
		line-height: 110rpx;
		margin-left: 30rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.video_function {
		width: 702rpx;
		height: 84rpx;
		display: flex;
	}

	.function_box {
		width: 234rpx;
		height: 84rpx;
		display: flex;
	}

	.function_icon {
		width: 30rpx;
		height: 30rpx;
		margin-left: 60rpx;
		margin-top: 27rpx;
	}

	.function_number {
		height: 84rpx;
		line-height: 84rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 14rpx;
	}

	.recommend_box {
		
	}

	.recommend_title {
		height: 94rpx;
		line-height: 94rpx;
		font-size: 36rpx;
		margin-left: 44rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.scientific-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		height: 95rpx;
		line-height: 95rpx;
		scientific: 0;
		z-index: 1000;
		/* 在这里设置导航条高度 */
	}
	
	.scientific-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 55rpx;
		margin-left: 40rpx;
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
		height: 70rpx;
		font-size: 26rpx;
		color: #343434;
		line-height: 70rpx;
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
		height: 70rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #FFC700;
		line-height: 70rpx;
		font-weight: bold;
	}
	
	.scientific-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 10rpx;
		width: 50rpx;
		display: flex;
		justify-content: center;
	}
	
	.scientific-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 100%;
		height: 2rpx;
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
	
	.comment_box {
		width: 702rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		margin-top: 24rpx;
	}
	
	.hot_comments {
		height: 86rpx;
		line-height: 86rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
	}
	
	.comment_view {
		width: 654rpx;
		min-height: 200rpx;
		margin-left: 24rpx;
		border-bottom: 1rpx solid #F3F1F3;
		margin-bottom: 30rpx;
	}
	
	.comment_userbox {
		width: 654rpx;
		height: 60rpx;
		display: flex;
	}
	
	.cu_header {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-left: 6rpx;
	}
	
	.cu_detail {
		height: 60rpx;
		margin-left: 20rpx;
	}
	
	.cu_name {
		height: 30rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.cu_date {
		height: 30rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.comment_detail {
		width: 568rpx;
		min-height: 50rpx;
		line-height: 32rpx;
		margin-left: 86rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.interaction_box {
		width: 568rpx;
		height: 60rpx;
		margin-left: 86rpx;
		display: flex;
	}
	
	.like_image {
		width: 30rpx;
		height: 30rpx;
	}
	
	.like_number {
		height: 30rpx;
		line-height: 30rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #777777;
		font-weight: bold;
	}
	
	.unlike_image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 50rpx;
	}
	
	.reply_box {
		width: 572rpx;
		min-height: 44rpx;
		margin-left: 86rpx;
		margin-bottom: 30rpx;
		padding: 10rpx 0;
		background: #F3F2F7;
		border-radius: 20rpx;
	}
	
	.reply_view {
		width: 532rpx;
		min-height: 32rpx;
		margin-left: 20rpx;
		display: flex;
		margin-bottom: 10rpx;
	}
	
	.reply_user {
		min-height: 32rpx;
		line-height: 32rpx;
		font-size: 22rpx;
		color: #183E62;
		font-weight: bold;
	}
	
	.more_reply {
		width: 532rpx;
		height: 46rpx;
		line-height: 46rpx;
		font-size: 22rpx;
		color: #183E62;
		font-weight: bold;
		margin-left: 20rpx;
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
		height: 100vh;
		background-color: #FFFFFF;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 99999;
	}
	
	.share_title {
		width: 750rpx;
		height: 88rpx;
		display: flex;
	}
	
	.share_back {
		width: 28rpx;
		height: 46rpx;
		margin-left: 44rpx;
		margin-top: 21rpx;
	}
	
	.reply_box2 {
		width: 702rpx;
		min-height: 44rpx;
		margin-bottom: 30rpx;
		padding: 10rpx 0;
		background: #F3F2F7;
		border-radius: 20rpx;
	}
	
	.comment_view2 {
		width: 654rpx;
		min-height: 200rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
	}
	
	.comment_detail2 {
		width: 568rpx;
		min-height: 50rpx;
		line-height: 32rpx;
		margin-left: 86rpx;
		margin-top: 30rpx;
		padding-bottom: 30rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.interaction_box2 {
		width: 188rpx;
		height: 60rpx;
		margin-left: 260rpx;
		display: flex;
	}
	
	// 离开分享动画
	.share-item2 {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 282rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx 20rpx 0 0;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 99999;
	}
	
	.sharebox {
		width: 690rpx;
		height: 202rpx;
		margin-left: 20rpx;
		display: flex;
	}
	
	.transmit_box {
		width: 130rpx;
		height: 164rpx;
		margin-top: 38rpx;
	}
	
	.transmit_image {
		width: 82rpx;
		height: 82rpx;
		margin-left: 24rpx;
	}
	
	.transmit_name {
		width: 130rpx;
		height: 62rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.share_cancel {
		width: 750rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #F3F2F7;
		font-size: 36rpx;
		color: #777777;
		font-weight: bold;
	}
</style>

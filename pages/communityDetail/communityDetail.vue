<template>
	<view>
		<view class="uni-padding-wrap top-swipe">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
					 :circular="true">
						<swiper-item>
							<image src="/static/image/1.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/image/2.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/image/3.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<image @tap="pageBack" src="/static/img/back.png" class="back_icon"></image>
		</view>
		<view class="video_synopsis">
			<view class="video_userbox">
				<view class="userview">
					<image src="/static/image/ystx.png" mode="aspectFill" class="user_image"></image>
					<view class="user_name">阿里医生</view>
				</view>
				<view class="attention">关注</view>
			</view>
			<view class="video_title">大熊猫对睡觉的地方并没有要求</view>
			<view class="video_detail">大熊猫对睡觉的地方并没有要求,大熊猫对睡觉的地方并没有要求,大熊猫对睡觉的地方并没有要求,大熊猫对睡觉的地方并没有要求,大熊猫对睡觉的地方并没有要求</view>
			<view class="video_function">
				<view class="function_box">
					<image src="/static/img/browse.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
				<view class="function_box">
					<image src="/static/img/praise.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
				<view class="function_box">
					<image src="/static/img/transpond.png" class="function_icon"></image>
					<view class="function_number">3525</view>
				</view>
			</view>
		</view>
		<view class="comment_box">
			<view class="hot_comments">热门评论</view>
			<view class="comment_view">
				<view class="comment_userbox">
					<image src="/static/image/usertx.png" mode="aspectFill" class="cu_header"></image>
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
					<image src="/static/image/usertx.png" mode="aspectFill" class="cu_header"></image>
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
					<view class="more_reply" @click="handleShowShare">共963条评论 ></view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				shareState: false
			}
		},
		onLoad() {
	
		},
		methods: {
			pageBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 显示分享
			handleShowShare() {
				this.shareState = true;
			},
			// 隐藏分享
			handleHiddenShare() {
				this.shareState = false;
			},
		}
	}
</script>

<style>
	.top-swipe {
		width: 750rpx;
		height: 800rpx;
		position: relative;
	}
	
	.top-swipe uni-swiper {
		height: 855rpx;
	}
	
	uni-swiper-item uni-image {
		width: 100% !important;
		height: 800rpx;
	}
	
	.swiper {
		width: 100%;
		height: 800rpx;
	}
	
	swiper-item image {
		width: 100%;
		height: 800rpx;
	}
	
	.back_icon {
		width: 26rpx;
		height: 44rpx;
		position: absolute;
		top: 22rpx;
		left: 34rpx;
	}
	
	.video_synopsis {
		width: 750rpx;
		min-height: 310rpx;
		background: #FFFFFF;
	}
	
	.video_userbox {
		width: 750rpx;
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
	
	.attention {
		width: 120rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		margin-top: 15rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
		background: #FFC700;
		font-size: 30rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.video_title {
		width: 690rpx;
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
	
	.video_detail {
		width: 690rpx;
		min-height: 50rpx;
		line-height: 45rpx;
		margin-left: 30rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.video_function {
		width: 750rpx;
		height: 84rpx;
		display: flex;
	}
	
	.function_box {
		width: 250rpx;
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
	
	.hot_comments {
		height: 86rpx;
		line-height: 86rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
	}
	
	.comment_view {
		width: 702rpx;
		min-height: 200rpx;
		margin-left: 24rpx;
		border-bottom: 1rpx solid #F3F1F3;
		margin-bottom: 30rpx;
	}
	
	.comment_userbox {
		width: 702rpx;
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
		width: 616rpx;
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
		width: 616rpx;
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
		margin-left: 24rpx;
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
</style>

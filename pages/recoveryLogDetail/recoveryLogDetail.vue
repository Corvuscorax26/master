<template>
	<view>
		<scroll-view scroll-y="true" class="recovery">
			<view class="rd">
				<view class="recovery_card">
					<view class="date_box">
						<view class="date_day">16</view>
						<view class="date_slash">/</view>
						<view class="date_month">1月</view>
					</view>
					<view class="recovery_box">
						<view class="recovery_title">治疗前</view>
						<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
						<view class="recovery_imagebox">
							<image src="/static/image/1.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/2.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/3.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/4.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/5.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/6.png" mode="aspectFill" class="recovery_image"></image>
						</view>
					</view>
				</view>
				<view class="recovery_card">
					<view class="date_box">
						<view class="date_day">23</view>
						<view class="date_slash">/</view>
						<view class="date_month">1月</view>
					</view>
					<view class="recovery_box">
						<view class="recovery_title">治疗7天</view>
						<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
						<view class="recovery_imagebox">
							<image src="/static/image/7.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/8.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/9.png" mode="aspectFill" class="recovery_image"></image>
						</view>
					</view>
				</view>
				<view class="recovery_card">
					<view class="date_box">
						<view class="date_day">16</view>
						<view class="date_slash">/</view>
						<view class="date_month">2月</view>
					</view>
					<view class="recovery_box" style="border: none;">
						<view class="recovery_title">治疗30天</view>
						<view class="recovery_detail">狗狗流鼻涕、咳嗽应该是每个铲屎官都遇到过的问题了，大家都会想当然的觉得是狗狗着凉了。</view>
						<view class="recovery_imagebox">
							<image src="/static/image/10.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/11.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/12.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/13.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/14.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/15.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/16.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/17.png" mode="aspectFill" class="recovery_image"></image>
							<image src="/static/image/18.png" mode="aspectFill" class="recovery_image"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="comment_view">
				<view class="hot_comments">兽医回复</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
						<view class="interaction_box">
							<image src="/static/img/like.png" class="like_image"></image>
							<view class="like_number">235</view>
							<image src="/static/img/unlike.png" class="unlike_image"></image>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
					<!-- <view class="reply_box">
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
					</view> -->
				</view>
				<view class="hot_comments">评论</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
						<view class="interaction_box">
							<image src="/static/img/like.png" class="like_image"></image>
							<view class="like_number">235</view>
							<image src="/static/img/unlike.png" class="unlike_image"></image>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
				</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
						<view class="interaction_box">
							<image src="/static/img/like.png" class="like_image"></image>
							<view class="like_number">235</view>
							<image src="/static/img/unlike.png" class="unlike_image"></image>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
				</view>
				<view class="comment_view">
					<view class="comment_userbox">
						<image src="/static/image/7.png" mode="aspectFill" class="cu_header"></image>
						<view class="cu_detail">
							<view class="cu_name">哈密瓜的皮</view>
							<view class="cu_date">6-15</view>
						</view>
						<view class="interaction_box">
							<image src="/static/img/like.png" class="like_image"></image>
							<view class="like_number">235</view>
							<image src="/static/img/unlike.png" class="unlike_image"></image>
						</view>
					</view>
					<view class="comment_detail">大熊猫对睡觉的地方没有要求大熊猫对睡觉的地方要求</view>
				</view>
			</view>
		</scroll-view>
		<view class="comment_box">
			<view class="comment_input">
				<input type="text" placeholder="发布一条评论..." class="cinput"/>
			</view>
			<view class="comment_operation">
				<view class="co_box">
					<image src="/static/img/praise.png" class="co_image"></image>
					<view class="co_number">3525</view>
				</view>
				<view class="co_box">
					<image src="/static/img/collect.png" class="co_image"></image>
					<view class="co_number">3525</view>
				</view>
				<view class="co_box">
					<image src="/static/img/comment.png" class="co_image"></image>
					<view class="co_number">3525</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
			
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.recovery {
		width: 750rpx;
		height: calc(100vh - 150rpx - 90rpx);
	}
	
	.rd {
		width: 750rpx;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.comment_box {
		width: 750rpx;
		height: 150rpx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
	}
	
	.comment_input {
		width: 264rpx;
		height: 60rpx;
		margin-top: 45rpx;
		margin-left: 45rpx;
		background: #F3F2F7;
		border-radius: 30rpx;
	}
	
	.cinput {
		width: 204rpx;
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 30rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
	}
	
	.comment_operation {
		width: 390rpx;
		height: 60rpx;
		display: flex;
		margin-left: 35rpx;
		margin-top: 45rpx;
	}
	
	.co_box {
		width: 130rpx;
		height: 60rpx;
		display: flex;
	}
	
	.co_image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 15rpx;
	}
	
	.co_number {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #343434;
		font-weight: bold;
		margin-left: 15rpx;
	}
	
	.recovery_card {
		width: 702rpx;
		min-height: 300rpx;
		margin-left: 4rpx;
		margin-top: 50rpx;
		display: flex;
	}
	
	.date_box {
		width: 120rpx;
		height: 42rpx;
		display: flex;
		margin-left: 20rpx;
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
		min-height: 300rpx;
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
		margin-bottom: 40rpx;
	}
	
	.recovery_imagebox {
		width: 538rpx;
		min-height: 166rpx;
		margin-bottom: 40rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	
	.recovery_image {
		width: 166rpx;
		height: 166rpx;
		margin-bottom: 20rpx;
	}
	
	.hot_comments {
		height: 86rpx;
		line-height: 86rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		margin-left: 30rpx;
		margin-bottom: 20rpx;
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
		width: 280rpx;
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
		padding-bottom: 30rpx;
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		border-bottom: 1rpx solid #E0E0E0;
	}
	
	.interaction_box {
		width: 200rpx;
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
</style>

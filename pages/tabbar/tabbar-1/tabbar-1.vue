<template>
	<view>
		<!-- <view class="home_title">
			<image class="title_img"></image>
			<view class="title_view">万物志宠医</view>
		</view> -->
		<!-- <view class="top_tab">
			<view class="top_tab_style top_tab_style2">
				<image class="top_tab_img"></image>
				<view class="top_tab_view">
					<view class="ttv_title">快速问宠医</view>
					<view class="ttv_subhead">名医快速匹配</view>
				</view>
			</view>
			<view class="top_tab_style">
				<image class="top_tab_img"></image>
				<view class="top_tab_view">
					<view class="ttv_title">专家咨询</view>
					<view class="ttv_subhead">资深宠医在线</view>
				</view>
			</view>
		</view> -->
		<!-- <view class="home_view"> -->
		<view>
			<!-- 轮播图 -->
			<view class="uni-padding-wrap top-swipe">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						 :circular="true">
							<swiper-item>
								<image src="/static/image/4.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="/static/image/13.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
							<swiper-item>
								<image src="/static/image/17.png" class="swiper-img" lazy-load="true" mode="aspectFill"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 快捷导航 -->
			<view class="icon_tab">
				<view @tap="goRapidInterrogation" class="icon_box">
					<image src="/static/img/kswz.png" class="ib_img"></image>
					<view class="ib_view">快速问诊</view>
				</view>
				<view @tap="goTasteTest" class="icon_box" >
					<image src="/static/img/qwcs.png" class="ib_img"></image>
					<view class="ib_view">趣味测验</view>
				</view>
				<view @tap="goCommunityList(2)" class="icon_box">
					<image src="/static/img/kzb.png" class="ib_img"></image>
					<view class="ib_view">看直播</view>
				</view>
				<view @tap="goCommunityList(1)" class="icon_box">
					<image src="/static/img/krz.png" class="ib_img"></image>
					<view class="ib_view">看日志</view>
				</view>
				<view @tap="goSign" class="icon_box">
					<image src="/static/img/qd.png" class="ib_img"></image>
					<view class="ib_view">签到</view>
				</view>
			</view>
			<!-- 专科门诊 -->
			<view class="outpatient_box">
				<view class="cpd_title">专科门诊<text style="font-size: 22rpx;color: #777777;margin-left: 20rpx;">执业兽医，专业门诊</text></view>
				<view class="outpatient">
					<view class="outpatient_classify">
						<image src="/static/image/101.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">犬猫</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/102.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">啮齿类</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/103.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">爬宠</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/104.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">禽类</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/105.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">水族</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/106.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">昆虫</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/107.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">大型异宠</view>
					</view>
					<view class="outpatient_classify">
						<image src="/static/image/108.png" mode="aspectFill" class="oc_image"></image>
						<view class="oc_name">其他</view>
					</view>
				</view>
			</view>
			<!-- 精选兽医 -->
			<view class="pet_doctor_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">精选兽医</view>
					<!-- <view style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view> -->
				</view>
				<!-- <scroll-view scroll-x="true" style="width: 700rpx;height: 120rpx;overflow: hidden;white-space: nowrap;background: white;">
					<view style="display: flex;min-width: 100%;height: 100rpx;">
					</view>
				</scroll-view> -->
				<view class="uni-padding-wrap top-swipe2">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
							 :circular="true">
								<swiper-item>
									<view @tap="goPetDoctorDetail" style="width: 662rpx;height: 188rpx;background: #FFFFFF;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 20rpx;margin-top: 4rpx;">
										<view style="display: flex;">
											<view style="margin-top: 30rpx;margin-left: 40rpx;">
												<image src="/static/image/ystx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
												<image src="/static/img/certified_physician.png" style="width: 101rpx;height: 29rpx;"></image>
											</view>
											<view style="margin-left: 30rpx;">
												<view style="display: flex;flex-flow: row wrap;justify-content: space-between;width: 482rpx;">
													<view style="width: 240rpx;height: 47rpx;line-height: 47rpx;margin-top: 30rpx;font-size: 30rpx;color: #333333;">阿里<text style="margin-left: 19rpx;font-size: 22rpx;">从业：3年</text></view>
													<view style="height: 44rpx;line-height: 44rpx;display: flex;font-size: 22rpx;color: #333333;margin-top: 30rpx;margin-right: 10rpx;">
														评级：<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
													</view>
												</view>
												<view style="width: 240rpx;height: 41rpx;line-height: 41rpx;font-size: 20rpx;color: #333333;">擅长：狗狗，猫咪</view>
												<view style="height: 44rpx;display: flex;">
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;padding: 0 20rpx;">2054次咨询</view>
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;margin-left: 15rpx;padding: 0 20rpx;">2小时内响应</view>
												</view>
											</view>
										</view>
									</view>
								</swiper-item>
								<swiper-item>
									<view @tap="goPetDoctorDetail" style="width: 662rpx;height: 188rpx;background: #FFFFFF;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 20rpx;margin-top: 4rpx;">
										<view style="display: flex;">
											<view style="margin-top: 30rpx;margin-left: 40rpx;">
												<image src="/static/image/ystx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
												<image src="/static/img/certified_physician.png" style="width: 101rpx;height: 29rpx;"></image>
											</view>
											<view style="margin-left: 30rpx;">
												<view style="display: flex;flex-flow: row wrap;justify-content: space-between;width: 482rpx;">
													<view style="width: 240rpx;height: 47rpx;line-height: 47rpx;margin-top: 30rpx;font-size: 30rpx;color: #333333;">阿里<text style="margin-left: 19rpx;font-size: 22rpx;">从业：3年</text></view>
													<view style="height: 44rpx;line-height: 44rpx;display: flex;font-size: 22rpx;color: #333333;margin-top: 30rpx;margin-right: 10rpx;">
														评级：<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
													</view>
												</view>
												<view style="width: 240rpx;height: 41rpx;line-height: 41rpx;font-size: 20rpx;color: #333333;">擅长：狗狗，猫咪</view>
												<view style="height: 44rpx;display: flex;">
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;padding: 0 20rpx;">2054次咨询</view>
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;margin-left: 15rpx;padding: 0 20rpx;">2小时内响应</view>
												</view>
											</view>
										</view>
									</view>
								</swiper-item>
								<swiper-item>
									<view @tap="goPetDoctorDetail" style="width: 662rpx;height: 188rpx;background: #FFFFFF;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 20rpx;margin-top: 4rpx;">
										<view style="display: flex;">
											<view style="margin-top: 30rpx;margin-left: 40rpx;">
												<image src="/static/image/ystx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
												<image src="/static/img/certified_physician.png" style="width: 101rpx;height: 29rpx;"></image>
											</view>
											<view style="margin-left: 30rpx;">
												<view style="display: flex;flex-flow: row wrap;justify-content: space-between;width: 482rpx;">
													<view style="width: 240rpx;height: 47rpx;line-height: 47rpx;margin-top: 30rpx;font-size: 30rpx;color: #333333;">阿里<text style="margin-left: 19rpx;font-size: 22rpx;">从业：3年</text></view>
													<view style="height: 44rpx;line-height: 44rpx;display: flex;font-size: 22rpx;color: #333333;margin-top: 30rpx;margin-right: 10rpx;">
														评级：<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
														<image src="/static/img/star.png" style="width: 20rpx;height: 20rpx;margin-left: 10rpx;margin-top: 12rpx;"></image>
													</view>
												</view>
												<view style="width: 240rpx;height: 41rpx;line-height: 41rpx;font-size: 20rpx;color: #333333;">擅长：狗狗，猫咪</view>
												<view style="height: 44rpx;display: flex;">
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;padding: 0 20rpx;">2054次咨询</view>
													<view style="height: 30rpx;line-height: 30rpx;background: rgba(51,51,51,0.08);font-size: 20rpx;color: #333333;text-align: center;border-radius: 15rpx;margin-top: 8rpx;margin-left: 15rpx;padding: 0 20rpx;">2小时内响应</view>
												</view>
											</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<!-- 科普区 -->
			<view class="science_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">科普区</view>
					<view @tap="goCommunityList(3)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<!-- 科普视频 -->
				<view @tap="goScienceVideo" style="width: 662rpx;height: 290rpx;position: relative;margin-left: 20rpx;">
					<image src="/static/image/13.png" mode="aspectFill" style="width: 662rpx;height: 290rpx;border-radius: 20rpx;"></image>
					<view style="width: 662rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
						<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
					</view>
					<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 129rpx;left: 291rpx;"></image>
				</view>
				<!-- 科普文章 -->
				<view style="width: 662rpx;height: 194rpx;margin-left: 20rpx;margin-top: 29rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;">
					<image src="/static/image/10.png" mode="aspectFill" style="width: 230rpx;height: 194rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="width: 432rpx;height: 194rpx;">
						<view style="width: 372rpx;height: 62rpx;line-height: 62rpx;margin-top: 22rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
						<view style="width: 372rpx;min-height: 62rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
					</view>
				</view>
			</view>
			<!-- 直播区 -->
			<view class="live_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">直播区</view>
					<view @tap="goCommunityList(2)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 22rpx;width: 662rpx;">
					<view style="width: 322rpx;height: 450rpx;position: relative;">
						<image src="/static/image/7.png" mode="aspectFill" style="width: 322rpx;height: 322rpx;border-radius: 20rpx;"></image>
						<view style="width: 322rpx;height: 66rpx;position: absolute;bottom: 118rpx;left: 0;">
							<image src="/static/img/view.png" style="width: 24rpx;height: 26rpx;margin-left: 30rpx;"></image>
							<text style="height: 66rpx;line-height: 66rpx;font-size: 28rpx;color: #FAFAFA;font-weight: bold;margin-left: 20rpx;">3.2万</text>
						</view>
						<view style="width: 312rpx;height: 47rpx;line-height: 47rpx;margin-top: 9rpx;margin-left: 10rpx;font-size: 28rpx;color: #333333;font-weight: bold;">晚上没电怎么办</view>
						<view style="width: 312rpx;height: 40rpx;margin-top: 9rpx;margin-left: 10rpx;display: flex;">
							<image src="/static/img/user.png" style="width: 18rpx;height: 20rpx;margin-top: 10rpx;"></image>
							<text style="height: 40rpx;line-height: 40rpx;font-size: 22rpx;color: #777777;font-weight: bold;margin-left: 10rpx;">肥花花啊</text>
						</view>
					</view>
					<view style="width: 322rpx;height: 450rpx;position: relative;">
						<image src="/static/image/1.png" mode="aspectFill" style="width: 322rpx;height: 322rpx;border-radius: 20rpx;"></image>
						<view style="width: 322rpx;height: 66rpx;position: absolute;bottom: 118rpx;left: 0;">
							<image src="/static/img/view.png" style="width: 24rpx;height: 26rpx;margin-left: 30rpx;"></image>
							<text style="height: 66rpx;line-height: 66rpx;font-size: 28rpx;color: #FAFAFA;font-weight: bold;margin-left: 20rpx;">3.2万</text>
						</view>
						<view style="width: 312rpx;height: 47rpx;line-height: 47rpx;margin-top: 9rpx;margin-left: 10rpx;font-size: 28rpx;color: #333333;font-weight: bold;">晚上没电怎么办</view>
						<view style="width: 312rpx;height: 40rpx;margin-top: 9rpx;margin-left: 10rpx;display: flex;">
							<image src="/static/img/user.png" style="width: 18rpx;height: 20rpx;margin-top: 10rpx;"></image>
							<text style="height: 40rpx;line-height: 40rpx;font-size: 22rpx;color: #777777;font-weight: bold;margin-left: 10rpx;">肥花花啊</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 宠物康复日志 -->
			<view class="recoverylog_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">宠物康复日志</view>
					<view @tap="goCommunityList(1)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
					<image src="/static/image/12.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="width: 432rpx;height: 212rpx;">
						<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
						<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
						<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
							<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
							<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
							<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
						</view>
					</view>
				</view>
				<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
					<image src="/static/image/10.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="width: 432rpx;height: 212rpx;">
						<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
						<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
						<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
							<image src="/static/img/praise_active.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
							<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
							<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
						</view>
					</view>
				</view>
				<view @tap="goRecoveryLogDetail" style="width: 662rpx;height: 212rpx;margin-left: 20rpx;box-shadow: 0px 1rpx 16rpx 1rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;display: flex;margin-bottom: 30rpx;">
					<image src="/static/image/14.png" mode="aspectFill" style="width: 230rpx;height: 212rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="width: 432rpx;height: 212rpx;">
						<view style="width: 372rpx;height: 56rpx;line-height: 56rpx;margin-top: 15rpx;font-size: 28rpx;color: #333333;font-weight: bold;margin-left: 30rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">夏日酷爽消暑餐</view>
						<view style="width: 372rpx;min-height: 56rpx;line-height: 32rpx;font-size: 20rpx;color: #434343;font-weight: bold;margin-left: 30rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
						<view style="width: 402rpx;height: 50rpx;display: flex;margin-left: 30rpx;margin-top: 15rpx;">
							<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 13rpx;"></image>
							<view style="height: 50rpx;line-height: 50rpx;font-size: 22rpx;color: #434343;font-weight: bold;margin-left: 12rpx;">236</view>
							<view style="width: 238rpx;height: 30rpx;line-height: 30rpx;text-align: center;margin-top: 10rpx;background: #EFEFEF;font-size: 20rpx;color: #777777;font-weight: bold;padding-left: 24rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-left: 17rpx;border-radius: 15rpx;">兽医回复：寄生虫疾病，消</view>
						</view>
					</view>
				</view>
				<view style="width: 100%;height: 1rpx;"></view>
			</view>
			<!-- 萌宠天地 -->
			<view class="exchange_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">萌宠天地</view>
					<view @tap="goCommunityList(0)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<!-- 视频 -->
				<view @tap="goCommunityVideo" style="margin-bottom: 20rpx;margin-left: 20rpx;">
					<view style="width: 662rpx;height: 333rpx;position: relative;">
						<image src="/static/image/13.png" mode="aspectFill" style="width: 662rpx;height: 333rpx;background: #F6DCA8;border-radius: 20rpx 20rpx 0 0;"></image>
						<view style="width: 662rpx;height: 122rpx;background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%);border-radius: 20rpx;position: absolute;top: 0;left: 0;">
							<view style="width: 604rpx;height: 69rpx;line-height: 69rpx;margin-left: 29rpx;color: #FFFFFF;font-size: 30rpx;font-weight: bold;">大熊猫对睡觉的地方并没有要求</view>
						</view>
						<image src="/static/img/play.png" style="width: 80rpx;height: 80rpx;position: absolute;top: 129rpx;left: 291rpx;"></image>
						<view style="width: 662rpx;height: 88rpx;position: absolute;bottom: 0;left: 0;display: flex;flex-flow: row wrap;justify-content: space-between;">
							<view style="margin-left: 20rpx;height: 88rpx;display: flex;">
								<image src="/static/img/amount.png" style="width: 22rpx;height: 28rpx;margin-top: 30rpx;"></image>
								<view style="height: 88rpx;line-height: 88rpx;margin-left: 20rpx;font-size: 22rpx;font-weight: bold;color: #FFFFFF;">1.32万</view>
							</view>
							<view style="margin-right: 16rpx;height: 88rpx;display: flex;">
								<image src="/static/img/praise.png" style="width: 26rpx;height: 24rpx;margin-top: 32rpx;"></image>
								<view style="height: 88rpx;line-height: 88rpx;margin-left: 19rpx;font-size: 22rpx;color: #FFFFFF;font-weight: bold;">236</view>
							</view>
						</view>
					</view>
					<view style="width: 662rpx;height: 125rpx;background: #F3F2F7;border-radius: 0 0 20rpx 20rpx;">
						<view style="width: 100%;height: 1rpx;"></view>
						<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 20rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
							<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
						</view>
						<view style="width: 622rpx;height: 65rpx;line-height: 65rpx;font-size: 26rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
							哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
						</view>
					</view>
				</view>
				<!-- 文章 -->
				<view style="width: 662rpx;min-height: 500rpx;display: flex;">
					<view @tap="goCommunityDetail" style="width: 322rpx;min-height: 500rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 20rpx;margin-bottom: 20rpx;">
						<image src="/static/image/6.png" mode="aspectFill" style="width: 322rpx;height: 258rpx;border-radius: 20rpx 20rpx 0 0;background: #F6DCA8;"></image>
						<view style="width: 282rpx;height: 63rpx;line-height: 63rpx;margin-left: 20rpx;font-size: 26rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉的地方</view>
						<view style="width: 282rpx;min-height: 32rpx;line-height: 32rpx;margin-left: 20rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">无竹令人俗无肉使人瘦，不俗又不瘦竹笋焖猪肉。</view>
						<view style="width: 282rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
							<view style="width: 100%;height: 1rpx;"></view>
							<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 20rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
								<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
							</view>
							<view style="width: 262rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
								哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
							</view>
						</view>
						<view style="width: 100%;height: 1rpx;"></view>
					</view>
					<view @tap="goCommunityDetail" style="width: 322rpx;min-height: 500rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;margin-left: 20rpx;margin-bottom: 20rpx;">
						<image src="/static/image/16.png" mode="aspectFill" style="width: 322rpx;height: 258rpx;border-radius: 20rpx 20rpx 0 0;background: #F6DCA8;"></image>
						<view style="width: 282rpx;height: 63rpx;line-height: 63rpx;margin-left: 20rpx;font-size: 26rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉的地方</view>
						<view style="width: 282rpx;min-height: 32rpx;line-height: 32rpx;margin-left: 20rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">无竹令人俗无肉使人瘦，不俗又不瘦竹笋焖猪肉。</view>
						<view style="width: 282rpx;min-height: 50rpx;background: #F3F2F7;border-radius: 10rpx;margin: 20rpx;">
							<view style="width: 100%;height: 1rpx;"></view>
							<view style="width: 142rpx;height: 30rpx;line-height: 30rpx;margin-left: 20rpx;margin-top: 20rpx;background: #FDD031;border-radius: 15rpx;font-size: 20rpx;color: #FFFFFF;font-weight: bold;text-align: center;">
								<image src="/static/img/buzz.png" style="width: 14rpx;height: 18rpx;margin-left: 6rpx;margin-top: 6rpx;margin-right: 10rpx;"></image>精彩评论
							</view>
							<view style="width: 262rpx;min-height: 26rpx;line-height: 32rpx;font-size: 20rpx;color: #173D61;font-weight: bold;margin-left: 20rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;padding-bottom: 10rpx;margin-top: 10rpx;">
								哈密瓜的皮:<text style="color: #333333;">大熊猫对睡觉的地方并没有要求</text>
							</view>
						</view>
						<view style="width: 100%;height: 1rpx;"></view>
					</view>
				</view>
				<view style="width: 100%;height: 1rpx;"></view>
			</view>
			<!-- 领养专区 -->
			<view class="adopt_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">领养专区</view>
					<view @tap="goCommunityList(4)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 20rpx;width: 662rpx;padding-bottom: 20rpx;">
					<view style="width: 322rpx;min-height: 416rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;" @click="goAdoptDetail(0)">
						<image src="/static/image/17.png" mode="aspectFill" style="width: 322rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
						<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
					</view>
					<view style="width: 322rpx;min-height: 416rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;" @click="goAdoptDetail(1)">
						<image src="/static/image/17.png" mode="aspectFill" style="width: 322rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">性别：弟弟</view>
						<view style="width: 284rpx;min-height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;margin-bottom: 17rpx;">领养宣言：负责到底，让小动物有一个安心温暖的家。</view>
					</view>
				</view>
			</view>
			<!-- 寻宠专区 -->
			<view class="forpet_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">寻宠专区</view>
					<view @tap="goCommunityList(5)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;margin-left: 20rpx;width: 662rpx;padding-bottom: 20rpx;">
					<view style="width: 322rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;" @click="goLostDetail(0)">
						<image src="/static/image/1.png" mode="aspectFill" style="width: 322rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
					</view>
					<view style="width: 322rpx;min-height: 506rpx;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);border-radius: 20rpx;" @click="goLostDetail(1)">
						<image src="/static/image/14.png" mode="aspectFill" style="width: 322rpx;height: 270rpx;border-radius: 20rpx 20rpx 0 0;"></image>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 10rpx;">名字：哈哈哈</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失城市：济南</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失地点：济南</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">走失时间：2020年3月4日</view>
						<view style="width: 284rpx;height: 41rpx;line-height: 41rpx;font-size: 22rpx;color: #333333;font-weight: bold;margin-left: 19rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">主人寄语：我只想这样静静...</view>
					</view>
				</view>
			</view>
			<!-- 志愿者招聘 -->
			<view class="recruitment_box">
				<view style="display: flex;flex-flow: row wrap;justify-content: space-between;">
					<view style="height: 94rpx;line-height: 94rpx;font-size: 36rpx;margin-left: 20rpx;color: #333333;font-weight: bold;">志愿者招聘</view>
					<view @tap="goCommunityList(6)" style="height: 94rpx;line-height: 94rpx;font-size: 24rpx;color: #777777;font-weight: bold;margin-right: 20rpx;">MORE ></view>
				</view>
				<view @tap="goRecruitmentDetail" style="width: 662rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 20rpx;margin-bottom: 24rpx;display: flex;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);">
					<image src="/static/image/3.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="margin-top: 10rpx;">
						<view style="width: 376rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
						<view style="width: 376rpx;height: 70rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
						<view style="width: 376rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
							<view style="display: flex;">
								<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
								<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
							</view>
							<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
						</view>
					</view>
				</view>
				<view @tap="goRecruitmentDetail" style="width: 662rpx;height: 228rpx;background: #FFFFFF;border-radius: 20rpx;margin-left: 20rpx;margin-bottom: 24rpx;display: flex;box-shadow: 0 1rpx 16rpx 2rpx rgba(124, 124, 124, 0.2);">
					<image src="/static/image/7.png" mode="aspectFill" style="width: 236rpx;height: 228rpx;border-radius: 20rpx 0 0 20rpx;"></image>
					<view style="margin-top: 10rpx;">
						<view style="width: 376rpx;height: 76rpx;line-height: 76rpx;margin-left: 30rpx;font-size: 28rpx;color: #333333;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">大熊猫睡觉</view>
						<view style="width: 376rpx;height: 70rpx;line-height: 32rpx;margin-left: 30rpx;font-size: 20rpx;color: #434343;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">新津韭黄天下无，色如鹅黄三尺余，东门彘肉更奇绝，肥美不减胡羊酥。</view>
						<view style="width: 376rpx;height: 76rpx;display: flex;justify-content: space-between;margin-left: 30rpx;">
							<view style="display: flex;">
								<image src="/static/img/place.png" style="width: 20rpx;height: 20rpx;margin-top: 28rpx;"></image>
								<view style="height: 76rpx;line-height: 76rpx;margin-left: 20rpx;font-size: 22rpx;color: #777777;font-weight: bold;">济南</view>
							</view>
							<view style="height: 76rpx;line-height: 76rpx;font-size: 22rpx;color: #777777;font-weight: bold;">2019年3月24日</view>
						</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 30rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				scrollLeft: 0
			};
		},
		onLoad() {},
		methods: {
			goScienceVideo() {
				uni.navigateTo({
					url: '/pages/scienceVideo/scienceVideo'
				})
			},
			goCommunityDetail() {
				uni.navigateTo({
					url: '/pages/communityDetail/communityDetail'
				})
			},
			goCommunityList(num) {
				uni.navigateTo({
					url: '/pages/communityList/communityList?current=' + num
				})
			},
			goRecoveryLogDetail() {
				uni.navigateTo({
					url: '/pages/recoveryLogDetail/recoveryLogDetail'
				})
			},
			goCommunityVideo() {
				uni.navigateTo({
					url: '/pages/communityVideo/communityVideo'
				})
			},
			goPetDoctorDetail() {
				uni.navigateTo({
					url: '/pages/petDoctorDetail/petDoctorDetail'
				})
			},
			goRecruitmentDetail() {
				uni.navigateTo({
					url: '/pages/recruitmentDetail/recruitmentDetail'
				})
			},
			goRapidInterrogation() {
				uni.navigateTo({
					url: '/pages/rapidInterrogation/rapidInterrogation'
				})
			},
			goSign() {
				uni.navigateTo({
					url: '/pages/sign/sign'
				})
			},
			goAdoptDetail(type) {
				uni.navigateTo({
					url: '/pages/adoptDetail/adoptDetail?type=' + type
				})
			},
			goLostDetail(type) {
				uni.navigateTo({
					url: '/pages/lostDetail/lostDetail?type=' + type
				})
			},
			goTasteTest() {
				uni.navigateTo({
					url: '/pages/tasteTest/tasteTest'
				})
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			}
		}
	};
</script>

<style>
	page,uni-page-wrapper {
		background: #F3F2F7;
	}
	
	.cpd_title {
		width: 662rpx;
		height: 94rpx;
		line-height: 94rpx;
		font-size: 36rpx;
		margin-left: 20rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.outpatient_box {
		width: 702rpx;
		height: 454rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	
	.pet_doctor_box {
		width: 702rpx;
		height: 312rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.science_box {
		width: 702rpx;
		height: 638rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.live_box {
		width: 702rpx;
		height: 558rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.recoverylog_box {
		width: 702rpx;
		min-height: 336rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.exchange_box {
		width: 702rpx;
		min-height: 100rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.adopt_box {
		width: 702rpx;
		min-height: 540rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.forpet_box {
		width: 702rpx;
		min-height: 630rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.recruitment_box {
		width: 702rpx;
		min-height: 530rpx;
		margin-left: 24rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
		padding-bottom: 1rpx;
	}
	
	.home_title {
		width: 100%;
		height: 70rpx;
		background: rgba(238, 238, 238, 0.5);
		display: flex;
	}

	.title_img {
		width: 50rpx;
		height: 50rpx;
		margin: 10rpx 20rpx;
		background: #000000;
		border-radius: 50%;
	}

	.title_view {
		height: 70rpx;
		line-height: 70rpx;
		font-size: 36rpx;
		color: #000000;
		/* font-weight: bold; */
		font-family: Source Han Sans CN;
	}

	.top_tab {
		width: 750rpx;
		display: flex;
		margin-top: 20rpx;
	}

	.top_tab_style {
		width: 340rpx;
		height: 100rpx;
		border: 1rpx solid #eeeeee;
		margin-left: 15rpx;
		border-radius: 15rpx;
		display: flex;
	}

	.top_tab_style2 {
		margin-left: 25rpx;
	}

	.top_tab_img {
		width: 50rpx;
		height: 50rpx;
		background: #007AFF;
		border-radius: 50%;
		margin: 20rpx;
	}

	.ttv_title {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #000000;
		font-family: Source Han Sans CN;
		margin-top: 15rpx;
	}

	.ttv_subhead {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #BBBBBB;
		font-family: Source Han Sans CN;
	}

	.top-swipe {
		width: 702rpx;
		height: 300rpx;
		margin: 20rpx 24rpx;
	}
	
	.top-swipe uni-swiper {
		height: 300rpx;
	}
	
	.top-swipe2 {
		width: 700rpx;
		height: 240rpx;
		/* margin: 20rpx 25rpx; */
	}
	
	.top-swipe2 uni-swiper {
		height: 240rpx;
	}
	
	uni-swiper .uni-swiper-dot {
		display: none !important;
	}
	
	.swiper-img {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}
	
	.home_view {
		margin-top: 30rpx;
		border: 1rpx solid #EEEEEE;
		border-radius: 20rpx 20rpx 0 0;
	}

	.icon_tab {
		width: 750rpx;
		height: 206rpx;
		display: flex;
	}

	.icon_box {
		width: 150rpx;
		height: 206rpx;
	}

	.ib_img {
		width: 70rpx;
		height: 70rpx;
		margin-left: 40rpx;
		margin-top: 50rpx;
	}

	.ib_view {
		width: 150rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		text-align: center;
		margin-top: 6rpx;
	}

	.outpatient {
		width: 700rpx;
		display: flex;
		flex-flow: row wrap;
	}
	
	.outpatient_classify {
		width: 175.5rpx;
		height: 175rpx;
	}
	
	.oc_image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-left: 37.75rpx;
	}
	
	.oc_name {
		width: 175.5rpx;
		height: 65rpx;
		line-height: 65rpx;
		text-align: center;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
	}
	
	button:after {
		border: none;
	}
</style>

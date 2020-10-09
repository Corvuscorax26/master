<template>
	<view>
		<view class="integral_box">
			<image src="/static/img/healthbg.png" class="integral_bg"></image>
			<view class="today_title">今日xx</view>
			<view class="today_number">23.5<text>kg</text></view>
		</view>
		<view class="echart_box">
			<view class="title_box">
				<view class="health_title">统计</view>
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
			</view>
			<!-- <echarts :option="option" style="height: 395rpx;" @click="echartsClick"></echarts> -->
			<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="uni-ec-canvas" canvas-id="uni-ec-canvas" :ec="ec"></uni-ec-canvas>
		</view>
	</view>
</template>

<script>
	import Echarts from '../../components/echarts/echarts.vue'
	import uniEcCanvas from '../../components/uni-ec-canvas/uni-ec-canvas.vue'
	export default {
		components: {
			Echarts,
			uniEcCanvas
		},
		data() {
			return {
				ec: {
					option: {
						title: {
							text: ""
						},
						tooltip: {
							trigger: "axis",
							formatter: "{b}日\r\n{c0}kg",
							axisPointer: {
								type: "line",
								axis: "x",
								label: {
									backgroundColor: "#000000"
								}
							}
						},
						grid: {
							left: '5%',
							right: '8%',
							bottom: '5%',
							containLabel: true
						},
						xAxis: [{
							position: 'bottom',
							type: 'category',
							data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
							nameLocation: 'end',
							name: '日',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							nameTextStyle: {
								padding: [26, 0, 0, 0],
								color: '#777777',
								fontWeight: 'bold',
								fontFamily: 'Microsoft YaHei'
							}
						}],
						yAxis: [{
							type: 'value',
							name: 'kg',
							nameTextStyle: {
								padding: [0, 0, 15, -26],
								color: '#777777',
								fontWeight: 'bold',
								fontFamily: 'Microsoft YaHei'
							},
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false,
							}
						}],
						series: [{
							name: '体重',
							type: 'line',
							data: [10, 13, 14, 16, 20, 23.5, 24, 25],
							linearGradient: [0, 0, 0, 1,
								[{
									offset: 1,
									color: '#777777'
								}]
							],
							itemStyle: {
								normal: {
									color: "#FFC800", //折线点的颜色
									lineStyle: {
										color: "#787878" //折线的颜色
									}
								}
							},
						}]
					}
				},
				scrollLeft: 0,
				currentTab: 0,
				menuTabs: [{
						name: '年',
						newstype_id: '1'
					},
					{
						name: '月',
						newstype_id: '2'
					},
					{
						name: '日',
						newstype_id: '3'
					}
				],
				// option: {},
				// option2: {
				// 	notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
				// 	tooltip: {
				// 		trigger: 'axis',
				// 		positionStatus: true,
				// 		formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
				// 		formatterUnit: 'kg', // 自定义变量：数值后面的单位
				// 		formatFloat2: true, // 自定义变量：是否格式化为两位小数
				// 		formatThousands: true, // 自定义变量：是否添加千分位
				// 		axisPointer: {
				// 			type: 'none'
				// 		}
				// 	},
				// 	grid: {
				// 		left: '5%',
				// 		right: '8%',
				// 		bottom: '5%',
				// 		containLabel: true
				// 	},
				// 	xAxis: [{
				// 		position: 'bottom',
				// 		type: 'category',
				// 		data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
				// 		nameLocation: 'end',
				// 		name: '日',
				// 		axisLine: {
				// 			show: false
				// 		},
				// 		axisTick: {
				// 			show: false
				// 		},
				// 		nameTextStyle: {
				// 			padding: [26, 0, 0, 0],
				// 			color: '#777777',
				// 			fontWeight: 'bold',
				// 			fontFamily: 'Microsoft YaHei'
				// 		}
				// 	}],
				// 	yAxis: [{
				// 		type: 'value',
				// 		name: 'kg',
				// 		nameTextStyle: {
				// 			padding: [0, 0, 15, -26],
				// 			color: '#777777',
				// 			fontWeight: 'bold',
				// 			fontFamily: 'Microsoft YaHei'
				// 		},
				// 		axisLine: {
				// 			show: false
				// 		},
				// 		axisTick: {
				// 			show: false
				// 		},
				// 		splitLine: {
				// 			show: false,
				// 		}
				// 	}],
				// 	series: [{
				// 		name: '体重',
				// 		type: 'line',
				// 		data: [10, 13, 14, 16, 20, 23.5, 24, 25],
				// 		linearGradient: [0, 0, 0, 1,
				// 			[{
				// 				offset: 1,
				// 				color: '#777777'
				// 			}]
				// 		]
				// 	}]
				// }
			};
		},
		onLoad() {
			// this.option = this.option2
		},
		methods: {
			// echartsClick(params) {
			// 	console.log('点击数据', params)
			// },
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
	};
</script>

<style>
	page,
	uni-page-wrapper {
		background: #F3F2F7;
	}

	.integral_box {
		width: 750rpx;
		height: 830rpx;
		background: #FFDA6E;
		border-radius: 0 0 374rpx 374rpx;
	}

	.integral_bg {
		width: 326rpx;
		height: 290rpx;
		position: absolute;
		top: 70rpx;
		left: 212rpx;
	}

	.today_title {
		width: 326rpx;
		text-align: center;
		font-size: 26rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 150rpx;
		left: 212rpx;
	}

	.today_number {
		width: 326rpx;
		text-align: center;
		font-size: 48rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 214rpx;
		left: 212rpx;
	}

	.today_number text {
		font-size: 36rpx;
	}

	.echart_box {
		width: 702rpx;
		height: 483rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		position: absolute;
		top: 420rpx;
		left: 24rpx;
	}

	.title_box {
		width: 662rpx;
		height: 90rpx;
		display: flex;
		margin-left: 20rpx;
	}

	.health_title {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}

	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 40%;
		background-color: #FFFFFF;
		overflow: hidden;
		height: 90rpx;
		margin-left: 320rpx;
		/* line-height: 78rpx; */
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
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 50rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #FFBE00;
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
		background: #FFBE00;
	}

	.uni-ec-canvas {
		width: 682rpx;
		height: 395rpx;
		display: block;
	}
</style>

<template>
	<!-- 签到 -->
	<view class="qian_dao">
		<view class="header dis_f_sb_c">
			<view class="center">
				<text>{{nian}}/{{yue}}</text>
			</view>
		</view>
		<view class="section">
			<!-- 周，星期 -->
			<view class="weeks dis_f_c_c">
				<view class="weeks_ul dis_f_c_c">
					<block v-for="(item,index) in 7" :key="index">
						<view class="weeks_li dis_f_c_c">
							<text>{{weeks[index]}}</text>
						</view>
					</block>
				</view>
			</view>
			<!-- 天 -->
			<view class="days dis_f_c_c">
				<view class="ul dis_f_w box">
					<block v-for="(item,index) in days_list" :key="index">
						<template v-if="item.type=='last_month'||item.type=='next_month'">
							<view class="li dis_f_c_c box" :class="[item.type]">
								<text>{{item.r}}</text>
							</view>
						</template>
						<template v-else>
							<view class="li dis_f_c_c box today" :class="{'true':item.click}" @click.stop="list_fun(item)" v-if="item.nyr==nyr">
								<view class="trueview">
									<text v-if="item.click">{{item.r}}</text>
									<text v-else>{{item.r}}</text>
									<image v-if="item.click" src="/static/img/sign_true.png" class="sign_true"></image>
								</view>
							</view>
							<view class="li dis_f_c_c box" :class="{'true':item.click}" @click.stop="list_fun(item)" v-else>
								<view v-if="item.r < r && item.click == false" class="sign_false">
									<view>
										<text>{{item.r}}</text>
									</view>
								</view>
								<view v-else class="trueview">
									<text>{{item.r}}</text>
									<image v-if="item.click" src="/static/img/sign_true.png" class="sign_true"></image>
								</view>
							</view>
						</template>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 签到的日期列表
			list: {
				type: Array,
				default: Array
			},
			// 当前时间YYYY-MM
			date: {
				type: String,
				default: "",
			},
		},
		data() {
			return {
				// 公用的js
				$: this.$,

				// 周，星期
				weeks: {
					0: "一",
					1: "二",
					2: "三",
					3: "四",
					4: "五",
					5: "六",
					6: "日",
				},

				// 当前年月
				nian: "",
				yue: "",
				nian_yue: "",

				// 当前系统时间的年月日
				nyr: "",
				ny: "",
				r: '',

				// 列表数据
				days_list: [],

			};
		},
		created() {
			// 获取当前系统时间的年月日
			this.get_nyr_fun();
			// 获取列表数据
			this.get_days_list_fun();
		},
		methods: {
			// 获取当前系统时间的年月日
			get_nyr_fun() {
				let date = new Date();
				let n = date.getFullYear(),
					y = date.getMonth() + 1,
					r = date.getDate();
				y = this.get_str(y);
				r = this.get_str(r);
				let nyr = n + "-" + y + "-" + r;
				let ny = n + "-" + y;
				this.nyr = nyr;
				this.ny = ny;
				this.r = r;
			},
			// 获取列表数据
			get_days_list_fun() {
				let date = this.date;
				// 如果存在当前日期
				if (date) {
					let date_arr = date.split("-");
					date = new Date(date_arr[0], date_arr[1] - 1);
				} else {
					date = new Date();
				}
				// 获取年月日
				let n = date.getFullYear(),
					y = date.getMonth();
				this.nian = n;
				this.yue = this.get_str(y + 1);
				this.nian_yue = n + "-" + this.get_str(y + 1);

				// 存放数据的列表
				let days_list = [];

				// 获取上月的数据
				days_list = this.get_last_month_fun(days_list, n, y);

				// 获取这月的数据
				days_list = this.get_this_month_fun(days_list, n, y);

				// 获取下月的数据
				days_list = this.get_next_month_fun(days_list, n, y);

				this.days_list = days_list;
			},
			// 获取上月的日期
			get_last_month_fun(days_list, n, y) {
				// 获取当前月份第一天是周几
				let week = new Date(n, y, 1).getDay();
				// 如果不是周一，说明需要上月的天数补齐
				if (week != 1) {
					week = week === 0 ? 7 : week;
					// 计算需要补齐的天数
					let number = week - 1;
					// 获取上月的天数（当天数为0 js自动处理为上一月的最后一天）
					let days = y == 0 ? 31 : new Date(n, y, 0).getDate()
					y = this.get_str(y);
					for (var i = days - number + 1; i <= days; i++) {
						let r = i;
						days_list.push({
							r: r,
							type: "last_month",
						})
					}
				}
				return days_list;
			},
			// 获取这月的数据
			get_this_month_fun(days_list, n, y) {
				y = y + 1;
				// 获取这月的天数（当天数为0 js自动处理为上一月的最后一天）
				let days = new Date(n, y, 0).getDate();
				y = this.get_str(y);
				for (var i = 1; i <= days; i++) {
					let r = this.get_str(i);
					let nyr = n + "-" + y + "-" + r;
					let yr = y + "-" + r;
					let click = false;
					// 获取已经签到的列表
					let list = this.list;
					// 如果有数据
					if (list.length) {
						// 如果有符合条件的
						if (list.some((item) => {
								return item == r || item == yr || item == nyr;
							})) {
							click = true;
						}
					}
					days_list.push({
						nyr: nyr,
						yr: yr,
						r: r,
						type: "this_month",
						click: click,
					})
				}
				return days_list;
			},
			// 获取下月的日期
			get_next_month_fun(days_list, n, y) {
				// 获取这月的天数（当天数为0 js自动处理为上一月的最后一天）
				let days = new Date(n, y + 1, 0).getDate();
				// 获取当前月份最后一天是周几
				let week = new Date(n, y, days).getDay();
				// 如果不是周日
				if (week !== 0) {
					let number = 7 - week;
					y = y + 2;
					y = this.get_str(y);
					for (var i = 1; i <= number; i++) {
						let r = this.get_str(i);
						days_list.push({
							r: r,
							type: "next_month",
						})
					}
				}
				return days_list;
			},
			// 获取字符串
			get_str(num) {
				num = num - 0;
				return num;
			},
			// 日期改变时触发
			date_change(type) {
				let n = this.nian - 0,
					y = this.yue - 0;
				if (type == "last") {
					if (y == 1) {
						n -= 1;
						y = 12;
					} else {
						y = this.get_str(y - 1);
					}
				} else {
					if (y == 12) {
						n += 1;
						y = "01";
					} else {
						y = this.get_str(y + 1);
					}
				}
				let ny = n + "-" + y;
				this.$emit('date_change', ny);
			},
			// 列表的点击事件
			list_fun(item) {
				if (item.nyr == this.nyr) {
					item.type = "today";
				}
				this.$emit("day_change", item);
			}
		},
		watch: {
			// 当前日期改变时触发
			date(date) {
				// 获取列表数据
				this.get_days_list_fun();
			},
			// 签到列表更新时触发
			list(list) {
				let days_list = JSON.parse(JSON.stringify(this.days_list));
				days_list.forEach((obj) => {
					let click = false;
					// 如果有数据
					if (list.length) {
						// 如果有符合条件的
						if (list.some((item) => {
								return item == obj.r || item == obj.yr || item == obj.nyr;
							})) {
							click = true;
						}
					}
					obj.click = click;
				});
				this.days_list = days_list;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.box {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.sign_true {
		width: 20rpx;
		height: 20rpx;
		position: absolute;
		top: 33rpx;
		left: 33rpx;
	}

	.true .trueview {
		background: #7C72D8;
		width: 50rpx;
		height: 50rpx;
		margin: 12rpx 22rpx;
		border-radius: 50%;
		line-height: 50rpx;
		text-align: center;
		position: relative;
	}
	
	.sign_false {
		width: 94rpx;
		height: 74rpx;
	}
	
	.sign_false view {
		background: #C5C5C5;
		color: #333333;
		width: 50rpx;
		height: 50rpx;
		margin: 12rpx 22rpx;
		border-radius: 50%;
		line-height: 50rpx;
		text-align: center;
		font-weight: bold;
	}

	.dis_f_w {
		display: flex;
		flex-wrap: wrap;
	}

	.dis_f_sb_c {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dis_f_c_c {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.qian_dao {
		width: 702rpx;
		height: 658rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 24rpx;
		z-index: 999;

		.header {
			height: 90rpx;

			.left,
			.right {
				font-size: 30rpx;
				height: 100%;
				padding: 0 30rpx;
			}

			.left {}

			.center {
				height: 91rpx;
				line-height: 91rpx;
				margin-left: 30rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #343434;
			}

			.right.false {
				color: #ccc;
			}
		}

		.section {
			width: 658rpx;
			height: 478rpx;
			margin-left: 22rpx;
			background: #F3F2F7;
			border-radius: 20rpx;
			
			.weeks {
				.weeks_ul {
					width: 658rpx;
					margin-top: 20rpx;

					.weeks_li {
						width: 94rpx;
						font-size: 30rpx;
						color: #787878;
						font-weight: bold;
						padding: 10rpx 0;
					}
				}
			}

			.days {
				.ul {
					flex: none;
					width: 658rpx;
					margin-top: 20rpx;

					.li {
						width: 94rpx;
						height: 74rpx;
						font-size: 28rpx;
						color: #343434;
						position: relative;
						font-weight: bold;

						&.last_month,
						&.next_month {
							color: #ccc;
						}

						&.true {
							color: #fff;
							width: 94rpx;
							height: 74rpx;
							font-weight: bold;
						}

						&.today {}
					}
				}
			}
		}
	}
</style>

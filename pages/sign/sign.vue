<template>
	<view>
		<qian-dao :list="list" :date="date" @day_change="day_change_fun" @date_change="date_change_fun"></qian-dao>
		<view class="bg1"></view>
		<view class="bg2"></view>
		<image src="/static/img/qdcg.png" class="qdcg"></image>
	</view>
</template>

<script>
	import QianDao from "@/components/qian-dao/qian-dao.vue";
	export default {
		components: {
			// 签到
			QianDao,
		},
		data() {
			return {
				// 当前的日期
				date: "",
				// 已经签到的数据列表
				list: ["14", "15", "16"],
				day: {
					click: false,
					nyr: "2020-9-10",
					r: 10,
					type: "this_month",
					yr: "9-10"
				}
			}
		},
		onLoad() {
			this.get_nyr_fun();
		},
		methods: {
			// 点击天
			day_change_fun(day) {
				// 如果没有签到（可以补签）
				// if (!day.click) {
				//  this.list.push(day.r);
				// }
				// 如果今天没有签到(只签到今天的)
				if (!day.click && day.type == "today") {
					this.list.push(day.r);
				}
			},
			// 日期改变时触发
			date_change_fun(date) {
				// 跟新日期
				this.date = date;
				// 清空已经签到的列表
				this.list = [];
				// 根据日期获取已经签到的列表然后赋值
				this.list = ["01"];
			},
			get_nyr_fun() {
				let date = new Date();
				let n = date.getFullYear(),
					y = date.getMonth() + 1,
					r = date.getDate();
				y = this.get_str(y);
				r = this.get_str(r);
				r = r + '';
				this.list.push(r);
			},
			get_str(num) {
				num = num - 0;
				return num;
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: linear-gradient(-35deg, #FFC800 0%, #FFE06E 100%);
	}
	
	.bg1 {
		width: 602rpx;
		height: 658rpx;
		position: absolute;
		top: 20rpx;
		left: 74rpx;
		background: rgba(255,255,255,0.7);
		border-radius: 20rpx;
		z-index: -1;
	}
	
	.bg2 {
		width: 502rpx;
		height: 658rpx;
		position: absolute;
		top: 40rpx;
		left: 129rpx;
		background: rgba(255,255,255,0.7);
		border-radius: 20rpx;
		z-index: -1;
	}
	
	.qdcg {
		width: 382rpx;
		height: 382rpx;
		position: absolute;
		top: 738rpx;
		left: 184rpx;
	}
</style>

<template>
	<view class="lottery_container">
		<view class="grid_wrap">
			<view class="lottery_wrap">
				<ul class="lottery_grid">
					<li v-for="(item, index) in grid_info_arr" :class="{ active: current_index == index && index != 8 }" :key="index"
					 @click="luck_draw" :data-index="index">
						<image v-if="index != 8 && item.logo != '' " class="grid_img" mode='aspectFit' :src="item.logo" alt="">
							{{ index == 8 ? '开始抽奖' : item.text }}
					</li>
				</ul>
			</view>
			<view class="lottery_wrap_border">
				<ul v-for="(item, index) in 4" :key="index">
					<li v-for="(item, index) in 12" :key="index"></li>
				</ul>
			</view>
		</view>
		<!-- 抽奖完成弹出的窗口 -->
		<!-- <view class="lottery_finish_wrap">
			
		</view> -->
	</view>

</template>

<script>
	import {
		request,
		getStorage,
		toast,
		modal,
		setStorage
	} from '../../serve.js'
	import LotteryDraw from './SJ-LotteryDraw.js';
	let grid_info = [{
			logo: "../../static/img/3zhe.png",
			text: ""
		},
		{
			logo: "../../static/img/2zhe.png",
			text: ""
		},
		{
			logo: "",
			text: "祝你好运"
		},
		{
			logo: "../../static/img/5zhe.png",
			text: ""
		},
		{
			logo: "../../static/img/20-5.png",
			text: ""
		},
		{
			logo: "",
			text: "谢谢参与"
		},
		{
			logo: "../../static/img/0.png",
			text: "问诊"
		},
		{
			logo: "../../static/img/youhuiquan.png",
			text: "会员"
		},
		{
			logo: "",
			text: ""
		},
	];
	export default {
		data() {
			return {
				current_index: -1,
			};
		},
		props: {
			grid_info_arr: {
				type: Array,
				default: function() {
					return grid_info
				}
			},
		},
		onLoad() {
		},

		methods: {
			luck_draw(event) {
				let index = event.currentTarget.dataset.index;
				let that = this;
				
				// 点击抽奖之后知道获奖位置，修改父组件中lottery_draw_param的值
				this.$emit('get_winingIndex', function(res){
					let lottery_draw_param=res;
					if (lottery_draw_param.residue_degree > 0) {
						if (index == 8) {
							let win = new LotteryDraw({
									domData: that.grid_info_arr,
									...lottery_draw_param
								},
								function(index, count) {
									that.current_index = index;
									if (lottery_draw_param.winingIndex == index && lottery_draw_param.totalCount == count) {
										that.$emit('luck_draw_finish', that.grid_info_arr[index])
										// console.log('抽到了')
									}
								}
							);
						}
					} else {
						toast({
							title: '您的次数已耗尽，请明天再来'
						})
					}
				});
			}
		}
	};
</script>

<style scoped lang="css">
	@import './SJ-LotteryDraw.css';
</style>

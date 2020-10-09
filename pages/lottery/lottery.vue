<template>
	<view>
		<image src="/static/img/lotterybg.png" class="lottery_bg"></image>
		<LotteryDraw @get_winingIndex='get_winingIndex' @luck_draw_finish='luck_draw_finish'></LotteryDraw>
		<image src="/static/img/lottery_button.png" class="lottery_button"></image>
		<view class="residue_degree">
			你还有<text>{{lottery_draw_param.residue_degree}}</text>次抽奖机会
		</view>
	</view>
</template>

<script>
	import LotteryDraw from '../../components/SJ-LotteryDraw/SJ-LotteryDraw.vue';
	export default {
		components: {
			LotteryDraw
		},
		data() {
			return {
				lottery_draw_param: {
					startIndex: 0, //开始抽奖位置，从0开始
					totalCount: 4, //一共要转的圈数
					winingIndex: 4, //中奖的位置，从0开始
					speed: 50 ,//抽奖动画的速度 [数字越大越慢,默认100]
					residue_degree: 3
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			// 修改获奖位置（可以在这里获取后台的数据
			get_winingIndex(callback) {
				var random = parseInt(Math.random()*8,10)+1;
				this.lottery_draw_param.winingIndex = random;
				//props修改在小程序和APP端不成功，所以在这里使用回调函数传参，
				callback(this.lottery_draw_param);
			},
			// 抽奖完成
			luck_draw_finish(param) {
				if (this.lottery_draw_param.residue_degree > 0) {
					this.lottery_draw_param.residue_degree = this.lottery_draw_param.residue_degree - 1;
				}
				// console.log(`抽到第${param+1}个方格的奖品`)
			}
		}
	}
</script>

<style>
	page,
	uni-page-wrapper {
		background: #d2f5c7;
	}

	.lottery_bg {
		width: 750rpx;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	
	.lottery_button {
		width: 480rpx;
		height: 153rpx;
		margin-left: 135rpx;
		z-index: 9999;
	}
	
	.residue_degree {
		width: 480rpx;
		height: 112rpx;
		line-height: 112rpx;
		text-align: center;
		font-size: 36rpx;
		color: #FFFFFF;
		position: absolute;
		top: 796rpx;
		left: 135rpx;
		z-index: 9999;
	}
	
	.residue_degree text {
		font-size: 48rpx;
		color: #F1F673;
		font-weight: bold;
		padding: 0 6rpx;
	}
</style>

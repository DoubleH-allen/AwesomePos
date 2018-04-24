import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	tableData: [],
	totalCount: 0,
	totalPrice: 0,
}
const mutations={
	addItem(state,text){
		console.log(text)
		let isHave = false;
		for(let i = 0;i<state.tableData.length;i++){
			if(state.tableData[i].goodsId == text.goodsId){
				isHave = true
			}
		}
		if(isHave){
			let arr = state.tableData.filter(o=>o.goodsId == text.goodsId)
			arr[0].count++
		}else{
			let newGoods = {goodsId:text.goodsId,goodsname:text.goodsName,price:text.price,count:1}
			state.tableData.push(newGoods)
		}
		this.commit('totalPrice')
	},
	deleteItem(state,text){
		console.log(text)
		state.tableData = state.tableData.filter(o=>o.goodsId != text.goodsId);
		this.commit('totalPrice')
	},
	deleteAll(state){
		state.tableData = []
		this.commit('totalPrice')
	},
	totalPrice(state){
		console.log(state)
		state.totalCount = 0
		state.totalPrice = 0
		state.tableData.forEach((o)=>{
			state.totalCount += o.count;
			state.totalPrice += o.price*o.count;
		})
	}
}
const actions={
	addItemAction({commit},text){
		console.log(text)
		commit('addItem',text)
	},
	deleteItemAction({commit},text){
		console.log(text);
		commit('deleteItem',text)
	},
	deleteAllAction({commit},text){
		commit('deleteAll')
	},
	totalPriceAction({commit}){
		commit('totalPrice')
	}
	// addItemAction(context){
		
	// 	context.commit('addItem')
	// }
}
export default new Vuex.Store({
	state,mutations,actions
})
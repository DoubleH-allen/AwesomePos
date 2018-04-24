<template>
  <div class="pos">
  	<el-row>
  		<el-col :span="7" class="pos-order" id="order-list">
	    	<el-tabs>
	    		<el-tab-pane label="点餐">
	    			<el-table :data="tableData" border style="100%">
	    				<el-table-column prop="goodsname" label="商品名称" ></el-table-column>
	    				<el-table-column prop="count" label="数量" width="50"></el-table-column>
	    				<el-table-column prop="price" label="金额" width="50"></el-table-column>
	    				<el-table-column label="操作" width="150">
	    					<template slot-scope="scope">
						        <el-button size="mini" @click="addItemAction(scope.row)">添加</el-button>
						        <el-button size="mini" type="danger" @click="deleteItemAction(scope.row)">删除</el-button>
						      </template>
	    				</el-table-column>
	    			</el-table>
	    			<div>
	    				<span>总数量：{{$store.state.totalCount}}</span>
	    				<span>总金额：{{$store.state.totalPrice}}</span>
	    			</div>
	    			<div>
	    				<el-row>
	    					<el-col :span="12"><el-button type="danger" @click="deleteAllAction">删除</el-button></el-col>
	    					<el-col :span="12"><el-button type="success" @click="totalPriceAction">结账</el-button></el-col>
	    				</el-row>	
	    			</div>

	    		</el-tab-pane>
	    		<el-tab-pane label="挂单"></el-tab-pane>
	    		<el-tab-pane label="外卖"></el-tab-pane>
	    	</el-tabs>
	    </el-col>	
	    <el-col :span="17">
	    	<div class="usual-goods">
	    		<div class="title">常用商品</div>
	    		<div>
	    			<ul class="o-list">
	    				<li v-for="goods in oftenGoods" @click="addItemAction(goods)">
	    					<span>{{goods.goodsName}}</span>
	    					<span class="o-price">¥{{goods.price}}元</span>	
	    				</li>  
	    			</ul>
	    		</div>
	    	</div>
	    	<div class="all-goods">
	    		<el-tabs>
	    			<el-tab-pane label="汉堡">
	    				<ul class="cooklist">
	    					<li v-for="goods in type0Goods" @click="addItemAction(goods)">
	    						<span>{{goods.goodsName}}</span>
	    						<span>¥{{goods.price}}元</span>
	    					</li>
	    				</ul>
	    			</el-tab-pane>
	    			<el-tab-pane label="小食">
	    				<ul class="cooklist">
	    					<li v-for="goods in type1Goods" @click="addItemAction(goods)">
	    						<span>{{goods.goodsName}}</span>
	    						<span>¥{{goods.price}}元</span>
	    					</li>
	    				</ul>
	    			</el-tab-pane>
	    			<el-tab-pane label="饮料">
	    				<ul class="cooklist">
	    					<li v-for="goods in type2Goods" @click="addItemAction(goods)">
	    						<span>{{goods.goodsName}}</span>
	    						<span>¥{{goods.price}}元</span>
	    					</li>
	    				</ul>
	    			</el-tab-pane>
	    		</el-tabs>
	    	</div>
	    </el-col>
  	</el-row>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapActions } from 'vuex'
export default {
  name: 'pos',
  data(){
  	return {
  		// tableData: [],
        oftenGoods:[],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        totalCount: 0,
        totalPrice: 0
      
  	}
  },
  created(){
  	axios.get('http://jspang.com/DemoApi/oftenGoods.php').then(response=>{
  		// console.log(response);
  		this.oftenGoods = response.data;
  	}).catch(error=>{
  		// console.log(error);
  	}),
  	axios.get('http://jspang.com/DemoApi/typeGoods.php').then(response=>{
  		console.log(response);
  		this.type0Goods = response.data[0];
  		this.type1Goods = response.data[1];
  		this.type2Goods = response.data[2];
  	}).catch(error=>{
  		console.log(error);
  	})
  },
  computed:mapState(['tableData']),
  mounted: function(){
  	/**
  	*js set height
  	*/
  	var orderHeight = document.body.clientHeight;
  	console.log(orderHeight);
  	document.getElementById('order-list').style.height = orderHeight + 'px';
  },
  methods:{
  	/**
  	*action方法的的转换
  	*@param {goods}
  	*/
  	// ...mapActions(['addItemAction','deleteAllAction','deleteItemAction','totalPriceAction'])
  	addItemAction(goods){
  		this.$store.dispatch('addItemAction',goods)
  	},
  	deleteAllAction(){
  		this.$store.dispatch('deleteAllAction')
  	},
  	deleteItemAction(goods){
  		this.$store.dispatch('deleteItemAction',goods)
  	},
  	totalPriceAction(){
  		this.$store.dispatch('totalPriceAction')
  	},
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-order{
	background-color: #f9fafc;
	border-right: 1px solid #c0ccda;
	color:#000;
}
.usual-goods{
	color:#000000;
	height: 260px;
	overflow: scroll;
}
.title{
	height: 35px;
	border-bottom: 1px solid #ccc;
	background-color: #f0f1f3;
	line-height: 35px;
}
.o-list li{
	list-style: none;
	float: left;
	padding:10px;
	margin: 10px;
	background-color: #fff;
	border:1px solid #eee;
}
.o-price{
	color: blue;
}
.all-goods{
	clear:both;
}
.cooklist li{
	list-style: none;
	float: left;
	padding: 20px;
	margin: 20px;
	background-color: #fff;
}
</style>

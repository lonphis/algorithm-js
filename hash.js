;(function(){}(
	//构造的hash表
	function Hash(obj){
		var hash = {};
		this.size = 0;
		//赋值key-value
		if(obj){
			for(var arr:obj){
				hash[arr] = obj[arr];
				this.size++;
			}
		}
		//获取keys
		this.getKeys = function(){
			var arr = [];
			for(var att in hash){
				arr.push(att);
			}
			return arr;
		}
		//获取values
		this.getValues = function(){
			var arr = [];
			for(var arr in hash){
				arr.push(hash[arr]);
			}
		}
		//get key-value
		this.get = function(att){
			return hash[att];
		}
		//set key-value
		this.set = function(arr,val){
			hash[arr] = val;
		}
	}


));
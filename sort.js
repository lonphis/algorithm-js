/*
*  排序算法
*  @author lonphis
*  @date 2015.8.17
*/

/**
*插入排序
*/
function insertSort(arr){
	var i,j;
	var temp;
	for(i = 1; i< arr.length; i++){
		if(arr[i-1]> arr[i]){
			temp = arr[i];
			for(j = i-1; j>= 0; j--){
				arr[j+1] = arr[j];
			}
			arr[j+1] = temp;
		}
	}
	return arr;
}

/**
*shell交叉排序
*/
function shellSort(arr){
	var i,j;
	var temp, increment;
	var len = arr.length;
	do{
		increment = len/3 + 1;
		for(i = increment + 1; i < len; i++){
			if(arr[i - increment] > arr[i]){
				temp = arr[i];
				for(j = i - increment; j>0 && arr[j] > arr[j + increment]; j -= increment){
					arr[j+increment] = arr[j];
				}
				arr[j+increment] = temp;
			}
		
		}
	}while(increment>1);
}

/**
*冒泡排序,最坏(n-1)*n/2次比较，（n-1）*n/2次交换
*/
function bubbleSort(arr){
	var i, j;
	var temp;
	var status = true;
	for(i = 0; i< arr.length-1&&status; i++){
		status = false;//不需要交换，认为已经有序
		for(j= arr.length -1; j > i; j--){//可以从前到后，也可以从后向前
			if(arr[j] < arr[j-1]){
				//交换swap(i,i-1);
				temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
				status = true;
			}
		}
	}
}

/**
*快速排序
*/
function fastSort(arr){
	var low=0,high= arr.length-1;
	function partition(arr, low, high){
		//获取枢值
		var mid = low + Math.floor((high-low)/2);//关键
		if(arr[low]>arr[high])
			swap(arr, low, high);
		if(arr[mid]>arr[high])
			swap(arr, mid, high);
		if(arr[low]<arr[mid])
			swap(arr, low, mid);
		var temp = arr[low];
		//一次二分排序
		while(low<high){
			while((low < high) && (arr[high] >= temp))
				high--;
			arr[low] = arr[high];
			while((low < high) && (arr[low] <= temp))
				low++;
			arr[high] = arr[low];
		}
		arr[low] = temp;
		return low;
	}
	function qSort(arr, low, high){
		if(low < high){
			var pivot = partition(arr, low, high);
			qSort(arr, low, pivot-1);
			qSort(arr, pivot +1, high);
		}
	}
	function swap(arr, a, b){
		var temp;
		temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
	qSort(arr, low, high);
	return arr;
}
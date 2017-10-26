//淡入淡出的轮播图jQuery插件

jQuery.fn.extend({
	Opa: function(obj) {
		obj.$box = this;

		function Opa(obj) {
			//所在容器
			this.$box = obj.$box;
			this.width = obj.width;
			this.height = obj.height;

			//图片数组
			this.imgs = obj.imgs;

			//时间间隔
			this.timeSpace = obj.timeSpace;

			//按钮:
			this.btnObj = {
				width: obj.btnObj.width,
				height: obj.btnObj.height,
				bgColor: obj.btnObj.bgColor,
				highBgColor: obj.btnObj.highBgColor,
				isCircle: obj.btnObj.isCircle,
				left: obj.btnObj.left,
				top: obj.btnObj.top
			};

			this.myTimer = null;
			this.currOrd = 0; //1出，2进

			this.initUI();
			$(this.$box.selector + " img").eq(this.currOrd).css({
				"opacity": "1",
				"display": "block"
			}).siblings({
				"opacity": 0
			});
			this.initEvent();
			this.startGo();

		}

		//创建外观
		Opa.prototype.initUI = function() {
			for(let i = 0; i < this.imgs.length; i++) {
				this.$box.append('<img src="' + this.imgs[i] + '"/>');
			}

			let that = this;
			$(this.$box.selector + " img").css({
				"position": "absolute",
				"left": "0px",
				"top": "0px",
				"width": this.width,
				"height": this.height,
				"display": "none"

			});

			this.$box.append('<ul></ul>');
			$(this.$box.selector + " ul").css({
				"position": "absolute",
				"left": this.btnObj.left,
				"top": this.btnObj.top,
				"list-style": "none",
				"right": "50px",
				"bottom": "20px"
			});

			for(let i = 0; i < this.imgs.length; i++) {
				$(this.$box.selector + " ul").append("<li></li>");
			}

			$(this.$box.selector + " ul li").css({
				"float": "left",
				"margin-left": "10px",
				"width": that.btnObj.width + "px",
				"height": that.btnObj.height + "px",
				"background-color": that.btnObj.bgColor
			});
			$(this.$box.selector + " ul li:eq(0)").css({
				"background-color": that.btnObj.highBgColor
			});
			if(this.btnObj.isCircle) {
				$(this.$box.selector + " ul li").css({
					"border-radius": "50%"
				});
			}
		}

		Opa.prototype.initEvent = function() {
			let that = this;
			this.$box.mouseenter(function() {
				that.stopChange();
			});

			this.$box.mouseleave(function() {
				that.startGo();
			});

			$(this.$box.selector + " ul li").mouseenter(function() {
				that.goImg($(that.$box.selector + " ul li").index(this));
			});
		}

		//启动定时器
		Opa.prototype.startGo = function() {
			let that = this;
			this.myTimer = setInterval(function() {
				let currOutOrd = that.currOrd;
				that.currOrd++;
				if(that.currOrd > that.imgs.length - 1) {
					that.currOrd = 0;
				}
				//外观
				//淡入淡出的方式切换图片
				$(that.$box.selector + " img").eq(currOutOrd).fadeOut(1000);
				$(that.$box.selector + " img").eq(that.currOrd).fadeIn(1000);

				//改变按钮的外观
				$(that.$box.selector + " ul li").eq(that.currOrd).css({
					"backgroundColor": that.btnObj.highBgColor
				}).siblings().css({
					"backgroundColor": that.btnObj.bgColor
				});
			}, this.timeSpace);
		}

		//停止定时器
		Opa.prototype.stopChange = function() {
			window.clearInterval(this.myTimer);
		}

		//跳转到对应的图片上
		Opa.prototype.goImg = function(ord) {
			//数据处理
			let currOutOrd = this.currOrd;
			this.currOrd = ord;
			let that = this;
			//淡入淡出的方式切换图片
			$(that.$box.selector + " img").eq(currOutOrd).stop(true, true);
			$(that.$box.selector + " img").eq(currOutOrd).fadeOut(1000);
			$(that.$box.selector + " img").eq(that.currOrd).fadeIn(1000);

			//改变按钮的外观
			$(that.$box.selector + " ul li").eq(that.currOrd).css({
				"backgroundColor": that.btnObj.highBgColor
			}).siblings().css({
				"backgroundColor": that.btnObj.bgColor
			});
		}
		new Opa(obj);
	}
})
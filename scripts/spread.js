/*
 *	author: junrey
 *	date: 16/5/19
 *	descrition: 基于rem布局，rem基准值 = device-width/10
*/

function Spread(json) {
	this.imgWidth =  json.imgWidth;
	this.imgRatio = json.imgRatio;
	this.cycleFinalWidth =  json.cycleFinalWidth;
	this.coverObj = document.getElementById(json.cover);
	this.belowObj = document.getElementById(json.below);
	this.containerObj = document.getElementById(json.container);
	this.resetObj = document.getElementById(json.reset);

	this.init = function () {
		this.imgStartTop =  - this.divStartTop; 
		this.imgStartLeft =  - this.divStartLeft - this.imgWidth / 2;
		//  此公式主要解决圆通过改变width、height来transition时候的非圆心放大的问题
		this.divStopTop =  this.divStartTop - this.imgWidth / this.imgRatio - ( (this.cycleFinalWidth - 10) / 5 * 3 );
		this.divStopLeft =  this.divStartLeft - this.cycleFinalWidth / 2;	
		this.imgStopTop =  this.imgStartTop + this.imgWidth / this.imgRatio + ( (this.cycleFinalWidth - 10) / 5 * 3 ); 
		this.imgStopLeft =  this.imgStartLeft + this.cycleFinalWidth / 2;

		this.coverObj.style.width = '0rem';
		this.coverObj.style.height = '0rem';
		this.coverObj.style.marginTop = this.divStartTop + 'rem';
		this.coverObj.style.marginLeft = this.divStartLeft + 'rem';

		this.belowObj.style.marginTop = this.imgStartTop + 'rem';
		this.belowObj.style.marginLeft = this.imgStartLeft + 'rem';					
	}

	this.SpreadShow =  function () {
		this.coverObj.style.transition = 'all ' + json.time + 's linear 0s';
		this.coverObj.style.visibility = 'visible';
		this.coverObj.style.width = this.cycleFinalWidth + 'rem';
		this.coverObj.style.height = this.cycleFinalWidth + 'rem';
		this.coverObj.style.marginTop = this.divStopTop + 'rem';
		this.coverObj.style.marginLeft = this.divStopLeft + 'rem';

		this.belowObj.style.transition = 'all ' + json.time + 's linear 0s';
		this.belowObj.style.visibility = 'visible';
		this.belowObj.style.marginTop = this.imgStopTop + 'rem';
		this.belowObj.style.marginLeft = this.imgStopLeft + 'rem';	
	}
	this.SpreadHide =  function () {
		this.coverObj.style.overflow = 'hidden';
		this.coverObj.style.visibility = 'hidden';
		this.coverObj.style.width = '0rem';
		this.coverObj.style.height = '0rem';
		this.coverObj.style.marginTop = this.divStartTop + 'rem';
		this.coverObj.style.marginLeft = this.divStartLeft + 'rem';

		this.belowObj.style.visibility = 'hidden';
		this.belowObj.style.marginTop = this.imgStartTop + 'rem';
		this.belowObj.style.marginLeft = this.imgStartLeft + 'rem';		
		var that = this;
		setTimeout(function () {
			that.coverObj.style.transition = '';
			that.belowObj.style.transition = '';
		},json.time*1000);
	}
	this.ImgShow = function () {
		this.coverObj.style.overflow = 'visible';
	}
	this.Run = function () {
		var timeFlag = true;
		var showFlage = false;		
		var that = this;
		this.containerObj.addEventListener('touchstart', function(e) {
			if (timeFlag == true && showFlage == false) {
				that.divStartTop = e.touches[0].clientY / rem - json.containerTop;
				that.divStartLeft = e.touches[0].clientX / rem - that.imgWidth / 2 - json.containerLeft;
				that.init();
				setTimeout(function () {
					that.SpreadShow();
					showFlage = true;
				},100);	
				setTimeout(function () {
					that.ImgShow();
				},1100);	
				timeFlag = false;
				setTimeout(function (e) {
					timeFlag = true;
				}, 1100);		
			}
		});
		this.resetObj.addEventListener('click', function (e) {
			if (timeFlag == true) {
				that.SpreadHide();
				showFlage = false;
				timeFlag = false;
				setTimeout(function (e) {
					timeFlag = true;
				}, 1100);
			}			
		});
	}
}

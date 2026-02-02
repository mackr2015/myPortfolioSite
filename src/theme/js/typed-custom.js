$(function(){

	let typedTitle = new Typed(".typedTitle h1", {
	  strings: ["Mack Raicevic ^100 por^300tfolio site ^400"],
	  typeSpeed: 30,
	  // showCursor: false,
	  onStringTyped: () => {
	    return $('.typedTitle').find('.typed-cursor').remove();
	  },
	  onComplete: (self) => {
	  	firstTx();
	  }
	});

	let firstTx = () => {
		new Typed(".firstTx p", {
		  strings: ["Welcome to my portfolio site.^500 Feel free to look aro^500und,^500 click things,^50 inquire... ^800"],
		  typeSpeed: 30,
		  onStringTyped: () => {
	    	return $('.firstTx').find('.typed-cursor').remove();
	  	},
		  onComplete: (self) => {

		  	secondTx();
		  }
		});
	}

	let secondTx = () => {
		new Typed(".secondTx p", {
		  strings: ["If you need me, ^600 I'll be just an email away."],
		  typeSpeed: 20,
		  onComplete: () => {
		  	showScrollBtn();
		  }
		  // onStringTyped: function() {
	   //  	return $('.secondTx').find('.typed-cursor').remove();
	  	// }
		});
	}
	let showScrollBtn = () => {
		return $('.btn-scroll.animate a').animate({
			opacity: 1,
			bottom: 0
			}, 800, function(){
				// callback
		});
	}


}); // end for jQuery

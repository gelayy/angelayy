let process = {
	menu:function(){
		let content = <ul>
			<center><h1><a href='#' onClick={process.page1}><button>Get Started</button></a></h1></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<font color="pink"><h1>Spongebob</h1></font><br/> <img src="img/1.png" height="400" width="400"></img><br/>
				
				
				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page2}><button>next</button></a>
				
<h3>
SPONGEBOB SQUAREPANTS is a cute sea sponge , but he is drawn to resemble to a kitchen sponge,<br/>
being rectangular and bright yellow with a darkbrown outline, he is wider near the top and <br/>
gets skinnier going further down.<br/>
			</h3></center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<font color="pink"><h1>Patrick</h1></font><br/> <img src="img/2.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page1}><button>prev</button></a>======
				<a href='#' onClick={process.page3}><button>next</button></a><br/>
				<h3>
				PATRICK STAR is well known for  his dim-witted, naïve, and lazy nature.<br/>
				 He wants to spend time being happy and laying around his rock and lacks common sense often <br/>
				 means that he is incapable of doing things right.<br/>
				</h3>
		</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<font color="pink"><h1>Squidward</h1></font><br/> <img src="img/3.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page2}><button>prev</button></a>======
				<a href='#' onClick={process.page4}><button>next</button></a><br/>
					<h3>
					SQUIDWARD TENTACLES is arrogant, self-centered, grumpy, sarcastic, snobby, bad tempered,<br/>
					 and easily annoyed. He views the world in such a negative aspect that he rarely seen greeting<br/>
					  anyone with smile. He loathes his job at the Crusty Crab, and while this doesn’t interfere with his ability <br/>
					   to perform it well, it doesn’t mean he can’t get over his dislike with the one’s he work with.<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Mr. Crabs</h1></font><br/> <img src="img/4.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page3}><button>prev</button></a>======
				<a href='#' onClick={process.page5}><button>next</button></a><br/>
					<h3>
					MR. EUGENE KRABS is extremely greedy and miserly, often being portrayed as baing just as bad as. <br/>
					If not worse than Plankton. His only interest is to have money, and he could not care less for anybody, <br/>
					including his customers, employees, family, or even himself. He frequently associates his customers and products <br/>
					with money, with lines such as "That's me money walking out the door!" or "The money is always right."<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Sandy</h1></font><br/> <img src="img/5.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page4}><button>prev</button></a>======
				<a href='#' onClick={process.page6}><button>next</button></a><br/>
				<h3>
				SANDY spoke with a heavy Southern accent, as she isfrom Texas and uses typical<br/>
				 Southern slang words and phrases. She is very fond of her  homeland and its culture.<br/>
				  Sandy has been shownto be very proud of herself and almost vain. Sandy is one of the most<br/>
				   intelligentand level headed character.<br/>
				</h3>
				
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Garry</h1></font><br/> <img src="img/6.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page5}><button>prev</button></a>======
				<a href='#' onClick={process.page7}><button>next</button></a><br/>
				
				<h3>
GARY is known for his characteristic "meow"— in contrast to the barking of the sea worms,<br/>
 suggesting that snails like Gary are equivalent to cats and that worms are equivalent to dogs.<br/>
  He is Spongebob favorite pet.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Pearl</h1></font><br/> <img src="img/7.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page6}><button>prev</button></a>======
				<a href='#' onClick={process.page8}><button>next</button></a><br/>

				<h3>
PEARL KRABS is the daughter of Mr. Krabs.  Pearl shares a close bond with<br/>
 Mr. Krabs but gets angry when he is cheap. Mr. Krabs loves Pearl very much <br/>
 as well and while he doesnt like her bratty attitude, he is somewhat proud of<br/>
  her demanding money for a favor from him.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Plankton</h1></font><br/> <img src="img/8.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page7}><button>prev</button></a>======
				<a href='#' onClick={process.page9}><button>next</button></a><br/>
				
				<h3>
SHELDON PLANKTON also known as PLANKTON is, as his name suggests, a tiny dark green-colored plankton who can fit<br/>
 in the palm of ones hand. He has stubby appendages and one yellow eye with a red pupil. He has two long, skinny <br/>
 antennae with small green spikes sticking out along them. He also has one black eyebrow.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Karen</h1></font><br/> <img src="img/9.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page8}><button>prev</button></a>======
				<a href='#' onClick={process.page10}><button>next</button></a><br/>
				<h3>
KAREN is Plankton’s computer wife. Karens wall form is a large, dark blue<br/>
 monitor with a black screen. Her neon green facial features (usually a waving line)<br/>
  are projected on the screen. To the left of the screen is a silver keyboard with an <br/>
  oval-shaped green button on the top and nine pink keys on the bottom. There are three silver<br/>
   tubes on the right side. There is a silver control panel connected to the bottom of her screen.<br/>
    Although its appearance tends to change, it usually has a red lever, a circular analog clock, <br/>
    a green keypad, and several multicolored buttons on it.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<center>
				<font color="pink"><h1>Mrs. Puff</h1></font><br/> <img src="img/10.png" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page9}><button>prev</button></a>======
				<a href='#' onClick={process.page1}><button>next</button></a><br/>
				
				<h3>
Mrs. Puff is very paranoid and has had a history of mental instability. In "No Free Rides," <br/>
it is implied that she has had to move to another town and start a new life with a new name from the past.<br/>
 While this is mostly caused by SpongeBobs antics, she also suffers her pain of losing her husband who is now a <br/>
 reading lamp. She is also shown in New Student Starfish to have a strict Zero Tolerance Policy as she accuses SpongeBob <br/>
 of all Patricks disruptions and even ignores SpongeBob when he tries to explain anything and even doesnt tolerate fighting.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center><h1>
					angela rosario.....
				</h1></center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);
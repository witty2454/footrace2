// Starting array's 

const die1hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const die2hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const die3hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const die4hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const die5hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const die6hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Assigning variables to my HTML ID's

const d4hist1 = document.getElementById('d4hist1')
const d4hist2 = document.getElementById('d4hist2')
const d4hist3 = document.getElementById('d4hist3')
const d4hist4 = document.getElementById('d4hist4')
const d4hist5 = document.getElementById('d4hist5')
const d4hist6 = document.getElementById('d4hist6')
const d4hist7 = document.getElementById('d4hist7')
const d4hist8 = document.getElementById('d4hist8')
const d4hist9 = document.getElementById('d4hist9')
const d4hist10 = document.getElementById('d4hist10')

const d6hist1 = document.getElementById('d6hist1')
const d6hist2 = document.getElementById('d6hist2')
const d6hist3 = document.getElementById('d6hist3')
const d6hist4 = document.getElementById('d6hist4')
const d6hist5 = document.getElementById('d6hist5')
const d6hist6 = document.getElementById('d6hist6')
const d6hist7 = document.getElementById('d6hist7')
const d6hist8 = document.getElementById('d6hist8')
const d6hist9 = document.getElementById('d6hist9')
const d6hist10 = document.getElementById('d6hist10')

const d8hist1 = document.getElementById('d8hist1')
const d8hist2 = document.getElementById('d8hist2')
const d8hist3 = document.getElementById('d8hist3')
const d8hist4 = document.getElementById('d8hist4')
const d8hist5 = document.getElementById('d8hist5')
const d8hist6 = document.getElementById('d8hist6')
const d8hist7 = document.getElementById('d8hist7')
const d8hist8 = document.getElementById('d8hist8')
const d8hist9 = document.getElementById('d8hist9')
const d8hist10 = document.getElementById('d8hist10')

const d10hist1 = document.getElementById('d10hist1')
const d10hist2 = document.getElementById('d10hist2')
const d10hist3 = document.getElementById('d10hist3')
const d10hist4 = document.getElementById('d10hist4')
const d10hist5 = document.getElementById('d10hist5')
const d10hist6 = document.getElementById('d10hist6')
const d10hist7 = document.getElementById('d10hist7')
const d10hist8 = document.getElementById('d10hist8')
const d10hist9 = document.getElementById('d10hist9')
const d10hist10 = document.getElementById('d10hist10')

const d12hist1 = document.getElementById('d12hist1')
const d12hist2 = document.getElementById('d12hist2')
const d12hist3 = document.getElementById('d12hist3')
const d12hist4 = document.getElementById('d12hist4')
const d12hist5 = document.getElementById('d12hist5')
const d12hist6 = document.getElementById('d12hist6')
const d12hist7 = document.getElementById('d12hist7')
const d12hist8 = document.getElementById('d12hist8')
const d12hist9 = document.getElementById('d12hist9')
const d12hist10 = document.getElementById('d12hist10')

const d20hist1 = document.getElementById('d20hist1')
const d20hist2 = document.getElementById('d20hist2')
const d20hist3 = document.getElementById('d20hist3')
const d20hist4 = document.getElementById('d20hist4')
const d20hist5 = document.getElementById('d20hist5')
const d20hist6 = document.getElementById('d20hist6')
const d20hist7 = document.getElementById('d20hist7')
const d20hist8 = document.getElementById('d20hist8')
const d20hist9 = document.getElementById('d20hist9')
const d20hist10 = document.getElementById('d20hist10')

const die1 = document.getElementById("die1")
const die2 = document.getElementById('die2')
const die3 = document.getElementById("die3")
const die4 = document.getElementById("die4")
const die5 = document.getElementById("die5")
const die6 = document.getElementById("die6")

// D4-D20 roller functions

function rollDice1(){
	const d1 = Math.floor(Math.random() * 4) + 1
	die1.innerHTML = d1
	die1hist.unshift(d1)
	d4hist1.innerHTML = die1hist[0]
	d4hist2.innerHTML = die1hist[1]
	d4hist3.innerHTML = die1hist[2]
	d4hist4.innerHTML = die1hist[3]
	d4hist5.innerHTML = die1hist[4]
	d4hist6.innerHTML = die1hist[5]
	d4hist7.innerHTML = die1hist[6]
	d4hist8.innerHTML = die1hist[7]
	d4hist9.innerHTML = die1hist[8]
	d4hist10.innerHTML = die1hist[9]
}
function rollDice2(){
	const d2 = Math.floor(Math.random() * 6) + 1
	die2.innerHTML = d2
	die2hist.unshift(d2)
	d6hist1.innerHTML = die2hist[0]
	d6hist2.innerHTML = die2hist[1]
	d6hist3.innerHTML = die2hist[2]
	d6hist4.innerHTML = die2hist[3]
	d6hist5.innerHTML = die2hist[4]
	d6hist6.innerHTML = die2hist[5]
	d6hist7.innerHTML = die2hist[6]
	d6hist8.innerHTML = die2hist[7]
	d6hist9.innerHTML = die2hist[8]
	d6hist10.innerHTML = die2hist[9]
}
function rollDice3(){
	const d3 = Math.floor(Math.random() * 8) + 1
	die3.innerHTML = d3
	die3hist.unshift(d3)
	d8hist1.innerHTML = die3hist[0]
	d8hist2.innerHTML = die3hist[1]
	d8hist3.innerHTML = die3hist[2]
	d8hist4.innerHTML = die3hist[3]
	d8hist5.innerHTML = die3hist[4]
	d8hist6.innerHTML = die3hist[5]
	d8hist7.innerHTML = die3hist[6]
	d8hist8.innerHTML = die3hist[7]
	d8hist9.innerHTML = die3hist[8]
	d8hist10.innerHTML = die3hist[9]
}
function rollDice4(){
	const d4 = Math.floor(Math.random() * 10) + 1
	die4.innerHTML = d4
	die4hist.unshift(d4)
	d10hist1.innerHTML = die4hist[0]
	d10hist2.innerHTML = die4hist[1]
	d10hist3.innerHTML = die4hist[2]
	d10hist4.innerHTML = die4hist[3]
	d10hist5.innerHTML = die4hist[4]
	d10hist6.innerHTML = die4hist[5]
	d10hist7.innerHTML = die4hist[6]
	d10hist8.innerHTML = die4hist[7]
	d10hist9.innerHTML = die4hist[8]
	d10hist10.innerHTML = die4hist[9]
}
function rollDice5(){
	const d5 = Math.floor(Math.random() * 12) + 1
	die5.innerHTML = d5
	die5hist.unshift(d5)
	d12hist1.innerHTML = die5hist[0]
	d12hist2.innerHTML = die5hist[1]
	d12hist3.innerHTML = die5hist[2]
	d12hist4.innerHTML = die5hist[3]
	d12hist5.innerHTML = die5hist[4]
	d12hist6.innerHTML = die5hist[5]
	d12hist7.innerHTML = die5hist[6]
	d12hist8.innerHTML = die5hist[7]
	d12hist9.innerHTML = die5hist[8]
	d12hist10.innerHTML = die5hist[9]
}
function rollDice6(){
	const d6 = Math.floor(Math.random() * 20) + 1
	die6.innerHTML = d6
	die6hist.unshift(d6)
	d20hist1.innerHTML = die6hist[0]
	d20hist2.innerHTML = die6hist[1]
	d20hist3.innerHTML = die6hist[2]
	d20hist4.innerHTML = die6hist[3]
	d20hist5.innerHTML = die6hist[4]
	d20hist6.innerHTML = die6hist[5]
	d20hist7.innerHTML = die6hist[6]
	d20hist8.innerHTML = die6hist[7]
	d20hist9.innerHTML = die6hist[8]
	d20hist10.innerHTML = die6hist[9]
}

// Roll history clear functions

function clearHist1(){
	d4hist1.innerHTML = 0
	d4hist2.innerHTML = 0
	d4hist3.innerHTML = 0
	d4hist4.innerHTML = 0
	d4hist5.innerHTML = 0
	d4hist6.innerHTML = 0
	d4hist7.innerHTML = 0
	d4hist8.innerHTML = 0
	d4hist9.innerHTML = 0
	d4hist10.innerHTML = 0
	die1hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

function clearHist2(){
	d6hist1.innerHTML = 0
	d6hist2.innerHTML = 0
	d6hist3.innerHTML = 0
	d6hist4.innerHTML = 0
	d6hist5.innerHTML = 0
	d6hist6.innerHTML = 0
	d6hist7.innerHTML = 0
	d6hist8.innerHTML = 0
	d6hist9.innerHTML = 0
	d6hist10.innerHTML = 0
	die2hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

function clearHist3(){
	d8hist1.innerHTML = 0
	d8hist2.innerHTML = 0
	d8hist3.innerHTML = 0
	d8hist4.innerHTML = 0
	d8hist5.innerHTML = 0
	d8hist6.innerHTML = 0
	d8hist7.innerHTML = 0
	d8hist8.innerHTML = 0
	d8hist9.innerHTML = 0
	d8hist10.innerHTML = 0
	die3hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

function clearHist4(){
	d10hist1.innerHTML = 0
	d10hist2.innerHTML = 0
	d10hist3.innerHTML = 0
	d10hist4.innerHTML = 0
	d10hist5.innerHTML = 0
	d10hist6.innerHTML = 0
	d10hist7.innerHTML = 0
	d10hist8.innerHTML = 0
	d10hist9.innerHTML = 0
	d10hist10.innerHTML = 0
	die4hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

function clearHist5(){
	d12hist1.innerHTML = 0
	d12hist2.innerHTML = 0
	d12hist3.innerHTML = 0
	d12hist4.innerHTML = 0
	d12hist5.innerHTML = 0
	d12hist6.innerHTML = 0
	d12hist7.innerHTML = 0
	d12hist8.innerHTML = 0
	d12hist9.innerHTML = 0
	d12hist10.innerHTML = 0
	die5hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

function clearHist6(){
	d20hist1.innerHTML = 0
	d20hist2.innerHTML = 0
	d20hist3.innerHTML = 0
	d20hist4.innerHTML = 0
	d20hist5.innerHTML = 0
	d20hist6.innerHTML = 0
	d20hist7.innerHTML = 0
	d20hist8.innerHTML = 0
	d20hist9.innerHTML = 0
	d20hist10.innerHTML = 0
	die6hist.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0)
}

var button_1 = document.getElementById('button_1')
var button_2 = document.getElementById('button_2')
var button_3 = document.getElementById('button_3')
var button_4 = document.getElementById('button_4')
var button_5 = document.getElementById('button_5')
var button_6 = document.getElementById('button_6')
var button_7 = document.getElementById('button_7')
var button_8 = document.getElementById('button_8')
var button_9 = document.getElementById('button_9')
var button_0 = document.getElementById('button_0')
var button_add = document.getElementById('button_add')
var button_sub = document.getElementById('button_sub')
var button_mul = document.getElementById('button_mul')
var button_div = document.getElementById('button_div')
var button_eql = document.getElementById('button_eql')
var button_dot = document.getElementById('button_dot')

var output = document.getElementById('output_id')
var button_cls = document.getElementById('button_cls')

var number = ''
var prev_number = null
var operator = null

function click_button_cls(){
	number = ''
	prev_number = null
	output.innerHTML = 0
}

function click_button_eql(){
	number = Number(number)
	if(prev_number){
		if(operator == '+'){
			prev_number += number
		}
		else if(operator == '-'){
			prev_number -= number
		}
		else if(operator == '*'){
			prev_number *= number
		}
		else if(operator == '/'){
			prev_number /= number
		}
		output.innerHTML = prev_number
	}
	else{
		window.alert('Please enter the operator and operands first!')
		click_button_cls()
	}
}

function click_button_add(){
	number = Number(number)
	if(!prev_number){
		prev_number = number
		output.innerHTML = 0
	}
	else{
		if(operator == '+'){
			prev_number += number
		}
		else if(operator == '-'){
			prev_number -= number
		}
		else if(operator == '*'){
			prev_number *= number
		}
		else if(operator == '/'){
			prev_number /= number
		}
		output.innerHTML = prev_number
	}
	number = ''
	operator = '+'
}

function click_button_sub(){
	number = Number(number)
	if(!prev_number){
		prev_number = number
		output.innerHTML = 0
	}
	else{
		if(operator == '+'){
			prev_number += number
		}
		else if(operator == '-'){
			prev_number -= number
		}
		else if(operator == '*'){
			prev_number *= number
		}
		else if(operator == '/'){
			prev_number /= number
		}
		output.innerHTML = prev_number
	}
	number = ''
	operator = '-'
}

function click_button_mul(){
	number = Number(number)
	if(!prev_number){
		prev_number = number
		output.innerHTML = 0
	}
	else{
		if(operator == '+'){
			prev_number += number
		}
		else if(operator == '-'){
			prev_number -= number
		}
		else if(operator == '*'){
			prev_number *= number
		}
		else if(operator == '/'){
			prev_number /= number
		}
		output.innerHTML = prev_number
	}
	number = ''
	operator = '*'
}

function click_button_div(){
	number = Number(number)
	if(!prev_number){
		prev_number = number
		output.innerHTML = 0
	}
	else{
		if(operator == '+'){
			prev_number += number
		}
		else if(operator == '-'){
			prev_number -= number
		}
		else if(operator == '*'){
			prev_number *= number
		}
		else if(operator == '/'){
			prev_number /= number
		}
		output.innerHTML = prev_number
	}
	number = ''
	operator = '/'
}

function click_button_1(){
	number += 1
	output.innerHTML = number
}

function click_button_2(){
	number += 2
	output.innerHTML = number
}

function click_button_3(){
	number += 3
	output.innerHTML = number
}

function click_button_4(){
	number += 4
	output.innerHTML = number
}

function click_button_5(){
	number += 5
	output.innerHTML = number
}

function click_button_6(){
	number += 6
	output.innerHTML = number
}

function click_button_7(){
	number += 7
	output.innerHTML = number
}

function click_button_8(){
	number += 8
	output.innerHTML = number
}

function click_button_9(){
	number += 9
	output.innerHTML = number
}

function click_button_0(){
	number += 0
	output.innerHTML = number
}

function click_button_dot(){
	number += '.'
	output.innerHTML = number
}

button_1.onclick = click_button_1
button_2.onclick = click_button_2
button_3.onclick = click_button_3
button_4.onclick = click_button_4
button_5.onclick = click_button_5
button_6.onclick = click_button_6
button_7.onclick = click_button_7
button_8.onclick = click_button_8
button_9.onclick = click_button_9
button_0.onclick = click_button_0

button_add.onclick = click_button_add
button_sub.onclick = click_button_sub
button_mul.onclick = click_button_mul
button_div.onclick = click_button_div

button_eql.onclick = click_button_eql
button_cls.onclick = click_button_cls
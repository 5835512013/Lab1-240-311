var mul = require('./mul.js')
var grade = require('./grade.js')
var volume = require('./volume.js')
var convert = require('./convert.js')
var year = require('./year.js')

var i = 1
let stdin = process.openStdin()
console.log(' Mutiply ')
console.log('Enter any value : ')

stdin.addListener('data', temp => {
	if (i == 1) {
		mul.muls(temp)
        console.log('\n_________________________________\n')
        console.log(' Grade ')
		console.log('Enter Your Score : ')
	} 

	else if (i == 2) {
		console.log('Your Grade is ' + grade.avg(temp))
		console.log('')
        console.log('\n_________________________________\n')
        console.log(' Calculate Volume ')
		console.log('Enter your width : ')
    }  
     
    else if (i == 3) {
        width = temp
        console.log('Enter your length : ')
    }

    else if (i == 4) {
        length = temp
        console.log('Enter your height : ')
    }

    else if (i == 5) {
        height = temp
        console.log('Volume of this box is ', volume.cal(width, length, height))
        console.log('\n_________________________________\n')
        console.log(' Convert Celcius to Farenheit ')
        console.log('Enter Celcius value : ')
    }

    else if (i == 6) {
        celcius = temp
        console.log('Result : ' + convert.convertF(temp))
        console.log('\n_________________________________\n')
        console.log(' Calculate BE to AD ')
		console.log('Enter year : ')
    }

    else if (i == 7) {
        age = temp
        console.log('Year in AD is : ' + year.calYear(temp))
        console.log('\n_________________________________\n')
    }   

	i++
})
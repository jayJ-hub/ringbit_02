input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(100, 100)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})

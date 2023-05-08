basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        control.waitMicros(1000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
        control.waitMicros(100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})

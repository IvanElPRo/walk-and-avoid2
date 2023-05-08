basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        control.waitMicros(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        control.waitMicros(100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})

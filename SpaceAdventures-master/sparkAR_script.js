// The following example uses ReactiveModule.rotation(w,x,y,z) to construct a rotation
// from a quaternion-based representation of it. The constructed rotation is used with
// AnimationModule.samplers.polyline to create a rotation animation that is expressed as a RotationSignal.

var SceneModule = require('Scene');
var AnimationModule = require('Animation');
var ReactiveModule = require('Reactive');
var FaceTracking = require('FaceTracking');
var Diagnostics = require('Diagnostics')

// Construct a Rotation object from a quaternion-based values.
function axisRotation(axis_x, axis_y, axis_z, angle_degrees) {
    var norm = Math.sqrt(axis_x*axis_x + axis_y*axis_y + axis_z*axis_z);
    axis_x /= norm;
    axis_y /= norm;
    axis_z /= norm;
    var angle_radians = angle_degrees * Math.PI / 180.0;
    var cos = Math.cos(angle_radians/2);
    var sin = Math.sin(angle_radians/2);
    return ReactiveModule.rotation(
        cos, axis_x*sin, axis_y*sin, axis_z*sin);
}

function revolution_creator(time){
    return AnimationModule.timeDriver({
        durationMilliseconds:time,
        loopCount:Infinity
    })
}

var year=10000;

var revolution_spaceGuru = revolution_creator(5000);
var revolution_mercury = revolution_creator(year*.2);
var revolution_venus = revolution_creator(year*.6);
var revolution_earth = revolution_creator(year);
var revolution_mars = revolution_creator(year*1.9);
var revolution_jupiter = revolution_creator(year*11.9);
var revolution_saturn = revolution_creator(year*29.5);
var revolution_uranus = revolution_creator(year*84);
var revolution_neptune= revolution_creator(year*164.8);



// // Create a rotation sampler using Rotation objects generated
// // by the previously-defined axisRotation() method.
var rotation_sampler = AnimationModule.samplers.polyline({
    keyframes: [
        axisRotation(0,1,0,0),
        axisRotation(0,1,0,45),
        axisRotation(0,1,0,90),
        axisRotation(0,1,0,135),
        axisRotation(0,1,0,180),
        axisRotation(0,1,0,210),
        axisRotation(0,1,0,240),
        axisRotation(0,1,0,270),
        axisRotation(0,1,0,300),
        axisRotation(0,1,0,330),
        axisRotation(0,1,0,360),
    ],
    knots: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
});

var spaceGuruDrift = AnimationModule.samplers.polyline({
    keyframes: [
        axisRotation(1,0,0,0),
        axisRotation(1,0,0,-2),
        axisRotation(1,0,0,0),
        axisRotation(1,0,0,2),
        axisRotation(1,0,0,0),
    ],
    knots: [0, 1, 2, 4, 6]
});

// // Start the animation
var rotation_spaceGuru = AnimationModule.animate(revolution_spaceGuru, spaceGuruDrift);
var rotation_mercury = AnimationModule.animate(revolution_mercury, rotation_sampler);
var rotation_venus = AnimationModule.animate(revolution_venus, rotation_sampler);
var rotation_earth = AnimationModule.animate(revolution_earth, rotation_sampler);
var rotation_mars = AnimationModule.animate(revolution_mars, rotation_sampler);
// var rotation_jupiter = AnimationModule.animate(revolution_jupiter, rotation_sampler);
// var rotation_saturn = AnimationModule.animate(revolution_saturn, rotation_sampler);
// var rotation_uranus = AnimationModule.animate(revolution_uranus, rotation_sampler);
// var rotation_neptune = AnimationModule.animate(revolution_neptune, rotation_sampler);
revolution_spaceGuru.start();
revolution_mercury.start();
revolution_venus.start();
revolution_earth.start();
// revolution_mars.start();
// revolution_jupiter.start();
// revolution_saturn.start();
// revolution_uranus.start();
// revolution_neptune.start();

// // Apply the rotation transform to a scene object.
var spaceGuru = SceneModule.root.find('spaceGuru');
var mercury = SceneModule.root.find('mercury');
var venus = SceneModule.root.find('venus');
var earth = SceneModule.root.find('earth');
// var mars = SceneModule.root.find('mars');
// var jupiter = SceneModule.root.find('jupiter');
// var saturn = SceneModule.root.find('saturn');
// var uranus = SceneModule.root.find('uranus');
// var neptune = SceneModule.root.find('neptune');

spaceGuru.transform.rotation = rotation_spaceGuru;
mercury.transform.rotation = rotation_mercury;
venus.transform.rotation = rotation_venus;
earth.transform.rotation = rotation_earth;
// mars.transform.rotation = rotation_mars;
// jupiter.transform.rotation = rotation_jupiter;
// saturn.transform.rotation = rotation_saturn;
// uranus.transform.rotation = rotation_uranus;
// neptune.transform.rotation = rotation_neptune;

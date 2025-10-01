'use strict';

console.log('=== MAPTY: WORKOUT TRACKING APPLICATION ===');

/*
In this project, we'll build a complete workout tracking app featuring:
1. Object-Oriented Programming with classes and inheritance
2. Interactive maps using the Leaflet.js library
3. Geolocation API for automatic user positioning
4. Form handling and data validation
5. Local storage for data persistence
6. Modern JavaScript ES6+ features

This hour focuses on the OOP foundation - the classes that will power our app!
*/

// section 2: classes + oop
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        // stores coordinates as array of lat and long
        this.coords = coords; // [lat, lng]
        // stores distance in kms
        this.distance = distance; // in km
        //stores duration in mins
        this.duration = duration; // in min
    }

    // generate workout description 
    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // generate description
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

// testing code so far

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout date:', testWorkout.date);

testWorkout.click();
testWorkout.click();
console.log('Click count:', testWorkout.clicks);

// section 3: inheritance with running and cycling classes
class Running extends Workout {
    type = 'running';
    
    constructor(coords, distance, duration, candence) {
        super(coords, distance, duration);
        this.cadence = this.cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// testing class hierarchy 

// create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);
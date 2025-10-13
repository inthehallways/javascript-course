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
    
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
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
console.log('=== INHERITANCE TESTING ===')
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

console.log('=== TESTING GEOLOCATION API ===');

// DOM elements
// main form elements
const form = document.querySelector('.form');
// container workout list
const containerWorkouts = document.querySelector('.workouts');
// input type
const inputType = document.querySelector('.form__input--type');
// input distance, duration, cadence, elevation
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        // get user's position when app starts
        console.log('App starting...');
        this._getPosition();

        // attach event handler for form submission
        form.addEventListener('submit', this._newWorkout.bind(this));
        
        // attach event handler for workout type change
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        if (navigator.geolocation) {
            console.log('🔍 Requesting user location...');
            navigator.geolocation.getCurrentPosition(
            this._loadMap.bind(this), 
            this._handleLocationError.bind(this),

            {
                timeout: 10000,
                enableHighAccuracy: true,
                maximumAge: 600000,
            }
            );
        } else {
            alert('❌ Geolocation is not supported by this browser');
        }
    }

    _handleLocationError(error) {
        console.error('Geolocation error:', error);

        let message = 'Could not get your position. ';

        switch (error.code) {
        case error.PERMISSION_DENIED:
            message +=
            'Location access was denied. Please enable location services and refresh the page.';
            break;
        case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
        default:
            message += 'An unknown error occurred.';
            break;
        }

        alert(`📍 ${message}`);
    }
    
    _loadMap(position) {
        const {latitude, longitude} = position.coords;
        console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

        // create coordinate array
        const coords = [latitude, longitude];

        // initialize map and center at user's location
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        // add open street map
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: 
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        // add a marker at user's location
        L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();
        
        // handling clicks on map
        this.#map.on('click', this._showForm.bind(this));

        console.log('🗺️ Map loaded successfully at user location!');
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        // turn on or display elevation
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        // turn off or hide the input cadence
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _hideForm() {
        inputDistance.value =
            inputDuration.value = 
            inputCadence.value = 
            inputElevation.value = 
            '';
        // add hiding animation
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);

    }

    _newWorkout(e) {
        // helper functions
        // validate input that they are actual numbers that make sense
        const validInputs = (...inputs) => 
            inputs.every(inp => Number.isFinite(inp));
        // validate numbers are positive
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        // prevent default form submission behavior
        e.preventDefault();

        console.log('Creating new workout...');

        // store or exact data
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        console.log(`Creating ${type} workout: `, { distance, duration, lat, lng });

        // handle running workout
        if (type === 'running') {
            const cadence = +inputCadence.value;

            // check if data is valid
            if (
                !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)
            )

            return alert('❌ Inputs have to be positive numbers!');

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        // handle cycling workout
        if (type === 'cycling') {
            const elevation = +inputElevation.value;

            // check if data is valid
            if (
                !validInputs(distance, duration, elevation) || !allPositive(distance, duration)
            )

            return alert('❌ Inputs have to be positive numbers!');


            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        console.log('Workout object created:', workout);

        // add new workout to workout array
        this.#workouts.push(workout);

        console.log('Total workouts:', this.#workouts.length);
        console.log('All workouts:', this.#workouts);

        // render workout on map as marker
        this._renderWorkoutMarker(workout);

        // render workout on list
        this._renderWorkout(workout);

        // hide form + clear input fields
        this._hideForm();

        console.log('Workout creation complete!');
    }

    _renderWorkoutMarker(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${workout.type === 'running' ? '🏃‍♀️' : '🚴‍♀️'} </span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱︎</span> 
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
        `;

        if (workout.type === 'running')
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
            </li>
            `;

        if (workout.type === 'cycling')
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🏔️</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
            </li>
            `;

        form.insertAdjacentHTML('afterend', html);    
    }

    _renderWorkout(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(
                `${workout.type === 'running' ? '🏃‍♀️' : '🚴‍♀️'} ${workout.description}`
            )
            .openPopup();
    }
}

const app = new App();
console.log('App working succesfully after Hour 3!');
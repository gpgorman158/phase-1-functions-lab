function distanceFromHqInBlocks(dist1) {
    if (dist1 > 42){
        return dist1 - 42;
    }
    else
        return 42 - dist1;
}

function distanceFromHqInFeet(dist1) {
    let feet = distanceFromHqInBlocks(dist1);
    return feet * 264;
}

console.log(distanceFromHqInFeet(41));
console.log(distanceFromHqInBlocks(41));

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264;
    }
    else 
        return (destination - start) * 264;
}

console.log(distanceTravelledInFeet(10,8));

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    }
    else if (feet > 400 && feet <= 2000){
        return (feet - 400) * .02;
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else 
        return 'cannot travel that far';
}

console.log(calculatesFarePrice(52, 48));

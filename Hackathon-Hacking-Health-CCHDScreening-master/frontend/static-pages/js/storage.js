function initStorage() {
    if(localStorage.length <= 3){
        var foodList = [];
        foodList.push(new Food('Egg McMuffin', 100, 'snack'));
        foodList.push(new Food('Hashbrown', 200, 'snack'));
        foodList.push(new Food('Tea', 30, 'snack'));
        Lockr.set('foods', foodList);
        var goalList = [];
        goalList.push(new Goal('Run 10 km Today', 10, 1, 5));
        goalList.push(new Goal('Run 5 km', 5, 1, 4));
        goalList.push(new Goal('Eat 1500 calories Today', 1500, 2, getTotalCalories()));
        goalList.push(new Goal('Run total 100 km this week', 10, 1, 5));
        goalList.push(new Goal('Run 10 km Today', 10, 1, 5, true));
        goalList.push(new Goal('Run 5 km', 10, 1, 5, true));
        goalList.push(new Goal('Eat 1500 calories Today', 1500, 2, getTotalCalories(), true));
        goalList.push(new Goal('Run total 100 km this week', 10, 1, 5, true));
        Lockr.set('goals', goalList);
        var runList = [];
        runList.push();
        Lockr.set('runs', runList);
        Lockr.set('futureruns', runList);
    }
    
    
}

function Run(location, distance, laps, dest, date, time){
    this.location = location;
    this.distance = distance;
    this.laps = laps;
    this.dest = dest;
    this.date = date;
    this.time = time;
}

function Food(name, cal, type){
    this.name = name;
    this.cal = cal;
    this.type = type;
}
function addFood(name, cal, type){
    var newFood = new Food(name, cal, type);
    var foodList = Lockr.get('foods');
    foodList.push(newFood);
    Lockr.set('foods', foodList);
     
}

function addGoal(name, target, type){
    var newGoal = new Goal(name, target, type);
    var goalList = Lockr.get('goals');
    goalList.push(newGoal);
    Lockr.set('goals', goalList);
     
}

function addRun(runobj){
    var runlist = Lockr.get("runs");
    runlist.push(runobj);
    Lockr.set("runs", runlist)
}

function addFutureRun(runobj){
    var runlist = Lockr.get("futureruns");
    runlist.push(runobj);
    Lockr.set("futureruns", runlist)
}

function getTotalCalories(){
   var foodList = Lockr.get('foods');
   var sum = 0;
   for (var item in foodList) {
       sum += foodList[item].cal;
   }
   return sum;
}
function Goal(name, val, type, currentVal, isComplete){
    this.name = name;
    this.goalVal = val;
    this.type = type;
    if(currentVal === undefined){
        this.currentVal = 0;
    }
    else{
        this.currentVal = currentVal; 
    }
    if(isComplete === undefined){
        this.isComplete = false;
    }
    else{
        this.isComplete = isComplete;
    }
}
initStorage();

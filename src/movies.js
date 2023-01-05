// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let Arr = moviesArray.map(function(element)
    {
        return element.director;
    })

    return Arr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let Arr = moviesArray.filter(element => {
        if(element.director == "Steven Spielberg")
        {
            for(let i = 0; i < element.genre.length ; i++)
            {
                if(element.genre[i] == "Drama")
                {
                    return element;
                }
            }
           
        }
    })

  
    return Arr.length;
}   

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
     let Arr = moviesArray.reduce((total,element,index) => {
        if(element.hasOwnProperty('score'))
        {
           return (total + element.score);
        }
        else{
            return total;
        } 

    },0)
  
    if(Arr == 0 || Arr == null || Arr == undefined)
    {
        return 0;
    }
    let number = (Arr/moviesArray.length).toFixed(2);
    return parseFloat(number); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let Arr = moviesArray.filter(element => {
            for(let i = 0; i < element.genre.length ; i++)
            {
                if(element.genre[i] == "Drama")
                {
                    return element;
                }
            }
           
    })

    let number = Arr.reduce((total,element2) => {
        return total + element2.score;
    },0)
   let media = (number /Arr.length).toFixed(2);
 
   if(Arr == 0 || Arr == null || Arr == undefined)
   {
       return 0;
   }

    return parseFloat(media);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    mcopy = [...moviesArray];

   return mcopy.sort((a,b)=> (a.year > b.year ? 1 : -1))

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    mcopy = [...moviesArray];

    mcopy2 = mcopy.sort((a,b)=> (a.title > b.title ? 1 : -1))

 
    let n = [];
    if(mcopy2.length >20)
    {
        for(let i = 0; i < 20 ; i++)
        {
           n[i] = mcopy[i].title;
        }
        return n.sort();
    }else
    {
         for(let i = 0; i < mcopy2.length  ; i++)
        {
           n[i] = mcopy2[i].title;
        }
        return n.sort();
    }
    

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   /* test = mcopy.map((element) => {
        var timeParts = element.duration.split("h");
        let min = parseInt(timeParts[0]*60) +  parseInt(timeParts[1].substr(0,timeParts[1].length-3));
        element.duration = min;
        return element;
    }) */
    let newArray = [];
    for (let i = 0; i < moviesArray.length ; i++ )
    {   let min = 0;
        var timeParts = moviesArray[i].duration.split("h");
        if(timeParts[1] != "")
        {       
        min = parseInt(timeParts[0]*60) +  parseInt(timeParts[1].substr(0,timeParts[1].length-3));
         }
         else {
         min = parseInt(timeParts[0]*60);
         }
        newArray[i] = moviesArray[i];
        newArray[i].duration = min;
    }
 
    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
if(moviesArray.length == 0)
{
    return null;
}
 let newArray =  orderByYear(moviesArray);
let yearArray= [];
let sum = 0;
let count = 0;
 for(let i = 0 ; i < newArray.length ; i++)
 {  let y = newArray[i].year;
    sum = 0;
    count = 0;
    for(let a = 0 ; a < newArray.length;a ++)
    {
     if(y == newArray[a].year)
     {
        sum += newArray[a].score;
        count++;
     }
    }
    if(!yearArray.includes(y))
    {
        let arr = [newArray[i].year , (sum/count)];
         yearArray.push(arr);
    }
 }
console.log(yearArray)
 let final = [];
/*
 for(let c = 0; c < yearArray.length ; c++)
 {
        console.log(final.indexOf(yearArray[c]) !== -1);
        
     if(final.indexOf(yearArray[c]) !== -1)  
    {
        final.push(yearArray[c]);
    }
 }

*/
return yearArray;
}

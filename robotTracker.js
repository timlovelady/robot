
function sortList(data) {
    n = 0;
    e = 0;
    s = 0;
    w = 0;
x = 0; 
y = 0;
    // x = {
    //     pos: [],
    //     neg: []
    // }
    // y = {
    //     pos: [],
    //     neg: []
    // }   
    count = 1;
    iter = 0;
    while(iter < data.length) {        
        if(count === 1) {
            if(Math.sign(data[iter]) === 1) {
                x = x + data[iter];
                // x.pos.push(data[iter]);
                count++;
                iter++;
                console.log(`Count: ${count}`);               
            }else{
                console.log(`Pushing ${data[iter]} into X: neg`);
                x = x + data[iter];
                count++;
                iter++;
                console.log(`Count: ${count}`);
            }
        }
        if(count === 2) {
            if(Math.sign(data[iter]) === 1) {
                // y.pos.push(data[iter]);
                y = y + data[iter];
                count++;
                iter++;
                console.log(`Count: ${count}`);
            }else{
                y = y + data[iter];
                count++;
                iter++;
            }
        }
        if(count === 3) {
            if(Math.sign(data[iter]) === 1) {
                x = x + data[iter];
                count++;
                iter++;                    
            }else{
                x = x + data[iter];
                count++;
                iter++; 
            }
        }
        if(count === 4) {
            if(Math.sign(data[iter]) === 1) {
                y = y + data[iter];
                count = 1;
                iter++;
            }else{
                y = y + data[iter];
                count = 1;
                iter++;           
            }
        }
    }
    console.log(`(${x},${y})`)
}

var c = sortList([2, -5, -6, -1]);
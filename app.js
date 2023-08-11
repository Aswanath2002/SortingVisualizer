// let grid = document.querySelector('.grid')
// let timeout = 1000
// let squares = []
// let count = 0

// // for(let i=0;i<10;i++)
// // {
// //     let square = document.createElement('div')
// //     square.setAttribute('id',i)
// //     square.innerHTML = 10 - i
// //     grid.append(square)
// //     squares.push(square)
// // }

// async function bubble_sort(){
//     for(let i=0;i<9;i++)
//     {
//         for(let j=0;j<(squares.length - i -1);j++)
//         {
//             setTimeout(() => {
//                 if(parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML))
//                 {
//                     if(j > 0)
//                     {
//                         squares[j-1].classList.remove('exchange')
//                         squares[j].classList.remove('exchange')
//                     }
//                     squares[j].classList.add('exchange')
//                     squares[j+1].classList.add('exchange')
//                     setTimeout(() => {
//                         let temp = squares[j].innerHTML
//                         squares[j].innerHTML = squares[j+1].innerHTML
//                         squares[j+1].innerHTML = temp
//                     },1000)
//                     if(j === squares.length - i -2)
//                     {
//                         setTimeout(()=>{
//                             squares[j].classList.remove('exchange')
//                             squares[j+1].classList.remove('exchange')
//                         },2000)
//                     }
//                 }

//             },timeout)
//             timeout += 2000;
//         }
//     }
// }
// function processInput() {
//     const numberInput = document.getElementById("numberInput").value;
   
//     let square = document.createElement('div')
//     square.setAttribute('id',numberInput)
//     square.innerHTML = numberInput
//     grid.append(square)
//     squares.push(square)
    
//     alert("You entered: " + numberInput);
// }
// //bubble_sort();

let grid = document.querySelector('.grid')
let timeout = 1000
let squares = []
let count = 0

async function bubble_sort() {
    for (let i = 0; i < squares.length - 1; i++) {
        for (let j = 0; j < squares.length - i - 1; j++) {
            await new Promise(resolve => setTimeout(resolve, timeout));
            
            squares[j].classList.add('exchange')
            squares[j+1].classList.add('exchange')

            if (parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML)) {
                await new Promise(resolve => setTimeout(resolve, timeout));

                let temp = squares[j].innerHTML
                squares[j].innerHTML = squares[j+1].innerHTML
                squares[j+1].innerHTML = temp
            }

            squares[j].classList.remove('exchange')
            squares[j+1].classList.remove('exchange')
        }
    }
    await new Promise(resolve => setTimeout(resolve, timeout));
    alert("Array Sorted Successfully...");
}

function processInput() {
    const numberInput = document.getElementById("numberInput").value;

    let square = document.createElement('div')
    square.setAttribute('id', numberInput)
    square.innerHTML = numberInput
    grid.append(square)
    squares.push(square)

   // alert("You entered: " + numberInput);
}

function resetPage() {
    window.location.reload();
}



//bubble_sort();

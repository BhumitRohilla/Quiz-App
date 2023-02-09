const question=[
    {
        id:1,
        ques: "Which of the following functions is not performed using a mouse?",
        options:{
            a: "Turn on",
            b: "Hover",
            c: "Right click",
            d: "Drag and Drop"
        },
        ans: {
            op:"a",
            an:"Turn on"
        }
    },
    {
        id:2,
        ques: "Which organization defines Web standards?",
        options:{
            a:"Apple Inc.",
            b:"IBM Corporation",
            c:"World WIde Web Consortium",
            d:"Microsoft Corporation"
        },
        ans:{
            op:"c",
            an:"World Wide Web Consortium"
        }
    },
    {
        id:3,
        ques: "HTML is cosidered as",
        options:{
            a:"Programming language",
            b:"OOP language",
            c:"High level language",
            d:"Markup language"
        },
        ans:{
            op:"d",
            an:"Markup language"
        }
    },
    {
        id:4,
        ques: "If we want to set the style for just one element, which css selector will we use?",
        options:{
            a:"id",
            b:"text",
            c:"class",
            d:"name"
        },
        ans:{
            op:"a",
            an:"id"
        }
    },
    {
        id:5,
        ques: "A stricter type of HTML documnet is known as",
        options:{
            a:"DHTML",
            b:"XHTML",
            c:"XML",
            d:"HTML"
        },
        ans:{
            op:"b",
            an:"XHTML"
        }
    },
    {
        id:6,
        ques: "Which one of the following is an application of Stack Data Structure?",
        options:{
            a:"Managing function calls",
            b:"The stock span problem",
            c:"Arithmetic expression evaluation",
            d:"All of the above"
        },
        ans:{
            op:"d",
            an:"All of the above"
        }
    },
    {
        id:7,
        ques: "Which one of the following is an application of Queue Data Structure?",
        options:{
            a:"When a resource is shared among multiple consumers",
            b:"When data is transferred asynchronously between two process",
            c:"Load Balancing",
            d:"All of the above"
        },
        ans:{
            op:"d",
            an:"All of the above"
        }
    },
    {
        id:8,
        ques: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity",
        options:{
            a:"Insertion Sort",
            b:"Quick Sort",
            c:"Heap Sort",
            d:"Merge Sort"
        },
        ans:{
            op:"d",
            an:"Merge Sort"
        }
    },
    {
        id:9,
        ques: "A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies? (GATE CS 2005)",
        options:{
            a:"An array of 50 numbers",
            b:"An array of 100 numbers",
            c:"An array of 500 numbers",
            d:"A dynamically allocated array of 550 number"
        },
        ans:{
            op:"a",
            an:"An array of 50 numbers"
        }
    },
    {
        id:10,
        ques: "Suppose the numbers 7, 5, 1, 8, 3, 6, 0, 9, 4, 2 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree?",
        options:{
            a:"7 5 1 0 3 2 4 6 8 9",
            b:"0 2 4 3 1 6 5 9 8 7",
            c:"0 1 2 3 4 5 6 7 8 9",
            d:"9 8 6 4 2 3 0 1 5 7"
        },
        ans:{
            op:"c",
            an:"0 1 2 3 4 5 6 7 8 9"
        }
    },
]


var counter=0;  //number of question currently on
var score=0;    //Score of the player;
var btn=document.getElementById("btn");  //single button present in the site
var statusElement=document.getElementById("status"); //status div
var statustitle=document.createElement("h3"); //h3 tag inside the status div
{statustitle.style.textAlign="center";  //styling statustitle
statustitle.style.marginTop="0px";
statustitle.style.padding="0px";
statustitle.style.fontSize="20px";
}
var answerKey=document.createElement("ul");
{
    question.forEach(function(value){
        let listItem=document.createElement("li");
        listItem.innerHTML=value.ques+"  -  ";
        let spanElement=document.createElement("span");
        spanElement.innerHTML="    "+value.ans.an+"    ";
        spanElement.setAttribute("class","ansSpan");
        listItem.appendChild(spanElement);
        answerKey.appendChild(listItem);
    });
    let btn=document.createElement("button");
    btn.setAttribute("id","btn")
    btn.setAttribute("class","resetbtn");
    btn.innerHTML = "Reset";
    btn.addEventListener("click",reset);
    answerKey.appendChild(btn);
}
window.addEventListener('load',assignValue);

function reset(){
    history.go(0);
}

function assignValue(){
        if(counter<=10){
                var ques=document.getElementById("question");
                ques.innerHTML=question[counter].ques;
        
        ques=document.getElementById("la");
        ques.innerHTML=question[counter].options.a

        ques=document.getElementById("lb");
        ques.innerHTML=question[counter].options.b;
        
        ques=document.getElementById("lc");
        ques.innerHTML=question[counter].options.c;
        
        ques=document.getElementById("ld");
        ques.innerHTML=question[counter].options.d;
        console.info("Counter: "+counter);
        
    }else{
        var evt=new Event("completed");
        document.dispatchEvent("completed");
    }
    removeAllCheck();
}


function removeAllCheck(){
    var arr=["a","b","c","d"];
    arr.forEach(function(value){
        var el=document.getElementById(value);
        el.checked=false;
    });
}

console.log(score);
function checkFunction(){
    statusElement.appendChild(statustitle);

    var value=document.getElementById(question[counter].ans.op).checked;
    if(value){
        score++;
        statustitle.style.color="#548c6d";
        statustitle.innerHTML="Correct";
        statusElement.style.backgroundColor="#d4edda";
        
    }else{
        statustitle.style.color="#97535e"; 
        statustitle.innerHTML="In-Correct";
        statusElement.style.backgroundColor="#f7d6d9";
    }
    btn.removeEventListener("click",checkFunction);
    btn.innerHTML="NEXT";
    btn.removeAttribute("class","submit");
    btn.setAttribute("class","next");
    console.log(score);
    if(counter<(question.length-1)){
        btn.addEventListener("click",nextQuestion);
    }else{
        btn.addEventListener("click",thanksForPlayingGame);
    }
}


function thanksForPlayingGame(){
    var scoreH=document.getElementById("score");
    var ansTitle=document.getElementById("ScoreHeading");
    {var elementToDelete=document.getElementById("content");
    elementToDelete.remove();}
    ansTitle.style.visibility="visible";
    scoreH.innerHTML=`Score: ${score}`;
    
    var newElementToInsert=document.createElement("div");
    newElementToInsert.appendChild(answerKey);

    newElementToInsert.setAttribute("id","content");

    
    var parent=document.getElementById("content-body");
    parent.appendChild(newElementToInsert);

}

function nextQuestion(){
    counter++;
    assignValue();
    btn.removeEventListener("click",nextQuestion);
    btn.addEventListener("click",checkFunction);
    btn.setAttribute("class","submit");
    btn.innerHTML="Submit"
    statusElement.style.backgroundColor="white";
    statustitle.innerHTML="";
}

btn.addEventListener("click",checkFunction);

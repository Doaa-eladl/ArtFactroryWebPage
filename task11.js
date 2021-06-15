window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    if(window.innerWidth>300){
        header.classList.toggle("scrollingheader", window.scrollY >300);
    }
    if(window.innerWidth>300){
        var navlist_item1 = document.querySelector(".navlist_item1");
        navlist_item1.classList.toggle("heighlit",window.scrollY>300&&window.scrollY<850);
    }
    if(window.innerWidth>300){
        var navlist_item2 = document.querySelector(".navlist_item2");
        navlist_item2.classList.toggle("heighlit",window.scrollY>850&&window.scrollY<1400);
    }
    if(window.innerWidth>300){
        var navlist_item3 = document.querySelector(".navlist_item3");
        navlist_item3.classList.toggle("heighlit",window.scrollY>2300&&window.scrollY<2800);
    }
    if(window.innerWidth>300){
        var navlist_item4 = document.querySelector(".navlist_item4");
        navlist_item4.classList.toggle("heighlit",window.scrollY>3050&&window.scrollY<3700);
    }
})
var question1=document.querySelector('.question1')
var question2=document.querySelector('.question2')

var question3=document.querySelector('.question3')

var question4=document.querySelector('.question4')
var question5=document.querySelector('.question5')
var question6=document.querySelector('.question6')

var question1_detels=document.querySelector('.common_question');
var question2_detels=document.querySelector('.question2_detels')
var question3_detels=document.querySelector('.question3_detels')
var question4_detels=document.querySelector('.question4_detels')
var question5_detels=document.querySelector('.question5_detels')
var question6_detels=document.querySelector('.question6_detels')

//الكود ده شغال ما عدا انه يتحرك ببطيء لفوق عشان كانن display:none;بس الكود الي تحته من النت 

/*var question_answers=document.querySelector('.question_answers')*/

/*question1.addEventListener('click',()=>{
    question2_detels.classList.add('close')
    question3_detels.classList.add('close')
    question4_detels.classList.add('close')
    question5_detels.classList.add('close')
    question6_detels.classList.add('close')

    question1.classList.remove('is_closed')
    question1.classList.add('artical_detels')
    question1_detels.classList.remove('close')
    question1_detels.classList.add('open')

    question2.classList.add('is_closed')
    question3.classList.add('is_closed')
    question4.classList.add('is_closed')
    question5.classList.add('is_closed')
    question6.classList.add('is_closed')
})

question2.addEventListener('click',()=>{
    question1_detels.classList.add('close')
    question3_detels.classList.add('close')
    question4_detels.classList.add('close')
    question5_detels.classList.add('close')
    question6_detels.classList.add('close')

    question2.classList.remove('is_closed')
    question2.classList.add('artical_detels')
    question2_detels.classList.remove('close')
    question2_detels.classList.add('open')
    /*question2_detels.classList.add('transforming')

    question1.classList.add('is_closed')
    question3.classList.add('is_closed')
    question4.classList.add('is_closed')
    question5.classList.add('is_closed')
    question6.classList.add('is_closed')
})

question3.addEventListener('click',()=>{
    question1_detels.classList.add('close')
    question2_detels.classList.add('close')
    question4_detels.classList.add('close')
    question5_detels.classList.add('close')
    question6_detels.classList.add('close')

    question3.classList.remove('is_closed')
    question3.classList.add('artical_detels')
    question3_detels.classList.remove('close')
    question3_detels.classList.add('open')

    question1.classList.add('is_closed')
    question2.classList.add('is_closed')
    question4.classList.add('is_closed')
    question5.classList.add('is_closed')
    question6.classList.add('is_closed')
})

question4.addEventListener('click',()=>{
    question1_detels.classList.add('close')
    question2_detels.classList.add('close')
    question3_detels.classList.add('close')
    question5_detels.classList.add('close')
    question6_detels.classList.add('close')
    
    question4.classList.remove('is_closed')
    question4.classList.add('artical_detels')
    question4_detels.classList.remove('close')
    question4_detels.classList.add('open')

    question1.classList.add('is_closed')
    question2.classList.add('is_closed')
    question3.classList.add('is_closed')
    question5.classList.add('is_closed')
    question6.classList.add('is_closed')
})

question5.addEventListener('click',()=>{
    question1_detels.classList.add('close')
    question2_detels.classList.add('close')
    question3_detels.classList.add('close')
    question4_detels.classList.add('close')
    question6_detels.classList.add('close')
    
    question5.classList.remove('is_closed')
    question5.classList.add('artical_detels')
    question5_detels.classList.remove('close')
    question5_detels.classList.add('open')

    question1.classList.add('is_closed')
    question2.classList.add('is_closed')
    question3.classList.add('is_closed')
    question4.classList.add('is_closed')
    question6.classList.add('is_closed')
})

question6.addEventListener('click',()=>{
    question1_detels.classList.add('close')
    question2_detels.classList.add('close')
    question3_detels.classList.add('close')
    question4_detels.classList.add('close')
    question5_detels.classList.add('close')
    
    question6.classList.remove('is_closed')
    question6.classList.add('artical_detels')
    question6_detels.classList.remove('close')
    question6_detels.classList.add('open')

    question1.classList.add('is_closed')
    question2.classList.add('is_closed')
    question3.classList.add('is_closed')
    question4.classList.add('is_closed')
    question5.classList.add('is_closed')
})*/

var que=document.getElementsByClassName("question_answers")
var detels=document.getElementsByClassName("detels")

var i;
var j;
var len=que.length;
for(i=0;i<len;i++){
    que[i].addEventListener('click',function(){
        /*for(j=0;j<len;j++){
            if(j!==i){
            this==detels[j]
            console.log(detels[j])
            console.log(this)
            this.classList.toggle('close')
            }
        }
        this==que[i]*/
        this.classList.toggle('open');
        this.classList.toggle('artical_detels')
        question1.classList.add('is_closed')
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight +'px'
        }
    })
}

var span =document.getElementsByTagName('span')
var div =document.getElementsByTagName('div')

var servises=document.querySelectorAll('.servises')
/*var l=0
span[1].onclick = ()=>{
    l++
    for(var i of servises){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-360px";}
        if (l==2) {i.style.left = "-720px";}
        if (l==3) {i.style.left = "-1090px";}
        if (l>3) {l=3}

        console.log("done")
    }
}*/
var counter=document.querySelector(".counter")

var o= 365
span[0].onclick = ()=>{
    /*counter.style.justifyContent='flex-end';*/
    for(var i of servises){
        i.style.left = (k+o+365)+"px";
    }
    o =o+365;
}

var k= -365
span[1].onclick = ()=>{
   /* counter.style.justifyContent='flex-start';*/
    for(var i of servises){
        i.style.left = (k+o-365)+"px";
    }
    k =k-365;
}

/*span[0].onclick = ()=>{
counter.style.transform='translate(40%)';
counter.style.justifyContent='flex-end';
}

span[1].onclick = ()=>{
    counter.style.transform='translate(-40%)';
    counter.style.justifyContent='flex-start';
}*/

var button=document.querySelector('.hamburger')
var navlist=document.querySelector('ul')
var lastitem=navlist.lastElementChild
var buttonchildlist=document.querySelector("nav ul")

var span=document.querySelectorAll(".hamburger span")

console.log(span[0])
var list=buttonchildlist.children[4]

var nistedlist=document.querySelector('.drop_down_mum')
var nistedlistitems=document.querySelector('.drop_down')

button.addEventListener('click',function(){
    navlist.classList.toggle('hamburgermenu')
    nistedlist.classList.toggle("drop_down_mum")
    list.classList.toggle('arrowdown')
    span[0].classList.toggle("listopenright")
    span[1].classList.toggle("diably")
    span[2].classList.toggle("listopenleft")
})

nistedlist.addEventListener('click',function(){
    nistedlistitems.classList.toggle('nistlist')
    lastitem.classList.toggle("movedown")
})
















var t1=gsap.timeline();

t1.to(".text-loader",{
    opacity:1,
    duration:0.07,
    stagger:{
        each:0.14,
        repeat:1,
        yoyo:true 
    }
})
.to(".loader",{
    display:"none",
})

.to(".cntr-p",{
    onStart: function() {
        $(".cntr-p").scramble(3000, 60, "alphabet", true);

    }
},'a')

.to(".cntr-p2",{
    onStart: function() {
        $(".cntr-p2").scramble(3000, 60, "alphabet", true);

    }
},'a')
.to(".link1",{
    onStart: function() {
        $(".link1").scramble(3000, 60, "alphabet", true);

    }
},'a')

.to(".link2",{
    onStart: function() {
        $(".link2").scramble(3000, 60, "alphabet", true);

    }
},'a')


var t2= gsap.timeline({
    scrollTrigger:{
        trigger:"#one",
        pin:true,
        start:"50% 50%",
        end:"150% 50%",
        scrub:true,
    }
});
t2.to(".flex-content",{
    scale:0.8,
})

t2.to("#one-txt",{
    top:"50%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-1",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-1",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-2",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-2",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-3",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-3",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-4",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-4",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-5",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-5",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-6",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true,
    }
})
.to("#img-6",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-7",
        start:"0% 90%",
        end:"200% 90%",
        markers:false,
        scrub:true,
    
    }
})
.to("#img-7",{
    backgroundSize:"48%",
})

gsap.timeline({
    scrollTrigger:{
        trigger:".last",
        start:"0% 90%",
        end:"200% 90%",
        markers:false,
        scrub:true,
    
    }
})
.to(".flex-content",{
    scale:1.2,
})

document.querySelector("#img-1").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#dfd2be";
})

document.querySelector("#img-1").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})

document.querySelector("#img-2").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#1a354e";
})

document.querySelector("#img-2").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})

document.querySelector("#img-3").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#CC0000";
})

document.querySelector("#img-3").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})

document.querySelector("#img-4").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#006666";
})

document.querySelector("#img-4").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})

document.querySelector("#img-5").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#b05d22";
})

document.querySelector("#img-5").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})
document.querySelector("#img-6").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#281069";
})

document.querySelector("#img-6").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})
document.querySelector("#img-7").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#262626";
})

document.querySelector("#img-7").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000";
})



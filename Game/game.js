AFRAME.registerComponent("game", {
    schema: {
        elementId: { type: "string", default: "#coin1" }
    },
    
    init:function (){
        var dur = 120
        const timerE1=document.querySelector("#timer")
        this.startTimer(dur,timerE1)
    },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    startTimer:function(dur , timerE1){
        setInterval(()=>{
            if (dur>0){
                minutes = parseInt(dur/60)
                seconds = parseInt(dur%60)
                if (minutes<10){
                    minutes = "0"+minutes
                }
                if(seconds < 10){
                    seconds = "0"+seconds
                }
                timerE1.setAttribute("text" , {
                    value:minutes+":"+seconds
                })
                dur = dur-1
            }
        },1000)
    },

    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                console.log(elementId + "collision")
            
                this.updateScore()
                this.updateTargets()

            }
            
            else if (elementId.includes("#fish")) { consolge.log(elementId + "collision") }
            
        })
    },
    updateScore: function(score){
        const element = document.querySelector("#score")
        var count = element.getAttribute("text").value()
        let currentScore = parseInt(count)
        currentScore = currentScore - 1
        element.setAttribute("text",{
            value:currentScore
        })
    },
    updateTargets: function(){
        const element = document.querySelector("#targets")
        var count = element.getAttribute("text").value()
        let currentTargets = parseInt(count)
        currentTargets = currentTargets - 1
        element.setAttribute("text",{
            value:currentTargets
        })
    }
})

[(new (require("discord.js")).Client()),["login",["token"]],["on",["ready",()=>console.log("Online")]],["on",["debug",(debu)=>console.log(debu)]],["on",["message",(msg)=>{if(msg.content.startsWith("/ban")){msg.reply("Fuck")}}]]].map((e,curInd,arr)=>curInd>0?arr[0][e[0]](...e[1]):e)

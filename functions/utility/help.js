module.exports = {
name: "help",
aliases: ['hell' , 'hel' , 'commands' , 'command' , 'modules'],
code: ` $thumbnail[$getservervar[pfp]]
$color[$getservervar[hex]]
$title[Command list;$getservervar[pfp]]
$footer[Requested by $username#$discriminator[$authorid];$getservervar[pfp]]
$description[
\`\`\`
$username[$clientid] is designed for keeping your server members entertained and well moderated we provide 24/7 uptime only down when theres an outage or update\`\`\`

<a:owner:892585861215031317>**Server owner**
\`channelc,clonec,joinvc,delc\`


<:banh:892585861240205342>**Moderation**
\`ban,lock,vl,vul,giverole,removerole,temprole,setmute,mute,unmute,tempmute,tempban,slowmode,purge,dehoist,nick,add-rr,create-rr,addemoji\`


<:726309878913826867:893580399756836864>**Music**
\`playskip,pause,resume,stop,nowplaying,loop,shuffle,stay,shuffleskip,pruning,skip,queue,clearqueue,qloop,seek,remove,volume,maxvolume,filter,log-on,log-on-reaction,log-off,playlist,playlist-add,playlist-remove,playlist-play,play,soundcloud,join,rejoin,disconnect,user,user-disable\`

<:849663309733167104:893580401623326760>**Utility**
\`avatar,prefix,help,invite,uptime,ping,support\`

<:742748868990599209:893580400054653059>Fun
\`say,clap,emojify,meme,doot,8ball,mock,ds,sudo,owofy,advice,ss,whoasked\`
]`}

module.exports = {
    name: "joinvc",
    code: `
$if[$authorid==$ownerid]
Joined! <#$mentionedchannels[1]>
    $suppressErrors[mention a voice channel]
    $joinVC[$mentionedchannels[1]]
 
$else
this ks restricted to server owners
$endif` 
}


module.exports = {
name: "delc", 
code: `
$if[$authorid==$ownerid]
<:742748869330337832:893580400117547058> I've deleted all the mentioned channels!
$deleteChannels[$mentionedChannels[1]]
$suppressErrors[mention a channel?]
$else
this is only for server owners
$endif
` 
}
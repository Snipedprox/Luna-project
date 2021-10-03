module.exports = {
name: "clonec",
code: `
$if[$authorid==$ownerid]
successfully cloned <#$mentionedchannels[1]>
$cloneChannel[$mentionedChannels[1]]
$suppressErrors[mention a channel]
$else
this is only for server owners
$endif`
}

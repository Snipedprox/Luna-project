module.exports = {
name: "channelc",
code: `
$if[$authorid==$ownerid]
$botTyping[1s]
Channel name: \`$message[1]\` 
       Channel type: \`$message[2]\`  
       Channel category id: \`$message[3]\`

       $createChannel[$message[1];$message[2];no;$message[3]]
       $argsCheck[1>;First is name then channel type like
       stage
       voice
       text
       and then category ID]
       $suppressErrors
   $else
restricted to server owners
$endif
       ` 
}
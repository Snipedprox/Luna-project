module.exports = ({
 name: "kick",
 code: `
$kick[$mentioned[1]]
$description[$username[$mentioned[1]] has been Kicked <:742748869330337832:893580400117547058>]
$color[BLUE]
$sendDM[$mentioned[1];<:743109174614949958:893580400243388436> You were kicked from the server: $serverName[$guildID]] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher or same as me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't Kick yourself :3 ]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[kick;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`kick\` permissions to use this command}]
$suppressErrors[x Something Error | Try Again Later]`
 })
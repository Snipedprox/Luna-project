module.exports = ({
  name: "advice",
  code: `$title[Random advice]
$description[$jsonRequest[https://api.adviceslip.com/advice;slip.advice;e]]
$thumbnail[$getservervar[pfp]]
  $color[$getUserVar[embedColor]]`
})
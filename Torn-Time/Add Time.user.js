// ==UserScript==
// @name         Add Time
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Add TCT to all pages
// @author       Red Rabbit [2203961]
// @match        https://www.torn.com/*
// @grant        GM_addStyle
// Original Code idea came from Mist3rM [2154120] & hannes3510 [2150804].  Special Thanks to xedx helping me fix that damn font size and figure out how to use Github
// ==/UserScript==

GM_addStyle(`
	.add-time-display {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        color: red;
	}
`)

const format = (date) => date.toLocaleTimeString('en-US', {timeZone: 'EST'})
const display = (date = new Date()) => `EST Time: ${format(date)}`


const target = document.createElement('time')
target.classList.add('header-bottom-text', 'add-time-display')

document.querySelector('.header-wrapper-bottom').appendChild(target)

const update = () => target.textContent = display()

setInterval(update, 1000)
update()

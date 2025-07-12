---
title: "Introducing MinionAH"
description: "Introducing MinionAH Newsroom — The Auction House for Hypixel Skyblock Minions"
isPublic: true
type: "Release"
pubDate: "July 20, 2023"
heroImage: "/assets/images/minionah/banner.png"
---

## Table of Contents

## 🏦 MinionAH

MinionAH is a seamless and easy-to-use way to purchase and sell Hypixel SkyBlock minions with a
beautiful interface. It's designed with the user and user experience at its core and is perfect for
_any_ SkyBlock player.

MinionAH makes it easy to sell minions and view information about minions at a glance.

![MinionAH](/assets/images/minionah/showcase1.png) As shown, it's easy to find minions on MinionAH.
But it even gets better with a beautiful hover animation. Clicking the card or the user will open
the seller's Discord profile. Clicking the minion will open the wiki page of the minion for even
more information.

![Minion Animation](/assets/images/minionah/showcase2.gif) It's also super easy to search for
minions on MinionAH.

![Minion Animation](/assets/images/minionah/showcase3.gif) After logging in with Discord, you can
access your profile page where you can sell a minion, see a list of your minions, and delete minions
you sell or no longer want to sell.

![Minion Animation](/assets/images/minionah/showcase4.gif) Creating minions is very easy too. You
simply select a minion from the minion dropdown or just start typing the name of the minion. Next,
select the tier and fill in how many minions you're selling and the price (for each). Finally, just
click Create and you're done!

![Minion Animation](/assets/images/minionah/showcase5.gif)

### 💰 Purchasing Minions

The way you buy minions is essentially the same as you would if using Discord servers to sell your
minions. You simply DM the user that sells the minion and discuss when you both can get online and
trade. You can click on the user to start a chat with them.

### 🤔 Why MinionAH

I made MinionAH because (at the time of writing) you can't sell Minions in the in-game Auction
House.  
Instead, you need to join various Discord servers and post "ad" messages in the right channels or
the in-game chat. In both cases, the message also "disappears" since so many others are doing the
same thing.  
That's why I thought, "There must surely be a better way to tackle this problem." So I decided to
work on MinionAH.

### 🌐 Community

<a href="https://discord.minionah.com" target="_blank">
  <img src="https://discordapp.com/api/guilds/1133219625497284638/widget.png?style=banner3" class="max-w-[320px] mx-auto max-h-[140px]" alt="Discord Server" />
</a>

## 🔒 Privacy and Data

Here is all the data stored with MinionAH (more technical stuff incoming):​

- IP: Whether you are logged in or not, we store your IP on the server (not the database) solely for
  rate-limiting purposes. You can make 60 requests per minute (searching/filtering, loading more
  minions, logging in, basically every time you do something on the website even loading the
  website, is a request). This is to prevent any malicious users from spamming requests and
  overloading the database and hosting provider (in which case we would need to pay more). Again,
  since this is not stored in the database but the server itself, not even I can see your IP.​

If you log in via Discord, I get "access" to your Discord account, but the "access" is very limited
(this is how every "Sign in via Discord" app/bot/website works).  
Discord sends an extremely limited authentication token for your account so we can request the
necessary info about your account for the website. Here is what info we request from Discord and
store in the database:

- Discord ID
- Username
- Avatar
- Banner
- Accent color
- Locale (not doing anything with it, but might add localization support later)
- Date/time of last logged-in (not data that Discord gives me, but needed so that I can delete
  accounts that were last logged in an X amount of days/months ago, not sure how long I should make
  this yet).

## 📝 Notes

- Check out the original post on the
  <a href="https://hypixel.net/threads/introducing-minionah-%E2%80%94-the-auction-house-for-minions.5434258/" target="_blank">Hypixel
  Forums</a>.

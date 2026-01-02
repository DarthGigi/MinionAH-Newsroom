---
title: "The Minecraft Update"
description:
  "The Minecraft update is a major update for the website that changes the authentication system,
  redesigns elements, and adds QOL features. Read more about it here."
isPublic: true
type: "Update"
project: "MinionAH"
pubDate: "December 17, 2023"
heroImage: "/assets/images/minecraft-update/banner.png"
classes: "object-contain!"
---

<script lang="ts">
  import BeforeAfter from "$lib/components/BeforeAfter.svelte";
</script>

After we published [The Microsoft Update](/microsoft-update), we received a lot of feedback from the
community. The major concern was the authentication system, and rightfully so. We should've never
used Microsoft to authenticate your Minecraft account due to major security concerns.

We've listened to your feedback and have decided to change the authentication system to use
<a href="https://mc-auth.com/" target="_blank">mc-auth</a> instead.

## Table of Contents

## Login System

We tried hard to find a solution for the authentication system that would be easy to use and secure.
We couldn't just use email and password, since we need to know your Minecraft info like your
username. That's why we decided to use Microsoft to authenticate your Minecraft account in the first
place.

So we found a solution that would be easy to use and secure, and that is
<a href="https://mc-auth/" target="_blank">mc-auth</a>.

Here is how it works:

1. You join the Minecraft server `mc-auth.com` with your Minecraft account.
2. Then you will get a code.
3. Enter that code on the website.
4. You're now logged in mc-auth!

Once you're logged in mc-auth, you can authenticate third-party applications, like MinionAH, with
mc-auth. This will allow MinionAH to get your public Minecraft info like your username and UUID
provided by mc-auth.  
No sensitive information is gathered by MinionAH or mc-auth.

Once you authenticate MinionAH with mc-auth, you will be redirected back to MinionAH and you will be
asked to set a password for your account.  
This password will be used to log in to MinionAH in the future, so you don't have to go through the
whole process again.

<div class="border-border rounded-lg border p-4">
  <img src="/assets/images/minecraft-update/loginPage.png" class="mx-auto max-h-192" alt="Login page" />
</div>

## Redesigned Elements

We have redesigned a lot of elements on the website to be easier to use in development, more
accessible, and more consistent with the rest of the website.

For example, we have redesigned the minion creation form on the profile page:

<BeforeAfter before="/assets/images/chat-update/profileAfter.png" after="/assets/images/minecraft-update/profileAfter.png" />
<span class="not-prose mx-auto block text-center text-xs">Click on the before/after buttons to see the changes.</span>
The tier selector is now disabled by default until you select a minion. Once you do, the tier selector will be updated to have a maximum amount of tiers, 11 or 12, depending on the minion.

We have also redesigned the alerts you get when creating/deleting a minion and added more
information to them when needed.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto h-full! max-h-96" alt="profile page">
    <source src="/assets/videos/minecraft-update/profilePage.mp4" type="video/mp4" />
  </video>
</div>

## Raw Craft Cost

We have saved the best for last. We added a new feature that will calculate the raw craft cost of
the minion. This feature has been heavily inspired by the
<a href="https://github.com/NotEnoughUpdates/NotEnoughUpdates" target="_blank">NotEnoughUpdates
(NEU)</a> mod.

<div class="border-border rounded-lg border p-4">
  <img src="/assets/images/minecraft-update/craftCost.png" class="mx-auto max-h-96" alt="craft cost" />
</div>

Unfortunately, since the project is hosted on Vercel's Hobby plan, we can only have cron jobs that
run every 24 hours. This means that the craft cost will be updated every 24 hours as the minions'
costs that we use to display are stored in our database and not directly retrieved from the API.

## RCC API

<div class="bg-yellow-950 rounded-lg p-4">
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline mr-1"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><span class="font-bold">This documentation is outdated.</span>
  </div>

<span class="block">Please use the new documentation at
<a href="https://minionah.com/api/craftcost/docs" target="_blank">minionah.com/api/craftcost/docs</a>.</span>

</div>

Unfortunately, NEU does not provide a public API for this feature, so we had to create our own. We
have created a public API that will calculate the raw craft cost of (almost) any Hypixel SkyBlock
item. This API is available for everyone to use in their own projects.

To use the API, simply send a `GET` request to `https://minionah.com/api/craftcost`.  
The API will return a JSON object with the raw craft cost of every item in the game:

```json
{
	"AATROX_BADPHONE": 6870.401506624104,
	"AATROX_BATPHONE": 5344
	// ...etc
}
```

If you need a specific item, you can send a `GET` request to
`https://minionah.com/api/craftcost/{item}`.

Replace `{item}` with the internal item name, you can find a list of all the internal item names at
<a href="https://github.com/kr45732/skyblock-plus-data/blob/main/InternalNameMappings.json" target="_blank">kr45732/skyblock-plus-data/InternalNameMappings.json</a>.

The API will return a JSON object with the raw craft cost of the specified item:

```json
{
	"WOOD_AXE": 126.02217354265548
}
```

With a status code of `200`, and a status message of `OK`.

If you provide an invalid item name, the API will return the following JSON object:

```json
{
	"error": "Item not found",
	"message": "The item 'anInvalidItemName' was not found. Please check 'InternalNameMappings.json' for a list of all Hypixel Skyblock items.",
	"item": "anInvalidItemName",
	"url": "https://raw.githubusercontent.com/kr45732/skyblock-plus-data/main/InternalNameMappings.json"
}
```

With a status code of `404`, and a status message of `Item not found`.

In addition, if you want to get a list of the raw craft cost of every minion, you can provide
`minions` as the `{item}` value.

The API will return the following JSON object:

```json
{
	"ACACIA_GENERATOR_1": 2126.0221735426553,
	"ACACIA_GENERATOR_2": 6126.022173542655
	// ...etc
}
```

If an internal error occurs, the API will return the following JSON object:

```json
{
	"error": "Something went wrong"
}
```

With a status code of `500`, and a status message of `Internal Server Error`.

- All responses have the `Content-Type` header set to `application/json`.
- The API is rate-limited to 60 requests per minute.

### Additional Information

- The API tries to take as many items into calculation as possible, the prices are retrieved from
  either the bazaar or the NPC sell price if it is not available on the bazaar. If the item is not
  available on the bazaar or the NPC sell price, the API will return `0` as the price.
  - Even though the API tries to take as many items into calculation as possible, it is not possible
    to take every item into calculation due to different factors (like some not having a price, not
    obtainable, etc). So the prices might not be 100% accurate.

- The API used for the Bazaar prices is
  <a href="https://api.slothpixel.me/api/skyblock/bazaar" target="_blank">Slothpixel</a>. Every time
  a request is made to the API, the API will request Slothpixel to get the latest Bazaar prices.
  This means that the API will always have the latest Bazaar prices.

- Not all items have a recipe to craft or are sold by an NPC. For example, the Snow and Flower
  Minions can't be obtained by crafting or by an NPC. Some items are only purchasable with Bits. In
  cases like these where calculating the price is not possible, the API will return `0` as the
  price.

- As always, the code is open-source and available at
  <a href="https://github.com/DarthGigi/MinionAH" target="_blank">github.com/DarthGigi/MinionAH</a>.

#### Credits

We'd like to massively thank
<a href="https://hypixel.net/members/bigoofinator.5321577/" target="_blank">BigOofinator</a> for
<a href="https://hypixel.net/threads/making-neus-raw-craft-cost-calculator-in-js-ts.5557073/post-39159669" target="_blank">helping
us with the calculation code</a>

## Notes

- The full list of changes can be found in the
  <a href="https://github.com/DarthGigi/MinionAH/blob/main/CHANGELOG.md#122---2023-12-17" target="_blank">CHANGELOG.md
  file</a>.

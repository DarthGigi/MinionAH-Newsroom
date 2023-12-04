---
title: "The Minecraft Update"
description: "The Minecraft update is a major update for the website that changes the login system, introduces performance updates and some under-the-hood changes. Read more about it here."
isPublic: true
type: "Update"
pubDate: "December 3, 2023"
heroImage: "/assets/images/minecraft-update/banner.png"
---

The general idea of this update has been on our minds since the beginning of the website. At the time, we didn't know how to implement it, luckily, after spending a few months learning a new thing or two, we were able to implement it. The Minecraft update is a major update for the website that changes the login system.

## Table of Contents

## Login System

If you used MinionAH before this update, you might remember that you had to log in with your Discord account. While it worked perfectly fine, it just didn't feel right. Why are you logging in with your Discord account for a website that has nothing to do with Discord?  

That's not the only problem we had, the fact that you can create as many new Discord accounts as you want may cause some problems in the future. For example, if you get banned from the website, you can just create a new Discord account and continue using the website.  

With the Microsoft/Minecraft login system, you can't easily do that, as each Minecraft account costs money.  
There are also some other benefits to this new login system, for example, we no longer use Discord profile pictures and usernames.

On the login page, we try to explain the login process as detailed as possible, to ensure that you know what's happening with your data.
<div class="bg-neutral-950 rounded-lg p-4">
  <img src="/assets/images/minecraft-update/loginPage.png" class="max-h-[48rem] !w-auto mx-auto" alt="Login page"/>
</div>

## Profile

After you log in, you will be redirected to your profile page. You will be greeted with a much cleaner and more beautiful profile overview.
<div class="bg-neutral-950 rounded-lg p-4">
  <video muted={true} loop={true} autoPlay={true} class="max-h-96 !w-auto mx-auto" alt="Profile page">
    <source src="/assets/videos/minecraft-update/profilePage.mp4" type="video/mp4"/>
  </video>
</div>

Your Minecraft profile will be displayed in 3D so you can rotate the camera and see your Minecraft character from all angles. If you have a cape active, it will also be displayed on your character.

## Minion Cards

Speaking of 3D stuff, we also added 3D to the minion cards when you hover over them. You can rotate the minion and user heads to see them from all angles.
<div class="bg-neutral-950 rounded-lg p-4">
  <video muted={true} loop={true} autoPlay={true} class="max-h-96 !w-auto mx-auto" alt="Minion card">
    <source src="/assets/videos/minecraft-update/minionCard.mp4" type="video/mp4"/>
  </video>
</div>

## Mobile

We also made some changes to the mobile version of the website. The navigation bar is now at the bottom of the screen, which makes it easier to reach with your thumb.

<div class="bg-neutral-950 rounded-lg p-4">
  <img src="/assets/images/minecraft-update/mobileView.png" class="max-h-[48rem] !w-auto mx-auto" alt="Mobile redesign"/>
</div>

## Performance

We also made some performance improvements to the website. The website should now load faster and use less data. For example, almost all the images on the website are now stored as base64 strings in our database, instead of relying on <a href="https://mc-heads.net" target="_blank">mc-heads.net</a> to get them.

## Notes

- The full list of changes can be found in the <a href="https://github.com/DarthGigi/MinionAH/blob/main/CHANGELOG.md#100---2023-12-04" target="_blank">CHANGELOG.md file</a>.
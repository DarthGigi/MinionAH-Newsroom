---
title: "The Chat Update"
description:
  "The chat update is a major update for the website that adds a chat system, new features, and
  updates. Read more about it here."
isPublic: true
type: "Update"
pubDate: "November 14, 2023"
heroImage: "/assets/images/chat-update/banner.png"
---

<script lang="ts">
  import BeforeAfter from "$lib/components/BeforeAfter.svelte";
</script>

I've been working on this update for a while now, and I'm happy to announce that it's finally here!
This update adds a chat system, new features, and updates to the website.

It's been a while since I've made any changes to the website due to school and having other projects
to work on. I also did not have the motivation to work on the chat system because I was not sure if
I could make it. It's not perfect, as in, I had higher standards for it, but it's good enough for
the time being.

Without further ado, let's get into the changes.

> Tip: Click on the before/after buttons to see the changes.

## Table of Contents

## Chat System

The chat system is the main feature of this update. It allows you to chat with other users on the
website. You can also send messages to offline users, and they will be shown a notification badge
when they log in.

<div class="border-border rounded-lg border p-4">
  <video
    muted={true}
    loop={true}
    autoPlay={true}
    class="mx-auto max-h-96"
    alt="chat overview">
    <source src="/assets/videos/chat-update/unreadAlert.mp4" type="video/mp4" />
  </video>
</div>

This notification guides you the user to the chat overview page where you can see all your chats and
unread messages.

<div class="border-border rounded-lg border p-4">
  <video
    muted={true}
    loop={true}
    autoPlay={true}
    class="mx-auto max-h-96"
    alt="chat overview">
    <source src="/assets/videos/chat-update/chatOverview.mp4" type="video/mp4" />
  </video>
</div>

This chat system eliminates the need to use Discord to contact sellers and the common issue of
Discord not loading the seller's profile.

However, if you still wish to contact someone via Discord, their username and ID are still shown.

As you can see, the chat interface is heavily inspired by Apple iMessage.

<div class="border-border rounded-lg border p-4">
  <img src="/assets/images/chat-update/chat.png" class="mx-auto max-h-96" alt="chat" />
</div>

Please keep in mind that:

1. This is <u>**_not_**</u> a live chat system. You will have to refresh the page to see new
   messages.
   - This is unlikely to change in the future as the chat system is not meant to be a live chat
     system, it's to discuss the details of the auction. And the chance of the user being online at
     the same time as you is very low.
2. Messages are <u>**_not_**</u> encrypted nor end-to-end encrypted, they're stored as plain text.
   Please don't send any sensitive information through the chat system.
   - This may change in the future, but it's not a priority at the moment.

## Redesigned Cards

I've redesigned some components of the cards, one being the pricing. Now when you hover over the
card, it will calculate the total amount based on the price of each minion and the amount of minions
the seller has set if any.

The minion and user hover effects have also been redesigned. It's now a bit more useful where it
shows some more information about the minion and user with a beautiful tooltip.

<BeforeAfter before="/assets/videos/chat-update/cardOld.mp4"
after="/assets/videos/chat-update/cardNew.mp4" />

The Mithril icon now also displays a tooltip for those who don't know what the icon stands for.

<div class="border-border rounded-lg border p-4 select-none">
  <img
    src="/assets/images/chat-update/mithrilTooltip.png"
    class="mx-auto max-h-96"
    alt="Mithril Tooltip"
  />
</div>

## Redesigned Profile Page

The components and the layout of them on the profile page have also been redesigned. The components
have been rewritten from the ground up to be more useful, performant, and accessible than before,
including the Tier selector and all inputs throughout the website.

For example, the minion selector now has a search bar to make it easier to find the minion you're
looking for.

<BeforeAfter before="/assets/videos/chat-update/minionSelectOld.mp4"
after="/assets/videos/chat-update/minionSelectNew.mp4" />

The minion auction card has also given a face-lift. It now has a more modern and consistent look.

<BeforeAfter before="/assets/images/chat-update/profileBefore.png"
after="/assets/images/chat-update/profileAfter.png" />

The dialogs have also been redesigned to be more consistent with the rest of the website and provide
more information.

<BeforeAfter before="/assets/images/chat-update/profileDeleteFormBefore.png"
after="/assets/images/chat-update/profileDeleteFormAfter.png" />

---

<BeforeAfter before="/assets/images/chat-update/profileDeleteFormSuccessBefore.png"
after="/assets/images/chat-update/profileDeleteFormSuccessAfter.png" class="mt-3" />

## Other Changes

There have been other minor changes to the website, these aren't as important as the ones above, but
they're still worth mentioning. Most of them are new buttons and animations.

The new animations result in a smoother experience and make the website feel more alive.

The share button has a new animation.

<div class="border-border rounded-lg border p-4">
  <video
    muted={true}
    loop={true}
    autoPlay={true}
    class="mx-auto max-h-96"
    alt="chat overview">
    <source src="/assets/videos/chat-update/shareButtonAnimation.mp4" type="video/mp4" />
  </video>
</div>

The load more button has also been redesigned.

<BeforeAfter before="/assets/videos/chat-update/loadMoreButtonBefore.mp4"
after="/assets/videos/chat-update/loadMoreButtonAfter.mp4" />

## Notes

- The domain has been changed from https://minions.mrgigi.me to https://minionah.com

- A CHANGELOG.md file has been added to the repository. It will be updated with every update to the
  website. The format is based on
  <a href="https://keepachangelog.com/en/1.1.0/" target="_blank">Keep a Changelog</a> and adheres to
  <a href="https://semver.org/spec/v2.0.0.html" target="_blank">Semantic Versioning</a> guidelines.

- The full list of changes can be found in the
  <a href="https://github.com/DarthGigi/MinionAH/blob/main/CHANGELOG.md#100---2023-11-13" target="_blank">CHANGELOG.md
  file</a>.

- From now on, I will no longer be pushing directly to the `main` branch. Instead, I will be pushing
  it to the `dev` branch and then merging it into the `main` branch. This is to prevent any issues
  from happening in the future and to be able to thoroughly test the changes before they go live.

- Any future updates, announcements, changes, etc. will be posted on this website and the link will
  be posted in the <a href="https://discord.minionah.com" target="_blank">Discord server</a> and the
  <a href="https://hypixel.net/members/mrgigi.4185364/#recent-content" target="_blank">Hypixel
  Forums</a>.

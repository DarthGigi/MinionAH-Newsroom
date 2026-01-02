---
title: "The Squashing Bugs Update"
description:
  "The Squashing Bugs update is a major update for the website that fixes a lot of bugs, improves
  performance, and adds QOL features. Read more about it here."
isPublic: true
type: "Update"
project: "MinionAH"
pubDate: "January 20, 2024"
heroImage: "/assets/images/minionah/squashing-bugs-update/banner.png"
---

<script lang="ts">
  import MediaCarousel from "$lib/components/Carousel.svelte";
</script>

## Table of Contents

## Design Overhaul

The website has received a design overhaul. The design is now more consistent, looks better, and
matches MinionAH's design language:

<MediaCarousel items={["/assets/images/minionah/squashing-bugs-update/minecraft-profile.png",
"/assets/images/minionah/squashing-bugs-update/minions-profile.png",
"/assets/images/minionah/squashing-bugs-update/delete-minion.png",
"/assets/images/minionah/squashing-bugs-update/select-minion.png",
"/assets/images/minionah/squashing-bugs-update/select-tier.png",
"/assets/images/minionah/squashing-bugs-update/preferences.png",
"/assets/images/minionah/squashing-bugs-update/chats.png"]} />

## Preferences

Preferences is a new feature that allows you to customize your experience on MinionAH to your
liking. You can change the font and the numerical system.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Preferences">
    <source src="/assets/videos/minionah/squashing-bugs-update/preferences.mp4" type="video/mp4" />
  </video>
</div>

This feature will be expanded upon in the future.

## Embeds

The embeds have been updated to use a new image generation website built specifically for this
feature. [MinionAH OG](https://og.minionah.com) is a website that generates images for embeds on the
fly. Now when you share your profile or minion on, for example, Discord, the image will be shown
much faster.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Embed">
    <source src="/assets/videos/minionah/squashing-bugs-update/embed.mp4" type="video/mp4" />
  </video>
</div>

## Messages

The chat system got a logic overhaul and received some nice animations. Now, the page won't reload
when you send a message and the messages will indicate if they are being sent. This ensures a
smoother experience when chatting with others.

### Status

When you send a message it will show a status icon to show if it was sent successfully or not.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Message Status">
    <source src="/assets/videos/minionah/squashing-bugs-update/message-status.mp4" type="video/mp4" />
  </video>
</div>

### Animation

The messages now have a nice animation when they are sent.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Message Animation">
    <source src="/assets/videos/minionah/squashing-bugs-update/message-animation.mp4" type="video/mp4" />
  </video>
</div>

They also show the date they were sent on when you hover over them.

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Message Date Animation">
    <source src="/assets/videos/minionah/squashing-bugs-update/message-date-animation.mp4" type="video/mp4" />
  </video>
</div>

## Icons

The icons have been updated to be more consistent and to look better. We are now using
[Lucide](https://lucide.dev) icons instead of [Heroicons](https://heroicons.com).

## New buttons

A few new buttons have been added to make the website more user-friendly. For example, when you
click on a user in a card, it will now take you to their profile:

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="User Click">
    <source src="/assets/videos/minionah/squashing-bugs-update/user-click.mp4" type="video/mp4" />
  </video>
</div>

## Minion Popup

The minion popup now has an info button that takes you to the minion's wiki page.  
It also has a search button, the search button automatically searches for the same type of minion
for you:

<div class="border-border rounded-lg border p-4">
  <video muted={true} loop={true} autoPlay={true} class="mx-auto max-h-96" alt="Minion Auto Search">
    <source src="/assets/videos/minionah/squashing-bugs-update/auto-search.mp4" type="video/mp4" />
  </video>
</div>

## User Popup

The user popup now also has an info button that takes you to the user's
[SkyCrypt](https://sky.shiiyu.moe) page. It also has a chat button that takes you to the chat with
that user.

<div class="border-border rounded-lg border p-4">
  <img src="/assets/images/minionah/squashing-bugs-update/user-popup.png" alt="User Popup" />
</div>

## QOL

- When you sign up, you will not be able to leave the password creation page until you set a
  password. This is to prevent users from accidentally creating an account without a password.
- Your last login date is now correctly updated every 30 minutes when you are online.
- When you send someone a message, their read status will be set to unread.
  - You can send 2 messages at the same time, this is to prevent spam to the server.

## Security

We found out that there was a security vulnerability that allowed other users to delete a chat or
minion of another user. This was fixed as soon as we found out about it, oops 😳.

## Notes

- The full list of changes can be found in the
  [CHANGELOG.md file](https://github.com/DarthGigi/MinionAH/blob/main/CHANGELOG.md#130---2024-01-20)
  (from 1.2.3 to 1.3.0).

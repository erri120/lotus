# Lotus

- [Preamble](#preamble)
  - [Wabbajack](#wabbajack)
  - [Kinks](#kinks)
  - [What to expect in this modlist](#what-to-expect-in-this-modlist)
- [Requirements](#requirements)
  - [System Specs](#system-specs)
- [Installation](#installation)
  - [Pre-Installation](#pre-installation)
    - [Installing Microsoft Visual C++ Redistributable Package](#installing-microsoft-visual-c-redistributable-package)
    - [Steam Config](#steam-config)
      - [Disable the Steam Overlay](#disable-the-steam-overlay)
      - [Change Steams Update Behavior](#change-steams-update-behavior)
      - [Set the Game language to English](#set-the-game-language-to-english)
    - [Clean Skyrim](#clean-skyrim)
    - [Start Skyrim](#start-skyrim)
  - [Using Wabbajack](#using-wabbajack)
    - [Preparations](#preparations)
    - [Downloading and Installing](#downloading-and-installing)
    - [Problems with Wabbajack](#problems-with-wabbajack)
  - [Post-Installation](#post-installation)
    - [Copy Game Folder Files](#copy-game-folder-files)
    - [Copy LOOT config](#copy-loot-config)
    - [Build BodySlide files](#build-bodyslide-files)
- [Updating](#updating)
- [Important Mods you should know about](#important-mods-you-should-know-about)
  - [SexLab - Frameworks](#sexlab---frameworks)
  - [Devious Devices](#devious-devices)
  - [BakaFactory](#bakafactory)
  - [SexLab - Animations](#sexlab---animations)
  - [SexLab - Gameplay](#sexlab---gameplay)
  - [SexLab - Others](#sexlab---others)
  - [Nomkaz](#nomkaz)
  - [Camera](#camera)
  - [Nemesis vs FNIS](#nemesis-vs-fnis)
  - [Combat](#combat)
    - [Unarmed](#unarmed)
    - [Melee](#melee)
    - [Archery](#archery)
    - [Magic](#magic)
  - [EnaiSiaion](#enaisiaion)
  - [Skills, Perks and More](#skills-perks-and-more)
  - [Various Gameplay Mods](#various-gameplay-mods)
  - [Wench Mods](#wench-mods)
  - [Quest Mods](#quest-mods)
  - [Character Mods](#character-mods)
  - [NPC Retextures](#npc-retextures)
    - [NPC Retextures (Major)](#npc-retextures-major)
    - [NPC Retextures (Minor)](#npc-retextures-minor)
  - [Followers](#followers)
  - [Music](#music)
  - [UI](#ui)
  - [Cathedral Mods](#cathedral-mods)
  - [Outfit Mods](#outfit-mods)
  - [Weapon Mods](#weapon-mods)
  - [Poses](#poses)
  - [ENB: Silent Horizon](#enb-silent-horizon)
- [Creating your Character](#creating-your-character)
- [In-Game MCM Options](#in-game-mcm-options)
  - [3PCO - 3rd Person Camera Overhaul](#3pco---3rd-person-camera-overhaul)
  - [A Matter of Time](#a-matter-of-time)
  - [AGO](#ago)
  - [Bestial Essence](#bestial-essence)
  - [Blush When Aroused](#blush-when-aroused)
  - [CBBE 3BBB Addon](#cbbe-3bbb-addon)
  - [Follower Framework](#follower-framework)
  - [Forgotten Wenches](#forgotten-wenches)
  - [Growl Werebeasts](#growl-werebeasts)
  - [Hateful Wenches](#hateful-wenches)
  - [Judgment Wenches](#judgment-wenches)
  - [Nemesis PCEA](#nemesis-pcea)
  - [Normal Attack Stamina Consuption](#normal-attack-stamina-consuption)
  - [Quick Light](#quick-light)
  - [Sacrosanct Vampires](#sacrosanct-vampires)
  - [Schlongs of Skyrim](#schlongs-of-skyrim)
  - [Sky UI](#sky-ui)
  - [SSSO](#ssso)
  - [The Ultimate Dodge Mod](#the-ultimate-dodge-mod)
  - [Ultimate Combat](#ultimate-combat)
  - [VioLens](#violens)
  - [WetFunction Redux](#wetfunction-redux)
  - [Wildcat Combat](#wildcat-combat)
  - [XPMSE](#xpmse)
  - [SexLab](#sexlab)
  - [SexLab Aroused](#sexlab-aroused)
  - [Radiant Prostitution](#radiant-prostitution)
  - [SL Anim Loader](#sl-anim-loader)
  - [Defeat](#defeat)
  - [Devious Devices (MCM)](#devious-devices-mcm)
  - [Deviously Helpless](#deviously-helpless)
  - [Devious Device Helpers](#devious-device-helpers)
  - [Cursed Loot](#cursed-loot)
  - [SLA Monitor Widget](#sla-monitor-widget)
  - [Spell Research](#spell-research)
- [Adding more Mods](#adding-more-mods)
  - [Using LOOT](#using-loot)
  - [Textures](#textures)
    - [Skin Textures](#skin-textures)
  - [Meshes](#meshes)
  - [Animations](#animations)
    - [SLAL Animations](#slal-animations)
    - [Normal Animations](#normal-animations)
  - [Pose Mods](#pose-mods)
  - [Outfits](#outfits)
  - [ENB](#enb)
- [Tweaking Performance](#tweaking-performance)
  - [Tweaking the ENB](#tweaking-the-enb)
  - [Tweaking the Game Settings](#tweaking-the-game-settings)
  - [Using dxvk](#using-dxvk)
- [Removing the Modlist](#removing-the-modlist)
- [Afterword](#afterword)
- [Contact](#contact)
- [Contributing](#contributing)
- [Changelog](#changelog)

![lotus-logo](extra/logo-alt.png)

(I fucking love this background color)

## Preamble

**This Modlist contains mods with sexual content and you need to be of legal age in your country (most western countries: 18+, some eastern ones: 21+)**.

I'm [erri120](https://github.com/erri120), one of the [Developers](https://github.com/wabbajack-tools/wabbajack/contributors) behind [Wabbajack](https://github.com/wabbajack-tools/wabbajack) and a modding veteran for ~[7 years](https://www.nexusmods.com/users/6672467).
As a professional scientist in the field of extreme indulgence in bodily pleasures and the manifestation thereof in video games, I have decided to create a Modlist involving said sinful acts of debauchery.

Now for real: If you want a fully featured and functional Modlist that is playable from start to finish, containing multiple quest, overhauls and sexual mods than you've come to the right GitHub repository.

### Wabbajack

Somewhat important section for people that don't know what the hell Wabbajack is and how it works. I've added this section because I saw some confusion and bad use of terminology in association with Lotus that I want to clear up.

Let's start with some terminology: `Modpack` vs `Modlist`

**Modpack**:
Commonly found in the Minecraft modding scene, a modpack is a collection of mods put together in a single file. Often compressed into a zip, 7z or rar archive. This single file contains an entire modding setup and is very large in size as every file from every mod is included. Uploading a Modpack to the Internet means distributing possible copyrighted content and has lead to huge backlash in other modding scenes.

**Modlist (written guide)**:
A written guide like STEP, Lexys LOTD SE Mod Guide or The Phoenix Flavour that tell the user what, when and how to download and install. In order to reproduce the same setup of the guide author you will pick up a lot of new modding tricks and learn something unknown to you before. Depending on the depth of the guide, process not only takes a very long time but is very error prone if the user does not read everything carefully.

**Modlist (Wabbajack)**:
A Wabbajack Modlist can be compared to a written guide except it is not written for humans but for machines. The resulting .wabbajack file contains instructions on what, when and how to download and install in order to replicate the entire setup of the author without bundling any assets.

Now lets talk about Wabbajack:

Wabbajack is an automated Modlist installer that can recreate contents of a folder on another machine without ever distributing copyrighted materials or syncing data between the source and destination machine. Wabbajack will create instructions for a Modlist when compiling, those can be as simple as _Download Mod abc from the Nexus_ or complex as _Build BSAs from scratch using the following files_.

Wabbajack came into existing around July 2019 and the community has been growing past the 18 thousand mark with hundreds of daily users. The start was somewhat bumpy because a lot of people, especially mod authors, had and still have no idea what Wabbajack does and simply think it's some kind of Modpack thing. If you want more information checkout our website at [wabbajack.org](https://www.wabbajack.org/), made by yours truly.

### Kinks

An important rule when talking about NSFW stuff is: "No kink shaming."

I won't judge you and I understand that some people want different things. Since this is a public modlist and not my private one, I added instructions throughout this README on how to disable various kinks.

### What to expect in this modlist

I don't know how you found this repository: through reddit? github? wabbajack discord server? I also don't know if people recommended this list to you. There was an increase in "looking for NSFW content" posts on the [r/skyrimmods](https://www.reddit.com/r/skyrimmods/) subreddit where someone in the comments said to take a look at Lotus. This section and the massive [Important Mods you should know about](#important-mods-you-should-know-about) section exist to give you an idea on what you can find in Skyrim with this modlist.

You will of course get a lot of NSFW themed mods from LoversLab like [SexLab](#sexlab---frameworks) and [Devious Devices](#devious-devices) but there is more. This modlist is not something for horny people that you can just install, jack off and never touch again. You play Skyrim "normally" but can engage in sexual acts while playing or, depending on the kinks you like, get forced to do it. You will not get tied up and raped every 5 secs but have some fun for a while and then return to playing the actual game. Various gameplay mods are in place to make use of the new frameworks so that it does not feel like porn but more of an actual game.

Like I said in the preamble: "If you want a fully featured and functional Modlist that is playable from start to finish, containing multiple quest, overhauls and sexual mods than you've come to the right GitHub repository." I had reports of some users that actually played one version of this modlist for more than 70 hours. They added more mods on top and had a good time.

## Requirements

- [Nexus Premium Account](https://forums.nexusmods.com/index.php?/store/category/1-premium-membership/)
- [LoversLab Account](https://www.loverslab.com/)
- [VectorPlexus Account](https://vectorplexus.com/)
- [MEGA Account](https://mega.nz/aff=a94uEwwXPLU) (OPTIONAL BUT HIGHLY RECOMMENDED)
- A brain, eyes and time to read through this README

You can also install any Wabbajack Modlist without a Nexus Premium account but you will have to download each file manually. I added a MEGA account as an optional requirement because there are some big files on MEGA that need to be downloaded. You don't need one but MEGA has a limit on how much an anonymous user can download.

You can login to various sites using the internal login manager in Wabbajack. It can be accessed using the gear icon in the top right corner. Your credentials are encrypted and can only be decrypted on your machine as your current user, see [`ProtectedData` Class](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.protecteddata?view=netframework-4.8) and [DPAPI](https://en.wikipedia.org/wiki/Data_Protection_API) for more information.

### System Specs

- CPU: >= 7th gen Intel processor OR >= AMD Ryzen 3000 series processor
- GPU: >= 1060, you need at least 6GB of VRAM
- RAM: >= DDR4 with at least 16GBs

Everything should be installed on an SSD that has at least 256GB of space available. Also check [Tweaking Performance](#tweaking-performance) if you want more FPS. **You won't be able to play the modlist with 4GB of VRAM&**.

The specs of this modlist are similar to what you find in most PCs. I took the [Steam Hardware & Software Survey: March 2020](https://store.steampowered.com/hwsurvey) as a guideline for what that should be.

## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Installing Microsoft Visual C++ Redistributable Package

I doubt you need to do this since you likely already have this installed. The package is required for MO2 and you can download it from [Microsoft](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Download the x64 version under "Visual Studio 2015, 2017 and 2019". [Direct link](https://aka.ms/vs/16/release/vc_redist.x64.exe) if you can't find it.

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

##### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

##### Set the Game language to English

Wabbajack will check your game files and make sure that we have the same version. This also means that any other language than English will fail the installation.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/`. You can also use [Skyrim Shredder](https://www.nexusmods.com/skyrimspecialedition/mods/30133) by trawz that will clean your installation.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and open the _Options_ menu.

1) Click on _Ultra_
2) Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3) Set _Antialiasing_ to _Off_
4) Uncheck _Windowed Mode_ and _Borderless_

Start the game and exit once you're in the main menu.

### Using Wabbajack

#### Preparations

Let's get to the actual installation. Grab the latest release of Lotus from [the release tab](https://github.com/erri120/lotus/releases).

Download the release to a _working folder_. This folder **must not** be in a _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

Get the latest release of Wabbajack from [GitHub](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in the _working folder_.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1) Open Wabbajack
2) Load the Modlist from Disk
3) Adjust the download and installation paths
4) Click the Go/Begin button
5) Wait for Wabbajack to finish

#### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**DO NOT CONTACT MOD AUTHORS DIRECTLY**.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**x is not a whitelisted download**:

This can happen when I update the modlist. Check if a new update is available and wait if there is none.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

#### Copy Game Folder Files

Download the latest ENB Series from [here](http://enbdev.com/download_mod_tesskyrimse.htm) and copy `d3d11.dll` and `d3dcompiler_46e.dll` to your game folder.

Copy the following files from the `MO2/Game Folder Files` directory to your game folder:

- `enbseries/*`
- `binkw64.dll`
- `d3dx9_42.dll`
- `enblocal.ini`
- `enbseries.ini`
- `skse64_*`
- `tbb.dll`
- `tbbmalloc.dll`
- `winhttp.dll`

#### Copy LOOT config

This modlist actually has LOOT user configs. Can you believe it? Most other modlists do not have those for whatever reason. Anyway, if you want to add mods to this setup you should use LOOT with the config provided.

You can find the config files in the MO2 folder: `MO2/LOOT Config Files`. I recommend creating a backup of your existing `userlist.yaml` in `%localappdata%/LOOT/Skyrim Special Edition` and then replacing it. Check the [Using LOOT](#using-loot) section for more info.

#### Build BodySlide files

I except you to have some knowledge on how to use BodySlide before continuing. Check the mod page for more info: [BodySlide and Outfit Studio](https://www.nexusmods.com/skyrimspecialedition/mods/201)

As the amount of outfits and BS files grew in this modlist, I made the decision to *not* build and include the meshes. This made the resulting modlist file smaller and installation quicker. You should build the outfits in BodySlide with your preset of choice.

## Updating

If this Modlist receives an update, check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## Important Mods you should know about

This section contains information about some of the most important mods in this setup. I made this section so end-users know exactly what mods change what and can read-up on stuff they find interesting as well as give props to the mod authors.

### SexLab - Frameworks

You know this would be first, didn't you...
[SexLab Framework](https://www.loverslab.com/topic/91861-sexlab-framework-se-163-beta-8-november-22nd-2019/) is the core of all installed LL mods. Do note that this is a **beta build**. [SLAL](https://www.loverslab.com/files/file/5328-sexlab-animation-loader-sse/) or _SexLab Animation Loader_ and [SexLab Aroused Redux](https://www.loverslab.com/files/file/5482-sexlab-aroused-redux-sse-version-29/) are included as well.

Since we don't judge your fetishes, I have included [Creature Framework](https://www.loverslab.com/files/file/5462-creature-framework-se/) and [More Nasty Critters](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/).

[ZAZ](https://www.loverslab.com/files/file/5957-zaz-animation-packs-for-se/) is a requirement for other mods so you get that and the [ZAZ 8.0+ CBBE HDT Rev3](https://mega.nz/#!WEgGDaCa!wAho2Rphy47Lcd55DEmV50GgN07CMnTjhQ_r9s6dq-I) version.

Links:

- [SexLab Framework SE](https://www.loverslab.com/topic/91861-sexlab-framework-se-163-beta-8-november-22nd-2019/)
- [SexLab Animation Loader SSE](https://www.loverslab.com/files/file/5328-sexlab-animation-loader-sse/) by [Andreis](https://www.loverslab.com/profile/1770706-andreis/)
- [SexLab Aroused Redux SSE Version](https://www.loverslab.com/files/file/5482-sexlab-aroused-redux-sse-version-29/) by [fishburger67](https://www.loverslab.com/profile/441678-fishburger67/)
- [Creature Framework SE](https://www.loverslab.com/files/file/5462-creature-framework-se/) original by [Ep1cL3w7z](https://www.loverslab.com/profile/67752-ep1cl3w7z/)
- [More Nasty Critters Special Edition](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/) original by [MadMansGun](https://www.loverslab.com/profile/71862-madmansgun/)
- [ZAZ Animation Packs for SE](https://www.loverslab.com/files/file/5957-zaz-animation-packs-for-se/)
- [ZAZ 8.0+ CBBE HDT Rev3](https://mega.nz/#!WEgGDaCa!wAho2Rphy47Lcd55DEmV50GgN07CMnTjhQ_r9s6dq-I)

### Devious Devices

[Devious Devices](https://www.loverslab.com/topic/99700-devious-devices-se-43/) or DD for short is a very interesting mod and the foundation for [Devious Skyrim](https://www.loverslab.com/topic/30855-devious-skyrim/) (you should definitely read that post) which is a family of SM-themed mods. The conversion to SSE is a bit... funky to say the least but they finally build the SKSE plugin for 2.0.17. The conversion contains all three base mods: [Assets](https://www.loverslab.com/files/file/269-devious-devices-assets/), [Expansion](https://www.loverslab.com/files/file/1305-devious-devices-expansion/) and [Integration](https://www.loverslab.com/files/file/371-devious-devices-integration/).

The outfit conversions in the base DD AIO for SSE are garbage so [3BA Bodyslides for Devious Devices](https://www.loverslab.com/files/file/11938-3ba-bodyslides-for-devious-devices-43-aio/) is included to help with that.

DD alone does not do much as a framework. The biggest gameplay mod for DD is DCL aka [Deviously Cursed Loot](https://www.loverslab.com/topic/33986-deviously-cursed-loot-v85-2020-03-24/). This mod is *huge*. Takes like 20mins to do the MCM and you should, no you must read up on it if you want to use it. I have tried my best at configuring this mod in a way that makes sense and enables you to actually play the game without being tied up, locked up or raped every 5 meters. The main premise of this mods still stands:

> Cursed Loot is a bondage and domination (BD) themed mod that will get you into trouble of the erotic kind when playing Skyrim. Beware when looting containers and defeated enemies in Skyrim!

There are dangers in Skyrim, mainly in Dungeons, that will keep you on guard and are more of an exception than a rule to make them more impactful. I will try tweaking the config more over time so be sure to voice your opinion (see [Contact](#contact)).

Next up is [Deviously Helpless](https://www.loverslab.com/files/file/6561-deviously-helpless-se/) which makes NPCs use the advantage they have when you are literally helpless and bound by some devious device.

The exact opposite is [Devious Devices Helpers](https://www.loverslab.com/files/file/9197-devious-devices-helpers-se/) which counteracts against all the restraints and makes your followers smarter when it comes to restraints.

> While playing with Deviously Cursed Loot and other Devious Devices mods, I found that my character being tied up and helpless was amusing for about five minutes.

This is what I am going for: have fun for some time but then get back to playing the game. The combination of Cursed Loot, Helpless and Helpers should hopefully provide that gameplay experience. The entire thing is still experimental so expect tweaks to come over time.

Some big DD mods like [Sanguines Debauchery](https://www.loverslab.com/topic/120107-skyrimlldeepbluefrog-mods-conversion-to-sse/#comments) are not yet ready for SSE so the only DD quest mod included at the moment is [The Sisterhood of Dibella](https://www.loverslab.com/topic/120107-skyrimlldeepbluefrog-mods-conversion-to-sse/page/7/?tab=comments#comment-2860872).

Links:

- [Devious Devices SE](https://www.loverslab.com/topic/99700-devious-devices-se-43/)
- [3BA Bodyslides for Devious Devices](https://www.loverslab.com/files/file/11938-3ba-bodyslides-for-devious-devices-43-aio/) by [Grummkol](https://www.loverslab.com/profile/2854288-grummkol/)
- [Deviously Helpless SE](https://www.loverslab.com/files/file/6561-deviously-helpless-se/) original by [Srende](https://www.loverslab.com/profile/184189-srende/) converted by [Roggvir](https://www.loverslab.com/profile/594712-roggvir/)
- [Devious Devices Helpers SE](https://www.loverslab.com/files/file/9197-devious-devices-helpers-se/) original by [TurboNerd](https://www.loverslab.com/profile/1172444-turbonerd/) converted by [nomkaz](#nomkaz)
- [The Sisterhood of Dibella](https://www.loverslab.com/topic/120107-skyrimlldeepbluefrog-mods-conversion-to-sse/page/7/?tab=comments#comment-2860872) original by [DeepBlueFrog](https://www.loverslab.com/profile/159469-deepbluefrog/) converted by [nomkaz](#nomkaz)

### BakaFactory

`BakaFactory`/`factoryclose`/`바보공장` is the creator of many mods used in this setup. I **highly recommend** checking out the [Patreon](https://www.patreon.com/BaboFactory) page and [Discord server](https://discord.gg/gbHGCgB) (English), [Korean only](https://discord.gg/DgtQmn).

Mods used:

- [SexLabAroused Redux V28b SSE Modified by BakaFactory](https://drive.google.com/file/d/1SlvS2KRY6UscQisro8GEskwCCKg4Wa3G/view)
- [Animated Beast's Cocks(ABC) For users LE / SE](https://www.loverslab.com/files/file/7556-animated-beasts-cocksabc-for-users-le-se/)
- [BakaFactory AL Animation](https://www.patreon.com/posts/bakafactory-al-3-32187271)
- [SexLab Defeat Addon by BakaFactory SE English](https://www.patreon.com/posts/32912602)

### SexLab - Animations

[More Nasty Critters](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/) and [ZAZ](https://www.loverslab.com/files/file/5957-zaz-animation-packs-for-se/) already come with some animations, but I have expanded upon that with [BakaFactory AL Animation](https://www.patreon.com/posts/bakafactory-al-3-32187271) and [Psyche Animation](https://www.loverslab.com/files/file/11477-psyche-animation-lesse/).

Links:

- [More Nasty Critters Special Edition](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/) original by [MadMansGun](https://www.loverslab.com/profile/71862-madmansgun/)
- [ZAZ Animation Packs for SE](https://www.loverslab.com/files/file/5957-zaz-animation-packs-for-se/)
- [BakaFactory AL Animation](https://www.patreon.com/posts/bakafactory-al-3-32187271) by [BakaFactory](#bakafactory)
- [Psyche Animation (LE/SSE)](https://www.loverslab.com/files/file/11477-psyche-animation-lesse/) by [PsycheHHH](https://www.loverslab.com/profile/1643961-psychehhh/)

### SexLab - Gameplay

All those animations and features from the frameworks need to be used somewhere. A lot of big quest mod are still not converted and it will take some time for LL to make the switch to SSE. That being said, the _biggest_ quest mods in this setup is [From The Deeps](https://www.loverslab.com/files/file/8663-from-the-deeps-for-sse/). Ask innkeepers for some rumors to pick up From The Deeps, a lovecraft-like story! [Amorous Adventures](https://www.loverslab.com/topic/109518-amorous-adventures-34-sse-for-lovers-lab/) is also included, because it's funny. [Bestial Essence](https://www.loverslab.com/files/file/10036-bestial-essence-se/) for all beast lovers.

The vanilla quests are not being left alone! [SexLab Solutions](https://www.loverslab.com/files/file/10742-sexlab-solutions-revisited-se/) will offer additional dialog that may lead to some _interesting_ outcomes and [The Book of Sex](https://www.loverslab.com/files/file/10091-the-book-of-sex-se/) changes the vanilla quest "The Book of Love".

If you want some _wholesomeness_ than take a look at the included [Spouses Enhanced](https://www.loverslab.com/files/file/5266-spouses-enhanced-se/). This mod features no _extreme_ content. The focus is the relationship between two consenting, married adults.

The complete opposite of wholesome are [Defeat](https://www.loverslab.com/files/file/9152-sexlab-defeat-sse/), [Simple Slavery](https://www.loverslab.com/files/file/6535-simple-slavery-plus-se/) and [Radiant Prostitution](https://www.loverslab.com/files/file/10046-radiant-prostitutiongigolo-se/). Do note that I am using [Sexlab Defeat Baka Edition](https://www.patreon.com/posts/32912602) instead of normal Defeat.

To round out this composition you get another classic mod: [Estrus](https://www.nexusmods.com/skyrimspecialedition/mods/12832). This mod was originally created for Oblivion then got remade in Skyrim and ported to SSE. [Estrus Chaurus+](https://www.loverslab.com/files/file/6160-estrus-chaurus-for-se/) is also included since it has triggers for [Cursed Loot](#devious-devices).

Links:

- [FROM THE DEEPS (for SSE)](https://www.loverslab.com/files/file/8663-from-the-deeps-for-sse/) by [Delzaron](https://www.loverslab.com/profile/484102-delzaron/)
- [Amorous Adventures SSE for lovers lab](https://www.loverslab.com/topic/109518-amorous-adventures-34-sse-for-lovers-lab/) original by [FoxFingers](https://www.loverslab.com/profile/364691-foxfingers/), ported by [vitasgo](https://www.loverslab.com/profile/59513-vitasgo/)
- [Bestial Essence SE](https://www.loverslab.com/files/file/10036-bestial-essence-se/) original by [Carabosse](https://www.loverslab.com/profile/72736-carabosse/), ported by [Nomkaz](#nomkaz)
- [SexLab Solutions - Revisited SE](https://www.loverslab.com/files/file/10742-sexlab-solutions-revisited-se/) original by [janbui](https://www.loverslab.com/profile/3489852-janbui/), ported by [Nomkaz](#nomkaz)
- [The Book Of Sex SE](https://www.loverslab.com/files/file/10091-the-book-of-sex-se/) original by [vinfamy](https://www.loverslab.com/profile/1091843-vinfamy/) and ported by [Nomkaz](#nomkaz)
- [Spouses Enhanced SE](https://www.loverslab.com/files/file/5266-spouses-enhanced-se/) original by [TheDudeGuy](https://www.loverslab.com/profile/103310-thedudeguy/), updated by [WraithSlayer](https://www.loverslab.com/profile/348228-wraithslayer/) and ported by [ashakiri](https://www.loverslab.com/profile/1235636-ashakiri/)
- [Sexlab Defeat SSE](https://www.loverslab.com/files/file/9152-sexlab-defeat-sse/) by [Goubo](https://www.loverslab.com/profile/175859-goubo/)
- [Simple Slavery Plus SE](https://www.loverslab.com/files/file/6535-simple-slavery-plus-se/) original by [jfraser](https://www.loverslab.com/profile/155791-jfraser/), updated by [Lozeak](https://www.loverslab.com/profile/62468-lozeak/) and ported by [Jman3000](https://www.loverslab.com/profile/457751-jman3000/)
- [Radiant Prostitution/Gigolo SE](https://www.loverslab.com/files/file/10046-radiant-prostitutiongigolo-se/) original by [-Caden-](https://www.loverslab.com/profile/1328836-caden/) ported by [Nomkaz](#nomkaz)
- [Sexlab Defeat Baka Edition LE/SE](https://www.patreon.com/posts/32912602) by [BakaFactory](#bakafactory)
- [EstrusForSkyrimSE_VR](https://www.nexusmods.com/skyrimspecialedition/mods/12832) by [Cotyounoyume](https://www.nexusmods.com/users/489563)
- [Estrus Chaurus for SE](https://www.loverslab.com/files/file/6160-estrus-chaurus-for-se/) original by [jbezorg](https://www.loverslab.com/profile/3866-jbezorg/), modified by [Bane Master](https://www.loverslab.com/profile/109753-bane-master/) and converted by [Pfiffy](https://www.loverslab.com/profile/143667-pfiffy/)

### SexLab - Others

The following mods have a more _supportive_ role and do not fit any of the other categories.

[SexLab Aroused Monitor Widget](https://www.loverslab.com/files/file/11466-sexlab-aroused-monitor-widget-se/) adds a little widget that displays the arousal levels of nearby actors.

[SexLab Tools](https://www.loverslab.com/files/file/2018-sexlab-tools-v30/) gives you tools to control a scene.

[Sexlab LightMeUp](https://www.loverslab.com/files/file/8275-sexlab-lightmeup/) will illuminate the current SexLab scene so you don't have to pull out any additional torches and can actually see whats happening.

[Wet Function Redux](https://www.loverslab.com/files/file/9467-wet-function-redux-se/) and [Blush When Aroused](https://www.loverslab.com/files/file/1724-blush-when-aroused/) add some extra effects when certain conditions are met.

[Wintersun - SexLab Integration](https://www.loverslab.com/files/file/10796-wintersun-sexlab-integration-se/) provides a bridge between SL and [Wintersun](https://www.nexusmods.com/skyrimspecialedition/mods/22506).

Links:

- [SexLab Aroused Monitor Widget SE](https://www.loverslab.com/files/file/11466-sexlab-aroused-monitor-widget-se/) original by [BeamerMiasma](https://www.loverslab.com/profile/424489-beamermiasma/) converted by [Ecohex](https://www.loverslab.com/profile/3318668-ecohex/)
- [SexLab Tools](https://www.loverslab.com/files/file/2018-sexlab-tools-v30/) by [Goubo](https://www.loverslab.com/profile/175859-goubo/)
- [Sexlab LightMeUp](https://www.loverslab.com/files/file/8275-sexlab-lightmeup/) by [Yinkle](https://www.loverslab.com/profile/2924493-yinkle/)
- [Wet Function Redux SE](https://www.loverslab.com/files/file/9467-wet-function-redux-se/) by [Andreis](https://www.loverslab.com/profile/1770706-andreis/)
- [Blush When Aroused](https://www.loverslab.com/files/file/1724-blush-when-aroused/) by [Fredas](https://www.loverslab.com/profile/106315-fredas/), ported by [abcd99](https://www.loverslab.com/profile/250327-abcd99/) with fixed from [tasairis](https://www.loverslab.com/profile/1009670-tasairis/)
- [Wintersun - SexLab Integration SE](https://www.loverslab.com/files/file/10796-wintersun-sexlab-integration-se/) original by [PD_](https://www.loverslab.com/profile/1450322-pd_/), ported by [Nomkaz](#nomkaz)

### Nomkaz

You may have seen his name pop up a few hundred times when browsing the [Skyrin: Special Edition](https://www.loverslab.com/files/category/163-skyrim-special-edition/) category on LoversLab. This dude converted everything. Check his profile and leave a nice comment for all his work!

- [LL Profile](https://www.loverslab.com/profile/2695162-nomkaz/)
- [Patreon](https://www.patreon.com/nomkazsskyrimsemods)

### Camera

This little section will go over some of the installed mods that effect the camera in a subtle or substantial way. They get their own section because it can feel very weird playing with them for the first time.

3PCO or [3rd Person Camera Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/18515) aims to fix the stiff, unmoving vanity camera of vanilla Skyrim.

[Improved Camera](https://www.reddit.com/r/skyrimmods/comments/cae3x2/mod_improved_camera_beta_3/) is a reverse engineered SE mod from the LE mod [Skyrim - Enhanced Camera](https://www.nexusmods.com/skyrim/mods/57859).
There is also [Immersive First Person View](https://www.nexusmods.com/skyrimspecialedition/mods/22306) but the SE version of IFPV is worse than the LE counterpart since it was also remade completely from scratch. I would love to use the [Immersive First Person View - SexLab Special](https://www.loverslab.com/files/file/3719-immersive-first-person-view-sexlab-special/) config but that is sadly for LE only.

Both options are viable so you get both. Decide what works for you and stick with it. IFPV is enabled in MO2 by default is set to be activated during SL scenes or when you press the 0 on your Numpad.

Links:

- [3PCO - 3rd Person Camera Overhaul - Smooth Camera Follow](https://www.nexusmods.com/skyrimspecialedition/mods/18515) by [watang](https://www.nexusmods.com/users/10706607)
- [Improved Camera](https://www.reddit.com/r/skyrimmods/comments/cae3x2/mod_improved_camera_beta_3/) by [ArranzCNL](https://www.reddit.com/user/ArranzCNL/)
- [Immersive First Person View](https://www.nexusmods.com/skyrimspecialedition/mods/22306) by [meh321](https://www.nexusmods.com/skyrimspecialedition/users/2964753)

### Nemesis vs FNIS

We all know of [FNIS](https://www.nexusmods.com/skyrimspecialedition/mods/3038) but have you heard of [Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main)? I won't go into much detail on the relationship between those two programs and their authors but tl;dr: Nemesis is an alternative to Fnis.

"_Why would I care?_", you may ask. The Ultimate Dodge Mod is, as the name implies, a dodge mod like [TK Dodge](https://www.nexusmods.com/skyrimspecialedition/mods/15309). TUDM only works with Nemesis. I originally wanted to use TUDM and Nemesis but creature animations do not work in Nemesis _yet_. What I ended up doing is using FNIS for creature animations and Nemesis for everything else.

Links:

- [Fores New Idles in Skyrim SE - FNIS SE](https://www.nexusmods.com/skyrimspecialedition/mods/3038) by [fore](https://www.nexusmods.com/users/8120)
- [Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main)

### Combat

#### Unarmed

Unarmed combat was never a thing in Skyrim. Sure you have attacks but they do like 0 damage and are only useful for beating up Nazeem. I want to make unarmed combat viable in this modlist but I'm still missing some mods so for now, you only get the basis: new sexy unarmed animations, [Hand To Hand Blocking Animations](https://www.nexusmods.com/skyrim/mods/102221) and [Dynamic Combat Module](https://www.nexusmods.com/skyrimspecialedition/mods/34599).

Links:

- [Hand To Hand Blocking Animations](https://www.nexusmods.com/skyrim/mods/102221) by [TankIsKing](https://www.nexusmods.com/skyrim/users/7125383)
- [Dynamic Combat Module](https://www.nexusmods.com/skyrimspecialedition/mods/34599)

#### Melee

Melee combat is fucking boring in Vanilla. You can describe melee combat as bashing the attack button and stat checking which would be fine if Skyrim is a typical stat based RPG but it's not. There are a lot of different visions for what melee combat should be in Skyrim, how it should feel and how it should play out. The author of AGO, DServant, released CGO or [Combat Gameplay Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/33767) recently which adds a lot of different features. I choose to not use CGO since it has poor compatibility and a combination of various different mods can achieve a similar and even better flow of melee combat.

The start makes [Ultimate Combat](https://www.nexusmods.com/skyrimspecialedition/mods/17196) and [Sekiro Combat](https://www.nexusmods.com/skyrimspecialedition/mods/31915) for their timed block, deflection and effects. Do note that the dodging feature from Ultimate Combat is disabled in favor of The Ultimate Dodge Mod which got [new animations](https://www.nexusmods.com/skyrimspecialedition/mods/33049). [VioLens](https://www.nexusmods.com/skyrimspecialedition/mods/668) is used mainly for the Player Killmove Immunity.

Next up is something I only discovered recently mostly because it is rather new: SGC by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112). SGC stands for "Stolen game concept" and this is their headline:

> What's annoying in Skyrim? Skyrim! Make it Dark Souls.

Adding souls like combat to Skyrim has been a thing for a long time and a lot of people hate it because they think that "souls like" = "getting one shotted". Previous versions of this modlist actually had this problem since balancing was the least of concerns at that time but things are different now. The idea now is to make the melee combat more skill based than before without making it too hard. This is Skyrim after all and I doubt you came to this modlist for the combat.

Anyway, the start for SGC is [SkySA - Combat Behavior Compulsion](https://www.nexusmods.com/skyrimspecialedition/mods/31390) which locks your movement and removes the vanilla behavior of swinging around a club while doing 360 no scopes. This means that you need to put some thoughts behind your attacks and not just bash like an idiot. Next up is [(SGC) Stagger on hit](https://www.nexusmods.com/skyrimspecialedition/mods/33124), which is pretty self explanatory, and [(SGC) Scriptfree Behavior Staggerlock](https://www.nexusmods.com/skyrimspecialedition/mods/33481) to give the staggerlock an animation. Is staggerlocking an opponent kinda op? Maybe. This is why your attacks will now consume stamina with [(SGC) Normal Attack Stamina Consumption](https://www.nexusmods.com/skyrimspecialedition/mods/32996) and [(SGC) Dark Souls Movement and Stamina Regen](https://www.nexusmods.com/skyrimspecialedition/mods/33135).

To round this composition out and change the AI we will use [Wildcat](https://www.nexusmods.com/skyrimspecialedition/mods/1368). This mod also lets you change the damage dealt on various difficulties if you want to.

Do note that [Skyrim Souls](https://www.nexusmods.com/skyrimspecialedition/mods/27859) is installed meaning that you can't just go into your inventory and eat 100 cheese wheels while everything is paused.

Links:

- [Ultimate Combat SE](https://www.nexusmods.com/skyrimspecialedition/mods/17196) by [tktk1](https://www.nexusmods.com/skyrimspecialedition/users/3841389)
- [Sekiro Combat SSE](https://www.nexusmods.com/skyrimspecialedition/mods/31915) by [Lertkrush](https://www.nexusmods.com/skyrimspecialedition/users/5493833)
- [(SGC) SkySA - Combat Behavior Compulsion](https://www.nexusmods.com/skyrimspecialedition/mods/31390) by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112)
- [(SGC) Stagger on hit - DSCO standalone](https://www.nexusmods.com/skyrimspecialedition/mods/33124) by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112)
- [(SGC) Scriptfree Behavior Staggerlock - DSCO standalone](https://www.nexusmods.com/skyrimspecialedition/mods/33481) by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112)
- [(SGC) Normal Attack Stamina Consumption - DSCO standalone](https://www.nexusmods.com/skyrimspecialedition/mods/32996) by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112)
- [(SGC) Dark Souls Movement and Stamina Regen - DSCO standalone](https://www.nexusmods.com/skyrimspecialedition/mods/33135) by [distar66](https://www.nexusmods.com/skyrimspecialedition/users/44417112)
- [Wildcat - Combat of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/1368) by [EnaiSiaion](#enaisiaion)
- [Skyrim Souls RE - Updated](https://www.nexusmods.com/skyrimspecialedition/mods/27859) original by [Fudgyduff](https://www.nexusmods.com/skyrimspecialedition/users/5687342), updated by [Vermunds](https://www.nexusmods.com/users/26327049)

#### Archery

Can't have a setup without [AGO](https://www.nexusmods.com/skyrimspecialedition/mods/24296) and [Mortal Enemies](https://www.nexusmods.com/skyrimspecialedition/mods/4881). I wish I had more to say but I don't. Archery is kinda weird in Skyrim as it is rather one dimensional. The meme about how you only go stealth archer in Skyrim still holds up and is still op but I think you don't want to go an archer in this modlist when the other combat parts are more attractive.

#### Magic

Instead of just grabbing [Apocalypse](https://www.nexusmods.com/skyrimspecialedition/mods/1090) and calling it a day, I have opted to *not include Apocalypse*. This is my first setup since I started modding where I have not used that mod. In its stead [Arcanum](https://www.nexusmods.com/skyrimspecialedition/mods/23488) and [Mysticism](https://www.nexusmods.com/skyrimspecialedition/mods/27839) are included.

[Spell Research](https://www.nexusmods.com/skyrimspecialedition/mods/20983) gives your mage playthrough a bit more depth as you can now _research spells_... duh.

Links:

- [Arcanum - A New Age of Magic](https://www.nexusmods.com/skyrimspecialedition/mods/23488) by [noptasis](https://www.nexusmods.com/users/14312949)
- [Mysticism - A Magic Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/27839) by [SimonMagus616](https://www.nexusmods.com/users/67410746)
- [Spell Research](https://www.nexusmods.com/skyrimspecialedition/mods/20983) by [IronDusk33](https://www.nexusmods.com/skyrimspecialedition/users/5182604)

### EnaiSiaion

Same as the [BakaFactory](#bakafactory) section, this one is a shout-out to [EnaiSiaion](https://www.nexusmods.com/skyrimspecialedition/users/3959191). Be sure to check the [r/EnaiRim](https://www.reddit.com/r/EnaiRim) subreddit, the [Patreon](https://www.patreon.com/EnaiSiaion) page and the [Discord](https://discordapp.com/invite/GfYzjPm) server.

Mods used:

- [Wintersun - Faiths of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22506)
- [Growl - Werebeasts of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/31245)
- [Morningstar - Minimalistic Races of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22298)
- [Thunderchild - Epic Shouts and Immersion](https://www.nexusmods.com/skyrimspecialedition/mods/1460)
- [Andromeda - Unique Standing Stones of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/14910)
- [Sacrosanct - Vampires of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/3928)
- [Summermyst - Enchantments of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/6285)

### Skills, Perks and More

As you may have guessed from the [EnaiSiaion](#enaisiaion) section, I used a lot of those mods. Let's break it down:

[Wintersun](https://www.nexusmods.com/skyrimspecialedition/mods/22506) was probably one of the greatest mods released last year. The mod adds religion and worship. [Wintersun SexLab Integartion](https://www.loverslab.com/files/file/10796-wintersun-sexlab-integration-se/) will provide a way for Wintersun deities to react to SexLab-related events. I recommend checking out both mods if you want some religion in Skyrim.

Perk overhauls. Same with [Magic](#combat---magic), I normally always go [Ordinator](https://www.nexusmods.com/skyrimspecialedition/mods/1137) and nothing else. For this setup I used [Adamant](https://www.nexusmods.com/skyrimspecialedition/mods/30191). This perk mod is not as huge as Ordinator but allows one to add other perk overhauls on-top of it. [Smithing Perks Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/19246) and [Path of Sorcery](https://www.nexusmods.com/skyrimspecialedition/mods/6660) are the ones I added.

Alchemy and Cooking is often left alone since no-one really uses those hidden op skills, but I have included the popular [CACO](https://www.nexusmods.com/skyrimspecialedition/mods/19924) if you want to dive into this complex crafting system.

On the topic of crafting: [Honed Metal](https://www.nexusmods.com/skyrimspecialedition/mods/12885) will help everyone who doesn't wanna be a smith in every playthrough. [Complete Crafting Overhaul Remastered](https://www.nexusmods.com/skyrimspecialedition/mods/28608) **is not included** in this setup.

If you are not the warrior type but more of a mage than [Summermyst](https://www.nexusmods.com/skyrimspecialedition/mods/6285) and its new enchantments are what you want.

Werewolf and Vampire overhauls can be problematic with certain LL mods but I have found the new [Growl](https://www.nexusmods.com/skyrimspecialedition/mods/31245) and the old [Sacrosanct](https://www.nexusmods.com/skyrimspecialedition/mods/3928) to be working just fine in this setup. Do note that the Alternate Start option where you start as a Vampire does not work with Sacrosanct (see [this](https://www.nexusmods.com/skyrimspecialedition/articles/54/) article for more info).

I love [Imperious](https://www.nexusmods.com/skyrimspecialedition/mods/1315) as a race overhaul but I often find myself suffocating with new effects and spells from other mods so instead the somewhat new and lightweight [Morningstar](https://www.nexusmods.com/skyrimspecialedition/mods/22298) was the way to go.

[Thunderchild](https://www.nexusmods.com/skyrimspecialedition/mods/1460) and [Andromeda](https://www.nexusmods.com/skyrimspecialedition/mods/14910) have no real alternatives for me so they are a constant in all my playthrough.

[But wait, there is more...](https://forwardsandbookwords.files.wordpress.com/2015/09/but-wait-theres-more.jpg):

[Special Perks form Questing](https://www.nexusmods.com/skyrimspecialedition/mods/29402) and [Experience](https://www.nexusmods.com/skyrimspecialedition/mods/17751) will make Quests and Exploration more rewarding as you often get useless stuff as a reward. Now you get experience or special perks.

Links:

- [Wintersun - Faiths of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22506) by [EnaiSiaion](#enaisiaion)
- [Wintersun - SexLab Integration SE 1.3.3](https://www.loverslab.com/files/file/10796-wintersun-sexlab-integration-se/) original by [PD_](https://www.loverslab.com/profile/1450322-pd_/), ported by [Nomkaz](#nomkaz)
- [Adamant - A Perk Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/30191) by [Simon Magus](https://www.nexusmods.com/skyrimspecialedition/users/67410746)
- [Smithing Perks Overhaul SE](https://www.nexusmods.com/skyrimspecialedition/mods/19246) by [kryptopyr](https://www.nexusmods.com/users/4291352)
- [Path of Sorcery - Magic Perk Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/6660) by [steelfeathers](https://www.nexusmods.com/users/7402811)
- [Complete Alchemy and Cooking Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/19924) by [kryptopyr](https://www.nexusmods.com/users/4291352)
- [Honed Metal - SSE](https://www.nexusmods.com/skyrimspecialedition/mods/12885) original by [skyliner390](https://www.nexusmods.com/users/563698), ported by [kowalskiy](https://www.nexusmods.com/skyrimspecialedition/users/4143478)
- [Summermyst - Enchantments of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/6285) by [EnaiSiaion](#enaisiaion)
- [Growl - Werebeasts of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/31245) by [EnaiSiaion](#enaisiaion)
- [Sacrosanct - Vampires of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/3928) by [EnaiSiaion](#enaisiaion)
- [Morningstar - Minimalistic Races of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22298) by [EnaiSiaion](#enaisiaion)
- [Thunderchild - Epic Shouts and Immersion](https://www.nexusmods.com/skyrimspecialedition/mods/1460) by [EnaiSiaion](#enaisiaion)
- [Andromeda - Unique Standing Stones of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/14910) by [EnaiSiaion](#enaisiaion)
- [Special Perks from Questing (SE)](https://www.nexusmods.com/skyrimspecialedition/mods/29402) by [AlanPaul](https://www.nexusmods.com/users/22933884)
- [Experience](https://www.nexusmods.com/skyrimspecialedition/mods/17751) by [z4x](https://www.nexusmods.com/users/1205545)

### Various Gameplay Mods

These mods do not really fit in the other categories and but are still important.

Starting with a mod you don't even see in MO2: [Enemy Releveler](https://www.nexusmods.com/skyrimspecialedition/mods/32211) which is a zEdit patcher that delevels enemies based on what faction they are part of. I will tweak this patcher based on feedback I receive and my own testing so it may be a bit unbalanced at the moment.

Next I'm gonna take a page out of [SkyRem](https://www.nexusmods.com/skyrimspecialedition/mods/26789) by [DrPharmDawg](https://www.nexusmods.com/skyrimspecialedition/users/19562249) ([Patreon](https://www.patreon.com/user?u=16576878)) and use [Improved NPC Encounter Zones](https://www.nexusmods.com/skyrimspecialedition/mods/27103), [Evolving Value Economy](https://www.nexusmods.com/skyrimspecialedition/mods/26325) and [Loot Overhaul - Rarity and Abundancy](https://www.nexusmods.com/skyrimspecialedition/mods/26732).

(Sidenote: I love how every mod in Skyrim needs to have some sort of acronym in their title for no reason at all)

Anyway, INEZ reworks the encounter zones, LORA overhauls the Loot and is a replacement to [MLU](https://www.nexusmods.com/skyrimspecialedition/mods/3058/?) and EVE + [Trade and Barter](https://www.nexusmods.com/skyrimspecialedition/mods/23081) add more spice and complexity to the economy and trading system.

The updated version of [Dynamic Equipment Manager SSE](https://www.nexusmods.com/skyrimspecialedition/mods/21937), [Dynamic Equipment Manager SKSE Updated](https://www.nexusmods.com/skyrimspecialedition/mods/34407) automatically equips and unequips ammo, helmets and shields. Check the config file you don't want some of those features.

Links:

- [Enemy Releveler](https://www.nexusmods.com/skyrimspecialedition/mods/32211) by [tjhm4](https://www.nexusmods.com/skyrimspecialedition/users/822500)
- [Improved NPC Encounter Zones (SkyRem - Inez)](https://www.nexusmods.com/skyrimspecialedition/mods/27103) by [DrPharmDawg](https://www.nexusmods.com/skyrimspecialedition/users/19562249) by [tjhm4](https://www.nexusmods.com/skyrimspecialedition/users/822500)
- [Evolving Value Economy (SkyRem - Eve)](https://www.nexusmods.com/skyrimspecialedition/mods/26325) by [tjhm4](https://www.nexusmods.com/skyrimspecialedition/users/822500)
- [Loot Overhaul - Rarity and Abundancy (SkyRem - Lora)](https://www.nexusmods.com/skyrimspecialedition/mods/26732) by [tjhm4](https://www.nexusmods.com/skyrimspecialedition/users/822500)
- [Trade and Barter](https://www.nexusmods.com/skyrimspecialedition/mods/23081) by [kryptopyr](https://www.nexusmods.com/skyrimspecialedition/users/4291352)
- [Dynamic Equipment Manager SKSE Updated](https://www.nexusmods.com/skyrimspecialedition/mods/34407) original by [Ryan](https://www.nexusmods.com/skyrimspecialedition/users/5687342) updated by [dukethedropkicker](https://www.nexusmods.com/skyrimspecialedition/users/58293366)

### Wench Mods

You read that correctly: I'm talking of course about the Wenches lineup by Kozuke Hajime.

Starting with [Immersive Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/595), the baseline and requirement for all mods in this section.

The Wench lineup adds wenches into Skyrim. The mods in that lineup focus on different factions:

- [Deadly Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/599): various factions like Bandits, Vampires, Guards, Soldiers and Forsworn
- [Hateful Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/600): Draugr faction
- [Forgotten Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/601): Falmer faction
- [Judgment Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/602): Dwemer faction

Hateful, Forgotten and Judgment Wenches are different to Deadly Wenches. They are not tied to the level list but are summoned by members of their faction. This can make a fight very messy if the spawn rates are off so expect more tweaking here.

The final mod in this section is [Enemy Variations Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/23006) made by someone who really loves argonians. This mod is massive. This adds nearly 6000 NPCs of every race to level lists. V4 recently came out which made me consider adding it.

Kozuke Hajime profile:

- [Nexus](https://www.nexusmods.com/skyrimspecialedition/users/2618380)
- [Patreon](https://www.patreon.com/KozukeHajime/overview)
- [Twitter](https://twitter.com/KozukeHajime)
- [Discord](https://www.discord.gg/v44hd6y)
- [Twitch](https://www.twitch.tv/kozukehajime)
- [Merch?](https://www.redbubble.com/people/kozukehajime/collections/1056836-buxom-wenches?product_type=sticker&asc=u)
- [Subscribe Star?](https://subscribestar.adult/kozuke-hajime)

Links:

- [Immersive Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/595)
- [Deadly Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/599)
- [Hateful Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/600)
- [Forgotten Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/601)
- [Judgment Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/602)
- [Enemy Variations Wenches](https://www.nexusmods.com/skyrimspecialedition/mods/23006) by [HellLizard](https://www.nexusmods.com/skyrimspecialedition/users/696611)

### Quest Mods

Aside from the quest mods mentioned in [SL Gameplay](#sexlab---gameplay), there are some _normal_ quests you can play through. The biggest one being [Legacy of the Dragonborn](https://www.nexusmods.com/skyrimspecialedition/mods/11802). I don't think I need to explain why that mod is included in this setup.

Aside from Lotd you get the continuation of one of my favorites quest mods for Oblivion: [Maids 2](https://www.nexusmods.com/skyrimspecialedition/mods/189).

[Moon and Star](https://www.nexusmods.com/skyrimspecialedition/mods/4301) is the dwemer quest mod in this setup and [Clockwork](https://www.nexusmods.com/skyrimspecialedition/mods/4155) will give you a nice player home and some spooky events.

**Important info about Clockwork**: Clockwork will lock you out of Skyrim for a considerable amount of time. The clockwork quest begins with a random event when your character is at least level 5. You will get a note to investigate a landslide in Eastmarch.

The vanilla quests are not being left alone: The _For Good Guys_ lineup with [Dark Brotherhood for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/519), [Thieves Guild For Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/10745), [Namira for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/336) and [Boethiah for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/329) is included as well.

To round out our assortment of quests you get [Missives](https://www.nexusmods.com/skyrimspecialedition/mods/17576) for a large number of localized radiant quests.

Links:

- [Legacy of the Dragonborn SSE](https://www.nexusmods.com/skyrimspecialedition/mods/11802)
- [Maids II - Deception](https://www.nexusmods.com/skyrimspecialedition/mods/189)
- [Moon and Star](https://www.nexusmods.com/skyrimspecialedition/mods/4301)
- [Clockwork (SSE)](https://www.nexusmods.com/skyrimspecialedition/mods/4155)
- [Dark Brotherhood for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/519)
- [Thieves Guild For Good Guys - Taking Care of Business Redux](https://www.nexusmods.com/skyrimspecialedition/mods/10745)
- [Namira for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/336)
- [Boethiah for Good Guys](https://www.nexusmods.com/skyrimspecialedition/mods/329)
- [Missives](https://www.nexusmods.com/skyrimspecialedition/mods/17576)

### Character Mods

(If you have no idea what HDT-PE/HDT-SMP/BBP/TBPP or 3BBB is, read [this](https://babofactory.blogspot.com/2019/10/what-is-hdt-pe-hdt-smp-bbp-tbbp-3bbb.html) article by [BakaFactory](#bakafactory))

Since the dawn of mankind we've asked the question: _CBBE or UNP?_

Short answer: I went with [CBBE 3BBB Advanced](https://www.nexusmods.com/skyrimspecialedition/mods/30174/).

Long answer: ~~Maybe Ill write one later. This was the hardest decision to make for the Modlist and I could go into great detail and trace back all steps that lead to this decision but I don't think anyone wanna read that.~~ (apparently people did wanna read that)

There is no clear answer nor is one better than the other. Both are great, both have their communities and both have reasons to exist in your setup. I personally switch between CBBE and UNP more frequently than I want to admit. The reason being that there is always some new outfit being released that uses UNP when I use CBBE or CBBE when I use UNP. For this setup it came down to what outfits I wanna include and what the user might want to add in the future. CBBE was the winner in that regard and I still feel a tendency to swap to UNP midway through. Maybe I'll add a profile for UNP later.

[XMPSSE](https://www.nexusmods.com/skyrimspecialedition/mods/1988), [CBPC](https://www.nexusmods.com/skyrimspecialedition/mods/21224) and [HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/30872) are of course installed and configured. For textures I used [Demoniac](https://www.nexusmods.com/skyrimspecialedition/mods/19355), [Feminine Argonian Textures](https://www.nexusmods.com/skyrimspecialedition/mods/184) and [Feminine Khajiit Textures](https://www.nexusmods.com/skyrimspecialedition/mods/183).

The dudes were not left alone either! [Schlongs of Skyrim](https://www.loverslab.com/files/file/5355-schlongs-of-skyrim-se/) can't be missing from any LL setup. Textures used are [Tempered Skins for Males](https://www.nexusmods.com/skyrimspecialedition/mods/7902) and [Male Dragonic Argonian Textures](https://www.nexusmods.com/skyrimspecialedition/mods/1443).

If you want the best of both worlds you can use the [SOS Futanari Addon](https://www.loverslab.com/files/file/11344-sos-addon-futanari-cbbe-sse/) with seamless textures I created.

Links:

- [CBBE 3BBB Advanced](https://www.nexusmods.com/skyrimspecialedition/mods/30174/) by Acro: [Nexus Mods](https://www.nexusmods.com/users/14635849), [LL](https://www.loverslab.com/profile/510660-acro748/)
- [CBPC - CBP Physics with Collisions for SSE and VR](https://www.nexusmods.com/skyrimspecialedition/mods/21224) by [Shizof](https://www.nexusmods.com/users/1201660)
- [HDT-SMP (Skinned Mesh Physics)](https://www.nexusmods.com/skyrimspecialedition/mods/30872) original by HydrogensaysHDT: [Nexus Mods](https://www.nexusmods.com/users/3701232), [GitHub](https://github.com/HydrogensaysHDT), [LL](https://www.loverslab.com/profile/100850-hydrogensayshdt/) and updated by [aers](https://www.nexusmods.com/users/2025634)
- [Demoniac- High Quality Glossy Female Body Texture 8K 4K 2K - SE](https://www.nexusmods.com/skyrimspecialedition/mods/19355) original by [regenbot03](https://www.nexusmods.com/users/27578610), ported by Rektas: [Patreon](https://www.patreon.com/Rektas), [Twitter](https://twitter.com/s1kkha), [Nexus Mods](https://www.nexusmods.com/users/26327699) (inactive), [Tumblr](https://s1kkha.tumblr.com/)
- [Feminine Argonian Textures (Chameleon and Lizard)](https://www.nexusmods.com/skyrimspecialedition/mods/184) by [MONSTERaider](https://www.nexusmods.com/users/1630457)
- [Feminine Khajiit Textures (Grey Cat and Leopard)](https://www.nexusmods.com/skyrimspecialedition/mods/183) by [MONSTERaider](https://www.nexusmods.com/users/1630457)
- [Schlongs of Skyrim SE 1.1.4](https://www.loverslab.com/files/file/5355-schlongs-of-skyrim-se/) original by [b3lisario](https://www.loverslab.com/profile/82377-b3lisario/), VectorPlexus and Smurf, ported by [galgaroth](https://www.loverslab.com/profile/2774284-galgaroth/)
- [Tempered Skins for Males - Vanilla and SOS versions](https://www.nexusmods.com/skyrimspecialedition/mods/7902) by [traa108](https://www.nexusmods.com/users/9916407)
- [Male Dragonic Argonian Textures 4k - 2k (SOS and Vanilla)](https://www.nexusmods.com/skyrimspecialedition/mods/1443) by [ChaserTech](https://www.nexusmods.com/users/8205044)
- [SOS- Addon - Futanari CBBE SSE](https://www.loverslab.com/files/file/11344-sos-addon-futanari-cbbe-sse/) by [EvilReFlex](https://www.loverslab.com/profile/607503-evilreflex/)

### NPC Retextures

There are a ton of NPC retextures that come in different sizes: some overhaul dozens of NPCs and some only change a handful or less. The latter should of course overwrite the former. For this reason I have split this section into [Major](#npc-retextures-major) and [Minor](#npc-retextures-minor) subsections.

#### NPC Retextures (Major)

The start makes [Superior Lore-Friendly Hair](https://www.nexusmods.com/skyrim/mods/36510). It's a small but highly effective mod that changes the base hair texture. Next up is [Ethereal Elven Overhaul](https://www.nexusmods.com/skyrim/mods/24273) converted to SSE.

[Modest Elderly](https://www.nexusmods.com/skyrimspecialedition/mods/7935) protects the elders from _things_.

The biggest mod that overhauls all Skyrim's Characters is [Diversity](https://www.nexusmods.com/skyrimspecialedition/mods/5291) which serves as a great baseline. [The Men of Winter](https://www.nexusmods.com/skyrimspecialedition/mods/10902) is kinda the only male NPC retexture I like and I'm not so versed in the male part than I am in the female one...

Speaking of which: [Kalilies NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/30247) is also in here.

You can't talk about NPC retextures without mentioning the Bijin and Pandorable series. In my case I let the Pandeorable series load after the Bijin one. This includes Bijin [Wives](https://www.nexusmods.com/skyrimspecialedition/mods/11247), [NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/11287) [Warmaidens](https://www.nexusmods.com/skyrimspecialedition/mods/1825), Pandorable's [NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/19012) - [Dragonborn](https://www.nexusmods.com/skyrimspecialedition/mods/30680) and [Dawnguard](https://www.nexusmods.com/skyrimspecialedition/mods/24135).

I recently found some LE mods by [Gman749](https://www.nexusmods.com/skyrim/users/37338675) which got ported to SSE by [bchick3](https://www.nexusmods.com/skyrimspecialedition/users/40101665). The modpage images are sadly a bit _misleading_... Anyway, Gman splits their mods by city and the included cities are [Solitude](https://www.nexusmods.com/skyrimspecialedition/mods/23343), [Whiterun](https://www.nexusmods.com/skyrimspecialedition/mods/24277), [Riften](https://www.nexusmods.com/skyrimspecialedition/mods/28775) and [Dawnguard](https://www.nexusmods.com/skyrimspecialedition/mods/28859).

#### NPC Retextures (Minor)

Since the other category was mostly dominated by human retextures, let us take a break from that and look at our dragon friends: [Alduin](https://www.nexusmods.com/skyrimspecialedition/mods/33007), [Paarthurnax](https://www.nexusmods.com/skyrimspecialedition/mods/28728) and [Odahviing](https://www.nexusmods.com/skyrim/mods/31229) all get a retexture.

Not 100% a Dragon but a Dragonborn is your archenemy Miraak who can now be your follower using the mod [Miraak - Dragonborn Follower](https://www.nexusmods.com/skyrimspecialedition/mods/19829) but more importantly: he is now [Lady Miraak](https://www.nexusmods.com/skyrimspecialedition/mods/6835). You can disable those two mods and the compatibility patch easily if you don't want a hot female Miraak running around as your follower.

The GK series by [OnigiriDaisuki](https://www.nexusmods.com/skyrimspecialedition/users/42864565) is mostly focused around new followers but there are also vanilla follower replacers available. Namely the [GK Housecarl Replacer](https://www.nexusmods.com/skyrimspecialedition/mods/26037) which changes Jordis, Lydia and Iona.

Even tho we just changed Jordis we are going one level deeper and grab some [Moolgogi](https://www.nexusmods.com/skyrim/users/1221695?tab=user+files) Replacers for [Jordis](https://www.nexusmods.com/skyrim/mods/100321), [Elsif](https://www.nexusmods.com/skyrimspecialedition/mods/23642), [Karliah](https://www.nexusmods.com/skyrim/mods/96887) and [Valerica](https://www.nexusmods.com/skyrimspecialedition/mods/23657).

Serana and Valerica replacers exist like sand at the beach and it is very hard choosing one. In the end I choose the previously linked Valerica replacer by Moolgogi and [MBWS Serana](https://www.nexusmods.com/skyrim/mods/63553). The last mod and replacer is by the same author as MBWS Serana: [MBWS Vex](https://www.nexusmods.com/skyrimspecialedition/mods/13527).

### Followers

All of your sexual adventures in Skyrim should not be experienced alone! Follower mods on LL are kinda _meh_ and since this is SSE there are even less than normal.

The first one being [Lucien](https://www.nexusmods.com/skyrimspecialedition/mods/20035) because its funny and his dynamic dialogue is really good. He might not fit this Modlist so you can just ignore him if you want to keep your harem of ladies. You can find him in [Dead Man's Drink](https://en.uesp.net/wiki/Skyrim:Dead_Man%27s_Drink).

[Shindara](https://www.nexusmods.com/skyrimspecialedition/mods/10094) is not fully voiced with non-vanilla sounds but it's a Follower and Dungeon mod in one and my favorite Redguard. You can start the quest by talking to Hulda in the [Bannered Mare](https://en.uesp.net/wiki/Skyrim:The_Bannered_Mare) or travel directly to a new location called _Scorchstone Excavation_ which is north-west from [Drelas' Cottage](https://en.uesp.net/wiki/Skyrim:Drelas%27_Cottage).

I couldn't possibly make a NSFW modlist without including a special NSFW only follower, right? [Rosa Round-Bottom](https://www.nexusmods.com/skyrimspecialedition/mods/13209) fills that slot and can be found near [Angi's Camp](https://en.uesp.net/wiki/Skyrim:Angi%27s_Camp).

The other three followers came from LL:

[Veronica](https://www.loverslab.com/files/file/8781-veronica-the-flirty-imperial-milf-se/) can be found at the [Silver-Blood Inn](https://en.uesp.net/wiki/Skyrim:Silver-Blood_Inn), [Abigail](https://www.loverslab.com/files/file/8773-abigail-the-lusty-imperial-maid-se/) at [Breezehome](https://en.uesp.net/wiki/Skyrim:Breezehome) or roaming around Whiterun and the two new [Succubus Follower](https://www.loverslab.com/files/file/9972-succubus-follower-spells-player-armor-and-psq-transform-addon/) in the [Temple of Dibella](https://en.uesp.net/wiki/Skyrim:Temple_of_Dibella).

Links:

- [Lucien - Fully Voiced Follower](https://www.nexusmods.com/skyrimspecialedition/mods/20035) by JosephRussell: [Nexus Mods](https://www.nexusmods.com/users/4958252), [Patreon](https://www.patreon.com/josephrussellauthor)
- [Shindara - The Fire Within - Follower and Dungeon Quest Mod](https://www.nexusmods.com/skyrimspecialedition/mods/10094) by [nachtdaemmerung77](https://www.nexusmods.com/users/2572102)
- [Veronica - The Flirty Imperial Milf - SE 1.0](https://www.loverslab.com/files/file/8781-veronica-the-flirty-imperial-milf-se/) original by [Silver Wolf](https://www.loverslab.com/profile/34001-silver-wolf/), ported by [terciogustavo](https://www.loverslab.com/profile/523400-terciogustavo/)
- [Abigail - The Lusty Imperial Maid - SE 1.0](https://www.loverslab.com/files/file/8773-abigail-the-lusty-imperial-maid-se/) original by [Silver Wolf](https://www.loverslab.com/profile/34001-silver-wolf/), ported by [terciogustavo](https://www.loverslab.com/profile/523400-terciogustavo/)
- [Succubus Follower, Spells, Player Armor and PSQ Transform Addon 1.3](https://www.loverslab.com/files/file/9972-succubus-follower-spells-player-armor-and-psq-transform-addon/) by [EvilReFlex](https://www.loverslab.com/profile/607503-evilreflex/)

### Music

I could not help but to include my favorite Skyrim music mod: [Yggdrasil Music and SoundFX Overhaul SE](https://www.nexusmods.com/skyrimspecialedition/mods/21578). It's lore-friendly Dark Folk (Nordic) music which may not really fit this Modlist but I fucking love it so here you go.

[Dreams and Nightmares](https://www.nexusmods.com/skyrimspecialedition/mods/25416), another mod adding dark and melancholic exploration tracks.

Links:

- [Yggdrasil Music and SoundFX Overhaul SE](https://www.nexusmods.com/skyrimspecialedition/mods/21578) by [kilateone](https://www.nexusmods.com/users/31481845)
- [Dreams and Nightmares Music Mod](https://www.nexusmods.com/skyrimspecialedition/mods/25416) by [Nyghttones](https://www.nexusmods.com/users/68508590)

### UI

I won't list your common UI mods in here that every other modlist uses and only the important ones:

[Floating Damage](https://www.nexusmods.com/skyrimspecialedition/mods/14332) in combination with [moreHUD](https://www.nexusmods.com/skyrimspecialedition/mods/12688) is important for combat so you can know how much HP the enemy has, when someone blocked and how much damage someone has taken.

For loading screens I went with [Nexus Loading Screens Reborn](https://www.nexusmods.com/skyrimspecialedition/mods/21349), [Lore-Based Loading Screens](https://www.nexusmods.com/skyrimspecialedition/mods/1185) and [Uncle Sheo Does Legendary Loading Screens](https://www.nexusmods.com/skyrimspecialedition/mods/1801) for the lulz.

In a perfect world you don't need loading screens but loading times can sometimes be longer than expected so at least you got something to look and laugh at. If you want some more _interesting_ loading screens you should try out these highly NSFW ones: [AirplaneRandy's Erotica Replacer](https://www.loverslab.com/files/file/12278-airplanerandys-erotica-replacer-main-menuloading-screenintro-video/)

The most notable UI change is the ESO dark UI preset from [Customizable UI Replacer](https://www.nexusmods.com/skyrimspecialedition/mods/18398) for [SkyHUD](https://www.nexusmods.com/skyrimspecialedition/mods/463/).

Links:

- [Floating Damage](https://www.nexusmods.com/skyrimspecialedition/mods/14332) by [Felisky384](https://www.nexusmods.com/skyrimspecialedition/users/19968244)
- [moreHUD](https://www.nexusmods.com/skyrimspecialedition/mods/12688) by [ahzaab](https://www.nexusmods.com/skyrimspecialedition/users/368196)
- [Nexus Loading Screens Reborn](https://www.nexusmods.com/skyrimspecialedition/mods/21349) by [mnikjom](https://www.nexusmods.com/skyrimspecialedition/users/12567611)
- [Lore-Based Loading Screens](https://www.nexusmods.com/skyrimspecialedition/mods/1185) by [Chesko](https://www.nexusmods.com/skyrimspecialedition/users/187943)
- [Uncle Sheo Does Legendary Loading Screens](https://www.nexusmods.com/skyrimspecialedition/mods/1801) original by [tumbleworld](https://www.nexusmods.com/skyrim/users/470889) and [Nonmeatbag](https://www.nexusmods.com/skyrim/users/2780823) converted by [Elianora](https://www.nexusmods.com/skyrimspecialedition/users/3231858)
- [Customizable UI Replacer](https://www.nexusmods.com/skyrimspecialedition/mods/18398) by [Elxdark](https://www.nexusmods.com/skyrimspecialedition/users/6560188)
- [SkyHUD](https://www.nexusmods.com/skyrimspecialedition/mods/463/) by [Fhaarkas](https://www.nexusmods.com/skyrimspecialedition/users/1157655)

### Cathedral Mods

"_The [Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/19515) is a comprehensive visual overhaul for Skyrim. It is performance friendly, consisting mostly of re-textures, improved models, and lighting modifications, so that you can use it as a foundation without having to worry extensively about compatibility._" - Introduction for the Cathedral mods

I choose to use most of the Cathedral mods in this Modlist for the reasons above. The most important one you need to watch out for is [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791). This is the weather mod for the Modlist and if you want to swap out the ENB, than you need one that is compatible with this weather mod.

Links:

- [Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/19515) (unreleased)
- [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791)
- [Majestic Mountains - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/11052)
- [Landscapes - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/21954)
- [8K Night Skies - Stars and Galaxies - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/20301)
- [Cathedral Water Overhaul - Includes Water Edge Bug Fix](https://www.nexusmods.com/skyrimspecialedition/mods/22962)

### Outfit Mods

(read [Character Mods](#character-mods) first)

There are way too many outfit mods out there. This is also highly subjective and you can always just change outfits you don't like (see [Outfits](#outfits) section).

The most prominent outfit authors in this setup are of course [DeserterX](https://www.nexusmods.com/users/3373573) and [docteure](https://www.nexusmods.com/skyrimspecialedition/users/43643027) + [Jeir](https://www.nexusmods.com/users/84177) ([Patreon](https://www.patreon.com/docteur87andJeir)). Highly recommend you follow them and leave an endorsement on their mods.

For vanilla outfits I used the BodySlide files that come with [CBBE](https://www.nexusmods.com/skyrimspecialedition/mods/198) and added the converted [Spice Gear Collection](https://www.nexusmods.com/skyrim/mods/68028) and [Minidress Collection](https://www.nexusmods.com/skyrim/mods/47376) by [tiwa44](https://www.nexusmods.com/users/3347902). The CBBE conversion can be found [here](https://www.nexusmods.com/skyrimspecialedition/mods/16321) and [here](https://www.nexusmods.com/skyrimspecialedition/mods/16322), made by [Gigist](https://www.nexusmods.com/users/16558474).

I like the Spice Gear + Minidress Collections because it a good middle between slutty and boring vanilla and serves as a nice baseline to build upon.

And boi do we go slutty with the next one: [The Amazing World of Bikini Armor](https://www.nexusmods.com/skyrimspecialedition/mods/9547) originally by made by [NiseTanaka](https://www.nexusmods.com/skyrim/users/1575830) ([Original Oldrim mod](https://www.nexusmods.com/skyrim/mods/83383)) and converted by [Daymarr](https://www.nexusmods.com/skyrimspecialedition/users/8194845) to CBBE SE.

[Realistic Eyeglasses](https://www.nexusmods.com/skyrimspecialedition/mods/11807) is a mod which I always want to add but never find for some reason. Whenever I start a new modding setup for Skyrim and start downloading outfits, I always look forward to getting this mod but forget the name once I actually search for it. Anyways, those are the best eyeglasses you will find on Nirn. Do they fit this Modlist? Maybe. I fucking love them so deal with it.

[Team TAL](https://www.patreon.com/takealook) puts amazing outfits from other games into Skyrim, they mostly create LE mods but they sometimes get ported to SSE with SMP and BodySlide for CBBE.

Links:

- [DeserterX on Nexus mods](https://www.nexusmods.com/users/3373573)
- [docteure on Nexus mods](https://www.nexusmods.com/users/43643027)
- [Jeir on Nexus Mods](https://www.nexusmods.com/users/84177)
- [docteure and Jeir on Patreon](https://www.patreon.com/docteur87andJeir)
- [Team TAL on Patreon](https://www.patreon.com/takealook)

### Weapon Mods

Most used weapon mods came from [johnskyrim](https://www.nexusmods.com/users/3165110). Those are:

- [Radzig Longsword](https://www.nexusmods.com/skyrimspecialedition/mods/16059) contains both a one-handed and two-handed sword from Kingdom Come: Deliverance. Can be both be smithed using the Skyforge or found in the Guard Barracks of Whiterun
- [The Lionheart](https://www.nexusmods.com/skyrimspecialedition/mods/15076) shield from WoW, can be smithed under the Daedric category
- [Sulfuras - The Reclaimed Hand](https://www.nexusmods.com/skyrimspecialedition/mods/14199) two-handed hammer from WoW, can be obtained at the end of a [dungeon](https://staticdelivery.nexusmods.com/mods/1704/images/64628-2-1428782512.jpg)!
- [Shadowmourne](https://www.nexusmods.com/skyrimspecialedition/mods/12081) two-handed Axe from WoW, can be obtained at the end of a dungeon with a dope boss fight!
- [Dragonblade AQ](https://www.nexusmods.com/skyrimspecialedition/mods/29341) one-handed sword based on the Dragon Blade from Adventure Quest. Can be found on a cliff overlooking [Dragontooh Crater](https://en.uesp.net/wiki/Skyrim:Dragontooth_Crater) ([pic](https://i.imgur.com/XtnDpxj.png)) or can be forged under the Daedric category
- [Blade of Evil's Bane](https://www.nexusmods.com/skyrimspecialedition/mods/28881) one-handed weapon based on the Blade of Evil's Bane from the Legend of Zelda. Can be found [here](https://staticdelivery.nexusmods.com/mods/1704/images/28881/28881-1567955685-1349624090.png), embedded in a skull/rock north of Morthal.

Our ranged characters also get a bit of love with [DX Faction Crossbows](https://www.nexusmods.com/skyrimspecialedition/mods/4047). You need specific crafting manuals to craft those.

[Artifacts - The Tournament of the ten Bloods](https://www.nexusmods.com/skyrimspecialedition/mods/15264) has some amazing equipment you can get through a quest. You can start the quest by reading _The Story of Lyrisius_ in the Arcanaeum.

Vanilla artifacts are fucking useless. [Zim's Immersive Artifacts](https://www.nexusmods.com/skyrimspecialedition/mods/9138) is in every setup I do and will give those under-powered artifacts a reason to exist in your inventory.

Links:

- [Radzig Longsword SE](https://www.nexusmods.com/skyrimspecialedition/mods/16059) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [The Lionheart SE](https://www.nexusmods.com/skyrimspecialedition/mods/15076) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [Sulfuras - The Reclaimed Hand SE](https://www.nexusmods.com/skyrimspecialedition/mods/14199) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [Shadowmourne SE](https://www.nexusmods.com/skyrimspecialedition/mods/12081) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [Dragonblade AQ SE](https://www.nexusmods.com/skyrimspecialedition/mods/29341) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [Blade of Evil's Bane SE](https://www.nexusmods.com/skyrimspecialedition/mods/28881) by [johnskyrim](https://www.nexusmods.com/users/3165110)
- [DX Faction Crossbows SE](https://www.nexusmods.com/skyrimspecialedition/mods/4047) by [DeserterX](https://www.nexusmods.com/users/3373573)
- [Artifacts - The Tournament of the ten Bloods](https://www.nexusmods.com/skyrimspecialedition/mods/15264) by [FrankFamily](https://www.nexusmods.com/users/2531318)
- [Zim's Immersive Artifacts](https://www.nexusmods.com/skyrimspecialedition/mods/9138) by [Zimmermjaz](https://www.nexusmods.com/users/5756779)

### Poses

If you created a sexy character or just wanna have some fun screenshotting stuff, you might want to use some pose mods. I have opted to use [Poser Hotkeys SE](https://www.loverslab.com/files/file/5132-poser-hotkeys-se/) instead of [Poser Hotkeys Plus SSE](https://www.nexusmods.com/skyrimspecialedition/mods/17743) because I could not get that one to work...

Anyway: Installed are [GomaPero Poses](https://www.loverslab.com/files/file/4917-gomapero-poses-se/) and [Shocky's Poses Pack](https://www.loverslab.com/files/file/5134-shockys-poses-pack-se/). I stripped all spells, rings and whatnot from the plugins and merged them into `Poser - Merged.esp`. Check [Poser Hotkey MCM](#poser-hotkeys) for the hotkeys and [Adding Poser Mods](#pose-mods) if you want to add more poses.

Do note that the pose mods are disabled by default because they had some funky incompatibilities with other mods.

Links:

- [Poser Hotkeys SE 1.0.0](https://www.loverslab.com/files/file/5132-poser-hotkeys-se/) original by [mz1n](https://www.nexusmods.com/skyrim/users/18035569), converted by [Andreis](https://www.loverslab.com/profile/1770706-andreis/)
- [GomaPero Poses SE](https://www.loverslab.com/files/file/4917-gomapero-poses-se/) original by [GomaPero](https://twitter.com/GomaPeroPero), converted by [Andreis](https://www.loverslab.com/profile/1770706-andreis/)
- [Shocky's Poses Pack SE 1.0.0](https://www.loverslab.com/files/file/5134-shockys-poses-pack-se/) original by [Shocky](https://www.loverslab.com/profile/150878-shocky/), converted by [Andreis](https://www.loverslab.com/profile/1770706-andreis/)

### ENB: Silent Horizon

ENBs for Special Edition never really convinced me. [SnowFall Weathers](https://www.nexusmods.com/skyrim/mods/79335) singlehandedly made me stay with Oldrim for 3 years since it came out. I choose [Silent Horizon](https://www.nexusmods.com/skyrimspecialedition/mods/21543) for this Modlist, mainly because of its performance and set of features. It is also compatible with [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791), the weather mod of this list.

If you have a Titan V and more FPS than you need, check the [ENB](#enb) section for ENBs you can swap to.

Links:

- [Silent Horizons ENB](https://www.nexusmods.com/skyrimspecialedition/mods/21543) by [LonelyKitsune](https://www.nexusmods.com/skyrimspecialedition/users/49767351)

## Creating your Character

Using [RaceMenu](https://www.nexusmods.com/skyrimspecialedition/mods/19080) you can create a stunning looking character or use one of the many presets included.

If you don't like the idle animation open the console, click on the player and use the `player.sae idlestaticposeastart` command.

## In-Game MCM Options

Once you're finally in-game, have created your character and want to go play Skyrim, you first need to configure the MCM. **Wait until no new messages appear in the top left corner!**

If you get no more messages, save the game and open the MCM.

### 3PCO - 3rd Person Camera Overhaul

**Melee**:

(Personal preference, I like to keep the camera somewhat close to the character. Try different values and find what feels best to you!)

*Positive X Offset* - `60`

*Negative X Offset* - `60`

### A Matter of Time

**Presets**:

User settings

*Load user settings* - `GO`

### AGO

**Settings**:

Enable/Disable

*Arrow Wounds (Player)* - `Disabled`

*Arrow Wounds (NPCs)* - `Disabled`

*Persistent Arrows* - `Disabled`

### Bestial Essence

**Settings**:

*Controller Vibration During Sex* - `Disabled`

(If you don't want Creature animations use the `Fade to Black During Sex` options or don't play this quest)

### Blush When Aroused

**General**:

Compatibility

*SexLab Aroused Redux* - `Enabled`

**Cause and Effect**:

Player

*Nakedness* - `Enabled`

NPCs

*Nakedness* - `Enabled`

**Exceptions**:

Player types

*Victims blush* - `Enable`

NPC types

*Victims blush* - `Enable`

### CBBE 3BBB Addon

Player Use Set

*Player Use Slot*: `60 - Devious Devices Compatible`

You can either use a hotkey (`Numpad +` by default) or a spell to toggle the Physics for the player.

*Add Player 3BBB Physics Toggle Spell*: `Enable`

Exit the MCM, go to your Spells Menu and use `3BBB Physics Toggle - Player`

### Follower Framework

**Activity**:

Sandboxing

*Ignore Special Furniture* - `Enabled`

*Stop During Player Dialogue* - `Enabled`

*Only Sandbox in Town* - `Enabled`

*Only Sandbox in Non-Dungeon* - `Enabled`

**System**:

Hotkeyed Abilities

(You don't have to assign any hotkeys if you want. As a [Republic Commando](https://store.steampowered.com/app/6000/STAR_WARS_Republic_Commando/) lover, I like to assign the F1-F4 hotkeys)

*Command Followers* - `F4`

*Calm Followers* - `F3`

*Followers Retreat* - `F2`

*Followers Attack* - `F1`

### Forgotten Wenches

**Forgotten Configuration**:

Ondeath Summon Chance

*Forgotten Wench Spawn* - `5% Chance`

### Growl Werebeasts

**Features**:

*Invulnerable During Transformation* - `Enabled`

### Hateful Wenches

**Hateful Configuration**:

Summon Undead Wench Spell

*Draugrs* - `10%`

*Dragon Priests* - `15%`

### Judgment Wenches

**Judgment Configuration**:

Judgment Wenches spawn chance.

*Judgment Wench* - `10%`

### Nemesis PCEA

Animation Pack(s)

(activate either `0Female` or `1Male` depending on your gender)

### Normal Attack Stamina Consuption

*Stamina Consumption* - `10%`

### Quick Light

(Brightness can be adjusted to whatever you like)

*Brightness* - `Wide`

### Sacrosanct Vampires

**Vampire Spells, Powers and Abilities**:

*Fortitude*: `Disable`

### Schlongs of Skyrim

**General Settings**:

Global Settings

*SOS Potions* - `Disabled`

### Sky UI

(Sky UI keeps bitching about the map sfw being outdated. This can be ignored and disabled.)

**Advanced**:

SWF Version Checking

*Map Menu*: `Disable`

### SSSO

*Rotating Automatic Save* - `Enabled`

*Auto Save Count* - `5 Slots`

### The Ultimate Dodge Mod

Player Settings

(Set the sneak key in the game settings to the key you want to doge with and set the sneak key here to the key you want to sneak with :5head:)

*Sneak Key* - `Ctrl`

### Ultimate Combat

**General**:

Stagger

*Enemy Poise* - `Disabled`

*Player Stagger* - `Disabled`

**NPC Setting**:

NPC

*Dodge* - `Disable`

### VioLens

Melee

*Player Killmove Immunity* - `Enable`

### WetFunction Redux

**Visuals**:

Texture effects

Disable everything except `Body - Sweat`

Texture swapping - female

Disable everything except `Body (specular)`

### Wildcat Combat

**Dynamic Combat**:

*Disable Dynamic Combat* - `Enable`

Attacks of Opportunity

*Disable Penalties vs. Massive Targets* - `Enable`

### XPMSE

**Styles**:

Quiver Style

*Player* - `Frostfall Quiver (XP32)`

*Non-Player* - `Frostfall Quiver (XP32)`

### SexLab

**Install**:

SexLab v.163 SE dev Beta 8 by Ashal@LoversLab.com

Click `INSTALL/UPDATE SEXLAB 1.63 SE DEV BETA 8`

Close the MCM and wait until you receive the message:

`SexLab - SexLab v1.63 SE dev beta 8 - Ready!`

Save your game, reopen the MCM and continue configuration of SexLab

**Animation Settings**:

(If you don't want Creature animations, skip this step)

*Allow Creature Animations* (Top Right, Under Animation Profile) - `Enabled`

Close the MCM and wait until you receive the message:

`SexLab Creature Animations Installed`

Save your game, reopen the MCM and continue configuration of SexLab

**Rebuild & Clean**:

Click `Import Settings`, click `Accept`.

### SexLab Aroused

**SETTINGS**:

General

*Purge Dead Actors Every 10 Game Days* - `Enabled`

*Enable SOS* - `Enabled`

Arousal

*Default Exposure Rate* - `1.7` (personal preference)

*Decay Rate* - `1.5` (personal preference)

### Radiant Prostitution

**PC Settings**:

Stripping

*Use Beds* - `Enable`

Reward Settings

*Female PC Gold Bonus* - `10`

*Male PC Gold Bonus* - `40`

### SL Anim Loader

**General Options**:

Click `Enable All`

Click `Register Animations`

Wait in the MCM until you receive the Completed message

### Defeat

**General Settings**:

Click `Mod Status - Disabled`

Close the MCM and wait for the message `Defeat: Installed` and reopen the MCM.

Click `Import settings`.

### Devious Devices (MCM)

**Devices**:

(select your difficulty here, I recommend going with _Questioning_)

*Disable Lock Jam* - `Enabled`

### Deviously Helpless

**Features**:

Scene options

*Attackers steal keys* - `Disabled`

**Restraints equipping**:

*Enemy item chance* - `10%`

*Restrictive item change* - `20%`

*Allow enemy blindfolds* - `Disabled`

*Allow enemy boots* - `Disabled`

**Triggers**:

ZaZ Animation pack

*Arm cuffs* - `Enabled`

*Leg cuffs* - `Enabled`

### Devious Device Helpers

**Basic Settings**:

Feature Enables

*No keys consumed at end of play time* - `Enabled`

Where follower may ask to tie player

(disable everything except `Player Homes`)

How often to ask player

*Minimum days to wait* - `2 Days`

Duration of play sessions

*Maximum hours to play* - `1.5 Hours`

### Cursed Loot

**Debug**:

(click *Import Settings* or disable the mod with *Shut down all functions*)

### SLA Monitor Widget

**Widget Looks**:

Widget position

*Horizontal anchor* - `Left`

*Vertical anchor* - `Center`

### Spell Research

**Options**:

Click `Import Spells`, close the MCM and click `YES` to every prompt.

## Adding more Mods

### Using LOOT

I like LOOT. It can be great if you are willing to invest some time in setting up some groups and custom rules. I still can't understand why most modlist authors and "pro modder" refuse to use LOOT, guess they never tried. Anyway: this modlist comes with a ton of custom rules, groups and whatnot to make it even easier adding mods.

You can access the Groups Editor by using the three dots in the top right corner and selecting "Open Groups Editor". The graph will most likely make no sense to you but this is what I use. Some groups are auto-assigned using Regex. If you have no idea what Regex than don't even bother trying to understand it.

- "Enemy Variations": `^(Enemy\sVariations)\s(V3|V4)\s-\s(?!NPCs)(?!Weapons)(?!Armor)[^\.]+\.(esp|esl)$`
- "Enemy Variations - Armor": `^(Enemy\sVariations)\s(V3|V4)\s-\s(Armor)[^\.]+\.(esp|esl)$`
- "Enemy Variations - NPCs": `^(Enemy\sVariations)\s(V3|V4)\s-\s(NPCs)(?!\s-\sResourcesSSE)(?!\s-\sTextures)[^\.]*\.(esp|esl)$`
- "Enemy Variations - Weapons": `^(Enemy\sVariations)\s(V3|V4)\s-\s(Weapons)[^\.]+\.(esp|esl)$`
- "kryptopyr's Patches": `^(CACO|TCIY|CCOR|WACCF|SPO)[\s_][^P]?(Patch)?[^\.]*\.(esp|esl)$` [Example](https://regex101.com/r/9VXgiY/1)
- "LotD Patches": `^(DBM|BCS)_(?!RelicHunter)[^\.]+\.(esp|esl)$` [Example](https://regex101.com/r/o7VOiZ/1)
- "OCW": `^(OCW_)(?!Obscure''s_CollegeofWinterhold)(?!CellSettings)[^\.]+\.(esp|esl)$` [Example](https://regex101.com/r/T5qHVh/1)
- "QUASIPC": `^(Qw_)[^\.]+\.(esp|esl)$` [Example](https://regex101.com/r/sITg6c/1)
- "erri120 Patches": `^(erri120_)[^-]*(-Patch)[^!](esp|esl)$` [Example](https://regex101.com/r/OP6Acn/1)
- "Merges": `^[^-]+(\s-\sMerged).(esp|esl)$` [Example](https://regex101.com/r/hilhlv/1)

Some notes about using Regex in LOOT: there are still some problems, see [this](https://github.com/loot/loot/issues/1193) and [this](https://github.com/loot/libloot/issues/64), and you can't override a regex group assignment.

When adding a new mod with an esp, go into LOOT, use the three dots next to the plugin, click "Edit Metadata", go to the "Main" tab and assign it a group. The group names make somewhat sense like "Outfits", "Followers", "Accessories" or "Weapons". If you're in doubt ask on the discord or use the "default" group.

After assigning a plugin to a group sort the load oder.

### Textures

Textures are by far the easiest mods to install. Simply install the mod and check what other mod also changes the same textures in MO2. The only textures that could be problematic are landscape/environment textures like new mountain textures.

#### Skin Textures

You might not like the default skins (see [Character Mods](#character-mods)) but there is one thing you need to be careful about: seams.

If you change the default female texture, take a look at [this](https://www.loverslab.com/topic/137830-easy-way-to-make-seamless-sos-textures/) post on how to make seamless SOS textures.

### Meshes

Similar to [Textures](#textures) just slap them into MO2. Just be careful that those new meshes are for outfits as those should be compatible with the character body of this setup (see [Character Mods](#character-mods)).

### Animations

New animations can be easily added depending on the category. You have to differentiate between [SLAL Animations](#slal-animations) and [Normal Animations](#normal-animations). The former being animations for Sexlab and the later being animations like [Pretty Sit Idles](https://www.nexusmods.com/skyrimspecialedition/mods/10399).

#### SLAL Animations

[SLAL](https://www.loverslab.com/files/file/5328-sexlab-animation-loader-sse/) or _Sexlab Animation Loader_ requires special animations. You should only install additional Sexlab animations if those are made for SLAL.

Simply install them and re-run [FNIS+Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main/issues/98#issuecomment-605507558). If the animations come with an ESP, than you will have to jump into xEdit or zEdit and find out what the ESP adds/changes. Most ESPs of animations simply add animations objects and do not change any vanilla records. These ESPs can be loaded anywhere in the loadorder.

#### Normal Animations

Simply install the new animations and re-run [FNIS+Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main/issues/98#issuecomment-605507558). You might want to take a look at [Nemesis PCEA2](https://www.nexusmods.com/skyrimspecialedition/mods/31667) if you want those new animations to be player exclusive.

### Pose Mods

(check the [Poses](#poses) section first)

Aside from simply running Nemesis, there are some actions you might want to execute:

You need to do a little work if you want to fully integrate additional pose mods into this setup. The first thing you should do is check compatibility with [Poser Hotkeys SE](https://www.loverslab.com/files/file/5132-poser-hotkeys-se/). Poser Hotkeys requires `PoserData` (see `SKSE/plugins/PoserHotKeys/PoserData/*.json`) which can be generated with the `PoserDataGen` tool (see the executable list).

Pose mods are often standalone and might give you spells and/or rings to use certain poses. You won't need those since we use Poser Hotkeys. I recommend you clean the plugin from the pose mod to remove all those spells, rings, object effects, quests, form id lists and so on. The only records you need are of type `Idle Animation` and `Animated Object`.

Another thing you might want to consider is merging the plugin into the `Poses - Merged.esp` merge. Simply use the `Merge Plugins Hide` MO2 plugin to enable all plugins from that merge, go into zMerge, add that plugin to the merge, re-generate the merge and disable all plugins again with `Merge Plugins Hide`.

### Outfits

Another category of mods you can easily add to this setup. You only have to make sure that the outfits fit the character body (see [Character Mods](#character-mods)). It's also a good idea to find BodySlide files for that outfit so you can customize it.

Install the outfit and, optionally but highly recommended, merge the outfit in the `Outfits - Merged` merge. Use the `Merge Plugins Hide` to activate all plugins from that merge, assign the new plugin to the Outfits LOOT group (see [Using LOOT](#using-loot)), sort with LOOT, open zMerge, add the esp to the merge and rebuild it. Make sure you disable all plugins with `Merge Plugin Hide` when you're finished.

If the outfit contains high heels, check out [Heels Sound](https://www.loverslab.com/files/file/1795-heels-sound/) and change the Footstep Set of the Armor Addon to `AngelFSTHeelsFootstepSet`.

### ENB

The weather mod used in this Modlist is [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791) and the lighting mods are [Relighting Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/8586) and [Enhanced Lighting for ENB (ELE)](https://www.nexusmods.com/skyrimspecialedition/mods/1377). If you want to swap out the ENB, make sure that it is compatible with Cathedral Weathers and looks somewhat decent with RS and ELE. You could try and swap the those two mods with any other weather + lighting mod but this may disrupt the visual consistency that the entire Cathedral lineup has.

Other ENBs you can use (not tested, experience may vary):

ENBs that work with Cathedral Weathers:

- [Silent Horizon](https://www.nexusmods.com/skyrimspecialedition/mods/21543)
- [Ljoss - Semi-realistic performance preset with Nighteye and ENB Light support](https://www.nexusmods.com/skyrimspecialedition/mods/30971)

ENBs that maybe work with Cathedral Weathers:

- [Rudy ENB](https://www.nexusmods.com/skyrimspecialedition/mods/4796)
- [NVT](https://www.nexusmods.com/skyrimspecialedition/mods/11203)
- [PRT](https://www.nexusmods.com/skyrimspecialedition/mods/4743)
- [Apex](https://www.nexusmods.com/skyrimspecialedition/mods/18042)

## Tweaking Performance

My Setup:

- i7-7700k running at ~4.6 GHz
- 1060 6GB overclocked to ~1800MHz (got +160 Core Clock and +400 on Memory Clock)
- 16GB DDR4-3200 RAM (CL 14 iirc)
- Game and MO2 running on an m.2

### Tweaking the ENB

This should always be the first thing you tweak. Disabling the ENB entirely can give you anything from 20 to >70 FPS. The ENB this Modlist comes with (see [ENB: Silent Horizon](#enb-silent-horizon)) is rather performance friendly. Open the ENB GUI using `Right Shift + Enter` (`Right Shift` is under the `Enter` key). This will open up the ENB GUI where you can enable and disable certain effects in the left panel.

- `Bloom`: Can give you up to 3 FPS, will make light sources less bright
- `DepthOfField`: Can give you up to 10 FPS, disabled by default and not really suited for gameplay
- `Ambient Occlusion`: This one is a big hitter. You can get up to 20 FPS by disabling this but the effect is very noticeable
- `Distant/DetailedShadow`: Those two can really give you a lot of FPS back depending on your shader settings (game settings). They are very noticeable.
- `ComplexFire/ParticleLights`: You won't see a lot of difference at first when disabling those two, but when particles are on screen (eg using magic or near light sources such as fires), they can _burn_ through your FPS

### Tweaking the Game Settings

I highly recommend using [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) which is included in this Modlist (can be found in `MO2/tools/BethINI`). I recommend tweaking the `Detail` section for more FPS:

- `Shadow Resolution`: Very big one. A good balance is `2048` which is the borderline between high FPS drainage and garbage looking shadows.
- `Ambient Occlusion`: Highly recommended to leave this at `None`. The ENB this Modlist comes with, uses the ENB SAO which is 10x better and performance friendly than base game SAO.
- `Detailed Draw Distance`: Maybe try `2000` instead of `2800` but you won't notice a lot of FPS gain (maybe 1-3)
- `Remove Shadows`: If you really struggle, use this. This will disable all Shadows (not recommended)

### Using dxvk

**THIS IS EXPERIMENTAL AND I WON'T PROVIDE SUPPORT IF YOU USE IT**!

[DXVK](https://github.com/doitsujin/dxvk) is a Vulkan-based implementation of various DirectX versions. Did that sentence made no sense to you? Vulkan and DirectX are APIs that can be used in game engines to tell your graphics card how to render stuff. LE uses DirectX 9 (D3D9) while SSE uses DirectX 11 (D3D11).

You can _try_ using DXVK. Vulkan runs better on AMD cards and better for D3D9 games. SSE is D3D11 so it may not even work for you. I recommend not using DXVK if you don't want to tinker with it but you are welcome to try it out.

To use it, grab the latest [release](https://github.com/doitsujin/dxvk/releases), extract the archive and grab `x64/d3d11.dll` and `x64/dxgi.dll`. ENB might not be compatible with DXVK so I recommend trying it without one first. Copy those files into the main Skyrim folder and download this [dxvk.conf](https://pastebin.com/KAgwsbBf) file. This is the config file that works on my system so you might wanna tweak it for yours.

If you do wanna use an ENB and you made DXVK work without an ENB, rename `d3d11.dll` to `d3d11_dxvk.dll`, install an ENB, open `enblocal.ini` and add `d3d11_dxvk.dll` as a proxy library:

```ini
[PROXY]
EnableProxyLibrary=true
InitProxyFunctions=true
ProxyLibrary=d3d11_dxvk.dll
```

## Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ENB files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ENB.

## Afterword

I must applaud you if you have read the entire README. I started with this modlist in December 2019 and thought about it as early as November I think. When creating this modlist my main goal was to have a NSFW poster boy for Wabbajack and introduce + convince people from other communities to try out Wabbajack. There are still a ton of people who have no idea what Wabbajack does and still associate the word "modpack" with it. I also wanted to show users and modlist authors some good practices when creating a modlist and actually publishing it, this is not about the actual modlist itself but everything around it such as a README, Changelog, how to contribute, releases and so on.

The READMEs of other modlists are mostly written on GDocs and only contain information on how to install the thing and how to setup the MCM. This is fine if you have something like [SME(FT)](https://github.com/EzioTheDeadPoet/SME-FT-) which is a small little starting point but not if you have a massive modlist with 800+ mods, 100+GB downloads and 90% of your README is MCM. My vision for a good modlist README is reflected here and you already read it. It should contain information on the general idea, why you would wanna install it, what you need but most importantly: what you actually get and what are the most important mods you should know about.

I hope we will get more READMEs like this in the future so that the user has a better experience and asks less questions. Other modlists authors often complain about "stupid users" with "stupid questions" even tho their own README has like 20 lines on how to install it. It might also be that NSFW users are simply superior to plebs but I rarely get stupid questions since you can just pop up this README and likely find the information you need.

Another reason I wanted to create an maintain a modlist is because I am also developing Wabbajack. Since starting this modlist I have added a lot of additional features and fixed equally as much bugs because I actually used the program I develop. I have previously only compiled test modlists and installed some major public ones but never compiled a huge modlist like this myself.

## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack) (`#nsfw-mod-discussion`), I would advise checking the [Issues](https://github.com/erri120/lotus/issues) (open **and** closed ones) on GitHub first if you have any problems. The same goes for _Enhancements_ or _Feature/Mod Requests_. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS AND I WILL BLOCK YOU**.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

See [Changelog](CHANGELOG.md).

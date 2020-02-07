# Lotus

- [Lotus](#lotus)
  - [Preamble](#preamble)
  - [Requirements](#requirements)
    - [System Specs](#system-specs)
  - [Installation](#installation)
    - [Pre-Installation](#pre-installation)
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
  - [Updating](#updating)
  - [Important Mods you should know about](#important-mods-you-should-know-about)
    - [SexLab - Frameworks](#sexlab---frameworks)
    - [In-Game MCM Options](#in-game-mcm-options)
      - [3PCO - 3rd Person Camera Overhaul](#3pco---3rd-person-camera-overhaul)
      - [AGO](#ago)
      - [Follower Framework](#follower-framework)
      - [Growl Werebeasts](#growl-werebeasts)
      - [Nemesis PCEA](#nemesis-pcea)
      - [Quick Light](#quick-light)
      - [Storm Lightning](#storm-lightning)
      - [Ultimate Combat](#ultimate-combat)
      - [The Ultimate Dodge Mod](#the-ultimate-dodge-mod)
      - [Wildcat Combat](#wildcat-combat)
      - [XPMSE](#xpmse)
      - [SexLab](#sexlab)
      - [SL Anim Loader](#sl-anim-loader)
      - [Schlongs of Skyrim](#schlongs-of-skyrim)
      - [SexLab Aroused](#sexlab-aroused)
      - [Sacrosanct Vampires](#sacrosanct-vampires)
      - [Sexlab Approach Redux](#sexlab-approach-redux)
      - [Blush When Aroused](#blush-when-aroused)
      - [Defeat](#defeat)
      - [SSSO](#ssso)
      - [Forgotten Wenches](#forgotten-wenches)
      - [Hateful Wenches](#hateful-wenches)
      - [Judgment Wenches](#judgment-wenches)
      - [Beastess](#beastess)
      - [Bestial Essence](#bestial-essence)
  - [Adding more Mods](#adding-more-mods)
    - [ENB](#enb)
  - [Tweaking Performance](#tweaking-performance)
    - [Tweaking the ENB](#tweaking-the-enb)
    - [Tweaking the Game Settings](#tweaking-the-game-settings)
  - [Removing the Modlist](#removing-the-modlist)
  - [Contact](#contact)
  - [Contributing](#contributing)
  - [Changelog](#changelog)

## Preamble

**This Modlist contains mods with sexual content and you need to be of legal age in your country (most western countries: 18+, some eastern ones: 21+)**.

I'm [erri120](https://github.com/erri120), one of the [Developers](https://github.com/wabbajack-tools/wabbajack/contributors) behind [Wabbajack](https://github.com/wabbajack-tools/wabbajack) and a modding veteran for ~[7 years](https://www.nexusmods.com/users/6672467).
As a professional scientist in the field of extreme indulgence in bodily pleasures and the manifestation thereof in video games, I have decided to create a Modlist involving said sinful acts of debauchery.

Now for real: If you want a fully featured and functional Modlist that is playable from start to finish, containing multiple quest, overhauls and sexual mods than you've come to the right GitHub repository.

## Requirements

- [Nexus Premium Account](https://forums.nexusmods.com/index.php?/store/category/1-premium-membership/)
- [LoversLab Account](https://www.loverslab.com/)
- A brain, eyes and time to read through this README

### System Specs

CPU: >= 7th gen Intel processor OR >= AMD Ryzen 3000 series processor
GPU: >= 1060, you need at least 6GB of VRAM
RAM: >= DDR4 with at least 16GBs

Everything should be installed on an SSD that has at least 256GB of space available.

## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

#### Set the Game language to English

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/`.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and open the _Options_ menu.

1) Click on _Ultra_
2) Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3) Set _Antialiasing_ to _Off_
4) Uncheck _Windowed Mode_ and _Borderless_

Start the game and exit once you're in the main menu.

### Using Wabbajack

#### Preparations

Let's get to the actual installation. Grab the latest release from [GitHub](https://github.com/erri120/lotus/releases). You will find `Lotus.wabbajack`, `CHANGELOG.pdf` and `README.pdf`.

Download the release to a _working folder_. This folder **must not** be in _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in the _working folder_.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1) Open Wabbajack
2) Load the Modlist from Disk
3) Adjust the download and installation paths
4) Click the Go/Begin button
5) Wait for Wabbajack to finish

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

## Updating

If this Modlist receives an update, than you should check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## Important Mods you should know about

This section contains information about some of the most important mods in this setup. I made this section so end-users know exactly what mods change what and can read-up on stuff they find interesting as well as give props to the mod authors.

### SexLab - Frameworks

You know this would be first, didn't you...
[SexLab Framework](https://www.loverslab.com/topic/91861-sexlab-framework-se-163-beta-8-november-22nd-2019/) is the core of all installed LL mods. Do note that this is a **beta build**. [SLAL](https://www.loverslab.com/files/file/5328-sexlab-animation-loader-sse/) or _SexLab Animation Loader_ and [SexLab Aroused Redux](https://www.loverslab.com/files/file/5482-sexlab-aroused-redux-sse-version-29/) are included as well.

Since we don't judge your fetishes, I have included [Creature Framework](https://www.loverslab.com/files/file/5462-creature-framework-se/) and [More Nasty Critters](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/).

[Devious Devices](https://www.loverslab.com/files/file/5878-devious-devices-se-beta/) sadly does not work for SSE **yet**, but once that is around, it will of course be included.

Links:

- [SexLab Framework SE 1.63 - BETA 8 - November 22nd, 2019](https://www.loverslab.com/topic/91861-sexlab-framework-se-163-beta-8-november-22nd-2019/)
- [SexLab Animation Loader SSE 1.0.0](https://www.loverslab.com/files/file/5328-sexlab-animation-loader-sse/)
- [SexLab Aroused Redux SSE Version 29 2.9](https://www.loverslab.com/files/file/5482-sexlab-aroused-redux-sse-version-29/)
- [Creature Framework SE 1.0.1](https://www.loverslab.com/files/file/5462-creature-framework-se/)
- [More Nasty Critters Special Edition 12.01](https://www.loverslab.com/files/file/5464-more-nasty-critters-special-edition/)

### In-Game MCM Options

#### 3PCO - 3rd Person Camera Overhaul

**Melee**:

Positive X Offset - 60

Negative X Offset - 60

#### AGO

**Settings**:

Enable/Disable

Persistent Arrows - Disabled

#### Follower Framework

**Activity**:

Sandboxing

Ignore Special Furniture - Enabled

Stop During Player Dialogue - Enabled

Only Sandbox in Town - Enabled

Only Sandbox in Non-Dungeon - Enabled

#### Growl Werebeasts

**Features**:

Invulnerable During Transformation - Enabled

#### Nemesis PCEA

**Animation Pack(s)**:

0Female - Enable if player character is female

1Male - Enable if player character is male

#### Quick Light

Long press time for activate key - 2.0s

#### Storm Lightning

**Presets**:

Click "Realistic"

**Advanced**:

Compatibility Mode - Enabled

#### Ultimate Combat

**General**:

Stagger

Enemy Poise - Disabled

Player Stagger - Disabled

Locational Damage

Locational Damage Sound - Disabled

**NPC Setting**:

NPC

Dodge - Disable

#### The Ultimate Dodge Mod

**Player Settings**:

Sneak Key - V

**NPC Settings**:

NPC Dodging Frequency - Moderate

#### Wildcat Combat

**Dynamic Combat**:

Disable Slow at 0 Stamina - Enabled

Disable Swimming Stamina Cost - Enabled

Disable Bow Interrupts - Enabled

**Stamina Costs**:

Bow Attacks Cost - 0 Stamina

Disable Pulled / Held Bow Stamina Cost - Enabled

**Timed Block**:

Disable Timed Block - Enabled

**Difficulty**:

Allow Wildcat to Manage Difficulty - Enabled

Expert - Damage Dealt: x1.75

Expert - Damage Taken: x1.50

#### XPMSE

**Styles**:

Quiver Style

Player - Frostfall Quiver (XP32)

Non-Player - Frostfall Quiver (XP32)

#### SexLab

**Install**:

SexLab v.163 SE dev Beta 8 by Ashal@LoversLab.com

Click "INSTALL/UPDATE SEXLAB 1.63 SE DEV BETA 8"

Close the MCM and wait until you receive the message 

"SexLab - SexLab v1.63 SE dev beta 8 - Ready!"

Reopen the MCM and continue configuration of SexLab

**Animation Settings**:

Allow Creature Animations (Top Right, Under Animation Profile) - Enabled

Close the MCM and wait until you reseach the message

"SexLab Creature Animations Installed"

Reopen the MCM and continue configuration of SexLab

**Animation Settings**:

Player Settings

Automatic Free Camera - Enabled

Free Camera Speed - 4

**Extra Effects**

Apply Facial Expressions - Enabled

NPCs Use Beds - Sometimes

Animation Handling

Pre-Sex Foreplay - Enabled

Clear High Heels Height - Enabled

**Player Hotkeys**:

Alignment Adjustments

Adjust Schlong - Upward/Downward - Page Up

#### SL Anim Loader

**Babo Creature**:

Click "Enable All"

**Babo Human**:

Click "Enable All"

**General Options**:

Click "Register Animations"

Wait in the MCM until you receive the Completed message

#### Schlongs of Skyrim

**General Settings**:

Global Settings

SOS Potions - Disabled

#### SexLab Aroused

**SETTINGS**:

**General**

Purge Dead Actors Every 10 Game Days - Enabled

Enable SOS - Enabled

Default Exposure Rate - 1.7

Decay Rate - 1.5

#### Sacrosanct Vampires

**Vampire Spells, Powers and Abilities**:

Fortitude: Disable - Enabled

#### Sexlab Approach Redux

**General Setting**:

Arousal

NPCs Lowest Arousal - 15

#### Blush When Aroused

**General**:

Compatibility

Sexlab Aroused Redux - Enabled

**Cause and Effect**:

Player

Nakedness - Enabled

NPCs

Nakedness - Enabled

#### Defeat

**General Settings**:

Click "Mod Status - Disabled"

Close the MCM and wait for the message "Defeat: Installed"

QuickSave and QuickLoad the game

Open the MCM Menu and resume configuring Defeat

**General Settings**:

Click "Import Settings" and then click "Accept"

Close and reopen the MCM Menu

#### SSSO

Rotating Automatic Save - Enabled

Auto Save Count - 5 Slots

Delay Before Exit Game - 7 Seconds

#### Forgotten Wenches

**Forgotten Configuration**:

Ondeath Summon Chance

Forgotten Wench Spawn - 25% Chance

#### Hateful Wenches

**Hateful Configuration**:

Summon Undead Wench Spell

Draugrs - 20%

#### Judgment Wenches

**Judgment Configuration**:

Judgment Wenches spawn chance.

Judgment Wench. - 25%

#### Beastess

**Beastess Setup**:

Enable or Disable Mod

Click "Enable or Disable Mod" then click "Accept"

Close the MCM and wait for a message that begins "You feel a dark power..."

Click "Ok"

#### Bestial Essence

**Settings**:

Controller Vibration During Sex - Disabled

## Adding more Mods

### ENB

## Tweaking Performance

### Tweaking the ENB

### Tweaking the Game Settings

## Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ENB files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ENB.

## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack), I would advise checking the [Issues](https://github.com/erri120/lotus/issues) (open **and** closed ones) on GitHub first if you have any problems. The same goes for _Enhancements_ or _Feature/Mod Requests_.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

The Changelog can be viewed here: [Changelog](CHANGELOG.md)

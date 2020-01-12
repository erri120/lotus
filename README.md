# Lotus

- [Preamble](#preamble)
- [Main focus of this Modlist](#main-focus-of-this-modlist)
- [Installation](#installation)
  - [Pre-Installation](#pre-installation)
  - [Wabbajack](#wabbajack)
- [Updating](#updating)
- [In-Game MCM Options](#in-game-mcm-options)
  - [Quick Light](#quick-light)
  - [Nemesis PCEA](#nemesis-pcea)
  - [SSSO](#ssso)
- [Important Mods you should know about](#important-mods-you-should-know-about)
  - [CBBE](#cbbe)
  - [Nemesis](#nemesis)
  - [Cathedral Mods](#cathedral-mods)
  - [ENB: Ljoss](#enb-ljoss)
- [Adding more mods](#adding-more-mods)
  - [Textures](#textures)
  - [Outfits](#outfits)
  - [Animations](#animations)
  - [ENB](#enb)
- [Tweaking Performance](#tweaking-performance)
  - [Tweaking the ENB](#tweaking-the-enb)
  - [Tweaking the Game Settings](#tweaking-the-game-settings)
- [Removing the Modlist from your System](#removing-the-modlist-from-your-system)
- [Contact](#contact)

## Preamble

I'm [erri120](https://github.com/erri120), one of the [Developers](https://github.com/wabbajack-tools/wabbajack/contributors) who work on [Wabbajack](https://https://github.com/wabbajack-tools/wabbajack). This is both a good and bad reason for having a Modlist up and running:</br>
I compile this Modlist not from the latest release but from the latest commit on the master branch of Wabbajack. This means that you will get pretty fast updates but updates using a Wabbajack that is not even publicly available.

## Main focus of this Modlist

"_Is this Modlist the most graphical intense and beautiful Modlist?_" No.

"_Is it the most realistic?_" Hell no!

"_Does it fix everything?_" Maybe?

"_Is this a base for adding more mods?_" Kinda...

"_What the hell is this and why does this exists?_" Let me explain:

This is a medium Modlist. _What is medium_ you may ask. It is not heavy but also not light. It has re-textures for most but not all textures. It fixes a lot but not all bugs. It can be expanded upon but not with everything you see on the Nexus.

## Installation

### Pre-Installation

Before you can go and start Wabbajack, there is still some stuff you need to do:

**Have a clean Skyrim Special Edition Installation available**:

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/`.

**Disable Steam Overlay**:

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

**Change Steams automatic updates config**:

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

**Play the game in English**:

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

**Change the base Skyrim settings**:

After you have done everything above and now have a clean SSE installation you can start the Launcher and open the _Options_ menu.

1) Click on _Ultra_
2) Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3) Set _Antialiasing_ to _Off_
4) Uncheck _Windowed Mode_ and _Borderless_

### Wabbajack

Let's get to the actual installation. Grab the latest release from [GitHub](https://github.com/erri120/lotus/releases). Since I'm part of the Wabbajack Team and actively developing the program, I include the exact build used to create the Modlist in the release. This means you will download Wabbajack from here and **not** from the Wabbajack release page.

Download the release to a _working folder_. This folder **must not** be in _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder at `C:/Wabbajack` or on any other drive.

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

**Installation**:

1) Open Wabbajack
2) Load the Modlist from Disk
3) Check that the paths are correctly set
4) Click Begin
5) Wait a long time for Wabbajack to finish

Check [In-Game MCM Options](#in-game-mcm-options) once you have started the game.

## Updating

If this Modlist receives an update than you should always check the Changelog for that release before doing anything. Always backup your saves in case anything happens or start anew with the update depending on the changes made.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## In-Game MCM Options

Once you're in the actual game, there are still some MCM options you should configure before starting your playthrough. This is entirely optional but highly recommended since some options can change your game substantially.

### Quick Light

Change _Set light key_ to whatever you prefer. Pressing this key for the time specified at _Long press time for activate key_ will give you a light source to illuminate the darkness.

Mod: [Quick Light SE](https://www.nexusmods.com/skyrimspecialedition/mods/12633)

### Nemesis PCEA

This menu lets you enable/disable player only animations. The _0Female_ and _1Male_ are from the [Realistic Animation Project - Movement](https://www.nexusmods.com/skyrim/mods/77343) mod which I ported to SSE. I highly recommend you check the animations for whatever gender your character is.

Mod: [Project New Reign - Nemesis PCEA](https://www.nexusmods.com/skyrimspecialedition/mods/31667)

### SSSO

SSSO aka _Skyrim SafeSave System Overhaul_ lets you change the way autosaves work. Do note that the _Manual Save key_ is set to _ESC_ meaning _none_ at the start. The default values are fine but you can spice up your playthrough with the _Enable hardcore Mode_ and _Enforced hardcore mode_ if you want.

Mod: [Skyrim SafeSave System Overhaul - Rotating save and optional Hardcore mode](https://www.nexusmods.com/skyrimspecialedition/mods/19399)

## Important Mods you should know about

This section contains information about some of the most important mods in this Modlist. If you want to add more mods (see [Adding more mods](#adding-more-mods)) than take a look at this section for maximum compatibility.

### CBBE

Since the dawn of mankind, we asked the question _CBBE or UNP?_. This Modlist utilizes the newest addition to the Skyrim Special Edition Modding Community: [CBBE 3BBB](https://www.nexusmods.com/skyrimspecialedition/mods/30174). As you can probably guess from the name, this is built upon CBBE and can be categorized as a CBBE mod. If you want to add any mod and can choose between different body types, make sure you select CBBE.

CBBE 3BBB has the ability to swap between HDT-SMP and CBPC physics on the fly using a power. I have installed CBBE 3BBB with the _Full SMP_ option meaning that you will get _the most physics_ when using HDT-SMP. Do note that HDT-SMP can be resource hungry (especially on the CPU) so compare the FPS of both options to see what works best for you.

Links:

- [CBBE](https://www.nexusmods.com/skyrimspecialedition/mods/198)
- [CBBE 3BBB](https://www.nexusmods.com/skyrimspecialedition/mods/30174)
- [BodySlide and Outfit Studio](https://www.nexusmods.com/skyrimspecialedition/mods/201)
- [HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/30872)
- [CBPC](https://www.nexusmods.com/skyrimspecialedition/mods/21224)

### Nemesis

[Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main) and [Nemesis PCEA](https://www.nexusmods.com/skyrimspecialedition/mods/31667) got added pretty late into this Modlist. In case you have no idea what Nemesis is: Nemesis is, in a nut shell, a replacement for [FNIS](https://www.nexusmods.com/skyrimspecialedition/mods/3038) and Nemesis PCEA is a direct replacement for [FNIS PCEA2](https://www.nexusmods.com/skyrimspecialedition/mods/13281). This means that you can't have both installed.

Links:

- [Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main)
- [Nemesis PCEA](https://www.nexusmods.com/skyrimspecialedition/mods/31667)

### Cathedral Mods

"_The [Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/19515) is a comprehensive visual overhaul for Skyrim. It is performance friendly, consisting mostly of re-textures, improved models, and lighting modifications, so that you can use it as a foundation without having to worry extensively about compatibility_". - Introduction for the Cathedral mods

I choose to use most of the Cathedral mods in this Modlist for the reasons above. The most important one you need to watch out for is [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791). This is the weather mod for the Modlist and if you want to swap out the ENB, than you need one that is compatible with this weather mod.

Links:

- [Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/19515)(unreleased)
- [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791)
- [Majestic Mountains - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/11052)
- [Landscapes - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/21954)
- [Luminosity Lighting Overhaul - The Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/16830)
- [8K Night Skies - Stars and Galaxies - Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/20301)
- [Cathedral Water Overhaul - Includes Water Edge Bug Fix](https://www.nexusmods.com/skyrimspecialedition/mods/22962)

### ENB: Ljoss

ENBs for Special Edition never really convinced me. [SnowFall Weathers](https://www.nexusmods.com/skyrim/mods/79335) singlehandedly made me stay with Oldrim for 3 years since it came out. I choose [Ljoss](https://www.nexusmods.com/skyrimspecialedition/mods/30971) for this Modlist, mainly because of its performance and set of features. It is also compatible with [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791), the weather mod of this list.

If you have a Titan V and more FPS than you need, check the [ENB](#enb) section for ENBs you can swap to.

Links:

- [Ljoss - Semi-realistic performance preset with Nighteye and ENB Light support](https://www.nexusmods.com/skyrimspecialedition/mods/30971)

## Adding more mods

**Read the [Important Mods you should know about](#important-mods-you-should-know-about) sections first**

If you want to add more mods to this setup than I'm glad you have found your way here. Do note that adding mods to any Modlist, not marked as **modular** or **expandable**, requires decent enough knowledge about modding and working with tools like [xEdit](https://github.com/TES5Edit/TES5Edit), [zEdit](https://github.com/z-edit/zedit) and [Mator Smash](https://www.nexusmods.com/skyrim/mods/90987).

### Textures

Probably the most easiest type of mods you can add to any setup. The only thing you need to look out for are LODs.

### Outfits

This Modlist uses [CBBE 3BBB](https://www.nexusmods.com/skyrimspecialedition/mods/30174) as its body so make sure you download outfits made for CBBE. Since [HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/30872) and [CBPC](https://www.nexusmods.com/skyrimspecialedition/mods/21224) are both installed, you can also install and use outfits marked with _Physics_.

### Animations

[Nemesis](https://github.com/ShikyoKira/Project-New-Reign---Nemesis-Main) has a similar workflow like [FNIS](https://www.nexusmods.com/skyrimspecialedition/mods/3038):

1) Install the mod with new Animations
2) Open Nemesis
3) Check for any Patches you might need to add
4) Click _Update Engine_ (may take a while)
5) Click _Launch Nemesis Behavior Engine_ (may also take some time)

If you want to add _Player only_ animations, checkout [Nemesis PCEA](https://www.nexusmods.com/skyrimspecialedition/mods/31667).

### ENB

The weather mod used in this Modlist is [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791) and the lighting mods are [Luminosity Lighting Overhaul - The Cathedral Concept](https://www.nexusmods.com/skyrimspecialedition/mods/16830) (see [Cathedral Mods](#cathedral-mods)) and [Enhanced Lighting for ENB (ELE)](https://www.nexusmods.com/skyrimspecialedition/mods/1377). If you want to swap out the ENB, make sure that it is compatible with Cathedral Weathers and looks somewhat decent with Luminosity and ELE. You could try and swap the those two mods with any other weather + lighting mod but this may disrupt the visual consistency that the entire Cathedral lineup has.

Other ENBs you can use (not tested, experience may vary):

ENBs that work with Cathedral Weathers:

- [Silent Horizon](https://www.nexusmods.com/skyrimspecialedition/mods/21543)

ENBs that maybe work with Cathedral Weathers:

- [Rudy ENB](https://www.nexusmods.com/skyrimspecialedition/mods/4796)
- [NVT](https://www.nexusmods.com/skyrimspecialedition/mods/11203)
- [PRT](https://www.nexusmods.com/skyrimspecialedition/mods/4743)
- [Apex](https://www.nexusmods.com/skyrimspecialedition/mods/18042)

## Tweaking Performance

My Setup:

- i7-7700k running at ~4.6GHz
- 1060 6GB overclocked to ~1800MHz
- 16GB of DDR4-3200 RAM
- Game and MO2 running on an SSD

My FPS:

- Outside in a dense forest: 50-65
- Inside (anywhere): 60-120 (depending on the amount of particles)
- During combat (no magic): 70
- During combat (mage vs non mage): 65
- During combat (mage vs mage): 50

You may or may not have more or less FPS somewhere depending on your specific specs. Here are some tips on how to get more:

### Tweaking the ENB

This should always be the first thing you tweak. Disabling the ENB entirely can give you up to anything from 20 to >70 FPS. The ENB this Modlist comes with (see [ENB: Ljoss](#enb-ljoss)) is very performance friendly. Open the ENB GUI using `Right Shift + Enter` (`Right Shift` is under the `Enter` key). This will open up the ENB GUI where you can enable and disable certain effects in the left panel.

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

## Removing the Modlist from your System

Since we are using MO2 as our Mod Manager the removal of this Modlist is very simple. Remove the MO2 folder and you're done. Of course there are still your save files in the documents folder and your game folder still contains SKSE and the ENB. I recommend using the [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) to remove the enb leftovers from your game folder.

To uninstall SKSE, remove all files starting with `skse64_*`.

## Contact

While I'm always available on the [Wabbajack Discord]([https://](https://discord.gg/wabbajack)), I would advise checking the [Issues](https://github.com/erri120/lotus/issues) on GitHub first if you have any problems. Since messages in Discord can get buried very quickly, you should also post _Enhancements_ or _Feature Requests_ in the [Issues](https://github.com/erri120/lotus/issues) tracker.
